import AngularLogo from "@/assets/logos/angular.png";
import NextJSLogo from "@/assets/logos/nextjs.png";
import ReactLogo from "@/assets/logos/react.png";
import TailwindCSSLogo from "@/assets/logos/tailwind.png";
import TypeScriptLogo from "@/assets/logos/typescript.png";
import VueLogo from "@/assets/logos/vue.png";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
	BrainCircuitIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	CloudIcon,
	CodeIcon,
	DatabaseIcon,
	ServerIcon,
	SmartphoneIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
AngularLogo;

// Technology stacks with more comprehensive data
const techStacks = [
	{
		id: "frontend",
		name: "Frontend Development",
		icon: <CodeIcon className="h-8 w-8" />,
		description: "Building modern, responsive, and interactive user interfaces",
		color: "#61DAFB",
		gradient: "from-blue-400 to-cyan-400",
		technologies: [
			{
				name: "React",
				logo: ReactLogo,
				description: "Component-based UI library",
				experience: "5+ years",
				projects: "150+ projects",
			},
			{
				name: "Next.js",
				logo: NextJSLogo,
				description: "Full-stack React framework",
				experience: "4+ years",
				projects: "100+ projects",
			},
			{
				name: "TypeScript",
				logo: TypeScriptLogo,
				description: "Typed JavaScript superset",
				experience: "4+ years",
				projects: "120+ projects",
			},
			{
				name: "Tailwind CSS",
				logo: TailwindCSSLogo,
				description: "Utility-first CSS framework",
				experience: "3+ years",
				projects: "80+ projects",
			},
			{
				name: "Vue.js",
				logo: VueLogo,
				description: "Progressive JavaScript framework",
				experience: "3+ years",
				projects: "60+ projects",
			},
			{
				name: "Angular",
				logo: AngularLogo,
				description: "Platform for building mobile and desktop apps",
				experience: "4+ years",
				projects: "70+ projects",
			},
		],
	},
	{
		id: "backend",
		name: "Backend Development",
		icon: <ServerIcon className="h-8 w-8" />,
		description: "Scalable server-side applications and robust APIs",
		color: "#68D391",
		gradient: "from-green-400 to-emerald-400",
		technologies: [
			{
				name: "Node.js",
				logo: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
				description: "JavaScript runtime environment",
				experience: "5+ years",
				projects: "130+ projects",
			},
			{
				name: "Python",
				logo: "https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png",
				description: "Versatile programming language",
				experience: "6+ years",
				projects: "90+ projects",
			},
			{
				name: "Java",
				logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
				description: "Enterprise-grade programming language",
				experience: "7+ years",
				projects: "110+ projects",
			},
			{
				name: "Express.js",
				logo: "https://img.icons8.com/color/512/express-js.png",
				description: "Fast Node.js web framework",
				experience: "5+ years",
				projects: "120+ projects",
			},
			{
				name: "Django",
				logo: "https://w7.pngwing.com/pngs/10/113/png-transparent-django-web-development-web-framework-python-software-framework-django-text-trademark-logo.png",
				description: "High-level Python web framework",
				experience: "4+ years",
				projects: "65+ projects",
			},
			{
				name: "Spring Boot",
				logo: "https://img.icons8.com/?size=512&id=90519&format=png",
				description: "Java-based framework",
				experience: "5+ years",
				projects: "85+ projects",
			},
		],
	},
	{
		id: "mobile",
		name: "Mobile Development",
		icon: <SmartphoneIcon className="h-8 w-8" />,
		description: "Native and cross-platform mobile applications",
		color: "#A78BFA",
		gradient: "from-purple-400 to-indigo-400",
		technologies: [
			{
				name: "React Native",
				logo: ReactLogo,
				description: "Cross-platform mobile framework",
				experience: "4+ years",
				projects: "75+ projects",
			},
			{
				name: "Flutter",
				logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4o_miePhNB3k5LlT7JXCbgj1N--Ahk5_uwA&s",
				description: "Google's UI toolkit",
				experience: "3+ years",
				projects: "50+ projects",
			},
			{
				name: "iOS (Swift)",
				logo: "https://icon2.cleanpng.com/20180525/cx/kisspng-swift-apple-programming-language-macos-5b0898b3eecb89.9438153115272900359781.jpg",
				description: "Native iOS development",
				experience: "5+ years",
				projects: "60+ projects",
			},
			{
				name: "Android (Kotlin)",
				logo: "https://images.seeklogo.com/logo-png/32/2/kotlin-logo-png_seeklogo-323430.png",
				description: "Native Android development",
				experience: "5+ years",
				projects: "70+ projects",
			},
			{
				name: "Xamarin",
				logo: "https://pngate.com/wp-content/uploads/2025/05/xamarin-logo-blue-hexagon-modern-flat-design-1.png",
				description: "Microsoft's mobile platform",
				experience: "3+ years",
				projects: "40+ projects",
			},
			{
				name: "Ionic",
				logo: "https://pngate.com/wp-content/uploads/2025/05/ionic-framework-logo-blue-circle-modern-design-1.png",
				description: "Hybrid mobile app framework",
				experience: "3+ years",
				projects: "45+ projects",
			},
		],
	},
	{
		id: "database",
		name: "Database & Storage",
		icon: <DatabaseIcon className="h-8 w-8" />,
		description: "Data management and storage solutions",
		color: "#F687B3",
		gradient: "from-pink-400 to-rose-400",
		technologies: [
			{
				name: "PostgreSQL",
				logo: "https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png",
				description: "Advanced open source database",
				experience: "6+ years",
				projects: "100+ projects",
			},
			{
				name: "MongoDB",
				logo: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
				description: "NoSQL document database",
				experience: "5+ years",
				projects: "90+ projects",
			},
			{
				name: "MySQL",
				logo: "https://toppng.com/uploads/preview/mysql-logo-png-image-11660514413jvwkcjh4av.png",
				description: "Popular relational database",
				experience: "7+ years",
				projects: "120+ projects",
			},
			{
				name: "Redis",
				logo: "https://static-00.iconduck.com/assets.00/redis-plain-wordmark-icon-2048x2048-ts2riq6b.png",
				description: "In-memory data structure store",
				experience: "4+ years",
				projects: "80+ projects",
			},
			{
				name: "Elasticsearch",
				logo: "https://cdn.iconscout.com/icon/free/png-256/free-elastic-search-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-3029971.png",
				description: "Search and analytics engine",
				experience: "3+ years",
				projects: "35+ projects",
			},
			{
				name: "Firebase",
				logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Firebase_Logo_%28No_wordmark%29_%282024-%29.svg",
				description: "Google's mobile platform",
				experience: "4+ years",
				projects: "70+ projects",
			},
		],
	},
	{
		id: "cloud",
		name: "Cloud & DevOps",
		icon: <CloudIcon className="h-8 w-8" />,
		description: "Cloud infrastructure and deployment automation",
		color: "#FBD38D",
		gradient: "from-yellow-400 to-orange-400",
		technologies: [
			{
				name: "AWS",
				logo: "/placeholder.svg?height=80&width=80",
				description: "Amazon Web Services",
				experience: "6+ years",
				projects: "110+ projects",
			},
			{
				name: "Google Cloud",
				logo: "/placeholder.svg?height=80&width=80",
				description: "Google Cloud Platform",
				experience: "4+ years",
				projects: "70+ projects",
			},
			{
				name: "Azure",
				logo: "/placeholder.svg?height=80&width=80",
				description: "Microsoft Azure",
				experience: "5+ years",
				projects: "85+ projects",
			},
			{
				name: "Docker",
				logo: "/placeholder.svg?height=80&width=80",
				description: "Containerization platform",
				experience: "5+ years",
				projects: "95+ projects",
			},
			{
				name: "Kubernetes",
				logo: "/placeholder.svg?height=80&width=80",
				description: "Container orchestration",
				experience: "4+ years",
				projects: "60+ projects",
			},
			{
				name: "Terraform",
				logo: "/placeholder.svg?height=80&width=80",
				description: "Infrastructure as code",
				experience: "3+ years",
				projects: "45+ projects",
			},
		],
	},
	{
		id: "ai",
		name: "AI & Machine Learning",
		icon: <BrainCircuitIcon className="h-8 w-8" />,
		description: "Artificial intelligence and machine learning solutions",
		color: "#9F7AEA",
		gradient: "from-indigo-400 to-purple-400",
		technologies: [
			{
				name: "TensorFlow",
				logo: "/placeholder.svg?height=80&width=80",
				description: "Open source ML platform",
				experience: "3+ years",
				projects: "30+ projects",
			},
			{
				name: "PyTorch",
				logo: "/placeholder.svg?height=80&width=80",
				description: "Machine learning framework",
				experience: "3+ years",
				projects: "25+ projects",
			},
			{
				name: "OpenAI",
				logo: "/placeholder.svg?height=80&width=80",
				description: "AI research and deployment",
				experience: "2+ years",
				projects: "20+ projects",
			},
			{
				name: "Scikit-learn",
				logo: "/placeholder.svg?height=80&width=80",
				description: "Machine learning library",
				experience: "4+ years",
				projects: "40+ projects",
			},
			{
				name: "Pandas",
				logo: "/placeholder.svg?height=80&width=80",
				description: "Data analysis library",
				experience: "5+ years",
				projects: "60+ projects",
			},
			{
				name: "Jupyter",
				logo: "/placeholder.svg?height=80&width=80",
				description: "Interactive computing",
				experience: "4+ years",
				projects: "50+ projects",
			},
		],
	},
];

