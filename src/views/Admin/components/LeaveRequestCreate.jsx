import api from "@/lib/axiosInstance";
import CommonModal from "@/components/CommonModal";
import { Button, DatePicker, Input, message, Select } from "antd";
import { Formik } from "formik";
import { useEffect, useState, useRef, use } from "react";
import * as Yup from "yup";

const { Option } = Select;

const validationSchema = Yup.object().shape({
	leave_type: Yup.string().required("Leave type is required"),
	start_date: Yup.mixed().required("Start date is required"),
	end_date: Yup.mixed().required("End date is required"),
	reason: Yup.string(),
});

export default function LeaveRequestCreate({ visible, onClose, onSuccess }) {
	const initialValues = {
		leave_type: "",
		start_date: null,
		end_date: null,
		substitute_id: null,
		reason: "",
	};

	useEffect(() => {
		if (!visible) return;
		fetchSubstitutes("");
	}, [visible]);

	const [substitutes, setSubstitutes] = useState([]);
	const searchTimeout = useRef(null);

	useEffect(() => {
		return () => {
			if (searchTimeout.current) clearTimeout(searchTimeout.current);
		};
	}, []);

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		setSubmitting(true);
		try {
			const payload = {
				leave_type: values.leave_type.toUpperCase(),
				start_date: values.start_date ? values.start_date.format("YYYY-MM-DD") : null,
				end_date: values.end_date ? values.end_date.format("YYYY-MM-DD") : null,
				reason: values.reason || null,
				substitute_id: values.substitute_id || null,
			};

			await api.post("/api/leave-requests", payload);
			message.success("Leave request created");
			resetForm();
			onSuccess && onSuccess();
		} catch (err) {
			console.error("Failed to create leave request", err);
			message.error(err.response?.data?.error || "Failed to create leave request");
		} finally {
			setSubmitting(false);
		}
	};

	const fetchSubstitutes = async (query) => {
		try {
			const response = await api.get("/api/users", {
				params: { search: query, limit: 10 },
			});
			const opts = (response.data?.users || []).map((user) => ({
				label: user.name,
				value: user.id,
			}));
			setSubstitutes(opts);
		} catch (err) {
			console.error("Failed to fetch users", err);
			return [];
		}
	};

	const FormBody = (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({
				values,
				handleChange,
				setFieldValue,
				handleSubmit,
				isSubmitting,
				errors,
				touched,
			}) => (
				<form
					onSubmit={handleSubmit}
					className="space-y-4"
				>
					<div>
						<label className="block text-sm font-medium mb-1">Leave type</label>
						<Select
							value={values.leave_type}
							onChange={(val) => setFieldValue("leave_type", val)}
							className="w-full"
							placeholder="Select leave type"
						>
							<Option value="annual">Annual</Option>
							<Option value="sick">Sick</Option>
							<Option value="unpaid">Unpaid</Option>
						</Select>
						{touched.leave_type && errors.leave_type && (
							<div className="text-red-500 text-sm mt-1">{errors.leave_type}</div>
						)}
					</div>

					<div className="flex gap-4">
						<div style={{ flex: 1 }}>
							<label className="block text-sm font-medium mb-1">Start date</label>
							<DatePicker
								value={values.start_date}
								onChange={(d) => setFieldValue("start_date", d)}
								className="w-full"
								placeholder="Select start date"
							/>
							{touched.start_date && errors.start_date && (
								<div className="text-red-500 text-sm mt-1">{errors.start_date}</div>
							)}
						</div>
						<div style={{ flex: 1 }}>
							<label className="block text-sm font-medium mb-1">End date</label>
							<DatePicker
								value={values.end_date}
								onChange={(d) => setFieldValue("end_date", d)}
								className="w-full"
								placeholder="Select end date"
							/>
							{touched.end_date && errors.end_date && (
								<div className="text-red-500 text-sm mt-1">{errors.end_date}</div>
							)}
						</div>
					</div>

					<div className="text-sm text-gray-500">
						Total Days Off:{" "}
						{values.start_date && values.end_date
							? Math.abs(values.end_date.diff(values.start_date, "day")) + 1
							: "-"}
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">
							Substitute (optional)
						</label>
						<Select
							showSearch
							filterOption={false}
							onSearch={(q) => {
								if (searchTimeout.current) clearTimeout(searchTimeout.current);
								searchTimeout.current = setTimeout(
									() => fetchSubstitutes(q || ""),
									300,
								);
							}}
							options={substitutes}
							value={values.substitute_id}
							onChange={(val) => setFieldValue("substitute_id", val)}
							placeholder="Search substitute by name"
							className="w-full"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">Reason (optional)</label>
						<Input.TextArea
							name="reason"
							value={values.reason}
							onChange={handleChange}
							rows={4}
						/>
					</div>

					<div className="flex justify-end">
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
	);

	if (typeof visible !== "undefined") {
		return (
			<CommonModal
				visible={!!visible}
				onClose={onClose}
				title="Create Leave Request"
				footer={null}
				width={640}
				headerBg="#1E3A8A"
			>
				{FormBody}
			</CommonModal>
		);
	}

	return FormBody;
}
