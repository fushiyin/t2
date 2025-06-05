/* eslint-disable react/display-name */
import { CustomLoading, MainLayout } from "@/layouts";
import PageNotFound from "@/views/PageNotFound";
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { idRouter } from "./idRouter";

const Home = React.lazy(() => import("@/views/Home"));
const About = React.lazy(() => import("@/views/About"));
const Contact = React.lazy(() => import("@/views/Contact"));
const Careers = React.lazy(() => import("@/views/Career"));
const Services = React.lazy(() => import("@/views/ServicesPage"));
const Blog = React.lazy(() => import("@/views/Blog"));
const Solution = React.lazy(() => import("@/views/SolutionAndProduct"));

const withSuspense =
	(WrappedComponent, fallback = <CustomLoading defaultLoading />) =>
	(props) => (
		<Suspense fallback={fallback}>
			<WrappedComponent {...props} />
		</Suspense>
	);

const router = createBrowserRouter([
	{
		path: idRouter.home,
		element: <MainLayout />,
		errorElement: <PageNotFound />,
		children: [
			{
				index: true,
				element: React.createElement(withSuspense(Home)),
			},
			{
				path: idRouter?.contact,
				element: React.createElement(withSuspense(Contact)),
			},
			{
				path: idRouter.about,
				element: React.createElement(withSuspense(About)),
			},
			{
				path: idRouter.career,
				element: React.createElement(withSuspense(Careers)),
			},
			{
				path: idRouter.contact,
				element: React.createElement(withSuspense(Contact)),
			},
			{
				path: idRouter.service,
				element: React.createElement(withSuspense(Services)),
			},
			{
				path: idRouter.blog,
				element: React.createElement(withSuspense(Blog)),
			},
			{
				path: idRouter.solution,
				element: React.createElement(withSuspense(Solution)),
			},
		],
	},
]);
function AppRouter() {
	return <RouterProvider router={router} />;
}

export default AppRouter;
