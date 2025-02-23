export default function LetsTalk() {
    return(
        <div className="w-svw h-fit flex flex-col gap-24 !p-14"> 
        <div className="image-line-bottom"></div>
            <div className="w-full !py-4">
                <p className="text-xl">
                    Contate-me
                </p>
                <p className="text-5xl">
                    Vamos 
                    <span className="bg-gradient-to-r from-purple-800 to-rose-500 bg-clip-text text-transparent">
                        {" "}Conversar
                    </span>
                </p>
                <div className="flex flex-col w-full items-w-full end gap-12 ">
                        {/* Informações de E-mail e Telefone */}
                        <div className="flex flex-col md:flex-row justify-between !py-6">
                            <div>
                            <h2 className="text-xl font-semibold text-gray-300">EMAIL:</h2>
                            <p className="text-gray-300 text-lg">brunafernandes8596@gmail.com</p>
                            </div>
                            <div className="flex flex-col md:justify-end">
                                <h2 className="text-xl font-semibold text-gray-300 md:text-end">Phone:</h2>
                                <p className="text-gray-300 text-lg">(86) 99419-3056</p>
                            </div>
                        </div>

                        {/* Formulário de Contato */}
                        <div className="bg-transparent rounded-lg  shadow-lg">
                            <form className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                                </label>
                                <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 bg-neutral-800 block w-full !px-4 !py-2  rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Seu nome"
                                />
                            </div>

                            {/* Campo E-mail */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                E-mail
                                </label>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 bg-neutral-800 block w-full !px-4 !py-2  rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Seu e-mail"
                                />
                            </div>

                            {/* Campo Assunto */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                Subject
                                </label>
                                <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="mt-1 bg-neutral-800 block w-full !px-4 !py-2  rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Assunto"
                                />
                            </div>

                            {/* Campo Mensagem */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                                </label>
                                <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-1 bg-neutral-800 block w-full !px-4 !py-2  rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Sua mensagem"
                                ></textarea>
                            </div>

                            {/* Botão Enviar */}
                            <div>
                                <button
                                type="submit"
                                className="w-full !my-5 bg-neutral-900 text-white !px-4 !py-4 rounded-md shadow-md cursor-pointer transition-all"
                                >
                                    <p className="bg-gradient-to-r from-orange-300 to-rose-500 bg-clip-text text-transparent font-semibold text-xl">
                                        Enviar mensagem 
                                    </p>
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
    )
};
