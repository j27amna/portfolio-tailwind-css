import React from 'react'

const page = () => {
  return (
    <main className='w-full h-screen bg-contact-image bg-cover bg-no-repeat relative position-center'>
        <section className='border max-w-lg ml-96 left-32 mt-20 p-10 pr-11 bg-blue-100 shadow-lg justify-center items-center absolute' >
            <h2 className='text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to bg-pink-400
            text-[40px] font-semibold text-center mt-5 mb-6 text-balance'>Contact Me</h2>
            <form>
                <input type="text" placeholder='First name' className='w-full px-2 py-1 mb-3 bg-cyan-50 border border-blue-400 rounded-md' required/>
                <input type="text" placeholder='Last name' className='w-full px-2 py-1 mb-3 bg-cyan-50 border border-blue-400 rounded-md' required/>
                <input type="email" placeholder='Email' className='w-full px-2 py-1 mb-3 bg-cyan-50 border border-blue-400 rounded-md' required/>
                <input type="tel" placeholder='Phone number' className='w-full px-2 py-1 mb-3 bg-cyan-50 border border-blue-400 rounded-md' required/>
                <textarea rows={7} placeholder='Message' className='w-full px-2 py-1 mb-3 bg-cyan-50 border border-blue-400 rounded-md'></textarea>
                <button type='submit' className='px-8 py-2 items-center inline-block text-white font-bold text-xl cursor-pointer rounded 
                bg-gradient-to-b from-blue-300 to-pink-400 hover:shadow-lg hover:bg-gradient-to-t hover:from-blue-300 hover:to-pink-400'>Send Message</button>
            </form>
        </section>
    </main>
  )
}

export default page
