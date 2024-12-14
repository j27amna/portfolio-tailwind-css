import React from 'react'
import Link from 'next/link';
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-purple-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-950 mb-4 md:mb-0">
      <span className="ml-2 text-2xl font-bold bg-clip-gradient text-stone-700"><h1>AMNA JEHANZEB</h1></span>
    </a>
    <nav className="md:ml-auto flex flex-row gap-9 items-center text-base font-semibold justify-center">
      <Link className="mr-5 hover:text-gray-900" href='/'>Home</Link>
      <Link className="mr-5 hover:text-gray-900" href='\about'>About me</Link>
      <Link className="mr-5 hover:text-gray-900" href='\project'>Projects</Link>
      <Link className="mr-5 hover:text-gray-900" href='\contact'>Contact</Link>
      <a className='ml-5 text-gray-700 text-2xl gap-5 hover:text-gray-900'> <BsFillPersonLinesFill /></a>
    </nav>
  </div>
</header>
  )
}

export default Navbar