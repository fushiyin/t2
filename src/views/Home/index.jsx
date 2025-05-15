import Banner from "./components/Banner";
import CompetitiveEdges from "./components/CompetitiveEdges";
import Vision from "./components/VIsion";

function HomePage() {
	return (
		<div className="h-screen no-scrollbar overflow-y-scroll snap-y snap-mandatory bg-gray-100">
			<section className="h-screen snap-start flex items-center justify-center">
				<Vision />
			</section>
			<section className="h-screen snap-start flex items-center justify-center">
				<CompetitiveEdges />
			</section>
		</div>
	);
}

export default HomePage;
