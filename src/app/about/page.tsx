import React from 'react'

const page = () => {
  return (
    <main>
        <section className='flex flex-row bg-purple-100'>
            <div className='w-[60%]'>
            <h2 className='text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to bg-pink-400
            text-[50px] font-semibold text-center mt-10 mb-6 text-balance'>About Me</h2>
            <p className='mx-12 mb-2 text-lg font-medium'>Hello! I'm a passionate and detail-oriented <b className='text-purple-950'>front-end developer</b> with a strong background in modern web development technologies and a genuine love for crafting intuitive, user-friendly interfaces. My journey into programming started with a deep curiosity about how the web functions, which quickly transformed into a dedicated effort to create high-quality digital experiences.</p>
            <p className='mx-12 text-lg font-medium my-2'>I specialize in utilizing <b className='text-purple-950'>Next.js</b> and <b className='text-purple-950'>Tailwind CSS</b> to develop pixel-perfect, responsive web applications. I enjoy translating <b className='text-purple-950'>Figma designs</b> into clean, functional code that harmonizes aesthetics with performance. My experience includes working on dynamic projects, such as an e-commerce website for a furniture store, where I implemented efficient, interactive features that enhance the user experience.</p>
            <p className='mx-12 text-lg font-medium my-2'>I am also committed to continuous learning. As a student at <b className='text-purple-950'>PIAIC</b> (Presidential Initiative for Artificial Intelligence & Computing) and <b className='text-purple-950'>GIAIC</b> (Governor Initiative FOR ARTIFICIAL INTELLIGENCE, WEB 3.0 & METAVERSE), I have been broadening my skill set in areas like <b className='text-purple-950'>TypeScript</b> and <b className='text-purple-950'>Generative AI.</b> These programs have refined my technical expertise and problem-solving skills, providing me with a wider perspective on the ever-evolving landscape of technology.</p>
            <p className='mx-12 text-lg font-medium my-2'>Outside of coding, I'm a multitasker at heart, balancing my web development endeavors with college studies and my passion for exploring the intersections of science and technology. I firmly believe that the best solutions arise from merging creativity with analytical thinking, and I tackle every challenge with a positive attitude and a desire to learn.
            </p>
            <p className='mx-12 text-lg font-medium my-2'>Whether it's collaborating on impactful projects, contributing to open-source, or building sleek, user-centric applications, I'm always eager to grow and make a meaningful impact in the tech world.</p>
            <video className='relative w-[50%] content-center rounded-xl overflow-hidden ml-52' loop muted autoPlay>
                <source src='/video2.mp4' />
            </video>
            <p className='font-bold text-center my-3'><em>Let's create something amazing together!</em></p>
            </div>
            <div className='relative w-[40%] max-w-6xl mx-11 items-end my-8 rounded-xl rounded-b-xl overflow-hidden'>
            <video className='w-full' loop muted autoPlay>
                <source src='/video1.mp4' />
            </video>
        </div>
        </section>
    </main>
  )
}

export default page