import React from 'react'
import Navbar from '@/components/atomics/navbar.module'
import Footer from '@/components/atomics/footer.module'

export default function Landing() {
  return (
    <>
    <Navbar/>
      <div className="pt-20 flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Landing</h1>
      </div>
    <Footer/>
    </>
  )
}
