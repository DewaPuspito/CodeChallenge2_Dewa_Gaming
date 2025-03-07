import React from 'react'
import Navbar from '@/components/atomics/navbar.module'
import Footer from '@/components/atomics/footer.module'

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className='bg-container w-screen min-h-screen bg-white flex flex-col items-center'>
      <section className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url('/homepage.avif')` }}>
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold">Selamat Datang di DewaGaming</h1>
          <p className="mt-4 text-lg max-w-[800px] text-justify">
            DewaGaming Gameshop adalah destinasi utama bagi para gamer yang mencari pengalaman belanja game terbaik.
            Berdiri sejak tahun 2015, kami berkomitmen menyediakan berbagai produk gaming berkualitas mulai dari game PC,
            Playstation, PSP, Nintendo, Dll.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-8">
          <p className='text-justify text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit aliquid excepturi ducimus, 
            possimus dolor iure voluptas illo, praesentium deleniti voluptatum cupiditate ab cum fugit veritatis. 
            Sapiente aut neque corporis omnis molestiae expedita dignissimos, doloribus, aperiam quidem provident 
            vel perferendis dolores explicabo necessitatibus dolorum!
          </p>
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}