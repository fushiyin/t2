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

const router = createBrowserRouter([
	{
		path: idRouter.home,
		element: <MainLayout />,
		errorElement: <PageNotFound />,
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
		],
	},
]);
function AppRouter() {
	return (
		<Suspense fallback={<CustomLoading defaultLoading />}>
			<RouterProvider router={router} />
		</Suspense>
	);
}

export default AppRouter;
