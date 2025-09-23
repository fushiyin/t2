import api from "@/lib/axiosInstance";
import { Button, DatePicker, Input, Select, Table, Tag } from "antd";
import { Check, Eye, Plus, RefreshCcw, StopCircle } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import LeaveRequestCreate from "../components/LeaveRequestCreate";
import LeaveRequestDialog from "../components/LeaveRequestDialog";
import { useSelector } from "react-redux";
import LeaveRequestMobile from "./LeaveRequestMobile.jsx";

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

function LeaveRequest() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const [params, setParams] = useState({
		page: 1,
		pageSize: 10,
		name: "",
		status: "",
		startDate: null,
		endDate: null,
	});

	const [dialogVisible, setDialogVisible] = useState(false);
	const [selectedRecord, setSelectedRecord] = useState(null);
	const [actionLoading, setActionLoading] = useState(false);
	const [createVisible, setCreateVisible] = useState(false);
	const user = useSelector((state) => state.user);

	const fetchRequests = useCallback(async () => {
		setLoading(true);
		try {
			const res = await api.get("/api/leave-requests", { params });
			setData(res.data.data || []);
		} catch (err) {
			console.error("Failed to fetch leave requests", err);
			setData([]);
		} finally {
			setLoading(false);
		}
	}, [params]);

	useEffect(() => {
		fetchRequests();
	}, [fetchRequests, params]);

	const handleReset = () => {
		setParams({
			page: 1,
			pageSize: 10,
			name: "",
			status: "",
			startDate: null,
			endDate: null,
		});
	};

	const openDialog = (record) => {
		setSelectedRecord(record);
		setDialogVisible(true);
	};

	const closeDialog = () => {
		setSelectedRecord(null);
		setDialogVisible(false);
	};

	const handleAction = async (id, status) => {
		setActionLoading(true);
		try {
			await api.patch(`/api/leave-requests/${id}/status`, { status });
			await fetchRequests();
			closeDialog();
		} catch (err) {
			console.error("Action failed", err);
		} finally {
			setActionLoading(false);
		}
	};

	const requesterColumn = {
		title: "Requester",
		dataIndex: "employee_name",
		key: "employee_name",
	};

	const coreColumns = [
		{ title: "ID", dataIndex: "id", key: "id" },
		{ title: "From", dataIndex: "start_date", key: "start_date" },
		{ title: "To", dataIndex: "end_date", key: "end_date" },
		{
			title: "Leader Status",
			dataIndex: "leader_status",
			key: "leader_status",
			render: getStatusTag,
		},
		{
			title: "Leader Update At",
			dataIndex: "leader_approved_at",
			key: "leader_approved_at",
			render: (text) => (text ? new Date(text).toLocaleString() : "-"),
		},
		{
			title: "HR Status",
			dataIndex: "hr_status",
			key: "hr_status",
			render: getStatusTag,
		},
		{
			title: "HR Update At",
			dataIndex: "hr_approved_at",
			key: "hr_approved_at",
			render: (text) => (text ? new Date(text).toLocaleString() : "-"),
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: getStatusTag,
		},
	];

	const actionColumn = {
		title: "Action",
		dataIndex: "action",
		key: "action",
		render: (_, record) => {
			const role = (user?.role || "").toLowerCase();
			const overallStatus = (record?.status || "").toLowerCase();
			const leaderStatus = (record?.leader_status || "").toLowerCase();
			const hrStatus = (record?.hr_status || "").toLowerCase();

			let canAct = false;
			if (overallStatus === "pending") {
				if (role === "manager" || role === "leader") {
					canAct = leaderStatus === "pending";
				} else if (role === "admin" || role === "hr") {
					canAct = hrStatus === "pending";
				}
			}

			if (!canAct) {
				return (
					<div className="flex gap-2">
						<Button
							size="small"
							onClick={() => openDialog(record)}
							title="Open Request"
							icon={<Eye className="w-4 h-4" />}
						>
							View
						</Button>
					</div>
				);
			}

			return (
				<div className="flex gap-2">
					<Button
						size="small"
						type="primary"
						onClick={() => handleAction(record.id, "approved")}
						title="Approve Request"
						icon={<Check className="w-4 h-4" />}
					>
						Approve
					</Button>
					<Button
						size="small"
						danger
						onClick={() => handleAction(record.id, "rejected")}
						icon={<StopCircle className="w-4 h-4" />}
						title="Reject Request"
					>
						Reject
					</Button>
				</div>
			);
		},
	};

	let columns = [...coreColumns];
	if (!(user && user.role === "employee")) {
		columns.splice(1, 0, requesterColumn);
		columns.push(actionColumn);
	}

	return (
		<>
			{/* Mobile view */}
			<div className="md:hidden">
				<LeaveRequestMobile
					data={data}
					loading={loading}
					params={params}
					setParams={setParams}
					fetchRequests={fetchRequests}
					createVisible={createVisible}
					setCreateVisible={setCreateVisible}
					dialogVisible={dialogVisible}
					setDialogVisible={setDialogVisible}
					selectedRecord={selectedRecord}
					setSelectedRecord={setSelectedRecord}
					actionLoading={actionLoading}
					handleAction={handleAction}
					openDialog={openDialog}
					closeDialog={closeDialog}
				/>
			</div>
			{/* Desktop/tablet view */}
			<div className="custom-table w-full hidden md:block">
				<h2 className="text-3xl font-bold uppercase mb-5">Leave Requests</h2>
				<div className="flex flex-col w-full gap-8 h-full p-5 bg-white rounded-lg shadow flex-1 overflow-auto">
					<div className="flex w-full justify-between">
						<div className="gap-4 flex">
							<Input
								placeholder="Search by name"
								className="w-48 mr-4"
								value={params.name}
								onChange={(e) =>
									setParams((prev) => ({ ...prev, name: e.target.value }))
								}
							/>
							<Select
								placeholder="Filter by status"
								className="w-48"
								value={params.status}
								onChange={(value) =>
									setParams((prev) => ({ ...prev, status: value }))
								}
							>
								<Select.Option value="">All</Select.Option>
								<Select.Option value="pending">Pending</Select.Option>
								<Select.Option value="approved">Approved</Select.Option>
								<Select.Option value="rejected">Rejected</Select.Option>
							</Select>
							<DatePicker.RangePicker
								className="w-100"
								value={
									params.startDate && params.endDate
										? [params.startDate, params.endDate]
										: []
								}
								onChange={(dates) => {
									setParams((prev) => ({
										...prev,
										startDate: dates ? dates[0] : null,
										endDate: dates ? dates[1] : null,
									}));
								}}
							/>
							<Button
								type="primary"
								onClick={handleReset}
								icon={<RefreshCcw className="w-4 h-4" />}
							>
								Reset
							</Button>
						</div>
						<div className="flex gap-4">
							<Button
								type="primary"
								onClick={() => setCreateVisible(true)}
								icon={<Plus className="w-4 h-4" />}
							>
								Add
							</Button>
						</div>
					</div>
					<Table
						columns={columns}
						dataSource={data}
						loading={loading}
						rowKey="id"
						onRow={(record) => ({
							onClick: () => openDialog(record),
						})}
					/>
				</div>

				<LeaveRequestCreate
					visible={createVisible}
					onClose={() => setCreateVisible(false)}
					onSuccess={() => {
						setCreateVisible(false);
						fetchRequests();
					}}
				/>
				<LeaveRequestDialog
					visible={dialogVisible}
					onClose={closeDialog}
					record={selectedRecord}
					onConfirm={handleAction}
					loading={actionLoading}
				/>
			</div>
		</>
	);
}

export default LeaveRequest;
