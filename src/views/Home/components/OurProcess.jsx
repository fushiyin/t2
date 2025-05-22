import team_design from "@/assets/images/design_time.jpeg";
import team_research from "@/assets/images/team_research.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Process steps data
const processSteps = [
	{
		id: 1,
		title: "Discovery & Analysis",
		image: team_research,
		description:
			"Understanding your business objectives, requirements, and challenges through in-depth consultations.",
		details: [
			"Requirements gathering and analysis",
			"Market and competitor research",
			"Technical feasibility assessment",
			"Project scope definition",
		],
		color: "#03071f",
	},
	{
		id: 2,
		title: "Design & Planning",
		image: team_design,
		description:
			"Creating detailed designs and technical specifications, establishing the foundation for development.",
		details: [
			"UI/UX design and prototyping",
			"System architecture design",
			"Database schema design",
			"Project roadmap and sprint planning",
		],
		color: "#03071f",
	},
	{
		id: 3,
		title: "Development",
		image: team_design,
		description:
			"Our skilled developers write clean, efficient code following industry best practices.",
		details: [
			"Agile development methodology",
			"Regular code reviews",
			"Continuous integration",
			"Daily stand-ups and progress tracking",
		],
		color: "#03071f",
	},
	{
		id: 4,
		title: "Testing & QA",
		image: team_design,
		description:
			"Rigorous testing ensures your software is bug-free, secure, and performs optimally.",
		details: [
			"Functional testing",
			"Performance and load testing",
			"Security testing",
			"User acceptance testing",
		],
		color: "#03071f",
	},
	{
		id: 5,
		title: "Deployment",
		image: team_design,
		description:
			"Smooth deployment of your solution to production environments, ensuring minimal disruption.",
		details: [
			"Deployment planning and execution",
			"Environment configuration",
			"Data migration (if needed)",
			"Post-deployment verification",
		],
		color: "#03071f",
	},
	{
		id: 6,
		title: "Maintenance & Support",
		image: team_design,
		description:
			"Ongoing support and maintenance to ensure your solution continues to perform optimally.",
		details: [
			"Regular updates and improvements",
			"Bug fixes and issue resolution",
			"Performance monitoring",
			"Technical support and consultation",
		],
		color: "#03071f",
	},
];

