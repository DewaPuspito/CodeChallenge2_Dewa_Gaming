'use client'
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '@/utils/api/product.teams.api'
import TeamsCard, { TCard } from '../atomics/teams.card.module'

export default function ListTeams() {
    const [teams, setTeams] = useState<TCard[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    async function getAllTeams() {
        try {
            const response = await axiosInstance.get("/teams")
            if (Array.isArray(response.data)) {
                setTeams(response.data)
            } else {
                console.error("Invalid data format:", response.data)
                setTeams([]) 
            }
        } catch (error) {
            console.error("Error fetching teams data:", error)
            alert("Maaf data tidak bisa diambil. Silakan cek sumber data")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getAllTeams()
    }, [])

    return (
        <div 
            className='w-full h-full p-3' 
            style={{ backgroundImage: `url('/red.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <h2 className='flex justify-center text-3xl text-white items-center font-bold mt-5 mb-10'>
                Tim Kami
            </h2>

            {isLoading ? (
                <div className='w-full h-screen flex flex-col justify-center items-center'>
                    <h2 className='text-white text-2xl font-bold'>Loading Content...</h2>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center w-full'>
                    {teams.length > 0 ? (
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
                    )}
                </div>
            )}
        </div>
    )
}
