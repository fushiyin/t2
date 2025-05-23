import classNames from "classnames";
import { BarChart3, Check, Code, Cpu, DollarSign } from "lucide-react";
import { useState } from "react";
import Lottie from "react-lottie";
import Communicate from "../../../assets/lotties/communicate.json";
import Computer from "../../../assets/lotties/computer.json";
import Cost from "../../../assets/lotties/cost.json";
import Dev from "../../../assets/lotties/dev.json";

const CompetitiveEdges = () => {
	const [activeEdge, setActiveEdge] = useState(null);
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
			bgColor: "bg-[var(--color-draker-blue)]",
			textColor: "text-white",
			borderColor: "border-[var(--color-draker-blue)]",
			hover: "hover:bg-linear-to-r from-[var(--light-mint)] to-[var(--light-green)] hover:text-white transition-colors duration-300 ease-in-out",
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
			hover: "hover:bg-linear-to-r from-[var(--light-mint)] to-[var(--light-green)] hover:text-white transition-colors duration-300 ease-in-out",
			isActive: false,
			desription: [
				"Various language and frameworks proficiency",
				"Quickly adapt to the latest trends and technological changes",
				"Able to organize personnel with experience tailored to Korean project",
				"Quality-oriented, hands-on development team",
			],
			lottie: Dev,
			width: 200,
			height: 100,
		},
		{
			id: 2,
			title: "Entry-to-communication",
			icon: <BarChart3 className="w-12 h-12 text-white" />,
			bgColor: "bg-[var(--color-draker-blue)]",
			textColor: "text-white",
			borderColor: "border-[var(--color-draker-blue)]",
			hover: "hover:bg-linear-to-r from-[var(--light-mint)] to-[var(--light-green)] hover:text-white transition-colors duration-300 ease-in-out",
			isActive: false,
			desription: [
				"Optimized communication between customers and developers with professional bridge personnel",
				"High level of understanding and responsiveness to cultural differences",
				"Efficient collaboration through customer-tailored communication",
				"Real-time smooth communication through collaboration tools",
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
			hover: "hover:bg-linear-to-r from-[var(--light-mint)] to-[var(--light-green)] hover:text-white transition-colors duration-300 ease-in-out",
			isActive: false,
			desription: [
				"Provide cost-effective solutions with high-quality services",
				"Minimizing trial and error with abundant experience",
				"Maximizing productivity with solid internal processes",
				"Achieving cost savings through flexible personnel management",
			],
			lottie: Cost,
			width: 180,
			height: 90,
		},
	];

	return (
		<section className="w-full max-w-[1440px]">
			<div className="mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-t2-darkBlue">
						Our competitive edges
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Our guiding principles that drive everything we do at T2Soft.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-16 justify-evenly mb-10 mt-12">
					{edges.map((edge, index) => (
						<div
							key={index}
							className="flex flex-col"
							onClick={() => setActiveEdge(edge)}
						>
							<div
								className={classNames(
									"w-full aspect-square flex flex-col items-end justify-between rounded-lg shadow-lg p-4 cursor-pointer",
									{
										"bg-gradient-to-r from-[var(--light-mint)] to-[var(--light-green)]":
											activeEdge?.id === edge?.id ||
											(!activeEdge && index === 0),
										"bg-dark-blue": !(activeEdge?.id === edge?.id),
									},
									edge?.hover,
								)}
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

				<div className="w-[90px] h-[8px] bg-linear-to-r from-[var(--light-mint)] to-[var(--light-green)] mb-4"></div>

				<div className="text-gray-200 pl-4 md:pl-0">
					<div className="text-gray-200 pl-4 md:pl-0 space-y-3">
						{(activeEdge?.desription ?? edges[0]?.desription)?.map((benefit, index) => (
							<div
								key={index}
								className="flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1"
							>
								<Check
									className=" text-gray-700 mt-1"
									size={20}
								/>
								<p className="leading-relaxed text-gray-700 dark:text-white text-[21px]">
									{benefit}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CompetitiveEdges;
