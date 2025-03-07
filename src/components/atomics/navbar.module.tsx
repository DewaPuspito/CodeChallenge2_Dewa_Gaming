'use client'
import React from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {

    const router = useRouter()

    function navigate(pathname: string) {
        router.push(pathname)
    }
    return (
        <nav className="w-screen h-20 bg-red-500 p-5 flex fixed top-0 gap-5 justify-between items-center text-white text-semibold z-10">
            <div className="my-3">
                <span className="font-semibold text-lg" onClick={() => navigate('/')}>
                    <img src="/Logo.png" alt="Company Logo" width={150} height={48}/>
                </span>
            </div>
            <div className="my-3 flex flex-row gap-x-5 mr-5">
                <span className="text-slate-100 hover:text-slate-300" onClick={() => navigate('/about-us')}>Tentang Kami</span>
                <span className="text-slate-100 hover:text-slate-300" onClick={() => navigate('/products')}>Produk Kami</span>
                <span className="text-slate-100 hover:text-slate-300" onClick={() => navigate('/teams')}>Tim Kami</span>
            </div>
        </nav>
    )
}