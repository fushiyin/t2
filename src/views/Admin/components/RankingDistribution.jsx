import React from "react";
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

function RankingDistribution({ rankingStats = {} }) {
	const labels = Object.keys(rankingStats);
	const dataValues = Object.values(rankingStats);

	const data = {
		labels,
		datasets: [
			{
				label: "Count",
				data: dataValues,
				backgroundColor: "#60a5fa",
			},
		],
	};

	const options = {
		indexAxis: "y",
		responsive: true,
		plugins: {
			legend: { display: false },
			title: {
				display: true,
				text: "Ranking Distribution",
				color: "#334155",
				font: { size: 18 },
			},
		},
		scales: {
			x: {
				beginAtZero: true,
				grid: { color: "#e5e7eb" },
				ticks: { color: "#334155" },
			},
			y: {
				grid: { color: "#e5e7eb" },
				ticks: { color: "#334155" },
			},
		},
	};

	return (
		<div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
			<Bar
				data={data}
				options={options}
			/>
		</div>
	);
}

export default RankingDistribution;
