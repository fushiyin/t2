import CompetitiveEdges from "./components/CompetitiveEdges";
import ContactCTA from "./components/ContactCTA";
import DevelopmentCapacity from "./components/DevelopmentCapacity";
import Hero from "./components/Hero";
import Vision from "./components/Vision";

function HomePage() {
	return (
		<div className="h-screen no-scrollbar overflow-y-scroll snap-y snap-mandatory bg-gray-100">
			<section className="snap-start flex items-center justify-center relative overflow-hidden h-[calc(100vh-64px)]">
				<Hero />
			</section>
			<section className="snap-start flex items-center justify-center h-[calc(100vh-64px)]">
				<Vision />
			</section>
			<section className="snap-start flex items-center justify-center h-[calc(100vh-64px)]">
				<CompetitiveEdges />
			</section>
			<section className="snap-start flex items-center justify-center h-[calc(100vh-64px)]">
				<DevelopmentCapacity />
			</section>
			<section className="snap-start flex items-center justify-center h-[calc(100vh-64px)]">
				<ContactCTA />
				{/* <LoadingDemoButton />
				<ResetOnBoardingButton /> */}
			</section>
		</div>
	);
}

export default HomePage;
