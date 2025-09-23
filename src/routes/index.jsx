import { CustomLoading, MainLayout } from "@/layouts";
import Admin from "@/views/Admin";
import ErrorBoundary from "@/views/ErrorBoundary";
import PageNotFound from "@/views/PageNotFound";
import React, { Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { idRouter } from "./idRouter";
import PublicRoute from "@/components/PublicRoute";
import PrivateRoute from "@/components/PrivateRoute";
import { useSelector } from "react-redux";

const Home = React.lazy(() => import("@/views/Home"));
const About = React.lazy(() => import("@/views/About"));
const Contact = React.lazy(() => import("@/views/Contact"));
const Careers = React.lazy(() => import("@/views/Career"));
const Services = React.lazy(() => import("@/views/ServicesPage"));
const Blog = React.lazy(() => import("@/views/Blog"));
const Solution = React.lazy(() => import("@/views/SolutionAndProduct"));
const SolutionDetail = React.lazy(() => import("@/views/SolutionAndProduct/SolutionDetail"));
const Login = React.lazy(() => import("@/views/Login"));
const Dashboard = React.lazy(() => import("@/views/Admin/pages/Dashboard"));
const Inbox = React.lazy(() => import("@/views/Admin/pages/Inbox"));
const Calendar = React.lazy(() => import("@/views/Admin/pages/Calendar"));
const CareersAdmin = React.lazy(() => import("@/views/Admin/pages/Careers"));
const CareersDetail = React.lazy(() => import("@/views/Career/CareersDetail"));
const Settings = React.lazy(() => import("@/views/Admin/pages/Settings"));
const Attendance = React.lazy(() => import("@/views/Admin/pages/Attendance"));
const UserManagement = React.lazy(() => import("@/views/Admin/pages/UserManagement"));
const LeaveRequest = React.lazy(() => import("@/views/Admin/pages/LeaveRequest"));
const DailyReport = React.lazy(() => import("@/views/Admin/pages/DailyReport"));
const Evaluation = React.lazy(() => import("@/views/Admin/pages/Evaluation"));
const ProjectManagement = React.lazy(() => import("@/views/Admin/pages/Project"));

const CheckIn = React.lazy(() => import("@/views/Checkin"));

const router = createBrowserRouter([
	{
		path: idRouter.home,
		element: <MainLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: idRouter?.contact,
				element: <Contact />,
			},
			{
				path: idRouter.about,
				element: <About />,
			},
			{
				path: idRouter.career,
				element: <Careers />,
			},
			{
				path: idRouter.contact,
				element: <Contact />,
			},
			{
				path: idRouter.service,
				element: <Services />,
			},
			{
				path: idRouter.blog,
				element: <Blog />,
			},
			{
				path: idRouter.solution,
				element: <Solution />,
			},
			{
				path: idRouter.careerDetail,
				element: <CareersDetail />,
			},
			{
				path: idRouter.solutionDetail,
				element: <SolutionDetail />,
			},
		],
	},
	{
		path: "*",
		element: <PageNotFound />,
	},
	{
		path: idRouter.login,
		element: <Login />,
	},
	{
		path: idRouter.checkin,
		element: (
			<PrivateRoute>
				<CheckIn />
			</PrivateRoute>
		),
	},
	{
		path: idRouter.adminDailyReport,
		element: (
			<PrivateRoute>
				<DailyReport />
			</PrivateRoute>
		),
	},
	{
		path: idRouter.adminLeave,
		element: (
			<PrivateRoute>
				<LeaveRequest />
			</PrivateRoute>
		),
	},

	{
		path: idRouter.admin,
		element: (
			<PrivateRoute>
				{/* only allow users with role 'admin' or 'manager' to access Admin area */}
				<RequireAdmin>
					<Admin />
				</RequireAdmin>
			</PrivateRoute>
		),
		children: [
			{
				index: true,
				element: (
					<Navigate
						to={idRouter.adminAttendance}
						replace
					/>
				),
			},
			{
				path: idRouter.adminDashboard,
				element: <Dashboard />,
			},
			{
				path: idRouter.adminInbox,
				element: <Inbox />,
			},
			{
				path: idRouter.adminCalendar,
				element: <Calendar />,
			},
			{
				path: idRouter.adminCareers,
				element: <CareersAdmin />,
			},
			{
				path: idRouter.adminContact,
				element: <Contact />,
			},
			{
				path: idRouter.adminSettings,
				element: <Settings />,
			},
			{
				path: idRouter.adminAttendance,
				element: <Attendance />,
			},
			{
				path: idRouter.adminUsers,
				element: <UserManagement />,
			},
			{
				path: idRouter.adminLeave,
				element: <LeaveRequest />,
			},
			{
				path: idRouter.adminDailyReport,
				element: <DailyReport />,
			},
			{
				path: idRouter.adminEvaluation,
				element: <Evaluation />,
			},
			{
				path: idRouter.project,
				element: <ProjectManagement />,
			},
		],
	},
]);

function RequireAdmin({ children }) {
	const role = useSelector((s) => s?.user?.role || s?.auth?.user?.role || null);
	if (role === "admin" || role === "manager") return children;
	return (
		<Navigate
			to={idRouter.checkin}
			replace
		/>
	);
}

function AppRouter() {
	return (
		<Suspense fallback={<CustomLoading defaultLoading />}>
			<RouterProvider router={router} />
		</Suspense>
	);
}

export default AppRouter;
