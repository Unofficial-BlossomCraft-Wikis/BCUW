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
      release: z.date().optional(),
      images: z.object({
        color: z.string(),
        colornotes: z.array(z.object({
          type: z.enum(['note', 'tip', 'caution', 'danger']),
          title: z.string().optional(),
          content: z.string(),
        })).optional(),
        item: z.string(),
      }),
      type: z.enum(["magic/infinite", "weapon", "armor", "consumable", "tool", "key", "other"]),
      crate: z.any().optional(),
      cratequantity: z.number().optional(),
      rarity: z
        .enum(["common", "uncommon", "rare", "epic", "legendary"])
        .optional(),
      enchantments: z.array(z.string()).optional(),
      unmodifiable: z.boolean().optional(),
      unbreaking: z.boolean().optional(),
      winChance: z.number().optional(),
      multiinstance: z.boolean().optional(),
      multiinstanceuuid: z.string().default("00000000-0000-0000-0000-000000000000"),
      multiinstancebaseitem: z.any().optional(),
    }),
});

export const GET: APIRoute = async ({ params, request }) => {
  const allItems = await getCollection("bcitems");
  const formattedItems: z.infer<typeof V1APIResponse>[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"bcitems">) => {
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
      items: formattedItems,
    })
  );
};

export type V1ItemsAPIResponse = z.infer<typeof V1APIResponse>;
