"use client";

import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Landbot from "./Landbot";
import { Suspense } from 'react'
import Image from "next/image";
import Burguer from "../../../public/Partner.png"

function Modal() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    return (
        <>
            {modal &&

                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 overflow-auto backdrop-blur flex justify-center items-center p-4">
                    <div className="bg-white rounded-md w-[1000px] flex flex-col overflow-hidden md:flex-row h-full md:h-auto">

                        <div className="p-8 w-full md:w-1/2 h-full">
                            <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 fill-cyan-500 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            <Landbot />
                        </div>
                        <div className="relative p-8 w-full bg-gradient-to-r from-amber-500 to-yellow-500 hidden flex-row-reverse md:w-1/2 md:flex">
                            <Link
                                href={pathname}>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 fill-cyan-500 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </dialog>

            }
        </>
    );
}

export default Modal;