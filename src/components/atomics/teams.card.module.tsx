import Image from "next/image";

export interface TCard {
    name: string;
    role: string;
    contact: string;
    imageURL?: string;
}

export default function TeamsCard({ name, role, contact, imageURL }: TCard) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col items-center text-center p-6">
            <Image 
                src={imageURL ? imageURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} 
                alt={name} 
                width={64} 
                height={64} 
                className="w-30 h-30 rounded-full object-cover border-4 border-gray-300 mb-4"

            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
                <p className="text-sm text-gray-500">{role}</p>
                <p className="text-sm text-gray-500">{contact}</p>
            </div>
        </div>
    )
}
