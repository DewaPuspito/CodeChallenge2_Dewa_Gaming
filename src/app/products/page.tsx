import React from "react";
import Navbar from "@/components/atomics/navbar.module";
import Products from "@/components/molecules/product.module";

export default function ProductsPage() {
  return (
    <>
    <Navbar/>
      <div className="pt-20 flex justify-center items-center h-screen bg-gray-100">
        <Products/>
      </div>
    </>
  );
}
