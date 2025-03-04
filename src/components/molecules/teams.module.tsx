"use client"
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '@/utils/api/product.teams.api'
import TeamsCard, {TCard} from '../atomics/teams.card.module'

export default function ListTeams() {
    const [teams, setTeams] = useState<TCard[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function getAllTeams() {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/teams");
          setTeams(response.data);
      } catch (error) {
          console.error("Error fetching teams data:", error);
          alert("Maaf data tidak bisa diambil. Silakan cek sumber data");
      } finally {
          setIsLoading(false);
      }
  }
  
    useEffect(() => {
        getAllTeams()
    }, [])

    return (
        <div className='w-full h-full p-3 mt-10'>
        <h2 className='flex justify-center text-3xl items-center font-bold mb-10'> Our Teams </h2>
            {
                isLoading === false ?
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center w-full'>
                        {
                            teams.length > 0 ? (
                                teams.map((item: TCard, key: number) => (
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
