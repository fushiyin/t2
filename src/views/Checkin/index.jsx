import axios from "axios";
import { User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentTimeString } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const CheckIn = () => {
	const navigate = useNavigate();
	const [status, setStatus] = useState("");
	const [role, setRole] = useState("");
	const [time, setTime] = useState(getCurrentTimeString());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(getCurrentTimeString());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			await fetchStatus();
		};
		fetchData();
	}, []);

	const fetchStatus = async () => {
		try {
			const res = await axios.get("/api/auth/checkin-status");
			setStatus(res.data.status);
			if (res.data.role) setRole(res.data.role);
		} catch (err) {
			console.error("Failed to fetch status:", err);
		}
	};

	useEffect(() => {
		if (role === "admin") {
			navigate("/admin/dashboard");
		}
	}, [role, navigate]);

	const handleCheckin = async () => {
		try {
			await axios.patch("/api/auth/checkin-status", {
				status: "CHECKIN",
			});
			await fetchStatus();
		} catch (err) {
			console.error(err);
		}
	};

	const handleCheckout = async () => {
		try {
			await axios.patch("/api/auth/checkin-status", {
				status: "CHECKOUT",
			});
			await fetchStatus();
		} catch (err) {
			console.error(err);
		}
	};

	const handleLogout = async () => {
		try {
			await handleCheckout();
			const res = await axios.post("/api/auth/logout");
			if (res.data.success) {
				navigate("/login");
			}
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	return (
		<>
			<div
				className="h-full flex items-center justify-center px-5 relative flex-col"
				style={{
					backgroundImage: useIsMobile ? "url('mobilebg.jpg')" : "url('bg.jfif')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					height: "100vh",
				}}
			>
				<h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg">
					{time}
				</h1>
				<div className="w-full max-w-md bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl shadow-2xl px-8 py-10 flex flex-col gap-6">
					<div className="text-xl text-center mb-4">
						{status === "CHECKIN"
							? "Remember to take breaks! Stay hydrated and stay productive."
							: status === "CHECKOUT"
								? "You've worked hard today! Come back tomorrow to checkin."
								: "Please check in to start your work day."}
					</div>
					<div className="flex flex-col gap-4">
						{status === "LEAVE" && (
							<div
								onClick={handleCheckin}
								className="w-full py-3 px-6 bg-primary rounded-full font-semibold cursor-pointer hover:bg-primary/90 transition text-base"
							>
								Check in
							</div>
						)}
						{status === "CHECKIN" && (
							<div
								onClick={handleCheckout}
								className="w-full py-3 bg-blue-900 text-white text-center px-6 rounded-full font-semibold hover:bg-blue-800 cursor-pointer transition text-base"
							>
								Check out
							</div>
						)}
						<div
							onClick={handleLogout}
							className="w-full py-3 px-6 bg-gray-900 text-white text-center rounded-full font-semibold hover:bg-gray-800 cursor-pointer transition text-base"
						>
							Logout
						</div>
					</div>
				</div>
				<div
					className="text-base font-semibold bg-white p-2 text-center cursor-pointer rounded-lg absolute top-0 right-0 m-4"
					onClick={() => navigate("/admin/dashboard")}
				>
					<User className="inline-block mr-1" />
					Dashboard
				</div>
				<span className="text-base text-white text-center absolute bottom-5">
					Make sure you are connected to the company Wi-Fi.
				</span>
			</div>
		</>
	);
};

export default CheckIn;
