import { idRouter } from "@/routes/idRouter";

export const HEADER_STYLE = Object.freeze({
	HEIGHT: "64px",
});

export const NAV_LINKS = [
	{ name: "Home", path: idRouter?.home },
	{ name: "About Us", path: idRouter?.about },
	{ name: "Services", path: idRouter?.service },
	{ name: "Career", path: idRouter?.career },
	{ name: "Blog", path: idRouter?.blog },
	{ name: "Contact", path: idRouter?.contact },
];
