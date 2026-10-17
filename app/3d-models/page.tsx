import { getAllModels } from "@/app/lib/model";
import type { Model } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

export default async function ModelsData() {
  const getData = await getAllModels();

  const dataWherehouse = getData.map((item: Model) => (
    <div key={item.id} className="my-5">
      <Link href={`/3d-models/${item.id}`}>
        <h2>{item.name}</h2>
      </Link>
      <p>{item.description}</p>
      <p>Likes: {item.likes}</p>
      <p>Category: {item.category}</p>
      <Image
        loading="eager"
        src={item.image}
        alt={item.name}
        width={500}
        height={500}
      />
    </div>
  ));

  return <div className="p-6">{dataWherehouse}</div>;
}
