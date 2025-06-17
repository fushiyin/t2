import about_img from "@/assets/img/About_us.png";
import image from "@/assets/img/bg-about-us.png";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/sections/ContactCTA";
import FAQ from "@/components/sections/FAQ";
import { FAQs } from "@/constant/common";
import useResponsive from "@/hooks/useResponsive";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Globe, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import CompetitiveEdges from "../Home/components/CompetitiveEdges";
import VisionJourney from "../Home/components/Vision";

export default function AboutPage() {
	const { t } = useTranslation();
	const { isMobile, isLg } = useResponsive();

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<div className="w-full flex flex-col gap-6 md:gap-10 items-center mt-[64px]">
			<AnimatedSection className="w-full flex flex-col items-center">
				<div className="max-w-[1440px] container px-[20px] py-8 md:py-12 md:px-0 flex flex-col justify-center min-h-[50vh]">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="content mb-8 flex flex-col items-center justify-space-between text-center"
					>
						<h2 className="text-left text-5xl font-bold tracking-tighter font-sans break-keep whitespace-normal break-words">
							{t("about.title")}
						</h2>
					</motion.div>
					<div className="flex flex-col lg:flex-row">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className={`w-full ${isMobile ? "px-0" : "px-4 2xl:px-0"} lg:w-[50%] order-2 lg:order-1`}
						>
							<div
								className="w-[90%] border-l-4 border-gradient pl-4"
								style={{
									borderImage:
										"linear-gradient(to bottom, var(--color-light-mint), var(--color-light-green)) 1",
								}}
							>
								<motion.h2
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									className="text-left text-4xl mb-4 font-bold tracking-tighter font-sans break-keep whitespace-normal break-words"
								>
									{t("about.description.title")}
								</motion.h2>
								<motion.h2
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.2 }}
									className="text-left text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] font-bold tracking-tighter font-sans break-keep whitespace-normal break-words"
								>
									{t("about.description.explain")}
								</motion.h2>
							</div>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="pl-0 md:pl-6 pt-4 md:pt-6 w-full md:w-[90%] text-muted-foreground text-sm text-left font-sans break-keep whitespace-normal break-words"
							>
								{t("about.content")}
							</motion.p>

							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								className="w-[90%] flex font-bold mt-4 md:mt-8 text-2xl sm:text-3xl md:text-4xl tracking-tighter justify-center font-sans break-keep whitespace-normal break-words"
							>
								{t("about.experience")}
							</motion.h2>

							<motion.div
								variants={containerVariants}
								initial="hidden"
								animate="visible"
								className="flex w-full sm:w-[90%] flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-8"
							>
								{[1, 2, 3, 4].map((i) => (
									<motion.p
										key={i}
										variants={itemVariants}
										className="text-sm md:text-base text-dark-gray lg:text-xl/relaxed font-bold font-sans text-left break-keep whitespace-normal break-words w-full sm:w-[calc(50%-12px)] flex items-center gap-2"
									>
										{i === 1 && (
											<CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 stroke-[var(--color-light-mint)]" />
										)}
										{i === 2 && (
											<Users className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 stroke-[var(--color-light-mint)]" />
										)}
										{i === 3 && (
											<Globe className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 stroke-[var(--color-light-mint)]" />
										)}
										{i === 4 && (
											<Award className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 stroke-[var(--color-light-mint)]" />
										)}
										{t(`about.experience_list.${i}`)}
									</motion.p>
								))}
							</motion.div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className={`${isLg ? "pl-8 lg:pl-12" : isMobile ? "pl-0 pb-6" : "pl-6 pb-6"} w-full lg:w-[50%] relative h-[300px] md:h-[400px] lg:h-[600px] order-1 lg:order-2`}
						>
							<div className="relative w-full h-full">
								<motion.img
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6, delay: 0.4 }}
									src={about_img}
									alt="Mobile Screen"
									className="absolute left-0 w-full h-full object-cover"
									style={{
										clipPath:
											"polygon(100% 0, 60% 0, 40% 50%, 60% 100%, 100% 100%)",
										transform: "translateX(5px)",
									}}
								/>
								<motion.img
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6, delay: 0.5 }}
									src={about_img}
									alt="Mobile Screen"
									className="absolute right-0 w-full h-full object-cover"
									style={{
										clipPath: "polygon(0 0, 60% 0, 40% 50%, 60% 100%, 0 100%)",
										transform: "translateX(-5px)",
									}}
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</AnimatedSection>
			<VisionJourney />
			<CompetitiveEdges />
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="flex flex-col items-center px-[20px] md:px-4 lg:px-0"
			>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl text-center"
				>
					{t("faq.title")}
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="max-w-[1440px] grid gap-6 lg:grid-cols-2 sm:mt-8 md:mt-16 lg:gap-12 items-start mt-6 lg:px-0 md:px-4"
				>
					<motion.img
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						src={image}
						alt={t("about.faq.imageAlt")}
						whileHover={{ scale: 1.02 }}
						className="transition-all duration-300"
					/>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						<FAQ faqs={FAQs} />
					</motion.div>
				</motion.div>
			</motion.div>
			<CTA />
		</div>
	);
}
