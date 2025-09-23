import api from "@/lib/axiosInstance";
import { Button, DatePicker, Input, Select, Table, message } from "antd";
import dayjs from "dayjs";
import { Download, FileSpreadsheet, Plus } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
import CreateDailyReport from "../components/CreateDailyReport";
import DailyReportMobile from "./DailyReportMobile.jsx";
import * as XLSX from "xlsx";
import classNames from "classnames";

function DailyReport() {
	const [report, setReport] = useState([]);
	const [projects, setProjects] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);

	const [params, setParams] = useState({
		page: 1,
		pageSize: 20,
		name: "",
		startDate: new Date().toISOString().split("T")[0],
		endDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
		projectId: null,
		workType: null,
	});

	useEffect(() => {
		fetchReports();
	}, [params]);

	useEffect(() => {
		fetchProjects();
	}, []);

	const fetchReports = async () => {
		try {
			const res = await api.get("/api/daily-reports", {
				params,
			});
			setReport(res.data.data || []);
		} catch (err) {
			console.error("Failed to fetch daily reports", err);
			setReport([]);
		}
	};

	const fetchProjects = async () => {
		try {
			const res = await api.get("/api/projects", {
				params: { limit: 10, page: 1 },
			});
			setProjects([
				{ value: null, label: "All Projects" },
				...(res.data.data.map((proj) => ({ value: proj.project_id, label: proj.name })) ||
					[]),
			]);
		} catch (err) {
			console.error("Failed to fetch projects", err);
			setProjects([]);
		}
	};

	const handleModal = (visible) => {
		setModalVisible(visible);
		if (!visible) {
			fetchReports();
		}
	};

	const downloadReport = async () => {
		try {
			if (!report || report.length === 0) {
				message.info("No report data to export");
				return;
			}

			const rows = report.map((r) => ({
				ID: r.report_id,
				"Work Type": r.work_type || "",
				Employee: r.name || "",
				Username: r.username || "",
				"Report Date": r.report_date || "",
				"Plan Today": r.tasks_today || "",
				"Plan Tomorrow": r.plan_tomorrow || "",
				"Created At": r.created_at ? moment(r.created_at).format("YYYY-MM-DD HH:mm") : "",
			}));

			const ws = XLSX.utils.json_to_sheet(rows, { skipHeader: false });
			const wb = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(wb, ws, "Daily Reports");

			const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
			const blob = new Blob([wbout], { type: "application/octet-stream" });
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute(
				"download",
				`daily_reports_${moment().format("YYYYMMDD_HHmmss")}.xlsx`,
			);
			document.body.appendChild(link);
			link.click();
			link.parentNode.removeChild(link);
			window.URL.revokeObjectURL(url);
		} catch (err) {
			console.error("Failed to download report", err);
			message.error("Failed to generate Excel file");
		}
	};

	const columns = [
		{ title: "ID", dataIndex: "report_id", key: "report_id", width: 70 },
		{
			title: "Work Type",
			dataIndex: "work_type",
			key: "work_type",
			width: 120,
			render: (text) => (
				<div
					className={classNames("capitalize text-center rounded-sm", {
						"text-green-600 bg-green-100": text === "full-time",
						"text-blue-600 bg-blue-100": text === "part-time",
						"text-pink-600 bg-pink-100": text === "remote",
						"text-orange-600 bg-orange-100": text === "on-site",
					})}
				>
					{text || "-"}
				</div>
			),
		},
		{ title: "Employee", dataIndex: "name", key: "name", width: 150 },
		{ title: "Username", dataIndex: "username", key: "username", width: 150 },
		{
			title: "Created At",
			dataIndex: "created_at",
			key: "created_at",
			width: 180,
			render: (text) => moment(text).format("YYYY-MM-DD HH:mm"),
		},
		{
			title: "Plan Today",
			dataIndex: "tasks_today",
			key: "tasks_today",
			render: (text) => <div style={{ whiteSpace: "pre-line" }}>{text}</div>,
		},
		{
			title: "Plan Tommorrow",
			dataIndex: "plan_tomorrow",
			key: "plan_tomorrow",
			render: (text) => <div style={{ whiteSpace: "pre-line" }}>{text}</div>,
		},
	];

	return (
		<>
			<div className="lg:hidden">
				<DailyReportMobile
					report={report}
					loading={!report}
					params={params}
					setParams={setParams}
					projects={projects}
					reports={report}
					fetchReports={fetchReports}
					modalVisible={modalVisible}
					onAdd={() => handleModal(true)}
					onExport={downloadReport}
				/>
			</div>

			{/* Desktop/tablet view */}
			<div className="hidden lg:flex w-full h-full  flex-col gap-8">
				<div className="flex">
					<h2 className="text-3xl font-bold uppercase">Daily Report</h2>
					<div className="flex gap-4 ml-auto">
						<Button
							type="primary"
							onClick={() => handleModal(true)}
							icon={<Plus className="w-4 h-4" />}
						>
							Add
						</Button>
						<Button
							type="primary"
							icon={<FileSpreadsheet className="w-4 h-4" />}
							onClick={downloadReport}
							style={{
								backgroundColor: "#217346",
								borderColor: "#217346",
							}}
						>
							Export
						</Button>
					</div>
				</div>
				<div className="flex-col gap-8 custom-table px-5 pt-5 rounded-md shadow bg-white flex-1 overflow-auto">
					<div className="flex gap-4">
						<div className="flex gap-4 mb-5">
							<div>
								<Input
									placeholder="Search by name"
									className="w-48"
									value={""}
									onChange={() => {}}
								/>
							</div>
							<DatePicker
								className="w-48"
								value={params.startDate ? dayjs(params.startDate) : null}
								onChange={(date, dateString) =>
									setParams((prev) => ({ ...prev, startDate: dateString }))
								}
							/>
							<DatePicker
								className="w-48"
								value={params.endDate ? moment(params.endDate) : null}
								onChange={(date, dateString) =>
									setParams((prev) => ({ ...prev, endDate: dateString }))
								}
							/>
							<Select
								value={params.projectId}
								className="w-48"
								placeholder="Select Project"
								options={projects}
								onChange={(value) =>
									setParams((prev) => ({ ...prev, projectId: value }))
								}
							/>
							<Select
								value={params.workType}
								className="w-48"
								placeholder="Work Type"
								onChange={(value) =>
									setParams((prev) => ({ ...prev, workType: value }))
								}
								options={[
									{ value: "full-time", label: "Full-time" },
									{ value: "part-time", label: "Part-time" },
									{ value: "wfh", label: "Work from home" },
									{ value: "on-site", label: "On-site" },
								]}
							/>
						</div>
					</div>
					<Table
						columns={columns}
						dataSource={report}
						rowKey="id"
						bordered
						pagination={{ pageSize: 20 }}
						tableLayout="auto"
						scroll={{ y: "calc(100vh - 320px)", x: "max-content" }}
					/>
				</div>
				{modalVisible && (
					<CreateDailyReport
						onClose={() => handleModal(false)}
						visible={modalVisible}
						onSuccess={() => {
							setModalVisible(false);
							fetchReports();
						}}
					/>
				)}
			</div>
		</>
	);
}

export default DailyReport;
