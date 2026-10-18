import Image from "next/image";
import Link from "next/link";

export function GridLayout({
  id,
  cat_link,
  cat_name,
  description,
  likes,
  category,
  image,
}) {
  return (
    <div key={id} className="my-5">
      <Link href={cat_link}>
        <h2>{cat_name}</h2>
      </Link>
      <p>{description}</p>
      <p>Likes: {likes}</p>
      <p>Category: {category}</p>
      <Image
        loading="eager"
        src={image}
        alt={cat_name}
        width={500}
        height={500}
      />
    </div>
  );
}
