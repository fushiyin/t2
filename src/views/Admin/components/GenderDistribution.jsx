import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function GenderDistribution({ male = 8, female = 5 }) {
	const data = {
		labels: ["Male", "Female"],
		datasets: [
			{
				data: [male, female],
				backgroundColor: ["#3b82f6", "#f472b6"],
				borderWidth: 2,
			},
		],
	};
	const options = {
		plugins: {
			legend: {
				display: true,
				position: "bottom",
				labels: {
					color: "#334155",
					font: { size: 14 },
				},
			},
			title: {
				display: true,
				text: "Ranking Distribution",
				color: "#334155",
				font: { size: 18 },
			},
		},
	};
	return (
		<div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center">
			<Pie
				data={data}
				options={options}
			/>
		</div>
	);
}

export default GenderDistribution;
