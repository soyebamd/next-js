import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4 mb-5 ">
      <div className="w-full max-w-[1200px] mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/3d-models">3D Models</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
