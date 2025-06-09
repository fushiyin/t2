import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CustomCursor from "../Home/components/CustomeCursor/Cursor";

export default function Layout({ children }) {
	return (
		<>
			<CustomCursor />
			<SidebarProvider>
				<AppSidebar />
				<main>
					<SidebarTrigger />
					{children}
				</main>
			</SidebarProvider>
		</>
	);
}
