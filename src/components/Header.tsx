
const Header = () => {
    return (
        <>
            <div className="flex items-center justify-between gap-10 w-full h-12 sm:h-14 md:h-16 py-2 sm:py-3 shadow-sm shadow-gray-100 outline outline-gray-300 px-4">

                <div className="flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-10">
                    <button className="flex items-center justify-center size-8 md:size-10 rounded-full bg-white shadow-sm shadow-gray-100 cursor-pointer">
                        <img className="size-4 md:size-6" src="/icons/listIcon.svg" alt="Icon" />
                    </button>
                    <h1 className="font-bold text-gray-700 text-sm sm:text-lg">Constructor</h1>
                </div>

                <div className="flex items-center justify-between gap-2 md:gap-10 lg:gap-16 h-full">

                    <ul className="flex items-center justify-between gap-2 sm:gap-4 h-full sm:w-2/5 md:w-2/4 text-nowrap text-[13px] text-gray-500 font-bold">
                        <li className="block transition-all cursor-pointer hover:text-gray-700 hover:text-[13.5px] max-xl:hidden">Dashboard</li>
                        <li className="block transition-all cursor-pointer hover:text-gray-700 hover:text-[13.5px] max-xl:hidden">About Us</li>
                        <li className="block transition-all cursor-pointer hover:text-gray-700 hover:text-[13.5px] max-lg:hidden">News</li>
                        <li className="block transition-all cursor-pointer hover:text-gray-700 hover:text-[13.5px] max-md:hidden">User Policy</li>
                        <li className="block transition-all cursor-pointer hover:text-gray-700 hover:text-[13.5px] max-sm:hidden">Contacts</li>
                        <li className="transition-all cursor-pointer"><img className="size-4" src="/icons/lineDotsIcon.svg" alt="Icon" /></li>
                    </ul>

                    <div className="relative h-full w-2/4">
                        <input className="bg-white h-full w-full rounded-full outline outline-gray-100 shadow-sm shadow-gray-200 px-4 sm:px-6 md:px-8 lg:px-10 text-[10px] md:text-xs" type="text" placeholder="Search Products, Orders and Clients" />
                        <img className="absolute top-1/2 left-1 sm:left-2 md:left-3 lg:left-4 -translate-y-1/2 size-3 md:size-4" src="/icons/lensIcon.svg" alt="icon" />
                        <img className="absolute top-1/2 right-1 sm:right-2 md:right-3 lg:right-4 -translate-y-1/2 size-3.5" src="/icons/rightArrowIcon.svg" alt="icon" />
                    </div>

                </div>

                <div className="flex items-center justify-end gap-4 h-full min-w-fit">
                    <div className="flex items-center justify-right flex-col sm:flex-row sm:gap-2 md:gap-4">
                        <img className="size-6" src="/icons/userAvatarIcon.svg" alt="icon" />
                        <h1 className="text-gray-500 text-[10px] md:text-xs">Ahmed Kamel</h1>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                        <button className="flex items-center justify-center size-8 md:size-10 rounded-full bg-white shadow-sm shadow-gray-100 outline outline-gray-100 cursor-pointer">
                            <img className="size-4 md:size-6" src="/icons/bellIcon.svg" alt="Icon" />
                        </button>
                        <button className="flex items-center justify-center size-8 md:size-10size-10 rounded-full bg-white shadow-sm shadow-gray-100 outline outline-gray-100 cursor-pointer">
                            <img className="size-4 md:size-6" src="/icons/xMarkIcon.svg" alt="Icon" />
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header