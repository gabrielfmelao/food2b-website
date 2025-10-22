export default function Faq() {
    return (
        <div className="my-12">
            {/* FAQ */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Suas dúvidas esclarecidas:</h2>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Perguntas frequentes</p>
                </div>
                {/* End Title */}

                <div className="max-w-2xl mx-auto">
                    {/* Accordion */}
                    <div className="hs-accordion-group">
                        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-amber-500 rounded-lg transition hover:text-amber-500/80 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                            Como funciona o Food2B para os proprietários de hamburguerias?
                                <svg className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                <svg className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                                <p className="text-gray-800 dark:text-gray-200">
                                A Food2B é uma plataforma digital que conecta donos de hamburguerias a uma ampla rede de fornecedores de suprimentos para o seu negócio. Os proprietários de hamburguerias podem acessar a plataforma online, explorar variedade de produtos disponíveis, comparar preços e fazer pedidos de forma conveniente, tudo em um único lugar.
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                            Quais são os benefícios de usar o Food2B para comprar suprimentos para minha hamburgueria?
                                <svg className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                <svg className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                <p className="text-gray-800 dark:text-gray-200">
                                Ao utilizar o Food2B, os donos de hamburguerias podem desfrutar de diversos benefícios. Isso inclui acesso a uma ampla gama de fornecedores confiáveis, a conveniência de fazer pedidos online a qualquer hora e em qualquer lugar, economia de tempo através de processos simplificados de compra e entrega rápida dos produtos diretamente na sua porta.
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                            Como posso começar a usar o Food2B para o meu negócio de hamburgueria?
                                <svg className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                <svg className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                                <p className="text-gray-800 dark:text-gray-200">
                                Começar a utilizar o Food2B é fácil. Basta visitar nosso site e se cadastrar como um proprietário de hamburgueria. Uma vez registrado, você terá acesso imediato à nossa plataforma, onde poderá explorar nossa variedade de produtos, fazer pedidos e gerenciar suas compras de suprimentos de forma eficiente. Estamos aqui para ajudá-lo a simplificar e otimizar sua cadeia de suprimentos.
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* End Accordion */}
                </div>
            </div>
            {/* End FAQ */}
        </div>
    )
}