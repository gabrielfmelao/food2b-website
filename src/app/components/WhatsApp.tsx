import Image from "next/image";
import WhatsAppIcon from "../../../public/WhatsApp.svg"

export default function WhatsApp() {
    return (
        <>
            <div className="w-full flex flex-row-reverse z-50">
                <button className="fixed bottom-4 right-4 h-16 w-16">
                    <Image
                        src={WhatsAppIcon}
                        width={50}
                        height={50}
                        alt="WhatsAppIcon"
                    />
                </button>
            </div>
        </>
    )
}