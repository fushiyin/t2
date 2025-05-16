import { BarChart3, Code, Cpu, DollarSign } from "lucide-react";

const CompetitiveEdges = () => {
	const edges = [
		{
			id: 0,
			title: "Korean PM Coordinator",
			icon: <Cpu className="w-12 h-12 text-[#0d1b3e]" />,
			bgColor: "bg-[#0d1b3e]",
			textColor: "text-[#0d1b3e]",
			borderColor: "border-[#0d1b3e]",
			hover: "hover:bg-linear-to-r from-[#00A9C0] to-[#7CD957] hover:text-white transition-colors duration-300 ease-in-out",
			isActive: true,
			desription: [
				"Able to coordinate between Korean and Vietnam",
				"Optimize response to Korean work style",
				"Able to lead project with rich experience",
				"Able to communicate and coordinate quickly and clearly when issues arise",
			],
		},
		{
			id: 1,
			title: "Skilled developers",
			icon: <Code className="w-12 h-12 text-[#0d1b3e]" />,
			bgColor: "bg-white",
			textColor: "text-[#0d1b3e]",
			borderColor: "border-white",
			hover: "hover:bg-linear-to-r from-[#00A9C0] to-[#7CD957] hover:text-white transition-colors duration-300 ease-in-out",
			isActive: false,
			desription: [
				"Able to coordinate between Korean and Vietnam",
				"Optimize response to Korean work style",
				"Able to lead project with rich experience",
				"Able to communicate and coordinate quickly and clearly when issues arise",
			],
		},
		{
			id: 2,
			title: "Entry-to-communication",
			icon: <BarChart3 className="w-12 h-12 text-[#0d1b3e]" />,
			bgColor: "bg-[#0d1b3e]",
			textColor: "text-[#0d1b3e]",
			borderColor: "border-[#0d1b3e]",
			hover: "hover:bg-linear-to-r from-[#00A9C0] to-[#7CD957] hover:text-white transition-colors duration-300 ease-in-out",
			isActive: false,
			desription: [
				"Able to coordinate between Korean and Vietnam",
				"Optimize response to Korean work style",
				"Able to lead project with rich experience",
				"Able to communicate and coordinate quickly and clearly when issues arise",
			],
		},
		{
			id: 3,
			title: "Cost efficiency",
			icon: <DollarSign className="w-12 h-12 text-[#0d1b3e]" />,
			bgColor: "bg-white",
			textColor: "text-[#0d1b3e]",
			borderColor: "border-white",
			hover: "hover:bg-linear-to-r from-[#00A9C0] to-[#7CD957] hover:text-white transition-colors duration-300 ease-in-out",
			isActive: false,
			desription: [
				"Able to coordinate between Korean and Vietnam",
				"Optimize response to Korean work style",
				"Able to lead project with rich experience",
				"Able to communicate and coordinate quickly and clearly when issues arise",
			],
		},
	];

	return (
		<section className="w-full text-white">
			<div className="mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#001159] dark:text-white">
						OUR COMPETITIVE EDGES
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-200 ">
						Our guiding principles that drive everything we do at T2Soft.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-10">
					{edges.map((edge, index) => (
						<div
							key={index}
							className="flex flex-col float-up"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="group relative w-full aspect-square bg-white flex flex-col items-end justify-between shadow-lg p-4 overflow-hidden">
								<div className="absolute inset-0 pointer-events-none overflow-hidden">
									<div
										className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300 ease-in-out"
										style={{
											backgroundImage:
												"linear-gradient(to right, #00A9C0, #7CD957)",
										}}
									></div>

									<div
										className="absolute top-0 right-0 w-[2px] h-0 group-hover:h-full transition-all duration-300 ease-in-out"
										style={{
											backgroundImage:
												"linear-gradient(to bottom, #00A9C0, #7CD957)",
											transitionDelay: "100ms",
										}}
									></div>

									<div
										className="absolute bottom-0 right-0 w-0 h-[2px] group-hover:w-full transition-all duration-300 ease-in-out"
										style={{
											backgroundImage:
												"linear-gradient(to left, #00A9C0, #7CD957)",
											transitionDelay: "200ms",
										}}
									></div>

									<div
										className="absolute bottom-0 left-0 w-[2px] h-0 group-hover:h-full transition-all duration-300 ease-in-out"
										style={{
											backgroundImage:
												"linear-gradient(to top, #00A9C0, #7CD957)",
											transitionDelay: "300ms",
										}}
									></div>
								</div>

								<p className={`text-2xl w-full ${edge.textColor} relative z-10`}>
									{edge.title}
								</p>
								<div className="relative z-10">{edge.icon}</div>
							</div>
						</div>
					))}
				</div>

				<div className="w-[90px] h-[8px] bg-linear-to-r from-[#00A9C0] to-[#7CD957] mb-4"></div>

				<div className=" text-gray-200 pl-4 md:pl-0">
					{edges[0].desription.map((benefit, index) => (
						<p
							key={index}
							className="text-gray-700 dark:text-white text-xl md:text-2xl font-light leading-relaxed"
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
