import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-br from-blue-200 to bg-pink-100 py-20">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center ml-24 shadow-2xl" alt="hero" src="/heroimg.jpg" width="580" height="440"/>
    </div>
    <div className="ml-36 md:w-1/2 flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-end text-end">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Embracing 
        <a href="https://nextjs.org/"><span className='font-bold ml-3 hover:text-transparent  hover:bg-clip-text hover:bg-gradient-to-b from-pink-300 to-blue-500
        hover:font-extrabold'>Next.js </span></a>
        for Server-Side Rendering
      </h1>
      <p className="flex-col content-end mb-8 ml-11 items-end">I am currently deepening my expertise in front-end development by actively learning Next.js. I am excited about the potential of this framework to streamline the development process and create robust server-side applications. My goal is to leverage Next.js to build scalable and efficient web applications that deliver exceptional performance and user experiences.</p>
      <div className="flex-col justify-center">
        <Link href="\project">
        <button className="mx-6 inline-flex text-white font-bold text-xl bg-gradient-to-b from-blue-300 to-pink-400 border-0 py-2 px-8 focus:outline-none rounded-lg
        hover:bg-gradient-to-t hover:from-blue-300 hover:to-pink-400 hover:shadow-lg ">View Projects</button></Link>
        <Link href="\about">
        <button className="ml-2 inline-flex text-gray-700 text-xl font-semibold bg-gray-100 border-0 py-2 px-8 focus:outline-none hover:bg-pink-100 rounded-lg hover:px-9">Learn more...</button></Link>
      </div>
     </div>
  </div>
</section>   
  )
}

export default Hero

