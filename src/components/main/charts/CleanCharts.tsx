import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const CleanCharts = (
    { data1 = [1, 2, 3, 4],
        borderColor1 = "red",
        data2 = [2, 1, 4, 3],
        borderColor2 = "blue",
    }: {
        data1?: number[];
        borderColor1?: string;
        data2?: number[];
        borderColor2?: string;
    }
) => {

    const options = {
        responsive: true,

        plugins: {
            legend: {
                display: false
            },
        },

        scales: {
            y: {
                display: false
            }
        },

        radius: 0
    }

    const lineChartData = {
        labels: ["", "", "", ""],

        datasets: [
            {
                data: data1,
                borderColor: borderColor1
            },
            {
                data: data2,
                borderColor: borderColor2,
            },
        ],
    };

    return (
        <Line options={options} data={lineChartData} />
    )
}

