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
import { useTranslation } from "react-i18next";

export default function DevelopmentEnhanced({ contentClass }) {
	const { t } = useTranslation();
	const [currentStackIndex, setCurrentStackIndex] = useState(0);
	const autoTimer = 6000; // 6 seconds

	// Technology stacks with more comprehensive data
	const techStacks = [
		{
			id: "frontend",
			name: t("tech_stack.frontend.title"),
			icon: <CodeIcon className="h-8 w-8" />,
			description: t("tech_stack.frontend.description"),
			color: "#61DAFB",
			gradient: "from-blue-400 to-cyan-400",
			technologies: [
				{
					name: "React",
					logo: ReactLogo,
					description: t("tech_stack.frontend.technologies.react.description"),
					experience: t("tech_stack.frontend.technologies.react.experience"),
					projects: t("tech_stack.frontend.technologies.react.projects"),
				},
				{
					name: "Next.js",
					logo: NextJSLogo,
					description: t("tech_stack.frontend.technologies.nextjs.description"),
					experience: t("tech_stack.frontend.technologies.nextjs.experience"),
					projects: t("tech_stack.frontend.technologies.nextjs.projects"),
				},
				{
					name: "TypeScript",
					logo: TypeScriptLogo,
					description: t("tech_stack.frontend.technologies.typescript.description"),
					experience: t("tech_stack.frontend.technologies.typescript.experience"),
					projects: t("tech_stack.frontend.technologies.typescript.projects"),
				},
				{
					name: "Tailwind CSS",
					logo: TailwindCSSLogo,
					description: t("tech_stack.frontend.technologies.tailwind.description"),
					experience: t("tech_stack.frontend.technologies.tailwind.experience"),
					projects: t("tech_stack.frontend.technologies.tailwind.projects"),
				},
				{
					name: "Vue.js",
					logo: VueLogo,
					description: t("tech_stack.frontend.technologies.vue.description"),
					experience: t("tech_stack.frontend.technologies.vue.experience"),
					projects: t("tech_stack.frontend.technologies.vue.projects"),
				},
				{
					name: "Angular",
					logo: AngularLogo,
					description: t("tech_stack.frontend.technologies.angular.description"),
					experience: t("tech_stack.frontend.technologies.angular.experience"),
					projects: t("tech_stack.frontend.technologies.angular.projects"),
				},
			],
		},
		{
			id: "backend",
			name: t("tech_stack.backend.title"),
			icon: <ServerIcon className="h-8 w-8" />,
			description: t("tech_stack.backend.description"),
			color: "#68D391",
			gradient: "from-green-400 to-emerald-400",
			technologies: [
				{
					name: "Node.js",
					logo: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
					description: t("tech_stack.backend.technologies.nodejs.description"),
					experience: t("tech_stack.backend.technologies.nodejs.experience"),
					projects: t("tech_stack.backend.technologies.nodejs.projects"),
				},
				{
					name: "Python",
					logo: "https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png",
					description: t("tech_stack.backend.technologies.python.description"),
					experience: t("tech_stack.backend.technologies.python.experience"),
					projects: t("tech_stack.backend.technologies.python.projects"),
				},
				{
					name: "Java",
					logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
					description: t("tech_stack.backend.technologies.java.description"),
					experience: t("tech_stack.backend.technologies.java.experience"),
					projects: t("tech_stack.backend.technologies.java.projects"),
				},
				{
					name: "Express.js",
					logo: "https://img.icons8.com/color/512/express-js.png",
					description: t("tech_stack.backend.technologies.express.description"),
					experience: t("tech_stack.backend.technologies.express.experience"),
					projects: t("tech_stack.backend.technologies.express.projects"),
				},
				{
					name: "Django",
					logo: "https://w7.pngwing.com/pngs/10/113/png-transparent-django-web-development-web-framework-python-software-framework-django-text-trademark-logo.png",
					description: t("tech_stack.backend.technologies.django.description"),
					experience: t("tech_stack.backend.technologies.django.experience"),
					projects: t("tech_stack.backend.technologies.django.projects"),
				},
				{
					name: "Spring Boot",
					logo: "https://img.icons8.com/?size=512&id=90519&format=png",
					description: t("tech_stack.backend.technologies.spring.description"),
					experience: t("tech_stack.backend.technologies.spring.experience"),
					projects: t("tech_stack.backend.technologies.spring.projects"),
				},
			],
		},
		{
			id: "mobile",
			name: t("tech_stack.mobile.title"),
			icon: <SmartphoneIcon className="h-8 w-8" />,
			description: t("tech_stack.mobile.description"),
			color: "#A78BFA",
			gradient: "from-purple-400 to-indigo-400",
			technologies: [
				{
					name: "React Native",
					logo: ReactLogo,
					description: t("tech_stack.mobile.technologies.react_native.description"),
					experience: t("tech_stack.mobile.technologies.react_native.experience"),
					projects: t("tech_stack.mobile.technologies.react_native.projects"),
				},
				{
					name: "Flutter",
					logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4o_miePhNB3k5LlT7JXCbgj1N--Ahk5_uwA&s",
					description: t("tech_stack.mobile.technologies.flutter.description"),
					experience: t("tech_stack.mobile.technologies.flutter.experience"),
					projects: t("tech_stack.mobile.technologies.flutter.projects"),
				},
				{
					name: "iOS (Swift)",
					logo: "https://icon2.cleanpng.com/20180525/cx/kisspng-swift-apple-programming-language-macos-5b0898b3eecb89.9438153115272900359781.jpg",
					description: t("tech_stack.mobile.technologies.ios.description"),
					experience: t("tech_stack.mobile.technologies.ios.experience"),
					projects: t("tech_stack.mobile.technologies.ios.projects"),
				},
				{
					name: "Android (Kotlin)",
					logo: "https://images.seeklogo.com/logo-png/32/2/kotlin-logo-png_seeklogo-323430.png",
					description: t("tech_stack.mobile.technologies.android.description"),
					experience: t("tech_stack.mobile.technologies.android.experience"),
					projects: t("tech_stack.mobile.technologies.android.projects"),
				},
				{
					name: "Xamarin",
					logo: "https://pngate.com/wp-content/uploads/2025/05/xamarin-logo-blue-hexagon-modern-flat-design-1.png",
					description: t("tech_stack.mobile.technologies.xamarin.description"),
					experience: t("tech_stack.mobile.technologies.xamarin.experience"),
					projects: t("tech_stack.mobile.technologies.xamarin.projects"),
				},
				{
					name: "Ionic",
					logo: "https://pngate.com/wp-content/uploads/2025/05/ionic-framework-logo-blue-circle-modern-design-1.png",
					description: t("tech_stack.mobile.technologies.ionic.description"),
					experience: t("tech_stack.mobile.technologies.ionic.experience"),
					projects: t("tech_stack.mobile.technologies.ionic.projects"),
				},
			],
		},
		{
			id: "database",
			name: t("tech_stack.database.title"),
			icon: <DatabaseIcon className="h-8 w-8" />,
			description: t("tech_stack.database.description"),
			color: "#F687B3",
			gradient: "from-pink-400 to-rose-400",
			technologies: [
				{
					name: "PostgreSQL",
					logo: "https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png",
					description: t("tech_stack.database.technologies.postgresql.description"),
					experience: t("tech_stack.database.technologies.postgresql.experience"),
					projects: t("tech_stack.database.technologies.postgresql.projects"),
				},
				{
					name: "MongoDB",
					logo: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
					description: t("tech_stack.database.technologies.mongodb.description"),
					experience: t("tech_stack.database.technologies.mongodb.experience"),
					projects: t("tech_stack.database.technologies.mongodb.projects"),
				},
				{
					name: "MySQL",
					logo: "https://toppng.com/uploads/preview/mysql-logo-png-image-11660514413jvwkcjh4av.png",
					description: t("tech_stack.database.technologies.mysql.description"),
					experience: t("tech_stack.database.technologies.mysql.experience"),
					projects: t("tech_stack.database.technologies.mysql.projects"),
				},
				{
					name: "Redis",
					logo: "https://static-00.iconduck.com/assets.00/redis-plain-wordmark-icon-2048x2048-ts2riq6b.png",
					description: t("tech_stack.database.technologies.redis.description"),
					experience: t("tech_stack.database.technologies.redis.experience"),
					projects: t("tech_stack.database.technologies.redis.projects"),
				},
				{
					name: "Elasticsearch",
					logo: "https://cdn.iconscout.com/icon/free/png-256/free-elastic-search-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-3029971.png",
					description: t("tech_stack.database.technologies.elasticsearch.description"),
					experience: t("tech_stack.database.technologies.elasticsearch.experience"),
					projects: t("tech_stack.database.technologies.elasticsearch.projects"),
				},
				{
					name: "Firebase",
					logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Firebase_Logo_%28No_wordmark%29_%282024-%29.svg",
					description: t("tech_stack.database.technologies.firebase.description"),
					experience: t("tech_stack.database.technologies.firebase.experience"),
					projects: t("tech_stack.database.technologies.firebase.projects"),
				},
			],
		},
	];

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
							{t("tech_stack.title")}
						</h2>
						<p className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed px-8 400:px-6">
							{t("tech_stack.description")}
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
						{t("tech_stack.cta.description")}
					</p>
					<button className="text-sm sm:text-xl px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pale-blue to-light-blue text-heading-black hover:text-white font-semibold rounded-xl hover:from-light-blue hover:to-normal-dark-blue transition-all duration-300 transform hover:scale-105 shadow-lg">
						{t("tech_stack.cta.button")}
					</button>
				</motion.div>
			</div>
		</div>
	);
}
