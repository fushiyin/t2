import React, { useEffect, useState, useCallback } from "react";
import { Table, Input, Space, Button, DatePicker, InputNumber, Select, Tag } from "antd";
import moment from "moment";
import api from "@/lib/axiosInstance";
import CommonModal from "@/components/CommonModal";
import { Formik } from "formik";
import * as Yup from "yup";
import { PencilLine, Plus } from "lucide-react";

function ProjectManagement() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(false);
	const [total, setTotal] = useState(0);
	const [params, setParams] = useState({ page: 1, pageSize: 10, search: "" });

	const [modalVisible, setModalVisible] = useState(false);
	const [editing, setEditing] = useState(null); // null = create, object = edit
	const statusOptions = ["Planning", "In Progress", "Completed", "On Hold", "Cancelled"];

	const fetchProjects = useCallback(async () => {
		setLoading(true);
		try {
			const res = await api.get("/api/projects", { params });
			const data = res.data?.data || res.data || [];
			const count = res.data?.total ?? res.data?.length ?? data.length;
			setProjects(data);
			setTotal(count);
		} catch (err) {
			console.error("Failed to fetch projects", err);
			setProjects([]);
			setTotal(0);
		} finally {
			setLoading(false);
		}
	}, [params]);

	useEffect(() => {
		fetchProjects();
	}, [fetchProjects]);

	const columns = [
		{ title: "ID", dataIndex: "project_id", key: "project_id", width: 80 },
		{ title: "Name", dataIndex: "name", key: "name", ellipsis: true },
		{ title: "Client", dataIndex: "client_name", key: "client_name", width: 160 },
		{ title: "Manager", dataIndex: "project_manager", key: "project_manager", width: 160 },
		{
			title: "Start Date",
			dataIndex: "start_date",
			key: "start_date",
			width: 120,
			render: (d) => (d ? moment(d).format("YYYY-MM-DD") : ""),
		},
		{
			title: "End Date",
			dataIndex: "end_date",
			key: "end_date",
			width: 120,
			render: (d) => (d ? moment(d).format("YYYY-MM-DD") : ""),
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			width: 120,
			render: (s) => {
				let color;
				if (s === "Planned") color = "yellow";
				else if (s === "In Progress") color = "green";
				else if (s === "Completed") color = "blue";
				else if (s === "On Hold") color = "orange";
				else if (s === "Cancelled") color = "red";
				return <Tag color={color}>{s || "N/A"}</Tag>;
			},
		},
		{
			title: "Budget",
			dataIndex: "budget",
			key: "budget",
			width: 120,
			render: (v) => (v != null ? Number(v).toLocaleString() : ""),
		},
		{
			title: "Actual",
			dataIndex: "actual_cost",
			key: "actual_cost",
			width: 120,
			render: (v) => (v != null ? Number(v).toLocaleString() : ""),
		},
		{
			title: "Created",
			dataIndex: "created_at",
			key: "created_at",
			width: 160,
			render: (d) => (d ? moment(d).format("YYYY-MM-DD HH:mm") : ""),
		},
		{
			title: "Actions",
			key: "actions",
			width: 140,
			render: (_text, record) => (
				<Space>
					<Button
						size="medium"
						type="outlined"
						onClick={() => {
							setEditing(record);
							setModalVisible(true);
						}}
						style={{ backgroundColor: "#e9a15f", color: "#fff" }}
						icon={<PencilLine size={14} />}
					>
						Edit
					</Button>
				</Space>
			),
		},
	];

	const openCreate = () => {
		setEditing(null);
		setModalVisible(true);
	};

	const handleSave = async (values, { setSubmitting }) => {
		setSubmitting(true);
		try {
			const payload = {
				name: values.name,
				description: values.description || null,
				client_name: values.client_name || null,
				project_manager: values.project_manager || null,
				start_date: values.start_date ? values.start_date.format("YYYY-MM-DD") : null,
				end_date: values.end_date ? values.end_date.format("YYYY-MM-DD") : null,
				status: values.status || null,
				budget: values.budget != null ? Number(values.budget) : null,
				actual_cost: values.actual_cost != null ? Number(values.actual_cost) : null,
			};

			if (editing && editing.project_id) {
				await api.patch(`/api/projects/${editing.project_id}`, payload);
			} else {
				await api.post("/api/projects", payload);
			}

			setModalVisible(false);
			fetchProjects();
		} catch (err) {
			console.error("Failed to save project", err);
		} finally {
			setSubmitting(false);
		}
	};

	const ProjectSchema = Yup.object().shape({
		name: Yup.string().required("Project name is required"),
		start_date: Yup.mixed(),
		end_date: Yup.mixed(),
	});

	return (
		<div className="w-full h-full flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Projects</h2>
				<Space>
					<Input.Search
						placeholder="Search projects"
						allowClear
						enterButton
						onSearch={(val) => setParams((p) => ({ ...p, search: val, page: 1 }))}
						style={{ width: 320 }}
					/>
					<Button
						type="primary"
						onClick={openCreate}
						style={{ backgroundColor: "#0b3c8f", borderColor: "#0b3c8f" }}
						icon={<Plus size={14} />}
					>
						Add
					</Button>
				</Space>
			</div>

			<div className="rounded-md shadow bg-white p-4 flex-1 overflow-auto custom-table">
				<Table
					columns={columns}
					dataSource={projects}
					rowKey={(r) => r.project_id || r.id}
					loading={loading}
					pagination={{
						current: params.page,
						pageSize: params.pageSize,
						total,
						onChange: (page, pageSize) => setParams((p) => ({ ...p, page, pageSize })),
					}}
					sticky
					scroll={{ x: "max-content" }}
				/>
			</div>

			<CommonModal
				visible={modalVisible}
				onClose={() => setModalVisible(false)}
				title={editing ? "Edit Project" : "Create Project"}
				headerBg="#0b3c8f"
				footer={null}
			>
				<Formik
					initialValues={{
						name: editing?.name || "",
						description: editing?.description || "",
						client_name: editing?.client_name || "",
						project_manager: editing?.project_manager || "",
						start_date: editing?.start_date ? moment(editing.start_date) : null,
						end_date: editing?.end_date ? moment(editing.end_date) : null,
						status: editing?.status || "",
						budget: editing?.budget || null,
						actual_cost: editing?.actual_cost || null,
					}}
					validationSchema={ProjectSchema}
					onSubmit={handleSave}
				>
					{({ values, handleChange, setFieldValue, handleSubmit, isSubmitting }) => (
						<form
							onSubmit={handleSubmit}
							className="space-y-4"
						>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium mb-1">Name</label>
									<Input
										name="name"
										value={values.name}
										onChange={handleChange}
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-1">Client</label>
									<Input
										name="client_name"
										value={values.client_name}
										onChange={handleChange}
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-1">
										Manager
									</label>
									<Input
										name="project_manager"
										value={values.project_manager}
										onChange={handleChange}
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-1">Status</label>
									<Select
										name="status"
										value={values.status}
										onChange={(val) => setFieldValue("status", val)}
										className="w-full"
										options={statusOptions.map((s) => ({ label: s, value: s }))}
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-1">
										Start Date
									</label>
									<DatePicker
										className="w-full"
										value={values.start_date}
										onChange={(d) => setFieldValue("start_date", d)}
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-1">
										End Date
									</label>
									<DatePicker
										className="w-full"
										value={values.end_date}
										onChange={(d) => setFieldValue("end_date", d)}
									/>
								</div>
								<div className="w-full">
									<label className="block text-sm font-medium mb-1">Budget</label>
									<InputNumber
										name="budget"
										value={values.budget}
										onChange={(val) => setFieldValue("budget", val)}
										className="w-full"
										style={{ width: "100%" }}
									/>
								</div>
								<div className="w-full">
									<label className="block text-sm font-medium mb-1">
										Actual Cost
									</label>
									<InputNumber
										name="actual_cost"
										value={values.actual_cost}
										onChange={(val) => setFieldValue("actual_cost", val)}
										className="w-full"
										style={{ width: "100%" }}
									/>
								</div>
								<div className="col-span-2">
									<label className="block text-sm font-medium mb-1">
										Description
									</label>
									<Input.TextArea
										name="description"
										value={values.description}
										onChange={handleChange}
										rows={4}
									/>
								</div>
							</div>

							<div className="flex justify-end">
								<Button
									onClick={() => setModalVisible(false)}
									className="mr-2"
								>
									Cancel
								</Button>
								<Button
									type="primary"
									htmlType="submit"
									loading={isSubmitting}
								>
									Save
								</Button>
							</div>
						</form>
					)}
				</Formik>
			</CommonModal>
		</div>
	);
}

export default ProjectManagement;
