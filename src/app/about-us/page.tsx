import React from "react";
import AboutUs from "@/components/molecules/about.us.module";
import Navbar from "@/components/atomics/navbar.module";
import Footer from "@/components/atomics/footer.module";

export default function AboutUsPage() {
  return (
    <>
    <Navbar/>
      <div className="pt-20 flex justify-center items-center min-h-screen bg-gray-100">
        <AboutUs />
      </div>
    <Footer/>
    </>
  );
}
