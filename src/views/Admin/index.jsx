import Sidebar from "@/components/adminSidebar";
import useResponsive from "@/hooks/useResponsive";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
	const location = useLocation();
	const showSidebar = location.pathname.includes("admin");
	const { isMobile, isTablet } = useResponsive();

	const [collapsed, setCollapsed] = useState(false);

	useEffect(() => {
		setCollapsed(!!isMobile || (!!isTablet && location.pathname.includes("admin")));
	}, [location, isMobile, isTablet]);

	const sidebarWidth = collapsed ? "w-20" : "w-64";

	const isDashboard = location.pathname.includes("admin");

	return (
		<main className="w-screen bg-gray-50 flex no-scrollbar scrollbar-hidden h-screen">
			{showSidebar && (
				<div
					className={`fixed left-0 top-0 h-screen bg-white shadow-md transition-all duration-300 ${sidebarWidth}`}
				>
					<Sidebar
						collapsed={collapsed}
						setCollapsed={setCollapsed}
					/>
				</div>
			)}
			<div
				className={`flex-1 min-w-0 bg-gray-50 transition-all duration-300 no-scrollbar scrollbar-hidden ${
					showSidebar ? (collapsed ? "ml-20" : "ml-64") : ""
				} ${isDashboard ? "p-5 md:p-6 lg:px-8 lg:py-5" : ""}`}
			>
				<Outlet />
			</div>
		</main>
	);
}
