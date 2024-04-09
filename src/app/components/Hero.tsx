import Image from "next/image";

import HeroBanner from "../../../public/HeroBanner.png"
import Modal from "@/ui/Modal";


export default function Hero() {
    return (
        <>
            {/*<!-- Hero -->*/}
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                {/*<!-- Grid -->*/}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                    <div>
                        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Sua cadeia de suprimentos para <span className="text-amber-500">Hamburgueria</span></h1>
                        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">O 1# um hub de suprimento digital voltada para o nicho de hamburgueria, fornecedo uma cadeia de suprimentos de ponta-a-ponta.</p>

                        {/*<!-- Buttons -->*/}
                        <div className="mt-7">
                        <Modal />
                        </div>
                        {/*<!-- End Buttons -->*/}
                    </div>
                    {/*<!-- End Col -->*/}

                    <div className="relative">
                        <Image
                            src={HeroBanner}
                            alt="Hero Banner"
                            className="w-full"
                            priority={true}
                            />

                        <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

                        {/*<!-- SVG-->--*/}
                        <div className="hidden absolute bottom-0 start-0">
                            <svg className="w-2/3 ms-auto h-auto text-white dark:text-slate-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                                <rect x="140" y="352" width="106" height="99" fill="currentColor" />
                                <rect x="482" y="402" width="64" height="49" fill="currentColor" />
                                <rect x="433" y="402" width="63" height="49" fill="currentColor" />
                                <rect x="384" y="352" width="49" height="50" fill="currentColor" />
                                <rect x="531" y="328" width="50" height="50" fill="currentColor" />
                                <rect x="99" y="303" width="49" height="58" fill="currentColor" />
                                <rect x="99" y="352" width="49" height="50" fill="currentColor" />
                                <rect x="99" y="392" width="49" height="59" fill="currentColor" />
                                <rect x="44" y="402" width="66" height="49" fill="currentColor" />
                                <rect x="234" y="402" width="62" height="49" fill="currentColor" />
                                <rect x="334" y="303" width="50" height="49" fill="currentColor" />
                                <rect x="581" width="49" height="49" fill="currentColor" />
                                <rect x="581" width="49" height="64" fill="currentColor" />
                                <rect x="482" y="123" width="49" height="49" fill="currentColor" />
                                <rect x="507" y="124" width="49" height="24" fill="currentColor" />
                                <rect x="531" y="49" width="99" height="99" fill="currentColor" />
                            </svg>
                        </div>
                        {/*<!-- End SVG-->*/}
                    </div>
                    {/*<!-- End Col -->*/}
                </div>
                {/*<!-- End Grid -->*/}
            </div>
            {/*<!-- End Hero -->*/}
        </>
    )
}