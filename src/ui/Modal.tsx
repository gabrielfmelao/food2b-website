import ContactForm from "@/ui/ContactForm";
import Image from "next/image";
import Logo from "../../public/LogoFood2B.svg"

export default function Modal() {
    return (
        <>
            <button type="button" className="w-full sm:w-auto justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-500/90 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal">
                Junte-se a nós
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>

            <div id="hs-vertically-centered-modal" className="hs-overlay-backdrop-open:bg-black-950/90 backdrop-blur-sm hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden pointer-events-none overflow-y-hidden">
                <div className="hs-overlay-open:mt-0 lg:hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl lg:max-w-xl xl:max-w-xl sm:w-full m-3 mx-auto min-h-full lg:min-h-[calc(100%-3.5rem)] flex items-center">
                    <div className="w-full flex flex-col bg-white border shadow-sm rounded-none sm:rounded-xl pointer-events-auto h-[100vh] sm:h-auto">
                        <div className="flex justify-between items-center py-6 px-4 border-b pl-8">
                            <Image
                                src={Logo}
                                alt="Logo Food2B"
                                width={150}
                            />
                            <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal">
                                <span className="sr-only">Close</span>
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">                          
                                <div className="flex flex-col items-center justify-center w-full pb-4">
                                    <ContactForm />                                   
                                </div>             
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}