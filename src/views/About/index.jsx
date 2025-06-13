import image from "@/assets/img/bg-about-us.png";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/sections/ContactCTA";
import FAQ from "@/components/sections/FAQ";
import { FAQs } from "@/constant/common";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";
import DeviceShowcase from "./components/DeviceShowcase";
import UniqueValue from "./components/UniqueValue";
import { useTranslation } from "react-i18next";
import { SECTIONS_KEY } from "@/constant/sideNavigation";
import VisionJourney from "../Home/components/Vision";
import CompetitiveEdges from "../Home/components/CompetitiveEdges";

export default function AboutPage() {
	const { t } = useTranslation();
	const listVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5 },
		},
	};
	const contentClass = "container h-full px-4 py-16 md:px-6 max-w-[1440px]";
	return (
		<div className="w-full flex flex-col gap-6 md:gap-10 items-center">
			<AnimatedSection className="w-full bg-muted/50 flex flex-col items-center">
				<div className="max-w-[1440px] container px-[20px] py-8 md:py-12 md:px-4 flex flex-col justify-center min-h-[50vh]">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-sans break-keep whitespace-normal break-words">
						{t("about.title")}
					</h2>
					<div className="grid gap-6 lg:grid-cols-2 sm:mt-8 md:mt-16 lg:gap-12 items-center mt-6 md:mt-10">
						<div className="space-y-4">
							<p className="text-muted-foreground text-base md:text-xl/relaxed font-sans break-keep whitespace-normal break-words">
								{t("about.description")}
							</p>
							<motion.div
								className="flex"
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.7 }}
								viewport={{ once: true, margin: "-100px" }}
							>
								<motion.ul
									className="grid gap-2"
									variants={listVariants}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, margin: "-100px" }}
								>
									<motion.li
										className="flex items-center gap-2"
										variants={itemVariants}
									>
										<CheckCircleIcon className="h-4 w-4 md:h-5 md:w-5 text-primary " />
										<span className="text-sm md:text-base font-sans break-keep whitespace-normal break-words">
											{t("about.experience")}
										</span>
									</motion.li>
									<motion.li
										className="flex items-center gap-2"
										variants={itemVariants}
									>
										<CheckCircleIcon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
										<span className="text-sm md:text-base font-sans break-keep whitespace-normal break-words">
											{t("about.team")}
										</span>
									</motion.li>
									<motion.li
										className="flex items-center gap-2"
										variants={itemVariants}
									>
										<CheckCircleIcon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
										<span className="text-sm md:text-base font-sans break-keep whitespace-normal break-words">
											{t("about.projects")}
										</span>
									</motion.li>
									<motion.li
										className="flex items-center gap-2"
										variants={itemVariants}
									>
										<CheckCircleIcon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
										<span className="text-sm md:text-base font-sans break-keep whitespace-normal break-words">
											{t("about.offices")}
										</span>
									</motion.li>
								</motion.ul>
							</motion.div>
						</div>
						<div className="w-full">
							<DeviceShowcase />
						</div>
					</div>
				</div>
			</AnimatedSection>
			<VisionJourney classNam={contentClass} />
			<CompetitiveEdges />
			<div className="flex flex-col items-center px-[20px] md:px-4 lg:px-0">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
					{t("faq.title")}
				</h2>
				<div className="max-w-[1440px] grid gap-6 lg:grid-cols-2 sm:mt-8 md:mt-16 lg:gap-12 items-start mt-6 md:mt-10 lg:px-0 md:px-4">
					<img
						src={image}
						alt={t("about.faq.imageAlt")}
					/>
					<FAQ faqs={FAQs} />
				</div>
			</div>
			<CTA />
		</div>
	);
}
