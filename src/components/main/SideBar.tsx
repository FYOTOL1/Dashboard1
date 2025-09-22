import SideCard from "./SideCard"

const SideBar = () => {
    return (
        <div className="hidden md:flex items-center flex-col md:w-4/20 min-h-[calc(100vh-64px)] gap-4 py-6 ps-0 pe-3">
            <SideCard data={[1, 4, 2, 5]}  borderColor="blue" />
            <SideCard data={[1, 4, 2, 5]}  borderColor="blue" />
            <SideCard data={[1, 4, 2, 5]}  borderColor="blue" />
            <SideCard data={[1, 4, 2, 5]}  borderColor="blue" />
        </div>
    )
}

export default SideBar