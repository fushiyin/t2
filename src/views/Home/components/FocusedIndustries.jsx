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
		icon: <FactoryIcon className="h-12 w-12" />,
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
		icon: <CreditCardIcon className="h-12 w-12" />,
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
		icon: <ShoppingCartIcon className="h-12 w-12" />,
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
		icon: <BrainCircuitIcon className="h-12 w-12" />,
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
		icon: <TruckIcon className="h-12 w-12" />,
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

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const tabVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5 },
		},
	};

	const contentVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
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
				<div className="flex flex-col items-center justify-center text-center gap-6">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Focused Industries
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						T2 Soft leverages extensive project experience and technical expertise
						across various industries to deliver customized IT solutions. We work
						hand-in-hand with our clients to maximize business value, driving both
						efficiency and innovation.
					</p>
				</div>

				{/* Interactive Industry Explorer */}
				<div className="flex gap-8 w-full">
					{/* Industry Tabs */}
					<motion.div
						className="flex flex-col w-1/4 space-y-4"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{industries.map((industry, index) => (
							<motion.div
								key={industry.id}
								variants={tabVariants}
							>
								<Card
									className={`py-4 cursor-pointer transition-all duration-300 overflow-hidden ${
										activeIndustry === index
											? "ring-2 ring-t2-blue shadow-lg scale-105"
											: "hover:shadow-md hover:scale-102"
									}`}
									onClick={() => setActiveIndustry(index)}
								>
									<CardContent className="px-4">
										<div className="flex items-center space-x-4">
											<div
												className={`p-3 rounded-xl transition-all duration-300 ${
													activeIndustry === index
														? `bg-gradient-to-r ${industry.gradient} text-white`
														: "bg-gray-100 text-gray-600"
												}`}
											>
												{industry.icon}
											</div>
											<div className="flex-1">
												<h3
													className={`font-bold text-lg transition-colors ${
														activeIndustry === index
															? "text-t2-darkBlue"
															: "text-gray-700"
													}`}
												>
													{industry.name}
												</h3>
												<p
													className={`text-sm transition-colors ${
														activeIndustry === index
															? "text-t2-blue"
															: "text-gray-500"
													}`}
												>
													{industry.tagline}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>

					{/* Industry Content */}
					<div className="flex-1">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeIndustry}
								variants={contentVariants}
								initial="hidden"
								animate="visible"
								exit="hidden"
								className="h-full"
							>
								<div className="relative shadow-lg overflow-hidden rounded-3xl bg-gradient-to-r from-white to-gray-50 h-full p-8 border border-gray-200">
									{/* Industry Header */}
									<div className="absolute top-0 right-0 w-64 h-64 opacity-10">
										<div
											className={`w-full h-full bg-gradient-to-br ${industries[activeIndustry].gradient} rounded-full blur-3xl`}
										/>
									</div>
									<div className="relative z-10">
										<div className="flex items-start justify-between mb-6">
											<div className="flex items-center w-full">
												<div
													className={`p-6 mr-6 rounded-2xl bg-gradient-to-r ${industries[activeIndustry].gradient} text-white shadow-lg`}
												>
													{industries[activeIndustry].icon}
												</div>
												<div className="w-full flex flex-col gap-2">
													<div className="w-full flex justify-between items-center">
														<h3 className="text-3xl font-bold">
															{industries[activeIndustry].name}
														</h3>
														<div className="flex items-center space-x-2">
															<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800">
																<StarIcon className="h-4 w-4 mr-1" />
																{industries[activeIndustry].tagline}
															</span>
														</div>
													</div>
													<p className="text-lg text-gray-600">
														{industries[activeIndustry].description}
													</p>
												</div>
											</div>
										</div>
									</div>

									{/* Solutions Grid */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										{industries[activeIndustry].solutions.map(
											(solution, index) => (
												<motion.div
													key={solution.name}
													initial={{ opacity: 0, y: 20 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{
														duration: 0.4,
														delay: index * 0.1,
													}}
													onMouseEnter={() =>
														setHoveredSolution(solution.name)
													}
													onMouseLeave={() => setHoveredSolution(null)}
												>
													<Card
														className={`h-full transition-all duration-300 overflow-hidden py-0 ${
															hoveredSolution === solution.name
																? "shadow-xl scale-105"
																: "shadow-md hover:shadow-lg"
														}`}
													>
														<CardContent className="py-6">
															<div className="flex items-start gap-4">
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
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
}
