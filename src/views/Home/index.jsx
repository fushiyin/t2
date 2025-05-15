import CompetitiveEdges from "./components/CompetitiveEdges";
import LoadingDemoButton from "./components/LoadingDemoButton";
import ResetOnBoardingButton from "./components/ResetOnBoardingButton";
import Vision from "./components/Vision";

function HomePage() {
	return (
		<div className="h-screen no-scrollbar overflow-y-scroll snap-y snap-mandatory bg-gray-100">
			<section className="h-screen snap-start flex items-center justify-center">
				<Vision />
			</section>
			<section className="h-screen snap-start flex items-center justify-center">
				<CompetitiveEdges />
			</section>
			<section className="h-screen snap-start flex items-center justify-center">
				<LoadingDemoButton />
				<ResetOnBoardingButton />
			</section>
		</div>
	);
}

export default HomePage;
