
const AnalyticsCard = () => {

    const VisitedByLocation = [
        {
            name: 'United States',
            status: "positive",
            percent: 3.53,
            visitRate: 3.23
        },
        {
            name: 'Russia',
            status: "negative",
            percent: 3.41,
            visitRate: 1.34
        },
        {
            name: 'German',
            status: "positive",
            percent: 6.32,
            visitRate: 2.63
        },
        {
            name: 'Egypt',
            status: "positive",
            percent: 9.34,
            visitRate: 8.75
        },
        {
            name: 'Saudi Arabia',
            status: "positive",
            percent: 2.98,
            visitRate: 5.64
        },
        {
            name: 'Italia',
            status: "positive",
            percent: 3.33,
            visitRate: 1.23
        },
    ]

    return (
        <div className="bg-white outline outline-gray-200 rounded p-6">

            <div className="flex items-center justify-between text-gray-400 text-sm">
                <div className="flex items-center gap-2 text-xs">
                    <p>Online Store Visit By Location</p>
                    <i className="fa-solid fa-circle-question"></i>
                </div>
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>

            <div className="flex items-center justify-between flex-col gap-6 font-bold text-gray-500 text-sm mt-6">
                {VisitedByLocation.map((e) => (
                    <div className="flex items-center justify-between w-full text-xs">
                        <p>{e.name}</p>
                        <div className="flex items-center justify-between min-w-1/3">
                            <p>{e.visitRate}</p>

                            {
                                e.status === "positive"
                                    ? <i className="fa-solid fa-arrow-up text-sm text-green-500"></i>
                                    : <i className="fa-solid fa-arrow-down text-sm text-red-500"></i>
                            }
                            <p>{e.percent}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnalyticsCard