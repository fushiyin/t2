import { useIsMobile } from "@/hooks/use-mobile";
import api from "@/lib/axiosInstance";
import { getCurrentTimeString } from "@/lib/utils";
import { clearUser } from "@/store/userSlice";
import { Menu, Sunrise, Sunset } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckIn = () => {
	const navigate = useNavigate();
	const [status, setStatus] = useState("");
	const dispatch = useDispatch();
	const isMobile = useIsMobile();
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef(null);
	const user = useSelector((s) => s?.user || s?.auth?.user || {});

	function ClockDisplay() {
		const [time, setTime] = useState(getCurrentTimeString());
		useEffect(() => {
			const timer = setInterval(() => setTime(getCurrentTimeString()), 1000);
			return () => clearInterval(timer);
		}, []);
		return (
			<h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg">
				{time}
			</h1>
		);
	}
	const MemoClock = memo(ClockDisplay);

	useEffect(() => {
		const fetchData = async () => {
			await fetchStatus();
		};
		fetchData();
	}, []);

	const fetchStatus = async () => {
		try {
			const res = await api.get("/api/auth/checkin-status");
			setStatus(res.data.status);
		} catch (err) {
			console.error("Failed to fetch status:", err);
		}
	};

	const updateStatus = async (newStatus) => {
		try {
			await api.patch("/api/auth/checkin-status", { status: newStatus });
			await fetchStatus();
		} catch (err) {
			console.error("Failed to update status:", err);
		}
	};

	const handleCheckin = async () => updateStatus("CHECKIN");
	const handleCheckout = async () => updateStatus("CHECKOUT");

	const handleLogout = async () => {
		try {
			await api.logout();
		} catch (error) {
			console.error("Logout failed:", error);
		}
		dispatch(clearUser());
		navigate("/login", { replace: true });
	};

	useEffect(() => {
		const handleDocClick = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setMenuOpen(false);
			}
		};
		document.addEventListener("click", handleDocClick);
		return () => document.removeEventListener("click", handleDocClick);
	}, []);

	return (
		<>
			<div
				className="h-full flex items-center justify-center px-5 pt-10 pb-40 relative flex-col"
				style={{
					backgroundImage: isMobile ? "url('mobilebg.jpg')" : "url('bg.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					height: "100vh",
				}}
			>
				<MemoClock />
				<div className="w-full max-w-md bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl shadow-2xl px-8 py-10 flex flex-col gap-6">
					<div className="flex flex-col items-center gap-2 mb-auto w-full max-w-3xl">
						<div className="h-full items-center flex">
							{status === "CHECKIN" ? (
								<Sunrise className="h-10 w-10 text-gray-900 drop-shadow-lg" />
							) : (
								<Sunset className="h-10 w-10 text-gray-900 drop-shadow-lg" />
							)}
						</div>
						<div className="flex-col items-center">
							<h2 className="text-2xl text-center md:text-4xl font-semibold italic text-gray-900 drop-shadow-lg">
								Hello,
							</h2>
							<h2 className="text-2xl md:text-4xl font-semibold italic text-gray-900 drop-shadow-lg">
								{JSON.parse(localStorage.getItem("user"))?.name || "User"}
							</h2>
						</div>
					</div>
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
					className="absolute top-0 right-0 m-4 z-50"
					ref={menuRef}
				>
					<button
						onClick={(e) => {
							e.stopPropagation();
							setMenuOpen((v) => !v);
						}}
						className="text-base font-semibold text-white p-2 bg-black/30 rounded-lg"
					>
						<Menu className="inline-block" />
					</button>
					<div
						className={
							`absolute right-0 mt-2 w-44 rounded-md overflow-hidden z-50 transition-transform duration-200 
							ease-out transform origin-top-right ` +
							(menuOpen
								? "translate-x-0 opacity-100 pointer-events-auto"
								: "translate-x-4 opacity-0 pointer-events-none")
						}
						style={{
							background: "rgba(255,255,255,0.06)",
							backdropFilter: "blur(8px)",
							border: "1px solid rgba(255,255,255,0.12)",
						}}
					>
						<button
							className="w-full text-left px-4 py-2 hover:bg-white/10 text-white border-b border-white/20"
							onClick={(e) => {
								e.stopPropagation();
								setMenuOpen(false);
								navigate("/daily-report");
							}}
						>
							Daily Report
						</button>
						<button
							className="w-full text-left px-4 py-2 hover:bg-white/10 text-white border-b border-white/20"
							onClick={(e) => {
								e.stopPropagation();
								setMenuOpen(false);
								navigate("/leave");
							}}
						>
							Leave Request
						</button>

						{user.role === "admin" || user.role === "manager" ? (
							<button
								className="w-full text-left px-4 py-2 hover:bg-white/10 text-white"
								onClick={(e) => {
									e.stopPropagation();
									setMenuOpen(false);
									navigate("/admin/attendance");
								}}
							>
								Back Office
							</button>
						) : null}
					</div>
				</div>
				<span className="text-base text-white text-center absolute bottom-5">
					Make sure you are connected to the company Wi-Fi.
				</span>
			</div>
		</>
	);
};

export default CheckIn;
