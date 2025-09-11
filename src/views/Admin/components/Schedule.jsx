import React, { useState } from "react";
import { Calendar } from "antd";
import dayjs from "dayjs";

const mockSchedule = {
	"2027-06-15": [
		{
			time: "9:00 AM to 9:30 AM",
			title: "Morning Briefing",
			department: "All Departments",
			deptColor: "text-blue-500",
		},
		{
			time: "10:00 AM to 11:00 AM",
			title: "Project Review Meeting",
			department: "Product Development",
			deptColor: "text-red-400",
		},
		{
			time: "11:30 AM to 12:30 PM",
			title: "Marketing Strategy Session",
			department: "Marketing",
			deptColor: "text-orange-400",
		},
		{
			time: "12:45 PM to 1:30 PM",
			title: "Lunch and Learn",
			department: "All Departments",
			deptColor: "text-blue-500",
		},
		{
			time: "1:30 PM to 2:30 PM",
			title: "Focus Group Discussion",
			department: "Product Development",
			deptColor: "text-red-400",
		},
	],
};

function Schedule() {
	const [selectedDate, setSelectedDate] = useState(dayjs("2027-06-15"));
	const formattedDate = selectedDate.format("YYYY-MM-DD");
	const events = mockSchedule[formattedDate] || [];

	const calendarHeader = ({ value, onChange }) => {
		const prevYear = () => onChange(value.subtract(1, "year"));
		const prevMonth = () => onChange(value.subtract(1, "month"));
		const nextMonth = () => onChange(value.add(1, "month"));
		const nextYear = () => onChange(value.add(1, "year"));
		return (
			<div className="flex items-center justify-between py-3">
				<div className="flex gap-4 text-xl text-gray-500">
					<div
						onClick={prevYear}
						className="cursor-pointer"
					>
						&laquo;
					</div>
					<div
						onClick={prevMonth}
						className="cursor-pointer"
					>
						&lsaquo;
					</div>
				</div>
				<div className="text-lg font-semibold text-gray-700">
					{value.format("MMMM YYYY")}
				</div>
				<div className="flex gap-4 text-xl text-gray-500">
					<div
						onClick={nextMonth}
						className="cursor-pointer"
					>
						&rsaquo;
					</div>
					<div
						onClick={nextYear}
						className="cursor-pointer"
					>
						&raquo;
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
			<div className="flex justify-between items-center mb-2">
				<h2 className="text-lg font-bold text-gray-700">Schedule</h2>
				<span className="text-blue-400 text-sm cursor-pointer">See All</span>
			</div>
			<Calendar
				fullscreen={false}
				value={selectedDate}
				onSelect={setSelectedDate}
				className="mb-4 border-none"
				headerRender={calendarHeader}
			/>
			<div className="mt-2">
				<h3 className="text-md font-semibold text-gray-700 mb-2">
					{selectedDate.format("D MMMM YYYY")}
				</h3>
				<ul className="space-y-3">
					{events.length === 0 ? (
						<li className="text-gray-400">No events scheduled.</li>
					) : (
						events.map((event, idx) => (
							<li
								key={idx}
								className="flex flex-col"
							>
								<span className="text-xs text-gray-400 mb-1">{event.time}</span>
								<span className="font-medium text-gray-700">{event.title}</span>
								<span className={`text-xs mt-1 ${event.deptColor}`}>
									{event.department}
								</span>
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	);
}

export default Schedule;
