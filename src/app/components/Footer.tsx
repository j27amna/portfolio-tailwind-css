import React from 'react';
import Link from 'next/link';
import { TiSocialLinkedin } from "react-icons/ti";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { SiVercel } from "react-icons/si";

const Footer = () => {
  return (
    <footer className='bg-blue-100 h-full w-full mb-[-500px] py-11'>
      <hr className='bg-gray-700 shadow-2xl'/>
      <hr className='bg-gray-700 shadow-2xl'/>
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="lg:w-1/6 md:w-1/2 ml-48">
         <h2 className="title-font font-bold text-gray-900 text-lg mb-8">Links</h2>
         <nav className="list-none mb-10">
           <li>
             <Link className="text-gray-700 hover:text-black my-2" href="/">Home</Link>
           </li>
           <li>
             <Link className="text-gray-700 hover:text-black my-2" href="\about">About</Link>
           </li>
           <li>
             <Link className="text-gray-700 hover:text-black my-2" href="\project">Services</Link>
           </li>
           <li>
             <Link className="text-gray-700 hover:text-black my-2" href="\contact">Contact</Link>
           </li>
         </nav>
       </div>
       <div className='w-3/6 mr-48 text-center'>
        <h2 className='text-900 font-bold text-justify-center mb-4'>FEEDBACK</h2>
        <br />
        <input type="text" placeholder='Enter your Feedback' className='px-20 py-6 text-center rounded-2xl'/>
        <br />
        <button className='mt-5 border border-gray-700 rounded-full px-12 py-3 items-center text-gray-700 
         hover:border-black hover:shadow-xl hover:px-14'>Submit</button>
       </div>
       <div className="lg:w-1/6 md:w-1/2 w-full px-8">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-8 mr-16"> Contact</h2>
        <nav className="list-none mb-10">
          <li className=" text-gray-700 hover:text-black my-2">123, Maple Street, Karachi.</li>
          <div className='flex flex-row gap-2'>
          <Link className="text-gray-700 hover:text-blue-500 mt-2 text-lg hover:text-2xl" href="https://www.linkedin.com/in/j27amna/"><TiSocialLinkedin /></Link>
          <Link className="text-gray-700 hover:text-black mt-2 text-lg hover:text-2xl" href="https://github.com/j27amna"><FaSquareGithub /></Link>
          <Link className="text-gray-700 hover:text-black mt-2 text-lg hover:text-2xl" href="https://portfolio-tailwind-css-phi.vercel.app/"><IoMdShare /></Link>
          <Link className="text-gray-700 hover:text-black mt-2 text-lg hover:text-2xl" href="https://vercel.com/amna-jehanzebs-projects"><SiVercel /></Link>
          </div>
        </nav>
       </div>
      </div>
    </footer>
   
  )
}

export default Footer
