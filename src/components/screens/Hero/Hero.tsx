import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { urlFor } from "../../../../sanity";

import BackgroundCircles from "../../ui/BackgroundCircles";
import NavBar from "../../ui/NavBar/NavBar";
import { PageInfo } from "@/types/typings";

interface IHero {
  pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: IHero) => {
  const [text, count] = useTypewriter({
    words: ["Developer", "Designer", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative h-32 w-32 mx-auto py-6">
        <Image
          draggable="false"
          src={urlFor(pageInfo?.heroImage).url()}
          className="object-contain"
          alt="me"
          width={128}
          height={128}
        />
      </div>
      <div className="z-20">
        {" "}
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <NavBar classname="pt-5" />
      </div>
    </div>
  );
};

export default Hero;
