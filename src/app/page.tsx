import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
  <main className="w-screen h-screen relative">
    <div className="flex items-center w-full h-full bg-cover bg-gradient-to-br from-pink-100 to bg-blue-200">
      <div className="pl-20 md:pl-30 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
        <h1 className="text-[50px] font-semibold text-blue-400">
          I'm a
          <span className="text-transparent m-3 bg-clip-text bg-gradient-to-r from-blue-400 to bg-pink-300">
            WEB DEVELOPER
          </span>
        </h1>
        <p className="text-gray font-medium hidden md:block">As a dedicated web developer, I specialize in crafting innovative and user-friendly digital experiences. With a strong foundation in HTML, CSS & TypeScript and a passion for cutting-edge technologies, I am skilled in developing responsive websites that seamlessly adapt to various devices. </p>
      </div>
      <div className="flex flex-row md:flex-row md:flex">
          <Image className="flex object-cover ml-16" src="/ico.jpg" alt="image" width="600" height="250"/>
        </div>
    </div>
      <Hero/>
      <Footer/>
  </main>  
  );
}
