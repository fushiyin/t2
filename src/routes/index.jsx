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
	blog: "/blog",
	demo: "/demo",
	vision: "/vision",
});

const Home = React.lazy(() => import("@/views/Home"));
const About = React.lazy(() => import("@/views/About"));
const Contact = React.lazy(() => import("@/views/Contact"));
const Careers = React.lazy(() => import("@/views/Career"));
const Services = React.lazy(() => import("@/views/ServicesPage"));
const Blog = React.lazy(() => import("@/views/Blog"));
const Demo = React.lazy(() => import("@/views/Home/components/Globe/GlobeComponent"));
const Vision = React.lazy(() => import("@/views/Home/components/Journey"));

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
			{
				path: idRouter?.contact,
				element: <Contact />,
			},
			{ path: idRouter.about, element: <About /> },
			{ path: idRouter.career, element: <Careers /> },
			{ path: idRouter.contact, element: <Contact /> },
			{ path: idRouter.service, element: <Services /> },
			{ path: idRouter.blog, element: <Blog /> },
			{ path: idRouter.demo, element: <Demo /> },
			{ path: idRouter.vision, element: <Vision /> },
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
