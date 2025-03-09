'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/atomics/navbar.module'
import Footer from '@/components/atomics/footer.module'

export default function Landing() {

  const router = useRouter()

  function navigate(pathname: string) {
    router.push(pathname)
  }

  return (
    <>
      <Navbar />
      <div className='bg-container w-screen min-h-screen bg-white flex flex-col items-center'>
        <section className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/homepage.avif')" }}>
          <div className="absolute inset-0 bg-opacity-80 backdrop-brightness-50 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-10">Selamat Datang di DewaGaming</h1>
            <h2 className='text-xl md:text-2xl mb-10'>Your Ultimate Gaming Partner</h2>
            <p className="mt-4 text-base md:text-lg text-justify text-white max-w-[800px]">
              DewaGaming Gameshop adalah destinasi utama bagi para gamer yang mencari pengalaman belanja game terbaik.
              Berdiri sejak tahun 2015, kami berkomitmen menyediakan berbagai produk gaming berkualitas mulai dari game PC,
              Playstation, PSP, Nintendo, Dll.
            </p>
            <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 w-full max-w-[1000px] mx-auto">
              {['pc-logo', 'playstation-logo', 'psp-logo', 'nintendo-logo', 'xbox-logo', 'wii-logo'].map((logo, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img src={`/${logo}.png`} alt={logo} className="w-16 h-16 md:w-32 md:h-32 object-contain mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className='relative py-12 px-4 md:py-20'>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">Selayang Pandang Perusahaan</h2>
          <p className="text-justify text-white max-w-[800px] leading-relaxed">
            DewaGaming adalah perusahaan yang berdiri sejak tahun 2015 dan menjadi destinasi utama bagi para gamer yang mencari pengalaman belanja game terbaik.
            Sejak awal berdiri, DewaGaming berkomitmen menyediakan berbagai produk gaming berkualitas dari berbagai platform, seperti PC, Playstation, PSP, Nintendo, dan lain-lain.
            Kami memiliki budaya perusahaan yang menekankan inovasi, integritas, dan kolaborasi. Tim kami terdiri dari individu-individu berbakat yang memiliki passion tinggi dalam dunia gaming dan teknologi.
            Kami percaya bahwa dengan kerja sama tim yang solid dan pelayanan terbaik, kami dapat menghadirkan solusi yang tidak hanya memenuhi kebutuhan pelanggan tetapi juga memberikan pengalaman belanja yang menyenangkan.
            Dengan visi untuk menjadi penyedia perlengkapan gaming terbaik di Indonesia, DewaGaming terus berkembang dan beradaptasi dengan perkembangan teknologi serta kebutuhan pasar yang dinamis.
          </p>
        </div>

        <div className="text-center mb-10">
          <button 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-300"
            onClick={() => navigate('/about-us')}
          >
            Baca Selengkapnya
          </button>
        </div>

        <div className='relative py-12 px-4 md:py-20'>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">Produk</h2>
          <p className="text-justify text-white max-w-[800px] leading-relaxed">
            Produk yang dijual di DewaGaming merupakan game-game online dan  offline dari berbagai console.
            Seperti PC, Playstation, PSP, Nintendo, dan lain-lain. Semua game dijual dengan harga yang terjangkau dan kualitas terbaik.
          </p>
        </div>

        <div className="text-center mb-10">
          <button 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-300"
            onClick={() => navigate('/products')}
          >
            Lihat Produk
          </button>
        </div>

      
        <div className='relative py-12 px-4 md:py-20'>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">Apa Kata Mereka?</h2>
          
        </div>

      </div>
      <Footer />
    </>
  )
}
