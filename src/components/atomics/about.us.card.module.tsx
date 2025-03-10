export interface ACard {
    name: string;
    role: string;
    experience: string;
}

export default function AboutCard({ name, role, experience }: ACard) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
            <div className="p-4">
                <h2 className="text-lg font-semibold text-black">{name}</h2>
                <p className="text-sm text-gray-500">{role}</p>
                <p className="text-md text-gray-500 mt-5">{experience}</p>
            </div>
        </div>
    )
}
