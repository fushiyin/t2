import React, { useEffect, useState, useRef } from "react";
import { Modal, Button, Descriptions, Tag } from "antd";
import api from "@/lib/axiosInstance";
import t2lightlogo from "@/assets/logos/T2_light_Logo.png";
import { Printer } from "lucide-react";
import { useSelector } from "react-redux";

const statusColors = {
	APPROVED: "green",
	REJECTED: "red",
	PENDING: "orange",
	DEFAULT: "gray",
};

const styles = {
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
	},
	logoBox: {
		width: 100,
		height: 60,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	table: { width: "100%", borderCollapse: "collapse", marginBottom: 8 },
	detailsHeaderCell: {
		border: "1px solid #000",
		padding: 6,
		width: "30%",
		fontWeight: 700,
		background: "#0b3c8f",
		color: "#fff",
	},
	detailsCell: { border: "1px solid #000", padding: 6 },
	sectionBox: { border: "1px solid #000", padding: 8, marginBottom: 8 },
	sectionTitle: { fontWeight: 700, marginBottom: 6 },
	reasonTitle: { fontWeight: 700, background: "#0b3c8f", color: "#fff", padding: 6 },
	reasonBox: { border: "1px solid #000", minHeight: 80, padding: 8 },
	checkboxLabel: { display: "flex", alignItems: "center", gap: 6 },
	approvalSignedBox: { minWidth: 120 },
	approvalCommentBox: { flex: 1, minHeight: 80, border: "1px solid #000", padding: 8 },
	badgeRed: {
		background:
			"rgba(255, 0, 0, 0.5) url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
		padding: "4px 12px",
		fontSize: 48,
		color: "red",
		fontWeight: "bold",
		opacity: 0.75,
		borderRadius: 4,
		userSelect: "none",
	},
	badgeGreen: {
		background:
			"rgba(0, 128, 0, 0.5) url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
		padding: "4px 12px",
		fontSize: 48,
		color: "green",
		fontWeight: "bold",
		opacity: 0.75,
		borderRadius: 4,
		userSelect: "none",
	},
};

