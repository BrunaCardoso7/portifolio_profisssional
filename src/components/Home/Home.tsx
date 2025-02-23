import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="w-full h-screen flex  flex-col md:!-mt-30 !items-center !justify-center !md:px-24">
            {/* Título com animação */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full flex flex-row justify-center !mt-8 !md:mt-0"
            >
                <h2 className="text-5xl md:text-7xl 2xl:text-9xl outfit-font-300  !py-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Bruna Cardoso
                </h2>
            </motion.div>

            {/* Conteúdo Principal */}
            <div className="w-full max-w-7xl mx-auto h-auto md:h-[60%] grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-8 md:mt-0 px-4 md:px-8">
                {/* Coluna da Esquerda */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col items-center justify-center gap-8 order-2 md:order-none"
                >
                    {/* Resumo Profissional */}
                    <div className="w-full max-w-md">
                        <TextCustomHelper content="RESUMO PROFISSIONAL:" />
                        <p className="outfit-font-300 !px-3 text-md md:text-base text-gray-400 text-center md:text-justify">
                            +2 anos de experiência em desenvolvimento de software, com foco em
                            aplicativos mobile, sites, aplicações web e APIs Restful. Apaixonada
                            por tecnologia e inovação, transformando desafios em soluções
                            eficientes.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="w-full max-w-md">
                        <TextCustom content="SKILLS:" />
                        <ul className="outfit-font-300 text-gray-400 space-y-2 text-center md:text-left">
                            <li className="hover:text-purple-400 transition-colors duration-300">
                                Desenvolvimento Web
                            </li>
                            <li className="hover:text-purple-400 transition-colors duration-300">
                                Aplicativo Mobile
                            </li>
                            <li className="hover:text-purple-400 transition-colors duration-300">
                                API Rest Ful
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Coluna do Meio (Imagem) - Reordenada apenas para celular */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.75 }}
                    className="flex justify-center items-center order-1 md:order-none mt-8 md:mt-0"
                >
                    <div className="image !w-72 !h-72 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {/* Aqui você pode adicionar uma imagem */}
                    </div>
                </motion.div>

                {/* Coluna da Direita */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-col gap-8 items-center md:items-end order-3 md:order-none mt-8 md:mt-0"
                >
                    <div className="flex flex-col gap-8 items-center md:items-end">
                        <TextCustom content="PROJETOS FEITOS:" />
                        <p className="text-4xl md:text-6xl lg:text-8xl tracking-wide text-gray-400 outfit-font-300 hover:text-purple-400 transition-colors duration-300">
                            123
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 items-center md:items-end">
                        <TextCustom content="ANOS DE EXPERIÊNCIA:" />
                        <p className="text-4xl md:text-6xl lg:text-8xl text-gray-400 tracking-wide outfit-font-300 hover:text-purple-400 transition-colors duration-300">
                            +2
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

interface TextCustomProps {
    content: string;
}

export function TextCustom({ content }: TextCustomProps) {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white outfit-font-700 text-center md:text-start text-lg md:text-xl mb-4"
        >
            {content}
        </motion.p>
    );
}

export function TextCustomHelper({ content }: TextCustomProps) {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white outfit-font-700 text-center md:text-start text-lg md:text-xl mb-4"
        >
            {content}
        </motion.p>
    );
}