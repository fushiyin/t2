import { HEADER_STYLE } from "@/constant/header";
import CaseStudiesSection from "@/views/Home/components/CaseStudiesSection";
import ContactSection from "@/views/Home/components/ContactSection";
import SideNavigation from "./components/CaseStudiesSection/SideNavigation";
import CompetitiveEdges from "./components/CompetitiveEdges";
import DevelopmentCapacity from "./components/DevelopmentCapacity";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Vision from "./components/Vision";
import WhyVietnam from "./components/WhyVietnam";

function HomePage() {
	const sectionHeightClass = `h-[calc(100vh-${HEADER_STYLE.HEIGHT})]`;
	const sectionClass = `flex items-center justify-center relative overflow-hidden ${sectionHeightClass}`;
	return (
		<>
			<section
				id="hero-video"
				className={sectionClass}
			>
				<Hero />
			</section>
			<section
				id="why-vietnam"
				className={sectionClass}
			>
				<WhyVietnam />
			</section>
			<section
				id="vision"
				className={sectionClass}
			>
				<Vision />
			</section>
			<section
				id="competitive-edges"
				className={sectionClass}
			>
				<CompetitiveEdges />
			</section>
			<section
				id="development-capacity"
				className={sectionClass}
			>
				<DevelopmentCapacity />
			</section>
			<section
				id="case-studies"
				className={sectionClass}
			>
				<CaseStudiesSection />
			</section>
			<section
				id="testimonials"
				className={sectionClass}
			>
				<Testimonials />
			</section>
			<section
				id="contact-section"
				className="flex items-center justify-center  h-screen"
				style={{ height: "30vh" }}
			>
				<ContactSection />
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
