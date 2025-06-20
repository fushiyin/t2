import video_solution from "@/assets/video/Solution.mp4";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/sections/ContactCTA";
import useResponsive from "@/hooks/useResponsive";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, BrainCircuit, Code, Database, Globe, Layers } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

const services = [
	{
		id: 1,
		name: "Global Development Center",
		description: "",
		icon: Code,
		details: [
			"Frontend & Backend Development",
			"Hybrid & Native App Development",
			"UI/UX Design & Optimization",
			"Managed Global Development Center",
		],
	},
	{
		id: 2,
		name: "System Integration (SI)",
		description: "",
		icon: Globe,
		details: [
			"Integrated System Development",
			"Data Integration & Management",
			"Solution Customization & Optimization",
		],
	},
	{
		id: 3,
		name: "IT Consulting",
		description: "",
		icon: Database,
		details: [
			"IT Strategy Development",
			"System Diagnosis & Improvement",
			"Solution Selection & Implementation Support",
		],
	},
	{
		id: 4,
		name: "Solution Provider",
		description: "",
		icon: Layers,
		details: [
			"Smart Office, Smart Factory, Banking solution",
			"Modular/Scalable Software Supply",
			"Enterprise Solutions (CRM, ERP,MES, HRM, WMS, FMS, iBEEMS, etc)",
		],
	},
	{
		id: 5,
		name: "AI & Machine Learning",
		description: "Cutting-edge AI solutions for modern businesses",
		icon: BrainCircuit,
		details: [
			"Machine Learning Model Development",
			"Natural Language Processing",
			"Computer Vision Solutions",
			"AI-powered Automation",
			"Predictive Analytics",
		],
	},
	{
		id: 6,
		name: "Big Data & Data Analysis",
		description: "Transform your data into actionable insights",
		icon: BarChart3,
		details: [
			"Big Data Processing & Analytics",
			"Business Intelligence Solutions",
			"Data Visualization & Reporting",
			"Real-time Data Analysis",
			"Data Mining & Pattern Recognition",
		],
	},
];

export default function SolutionAndProduct() {
	const { t } = useTranslation();
	const { isMobile } = useResponsive();

	const [titleRef, titleInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div className="w-full mt-[64px]">
			<AnimatedSection className="w-full flex flex-col items-center">
				<motion.div
					ref={titleRef}
					initial={{ opacity: 0, y: -20 }}
					animate={
						isMobile
							? { opacity: 1, y: 0 }
							: titleInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: -20 }
					}
					transition={{ duration: 0.6 }}
					className="relative mb-8 flex flex-col items-center justify-center text-center h-[300px] md:h-[500px] w-full"
				>
					{/* video */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={
							isMobile
								? { opacity: 1 }
								: titleInView
									? { opacity: 1 }
									: { opacity: 0 }
						}
						transition={{ duration: 0.6 }}
						className="absolute inset-0 w-full h-full bg-cover bg-center overflow-hidden"
					>
						<video
							src={video_solution}
							autoPlay
							loop
							muted
							playsInline
							className="w-full h-full object-cover"
						/>
					</motion.div>
					{/* Overlay */}
					{/* <div className="absolute inset-0 bg-dark-blue/30" /> */}
					{/* Content */}
					<div className="relative z-10 flex flex-col justify-center items-center h-full max-w-3xl mx-auto text-center space-y-3">
						<motion.h2
							className="leading-relaxed px-8 md:pb-4 text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight font-sans break-keep whitespace-normal break-words text-white "
							style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)", lineHeight: "1.2" }}
							dangerouslySetInnerHTML={{ __html: t("solution.video.title") }}
						/>

						<p
							className="px-4 text-xl md:text-2xl tracking-tighter font-sans break-keep whitespace-normal break-words text-white "
							style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
						>
							{t("solution.video.sublime")}
						</p>
					</div>
				</motion.div>
			</AnimatedSection>
			<section className="w-full pt-4 pb-12 bg-background">
				<div className="container max-w-[1440px] mx-auto px-4">
					<div className="text-center mb-8">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans break-keep whitespace-normal break-words ">
							{t("services.section.title")}
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans break-keep whitespace-normal break-words ">
							{t("services.section.description")}
						</p>
					</div>

					{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
						{services.map((service) => (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.02 }}
								transition={{ type: "spring", stiffness: 200, damping: 15 }}
								className="bg-white/80 rounded-2xl shadow-lg flex flex-col items-stretch relative duration-300 border-t"
							>
								<div className="p-8">
									<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
										<service.icon className="w-6 h-6" />
									</div>
									<h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors font-sans break-keep whitespace-normal break-words">
										{t(`services.items.${service.id}.name`)}
									</h3>
									<ul className="space-y-3">
										{service.details.map((detail, idx) => (
											<li
												key={idx}
												className="flex items-center gap-2 text-sm"
											>
												<span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
												<span className="font-sans break-words whitespace-normal">
													{t(
														`services.items.${service.id}.details.${idx}`,
													)}
												</span>
											</li>
										))}
									</ul>
									<button className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
										{t("services.items.learnMore")}
										<ArrowRight className="w-4 h-4" />
									</button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
			<CTA />
		</div>
	);
}
