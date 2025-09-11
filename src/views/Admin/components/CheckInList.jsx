import { Table } from "antd";

function CheckInList({ data }) {
	const columns = [
		{
			title: "ID",
			dataIndex: "employee_id",
			key: "employee_id",
		},
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		// {
		//     title: "Email",
		//     dataIndex: "email",
		//     key: "email",
		// },
		{
			title: "Check In",
			dataIndex: "checkin_time",
			key: "checkin_time",
			render: (text) => (text ? new Date(text).toLocaleTimeString() : "-"),
		},
		{
			title: "Check Out",
			dataIndex: "checkout_time",
			key: "checkout_time",
			render: (text) => (text ? new Date(text).toLocaleTimeString() : "-"),
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: (text) => {
				switch (text) {
					case "CHECKIN":
						return <span className="text-green-600 font-bold">CHECK-IN</span>;
					case "CHECKOUT":
						return <span className="text-red-600 font-bold">CHECK-OUT</span>;
					case "LEAVE":
						return <span className="text-gray-600 font-bold">LEAVE</span>;
					default:
						return text;
				}
			},
		},
	];

	return (
		<div>
			<h2 className="text-xl font-bold mb-1">Check-in List</h2>
			<div className="rounded-lg bg-white shadow-lg min-h-[430px]">
				<Table
					columns={columns}
					dataSource={Array.isArray(data) ? data : []}
					rowKey="id"
					pagination={{ pageSize: 8 }}
					bordered
					rowHeight={40}
					className="custom-table-grid"
				/>
			</div>
		</div>
	);
}

export default CheckInList;
