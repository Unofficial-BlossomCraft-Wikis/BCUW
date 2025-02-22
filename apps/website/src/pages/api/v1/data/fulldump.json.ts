import type { APIRoute } from "astro";
import { experimental_AstroContainer } from "astro/container";
import { getCollection, type CollectionEntry, render } from "astro:content";
import reactRenderer from "@astrojs/react/server.js";
import mdxRenderer from "@astrojs/mdx/server.js";
import type { V1BlogAPIResponse } from "./blog/all.json";
import type { V1CratesAPIResponse } from "./crates/all.json";
import type { V1ItemsAPIResponse } from "./items/all.json";
import type { V1TutorialsAPIResponse } from "./tutorials/all.json";
import type { V1AuthorsAPIResponse } from "./authors/all.json";
import type { V1PatchnotesAPIResponse } from "./patchnotes/all.json";
import type { V1AnnouncementsAPIResponse } from "./announcements/all.json";

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      compatibilitydate: Date.now(),
      authors: await authors(),
      blogposts: await blogposts(),
      crates: await crates(),
      tutorials: await tutorials(),
      bcitems: await items(),
      patchnotes: await patchnotes(),
      announcements: await announcements(),
    })
  );
};

async function renderMDX(source: any) {
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
  const { Content } = await render(source);
  const result = await container.renderToString(Content);
  return result;
}

async function authors() {
  const allItems = await getCollection("authors");
  const formattedItems: V1AuthorsAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"authors">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: item.data,
      };
    })
  );
  return formattedItems;
}

async function items() {
  const allItems = await getCollection("bcitems");
  const formattedItems: V1ItemsAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"bcitems">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: item.data,
      };
    })
  );
  return formattedItems;
}

async function crates() {
  const allItems = await getCollection("crates");
  const formattedItems: V1CratesAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"crates">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: item.data,
      };
    })
  );
  return formattedItems;
}

async function tutorials() {
  const allItems = await getCollection("tutorials");
  const formattedItems: V1TutorialsAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"tutorials">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: item.data,
      };
    })
  );
  return formattedItems;
}

async function blogposts() {
  const allItems = await getCollection("blog");
  const formattedItems: V1BlogAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"blog">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: item.data,
      };
    })
  );
  return formattedItems;
}

async function patchnotes() {
  const allItems = await getCollection("patchnotes");
  const formattedItems: V1PatchnotesAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"patchnotes">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: item.data,
      };
    })
  );
  return formattedItems;
}

async function announcements() {
  const allItems = await getCollection("announcements");
  const formattedItems: V1AnnouncementsAPIResponse[] = await Promise.all(
    allItems.map(async (item: CollectionEntry<"announcements">) => {
      const result = await renderMDX(item);
      return {
        slug: item.slug,
        body: result,
        metadata: item.data,
      };
    })
  );
  return formattedItems;
}