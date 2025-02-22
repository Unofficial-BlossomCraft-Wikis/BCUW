import type { APIRoute } from "astro";
import { experimental_AstroContainer } from "astro/container";
import { getCollection, type CollectionEntry, render } from "astro:content";
import reactRenderer from "@astrojs/react/server.js";
import mdxRenderer from "@astrojs/mdx/server.js";
import { z } from "astro:content";

const V1APIResponse = z.object({
  slug: z.string(),
  body: z.string(),
  metadata: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    authors: z.array(z.string()),
    proofreaders: z.array(z.object({name: z.string(), isAuthor: z.boolean()})).optional(),
    footnote: z.string().optional(),
    isDraft: z.boolean(),
    socialImage: z.string().optional(),
    coverImage: z.string().optional(),
    coverImageURL: z.string().optional(),
  }),
});

export const GET: APIRoute = async ({ params, request }) => {
  const allItems = await getCollection("tutorials");
  // @ts-expect-error error be gone
  const formattedItems: z.infer<typeof V1APIResponse>[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"tutorials">) => {
      if (item.data.isDraft) {
        return null;
      }
      const container = await experimental_AstroContainer.create();
      container.addServerRenderer({
        renderer: mdxRenderer,
        name: "",
      });

      container.addServerRenderer({
        renderer: reactRenderer,
        name: "",
      });
      container.addClientRenderer({
        name: "@astrojs/react",
        entrypoint: "@astrojs/react/client.js",
      });
      const { Content } = await render(item);
      const result = await container.renderToString(Content);
      return {
        slug: item.slug,
        body: result,
        metadata: item.data,
      };
    })
  );
  return new Response(
    JSON.stringify({
      turorials: formattedItems,
    })
  );
};

export type V1TutorialsAPIResponse = z.infer<typeof V1APIResponse>;
