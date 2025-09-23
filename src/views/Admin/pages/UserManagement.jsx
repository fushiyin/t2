import { useState, useEffect } from "react";
import api from "@/lib/axiosInstance";
import CommonModal from "@/components/CommonModal";
import { Table, Input, DatePicker, Button, Form, Select, message } from "antd";
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
	const [createVisible, setCreateVisible] = useState(false);
	const [creating, setCreating] = useState(false);
	const [form] = Form.useForm();

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await api.get("/api/users");
			setUser(response.data.users || []);
		} catch (err) {
			setError("Failed to fetch users");
		}
		setLoading(false);
	};

	const handleResetPassword = async (userId) => {
		try {
			await api.patch(`/api/users/${userId}/reset-password`);
			message.success("Password reset successfully");
		} catch (err) {
			message.error("Failed to reset password");
			console.error(err);
		}
	};

	const handleCellSave = async (record, dataIndex, newValue) => {
		try {
			await api.patch(`/api/users/${record.id}`, {
				[dataIndex]: newValue,
			});
			setUser((prev) =>
				prev.map((u) => (u.id === record.id ? { ...u, [dataIndex]: newValue } : u)),
			);
			message.success("User updated");
		} catch (err) {
			setError("Failed to update user");
			message.error("Failed to update user");
		}
	};

	const openCreate = () => {
		form.resetFields();
		setCreateVisible(true);
	};

	const handleCreate = async () => {
		try {
			const values = await form.validateFields();
			setCreating(true);
			await api.post("/api/users", {
				...values,
				date_of_birth: values.date_of_birth.format("YYYY-MM-DD"),
				department: values.department || "project",
			});
			message.success("User created");
			setCreateVisible(false);
			fetchUsers();
		} catch (err) {
			console.error("Create user failed", err);
			message.error(err.response?.data?.error || "Failed to create user");
		} finally {
			setCreating(false);
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
		<div className="w-full h-full flex flex-col gap-8">
			<h2 className="text-3xl font-bold uppercase">User Management</h2>
			<div className="flex-col gap-8 custom-table px-5 pt-5 rounded-md shadow bg-white flex-1 overflow-auto">
				<div className="flex gap-4 mb-5">
					<div>
						<Input
							placeholder="Search by name"
							className="w-48"
							value={""}
							onChange={() => {}}
						/>
					</div>
					<div className="ml-auto">
						<Button
							type="primary"
							onClick={openCreate}
						>
							Add User
						</Button>
					</div>
				</div>
				<Table
					columns={columns}
					dataSource={user}
					rowKey="id"
					bordered
					pagination={{ pageSize: 20 }}
					scroll={{ y: "calc(100vh - 320px)", x: "max-content" }}
					onRow={(record) => ({
						onClick: () => setUserId(record.id),
					})}
				/>
			</div>
			<CommonModal
				visible={createVisible}
				onClose={() => setCreateVisible(false)}
				title="Create User"
				footer={null}
				headerBg="#0b3c8f"
			>
				<Form
					form={form}
					layout="vertical"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
						<Form.Item
							name="name"
							label="Name"
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name="username"
							label="Username"
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name="email"
							label="Email"
						>
							<Input />
						</Form.Item>
						<Form.Item
							name="date_of_birth"
							label="Date of Birth"
						>
							<DatePicker className="w-full" />
						</Form.Item>
						<Form.Item
							name="gender"
							label="Gender"
						>
							<Select>
								<Select.Option value="male">Male</Select.Option>
								<Select.Option value="female">Female</Select.Option>
								<Select.Option value="other">Other</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item
							name="department"
							label="Department"
							initialValue="project"
						>
							<Input />
						</Form.Item>
						<Form.Item
							name="phone_number"
							label="Phone Number"
						>
							<Input />
						</Form.Item>
						<Form.Item
							name="role"
							label="Role"
							initialValue="user"
						>
							<Select>
								<Select.Option value="user">User</Select.Option>
								<Select.Option value="admin">Admin</Select.Option>
							</Select>
						</Form.Item>
					</div>
				</Form>

				<div className="flex justify-end gap-2 mt-4">
					<Button onClick={() => setCreateVisible(false)}>Cancel</Button>
					<Button
						type="primary"
						loading={creating}
						onClick={handleCreate}
					>
						Save
					</Button>
				</div>
			</CommonModal>
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
