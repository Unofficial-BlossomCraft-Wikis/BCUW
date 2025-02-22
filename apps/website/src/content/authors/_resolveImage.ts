import type { CollectionEntry } from "astro:content";

const allImages = import.meta.glob<{ default: ImageMetadata }>(
	"/src/content/authors/_images/*.{png,jpg,jpeg,webp}",
);

export async function resolveImage(entry: CollectionEntry<"authors">) {
	if (!entry.data.pfp) {
		return undefined;
	}

  const pfp: string = entry.data.pfp
  
  if (pfp.startsWith("https://")) {
    return {
      src: pfp,
    }
  }

	if (!(entry.data.pfp in allImages)) {
		throw new Error(
			`[authors] Image for "${entry.data.pfp}" not found! Provided: "${entry.data.pfp}", is there a typo?`,
		);
	}

	const { default: image } = await allImages[entry.data.pfp]();

	return image;
}