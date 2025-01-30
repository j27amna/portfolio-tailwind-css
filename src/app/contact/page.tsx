import React from 'react'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <main className='w-full h-screen bg-contact-image bg-no-repeat bg-center bg-cover'>
      <div className='card z-0'>
        <div className='rounded-[10px] max-w-lg ml-96 left-32 mt-10 p-10 pr-11 bg-blue-100 justify-center items-center absolute z-10' >
            <h2 className='text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to bg-pink-400
            text-[40px] font-semibold text-center mt-5 mb-6 text-balance'>Contact Me</h2>
            <form>
                <input type="text" placeholder='First name' className='w-full px-2 py-1 mb-3 bg-cyan-50 border border-blue-400 rounded-md' required/>
                <input type="text" placeholder='Last name' className='w-full px-2 py-1 mb-3 bg-cyan-50 border border-blue-400 rounded-md' required/>
                <input type="email" placeholder='Email' className='w-full px-2 py-1 mb-3 bg-cyan-50 border border-blue-400 rounded-md' required/>
                <input type="tel" placeholder='Phone number' className='w-full px-2 py-1 mb-3 bg-cyan-50 border border-blue-400 rounded-md' required/>
                <textarea rows={7} placeholder='Message' className='w-full px-2 py-1 mb-3 bg-cyan-50 border border-blue-400 rounded-md'></textarea>
                <button type='submit' className='px-8 py-2 items-center justify-center inline-block text-[#FFFFFF] font-bold text-xl cursor-pointer rounded 
                bg-gradient-to-b from-blue-300 to-pink-300 hover:shadow-lg hover:bg-gradient-to-t hover:from-blue-300 hover:to-pink-400'>Send Message</button>
            </form>
            </div>
        </div>
    </main>
    <Footer />
    </>
  )
}

export default page
