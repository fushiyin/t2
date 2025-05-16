import CaseStudiesSection from "@/views/Home/components/CaseStudiesSection";
import ContactSection from "@/views/Home/components/ContactSection";
import CompetitiveEdges from "./components/CompetitiveEdges";
import LoadingDemoButton from "./components/LoadingDemoButton";
import ResetOnBoardingButton from "./components/ResetOnBoardingButton";
import Vision from "./components/Vision";

function HomePage() {
	return (
		// <div className="h-screen no-scrollbar overflow-y-scroll snap-y snap-mandatory"
		<div
			className="h-screen no-scrollbar overflow-y-scroll snap-y snap-mandatory"
			style={{
				maxWidth: 1440,
				margin: "0 auto",
			}}
		>
			<section className="h-screen snap-start flex items-center justify-center px-16">
				<Vision />
			</section>
			<section className="h-screen snap-start flex items-center justify-center px-16">
				<CompetitiveEdges />
			</section>
			<section className="h-screen snap-start flex items-center justify-center px-16">
				<LoadingDemoButton />
				<ResetOnBoardingButton />
			</section>
			<section className="h-screen snap-start flex items-center justify-center">
				<CaseStudiesSection />
			</section>
			<section className="h-screen snap-start flex items-center justify-center">
				<ContactSection />
			</section>
		</div>
	);
}

export default HomePage;
