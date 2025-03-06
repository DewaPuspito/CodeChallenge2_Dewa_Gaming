"use client"
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '@/utils/api/product.teams.api'
import ProductCard, {PCard} from '../atomics/product.card.module'

export default function ProductMenu() {
    const [product, setProduct] = useState<PCard[]>([])
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('All Genres');
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [filteredProducts, setFilteredProduct] = useState<PCard[]>([])
    const [genres, setGenres] = useState<string[]>([])

    async function getAllProducts() {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/products?pageSize=20");
          setProduct(response.data);
  
          const uniqueGenres: string[] = [];
          response.data.forEach((item: PCard) => {
              if (!uniqueGenres.includes(item.genre)) {
                  uniqueGenres.push(item.genre);
              }
          });
          setGenres(uniqueGenres);
  
          let filtered = response.data;
          if (searchTerm) {
              filtered = filtered.filter((item: PCard) =>
                  item.game_name.toLowerCase().includes(searchTerm.toLowerCase())
              );
          }
  
          if (selectedGenre !== 'All Genres') {
              filtered = filtered.filter((item: PCard) => item.genre === selectedGenre);
          }
          setFilteredProduct(filtered);
      } catch (error) {
          console.error("Error fetching products:", error);
          alert("Maaf data tidak bisa diambil. Silakan cek sumber data");
      } finally {
          setIsLoading(false);
      }
  }
  
    useEffect(() => {
        getAllProducts()
    }, [searchTerm, selectedGenre])

    function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
    }

    function handleGenreChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedGenre(event.target.value);
    }

    return (
        <div className='w-full   min-h-screen p-3' style={{ backgroundImage: `url('/red.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2 className='flex justify-center text-3xl text-white items-center font-bold mt-5 mb-10'> Produk Kami </h2>
            <div className='flex justify-between mb-4'>
                <input
                    type='text'
                    placeholder='Search products...'
                    className='border p-2 rounded-md w-1/3 bg-white text-black'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select
                    className='border p-2 rounded-md w-1/3 bg-white text-black'
                    value={selectedGenre}
                    onChange={handleGenreChange}
                >
                    <option value='All Genres'>All Genres</option>
                    {
                        genres.map((item, key) => (
                            <option key={key} value={item}>{item}</option>
                        ))
                    }
                </select>   
            </div>
            {
                isLoading === false ?
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center w-full'>
                        {
                            filteredProducts.length > 0 ? (
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
                                    <p className="text-center text-white">No products found</p>
                                </div>
                            )
                        }
                    </div> :
                    <div className='w-screen h-screen text-black font-bold text-2xl justify-center items-center mx-auto my-auto'>
                        <h2 className='col-span-3 justify-center text-center text-white'>Loading Content...</h2>
                    </div>
            }
        </div>
    )
}