export default function LeaveRequestDialog({ visible, onClose, record, onConfirm, loading }) {
	const [detail, setDetail] = useState(null);
	const contentRef = useRef(null);
	const user = useSelector((state) => state.user);

	useEffect(() => {
		if (record && record.id) {
			fetchDetail(record.id);
		}
	}, [record]);

	const fetchDetail = async (id) => {
		try {
			const res = await api.get(`/leave-requests/${id}`);
			setDetail(res.data.data || res.data || null);
		} catch (err) {
			console.error("Failed to fetch leave request detail", err);
			setDetail(null);
		}
	};

	const formatDate = (d) => {
		if (!d) return "-";
		const date = new Date(d);
		return date.toLocaleDateString();
	};

	const handlePrint = () => {
		if (!contentRef.current) return;

		const mmToPx = (mm) => {
			const el = document.createElement("div");
			el.style.height = `${mm}mm`;
			el.style.position = "absolute";
			el.style.visibility = "hidden";
			document.body.appendChild(el);
			const px = el.getBoundingClientRect().height;
			document.body.removeChild(el);
			return px;
		};

		const pageWidthMm = 210;
		const pageHeightMm = 297;
		const marginMm = 20;
		const usableHeightPx = mmToPx(pageHeightMm - marginMm * 2);
		const usableWidthPx = mmToPx(pageWidthMm - marginMm * 2);

		const contentEl = contentRef.current;
		const contentHeightPx = contentEl.scrollHeight;
		const contentWidthPx = contentEl.scrollWidth;

		const scaleY = usableHeightPx / contentHeightPx;
		const scaleX = usableWidthPx / contentWidthPx;
		const scale = Math.min(1, scaleX, scaleY);

		const html = `
		<!doctype html>
		<html>
		<head>
		<meta charset="utf-8" />
		<title>Leave Request</title>
		<style>
		  @page { size: A4; margin: ${marginMm}mm; }
		  html, body { width: 100%; height: 100%; margin: 0; padding: 0; }
		  body { display:flex; align-items:flex-start; justify-content:center; }
		  .page { width: ${pageWidthMm}mm; height: ${pageHeightMm}mm; box-sizing: border-box; overflow:hidden; }
		  .sheet { transform-origin: top left; }
		</style>
		</head>
		<body>
		<div class="page">
			<div class="sheet" style="transform: scale(${scale});">
			${contentEl.innerHTML}
			</div>
		</div>
		</body>
		</html>
		`;

		const w = window.open("", "_blank");
		if (!w) return;
		w.document.open();
		w.document.write(html);
		w.document.close();
		w.focus();
		setTimeout(() => w.print(), 500);
	};

	const letterBody = (rec) => {
		const r = { ...(detail || {}), ...(rec || {}) };
		return (
			<div style={{ width: "100%", boxSizing: "border-box", position: "relative" }}>
				{r.status === "REJECTED" ? (
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%) rotate(-25deg)",
							border: "4px solid red",
							pointerEvents: "none",
							zIndex: 10,
						}}
					>
						<div style={styles.badgeRed}>REJECTED</div>
					</div>
				) : r.status === "APPROVED" ? (
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%) rotate(-25deg)",
							border: "4px solid green",
							pointerEvents: "none",
							zIndex: 10,
						}}
					>
						<div style={styles.badgeGreen}>APPROVED</div>
					</div>
				) : null}
				{/* Header with logo and title */}
				<div style={styles.header}>
					<div>
						<div style={{ fontWeight: 700, fontSize: 16 }}>T2Soft L.td</div>
						<div style={{ fontSize: 18, fontWeight: 700, color: "#0b3c8f" }}>
							LEAVE OF ABSENCE REQUEST
						</div>
					</div>
					<div style={styles.logoBox}>
						<img
							src={t2lightlogo}
							alt="T2Soft Logo"
							style={{
								maxWidth: "100%",
								height: "auto",
							}}
						/>
					</div>
				</div>

				{/* Details table */}
				<table style={styles.table}>
					<tbody>
						<tr>
							<td
								style={styles.detailsHeaderCell}
								colSpan={3}
							>
								Details
							</td>
						</tr>
						<tr>
							<td style={styles.detailsCell}>Employee&apos;s Manager:</td>
							<td style={styles.detailsCell}>{r.manager_name || "-"}</td>
							<td style={{ ...styles.detailsCell, width: "20%" }}>
								Date: {formatDate(r.created_at)}
							</td>
						</tr>
						<tr>
							<td style={styles.detailsCell}>Employee&apos;s Name:</td>
							<td style={styles.detailsCell}>{r.employee_name || "-"}</td>
							<td style={styles.detailsCell}>
								Employee ID: {r.user_id || r.userId || "-"}
							</td>
						</tr>
						<tr>
							<td style={styles.detailsCell}>Substitute Name:</td>
							<td
								colSpan={2}
								style={styles.detailsCell}
							>
								{r.substitute_name || "-"}
							</td>
						</tr>
					</tbody>
				</table>

				{/* Type of Absence */}
				<div style={styles.sectionBox}>
					<div style={styles.sectionTitle}>Type of Absence</div>
					<div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
						{["Annual", "Sick", "Unpaid", "Other"].map((t) => {
							const leaveTypeVal = r.leave_type || "";
							const checked = leaveTypeVal.toLowerCase().includes(t.toLowerCase());
							return (
								<label
									key={t}
									style={styles.checkboxLabel}
								>
									<input
										type="checkbox"
										checked={checked}
										readOnly
									/>
									<span style={{ fontSize: 12 }}>{t}</span>
								</label>
							);
						})}
					</div>
				</div>

				{/* Reason for Absence */}
				<div style={{ marginBottom: 8 }}>
					<div style={styles.reasonTitle}>Reason for Absence</div>
					<div style={styles.reasonBox}>{r.reason || "-"}</div>
				</div>

				{/* Period of Leave */}
				<table style={styles.table}>
					<tbody>
						<tr>
							<td style={{ ...styles.detailsCell, width: "25%" }}>Start Date</td>
							<td style={styles.detailsCell}>{formatDate(r.start_date)}</td>
							<td style={{ ...styles.detailsCell, width: "25%" }}>End Date</td>
							<td style={styles.detailsCell}>{formatDate(r.end_date)}</td>
						</tr>
					</tbody>
				</table>

				{/* Manager Approval */}
				<div className="mb-4">
					<div style={{ fontWeight: 700, marginBottom: 6 }}>Request Status</div>
					<Descriptions
						bordered
						column={1}
						size="small"
						style={{ background: "#fff" }}
					>
						<Descriptions.Item label="Leader Status">
							<Tag color={statusColors[r.leader_status] || statusColors.default}>
								{r.leader_status || "N/A"}
							</Tag>
							{r.leader_approved_at ? (
								<span className="ml-2">
									(at {new Date(r.leader_approved_at).toLocaleString()})
								</span>
							) : null}
						</Descriptions.Item>
						<Descriptions.Item label="HR Status">
							<Tag color={statusColors[r.hr_status] || statusColors.default}>
								{r.hr_status || "N/A"}
							</Tag>
							{r.hr_approved_at ? (
								<span className="ml-2">
									(at {new Date(r.hr_approved_at).toLocaleString()})
								</span>
							) : null}
						</Descriptions.Item>
					</Descriptions>
				</div>
			</div>
		);
	};

	const modalMaxWidth = Math.min(640, window.innerWidth - 40);
	const modalMaxHeight = Math.max(420, window.innerHeight - 200);

	const button_lst = {
		PRINT: {
			label: "Print",
			icon: Printer,
			onClick: handlePrint,
		},
		APPROVED: {
			label: "Approve",
			type: "primary",
			onClick: () => onConfirm(record.id, "approved"),
			loading,
		},
		REJECTED: {
			label: "Reject",
			danger: true,
			onClick: () => onConfirm(record.id, "rejected"),
			loading,
		},
	};

	const allowedButtons = () => {
		const role = (user?.role || "").toLowerCase();
		const overallStatus = (record?.status || "").toLowerCase();
		const leaderStatus = (record?.leader_status || "").toLowerCase();
		const hrStatus = (record?.hr_status || "").toLowerCase();
		let btns = ["PRINT"];
		if (overallStatus === "pending") {
			if (role === "manager" || role === "leader") {
				if (leaderStatus === "pending") {
					btns = btns.concat(["APPROVED", "REJECTED"]);
				}
			} else if (role === "admin" || role === "hr") {
				if (hrStatus === "pending") {
					btns = btns.concat(["APPROVED", "REJECTED"]);
				}
			}
		}
		return btns;
	};

	return (
		<Modal
			title={`Leave Request #${record?.id || ""}`}
			visible={visible}
			onCancel={onClose}
			width={modalMaxWidth}
			bodyStyle={{ padding: 0, maxHeight: modalMaxHeight, overflow: "hidden" }}
			footer={[
				...allowedButtons().map((b) => {
					const btn = button_lst[b];
					if (!btn) return null;
					return (
						<Button
							key={b.key || b.label}
							type={btn.type || "default"}
							danger={btn.danger || false}
							onClick={btn.onClick}
							loading={btn.loading || false}
							icon={btn.icon ? <btn.icon className="w-4 h-4" /> : null}
						>
							{btn.label}
						</Button>
					);
				}),
			]}
		>
			<div
				ref={contentRef}
				style={{
					background: "#fff",
					boxSizing: "border-box",
					overflow: "auto",
					maxHeight: modalMaxHeight - 80,
				}}
			>
				{letterBody(record)}
			</div>
		</Modal>
	);
}
