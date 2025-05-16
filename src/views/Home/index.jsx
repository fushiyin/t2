import CaseStudy from "./components/CaseStudy";
import CompetitiveEdges from "./components/CompetitiveEdges";
import LoadingDemoButton from "./components/LoadingDemoButton";
import ResetOnBoardingButton from "./components/ResetOnBoardingButton";
import Vision from "./components/Vision";

function HomePage() {
	return (
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
				<CaseStudy />
			</section>
			<section className="h-screen snap-start flex items-center justify-center px-16">
				<LoadingDemoButton />
				<ResetOnBoardingButton />
			</section>
		</div>
	);
}

export default HomePage;
