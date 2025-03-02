export interface TCard {
    name: string;
    role: string;
    contact: string;
    imageURL?: string;
}

export default function TeamsCard({ name, role, contact, imageURL }: TCard) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
            <img 
                src={imageURL ? imageURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} 
                alt={name} 
                width={320} 
                height={200} 
                className="w-full h-48 object-cover object-center"

            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
                <p className="text-sm text-gray-500">{role}</p>
                <p className="text-sm text-gray-500">{contact}</p>
            </div>
        </div>
    )
}
