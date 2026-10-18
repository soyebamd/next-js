import modelsData from "../data/models.json";
import type { Model } from "@/app/types";

//Get all
export async function getAllModels(): Promise<Model[]> {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in models.json for now.

  return modelsData;
}

//get by ID

export async function getModelById(id: string | number): Promise<Model> {
  const getSingleEntry = modelsData.find(
    (item: Model) => item.id.toString() === id.toString(),
  );

  if (!getSingleEntry) {
    throw new Error("<p>data not found</p>");
  }

  return getSingleEntry;
}

export async function getModelByCategorySlug(slug: string): Promise<Model[]> {
  const categoryModels = modelsData.filter(
    (item: Model) => item.category === slug,
  );

  return categoryModels;
}
