export default function Stats() {
    return (
        <div className="my-12 z-0">
            {/* Features */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
                    <div className="lg:col-span-4">
                        {/* Stats */}
                        <div className="lg:pe-6 xl:pe-12">
                            <p className="text-4xl font-bold leading-10 text-amber-500">
                                +30%
                            </p>
                            <p className="mt-2 sm:mt-3 text-gray-500">em ganho de eficiência após a digitalização com a Food2B</p>
                        </div>
                        {/* End Stats */}
                    </div>
                    {/* End Col */}

                    <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-gray-700">
                        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 sm:gap-8">
                            {/* Stats */}
                            <div className="p-0 lg:pl-10 ">
                                <p className="text-3xl font-semibold text-amber-500">99.95%</p>
                                <p className="mt-1 text-gray-500"> em compras recorrentes nos canais.</p>
                            </div>
                            {/* End Stats */}

                            {/* Stats */}
                            <div>
                                <p className="text-3xl font-semibold text-amber-500">+500 horas</p>
                                <p className="mt-1 text-gray-500">horas economizadas de tempo integral de uma pessoa comprando</p>
                            </div>
                            {/* End Stats */}


                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Features */}
        </div>
    )
}