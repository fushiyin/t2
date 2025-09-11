import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AttendanceStat({ stats }) {
	const labels = Object.keys(stats).sort();

	const onTime = labels.map((date) => stats[date].onTime || 0);
	const late = labels.map((date) => stats[date].late || 0);

	const absent = labels.map(() => 0);

	const data = {
		labels,
		datasets: [
			{
				label: "On-Time",
				data: onTime,
				backgroundColor: "#60a5fa",
				stack: "attendance",
			},
			{
				label: "Late",
				data: late,
				backgroundColor: "#f87171",
				stack: "attendance",
			},
			{
				label: "Absent",
				data: absent,
				backgroundColor: "#f3f4f6",
				stack: "attendance",
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
				labels: { color: "#334155", font: { size: 14 } },
			},
			title: {
				display: true,
				text: "Attendance Overview",
				color: "#334155",
				font: { size: 18 },
			},
		},
		scales: {
			x: {
				stacked: true,
				grid: { color: "#e5e7eb" },
				ticks: { color: "#334155" },
			},
			y: {
				stacked: true,
				grid: { color: "#e5e7eb" },
				ticks: { color: "#334155" },
				beginAtZero: true,
			},
		},
	};

	return (
		<div className="mt-8 flex-1 bg-white rounded-xl shadow-lg p-6 w-full text-center">
			<Bar
				data={data}
				options={options}
			/>
			<div className="text-sm text-gray-500 mt-2">
				* Data is based on the last 7 days. In case of no check-in, employees are marked as
				absent. Data is based on the last 7 days. In case of no check-in, employees are
				marked as absent.
			</div>
		</div>
	);
}

export default AttendanceStat;
