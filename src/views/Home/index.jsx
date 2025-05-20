import CaseStudiesSection from "@/views/Home/components/CaseStudiesSection";
import ContactSection from "@/views/Home/components/ContactSection";
import CompetitiveEdges from "./components/CompetitiveEdges";
import DevelopmentCapacity from "./components/DevelopmentCapacity";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Vision from "./components/Vision";
import WhyVietnam from "./components/WhyVietnam";

function HomePage() {
	return (
		// <div className="h-screen no-scrollbar overflow-y-scroll snap-y snap-mandatory"
		<div>
			<section className="snap-start flex items-center justify-center relative overflow-hidden h-[calc(100vh-64px)]">
				<Hero />
			</section>
			<section className="snap-start flex items-center justify-center px-16 h-[calc(100vh-64px)]">
				<WhyVietnam />
			</section>
			<section className="snap-start flex items-center justify-center px-16 h-[calc(100vh-64px)]">
				<Vision />
			</section>
			<section className="snap-start flex items-center justify-center px-16 h-[calc(100vh-64px)]">
				<CompetitiveEdges />
			</section>
			<section className="snap-start flex items-center justify-center h-[calc(100vh-64px)]">
				<DevelopmentCapacity />
			</section>
			{/* <section className="snap-start flex items-center justify-center 
			px-16 h-[calc(100vh-64px)]">
				<ContactCTA />
				<LoadingDemoButton />
				<ResetOnBoardingButton />
			</section> */}
			<section className="flex items-center justify-center px-16 h-[calc(100vh-64px)]">
				<CaseStudiesSection />
			</section>
			<section className="flex items-center justify-center h-[calc(100vh-64px)]">
				<Testimonials />
			</section>
			<section className="flex items-center justify-center px-16 h-[calc(100vh-64px)]">
				<ContactSection />
			</section>
		</div>
	);
}

export default HomePage;