export default function OurProcess() {
	const [activeStep, setActiveStep] = useState(1);
	const [isPaused, setIsPaused] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	// Auto-advance through steps
	useEffect(() => {
		if (!isVisible || isPaused) return;

		const interval = setInterval(() => {
			setActiveStep((prev) => {
				if (prev >= processSteps.length) {
					return 1; // Loop back to the first step
				}
				return prev + 1;
			});
		}, 4000); // Change step every 4 seconds

		return () => clearInterval(interval);
	}, [isPaused, isVisible]);

	// Check if section is visible
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.3 }, // Trigger when 30% of the section is visible
		);

		const currentSectionRef = sectionRef.current;
		if (currentSectionRef) {
			observer.observe(currentSectionRef);
		}

		return () => {
			if (currentSectionRef) {
				observer.unobserve(currentSectionRef);
			}
		};
	}, []);

	return (
		<div
			ref={sectionRef}
			className="w-full h-full flex items-center justify-center py-16"
		>
			<div className="container h-full flex flex-col justify-center max-w-[1440px]">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark-gray">
							Our Process
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							A structured approach to delivering high-quality software solutions.
						</p>
					</div>
				</div>

				{/* Progress Bar */}
				<div className="relative mb-20">
					<div className="h-2 w-full bg-gray-200 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						<motion.div
							className="h-2 rounded-full"
							style={{
								backgroundColor: processSteps[activeStep - 1].color,
								width: `${((activeStep - 1) / (processSteps.length - 1)) * 100}%`,
							}}
							initial={{ width: "0%" }}
							animate={{
								width: `${((activeStep - 1) / (processSteps.length - 1)) * 100}%`,
							}}
							transition={{ duration: 0.5, ease: "easeInOut" }}
						/>
					</div>

					{/* Step Indicators */}
					<div className="absolute top-0 left-0 right-0 flex justify-between transform -translate-y-1/2">
						{processSteps.map((step) => (
							<button
								key={step.id}
								className="relative focus:outline-none"
								onClick={() => {
									setActiveStep(step.id);
									setIsPaused(true); // Pause auto-advance when user interacts
									// Resume auto-advance after 10 seconds of inactivity
									setTimeout(() => setIsPaused(false), 10000);
								}}
							>
								<motion.div
									className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
										step.id <= activeStep
											? "border-dark-gray"
											: "border-gray-300"
									}`}
									style={{
										backgroundColor:
											step.id <= activeStep ? step.color : "white",
									}}
									animate={{
										scale: step.id === activeStep ? 1.2 : 1,
										backgroundColor:
											step.id <= activeStep ? step.color : "white",
										borderColor:
											step.id <= activeStep
												? "rgba(203, 213, 225, 1)"
												: "rgba(203, 213, 225, 1)",
									}}
									transition={{ duration: 0.3 }}
								>
									{step.id < activeStep && (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-3 w-3 text-white"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={3}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									)}
									{step.id === activeStep && (
										<motion.div
											className="w-2 h-2 bg-white rounded-full"
											animate={{ scale: [1, 1.5, 1] }}
											transition={{
												duration: 2,
												repeat: Number.POSITIVE_INFINITY,
											}}
										/>
									)}
								</motion.div>
								<div
									className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium ${
										step.id === activeStep ? "text-dark-gray" : "text-gray-500"
									}`}
								>
									{step.title.split(" ")[0]}
								</div>
							</button>
						))}
					</div>
				</div>

				{/* Active Step Content */}
				<div className="flex flex-col flex-1 md:flex-row gap-12 items-center justify-center">
					{/* Step Visualization */}
					<div className="w-full md:w-1/2 flex justify-center ">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeStep}
								initial={{ opacity: 0, scale: 0.8, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.8, y: -20 }}
								transition={{ duration: 0.5 }}
								className="relative"
							>
								<img
									src={processSteps[activeStep - 1].image}
									alt={
										processSteps[activeStep - 1].image + `_${[activeStep - 1]}`
									}
								/>
								{/* <div
									className="w-64 h-64 rounded-full flex items-center justify-center"
									style={{
										backgroundColor: `${processSteps[activeStep - 1].color}20`,
									}}
								>
									<div
										className="w-48 h-48 rounded-full flex items-center justify-center"
										style={{
											backgroundColor: `${processSteps[activeStep - 1].color}40`,
										}}
									>
										<div
											className="w-32 h-32 rounded-full flex items-center justify-center text-white"
											style={{
												backgroundColor: processSteps[activeStep - 1].color,
											}}
										></div>
									</div>
								</div> */}
								<div className="absolute -top-4 -right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
									<span className="text-xl font-bold text-dark-gray">
										{activeStep}
									</span>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Step Details */}
					<div className="w-full md:w-1/2 ">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeStep}
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -50 }}
								transition={{ duration: 0.5 }}
								className="bg-white p-8 rounded-lg shadow-md"
							>
								<h3
									className="text-2xl font-bold mb-4"
									style={{ color: processSteps[activeStep - 1].color }}
								>
									{processSteps[activeStep - 1].title}
								</h3>
								<p className="text-gray-600 mb-6">
									{processSteps[activeStep - 1].description}
								</p>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									{processSteps[activeStep - 1].details.map((detail, index) => (
										<motion.div
											key={index}
											className="flex items-start gap-2"
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.3, delay: index * 0.1 }}
										>
											<div
												className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
												style={{
													backgroundColor: `${processSteps[activeStep - 1].color}30`,
												}}
											>
												<div
													className="w-2 h-2 rounded-full"
													style={{
														backgroundColor:
															processSteps[activeStep - 1].color,
													}}
												></div>
											</div>
											<span className="text-gray-700">{detail}</span>
										</motion.div>
									))}
								</div>

								<div className="mt-8 flex justify-between">
									<button
										onClick={() => {
											setActiveStep((prev) =>
												prev > 1 ? prev - 1 : processSteps.length,
											);
											setIsPaused(true);
											setTimeout(() => setIsPaused(false), 10000);
										}}
										className="text-t2-blue hover:text-dark-gray flex items-center gap-1 transition-colors"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										Previous
									</button>
									<button
										onClick={() => {
											setIsPaused(!isPaused);
										}}
										className="text-t2-blue hover:text-dark-gray flex items-center gap-1 transition-colors"
									>
										{isPaused ? (
											<>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
														clipRule="evenodd"
													/>
												</svg>
												Resume
											</>
										) : (
											<>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
														clipRule="evenodd"
													/>
												</svg>
												Pause
											</>
										)}
									</button>
									<button
										onClick={() => {
											setActiveStep((prev) =>
												prev < processSteps.length ? prev + 1 : 1,
											);
											setIsPaused(true);
											setTimeout(() => setIsPaused(false), 10000);
										}}
										className="text-t2-blue hover:text-dark-gray flex items-center gap-1 transition-colors"
									>
										Next
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
}
