import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { registerRoutes } from "./index";
import Layout from "@/layouts/layout";
import PageNotFound from "@/views/PageNotFound";
import { Loader } from "lucide-react";

const Loading = () => (
	<div className="p-4 text-center">
		<Loader className="animate-spin" />
	</div>
);

const childrenRoutes = registerRoutes.map(({ path, component: Component }) => ({
	path,
	element: (
		<Suspense fallback={<Loading />}>
			<Component />
		</Suspense>
	),
}));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [...childrenRoutes, { path: "*", element: <PageNotFound /> }],
	},
]);

function RouterComponent() {
	return <RouterProvider router={router} />;
}

export default RouterComponent;
