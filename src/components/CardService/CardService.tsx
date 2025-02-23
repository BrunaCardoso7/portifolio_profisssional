interface CardServiceProps {
    title: string;
    description: string;
}

export default function CardService({ title, description }: CardServiceProps) {
    return (
        <div className="relative bg-neutral-800 w-fit flex border-purple-500 flex-col items-center justify-center !p-8 rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-neutral-900 hover:border hover:border-purple-500 overflow-hidden border md:!border-transparent">
            {/* Conteúdo do Card */}
            <div className="relative text-center z-10">
                <h4 className="text-2xl outfit-font-700 text-white">{title}</h4>
                <p className="text-1xl outfit-font-300 text-gray-300 mt-4">{description}</p>
            </div>
        </div>
    );
}