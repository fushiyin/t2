import api from "@/lib/axiosInstance";
import { generateDeviceId } from "@/lib/utils";
import { setUser } from "@/store/userSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	checkDevice();
	// }, []);

	// const checkDevice = async () => {
	// 	try {
	// 		const deviceId = await generateDeviceId();
	// 		const res = await api.post("/api/auth/device-check", { deviceId });
	// 		if (res.data.exists) {
	// 			await signUpWithDevice(deviceId);
	// 		}
	// 	} catch (err) {
	// 		console.error("Device check failed:", err);
	// 	}
	// };

	// const signUpWithDevice = async (deviceId) => {
	// 	try {
	// 		const res = await api.post("/api/auth/device-login", { deviceId });
	// 		const uid = res.data?.userId ?? res.data?.id ?? res.data?.user?.id;
	// 		const uname = res.data?.username ?? res.data?.user?.username;
	// 		const urole = res.data?.role ?? res.data?.user?.role;
	// 		const user = res.data?.user ?? { id: uid, username: uname, role: urole };
	// 		if (user) {
	// 			dispatch(setUser(user));
	// 		}
	// 		if (res.data.accessToken) api.setAuthToken(res.data.accessToken);
	// 		await fetchStatus();
	// 		navigate("/checkin");
	// 	} catch (err) {
	// 		alert(err.response?.data?.error || "Error login");
	// 		console.error("Error login:", err);
	// 		setError("Failed to sign in with device");
	// 	}
	// };

	const signUp = async (e) => {
		e.preventDefault();
		setError("");
		if (!username || !password) {
			setError("Please enter username and password!");
			return;
		}
		try {
			const deviceId = await generateDeviceId();
			const res = await api.post("/api/auth/sign-in", { username, password, deviceId });
			const uid = res.data?.userId ?? res.data?.id ?? res.data?.user?.id;
			const uname = res.data?.username ?? res.data?.user?.username;
			const urole = res.data?.role ?? res.data?.user?.role;
			const user = res.data?.user ?? { id: uid, username: uname, role: urole };
			if (user) {
				dispatch(setUser(user));
			}
			await fetchStatus();
			navigate("/checkin");
		} catch (err) {
			alert(err.response?.data?.error || "Error login");
			console.error("Error login:", err);
		}
	};

	const fetchStatus = async () => {
		try {
			await axios.get("/api/auth/checkin-status");
		} catch (err) {
			console.error("Failed to fetch status:", err);
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
				{/* <div className="flex justify-center mb-4">
                    <div className="bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center shadow-2xl border-opacity-30 animate-pulse">
                        <SunIcon className="text-orange-300 w-8 h-8" />
                    </div>
                </div> */}
				<h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg">
					{formatTime(time)}
				</h1>
				<div className="bg-opacity-20 py-10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl min-w-[350px] md:min-w-xl max-w-7xl text-center border border-white border-opacity-30 relative">
					{error && <div className="text-red-500 mb-2">{error}</div>}
					<form className="flex flex-col items-center">
						<input
							type="text"
							placeholder="Email address"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="mb-4 w-full px-4 py-4 rounded-full bg-white bg-opacity-40 text-gray-900 placeholder-gray-500 outline-none border border-opacity-40 border-blue-400 focus:ring-2 focus:ring-blue-400"
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="mb-4 w-full px-4 py-4 rounded-full bg-white bg-opacity-40 text-gray-900 placeholder-gray-500 outline-none border border-opacity-40 border-blue-400 focus:ring-2 focus:ring-blue-400"
						/>

						<div
							// onClick={handleLogin}
							onClick={signUp}
							className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-4 rounded-full w-full font-semibold shadow-lg transition"
						>
							Login
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
