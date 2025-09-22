type TParams = {
    cardName: string,
    rate: number,
    profit: number,
    chartComponent: React.ReactNode
}

const DataCard = ({ cardName, profit, rate, chartComponent }: TParams) => {
    return (
        <div className="bg-white outline outline-gray-200 rounded p-6">

            <div className="flex items-center justify-between text-gray-400 text-sm">
                <div className="flex items-center gap-2 text-xs">
                    <p>{cardName}</p>
                    <i className="fa-solid fa-circle-question"></i>
                </div>
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>

            <div className="flex items-center justify-between font-bold text-gray-500 mt-4 text-sm">
                <p>$ {profit}</p>
                <div className="flex items-center gap-2 text-xs text-green-500">
                    <i className="fa-solid fa-arrow-up text-sm"></i>
                    <p>{rate}%</p>
                </div>
            </div>

            <div>
                <p className="text-xs mt-4 mb-2">Sales Over Time</p>
                {chartComponent}
            </div>
        </div>
    )
}

export default DataCard