"use client"
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '@/utils/api/product.teams.api'
import TeamsCard, {TCard} from '../atomics/teams.card.module'

export default function ListProduct() {
    const [product, setProduct] = useState<TCard[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function getAllProducts() {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/teams");
          setProduct(response.data);
      } catch (error) {
          console.error("Error fetching products:", error);
          alert("Maaf data tidak bisa diambil. Silakan cek sumber data");
      } finally {
          setIsLoading(false);
      }
  }
  
    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div className='w-full h-full p-3 mt-16'>
            {
                isLoading === false ?
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center w-full'>
                        {
                            product.length > 0 ? (
                                product.map((item: TCard, key: number) => (
                                    <TeamsCard
                                        key={key}
                                        name={item?.name}
                                        role={item?.role}
                                        contact={item?.contact}
                                    />
                                ))
                            ) : (
                                <p className="col-span-3 text-center text-gray-500">No data found</p>
                            )
                        }
                    </div> :
                    <div className='w-screen h-screen text-black font-bold text-2xl justify-center items-center mx-auto my-auto'>
                        <h2>Loading...</h2>
                    </div>
            }
        </div>
    )
}
