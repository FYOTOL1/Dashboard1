import ChartsCard from "./ChartsCard"
import { LineGraph } from "./charts/Line"
import SideMenu from "./SideMenu"
import AnalyticsCard from "./AnalyticsCard"
import SideBar from "./SideBar"

const Main = () => {
    return (
        <div className="flex justify-between">
            <SideMenu />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full py-6 px-6 pe-3 h-fit">
                <ChartsCard cardName="Total Sales" profit={200} rate={4.84} chartComponent={<LineGraph data1={[3, 4, 2, 5]} borderColor1="purple" data2={[1, 2, 1, 1]} borderColor2="gray" />} />
                <ChartsCard cardName="Repeat Customer Rate" profit={60} rate={1.34} chartComponent={<LineGraph data1={[3, 4, 2, 5]} borderColor1="green" data2={[1, 2, 1, 1]} borderColor2="gray" />} />
                <AnalyticsCard />
                <ChartsCard cardName="Total Online Store Visitors" profit={234} rate={8.72} chartComponent={<LineGraph data1={[6, 2, 4, 7]} borderColor1="purple" data2={[1, 1, 2, 1]} borderColor2="gray" />} />
                <AnalyticsCard />
                <ChartsCard cardName="Average Order Value" profit={600} rate={100} chartComponent={<LineGraph data1={[1, 1, 1, 1]} borderColor1="green" data2={[4, 2, 3, 7]} borderColor2="gray" />} />
                <AnalyticsCard />
                <ChartsCard cardName="Orders Over Time" profit={333} rate={27.34} chartComponent={<LineGraph data1={[5, 3, 4, 4]} borderColor1="green" data2={[3, 4, 2, 3]} borderColor2="gray" />} />
                <ChartsCard cardName="Orders Over Time" profit={720} rate={23.53} chartComponent={<LineGraph data1={[3, 6, 2, 5]} borderColor1="green" data2={[1, 4, 1, 1]} borderColor2="gray" />} />
                <div className="md:hidden">
                    <SideBar />
                </div>
            </div>
            <div className="hidden md:block md:w-6/20 min-h-[calc(100vh-64px)]">
                <SideBar />
            </div>
        </div>
    )
}

export default Main