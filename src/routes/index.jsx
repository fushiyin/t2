import { MainLayout } from "@/layouts";
import PageNotFound from "@/views/PageNotFound";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const idRouter = Object.freeze({
	home: "/",
	about: "/about",
	contact: "/contact",
	service: "/service",
	career: "/career",
});

const Home = React.lazy(() => import("@/views/Home"));
const About = React.lazy(() => import("@/views/About"));
const Contact = React.lazy(() => import("@/views/Contact"));

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
