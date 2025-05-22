import { SECTIONS, SECTIONS_KEY } from "@/constant/sideNavigation";
import { smoothScrollTo } from "@/lib/utils";
import { useEffect, useState } from "react";

const SideNavigation = () => {
	const [activeSection, setActiveSection] = useState(null);
	useEffect(() => {
		const handleScroll = () => {
			const main = document.querySelector("main");
			const header = document.querySelector("header");
			const headerHeight = header?.offsetHeight || 0;
			const scrollY = (main?.scrollTop || 0) + headerHeight;

			for (let section of SECTIONS) {
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

			setActiveSection(SECTIONS[SECTIONS.length - 1].id);
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

	const shouldHideNav =
		activeSection === SECTIONS_KEY.HERO.id || activeSection === SECTIONS_KEY.TESTIMONIALS.id;

	return (
		<nav
			className={`
		fixed left-0 flex flex-col items-center h-[300px] top-[271px] w-[60px] max-md:hidden z-50
		transition-opacity duration-500 ease-in-out
		${shouldHideNav ? "opacity-0 pointer-events-none" : "opacity-100"}
	`}
			aria-label="Page sections"
		>
			{SECTIONS.map((section, idx) => (
				<div key={section.id}>
					{idx !== 0 && (
						<div className="flex justify-center w-full">
							<div className="w-px h-8 bg-foreground/50" />
						</div>
					)}
					<div className="relative group flex items-center justify-center">
						<button
							onClick={() => scrollToSection(section.id)}
							className={`w-7 h-7 text-sm font-bold rounded-full text -tracking-wider flex items-center justify-center cursor-pointer transition-colors border-1 border-foreground hover:text-white ${
								activeSection === section.id
									? "bg-foreground text-slate-200 text-light"
									: "bg-white text-light  hover:bg-foreground"
							}`}
							aria-label={`Go to ${section.id}`}
						>
							{section.label}
						</button>
						<span className="absolute left-9 capitalize  bg-foreground text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
							{section.id.replace(/-/g, " ")}
						</span>
					</div>
				</div>
			))}
		</nav>
	);
};

export default SideNavigation;
