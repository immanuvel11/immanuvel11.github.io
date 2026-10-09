/** Resolves a path inside public/projects/<slug>/ (works under any Vite base). */
export function projectAsset(slug: string, file: string): string {
  return `${import.meta.env.BASE_URL}projects/${slug}/${file}`;
}
