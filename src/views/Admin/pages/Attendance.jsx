import { Button, DatePicker, Input, Select, Table, Tag } from "antd";
import axios from "axios";
import { saveAs } from "file-saver";
import { File } from "lucide-react";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

function Attendance() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [total, setTotal] = useState(0);
	const [searchParams, setSearchParams] = useState({
		name: "",
		startDate: null,
		endDate: null,
		page: 1,
		pageSize: 20,
	});

	useEffect(() => {
		fetchData();
	}, [searchParams]);

	const fetchData = async () => {
		setLoading(true);
		try {
			const res = await axios.get("/api/attendance", {
				params: searchParams,
			});
			setData(res.data.data);
			setTotal(res.data.total);
		} catch (err) {
			console.error("Failed to fetch attendance data", err);
			setData([]);
		}
		setLoading(false);
	};

	const fetchDataForDownload = async () => {
		try {
			const res = await axios.get("/api/attendance", {
				params: { ...searchParams, page: 1, pageSize: total || 1000 },
			});
			return res.data.data;
		} catch (err) {
			console.error("Failed to fetch attendance data for download", err);
			return [];
		}
	};

	const downloadExcel = async () => {
		const dataToDownload = await fetchDataForDownload();
		if (!dataToDownload.length) return alert("No data to download");

		const excelData = dataToDownload.map((row) => ({
			...row,
			name: row.User?.name,
			username: row.User?.username,
			email: row.User?.email,
		}));

		const worksheet = XLSX.utils.json_to_sheet(excelData);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance");

		const excelBuffer = XLSX.write(workbook, {
			bookType: "xlsx",
			type: "array",
		});
		const blob = new Blob([excelBuffer], {
			type: "application/octet-stream",
		});
		saveAs(blob, "attendance.xlsx");
	};

	const columns = [
		{ title: "ID", dataIndex: "id", key: "id" },
		{ title: "Employee", dataIndex: ["User", "name"], key: "name" },
		{ title: "Username", dataIndex: ["User", "username"], key: "username" },
		{
			title: "Check-in Time",
			dataIndex: "checkin_time",
			key: "checkin_time",
		},
		{
			title: "Check-out Time",
			dataIndex: "checkout_time",
			key: "checkout_time",
		},
		{ title: "Date", dataIndex: "date", key: "date" },
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: (data) => {
				console.log(data);
				const status = typeof data === "boolean" ? (data ? "On Time" : "Late") : "Off";
				const color = status === "On Time" ? "green" : status === "Late" ? "red" : "orange";
				return <Tag color={color}>{status}</Tag>;
			},
		},
	];

	const handleSearchChange = (e) => {
		const { name, value } = e.target;
		setSearchParams((prev) => ({ ...prev, [name]: value, page: 1 }));
	};

	return (
		<div className="w-full custom-table flex flex-col gap-5">
			<h2 className="text-xl font-bold mb-4 uppercase">Attendance Management</h2>
			<div className="search-filter flex items-center mb-2 gap-5 w-auto justify-between">
				<div className="flex items-center gap-5">
					<Input
						value={searchParams.name}
						name="name"
						onChange={handleSearchChange}
						placeholder="Search by name"
						size="medium"
						className="mr-2"
					/>
					<Select
						placeholder="Select Status"
						size="medium"
						style={{ width: 150 }}
						value={searchParams.status}
						onChange={(value) =>
							setSearchParams((prev) => ({
								...prev,
								status: value,
								page: 1,
							}))
						}
						options={[
							{ label: "All", value: null },
							{ label: "On Time", value: "on-time" },
							{ label: "Late", value: "late" },
						]}
					/>
					<div className="flex items-center gap-2 w-fit min-w-[400px]">
						<DatePicker.RangePicker
							value={
								searchParams.startDate && searchParams.endDate
									? [searchParams.startDate, searchParams.endDate]
									: []
							}
							name="dateRange"
							onChange={(dates) => {
								setSearchParams((prev) => ({
									...prev,
									startDate: dates ? dates[0] : null,
									endDate: dates ? dates[1] : null,
								}));
							}}
							size="medium"
						/>
					</div>
				</div>
				<div>
					<Button
						onClick={downloadExcel}
						type="primary"
						size="medium"
						style={{ backgroundColor: "#2b772d" }}
						icon={<File className="w-4 h-4 mr-2" />}
					>
						Export
					</Button>
				</div>
			</div>
			<Table
				columns={columns}
				dataSource={data}
				rowKey="id"
				loading={loading}
				pagination={{
					current: searchParams.page,
					pageSize: searchParams.pageSize,
					total,
					onChange: (p, ps) => {
						setSearchParams((prev) => ({
							...prev,
							page: p,
							pageSize: ps,
						}));
					},
				}}
				bordered
				scroll={{ y: "70vh", x: "max-content" }}
			/>
		</div>
	);
}

export default Attendance;
