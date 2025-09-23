import React from "react";
import { Modal, Button } from "antd";
import { X } from "lucide-react";

export default function CommonModal({
	visible,
	onClose,
	title,
	children,
	footer,
	width = 640,
	destroyOnClose = true,
	onOk,
	okText = "OK",
	cancelText = "Cancel",
	confirmLoading = false,
	headerBg,
	...rest
}) {
	const defaultFooter = [
		<Button
			key="cancel"
			onClick={onClose}
		>
			{cancelText}
		</Button>,
		<Button
			key="ok"
			type="primary"
			onClick={onOk}
			loading={confirmLoading}
		>
			{okText}
		</Button>,
	];

	const titleNode = headerBg ? (
		<div
			style={{
				background: headerBg,
				padding: "12px 16px",
				color: "#fff",
				borderTopLeftRadius: 4,
				borderTopRightRadius: 4,
			}}
		>
			{title}
		</div>
	) : (
		title
	);

	const customCloseIcon = headerBg ? (
		<div
			className="custom-close-icon
			 flex items-center justify-center
			 absolute
			 -top-0 right-0"
		>
			<X className="w-4 h-4 text-white" />
		</div>
	) : undefined;

	return (
		<Modal
			open={!!visible}
			onCancel={onClose}
			title={headerBg ? null : titleNode}
			closeIcon={customCloseIcon}
			footer={footer !== undefined ? footer : defaultFooter}
			width={width}
			destroyOnClose={destroyOnClose}
			bodyStyle={headerBg ? { paddingTop: 12 } : undefined}
			{...rest}
		>
			{headerBg ? (
				<div
					style={{
						margin: "-32px -24px 12px -24px",
					}}
				>
					{titleNode}
				</div>
			) : null}
			{children}
		</Modal>
	);
}
