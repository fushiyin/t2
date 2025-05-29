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

const industries = [
	{
		id: "manufacturing",
		name: "Manufacturing",
		icon: <FactoryIcon className="h-8 w-8" />,
		color: "#5087f7",
		gradient: "from-blue-500 to-blue-600",
		description: "Smart manufacturing solutions for Industry 4.0 transformation",
		tagline: "Revolutionizing Production",
		image: "/placeholder.svg?height=400&width=600",
		solutions: [
			{
				name: "ERP Systems",
				description: "Enterprise Resource Planning for streamlined operations",
				icon: <BuildingIcon className="h-6 w-6" />,
				status: "Core Expertise",
				statusIcon: <ZapIcon className="h-4 w-4" />,
				statusColor: "bg-green-100 text-green-800",
			},
			{
				name: "MES Solutions",
				description: "Manufacturing Execution Systems for production optimization",
				icon: <FactoryIcon className="h-6 w-6" />,
				status: "Advanced",
				statusIcon: <TrendingUpIcon className="h-4 w-4" />,
				statusColor: "bg-blue-100 text-blue-800",
			},
			{
				name: "Supply Chain Management",
				description: "End-to-end supply chain optimization and tracking",
				icon: <TruckIcon className="h-6 w-6" />,
				status: "Specialized",
				statusIcon: <ShieldIcon className="h-4 w-4" />,
				statusColor: "bg-purple-100 text-purple-800",
			},
			{
				name: "Quality Management",
				description: "Automated quality control and assurance systems",
				icon: <BarChart3Icon className="h-6 w-6" />,
				status: "Innovation",
				statusIcon: <RocketIcon className="h-4 w-4" />,
				statusColor: "bg-orange-100 text-orange-800",
			},
			{
				name: "Smart Factory IoT",
				description: "IoT-enabled intelligent manufacturing facilities",
				icon: <BrainCircuitIcon className="h-6 w-6" />,
				status: "Emerging",
				statusIcon: <StarIcon className="h-4 w-4" />,
				statusColor: "bg-pink-100 text-pink-800",
			},
		],
	},
	{
		id: "banking",
		name: "Bank & Finance",
		icon: <CreditCardIcon className="h-8 w-8" />,
		color: "#8bcff1",
		gradient: "from-cyan-400 to-cyan-500",
		description: "Secure and innovative financial technology solutions",
		tagline: "Securing Financial Future",
		image: "/placeholder.svg?height=400&width=600",
		solutions: [
			{
				name: "Payment Gateways",
				description: "Secure payment processing and gateway solutions",
				icon: <CreditCardIcon className="h-6 w-6" />,
				status: "Core Expertise",
				statusIcon: <ZapIcon className="h-4 w-4" />,
				statusColor: "bg-green-100 text-green-800",
			},
			{
				name: "Mobile Banking",
				description: "Feature-rich mobile banking applications",
				icon: <SmartphoneIcon className="h-6 w-6" />,
				status: "Advanced",
				statusIcon: <TrendingUpIcon className="h-4 w-4" />,
				statusColor: "bg-blue-100 text-blue-800",
			},
			{
				name: "Fintech Platforms",
				description: "Comprehensive financial technology solutions",
				icon: <BarChart3Icon className="h-6 w-6" />,
				status: "Specialized",
				statusIcon: <ShieldIcon className="h-4 w-4" />,
				statusColor: "bg-purple-100 text-purple-800",
			},
			{
				name: "POS Systems",
				description: "Advanced point of sale and payment terminals",
				icon: <ShoppingCartIcon className="h-6 w-6" />,
				status: "Innovation",
				statusIcon: <RocketIcon className="h-4 w-4" />,
				statusColor: "bg-orange-100 text-orange-800",
			},
		],
	},
	{
		id: "ecommerce",
		name: "eCommerce",
		icon: <ShoppingCartIcon className="h-8 w-8" />,
		color: "#b1dfe6",
		gradient: "from-teal-400 to-teal-500",
		description: "Comprehensive e-commerce platforms and digital marketing solutions",
		tagline: "Powering Digital Commerce",
		image: "/placeholder.svg?height=400&width=600",
		solutions: [
			{
				name: "CRM Systems",
				description: "Advanced customer relationship management",
				icon: <BuildingIcon className="h-6 w-6" />,
				status: "Core Expertise",
				statusIcon: <ZapIcon className="h-4 w-4" />,
				statusColor: "bg-green-100 text-green-800",
			},
			{
				name: "Marketing Automation",
				description: "AI-powered marketing campaigns and analytics",
				icon: <BarChart3Icon className="h-6 w-6" />,
				status: "Advanced",
				statusIcon: <TrendingUpIcon className="h-4 w-4" />,
				statusColor: "bg-blue-100 text-blue-800",
			},
			{
				name: "E-commerce Platforms",
				description: "Full-stack e-commerce solutions with payment integration",
				icon: <ShoppingCartIcon className="h-6 w-6" />,
				status: "Specialized",
				statusIcon: <ShieldIcon className="h-4 w-4" />,
				statusColor: "bg-purple-100 text-purple-800",
			},
			{
				name: "Big Data Analytics",
				description: "Advanced analytics for business intelligence",
				icon: <BarChart3Icon className="h-6 w-6" />,
				status: "Innovation",
				statusIcon: <RocketIcon className="h-4 w-4" />,
				statusColor: "bg-orange-100 text-orange-800",
			},
		],
	},
	{
		id: "ai",
		name: "AI Solutions",
		icon: <BrainCircuitIcon className="h-8 w-8" />,
		color: "#120b8f",
		gradient: "from-indigo-600 to-purple-600",
		description: "Artificial Intelligence solutions for smart automation",
		tagline: "Building Intelligent Systems",
		image: "/placeholder.svg?height=400&width=600",
		solutions: [
			{
				name: "Smart Healthcare",
				description: "AI-powered healthcare management and diagnostics",
				icon: <HeartPulseIcon className="h-6 w-6" />,
				status: "Innovation",
				statusIcon: <RocketIcon className="h-4 w-4" />,
				statusColor: "bg-orange-100 text-orange-800",
			},
			{
				name: "Smart Office",
				description: "Intelligent office automation and management",
				icon: <BuildingIcon className="h-6 w-6" />,
				status: "Emerging",
				statusIcon: <StarIcon className="h-4 w-4" />,
				statusColor: "bg-pink-100 text-pink-800",
			},
			{
				name: "AI & iBEEMS",
				description: "Intelligent Building Energy & Environment Management",
				icon: <BrainCircuitIcon className="h-6 w-6" />,
				status: "Advanced",
				statusIcon: <TrendingUpIcon className="h-4 w-4" />,
				statusColor: "bg-blue-100 text-blue-800",
			},
		],
	},
	{
		id: "logistics",
		name: "Logistics",
		icon: <TruckIcon className="h-8 w-8" />,
		color: "#5087f7",
		gradient: "from-blue-500 to-indigo-600",
		description: "Smart logistics and supply chain optimization solutions",
		tagline: "Optimizing Supply Chains",
		image: "/placeholder.svg?height=400&width=600",
		solutions: [
			{
				name: "Warehouse Management",
				description: "Advanced WMS for inventory control and optimization",
				icon: <PackageIcon className="h-6 w-6" />,
				status: "Core Expertise",
				statusIcon: <ZapIcon className="h-4 w-4" />,
				statusColor: "bg-green-100 text-green-800",
			},
			{
				name: "Logistics Analytics",
				description: "Data-driven logistics optimization and insights",
				icon: <BarChart3Icon className="h-6 w-6" />,
				status: "Advanced",
				statusIcon: <TrendingUpIcon className="h-4 w-4" />,
				statusColor: "bg-blue-100 text-blue-800",
			},
			{
				name: "Fleet Management",
				description: "Real-time fleet tracking and optimization",
				icon: <TruckIcon className="h-6 w-6" />,
				status: "Specialized",
				statusIcon: <ShieldIcon className="h-4 w-4" />,
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
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-t2-darkBlue">
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
						<div className="flex overflow-x-auto">
							{industries.map((industry, index) => (
								<button
									key={industry.id}
									onClick={() => setActiveIndustry(index)}
									className={`flex-1 min-w-0 px-6 py-4 text-center transition-all duration-300 relative ${
										activeIndustry === index
											? "bg-white text-t2-darkBlue shadow-sm"
											: "text-gray-600 hover:text-t2-darkBlue hover:bg-white/50 border-b border-gray-200"
									}`}
								>
									<div className="flex flex-col items-center space-y-2">
										<div
											className={`p-3 rounded-xl transition-all duration-300 ${
												activeIndustry === index
													? `bg-gradient-to-r ${industry.gradient} text-white shadow-lg`
													: "bg-gray-200 text-gray-500"
											}`}
										>
											{industry.icon}
										</div>
										<div>
											<h3 className="font-bold text-sm">{industry.name}</h3>
										</div>
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
					<div className="p-8">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeIndustry}
								variants={contentVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="space-y-8"
							>
								{/* Industry Header */}
								<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 to-white p-6 border border-gray-100">
									<div className="absolute top-0 right-0 w-64 h-64 opacity-10">
										<div
											className={`w-full h-full bg-gradient-to-br ${industries[activeIndustry].gradient} rounded-full blur-3xl`}
										/>
									</div>
									<div className="relative z-10">
										<div className="flex flex-col w-full">
											<div className="flex justify-between items-center">
												<h3 className="text-2xl font-bold text-t2-darkBlue mb-2">
													{industries[activeIndustry].name}
												</h3>
												<div className="flex items-center">
													<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800">
														<StarIcon className="h-4 w-4 mr-1" />
														{industries[activeIndustry].tagline}
													</span>
												</div>
											</div>
											<p className="text-gray-600">
												{industries[activeIndustry].description}
											</p>
										</div>
									</div>
								</div>

								{/* Solutions Grid */}
								<motion.div
									className="flex flex-wrap gap-6 justify-center"
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
												className="2xl:w-7/15 lg:w-5/12 w-9/10"
											>
												<Card
													className={`h-full transition-all duration-300 overflow-hidden py-0 ${
														hoveredSolution === solution.name
															? "shadow-xl scale-105 border-t2-blue/50"
															: "shadow-md hover:shadow-lg"
													}`}
												>
													<CardContent className="p-6">
														<div className="flex items-start space-x-4">
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
																<div className="flex items-center justify-between mb-2">
																	<h4 className="text-lg font-bold text-t2-darkBlue">
																		{solution.name}
																	</h4>
																	<span
																		className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${solution.statusColor}`}
																	>
																		{solution.statusIcon}
																		<span className="ml-1">
																			{solution.status}
																		</span>
																	</span>
																</div>
																<p className="text-gray-600 text-sm leading-relaxed">
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
