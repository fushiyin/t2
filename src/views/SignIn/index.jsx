import api from "@/lib/axiosInstance";
import { generateDeviceId } from "@/lib/utils";
import { setUser } from "@/store/userSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignIn() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const signIn = async (e) => {
		e.preventDefault();
		try {
			const deviceId = await generateDeviceId();
			const res = await api.post("/api/auth/sign-in-with-device", { deviceId });
			const uid = res.data?.userId ?? res.data?.id ?? res.data?.user?.id;
			const uname = res.data?.username ?? res.data?.user?.username;
			const urole = res.data?.role ?? res.data?.user?.role;
			const user = res.data?.user ?? { id: uid, username: uname, role: urole };
			if (user) {
				dispatch(setUser(user));
			}
			if (res.data.accessToken) api.setAuthToken(res.data.accessToken);
			await fetchStatus();
			navigate("/checkin");
		} catch (err) {
			alert(err.response?.data?.error || "Error login");
			console.error("Error login:", err);
		}
	};

	const fetchStatus = async () => {
		try {
			const res = await axios.get("/api/auth/checkin-status");
			if (res.data.status === "LEAVE") {
				await handleCheckin();
			}
		} catch (err) {
			console.error("Failed to fetch status:", err);
		}
	};

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

	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	const formatTime = (date) => {
		let hours = date.getHours();
		const minutes = date.getMinutes();
		const ampm = hours >= 12 ? "PM" : "AM";

		hours = hours % 12;
		hours = hours ? hours : 12;
		const minutesStr = minutes < 10 ? "0" + minutes : minutes;
		const seconds = date.getSeconds();
		const secondsStr = seconds < 10 ? "0" + seconds : seconds;

		return `${hours}:${minutesStr}:${secondsStr} ${ampm}`;
	};

	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-purple-700 to-blue-400 relative overflow-hidden">
			{/* Mountain background illustration (simple gradient for now) */}
			<div className="absolute inset-0 z-0">
				<img
					src="mobilebg.jpg"
					alt="Mountains"
					className="w-full h-full object-cover opacity-80 block md:hidden"
				/>
				<img
					src="bg.jfif"
					alt="Mountains"
					className="w-full h-full object-cover opacity-80 hidden md:block"
				/>
			</div>
			{/* Glowing power button icon */}
			<div className="relative z-10 flex flex-col items-center w-full">
				<h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg">
					{formatTime(time)}
				</h1>
				<div className="bg-opacity-20 py-10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl min-w-[350px] md:min-w-xl max-w-7xl text-center border border-white border-opacity-30 relative">
					<div
						// onClick={handleLogin}
						onClick={signIn}
						className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-4 rounded-full w-full font-semibold shadow-lg transition"
					>
						Check In
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
