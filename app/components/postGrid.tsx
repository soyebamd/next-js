import { getAllModels, getModelByCategorySlug } from "@/app/lib/model";
import type { Model } from "@/app/types";
import { GridLayout } from "@/app/components/gridLayout";

export default async function ModelsData({
  categorySlug,
}: {
  categorySlug?: string;
}) {
  const getData = categorySlug
    ? await getModelByCategorySlug(categorySlug)
    : await getAllModels();

  const dataWherehouse = getData.map((item: Model) => (
    <GridLayout
      key={item.id}
      id={item.id}
      cat_link={`/3d-models/${item.id}`}
      cat_name={item.name}
      description={item.description}
      likes={item.likes}
      category={item.category}
      image={item.image}
    />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dataWherehouse}
    </div>
  );
}
