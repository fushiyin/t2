import React from "react";
import { idRouter } from "./idRouter";

const Home = React.lazy(() => import("@/views/PC/Home"));
const About = React.lazy(() => import("@/views/PC/About"));
const HomePage = React.lazy(() => import("@/views/Home"));

export const registerRoutes = [
	{
		id: "homeRoute",
		path: "/demo",
		component: Home,
	},
	{
		id: idRouter.about,
		path: `/${idRouter.about}`,
		component: About,
	},
	{
		id: "home",
		path: "/",
		component: HomePage,
	},
];
