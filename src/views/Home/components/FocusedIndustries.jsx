import { Card, CardContent } from "@/components/ui/card";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import {
	BarChart3Icon,
	BrainCircuitIcon,
	BuildingIcon,
	CreditCardIcon,
	FactoryIcon,
	HeartPulseIcon,
	PackageIcon,
	RocketIcon,
	ShieldIcon,
	ShoppingCartIcon,
	SmartphoneIcon,
	StarIcon,
	TrendingUpIcon,
	TruckIcon,
	ZapIcon,
} from "lucide-react";
import { useState } from "react";

const tabIconClass = "h-4 w-4 400:h-5 400:w-5 500:w-6 500:h-6 sm:h-8 sm:w-8";
const solutionIconClass = "h-4 w-4 400:h-4 400:w-4 500:h-5 500:w-5 sm:h-6 sm:w-6";
const solutionStatusIconClass = "h-3 w-3 500:h-3 500:w-3 sm:h-4 sm:w-4";
const industries = [
	{
		id: "manufacturing",
		name: "Manufacturing",
		icon: <FactoryIcon className={tabIconClass} />,
		color: "#5087f7",
		gradient: "from-blue-500 to-blue-600",
		description: "Smart manufacturing solutions for Industry 4.0 transformation",
		tagline: "Revolutionizing Production",
		image: "/placeholder.svg?height=400&width=600",
		solutions: [
			{
				name: "ERP Systems",
				description: "Enterprise Resource Planning for streamlined operations",
				icon: <BuildingIcon className={solutionIconClass} />,
				status: "Expertise",
				statusIcon: <ZapIcon className={solutionStatusIconClass} />,
				statusColor: "bg-green-100 text-green-800",
			},
			{
				name: "MES Solutions",
				description: "Manufacturing Execution Systems for production optimization",
				icon: <FactoryIcon className={solutionIconClass} />,
				status: "Advanced",
				statusIcon: <TrendingUpIcon className={solutionStatusIconClass} />,
				statusColor: "bg-blue-100 text-blue-800",
			},
			{
				name: "Supply Chain Management",
				description: "End-to-end supply chain optimization and tracking",
				icon: <TruckIcon className={solutionIconClass} />,
				status: "Specialized",
				statusIcon: <ShieldIcon className={solutionStatusIconClass} />,
				statusColor: "bg-purple-100 text-purple-800",
			},
			{
				name: "Quality Management",
				description: "Automated quality control and assurance systems",
				icon: <BarChart3Icon className={solutionIconClass} />,
				status: "Innovation",
				statusIcon: <RocketIcon className={solutionStatusIconClass} />,
				statusColor: "bg-orange-100 text-orange-800",
			},
			// {
			// 	name: "Smart Factory IoT",
			// 	description: "IoT-enabled intelligent manufacturing facilities",
			// 	icon: <BrainCircuitIcon className={solutionIconClass} />,
			// 	status: "Emerging",
			// 	statusIcon: <StarIcon className={solutionStatusIconClass} />,
			// 	statusColor: "bg-pink-100 text-pink-800",
			// },
		],
	},
	{
		id: "banking",
		name: "Bank & Finance",
		icon: <CreditCardIcon className={tabIconClass} />,
		color: "#8bcff1",
		gradient: "from-cyan-400 to-cyan-500",
		description: "Secure and innovative financial technology solutions",
		tagline: "Securing Financial Future",
		image: "/placeholder.svg?height=400&width=600",
		solutions: [
			{
				name: "Payment Gateways",
				description: "Secure payment processing and gateway solutions",
				icon: <CreditCardIcon className={solutionIconClass} />,
				status: "Expertise",
				statusIcon: <ZapIcon className={solutionStatusIconClass} />,
				statusColor: "bg-green-100 text-green-800",
			},
			{
				name: "Mobile Banking",
				description: "Feature-rich mobile banking applications",
				icon: <SmartphoneIcon className={solutionIconClass} />,
				status: "Advanced",
				statusIcon: <TrendingUpIcon className={solutionStatusIconClass} />,
				statusColor: "bg-blue-100 text-blue-800",
			},
			{
				name: "Fintech Platforms",
				description: "Comprehensive financial technology solutions",
				icon: <BarChart3Icon className={solutionIconClass} />,
				status: "Specialized",
				statusIcon: <ShieldIcon className={solutionStatusIconClass} />,
				statusColor: "bg-purple-100 text-purple-800",
			},
			{
				name: "POS Systems",
				description: "Advanced point of sale and payment terminals",
				icon: <ShoppingCartIcon className={solutionIconClass} />,
				status: "Innovation",
				statusIcon: <RocketIcon className={solutionStatusIconClass} />,
				statusColor: "bg-orange-100 text-orange-800",
			},
		],
	},
	{
		id: "ecommerce",
		name: "eCommerce",
		icon: <ShoppingCartIcon className={tabIconClass} />,
		color: "#b1dfe6",
		gradient: "from-teal-400 to-teal-500",
		description: "Comprehensive e-commerce platforms and digital marketing solutions",
		tagline: "Powering Digital Commerce",
		image: "/placeholder.svg?height=400&width=600",
		solutions: [
			{
				name: "CRM Systems",
				description: "Advanced customer relationship management",
				icon: <BuildingIcon className={solutionIconClass} />,
				status: "Expertise",
				statusIcon: <ZapIcon className={solutionStatusIconClass} />,
				statusColor: "bg-green-100 text-green-800",
			},
			{
				name: "Marketing Automation",
				description: "AI-powered marketing campaigns and analytics",
				icon: <BarChart3Icon className={solutionIconClass} />,
				status: "Advanced",
				statusIcon: <TrendingUpIcon className={solutionStatusIconClass} />,
				statusColor: "bg-blue-100 text-blue-800",
			},
			{
				name: "E-commerce Platforms",
				description: "Full-stack e-commerce solutions with payment integration",
				icon: <ShoppingCartIcon className={solutionIconClass} />,
				status: "Specialized",
				statusIcon: <ShieldIcon className={solutionStatusIconClass} />,
				statusColor: "bg-purple-100 text-purple-800",
			},
			{
				name: "Big Data Analytics",
				description: "Advanced analytics for business intelligence",
				icon: <BarChart3Icon className={solutionIconClass} />,
				status: "Innovation",
				statusIcon: <RocketIcon className={solutionStatusIconClass} />,
				statusColor: "bg-orange-100 text-orange-800",
			},
		],
	},
	{
		id: "ai",
		name: "AI Solutions",
		icon: <BrainCircuitIcon className={tabIconClass} />,
		color: "#120b8f",
		gradient: "from-indigo-600 to-purple-600",
		description: "Artificial Intelligence solutions for smart automation",
		tagline: "Building Intelligent Systems",
		image: "/placeholder.svg?height=400&width=600",
		solutions: [
			{
				name: "Smart Healthcare",
				description: "AI-powered healthcare management and diagnostics",
				icon: <HeartPulseIcon className={solutionIconClass} />,
				status: "Innovation",
				statusIcon: <RocketIcon className={solutionStatusIconClass} />,
				statusColor: "bg-orange-100 text-orange-800",
			},
			{
				name: "Smart Office",
				description: "Intelligent office automation and management",
				icon: <BuildingIcon className={solutionIconClass} />,
				status: "Emerging",
				statusIcon: <StarIcon className={solutionStatusIconClass} />,
				statusColor: "bg-pink-100 text-pink-800",
			},
			{
				name: "AI & iBEEMS",
				description: "Intelligent Building Energy & Environment Management",
				icon: <BrainCircuitIcon className={solutionIconClass} />,
				status: "Advanced",
				statusIcon: <TrendingUpIcon className={solutionStatusIconClass} />,
				statusColor: "bg-blue-100 text-blue-800",
			},
		],
	},
	{
		id: "logistics",
		name: "Logistics",
		icon: <TruckIcon className={tabIconClass} />,
		color: "#5087f7",
		gradient: "from-blue-500 to-indigo-600",
		description: "Smart logistics and supply chain optimization solutions",
		tagline: "Optimizing Supply Chains",
		image: "/placeholder.svg?height=400&width=600",
		solutions: [
			{
				name: "Warehouse Management",
				description: "Advanced WMS for inventory control and optimization",
				icon: <PackageIcon className={solutionIconClass} />,
				status: "Expertise",
				statusIcon: <ZapIcon className={solutionStatusIconClass} />,
				statusColor: "bg-green-100 text-green-800",
			},
			{
				name: "Logistics Analytics",
				description: "Data-driven logistics optimization and insights",
				icon: <BarChart3Icon className={solutionIconClass} />,
				status: "Advanced",
				statusIcon: <TrendingUpIcon className={solutionStatusIconClass} />,
				statusColor: "bg-blue-100 text-blue-800",
			},
			{
				name: "Fleet Management",
				description: "Real-time fleet tracking and optimization",
				icon: <TruckIcon className={solutionIconClass} />,
				status: "Specialized",
				statusIcon: <ShieldIcon className={solutionStatusIconClass} />,
				statusColor: "bg-purple-100 text-purple-800",
			},
		],
	},
];

