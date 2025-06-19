import { idRouter } from "@/routes/idRouter";
import { Home, Users, Briefcase, Layers, Newspaper, Contact, BadgeCheck } from "lucide-react";

export const NAV_LINKS = [
	{
		name: "Home",
		path: idRouter?.home,
		i18nKey: "menu.home",
		icon: Home,
	},
	{
		name: "About Us",
		path: idRouter?.about,
		i18nKey: "menu.about",
		icon: Users, // ✅ Thay vì Info
	},
	{
		name: "Services",
		path: idRouter?.service,
		i18nKey: "menu.services",
		icon: Briefcase,
	},
	{
		name: "Solution & Product",
		path: idRouter?.solution,
		i18nKey: "menu.solutions",
		icon: Layers,
	},
	{
		name: "Career",
		path: idRouter?.career,
		i18nKey: "menu.careers",
		icon: BadgeCheck, // ✅ Thay vì BrainCircuit
	},
	{
		name: "Blog",
		path: idRouter?.blog,
		i18nKey: "menu.blog",
		icon: Newspaper,
	},
	{
		name: "Contact",
		path: idRouter?.contact,
		i18nKey: "menu.contact",
		icon: Contact,
	},
];
