import api from "@/lib/axiosInstance";
import { Button, DatePicker, Input, message, Select } from "antd";
import CommonModal from "@/components/CommonModal";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import dayjs from "dayjs";

const { Option } = Select;

const validationSchema = Yup.object().shape({
	report_date: Yup.mixed().required("Report date is required"),
	tasks_today: Yup.string().required("Tasks today is required"),
	plan_tomorrow: Yup.string(),
	project_id: Yup.mixed(),
});

export default function CreateDailyReport({ visible, onClose, onSuccess }) {
	const initialValues = {
		report_date: dayjs(),
		tasks_today: "",
		plan_tomorrow: "",
		project_id: null,
		work_type: "full-time",
	};

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		if (!visible) return;
		fetchProjects();
	}, [visible]);

	const fetchProjects = async (search = "") => {
		try {
			const res = await api.get("/api/projects", { params: { search, limit: 200 } });
			const rows = res.data?.data || [];
			setProjects(rows.map((p) => ({ label: p.name, value: p.project_id })));
		} catch (err) {
			console.error("Failed to fetch projects", err);
			setProjects([]);
		}
	};

	const formatBulletLines = (text) => {
		if (text == null) return "";
		return String(text)
			.split("\n")
			.map((line) => {
				const trimmed = line.trimStart();
				if (trimmed === "") return "";
				return trimmed.startsWith("-") ? trimmed : `- ${trimmed}`;
			})
			.join("\n");
	};

	const onBulletChange = (fieldName, value, setFieldValue) => {
		setFieldValue(fieldName, formatBulletLines(value));
	};

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		setSubmitting(true);
		try {
			const payload = {
				report_date: values.report_date ? values.report_date.format("YYYY-MM-DD") : null,
				tasks_today: values.tasks_today,
				plan_tomorrow: values.plan_tomorrow || null,
				project_id: values.project_id || null,
				work_type: values.work_type || null,
			};

			await api.post("/api/daily-reports", payload);
			message.success("Daily report created");
			resetForm();
			onSuccess && onSuccess();
		} catch (err) {
			console.error("Failed to create daily report", err);
			message.error(err.response?.data?.error || "Failed to create daily report");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<CommonModal
			visible={!!visible}
			onClose={onClose}
			title="CREATE DAILY REPORT"
			headerBg="#0b3c8f"
			footer={null}
			width={640}
		>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ values, setFieldValue, handleSubmit, isSubmitting, errors, touched }) => (
					<form
						onSubmit={handleSubmit}
						className="space-y-4"
					>
						<div className="flex gap-5">
							<div className="flex-1">
								<label className="block text-sm font-medium mb-1">
									Report Date
								</label>
								<DatePicker
									className="w-full"
									value={values.report_date}
									onChange={(d) => setFieldValue("report_date", d)}
								/>
								{touched.report_date && errors.report_date && (
									<div className="text-red-500 text-sm mt-1">
										{errors.report_date}
									</div>
								)}
							</div>

							<div className="flex-1">
								<label className="block text-sm font-medium mb-1">
									Project (optional)
								</label>
								<Select
									showSearch
									placeholder="Select project or search"
									options={projects}
									value={values.project_id}
									onChange={(val) => setFieldValue("project_id", val)}
									onSearch={(q) => fetchProjects(q)}
									className="w-full"
									filterOption={false}
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium mb-1">Work Type</label>
							<Select
								value={values.work_type}
								placeholder="Select work type"
								onChange={(val) => setFieldValue("work_type", val)}
								className="w-full"
							>
								<Select.Option value="full-time">Full-time</Select.Option>
								<Select.Option value="part-time">Part-time</Select.Option>
								<Select.Option value="wfh">Work from home</Select.Option>
								<Select.Option value="on-site">On-site</Select.Option>
							</Select>
						</div>
						<div className="flex gap-4">
							<div className="flex-1">
								<label className="block text-sm font-medium mb-1">
									Tasks Today
								</label>
								<Input.TextArea
									name="tasks_today"
									value={values.tasks_today}
									onChange={(e) =>
										onBulletChange("tasks_today", e.target.value, setFieldValue)
									}
									rows={4}
								/>
								{touched.tasks_today && errors.tasks_today && (
									<div className="text-red-500 text-sm mt-1">
										{errors.tasks_today}
									</div>
								)}
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium mb-1">Plan Tomorrow</label>
							<Input.TextArea
								name="plan_tomorrow"
								value={values.plan_tomorrow}
								onChange={(e) =>
									onBulletChange("plan_tomorrow", e.target.value, setFieldValue)
								}
								rows={4}
							/>
						</div>

						<div className="flex justify-end">
							<Button
								type="default"
								onClick={onClose}
								className="mr-2"
							>
								Cancel
							</Button>
							<Button
								type="primary"
								htmlType="submit"
								loading={isSubmitting}
							>
								Create
							</Button>
						</div>
					</form>
				)}
			</Formik>
		</CommonModal>
	);
}
