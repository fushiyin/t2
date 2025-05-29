import { idRouter } from "@/routes/idRouter";

export const HEADER_STYLE = Object.freeze({
	HEIGHT: "64px",
});

export const NAV_LINKS = [
	{ name: "Home", path: idRouter?.home, i18nKey: "menu.home" },
	{ name: "About Us", path: idRouter?.about, i18nKey: "menu.about" },
	{ name: "Services", path: idRouter?.service, i18nKey: "menu.services" },
	{ name: "Career", path: idRouter?.career, i18nKey: "menu.careers" },
	{ name: "Blog", path: idRouter?.blog, i18nKey: "menu.blog" },
	{ name: "Contact", path: idRouter?.contact, i18nKey: "menu.contact" },
];
