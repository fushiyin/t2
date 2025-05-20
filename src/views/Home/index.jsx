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
				className="snap-start flex items-center justify-center px-16 h-screen"
			>
				<WhyVietnam />
			</section>
			<section
				id="vision"
				className="snap-start flex items-center justify-center px-16  h-screen"
			>
				<Vision />
			</section>
			<section
				id="competitive-edges"
				className="snap-start flex items-center justify-center px-16  h-screen "
			>
				<CompetitiveEdges />
			</section>
			<section
				id="development-capacity"
				className="snap-start flex items-center justify-center  h-screen"
			>
				<DevelopmentCapacity />
			</section>
			<section
				id="case-studies"
				className="flex items-center justify-center px-16  h-screen"
			>
				<CaseStudiesSection />
			</section>
			<section
				id="testimonials"
				className="flex items-center justify-center  h-screen"
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
