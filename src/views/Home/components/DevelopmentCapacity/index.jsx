import AngularLogo from "@/assets/logos/angular.png";
import NextJSLogo from "@/assets/logos/nextjs.png";
import ReactLogo from "@/assets/logos/react.png";
import TailwindCSSLogo from "@/assets/logos/tailwind.png";
import TypeScriptLogo from "@/assets/logos/typescript.png";
import VueLogo from "@/assets/logos/vue.png";
import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	CodeIcon,
	DatabaseIcon,
	ServerIcon,
	SmartphoneIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

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
];

export default function DevelopmentEnhanced({ contentClass }) {
	const [currentStackIndex, setCurrentStackIndex] = useState(0);
	const autoTimer = 6000; // 6 seconds

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentStackIndex((prev) => (prev + 1) % techStacks.length);
		}, autoTimer);
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
		<div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
			{/* Background Pattern */}
			<div
				className={classNames(
					"max-w-[1440px] relative z-10 flex flex-col justify-center items-center gap-15 mx-auto",
					{
						[contentClass]: contentClass,
					},
				)}
			>
				{/* Header */}
				<div className="text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl pb-6 bg-gradient-to-r from-light-blue via-light-blue-gray to-pale-blue bg-clip-text text-transparent">
							Technology Stack
						</h2>
						<p className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed px-8 400:px-6">
							Our comprehensive technology expertise spans across modern frameworks,
							languages, and platforms. We leverage cutting-edge tools to build
							scalable, robust, and innovative solutions.
						</p>
					</motion.div>
				</div>

				{/* Detailed Technology View */}
				<AnimatePresence>
					{currentStack && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.5 }}
							className="w-[90%] bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
						>
							<>
								<div className="flex items-center mb-6 justify-between">
									<div className="flex items-center gap-2 md:gap-4">
										<div
											className={`p-4 rounded-2xl bg-gradient-to-br ${currentStack?.gradient} 400:mr-3 md:mr-6 scale-[0.7] 400:scale-[1]`}
										>
											{currentStack?.icon}
										</div>
										<div>
											<h3 className="md:text-3xl sm:text-xl 400:text-lg text-base font-bold text-white mb-2">
												{currentStack?.name}
											</h3>
											<p className="text-gray-300 md:text-lg hidden sm:inline-block">
												{currentStack?.description}
											</p>
										</div>
									</div>

									<div className="sm:flex hidden gap-2">
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
									<Button
										variant="outline"
										size="sm"
										onClick={nextStack}
										className="ml-4 sm:hidden border-section-gray/40 text-white bg-transparent"
									>
										<ChevronRightIcon className="h-4 w-4" />
									</Button>
								</div>

								<div className="grid grid-cols-3 gap-6 bg-gray-700/30 rounded-xl p-6 border border-white/5 hover:border-white/20 400:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 md:bg-transparent md:rounded-none md:border-none">
									{currentStack?.technologies?.map((tech, techIndex) => (
										<motion.div
											key={tech.name}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.4,
												delay: techIndex * 0.05,
											}}
											className="bg-transparent border-none rounded-none md:bg-gray-700/30 md:rounded-xl md:p-6 md:border md:border-white/5 md:hover:border-white/20 transition-all duration-300 group flex items-center justify-center"
										>
											<div className="flex items-center justify-center md:justify-start gap-4 w-full">
												<div className="md:w-14 md:h-14 sm:w-20 sm:h-20 400:w-16 400:h-16 h-12 w-12 bg-white rounded-xl p-2 flex items-center justify-center">
													<img
														className="object-contain w-full h-full"
														src={tech.logo || "/placeholder.svg"}
														alt={tech.name}
													/>
												</div>
												<div className="hidden md:inline">
													<h4 className="text-lg font-bold text-white">
														{tech.name}
													</h4>
													<p className="text-gray-400 text-sm">
														{tech.description}
													</p>
												</div>
											</div>
										</motion.div>
									))}
								</div>
							</>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<p className="text-base sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-8 400:px-6">
						Ready to leverage our technical expertise for your next project? Let&apos;s
						discuss how we can bring your vision to life.
					</p>
					<button className="text-sm sm:text-xl px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pale-blue to-light-blue text-heading-black hover:text-white font-semibold rounded-xl hover:from-light-blue hover:to-normal-dark-blue transition-all duration-300 transform hover:scale-105 shadow-lg">
						Start Your Project
					</button>
				</motion.div>
			</div>
		</div>
	);
}
