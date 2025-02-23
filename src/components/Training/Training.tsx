import CardService from "../CardService/CardService";
import { CardTraining } from "../CardTraining/CardTraining";
import Portfolio from "../Portifolio/Portifolio";

export default function Training() {
    return(
        <div className="w-svw h-fit flex flex-col !mt-18 gap-24 !p-14">
            <div className="w-full !py-4">
                <p className="text-xl">
                    Como posso ajudar?
                </p>
                <p className="text-5xl">
                    Principais 
                    <span className="bg-gradient-to-r from-purple-800 to-rose-500 bg-clip-text text-transparent">
                        {" "}Serviços
                    </span>
                </p>
                <div className="w-full flex flex-col md:!flex-row justify-between !py-8 gap-8">
                    <CardService
                        title="Web Design"
                        description="Criação de sistema web, atraente, responsivo."
                    />
                    <CardService
                        title="Desing UI/UX"
                        description="Para que o usuário tenha uma melhor experiência do sistema web."
                    />
                    <CardService
                        title="Aplicativos"
                        description="Desenvolvimento de um aplicativo leve, atraente e fluído."
                    />
                </div>
            </div>
            <Portfolio/>
            <div className="w-full !py-4">
                <p className="text-5xl">
                    Forma
                    <span className="bg-gradient-to-r from-purple-800 to-rose-500 bg-clip-text text-transparent">
                        ção
                    </span>
                </p>
                <div className="w-full flex flex-col !py-8 gap-8">
                    <CardTraining
                        title="Análise e Desenvolvimento de Sitemas"
                        description="Universidade Murício de Nassau"
                        status="Concluído"
                        finish_date="Ago/2023 - Ago/2025"
                    />
                    <CardTraining
                        title="Informática Biomédica"
                        description=" Instituto Estadual de Educação, Ciência e Tecnologia"
                        status="Concluído"
                        finish_date="Jan/2020 - Dez/2022"
                    />
                </div>
            </div>
        </div>
    )
};


