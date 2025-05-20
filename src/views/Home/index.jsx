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
	return (
		<>
			<section
				id="hero-video"
				className="snap-start flex items-center justify-center relative overflow-hidden h-[calc(100vh-64px)]"
			>
				<Hero />
			</section>
			<section
				id="why-vietnam"
				className="snap-start flex items-center justify-center px-4 sm:px-6 md:px-16 min-h-screen"
			>
				<WhyVietnam />
			</section>
			<section
				id="vision"
				className="snap-start flex items-center justify-center px-4 sm:px-6 md:px-16"
				style={{ minHeight: `calc(100vh - ${HEADER_STYLE.HEIGHT})` }}
			>
				<Vision />
			</section>
			<section
				id="competitive-edges"
				className="snap-start flex items-center justify-center px-4 sm:px-6 md:px-16"
				style={{ minHeight: `calc(100vh - ${HEADER_STYLE.HEIGHT})` }}
			>
				<CompetitiveEdges />
			</section>
			<section
				id="development-capacity"
				className="snap-start flex items-center justify-center px-4 sm:px-6 md:px-16"
				style={{ minHeight: `calc(100vh - ${HEADER_STYLE.HEIGHT})` }}
			>
				<DevelopmentCapacity />
			</section>
			<section
				id="case-studies"
				className="flex items-center justify-center px-4 sm:px-6 md:px-16"
				style={{ minHeight: `calc(100vh - ${HEADER_STYLE.HEIGHT})` }}
			>
				<CaseStudiesSection />
			</section>
			<section
				id="testimonials"
				className="flex items-center justify-center px-4 sm:px-6 md:px-16"
				style={{ minHeight: `calc(100vh - ${HEADER_STYLE.HEIGHT})` }}
			>
				<Testimonials />
			</section>
			<section
				id="contact-section"
				className="flex items-center justify-center px-4 sm:px-6 md:px-16"
				style={{ minHeight: "30vh" }}
			>
				<ContactSection />
			</section>

			<SideNavigation />
		</>
	);
}

export default HomePage;
