import { BarChart3, Code, Cpu, DollarSign } from "lucide-react";
import Lottie from "react-lottie";
import Communicate from "../../../assets/lotties/communicate.json";
import Computer from "../../../assets/lotties/computer.json";
import Cost from "../../../assets/lotties/cost.json";
import Dev from "../../../assets/lotties/dev.json";

const CompetitiveEdges = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const edges = [
		{
			id: 0,
			title: "Korean PM Coordinator",
			icon: <Cpu className="w-12 h-12 text-white" />,
			bgColor: "bg-[#0d1b3e]",
			textColor: "text-white",
			borderColor: "border-[#0d1b3e]",
			hover: "hover:bg-linear-to-r from-[#00A9C0] to-[#7CD957] hover:text-white transition-colors duration-300 ease-in-out",
			isActive: true,
			desription: [
				"Able to coordinate between Korean and Vietnam",
				"Optimize response to Korean work style",
				"Able to lead project with rich experience",
				"Able to communicate and coordinate quickly and clearly when issues arise",
			],
			lottie: Computer,
			width: 150,
			height: 100,
		},
		{
			id: 1,
			title: "Skilled developers",
			icon: <Code className="w-12 h-12 text-white" />,
			bgColor: "bg-white",
			textColor: "text-white",
			borderColor: "border-white",
			hover: "hover:bg-linear-to-r from-[#00A9C0] to-[#7CD957] hover:text-white transition-colors duration-300 ease-in-out",
			isActive: false,
			desription: [
				"Able to coordinate between Korean and Vietnam",
				"Optimize response to Korean work style",
				"Able to lead project with rich experience",
				"Able to communicate and coordinate quickly and clearly when issues arise",
			],
			lottie: Dev,
			width: 200,
			height: 100,
		},
		{
			id: 2,
			title: "Entry-to-communication",
			icon: <BarChart3 className="w-12 h-12 text-white" />,
			bgColor: "bg-[#0d1b3e]",
			textColor: "text-white",
			borderColor: "border-[#0d1b3e]",
			hover: "hover:bg-linear-to-r from-[#00A9C0] to-[#7CD957] hover:text-white transition-colors duration-300 ease-in-out",
			isActive: false,
			desription: [
				"Able to coordinate between Korean and Vietnam",
				"Optimize response to Korean work style",
				"Able to lead project with rich experience",
				"Able to communicate and coordinate quickly and clearly when issues arise",
			],
			lottie: Communicate,
			width: 120,
			height: 120,
		},
		{
			id: 3,
			title: "Cost efficiency",
			icon: <DollarSign className="w-12 h-12 text-white" />,
			bgColor: "bg-white",
			textColor: "text-white",
			borderColor: "border-white",
			hover: "hover:bg-linear-to-r from-[#00A9C0] to-[#7CD957] hover:text-white transition-colors duration-300 ease-in-out",
			isActive: false,
			desription: [
				"Able to coordinate between Korean and Vietnam",
				"Optimize response to Korean work style",
				"Able to lead project with rich experience",
				"Able to communicate and coordinate quickly and clearly when issues arise",
			],
			lottie: Cost,
			width: 180,
			height: 90,
		},
	];

	return (
		<section className="w-fulltext-white">
			<div className="mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#001159] dark:text-white">
						OUR COMPETITIVE EDGES
					</h2>
					<p className="font-medium text-2xl text-gray-700 dark:text-gray-200 ">
						Our guiding principles that drive everything we do at T2Soft.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-10">
					{edges.map((edge, index) => (
						<div
							key={index}
							className="flex flex-col"
						>
							<div
								className={`w-full aspect-square bg-[#0d1b3e] ${edge.hover} flex flex-col items-end justify-between rounded-lg shadow-lg p-4`}
							>
								<p className={`text-2xl w-full ${edge.textColor}`}>{edge.title}</p>
								<div className="w-full h-full flex items-center justify-center">
									<Lottie
										options={{
											...defaultOptions,
											animationData: edge.lottie,
										}}
										width={edge.width}
										height={edge.height}
									/>
								</div>
								<div>{edge.icon}</div>
							</div>
						</div>
					))}
				</div>

				<div className="w-[90px] h-[8px] bg-linear-to-r from-[#00A9C0] to-[#7CD957] mb-4"></div>

				<div className="text-gray-200 pl-4 md:pl-0">
					{edges[0].desription.map((benefit, index) => (
						<p
							key={index}
							className="leading-relaxed text-gray-700 dark:text-white text-[21px]"
						>
							{benefit}
						</p>
					))}
				</div>
			</div>
		</section>
	);
};

export default CompetitiveEdges;
