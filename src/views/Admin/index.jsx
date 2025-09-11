import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CustomCursor from "../Home/components/CustomeCursor/Cursor";
import { Outlet } from "react-router-dom";

export default function Layout() {
	const isDashboard = location.pathname.includes("/admin");
	return (
		<>
			<CustomCursor />
			<SidebarProvider>
				<AppSidebar />
				<main className="flex-1 overflow-auto h-screen">
					<div className="absolute">
						<SidebarTrigger />
					</div>
					<div
						className={`${isDashboard ? "bg-gray-100 p-5 h-full" : "bg-white h-full"}`}
					>
						<Outlet />
					</div>
				</main>
			</SidebarProvider>
		</>
	);
}
