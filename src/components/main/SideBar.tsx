import SideCard from "./SideCard"

const SideBar = () => {
    return (
        <div className="grid grid-cols-2 md:flex items-center flex-col w-full h-full gap-4 py-6 ps-0 pe-3">
            <SideCard data={[1, 4, 2, 5]} borderColor="blue" />
            <SideCard data={[1, 4, 2, 5]} borderColor="green" />
            <SideCard data={[1, 4, 2, 5]} borderColor="purple" />
            <SideCard data={[1, 4, 2, 5]} borderColor="brown" />
        </div>
    )
}

export default SideBar