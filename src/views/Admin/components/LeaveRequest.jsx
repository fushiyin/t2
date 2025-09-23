import { useState, useEffect } from "react";
import { Table, Button, Tag } from "antd";
import axios from "axios";
import { CheckCheckIcon, XIcon } from "lucide-react";

function LeaveRequest() {
	const [requests, setRequests] = useState([]);

	const fetchRequests = async (status) => {
		try {
			const res = await axios.get(`/api/leave-requests?status=${status}`);
			setRequests(res.data.data || []);
		} catch (err) {
			console.error("Failed to fetch leave requests", err);
			setRequests([]);
		}
	};

	useEffect(() => {
		fetchRequests("pending");
	}, []);

	const handleAction = async (id, status) => {
		try {
			await axios.patch(`/api/leave-requests/${id}`, { status });
			setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
		} catch (err) {
			console.error("Action failed", err);
		}
	};

	const columns = [
		{ title: "Name", dataIndex: "employee_name", key: "employee_name" },
		{ title: "Type", dataIndex: "leave_type", key: "leave_type" },
		{ title: "From", dataIndex: "start_date", key: "start_date" },
		{ title: "To", dataIndex: "end_date", key: "end_date" },
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: () => <Tag color="orange">Pending</Tag>,
		},
		{
			title: "Action",
			key: "action",
			render: (_, record) => (
				<div className="flex gap-2">
					<Button
						type="primary"
						size="small"
						onClick={() => handleAction(record.id, "approved")}
						title="Approve Request"
					>
						<CheckCheckIcon className="w-4 h-4" />
					</Button>
					<Button
						danger
						size="small"
						onClick={() => handleAction(record.id, "rejected")}
						title="Reject Request"
					>
						<XIcon className="w-4 h-4" />
					</Button>
				</div>
			),
		},
	];

	return (
		<div className="w-full custom-table-grid">
			<h2 className="text-lg font-bold mb-4 text-gray-600">Leave Requests</h2>
			<Table
				columns={columns}
				dataSource={requests || []}
				rowKey="id"
				bordered
				pagination={{ pageSize: 4 }}
			/>
		</div>
	);
}

export default LeaveRequest;
