
const SideMenu = () => {
    return (
        <div className="flex items-center flex-col min-h-[calc(100vh-64px)] gap-4 py-6 outline outline-gray-200 px-4 shadow-sm shadow-gray-300">
            <button className="flex items-center justify-center size-8 md:size-10 rounded-full bg-white shadow-sm shadow-gray-100 cursor-pointer">
                <img className="size-4 md:size-6" src="/icons/compassIcon.svg" alt="Icon" />
            </button>
            <button className="flex items-center justify-center size-8 md:size-10 rounded-full bg-white shadow-sm shadow-gray-100 cursor-pointer">
                <img className="size-4 md:size-6" src="/icons/starIcon.svg" alt="Icon" />
            </button>
            <button className="flex items-center justify-center size-8 md:size-10 rounded-full bg-white shadow-sm shadow-gray-100 cursor-pointer">
                <img className="size-4 md:size-6" src="/icons/messageIcon.svg" alt="Icon" />
            </button>
            <button className="flex items-center justify-center size-8 md:size-10 rounded-full bg-white shadow-sm shadow-gray-100 cursor-pointer">
                <img className="size-4 md:size-6" src="/icons/chartIcon.svg" alt="Icon" />
            </button>
            <button className="flex items-center justify-center size-8 md:size-10 rounded-full bg-white shadow-sm shadow-gray-100 cursor-pointer">
                <img className="size-4 md:size-6" src="/icons/earthIcon.svg" alt="Icon" />
            </button>
            <button className="flex items-center justify-center size-8 md:size-10 rounded-full bg-white shadow-sm shadow-gray-100 cursor-pointer">
                <img className="size-4 md:size-6 text-[#c6c7d0]" src="/icons/chartIcon2.svg" alt="Icon" />
            </button>
        </div>
    )
}

export default SideMenu