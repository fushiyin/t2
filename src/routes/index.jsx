import { MainLayout } from "@/layouts";
import PageNotFound from "@/views/PageNotFound";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const idRouter = Object.freeze({
	home: "/",
	about: "/about",
	contact: "/contact",
	service: "/services",
	career: "/career",
});

const Home = React.lazy(() => import("@/views/Home"));
const About = React.lazy(() => import("@/views/About"));
const Careers = React.lazy(() => import("@/views/Career"));
const Contact = React.lazy(() => import("@/views/Contact"));
const Services = React.lazy(() => import("@/views/ServicesPage"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <PageNotFound />,
		children: [
			{
				path: idRouter?.home,
				element: <Home />,
			},
			{ path: idRouter.about, element: <About /> },
			{ path: idRouter.career, element: <Careers /> },
			{ path: idRouter.contact, element: <Contact /> },
			{ path: idRouter.service, element: <Services /> },
		],
	},
]);
function AppRouter() {
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<RouterProvider
				router={router}
				future={{
					v7_startTransition: true,
					v7_relativeSplatPath: true,
				}}
			/>
		</React.Suspense>
	);
}

export default AppRouter;
