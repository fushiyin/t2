import CTA from "@/components/sections/ContactCTA";
import { HEADER_STYLE } from "@/constant/header";
import CaseStudiesSection from "@/views/Home/components/CaseStudiesSection";
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
				className="flex items-center justify-center"
			>
				<CTA />
			</section>

			<SideNavigation />
		</>
	);
}

export default HomePage;