export default function FocusedIndustries({ contentClass }) {
	const [activeIndustry, setActiveIndustry] = useState(0);
	const [hoveredSolution, setHoveredSolution] = useState(null);

	const contentVariants = {
		hidden: { opacity: 0, x: 20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
		exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
	};

	const solutionVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4 },
		},
	};

	return (
		<div className={classNames("w-full bg-white")}>
			<div
				className={classNames("flex flex-col items-center justify-center gap-12 mx-auto", {
					[contentClass]: contentClass,
				})}
			>
				{/* Header */}
				<div className="flex flex-col gap-4 items-center justify-center text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Industries We Transform
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Discover our specialized expertise across five key industries, where we
						deliver innovative solutions that drive digital transformation and business
						growth.
					</p>
				</div>

				{/* Grouped Tab Interface */}
				<div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
					{/* Tab Navigation */}
					<div className=" bg-gray-50">
						<div className="flex">
							{industries.map((industry, index) => (
								<button
									key={industry.id}
									onClick={() => setActiveIndustry(index)}
									className={`flex-1 min-w-0 p-3 py-3 sm:px-6 sm:py-4 text-center transition-all duration-300 relative ${
										activeIndustry === index
											? "bg-white text-dark-blue shadow-sm"
											: "text-gray-600 hover:text-dark-blue hover:bg-white/50 border-b border-gray-200"
									}`}
								>
									<div className="flex flex-col items-center">
										<div
											className={`p-3 rounded-xl transition-all duration-300 ${
												activeIndustry === index
													? `bg-gradient-to-r ${industry.gradient} text-white sm:shadow-lg`
													: "bg-gray-200 text-gray-500"
											}`}
										>
											{industry.icon}
										</div>
										<h3 className="font-bold text-sm sm:inline hidden">
											{industry.name}
										</h3>
									</div>
									{activeIndustry === index && (
										<motion.div
											layoutId="activeTab"
											className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-t2-blue to-t2-lightBlue"
											transition={{ duration: 0.3 }}
										/>
									)}
								</button>
							))}
						</div>
					</div>

					{/* Tab Content */}
					<div className="sm:p-8 p-4">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeIndustry}
								variants={contentVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="flex flex-col sm:gap-8 400:gap-6 gap-4 items-center justify-center"
							>
								{/* Industry Header */}
								<div className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 to-white p-3 sm:p-6 border border-gray-100">
									<div className="absolute top-0 right-0 w-64 h-64 opacity-10">
										<div
											className={`w-full h-full bg-gradient-to-br ${industries[activeIndustry].gradient} rounded-full blur-3xl`}
										/>
									</div>
									<div className="relative z-10">
										<div className="flex flex-col w-full gap-3">
											<div className="flex justify-between items-center gap-3">
												<h3 className="text-base sm:text-2xl font-bold text-dark-blue mb-2">
													{industries[activeIndustry].name}
												</h3>
												<div className="flex items-center">
													<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800">
														<StarIcon className="h-4 w-4 mr-1" />
														{industries[activeIndustry].tagline}
													</span>
												</div>
											</div>
											<p className="text-gray-600 text-sm sm:text-base">
												{industries[activeIndustry].description}
											</p>
										</div>
									</div>
								</div>

								{/* Solutions Grid */}
								<motion.div
									className="flex flex-wrap gap-3 400:gap-4 sm:gap-6 justify-center"
									variants={{
										visible: {
											transition: {
												staggerChildren: 0.1,
											},
										},
									}}
									initial="hidden"
									animate="visible"
								>
									{industries[activeIndustry].solutions.map(
										// eslint-disable-next-line no-unused-vars
										(solution, _index) => (
											<motion.div
												key={solution.name}
												variants={solutionVariants}
												onMouseEnter={() =>
													setHoveredSolution(solution.name)
												}
												onMouseLeave={() => setHoveredSolution(null)}
												className="2xl:w-7/15 lg:w-5/12 w-full"
											>
												<Card
													className={`h-full transition-all duration-300 overflow-hidden py-0 ${
														hoveredSolution === solution.name
															? "shadow-xl scale-105 border-t2-blue/50"
															: "shadow-md hover:shadow-lg"
													}`}
												>
													<CardContent className="p-3 sm:p-6">
														<div className="flex items-start gap-2 sm:gap-4">
															<div
																className={`p-3 rounded-xl transition-all duration-300 ${
																	hoveredSolution ===
																	solution.name
																		? `bg-gradient-to-r ${industries[activeIndustry].gradient} text-white`
																		: "bg-gray-100 text-gray-600"
																}`}
															>
																{solution.icon}
															</div>
															<div className="flex-1">
																<div className="flex items-center justify-between mb-2 gap-2">
																	<h4 className="text-sm sm:text-lg font-bold text-dark-blue">
																		{solution.name}
																	</h4>
																	<span
																		className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${solution.statusColor}`}
																	>
																		{solution.statusIcon}
																		<span className="text-xs sm:text-sm">
																			{solution.status}
																		</span>
																	</span>
																</div>
																<p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
																	{solution.description}
																</p>
															</div>
														</div>
													</CardContent>
												</Card>
											</motion.div>
										),
									)}
								</motion.div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
}
