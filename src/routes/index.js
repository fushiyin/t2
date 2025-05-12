import React from "react";
import { idRouter } from "./idRouter";

const Home = React.lazy(() => import("@/views/PC/Home"));
const About = React.lazy(() => import("@/views/PC/About"));

const HomeRoute = {
	id: "homeRoute",
	path: `/`,
	component: Home,
	pcComponent: Home,
};
const AboutRoute = {
	id: idRouter.about,
	path: `/${idRouter.about}`,
	component: About,
	pcComponent: About,
};
export const registerRoutes = [HomeRoute, AboutRoute];
