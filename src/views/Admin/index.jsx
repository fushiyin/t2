import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CustomCursor from "../Home/components/CustomeCursor/Cursor";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<CustomCursor />
			<SidebarProvider>
				<AppSidebar />
				<main className="flex-1 overflow-auto">
					<SidebarTrigger />
					<Outlet />
				</main>
			</SidebarProvider>
		</>
	);
}
