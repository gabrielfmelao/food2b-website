import Link from "next/link";
import Logo from '../../../public/LogoFood2B.svg'
import Image from "next/image";

export default function () {
    return (
        <Link
            href={'/'}
            className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            aria-label="Logo"
        >
            <Image
                src={Logo}
                alt="Logo Food2B"
                className="w-40"
            />
        </Link>
    )
}