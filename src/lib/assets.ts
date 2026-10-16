/** Resolves a path inside public/projects/<slug>/ (works under any Vite base). */
export function projectAsset(slug: string, file: string): string {
  return `${import.meta.env.BASE_URL}projects/${slug}/${file}`;
}

// Screenshots dropped into src/assets/projects/<slug>/ are picked up at build
// time. Using a glob (instead of fixed URLs) means a slot whose file has not
// been added yet simply resolves to undefined — no broken image, no 404.
const galleryFiles = import.meta.glob('../assets/projects/*/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

/** URL of src/assets/projects/<slug>/<name>.<ext>, or undefined if not added yet. */
export function galleryAsset(slug: string, name: string): string | undefined {
  const prefix = `../assets/projects/${slug}/${name}.`;
  const key = Object.keys(galleryFiles).find((file) => file.startsWith(prefix));
  return key ? galleryFiles[key] : undefined;
}
