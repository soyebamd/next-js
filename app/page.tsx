import Image from "next/image";
import Cube from "@/public/Cube.jpg";
import { getAllModels } from "./lib/model";

export default async function Home() {
  return (
    <>
      <div className="p-1.5 my-2 max-w-5xl mx-auto">
        <Image
          src={Cube}
          alt="Outlined cube with arrows indicating its dimensions"
          sizes="(max-width: 620px) 100vw, 1820px"
          className="w-full max-w-[200px] h-auto mx-auto sm:w-[200px]"
          preload
        />

        <h1 className="text-2xl font-bold text-center my-4 text-red-500">
          Discover what’s possible with 3D printing
        </h1>

        <div className="text-center text-sm sm:text-base">
          <p>
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing.
          </p>
          <p>
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>
      </div>
    </>
  );
}
