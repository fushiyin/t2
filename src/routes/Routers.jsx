import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense } from "react";
import { registerRoutes } from "./index";
import useResponsive from "@/hooks/useResponsive";
import PageNotFound from "@/views/PageNotFound";
import { MainLayout, MobileLayout } from "../layouts";

const emptyComponent = () => {
    return null;
};

const childRoutes = (routes, isTabletOrMobile) => {
    const isLayoutPC = isTabletOrMobile || window?.flutter_inappwebview;
    return routes.map(({ path, component, pcComponent }, index) => {
        const LayoutComponent = isLayoutPC ? MobileLayout : MainLayout;
        const Component = isTabletOrMobile
            ? component || emptyComponent
            : pcComponent || emptyComponent;
        return (
            <Route
                key={index}
                path={path}
                exact
                element={
                    <Suspense fallback={<> </>}>
                        <LayoutComponent>
                            <Component />
                        </LayoutComponent>
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
