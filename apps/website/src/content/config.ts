import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    authors: z.array(z.string()),
    footnote: z.string().optional(),
    isDraft: z.boolean(),
    socialImage: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

const tutorialsCollection = defineCollection({
  schema: z.object({
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

const itembcCollection = defineCollection({
  schema: z.object({
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
    crate: reference("crates").optional(),
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
    multiinstancebaseitem: reference("bcitems").optional(),
  }),
});

const crateCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    release: z.date(),
    cratePreview: z.array(z.string()),
    items: z.array(reference("bcitems")),
    tags: z.array(z.enum(["infinite crate", "season", "lt", "holiday", "other"])),
    warpKeyShopPurchasable: z.boolean().optional().default(true),
    warpKeyShopPrice: z.number().optional(),
    shopPurchasable: z.boolean().default(false),
    shopPrice: z.number().optional(),
  }),
});

const authors = defineCollection({
  schema: z.object({
    name: z.string(),
    MCusername: z.string(),
    BCusername: z.string(),
    role: z.string(),
    pfp: z.string().url(),
  }),
});

const announcementsCollection = defineCollection({
  schema: z.object({
    poster: z.string(),
    publishDate: z.date(),
  }),
});

const patchnotesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
  }),
});

export const collections = {
  blog: blogCollection,
  authors: authors,
  bcitems: itembcCollection,
  crates: crateCollection,
  tutorials: tutorialsCollection,
  announcements: announcementsCollection,
  patchnotes: patchnotesCollection,
};
