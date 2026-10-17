import { getModelById } from "@/app/lib/model";

import type { ModelDetailPageProps } from "@/app/types";

export default async function SiglePost({ params }: ModelDetailPageProps) {
  const { id } = await params;
  const model = await getModelById(id);

  return <> {model.name} </>;
}
