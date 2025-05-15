import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense } from "react";
import { registerRoutes } from "./index";
import useResponsive from "@/hooks/useResponsive";
import PageNotFound from "@/views/PageNotFound";
import Layout from "@/layouts/layout";
import { Loader } from "lucide-react";

const Loading = () => (
	<div className="p-4 text-center">
		<Loader className="animate-spin" />
	</div>
);

const childRoutes = (routes) => {
	return routes.map(({ path, component }, index) => {
		return (
			<Route
				key={index}
				path={path}
				exact
				element={
					<Suspense fallback={<Loading />}>
						<Layout>{component}</Layout>
					</Suspense>
				}
			/>
		);
	});
};

function Routers() {
	const { isTabletOrMobile } = useResponsive();
	return (
		<Router>
			<Routes>
				{childRoutes(registerRoutes, isTabletOrMobile)}
				<Route
					path="*"
					element={<PageNotFound />} // For Page Not Found
				/>
			</Routes>
		</Router>
	);
}

export default Routers;
