import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Input, DatePicker } from "antd";
import dayjs from "dayjs";
import DetailDialog from "../components/DetailDialog";

function EditableCell({ value, onSave, type }) {
	const [editing, setEditing] = useState(false);
	const [inputValue, setInputValue] = useState(value);

	const handleBlur = () => {
		setEditing(false);
		if (inputValue !== value) {
			onSave(inputValue);
		}
	};

	if (editing && type === "date") {
		return (
			<DatePicker
				value={inputValue ? dayjs(inputValue) : null}
				onChange={(date) => {
					setInputValue(date ? date.format("YYYY-MM-DD") : "");
					setEditing(false);
					if (date) onSave(date.format("YYYY-MM-DD"));
				}}
				onBlur={handleBlur}
				autoFocus
				size="small"
				format="YYYY-MM-DD"
			/>
		);
	}

	return editing ? (
		<Input
			value={inputValue}
			onChange={(e) => setInputValue(e.target.value)}
			onBlur={handleBlur}
			onPressEnter={handleBlur}
			autoFocus
			size="small"
		/>
	) : (
		<div
			onClick={() => setEditing(true)}
			className="cursor-pointer"
		>
			{type === "date" && value ? dayjs(value).format("YYYY-MM-DD") : value}
		</div>
	);
}

function UserManagement() {
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [userId, setUserId] = useState(null);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await axios.get("/api/users");
			setUser(response.data);
		} catch (err) {
			setError("Failed to fetch users");
		}
		setLoading(false);
	};

	const handleResetPassword = async (userId) => {
		try {
			await axios.patch(`/api/users/${userId}/reset-password`);
			alert("Password reset successfully");
		} catch (err) {
			alert("Failed to reset password");
			console.error(err);
		}
	};

	const handleCellSave = async (record, dataIndex, newValue) => {
		try {
			await axios.patch(`/api/users/${record.id}`, {
				[dataIndex]: newValue,
			});
			setUser((prev) =>
				prev.map((u) => (u.id === record.id ? { ...u, [dataIndex]: newValue } : u)),
			);
		} catch (err) {
			setError("Failed to update user");
		}
	};

	const columns = [
		{ title: "ID", dataIndex: "id", key: "id" },
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: (text, record) => (
				<EditableCell
					value={text}
					onSave={(newValue) => handleCellSave(record, "name", newValue)}
				/>
			),
		},
		{
			title: "Date of Birth",
			dataIndex: "date_of_birth",
			key: "date_of_birth",
			render: (text, record) => (
				<EditableCell
					value={text}
					onSave={(newValue) => handleCellSave(record, "date_of_birth", newValue)}
					type="date"
				/>
			),
		},
		{
			title: "Username",
			dataIndex: "username",
			key: "username",
			render: (text, record) => (
				<EditableCell
					value={text}
					onSave={(newValue) => handleCellSave(record, "username", newValue)}
				/>
			),
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			render: (text, record) => (
				<EditableCell
					value={text}
					onSave={(newValue) => handleCellSave(record, "email", newValue)}
				/>
			),
		},
		{
			title: "Role",
			dataIndex: "role",
			key: "role",
			render: (text, record) => (
				<EditableCell
					value={text}
					onSave={(newValue) => handleCellSave(record, "role", newValue)}
				/>
			),
		},
		{
			title: "Action",
			render: (_, record) => {
				const { id } = record;
				return (
					<button
						onClick={() => handleResetPassword(id)}
						className="text-blue-600 hover:underline"
					>
						Reset Password
					</button>
				);
			},
		},
	];

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="w-full h-full flex flex-col gap-5">
			<h2 className="text-3xl font-bold uppercase">User Management</h2>
			<div className="flex-1 overflow-auto no-scrollbar scrollbar-hidden custom-table">
				<Table
					columns={columns}
					dataSource={user}
					rowKey="id"
					bordered
					pagination={{ pageSize: 20 }}
					scroll={{ y: "78vh" }}
					onRow={(record) => ({
						onClick: () => setUserId(record.id),
					})}
				/>
			</div>
			{userId && (
				<DetailDialog
					userId={userId}
					onClose={() => setUserId(null)}
				/>
			)}
		</div>
	);
}

export default UserManagement;
