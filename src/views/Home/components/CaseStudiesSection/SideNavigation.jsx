import { useEffect, useState } from "react";

const sections = [
	{ id: "section-1", label: "01" },
	{ id: "section-2", label: "02" },
	{ id: "section-3", label: "03" },
	{ id: "case-studies", label: "04" },
	{ id: "contact-section", label: "05" },
];

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const smoothScrollTo = (targetY, duration = 800) => {
	const startY = window.scrollY;
	const distance = targetY - startY;
	let startTime;

	const step = (timestamp) => {
		if (!startTime) startTime = timestamp;
		const timeElapsed = timestamp - startTime;
		const progress = Math.min(timeElapsed / duration, 1);
		const easedProgress = easeInOutCubic(progress);
		window.scrollTo(0, startY + distance * easedProgress);

		if (timeElapsed < duration) {
			requestAnimationFrame(step);
		}
	};

	requestAnimationFrame(step);
};

const SideNavigation = () => {
	const [activeSection, setActiveSection] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			let current = null;

			for (let section of sections) {
				const el = document.getElementById(section.id);
				if (el) {
					const offsetTop = el.offsetTop;
					const offsetHeight = el.offsetHeight;

					if (scrollY >= offsetTop - offsetHeight / 2) {
						current = section.id;
					}
				}
			}
			setActiveSection(current);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // call once on mount
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			const y = section.getBoundingClientRect().top + window.scrollY;
			smoothScrollTo(y, 800);
		}
	};

	return (
		<nav
			className="flex fixed left-0 flex-col items-center h-[300px] top-[271px] w-[60px] max-md:hidden"
			aria-label="Page sections"
		>
			{sections.map((section, idx) => (
				<div key={section.id}>
					{idx !== 0 && <div className="w-px h-8 bg-blue-950" />}
					<button
						onClick={() => scrollToSection(section.id)}
						className={`w-7 h-7 text-sm font-bold rounded-full -tracking-wider flex items-center justify-center cursor-pointer transition-colors ${
							activeSection === section.id
								? "bg-blue-950 text-slate-200"
								: "bg-slate-200 text-blue-950 hover:bg-slate-300"
						}`}
						aria-label={`Go to ${section.id}`}
					>
						{section.label}
					</button>
				</div>
			))}
		</nav>
	);
};

export default SideNavigation;
