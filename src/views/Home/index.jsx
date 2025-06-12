import CTA from "@/components/sections/ContactCTA";
import { HEADER_STYLE } from "@/constant/header";
import { SECTIONS_KEY } from "@/constant/sideNavigation";
import CompetitiveEdges from "./components/CompetitiveEdges";
import DevelopmentCapacity from "./components/DevelopmentCapacity/index";
import FocusedIndustries from "./components/FocusedIndustries";
import Hero from "./components/Hero";
import OurProcess from "./components/OurProcess";
import SideNavigation from "./components/SideNavigation";
import Testimonials from "./components/Testimonials";
import VisionJourney from "./components/Vision";
import WhyVietnam from "./components/WhyVietnam";

function HomePage() {
	const sectionClass = "flex items-center justify-center relative overflow-hidden";
	const contentClass = "container h-full px-4 py-16 md:px-6 max-w-[1440px]";
	return (
		<>
			<section
				id={SECTIONS_KEY.HERO.id}
				className={sectionClass + ` h-[calc(100vh-${HEADER_STYLE.HEIGHT})]`}
			>
				<Hero />
			</section>
			<section
				id={SECTIONS_KEY.WHY_VIETNAM.id}
				className={sectionClass}
			>
				<WhyVietnam contentClass={contentClass} />
			</section>
			<section
				id={SECTIONS_KEY.COMPETITIVE_EDGES.id}
				className={sectionClass}
			>
				<CompetitiveEdges contentClass={contentClass} />
			</section>
			<section
				id={SECTIONS_KEY.DEVELOPMENT_CAPACITY.id}
				className={sectionClass}
			>
				<DevelopmentCapacity contentClass={contentClass} />
			</section>
			<section
				id={SECTIONS_KEY.FOCUSED_INDUSTRIES.id}
				className={sectionClass}
			>
				<FocusedIndustries contentClass={contentClass} />
			</section>
			<section
				id={SECTIONS_KEY.OUR_PROCESS.id}
				className={sectionClass}
			>
				<OurProcess contentClass={contentClass} />
			</section>
			<section
				id={SECTIONS_KEY.TESTIMONIALS.id}
				className={sectionClass}
			>
				<Testimonials contentClass={contentClass} />
			</section>
			{/* <section
				id="development"
				className={sectionClass}
			>
				<Development />
			</section> */}
			<section
				id="contact-section"
				className="flex items-center justify-center"
			>
				<CTA />
			</section>
			{/* <section className="snap-start flex items-center justify-center 
			px-16 h-[calc(100vh-64px)]">
				<ContactCTA />
				<LoadingDemoButton />
				<ResetOnBoardingButton />
			</section> */}
			<SideNavigation />
		</>
	);
}

export default HomePage;
