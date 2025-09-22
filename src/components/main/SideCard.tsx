import { CleanCharts } from "./charts/CleanCharts"

const SideCard = ({ data, borderColor }: { data: number[], borderColor: string }) => {
    return (
        <div className="flex flex-col justify-between w-full bg-white gap-3 rounded min-h-32">
            <div className="flex flex-col-reverse lg:flex-row gap-3 w-full p-4">
                <div className="flex flex-col min-w-1/3 gap-3 text-xs font-bold">
                    <p className="text-[10px] text-gray-700">Total Sales</p>
                    <p className="text-zinc-600">$290.90</p>
                </div>
                <div className="w-full max-w-2/3 outline outline-gray-200">
                    <CleanCharts data1={data} borderColor1={borderColor} data2={[1, 2, 1, 1]} borderColor2="gray" />
                </div>
            </div>
            <hr className="text-gray-300" />
            <div className="flex items-center justify-between px-4 pb-2 w-full text-[10px] text-zinc-700">
                <p>6 total orders</p>
                <p>View reports</p>
            </div>
        </div>
    )
}

export default SideCard