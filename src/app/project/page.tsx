import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <main className='w-full h-full bg-contact-image bg-cover bg-no-repeat relative position-center'>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to bg-pink-400
            text-5xl font-bold text-center text-balance mb-3">MY PROJECTS</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Presenting a selection of creative and user-focused projects that demonstrate my skills in front-end development and modern web technologies.</p>
    </div>
    <div>
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
        <h2 className="sm:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to bg-pink-400
            text-[20px] font-bold text-center text-balance mb-2">NextJS Projects</h2>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Built a pixel-perfect website twice—first with custom CSS for precision and flexibility, then with Tailwind CSS for a faster and more efficient workflow.</p>
        </div>
        <div className="flex flex-row -m-4">
         <div className="xl:w-1/2 md:w-1/1 p-4 justify-center items-center">
          <div className="border border-purple-300 shadow-md p-6 rounded-lg text-center hover:after:p-8 hover:after:border-pink-600">
          <Link href="https://ecommerce-custom-css.vercel.app/">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ecommerce Website With Custom CSS</h2>
          <Image src="/woodico-css.jpg" width="400" height="400" alt="woodico (Nextjs Project)" className='ml-40 my-4 relative w-auto h-40' />
          <p className="leading-relaxed text-base">A modern e-commerce website built with <b>Next.js</b> and <b>custom CSS,</b> delivering a seamless and responsive shopping experience. This project focuses on optimized performance, clean design, and a user-friendly interface.</p>
          </Link>
        </div>
        </div>
        <div className="xl:w-1/2 md:w-1/1 p-4">
          <div className="border border-purple-300 shadow-md p-6 rounded-lg text-center  hover:after:p-8 hover:after:border-pink-600">
          <Link href="https://ecommerce-tailwind-hwvn8nc7x-amna-jehanzebs-projects.vercel.app/?vercelToolbarCode=4s-5F6QSUkO92gM">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ecommerce Website With Tailwind CSS</h2>
          <Image src="/woodico-css.jpg" width="400" height="400" alt="woodico (Nextjs Project)" className='w-auto h-40 relative ml-40 my-4' />
          <p className="leading-relaxed text-base">A modern e-commerce website built with <b>Next.js</b> and <b>Tailwind CSS,</b> delivering a seamless and responsive shopping experience. This project focuses on optimized performance, clean design, and a user-friendly interface.</p>
          </Link>
        </div>
       </div>
      </div>
    </div>
    <div className="flex flex-wrap w-full my-10 flex-col items-center text-center">
    <h2 className="sm:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to bg-pink-400
            text-[20px] font-bold text-center text-balance mb-2">HTML5 & CSS Projects</h2>
    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Explore my HTML and CSS projects, where I've transformed creative designs into reality using clean and semantic code layouts. Ranging from static websites to dynamic, interactive components, these projects highlight my attention to detail and expertise in modern web styling techniques.</p>
    </div>
    <div className="flex flex-row -m-4">
    <div className="xl:w-1/2 md:w-1/1 p-4 justify-center items-center">
        <div className="border border-purple-300 shadow-md p-6 rounded-lg text-center hover:after:p-8 hover:after:border-pink-600">
          <Link href="https://registration-form-css.vercel.app/">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Registration Form</h2>
          <Image src="/form.jpg" width="400" height="400" alt="woodico (Nextjs Project)" className='ml-40 my-4 relative w-auto h-40' />
          <p className="leading-relaxed text-base">A modern and responsive registration form, designed to enhance your user experience built with efficient <b>HTML</b> and <b>CSS</b> code.</p>
          </Link>
        </div>
     </div>
     <div className="xl:w-1/2 md:w-1/1 p-4 justify-center items-center">
        <div className="border border-purple-300 shadow-md p-6 rounded-lg text-center hover:after:p-8 hover:after:border-pink-600">
        <Link href="https://resume-builder-flame-one.vercel.app/">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Resume Builder</h2>
          <Image src="/resume.jpg" width="400" height="400" alt="woodico (Nextjs Project)" className='ml-40 my-4 relative w-auto h-40' />
          <p className="leading-relaxed text-base">Resume Builder A responsive web page built with <b>HTML, CSS,</b> and <b>TypeScript</b> for creating, editing, and printing professional resumes. Features include a user-friendly interface, real-time preview, and print-ready formatting.</p>
          </Link>
        </div>
     </div>
    </div>
    <div className="flex flex-wrap w-full my-10 flex-col items-center text-center">
    <h2 className="sm:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to bg-pink-400
            text-[20px] font-bold text-center text-balance mb-2">TypeScript Projects</h2>
    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Check out my TypeScript projects, where I've utilized type safety and modern development techniques to build scalable, maintainable, and efficient web applications. These projects showcase my skill in writing clean, robust code while effectively integrating TypeScript with the latest frameworks and libraries.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-purple-300 shadow-md p-6 rounded-lg hover:after:p-8 hover:after:border-pink-600">
          <Link href="https://github.com/j27amna/Adventure-Game">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Adventure Game</h2>
          <p className="leading-relaxed text-base">Suit up and embark on an epic adventure in this thrilling hero vs villain Game!</p>
          </Link>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-purple-300 shadow-md p-6 rounded-lg hover:after:p-8 hover:after:border-pink-600">
          <Link href="https://github.com/j27amna/Student-Management-System-">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Student Management System</h2>
          <p className="leading-relaxed text-base">This is a student management system designed to help users enroll in their desired courses and efficiently manage the institute's operations.</p>
          </Link>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-purple-300 shadow-md p-6 rounded-lg hover:after:p-8 hover:after:border-pink-600">
          <Link href="https://github.com/j27amna/Word-Counter">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Word Counter</h2>
          <p className="leading-relaxed text-base">Struggling to keep track of your word count? This handy tool can count the words in your essay, favorite song or even poetry --just paste it in!</p>
          </Link>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-purple-300 shadow-md p-6 rounded-lg hover:after:p-8 hover:after:border-pink-600">
          <Link href="https://github.com/j27amna/Countdown-Timer">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Countdown Timer</h2>
          <p className="leading-relaxed text-base">Ready, set, GO! This countdown timer will keep you on track.</p>
          </Link>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-purple-300 shadow-md p-6 rounded-lg hover:after:p-8 hover:after:border-pink-600">
          <Link href="https://github.com/j27amna/Calculators-j27amna">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Calculators</h2>
          <p className="leading-relaxed text-base">Don't worry if you're stuck on a math problem! These awesome calculators can help you conquer any equation.</p>
          </Link>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-purple-300 shadow-md p-6 rounded-lg hover:after:p-8 hover:after:border-pink-600">
          <Link href="https://github.com/j27amna/Currency-Convertor">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Currency Convertor</h2>
          <p className="leading-relaxed text-base">Need to know the exchange rate for your next trip? This currency convertor can help!</p>
          </Link>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-purple-300 shadow-md p-6 rounded-lg hover:after:p-8 hover:after:border-pink-600">
          <Link href="https://github.com/j27amna/OOP">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Object-Oriented Programming</h2>
          <p className="leading-relaxed text-base">Dive deeper into object-oriented programming (OOP) with this project! You'll explore concepts like classes, objects, inheritance, and more.</p>
          </Link>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-purple-300 shadow-md p-6 rounded-lg hover:after:p-8 hover:after:border-pink-600">
          <Link href="https://github.com/j27amna/TypeScript-Quiz">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">TypeScript Quiz</h2>
          <p className="leading-relaxed text-base">Test your understanding of data types, functions, and other key concepts to solidify your TypeScript knowledge with this intermediate level Quiz.</p>
          </Link>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-purple-300 shadow-md p-6 rounded-lg hover:after:p-8 hover:after:border-pink-600">
          <Link href="https://github.com/j27amna/ATM">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">ATM</h2>
          <p className="leading-relaxed text-base">Code the future of banking with this exciting ATM project</p>
          </Link>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center'>
    <Link href="https://github.com/j27amna"><button className="my-8 inline-flex text-white font-bold text-xl bg-gradient-to-b from-blue-300 to-pink-400 border-0 py-2 px-8 focus:outline-none rounded-lg
        hover:bg-gradient-to-t hover:from-blue-300 hover:to-pink-400 hover:shadow-lg ">My GitHub <a className='mx-2 mt-1' ><FaGithub /></a></button>
    </Link>
    </div>
  </div>
</section>
</main>
  )
}

export default Projects