import Link from "next/link";
import Particles from "./components/particles";
import { Navigations } from "@/utils/constants";
import Footer from "./components/footer";
import Button from "./components/button";
import GenerateCV, { generateCV } from "@/utils/generateCV";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {Navigations.filter((item) => item.show && item.href !== '/').map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl font-semibold text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Muhamad Zaky
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 px-2">
          A Front-end Developer - Building React.js web application for over 5 years.
        </h2>

        <div className="flex justify-center items-center text-zinc-500 gap-5 mt-3">
          {['react', 'next-js', 'javascript', 'typescript'].map((item) => (
            <img key={item} src={`/assets/images/${item}-grey.svg`} className="rounded-sm" alt={item} width={30} loading="lazy" />
          ))}
        </div>

        <GenerateCV />

        <div className="flex justify-center items-center text-zinc-500 gap-5 mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}
