import team_deploy from "@/assets/images/team_deploy.jpg";
import team_design from "@/assets/images/team_design.jpg";
import team_development from "@/assets/images/team_development.png";
import team_maintain from "@/assets/images/team_maintain.png";
import team_research from "@/assets/images/team_research.jpg";
import team_test from "@/assets/images/team_test.jpg";
import useResponsive from "@/hooks/useResponsive";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import {
	CodeIcon,
	PencilRulerIcon,
	RefreshCwIcon,
	RocketIcon,
	SearchIcon,
	TestTubeIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// Process steps data
const iconClass =
	"h-3 w-3 text-gray-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/5 z-10";

export default function OurProcess({ contentClass }) {
	const { t } = useTranslation();
	const sectionRef = useRef(null);
	const { isMobile } = useResponsive();
	const [activeStep, setActiveStep] = useState(1);
	const [isPaused, setIsPaused] = useState(true);
	const [isVisible, setIsVisible] = useState(false);
	const processSteps = [
		{
			id: 1,
			title: t("process.steps.discovery.title"),
			image: team_research,
			icon: (
				<SearchIcon
					strokeWidth={3}
					className={iconClass}
				/>
			),
			description: t("process.steps.discovery.description"),
			details: t("process.steps.discovery.details", { returnObjects: true }),
			color: "rgba(45, 45, 45, 0.6)",
		},
		{
			id: 2,
			title: t("process.steps.design.title"),
			icon: (
				<PencilRulerIcon
					strokeWidth={3}
					className={iconClass}
				/>
			),
			image: team_design,
			description: t("process.steps.design.description"),
			details: t("process.steps.design.details", { returnObjects: true }),
			color: "rgba(45, 45, 45, 0.6)",
		},
		{
			id: 3,
			title: t("process.steps.development.title"),
			icon: (
				<CodeIcon
					strokeWidth={3}
					className={iconClass}
				/>
			),
			image: team_development,
			description: t("process.steps.development.description"),
			details: t("process.steps.development.details", { returnObjects: true }),
			color: "rgba(45, 45, 45, 0.6)",
		},
		{
			id: 4,
			title: t("process.steps.testing.title"),
			image: team_test,
			icon: (
				<TestTubeIcon
					strokeWidth={3}
					className={iconClass}
				/>
			),
			description: t("process.steps.testing.description"),
			details: t("process.steps.testing.details", { returnObjects: true }),
			color: "rgba(45, 45, 45, 0.6)",
		},
		{
			id: 5,
			title: t("process.steps.deployment.title"),
			image: team_deploy,
			icon: (
				<RocketIcon
					strokeWidth={3}
					className={iconClass}
				/>
			),
			description: t("process.steps.deployment.description"),
			details: t("process.steps.deployment.details", { returnObjects: true }),
			color: "rgba(45, 45, 45, 0.6)",
		},
		{
			id: 6,
			title: t("process.steps.maintenance.title"),
			icon: (
				<RefreshCwIcon
					strokeWidth={3}
					className={iconClass}
				/>
			),
			image: team_maintain,
			description: t("process.steps.maintenance.description"),
			details: t("process.steps.maintenance.details", { returnObjects: true }),
			color: "rgba(45, 45, 45, 0.6)",
		},
	];

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
	}, [isPaused, isVisible, processSteps?.length]);

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
			className="w-full h-full flex items-center justify-center bg-muted/50"
		>
			<div
				className={classNames("flex flex-col justify-center items-center", {
					[contentClass]: contentClass,
				})}
			>
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 md:mb-20">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark-gray">
							{t("process.title")}
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							{t("process.description")}
						</p>
					</div>
				</div>

				{/* Progress Bar */}
				<div className="relative md:mb-10 w-full">
					<div className="h-2 w-[80%] px-[10px] md:w-[90%] bg-gray-200 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						<motion.div
							className="h-2 rounded-full bg-gray-600"
							style={{
								// backgroundColor: processSteps[activeStep - 1].color,
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
					<div className="w-[80%] md:w-[90%] absolute flex justify-between left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						{processSteps.map((step) => (
							<button
								key={step.id}
								className="relative focus:outline-none backdrop-blur-sm backdrop-brightness-80 rounded-full"
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
									className={classNames(
										"absolute -top-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium",
										{
											"text-dark-gray": step.id === activeStep,
											"text-gray-500": step.id !== activeStep,
											hidden: step.id > activeStep,
										},
									)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="oklch(96.7% 0.003 264.542)"
										stroke="currentColor"
										strokeWidth="1"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-map-pin-icon lucide-map-pin text-gray-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1 h-8 w-8"
									>
										<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
									</svg>
									{step?.icon}
								</div>
							</button>
						))}
					</div>
				</div>

				{/* Active Step Content */}
				<div className="h-full flex flex-col flex-1 md:flex-row md:gap-12 gap-6 justify-center items-center xl:items-stretch md:py-5 py-10 xl:px-0 lg:px-4 w-[90%]">
					{/* Step Visualization */}
					{!isMobile && (
						<div className="w-[90%] md:w-6/10 flex justify-center items-center h-auto">
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
											processSteps[activeStep - 1].image +
											`_${[activeStep - 1]}`
										}
										className="rounded-lg shadow-lg max-h-[420px]"
									/>
								</motion.div>
							</AnimatePresence>
						</div>
					)}
					{/* Step Details */}
					<div className="w-[90%] lg:w-4/10 h-auto">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeStep}
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -50 }}
								transition={{ duration: 0.5 }}
								className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-between"
							>
								<div className="step-text">
									<h3 className="text-2xl font-bold mb-4 text-dark-gray">
										{processSteps[activeStep - 1].title}
									</h3>
									<p className="text-gray-600 mb-6">
										{processSteps[activeStep - 1].description}
									</p>
								</div>

								<div className="flex flex-col flex-wrap gap-4">
									{processSteps[activeStep - 1].details.map((detail, index) => (
										<motion.div
											key={index}
											className="flex items-start gap-2 w-fit"
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.3, delay: index * 0.1 }}
										>
											<div
												className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gray-100"
												// style={{
												// 	backgroundColor:
												//  `${processSteps[activeStep - 1].color}30`,
												// }}
											>
												<div
													className="w-2 h-2 rounded-full bg-gray-100"
													// style={{
													// 	backgroundColor:
													// 		processSteps[activeStep - 1].color,
													// }}
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
										className=" hover:text-dark-gray flex items-center gap-1 transition-colors"
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
										{t("process.navigation.previous")}
									</button>
									{/* <button
										onClick={() => {
											setIsPaused(!isPaused);
										}}
										className="hover:text-dark-gray flex items-center gap-1 
										transition-colors"
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
														d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555
														 7.168A1 1 0 008 8v4a1 1 0 
														 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
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
														d="M18 10a8 8 0 11-16 0 8 8 0 0116
														 0zM7 8a1 1 0 012 0v4a1 1 0 11-2
														  0V8zm5-1a1 1 0 00-1 1v4a1 1 0
														   102 0V8a1 1 0 00-1-1z"
														clipRule="evenodd"
													/>
												</svg>
												Pause
											</>
										)}
									</button> */}
									<button
										onClick={() => {
											setActiveStep((prev) =>
												prev < processSteps.length ? prev + 1 : 1,
											);
											setIsPaused(true);
											setTimeout(() => setIsPaused(false), 10000);
										}}
										className=" hover:text-dark-gray flex items-center gap-1 transition-colors"
									>
										{t("process.navigation.next")}
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
