import { getCategoryBySlug } from "@/app/lib/categories";
import PostGrid from "@/app/components/postGrid";
import { Suspense } from "react";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default function ModelsData({ params }: CategoryPageProps) {
  return (
    <Suspense fallback={<p>Loading category...</p>}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

async function CategoryContent({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);

  return (
    <section>
      <h1>{category.displayName}</h1>
      <PostGrid categorySlug={slug} />
    </section>
  );
}
