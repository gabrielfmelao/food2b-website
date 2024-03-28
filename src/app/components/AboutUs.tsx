export default function AboutUs() {
    return (
        <>
            {/* Icon Blocks */}
            <div className="max-w-[85rem] px-4 py-10 mt-6 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-2xl mx-auto">
                    {/* Grid */}
                    <div className="grid gap-12">
                        <div>
                            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
                                Nossa visão
                            </h2>
                            <p className="mt-3 text-gray-800 dark:text-gray-400">
                                A Food2B é pioneira como um hub de suprimentos digitais especializado no nicho de hamburguerias, fornecendo uma cadeia de abastecimento completa e digitalizada.
                            </p>
                        </div>

                        <div className="space-y-6 lg:space-y-10">
                            {/* Icon Block */}
                            <div className="flex">
                                <svg className="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>
                                <div className="ms-5 sm:ms-8">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        Centralização de fornecimento
                                    </h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        Oferecemos uma plataforma exclusiva para a compra de suprimentos de hamburguerias, conectando proprietários a fornecedores pré-aprovados.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}

                            {/* Icon Block */}
                            <div className="flex">
                                <svg className="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                <div className="ms-5 sm:ms-8">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        Controle total da operação B2B:
                                    </h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        Permitimos que os donos de hamburguerias gerenciem totalmente suas compras em um marketplace B2B, com processamento digital de pedidos para economizar tempo e esforço.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}

                            {/* Icon Block */}
                            <div className="flex">
                                <svg className="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                                <div className="ms-5 sm:ms-8">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        Insights e flexibilidade:
                                    </h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        Nossa plataforma fornece recursos analíticos avançados para visualizar e otimizar o desempenho, juntamente com a capacidade de estabelecer regras de negócios personalizadas para cada cliente, promovendo uma relação comprador-fornecedor mais flexível.
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </div>
                    {/* End Grid */}
                </div>
            </div>
            {/* End Icon Blocks */}
        </>
    )
}