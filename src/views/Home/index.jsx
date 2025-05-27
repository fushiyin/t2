import CTA from "@/components/sections/ContactCTA";
import { HEADER_STYLE } from "@/constant/header";
import { SECTIONS_KEY } from "@/constant/sideNavigation";
import CaseStudiesSection from "@/views/Home/components/CaseStudiesSection";
import CompetitiveEdges from "./components/CompetitiveEdges";
import Development from "./components/Development";
import Hero from "./components/Hero";
import VisionJourney from "./components/Journey";
import OurProcess from "./components/OurProcess";
import SideNavigation from "./components/SideNavigation";
import Testimonials from "./components/Testimonials";
import Vision from "./components/Vision";
import WhyVietnam from "./components/WhyVietnam";
import VisionJourney2 from "./Demo";

function HomePage() {
	const sectionHeightClass = `h-[calc(100vh-${HEADER_STYLE.HEIGHT})]`;
	const sectionClass = `flex items-center justify-center relative overflow-hidden ${sectionHeightClass}`;
	return (
		<>
			<section
				id={SECTIONS_KEY.HERO.id}
				className={sectionClass}
			>
				<Hero />
			</section>
			<section
				id={SECTIONS_KEY.WHY_VIETNAM.id}
				className={sectionClass}
			>
				<WhyVietnam />
			</section>
			<section
				id={SECTIONS_KEY.VISION.id}
				className={sectionClass}
			>
				<Vision />
			</section>
			<section className={sectionClass}>
				<VisionJourney />
			</section>
			<section className={sectionClass}>
				<VisionJourney2 />
			</section>
			<section
				id={SECTIONS_KEY.COMPETITIVE_EDGES.id}
				className={sectionClass}
			>
				<CompetitiveEdges />
			</section>
			{/* <section
				id="development-capacity"
				className={sectionClass}
			>
				<DevelopmentCapacity />
			</section> */}
			<section
				id={SECTIONS_KEY.DEVELOPMENT_CAPACITY.id}
				className={sectionClass}
			>
				<Development />
			</section>
			<section
				id={SECTIONS_KEY.CASE_STUDIES.id}
				className={sectionClass}
			>
				<CaseStudiesSection />
			</section>
			<section
				id={SECTIONS_KEY.TESTIMONIALS.id}
				className={sectionClass}
			>
				<Testimonials />
			</section>
			<section
				id={SECTIONS_KEY.OUR_PROCESS.id}
				className={sectionClass}
			>
				<OurProcess />
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
