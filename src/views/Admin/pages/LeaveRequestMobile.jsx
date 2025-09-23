import React, { useEffect, useState } from "react";
import { List, Button, Tag, Spin, Empty, Select, DatePicker, Input } from "antd";
import { Plus, Eye, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import dayjs from "dayjs";
import { useNavigate } from "react-router";

const statusColors = {
	approved: "green",
	rejected: "red",
	pending: "orange",
	default: "gray",
};

const getStatusTag = (status) => {
	const key = status ? status.toLowerCase() : "pending";
	return (
		<Tag
			color={statusColors[key] || statusColors.default}
			className="capitalize"
		>
			{key}
		</Tag>
	);
};

export default function LeaveRequestMobile({
	data = [],
	loading = false,
	params,
	setParams,
	fetchRequests,
	createVisible,
	setCreateVisible,
	dialogVisible,
	setDialogVisible,
	selectedRecord,
	setSelectedRecord,
	actionLoading,
	handleAction,
	openDialog,
	closeDialog,
}) {
	const [filtersOpen, setFiltersOpen] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		if (typeof fetchRequests === "function") {
			fetchRequests();
		}
	}, [
		params.startDate,
		params.endDate,
		params.name,
		params.status,
		params.page,
		params.pageSize,
	]);

	return (
		<div className="p-4">
			<div className="flex items-center justify-between">
				<div className="flex gap-2">
					<div className="p-2 bg-gray-100 rounded-full">
						<ArrowLeft
							onClick={() => navigate(-1)}
							className="cursor-pointer rounded-full"
						/>
					</div>
					<h2 className="text-2xl font-bold uppercase text-blue-600">Leave Requests</h2>
				</div>
				<button
					aria-expanded={filtersOpen}
					onClick={() => setFiltersOpen((v) => !v)}
					className="text-sm text-gray-600 p-2"
				>
					{filtersOpen ? <ChevronUp /> : <ChevronDown />}
				</button>
			</div>
			<div className="flex items-center justify-between gap-2">
				{filtersOpen && (
					<div className="flex flex-col gap-2 w-full my-4">
						<div className="w-full flex gap-2">
							<Input
								placeholder="Search by name"
								value={params.name}
								onChange={(e) => setParams((p) => ({ ...p, name: e.target.value }))}
								allowClear
								className="flex-1"
							/>
							<Select
								placeholder="Status"
								value={params.status}
								onChange={(v) => setParams((p) => ({ ...p, status: v }))}
								className="w-36"
							>
								<Select.Option value="">All</Select.Option>
								<Select.Option value="pending">Pending</Select.Option>
								<Select.Option value="approved">Approved</Select.Option>
								<Select.Option value="rejected">Rejected</Select.Option>
							</Select>
						</div>

						<DatePicker.RangePicker
							className="flex-1"
							value={
								params.startDate && params.endDate
									? [params.startDate, params.endDate]
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
			</div>

			<div className="flex items-center justify-end gap-2">
				<Button
					type="primary"
					icon={<Plus />}
					onClick={() => setCreateVisible(true)}
				>
					Add
				</Button>
			</div>

			{loading ? (
				<div className="min-h-[60vh] flex items-center justify-center">
					<Spin />
				</div>
			) : !data || data.length === 0 ? (
				<div className="min-h-[60vh] flex items-center justify-center">
					<Empty description="No leave requests" />
				</div>
			) : (
				<List
					dataSource={data}
					renderItem={(item) => (
						<List.Item
							onClick={() => {
								openDialog(item);
							}}
						>
							<div className="w-full border border-blue-500 p-4 rounded-lg shadow flex flex-col px-4">
								<div className="flex justify-between items-start">
									<div>
										<div className="font-semibold">
											{item.employee_name || item.name || "-"}
										</div>
										<div className="text-sm ">{`${item.start_date} → ${item.end_date}`}</div>
										<div className="text-sm flex items-center pt-2">
											<Tag
												color="blue"
												className="mb-1"
											>
												Leave Type:
											</Tag>
											<div>{item.leave_type || "N/A"}</div>
										</div>
									</div>
									<div>{getStatusTag(item.status)}</div>
								</div>
								<div className="flex items-center pt-2">
									<Tag
										color="red"
										className="mb-1"
									>
										Reason:
									</Tag>
									<span>{item.reason || "N/A"}</span>
								</div>
							</div>
						</List.Item>
					)}
				/>
			)}
		</div>
	);
}
