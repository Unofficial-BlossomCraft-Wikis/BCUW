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
      release: z.date(),
      cratePreview: z.array(z.string()),
      items: z.any(),
      tags: z.array(z.enum(["infinite crate", "season", "lt", "holiday", "other"])),
      warpKeyShopPurchasable: z.boolean().optional().default(true),
      warpKeyShopPrice: z.number().optional(),
      shopPurchasable: z.boolean().default(false),
      shopPrice: z.number().optional(),
    }),
});

export const GET: APIRoute = async ({ params, request }) => {
  const allItems = await getCollection("crates");
  const formattedItems: z.infer<typeof V1APIResponse>[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"crates">) => {
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
      crates: formattedItems,
    })
  );
};

export type V1CratesAPIResponse = z.infer<typeof V1APIResponse>;
