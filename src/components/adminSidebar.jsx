import t2lightlogo from "@/assets/logos/T2_dark_Logo.png";
import api from "@/lib/axiosInstance";
import { clearUser } from "@/store/userSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import favicon from "/public/favicon.ico";

import classNames from "classnames";
import {
	ArrowLeft,
	ArrowRight,
	BarChart2,
	Calendar,
	CalendarCheck,
	ClipboardCheck,
	LayoutDashboard,
	LogOut,
	PencilLine,
	Projector,
	Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SidebarItems = [
	{
		label: "Dashboard",
		icon: <LayoutDashboard />,
		key: "dashboard",
	},
	{
		label: "Attendance",
		icon: <ClipboardCheck />,
		key: "attendance",
	},
	{
		label: "Daily Report",
		icon: <PencilLine />,
		key: "daily-report",
	},
	{
		label: "Leave Requests",
		icon: <CalendarCheck />,
		key: "leave",
	},
	{
		label: "Schedule",
		icon: <Calendar />,
		key: "calendar",
	},
	{
		label: "User Management",
		icon: <Users />,
		key: "users",
	},

	{
		label: "Staff Evaluation",
		icon: <BarChart2 />,
		key: "evaluation",
	},
	{
		label: "Projects",
		icon: <Projector />,
		key: "projects",
	},
];

const Sidebar = ({ collapsed, setCollapsed }) => {
	const [activeTab, setActiveTab] = useState("dashboard");
	const [logoutLoading, setLogoutLoading] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const role = useSelector((s) => s?.user?.role || null);

	useEffect(() => {
		setActiveTab(getInitialTab());
	}, []);

	const handleChangeTab = (key) => {
		setActiveTab(key);
		navigate(`/admin/${key === "dashboard" ? "" : key}`);
	};

	const getInitialTab = () => {
		const path = window.location.pathname;
		const segment = path.split("/")[2];
		return segment || "dashboard";
	};

	return (
		<aside
			className={classNames(
				"shadow-md flex flex-col h-screen transition-all duration-200 relative bg-gray-900 px-4",
				collapsed ? "w-20" : "w-64",
			)}
		>
			<div className="pt-6 flex items-center justify-between">
				<img
					src={collapsed ? favicon : t2lightlogo}
					onClick={() => navigate("/")}
					alt="Logo"
					className={classNames("h-6 mx-auto")}
				/>
				<div
					className={classNames(
						"ml-auto text-gray-400 hover:text-blue-500 absolute cursor-pointer top-4 -right-5 p-2 rounded-full bg-blue-100",
					)}
					onClick={() => setCollapsed((c) => !c)}
					aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
				>
					{collapsed ? (
						<ArrowRight className="h-6 w-6" />
					) : (
						<ArrowLeft className="h-6 w-6" />
					)}
				</div>
			</div>
			<nav className="flex-1 pt-5">
				{(role === "employee" || role === "user"
					? SidebarItems.filter((it) => ["attendance", "daily-report"].includes(it.key))
					: SidebarItems
				).map((item) => (
					<div
						key={item.key}
						onClick={() => handleChangeTab(item.key)}
						className={classNames(
							"flex items-center gap-2 py-4 cursor-pointer transition-all duration-150",
							activeTab === item.key
								? "font-semibold"
								: "hover:bg-primary/10 text-primary",
							collapsed ? "justify-center" : "",
						)}
					>
						<div
							className={classNames({
								"text-blue-400": activeTab === item.key,
								"bg-blue-900 text-white p-4 rounded-lg":
									activeTab === item.key && collapsed,
								"text-white": activeTab !== item.key,
							})}
						>
							{item.icon}
						</div>
						{!collapsed && (
							<span
								className={classNames({
									"text-white": activeTab !== item.key,
									"text-blue-400": activeTab === item.key,
								})}
							>
								{item.label}
							</span>
						)}
					</div>
				))}
			</nav>
			<div
				role="button"
				onClick={async () => {
					if (logoutLoading) return;
					setLogoutLoading(true);
					try {
						await api.logout();
						dispatch(clearUser());
					} catch (err) {
						console.debug("Logout failed", err);
					} finally {
						navigate("/login", { replace: true });
					}
				}}
				className="bg-black text-white mb-5 w-full flex items-center justify-center gap-2 py-2 rounded transition-all duration-150 text-center cursor-pointer"
			>
				{logoutLoading ? (
					<span className="text-sm">Logging out...</span>
				) : (
					<>
						<LogOut className="h-5 w-5" />
						{!collapsed && <span>Logout</span>}
					</>
				)}
			</div>
		</aside>
	);
};

export default Sidebar;
