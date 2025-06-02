/* eslint-disable react-hooks/exhaustive-deps */
import Communicate from "@/assets/lotties/communicate.json";
import Computer from "@/assets/lotties/computer.json";
import Cost from "@/assets/lotties/cost.json";
import Dev from "@/assets/lotties/dev.json";
import classNames from "classnames";
import { BarChart3, Check, Code, Cpu, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";

const edges = [
	{
		id: 0,
		title: "Korean PM Coordinator",
		icon: <Cpu className="w-12 h-12 text-black" />,
		description: [
			"Able to coordinate between Korean and Vietnam",
			"Optimize response to Korean work style",
			"Able to lead project with rich experience",
			"Able to communicate and coordinate quickly and clearly when issues arise",
		],
		lottie: Computer,
		width: 300,
		height: 250,
	},
	{
		id: 1,
		title: "Developer skills",
		icon: <Code className="w-12 h-12 text-black" />,
		description: [
			"Various language and frameworks proficiency",
			"Quickly adapt to the latest trends and technological changes",
			"Able to organize personnel with experience tailored to Korean project",
			"Quality-oriented, hands-on development team",
		],
		lottie: Dev,
		width: 300,
		height: 250,
	},
	{
		id: 2,
		title: "Communication",
		icon: <BarChart3 className="w-12 h-12 text-black" />,
		description: [
			"Optimized communication between customers and developers with professional bridge personnel",
			"High level of understanding and responsiveness to cultural differences",
			"Efficient collaboration through customer-tailored communication",
			"Real-time smooth communication through collaboration tools",
		],
		lottie: Communicate,
		width: 300,
		height: 200,
	},
	{
		id: 3,
		title: "Cost efficiency",
		icon: <DollarSign className="w-12 h-12 text-black" />,
		description: [
			"Provide cost-effective solutions with high-quality services",
			"Minimizing trial and error with abundant experience",
			"Maximizing productivity with solid internal processes",
			"Achieving cost savings through flexible personnel management",
		],
		lottie: Cost,
		width: 250,
		height: 250,
	},
];

const defaultOptions = {
	loop: true,
	autoplay: true,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const AUTO_SWITCH_INTERVAL = 5000;

const CompetitiveEdges = ({ contentClass }) => {
	const [activeEdge, setActiveEdge] = useState(null);
	const [isHovered, setIsHovered] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	useEffect(() => {
		if (!activeEdge && edges.length > 0) {
			setActiveEdge(edges[0]);
		}
	}, []);

	useEffect(() => {
		if (isHovered) return;
		const interval = setInterval(() => {
			setActiveEdge((prev) => {
				const currentIndex = edges.findIndex((e) => e.id === prev?.id);
				const nextIndex = (currentIndex + 1) % edges.length;
				return edges[nextIndex];
			});
		}, AUTO_SWITCH_INTERVAL);

		return () => clearInterval(interval);
	}, [isHovered]);

	return (
		<div className="w-full bg-white flex flex-col items-center justify-center">
			<div
				className={classNames({
					[contentClass]: contentClass,
				})}
			>
				{/* Heading */}
				<div className="flex flex-col items-center justify-center space-y-4 text-center px-5 mb-5">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark-gray">
						Our competitive edges
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Our guiding principles that drive everything we do.
					</p>
				</div>

				{/* Desktop grid */}
				<div className="hidden md:flex flex-col 2xl:px-0 lg:px-5 px-10">
					<div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-8 2xl:gap-4 sm:gap-6 py-12">
						{edges.map((edge) => {
							const isActive = activeEdge?.id === edge.id;
							const isHovering = hoveredIndex === edge.id;

							return (
								<div
									key={edge.id}
									className="flex flex-col"
									onMouseEnter={() => {
										setIsHovered(true);
										setHoveredIndex(edge.id);
										setActiveEdge(edge);
									}}
									onMouseLeave={() => {
										setIsHovered(false);
										setHoveredIndex(null);
									}}
								>
									<div
										className={classNames(
											"w-full aspect-square flex flex-col items-end justify-between rounded-lg shadow-lg p-4 cursor-pointer h-90 transition-all duration-300 border-t border-zinc-300 dark:border-zinc-700",
											isActive || isHovering
												? "bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] text-white scale-[1.03]"
												: "bg-white text-dark",
										)}
									>
										<p className="text-center text-xl w-full">
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
							);
						})}
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
						>
							<div className="p-3 flex items-center gap-4 bg-gray-100">
								<div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center relative">
									<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] opacity-80 rounded-lg"></div>
									<div className="relative z-10 w-16 h-16">
										<Lottie
											options={{
												...defaultOptions,
												animationData: edge.lottie,
											}}
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-base font-semibold text-gray-900 tracking-wide">
										{edge.title?.toUpperCase()}
									</h3>
								</div>
							</div>

							{/* Always expanded */}
							<div className="transition-all duration-300 ease-in-out overflow-hidden max-h-[500px] opacity-100">
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
		</div>
	);
};

export default CompetitiveEdges;
