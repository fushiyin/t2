import { smoothScrollTo } from "@/lib/utils";
import { useEffect, useState } from "react";

const sections = [
	{ id: "hero-video", label: "01", name: "Hero Video" },
	{ id: "why-vietnam", label: "02", name: "Why Vietnam" },
	{ id: "vision", label: "03", name: "Vision" },
	{ id: "competitive-edges", label: "04", name: "Competitive Edges" },
	// { id: "development-capacity", label: "05", name: "Development Capacity" },
	{ id: "case-studies", label: "05", name: "Case Studies" },
	{ id: "testimonials", label: "06", name: "Testimonials" },
	{ id: "our_process", label: "07", name: "Our Process" },
];

const SideNavigation = () => {
	const [activeSection, setActiveSection] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			const main = document.querySelector("main");
			const header = document.querySelector("header");
			const headerHeight = header?.offsetHeight || 0;
			const scrollY = (main?.scrollTop || 0) + headerHeight;

			for (let section of sections) {
				const el = document.getElementById(section.id);
				if (el && main) {
					const offsetTop = el.offsetTop - main.offsetTop;
					const offsetHeight = el.offsetHeight;

					if (scrollY < offsetTop + offsetHeight / 2) {
						setActiveSection(section.id);
						return;
					}
				}
			}

			setActiveSection(sections[sections.length - 1].id);
		};

		const main = document.querySelector("main");
		if (main) {
			main.addEventListener("scroll", handleScroll);
			handleScroll();
			return () => main.removeEventListener("scroll", handleScroll);
		}
	}, []);

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		const main = document.querySelector("main");

		if (section && main) {
			const sectionTopInMain = section.offsetTop - main.offsetTop;
			const y = sectionTopInMain;
			smoothScrollTo(y, 800);
		}
	};

	const shouldHideNav = activeSection === "hero-video" || activeSection === "testimonials";

	return (
		<nav
			className={`
		fixed left-0 flex flex-col items-center h-[300px] top-[271px] w-[60px] max-md:hidden z-50
		transition-opacity duration-500 ease-in-out
		${shouldHideNav ? "opacity-0 pointer-events-none" : "opacity-100"}
	`}
			aria-label="Page sections"
		>
			{sections.map((section, idx) => (
				<div key={section.id}>
					{idx !== 0 && (
						<div className="flex justify-center w-full">
							<div className="w-px h-8 bg-light-blue" />
						</div>
					)}
					<div className="relative group flex items-center justify-center">
						<button
							onClick={() => scrollToSection(section.id)}
							className={`w-7 h-7 text-sm font-bold rounded-full text -tracking-wider flex items-center justify-center cursor-pointer transition-colors border-1 border-light-blue hover:text-white ${
								activeSection === section.id
									? "bg-light-blue text-slate-200 text-light"
									: "bg-white text-light-blue  hover:bg-light-blue"
							}`}
							aria-label={`Go to ${section.id}`}
						>
							{section.label}
						</button>
						<span className="absolute left-9 capitalize  bg-light-blue text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
							{section.id.replace(/-/g, " ")}
						</span>
					</div>
				</div>
			))}
		</nav>
	);
};

export default SideNavigation;
