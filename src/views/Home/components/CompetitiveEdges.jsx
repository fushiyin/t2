import classNames from "classnames";
import { BarChart3, Check, ChevronDown, Code, Cpu, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Communicate from "../../../assets/lotties/communicate.json";
import Computer from "../../../assets/lotties/computer.json";
import Cost from "../../../assets/lotties/cost.json";
import Dev from "../../../assets/lotties/dev.json";

const edges = [
	{
		id: 0,
		title: "Korean PM Coordinator",
		icon: <Cpu className="w-12 h-12 text-white" />,
		bgColor: "bg-[var(--color-draker-blue)]",
		textColor: "text-dark",
		borderColor: "border-[var(--color-draker-blue)]",
		hover: "hover:bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] hover:text-white transition-colors duration-300 ease-in-out",
		description: [
			"Able to coordinate between Korean and Vietnam",
			"Optimize response to Korean work style",
			"Able to lead project with rich experience",
			"Able to communicate and coordinate quickly and clearly when issues arise",
		],
		lottie: Computer,
		width: 200,
		height: 150,
	},
	{
		id: 1,
		title: "Skilled developers",
		icon: <Code className="w-12 h-12 text-white" />,
		bgColor: "bg-white",
		textColor: "text-dark",
		borderColor: "border-white",
		hover: "hover:bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] hover:text-white transition-colors duration-300 ease-in-out",
		description: [
			"Various language and frameworks proficiency",
			"Quickly adapt to the latest trends and technological changes",
			"Able to organize personnel with experience tailored to Korean project",
			"Quality-oriented, hands-on development team",
		],
		lottie: Dev,
		width: 300,
		height: 200,
	},
	{
		id: 2,
		title: "Entry-to-communication",
		icon: <BarChart3 className="w-12 h-12 text-white" />,
		bgColor: "bg-[var(--color-draker-blue)]",
		textColor: "text-dark",
		borderColor: "border-[var(--color-draker-blue)]",
		hover: "hover:bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] hover:text-white transition-colors duration-300 ease-in-out",
		description: [
			"Optimized communication between customers and developers with professional bridge personnel",
			"High level of understanding and responsiveness to cultural differences",
			"Efficient collaboration through customer-tailored communication",
			"Real-time smooth communication through collaboration tools",
		],
		lottie: Communicate,
		width: 170,
		height: 170,
	},
	{
		id: 3,
		title: "Cost efficiency",
		icon: <DollarSign className="w-12 h-12 text-white" />,
		bgColor: "bg-white",
		textColor: "text-dark",
		borderColor: "border-white",
		hover: "hover:bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] hover:text-white transition-colors duration-300 ease-in-out",
		description: [
			"Provide cost-effective solutions with high-quality services",
			"Minimizing trial and error with abundant experience",
			"Maximizing productivity with solid internal processes",
			"Achieving cost savings through flexible personnel management",
		],
		lottie: Cost,
		width: 230,
		height: 140,
	},
];

const defaultOptions = {
	loop: true,
	autoplay: true,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const CompetitiveEdges = () => {
	const [activeEdge, setActiveEdge] = useState(null);

	useEffect(() => {
		if (!activeEdge && edges.length > 0) {
			setActiveEdge(edges[0]);
		}
	}, []);

	return (
		<section className="w-full max-w-[1440px] mb-16">
			<div className="mx-auto">
				{/* Heading */}
				<div className="flex flex-col items-center justify-center space-y-4 text-center px-5 mb-5">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-t2-darkBlue">
						Our competitive edges
					</h2>
					<p className="md:max-w-[900px] text-muted-foreground md:text-xl/relaxed">
						Our guiding principles that drive everything we do.
					</p>
				</div>

				{/* Desktop grid */}
				<div className="hidden md:flex flex-col">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 mt-12">
						{edges.map((edge) => (
							<div
								key={edge.id}
								className="flex flex-col"
								onClick={() => setActiveEdge(edge)}
							>
								<div
									className={classNames(
										"w-full aspect-square flex flex-col items-end justify-between rounded-lg shadow-lg p-4 cursor-pointer h-90 bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)]",
										// activeEdge?.id === edge.id
										// 	? "bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)]"
										// 	: "bg-gray-200",
										// edge.hover,
									)}
								>
									<p className={`text-center text-xl w-full ${edge.textColor}`}>
										{edge.title.toUpperCase()}
									</p>
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

					<div className="w-[90px] h-[8px] bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] mb-4"></div>

					<div className="text-gray-700 dark:text-white pl-4 md:pl-0 space-y-3">
						{(activeEdge?.description ?? edges[0].description).map((benefit, index) => (
							<div
								key={index}
								className="flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1"
							>
								<Check
									className="text-gray-700 mt-1"
									size={20}
								/>
								<p className="leading-relaxed text-[21px]">{benefit}</p>
							</div>
						))}
					</div>
				</div>

				{/* Mobile */}
				<div className="flex flex-col gap-4 md:hidden px-4">
					{edges.map((edge) => (
						<div
							key={edge.id}
							className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white"
							onClick={() => setActiveEdge(activeEdge?.id === edge.id ? null : edge)}
						>
							<div className="p-3 flex items-center gap-4 cursor-pointer transition-colors hover:bg-gray-100 bg-gray-100">
								<div className="w-14 h-14 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center relative">
									<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] opacity-80"></div>
									<Lottie
										options={{
											...defaultOptions,
											animationData: edge.lottie,
										}}
										width={80} // increased size
										height={80}
									/>
								</div>
								<div className="flex-1">
									<h3 className="text-base font-semibold text-gray-900 tracking-wide">
										{edge.title?.toUpperCase()}
									</h3>
								</div>
								<div
									className={`transform transition-transform duration-300 ${
										activeEdge?.id === edge.id ? "rotate-180" : ""
									}`}
								>
									<ChevronDown className="w-5 h-5 text-gray-500" />
								</div>
							</div>

							<div
								className={`transition-all duration-300 ease-in-out overflow-hidden ${
									activeEdge?.id === edge.id
										? "max-h-[500px] opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								<div className="px-5 pt-4 pb-5 space-y-3 bg-white">
									{edge.description.map((benefit, index) => (
										<div
											key={index}
											className="flex items-start gap-3"
										>
											<Check
												className="text-green-500 mt-1 flex-shrink-0"
												size={18}
											/>
											<p className="text-sm text-gray-800 leading-relaxed">
												{benefit}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CompetitiveEdges;
