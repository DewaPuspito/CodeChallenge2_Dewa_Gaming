export interface PCard {
    game_name: string;
    genre: string;
    console: string;
    imageURL: string;
    description: string;
    price: number;
}

export default function ProductCard({ game_name, genre, console, imageURL, description, price }: PCard) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
            <img 
                src={imageURL ? imageURL : 'https://i.pinimg.com/736x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg'} 
                alt={game_name} 
                width={320} 
                height={200} 
                className="w-full h-48 object-cover object-center"

            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{game_name}</h2>
                <p className="text-sm text-gray-500">{genre}</p>
                <p className="text-sm text-gray-500">{console}</p>
                <p className="text-gray-700 mt-2 text-sm">{description}</p>
                <p className="text-lg font-bold text-blue-600 mt-2">Rp {price.toLocaleString()}</p>
            </div>
        </div>
    )
}
