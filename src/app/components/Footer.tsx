import LogoComponent from "./LogoComponent";

export default function Footer() {
    return (
        <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
                <div className="col-span-full lg:col-span-1">
                    <LogoComponent />
                    <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">© 2024 Food2B</p>
                </div>
                {/* End Col */}

            </div>
            {/* End Grid */}
        </footer>
    )
}
