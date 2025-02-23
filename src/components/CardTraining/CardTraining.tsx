interface CardProps {
    title: string;
    description: string;
    status: string;
    finish_date: string;
}

export function CardTraining({ title, description, status, finish_date }: CardProps) {
return (
    <div className="bg-neutral-800 w-full flex flex-col md:flex-row items-start justify-between !p-8 rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-neutral-700">
    {/* Conteúdo à esquerda */}
    <div>
        <div>
        <h4 className="text-2xl outfit-font-700">{title}</h4>
        </div>
        <div>
        <p className="text-1xl outfit-font-300">{description}</p>
        </div>
    </div>

    {/* Conteúdo à direita */}
    <div className="flex flex-col md:items-end">
        <div>
        <h4 className="bg-gradient-to-r from-purple-800 to-rose-500 bg-clip-text text-transparent outfit-font-700">
            {status}
        </h4>
        </div>
        <div>
        <p>{finish_date}</p>
        </div>
    </div>
    </div>
);
}