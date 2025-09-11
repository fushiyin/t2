import { useEffect, useState } from "react";
import { Modal, Descriptions } from "antd";
import axios from "axios";

function DetailDialog({ onClose, userId }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (userId) {
			fetchUserDetails();
		}
	}, [userId]);

	const fetchUserDetails = async () => {
		try {
			const response = await axios.get(`/api/users/${userId}`);
			setUser(response.data);
		} catch (err) {
			console.error("Failed to fetch user details", err);
		}
	};

	return (
		<Modal
			open={!!userId}
			onCancel={onClose}
			footer={null}
			title="User Details"
			centered
			headerBgColor="#f0f2f5"
			width={600}
		>
			<Descriptions
				column={1}
				bordered
			>
				<Descriptions.Item label="ID">{user?.id}</Descriptions.Item>
				<Descriptions.Item label="Name">{user?.name}</Descriptions.Item>
				<Descriptions.Item label="Date of Birth">{user?.date_of_birth}</Descriptions.Item>
				<Descriptions.Item label="Username">{user?.username}</Descriptions.Item>
				<Descriptions.Item label="Email">{user?.email}</Descriptions.Item>
				<Descriptions.Item label="Role">{user?.role}</Descriptions.Item>
				<Descriptions.Item label="Status">{user?.status}</Descriptions.Item>
			</Descriptions>
		</Modal>
	);
}

export default DetailDialog;