export default function DevelopmentEnhanced() {
	const [hoveredTech, setHoveredTech] = useState(null);
	const [currentStackIndex, setCurrentStackIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentStackIndex((prev) => (prev + 1) % techStacks.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const currentStack = techStacks[currentStackIndex];

	const nextStack = () => {
		setCurrentStackIndex((prev) => (prev + 1) % techStacks.length);
	};

	const prevStack = () => {
		setCurrentStackIndex((prev) => (prev - 1 + techStacks.length) % techStacks.length);
	};

	return (
		<div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="max-w-[1440px] mx-auto relative">
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
						}}
					/>
				</div>

				<div className="container px-4 md:px-6 relative z-10">
					{/* Header */}
					<div className="text-center mb-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
								Development Capacity
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								Our comprehensive technology expertise spans across modern
								frameworks, languages, and platforms. We leverage cutting-edge tools
								to build scalable, robust, and innovative solutions.
							</p>
						</motion.div>
					</div>

					{/* Technology Stack Grid */}
					{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{techStacks.map((stack, index) => (
							<motion.div
								key={stack.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className={`relative p-6 rounded-2xl bg-gradient-to-br ${stack.gradient} bg-opacity-10 border border-white/10 backdrop-blur-sm cursor-pointer group hover:scale-105 transition-all duration-300`}
							>
								<div className="flex items-center mb-4">
									<div
										className={`p-3 rounded-xl bg-gradient-to-br ${stack.gradient} mr-4`}
									>
										{stack.icon}
									</div>
									<div>
										<h3 className="text-xl font-bold text-white">
											{stack.name}
										</h3>
										<p className="text-gray-300 text-sm">
											{stack.technologies.length} Technologies
										</p>
									</div>
								</div>
								<p className="text-gray-400 mb-4">{stack.description}</p>

								<div className="flex flex-wrap gap-2">
									{stack.technologies.slice(0, 4).map((tech) => (
										<div
											key={tech.name}
											className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center"
										>
											<img
												src={tech.logo || "/placeholder.svg"}
												alt={tech.name}
												width={20}
												height={20}
												className="object-contain"
											/>
										</div>
									))}
									{stack.technologies.length > 4 && (
										<div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-xs text-gray-400">
											+{stack.technologies.length - 4}
										</div>
									)}
								</div>
								<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
							</motion.div>
						))}
					</div> */}

					{/* Detailed Technology View */}
					<AnimatePresence>
						{currentStack && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.5 }}
								className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
							>
								{(() => {
									const stack = currentStack;
									return (
										<div>
											<div className="flex items-center mb-8 justify-between">
												<div className=" flex items-center gap-4">
													<div
														className={`p-4 rounded-2xl bg-gradient-to-br ${stack.gradient} mr-6`}
													>
														{stack.icon}
													</div>
													<div>
														<h3 className="text-3xl font-bold text-white mb-2">
															{stack.name}
														</h3>
														<p className="text-gray-300 text-lg">
															{stack.description}
														</p>
													</div>
												</div>

												<div className="flex gap-2">
													<Button
														variant="outline"
														size="lg"
														onClick={prevStack}
														className="border-section-gray/40 text-white bg-transparent"
													>
														<ChevronLeftIcon className="h-4 w-4" />
													</Button>
													<Button
														variant="outline"
														size="lg"
														onClick={nextStack}
														className="border-section-gray/40 text-white bg-transparent"
													>
														<ChevronRightIcon className="h-4 w-4" />
													</Button>
												</div>
											</div>

											<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
												{stack.technologies.map((tech, techIndex) => (
													<motion.div
														key={tech.name}
														initial={{ opacity: 0, y: 20 }}
														animate={{ opacity: 1, y: 0 }}
														transition={{
															duration: 0.4,
															delay: techIndex * 0.05,
														}}
														className="bg-gray-700/30 rounded-xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 group"
														onMouseEnter={() =>
															setHoveredTech(tech.name)
														}
														onMouseLeave={() => setHoveredTech(null)}
													>
														<div className="flex items-center mb-4">
															<div className="w-12 h-12 bg-white rounded-xl p-2 mr-4 flex items-center justify-center">
																<img
																	src={
																		tech.logo ||
																		"/placeholder.svg"
																	}
																	alt={tech.name}
																	width={32}
																	height={32}
																	className="object-contain"
																/>
															</div>
															<div>
																<h4 className="text-lg font-bold text-white">
																	{tech.name}
																</h4>
																<p className="text-gray-400 text-sm">
																	{tech.description}
																</p>
															</div>
														</div>

														<div className="space-y-2">
															<div className="flex justify-between items-center">
																<span className="text-gray-400 text-sm">
																	Experience
																</span>
																<span className="text-white font-medium">
																	{tech.experience}
																</span>
															</div>
															{/* <div className="flex justify-between items-center">
																<span className="text-gray-400 text-sm">
																	Projects
																</span>
																<span className="text-white font-medium">
																	{tech.projects}
																</span>
															</div> */}
														</div>

														{/* Hover Effect */}
														<motion.div
															className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
															animate={{
																opacity:
																	hoveredTech === tech.name
																		? 1
																		: 0,
															}}
														/>
													</motion.div>
												))}
											</div>
										</div>
									);
								})()}
							</motion.div>
						)}
					</AnimatePresence>

					{/* Stats Section */}
					{/* <motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="mt-20 text-center"
					>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
								<div className="text-3xl font-bold text-white mb-2">500+</div>
								<div className="text-gray-400">Projects Delivered</div>
							</div>
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
								<div className="text-3xl font-bold text-white mb-2">50+</div>
								<div className="text-gray-400">Technologies</div>
							</div>
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
								<div className="text-3xl font-bold text-white mb-2">100+</div>
								<div className="text-gray-400">Developers</div>
							</div>
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
								<div className="text-3xl font-bold text-white mb-2">12+</div>
								<div className="text-gray-400">Years Experience</div>
							</div>
						</div>
					</motion.div> */}

					{/* Call to Action */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-center mt-16"
					>
						<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
							Ready to leverage our technical expertise for your next project?
							Let&apos;s discuss how we can bring your vision to life.
						</p>
						<button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
							Start Your Project
						</button>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
