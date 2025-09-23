import CommonModal from "@/components/CommonModal";
import { Button, DatePicker, Divider, Empty, Input, List, Select, Spin, Tag } from "antd";
import dayjs from "dayjs";
import { ArrowLeft, ChevronDown, ChevronUp, FileSpreadsheet, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function DailyReportMobile({
	report = [],
	loading = false,
	params,
	setParams,
	projects = [],
	fetchReports,
	onAdd,
	onExport,
}) {
	const [filtersOpen, setFiltersOpen] = useState(false);
	const [selected, setSelected] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (typeof fetchReports === "function") fetchReports();
	}, [
		params.startDate,
		params.endDate,
		params.name,
		params.projectId,
		params.workType,
		params.page,
		params.pageSize,
	]);

	const getWorkTypeTag = (type) => {
		const key = (type || "").toLowerCase();
		switch (key) {
			case "full-time":
				return <Tag color="green">Full-time</Tag>;
			case "part-time":
				return <Tag color="blue">Part-time</Tag>;
			case "wfh":
				return <Tag color="purple">WFH</Tag>;
			case "on-site":
				return <Tag color="orange">On-site</Tag>;
			default:
				return <Tag>{type || "-"}</Tag>;
		}
	};

	return (
		<div className="p-4">
			<div className="flex items-center justify-between mb-3">
				<div className="flex gap-2">
					<div className="p-2 bg-gray-100 rounded-full">
						<ArrowLeft
							onClick={() => navigate(-1)}
							className="cursor-pointer rounded-full"
						/>
					</div>
					<h2 className="text-2xl font-bold uppercase text-center text-blue-900">
						Daily Reports
					</h2>
				</div>
				<div className="flex items-center justify-between mb-3">
					<div className="flex items-center gap-2">
						<button
							className="flex items-center gap-1 text-sm text-gray-600"
							onClick={() => setFiltersOpen((v) => !v)}
						>
							{filtersOpen ? <ChevronUp /> : <ChevronDown />}
						</button>
					</div>
				</div>
			</div>

			{filtersOpen && (
				<div className="flex flex-col gap-3 mb-4">
					<Input
						placeholder="Search by name"
						value={params.name}
						onChange={(e) => setParams((p) => ({ ...p, name: e.target.value }))}
						allowClear
					/>

					<div className="flex gap-2">
						<Select
							placeholder="Project"
							className="flex-1"
							value={params.projectId}
							onChange={(v) => setParams((p) => ({ ...p, projectId: v }))}
							options={projects}
						/>
						<Select
							placeholder="Work Type"
							className="w-40"
							value={params.workType}
							onChange={(v) => setParams((p) => ({ ...p, workType: v }))}
							options={[
								{ value: "full-time", label: "Full-time" },
								{ value: "part-time", label: "Part-time" },
								{ value: "wfh", label: "Work from home" },
								{ value: "on-site", label: "On-site" },
							]}
						/>
					</div>

					<DatePicker.RangePicker
						className="w-full"
						value={
							params.startDate && params.endDate
								? [dayjs(params.startDate), dayjs(params.endDate)]
								: []
						}
						onChange={(dates) =>
							setParams((prev) => ({
								...prev,
								startDate: dates ? dates[0] : null,
								endDate: dates ? dates[1] : null,
							}))
						}
					/>
				</div>
			)}

			<div className="flex items-end justify-end gap-2">
				<Button
					style={{ backgroundColor: "#217346", borderColor: "#217346", color: "white" }}
					type="default"
					color="white"
					icon={<FileSpreadsheet />}
					onClick={onExport}
				>
					Export
				</Button>
				<Button
					type="primary"
					icon={<Plus />}
					onClick={onAdd}
				>
					Add
				</Button>
			</div>

			{loading ? (
				<div className="min-h-[50vh] flex items-center justify-center">
					<Spin />
				</div>
			) : !report || report.length === 0 ? (
				<div className="min-h-[50vh] flex items-center justify-center">
					<Empty description="No daily reports" />
				</div>
			) : (
				<List
					dataSource={report}
					renderItem={(r) => (
						<List.Item onClick={() => setSelected(r)}>
							<div className="w-full border bg-white/5 p-4 rounded-lg shadow flex flex-col gap-2">
								<div className="flex justify-between items-start">
									<div>
										<div className="text-md text-gray-500 font-semibold">
											{r.report_date || ""}
										</div>
										<div className="font-semibold">
											{r.name || r.employee || "-"}
										</div>
									</div>
									<div>{getWorkTypeTag(r.work_type)}</div>
								</div>
								<div className="text-sm text-gray-600 whitespace-pre-line">
									<Tag
										color="blue"
										className="font-semibold"
									>
										Task Today
									</Tag>
									<div>{r.tasks_today || "-"}</div>
								</div>
								<div className="text-sm text-gray-600 whitespace-pre-line">
									<Tag
										color="green"
										className="font-semibold"
									>
										Plan Tomorrow
									</Tag>
									<div>{r.plan_tomorrow || "-"}</div>
								</div>
							</div>
						</List.Item>
					)}
				/>
			)}

			{selected && (
				<CommonModal
					visible={!!selected}
					onClose={() => setSelected(null)}
					title="Report Details"
					footer={null}
					headerBg="#0b3c8f"
				>
					<div className="space-y-3">
						<div className="font-semibold">{selected.name || selected.employee}</div>
						<div className="text-sm text-gray-500">{selected.report_date}</div>
						<div>{getWorkTypeTag(selected.work_type)}</div>
						<div className="flex flex-col gap-1">
							<div className="font-semibold w-max">Task Today</div>
							<div className="text-sm whitespace-pre-line">
								{selected.tasks_today || "-"}
							</div>
						</div>
						<Divider color="black" />

						<div className="flex flex-col gap-1">
							<div className="font-semibold w-max">Plan Tomorrow</div>
							<div className="text-sm whitespace-pre-line">
								{selected.plan_tomorrow || "-"}
							</div>
						</div>
					</div>
				</CommonModal>
			)}
		</div>
	);
}
