import data from "@/app/data/categories-slug.json";

export default function getAllCategories() {
  return data;
}

export function getCategoryBySlug(slug: string) {
  const getSingleEntry = data.find((item) => item.slug === slug);
  if (!getSingleEntry) {
    throw new Error("<p>data not found</p>");
  }
  return getSingleEntry;
}

export function getCategoryByName(name: string) {
  const getSingleEntryName = data.find((item) => item.displayName === name);
  if (!getSingleEntryName) {
    throw new Error("<p>data not found</p>");
  }
  return getSingleEntryName;
}
