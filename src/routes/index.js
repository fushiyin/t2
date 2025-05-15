import React from "react";
import { idRouter } from "./idRouter";

const Home = React.lazy(() => import("@/views/PC/Home"));
const About = React.lazy(() => import("@/views/PC/About"));
const HomePage = React.lazy(() => import("@/views/Home"));

const HomeRoute = {
	id: "homeRoute",
	path: "/demo",
	component: Home,
};
const AboutRoute = {
	id: idRouter.about,
	path: `/${idRouter.about}`,
	component: About,
};
const T2Home = {
	id: "home",
	path: "/",
	component: HomePage,
};
export const registerRoutes = [HomeRoute, AboutRoute, T2Home];
