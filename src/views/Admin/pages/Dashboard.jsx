import { useState, useEffect } from "react";
import axios from "axios";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import classNames from "classnames";
import { Clock, File, LayoutDashboard, NotebookTabs } from "lucide-react";
import GenderDistribution from "../components/GenderDistribution";
import RankingDistribution from "../components/RankingDistribution";
import Schedule from "../components/Schedule";
import AttendanceStat from "../components/AttendanceStat";
import LeaveRequest from "../components/LeaveRequest";
import CheckInList from "../components/CheckInList";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DashBoardCard(object) {
	return (
		<div
			className={classNames(
				"w-full max-w-4xl shadow-lg p-6 rounded-lg bg-white flex flex-col border-l-6 relative overflow-hidden",
				object.className,
			)}
		>
			<div className="absolute right-2 bottom-18 opacity-20 text-blue-300">
				<File className="w-16 h-16" />
			</div>

			{object.icon ? (
				<object.icon className={classNames(`w-8 h-8 text-${object.color}-500 mb-2`)} />
			) : (
				<Clock
					className={classNames("w-8 h-8", object.color && `text-${object.color}-500`)}
				/>
			)}
			<div className="flex w-full justify-between items-end">
				<h2 className="text-lg">{object.title}</h2>
				<h1 className="text-xl font-bold">{object.value}</h1>
			</div>
		</div>
	);
}

function DashboardManagement() {
	const [user, setUser] = useState({});
	const [stat, setStat] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchSummary();
		fetchStats();
	}, []);

	const fetchSummary = async () => {
		try {
			const response = await axios.get("/api/dashboard/summary");
			setUser(response.data);
			console.log(setUser);
		} catch (err) {
			console.error(err);
		}
		setLoading(false);
	};

	const fetchStats = async () => {
		try {
			const res = await axios.get("/api/dashboard/stats");
			setStat(res.data);
		} catch (err) {
			console.error(err);
		}
	};

	if (loading) return <div>Loading...</div>;

	return (
		<div className="w-full h-full min-h-0 flex flex-col items-center gap-5 pb-5">
			{/* dashboard card */}
			<div className="w-full flex-shrink-0">
				<h2 className="text-2xl font-bold">Welcome, Admin!</h2>
			</div>
			<div className="flex-1 w-full min-h-0 overflow-auto flex flex-col gap-5">
				<div className="flex-col w-full">
					<div className="flex flex-col gap-10 w-full md:flex-row md:flex-wrap bg-blue-100 p-5 rounded-lg self-start shadow-lg overflow-x-hidden">
						<div className="datetime min-w-[250px]">
							<h2 className="text-xl mb-2 text-gray-700 font-semibold">
								{new Date().toLocaleString("vi-VN", {
									weekday: "long",
									year: "numeric",
									month: "numeric",
									day: "numeric",
								})}
							</h2>
						</div>
						<DashBoardCard
							title="Today Checkins"
							className="flex-1 border-red-400"
							icon={Clock}
							color="red"
							value={user.totalLoginToday || 0}
						/>
						<DashBoardCard
							title="Checkins Late"
							className="flex-1 border-blue-400"
							icon={LayoutDashboard}
							color="blue"
							value={user.totalLateCheckin || 0}
						/>
						<DashBoardCard
							title="Total Employees"
							className="flex-1 border-green-400"
							icon={NotebookTabs}
							color="green"
							value={user.totalEmployees || 0}
						/>
					</div>
				</div>
			</div>
			<div className="w-full items-start">
				<div className="w-full flex items-stretch justify-start mt-5 gap-5 min-h-0">
					<div className="flex flex-col md:flex-row gap-5 max-w-full w-full min-h-0">
						<div className="flex-1 flex-col gap-10 h-full min-h-0">
							<div>
								<CheckInList data={user.data} />
							</div>
							<div className="mt-5 w-full bg-white rounded-lg p-4 md:h-[317px] h-auto shadow-lg flex overflow-auto">
								<LeaveRequest />
							</div>
						</div>
						<div className="flex-1 h-full">
							<AttendanceStat stats={stat.weeklyCheckinStats || {}} />
							<div className="mt-5 flex gap-5 flex-wrap">
								<GenderDistribution data={user.data} />
								<RankingDistribution
									rankingStats={stat.rankingDistribution || {}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardManagement;
