import DataCard from "./DataCard"
import { LineGraph } from "./charts/Line"
import SideMenu from "./SideMenu"

const Main = () => {
    return (
        <div className="flex">
            <SideMenu />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 w-full h-fit p-6">
                <DataCard cardName="Total Sales" profit={200} rate={4.84} chartComponent={<LineGraph data1={[3, 4, 2, 5]} borderColor1="purple" data2={[1, 2, 1, 1]} borderColor2="gray" />} />
                <DataCard cardName="Total Sales" profit={60} rate={1.34} chartComponent={<LineGraph data1={[3, 4, 2, 5]} borderColor1="green" data2={[1, 2, 2, 1]} borderColor2="gray" />} />
                <DataCard cardName="Total Sales" profit={234} rate={8.72} chartComponent={<LineGraph data1={[6, 2, 4, 7]} borderColor1="purple" data2={[1, 1, 2, 1]} borderColor2="gray" />} />
                <DataCard cardName="Total Sales" profit={600} rate={100} chartComponent={<LineGraph data1={[1, 1, 1, 1]} borderColor1="green" data2={[4, 2, 3, 7]} borderColor2="gray" />} />
                <DataCard cardName="Total Sales" profit={720} rate={23.53} chartComponent={<LineGraph data1={[3, 6, 2, 5]} borderColor1="green" data2={[1, 4, 1, 1]} borderColor2="gray" />} />
                <DataCard cardName="Total Sales" profit={97} rate={9.86} chartComponent={<LineGraph data1={[3, 1, 2, 5]} borderColor1="green" data2={[1, 3, 2, 2]} borderColor2="gray" />} />
            </div>
        </div>
    )
}

export default Main