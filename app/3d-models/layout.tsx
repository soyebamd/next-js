import getAllCategories from "@/app/data/categories-slug.json";

export default function RootLayout({ children }) {
  const getCategories = getAllCategories;

  const result = getCategories.map((item) => (
    <li key={item.slug}>
      <a href={`/3d-models/category/${item.slug}`}>{item.displayName}</a>
    </li>
  ));

  return (
    <>
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <div className="">
          <nav>{result}</nav>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
