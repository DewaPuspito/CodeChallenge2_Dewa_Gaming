"use client";
import React, { useEffect, useState, useCallback } from "react";
import { axiosInstance } from "@/utils/api/product.teams.api";
import ProductCard, { PCard } from "../atomics/product.card.module";

export default function ProductMenu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [selectedConsole, setSelectedConsole] = useState("All Consoles");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [filteredProducts, setFilteredProduct] = useState<PCard[]>([]);
  const genres = ["Action", "Adventure", "RPG", "Fighting", "Horror", "Survival", "Stealth"];
  const consoles = ["PC", "PS", "PSP", "Nintendo", "XBOX", "Wii"];

  const getAllProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("/products?pageSize=20");

      let filtered = response.data;

      if (searchTerm) {
        filtered = filtered.filter((item: PCard) =>
          item.game_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (selectedGenre !== "All Genres") {
        filtered = filtered.filter(
          (item: PCard) =>  item.genre.toLowerCase().includes(selectedGenre.toLowerCase())
        );
      }

      if (selectedConsole!== "All Consoles") {
        filtered = filtered.filter(
          (item: PCard) =>  item.console.toLowerCase().includes(selectedConsole.toLowerCase())
        );
      }

        setFilteredProduct(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
        alert("Maaf data tidak bisa diambil. Silakan cek sumber data");
      } finally {
        setIsLoading(false);
      }
    }, [searchTerm, selectedGenre, selectedConsole]);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleGenreChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedGenre(event.target.value);
  }

  function handleConsoleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedConsole(event.target.value);
  }

  return (
    <div className="bg-container w-full min-h-screen p-3">
      <h2 className="flex justify-center text-3xl text-white items-center font-bold mt-5 mb-10">
        {" "}
        Produk Kami{" "}
      </h2>
      <div className="flex items-center justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded-md w-1/3 bg-white text-black"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <div className="flex gap-4">
        <select
          className="border p-2 rounded-md w-42 bg-white text-black"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="All Genres">All Genres</option>
          {genres.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded-md w-42 bg-white text-black"
          value={selectedConsole}
          onChange={handleConsoleChange}
        >
          <option value="All Consoles">All Consoles</option>
          {consoles.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </select>
        </div>
      </div>
      {isLoading === false ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center w-full">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item: PCard, key: number) => (
              <ProductCard
                key={key}
                game_name={item?.game_name}
                genre={item?.genre}
                console={item?.console}
                description={item?.description}
                imageURL={item?.imageURL}
                price={item?.price}
              />
            ))
          ) : (
            <div className="col-span-6 flex justify-center items-center min-h-[50vh]">
              <p className="text-center text-white">Produk tidak ditemukan</p>
            </div>
          )}
        </div>
      ) : (
        <div className="w-screen h-screen text-black font-bold text-2xl justify-center items-center mx-auto my-auto">
          <h2 className="col-span-3 justify-center text-center text-white">
            Loading Content...
          </h2>
        </div>
      )}
    </div>
  );
}
