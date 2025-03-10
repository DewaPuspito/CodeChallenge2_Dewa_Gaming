import React from "react";
import Teams from "@/components/molecules/teams.module";
import Navbar from "@/components/atomics/navbar.module";
import Footer from "@/components/atomics/footer.module";

export default function OurTeams() {
  return (
    <>
      <Navbar />
      <div className="pt-20 flex justify-center items-center min-h-screen bg-gray-100">
        <Teams />
      </div>
      <Footer />
    </>
  );
}
