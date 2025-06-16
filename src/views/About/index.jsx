import about_img from "@/assets/img/About_us.png";
import image from "@/assets/img/bg-about-us.png";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/sections/ContactCTA";
import FAQ from "@/components/sections/FAQ";
import { FAQs } from "@/constant/common";
import { useTranslation } from "react-i18next";
import CompetitiveEdges from "../Home/components/CompetitiveEdges";
import VisionJourney from "../Home/components/Vision";
import { CheckCircle2, Users, Globe, Award } from "lucide-react";
import useResponsive from "@/hooks/useResponsive";

export default function AboutPage() {
	const { t } = useTranslation();
	const { isMobile, isLg } = useResponsive();
	return (
		<div className="w-full flex flex-col gap-6 md:gap-10 items-center mt-[64px]">
			<AnimatedSection className="w-full flex flex-col items-center">
				<div className="max-w-[1440px] container px-[20px] py-8 md:py-12 md:px-0 flex flex-col justify-center min-h-[50vh]">
					<div className="content mb-8 flex flex-col items-center justify-space-between text-center">
						<h2 className="text-left text-5xl font-bold tracking-tighter font-sans break-keep whitespace-normal break-words">
							{t("about.title")}
						</h2>
					</div>
					<div className="flex flex-col lg:flex-row">
						<div
							className={`w-full ${isMobile ? "px-0" : "px-4 2xl:px-0"} lg:w-[50%] order-2 lg:order-1`}
						>
							<div className="w-[90%] border-l-4 border-dark-blue pl-4">
								<h2 className="text-left text-4xl mb-4 font-bold tracking-tighter font-sans break-keep whitespace-normal break-words ">
									{t("about.description.title")}
								</h2>
								<p className="text-left text-dark-blue md:text-xl/relaxed font-sans break-keep whitespace-normal break-words">
									{t("about.description.explain")}
								</p>
							</div>

							<p className="ml-0 md:ml-6 mt-4 md:mt-6 w-full md:w-[80%] text-muted-foreground text-sm text-left  font-sans break-keep whitespace-normal break-words">
								{t("about.content")}
							</p>

							<h2 className="w-full flex font-bold mt-4 md:mt-8 text-2xl sm:text-3xl md:text-4xl tracking-tighter justify-center font-sans break-keep whitespace-normal break-words">
								{t("about.experience")}
							</h2>

							<div className="flex w-full sm:w-[90%] flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-8">
								{[1, 2, 3, 4].map((i) => (
									<p
										key={i}
										className="text-dark-blue text-sm md:text-base lg:text-xl/relaxed font-sans text-left break-keep whitespace-normal break-words w-full sm:w-[calc(50%-12px)] flex items-center gap-2"
									>
										{i === 1 && (
											<CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-dark-blue shrink-0" />
										)}
										{i === 2 && (
											<Users className="w-4 h-4 sm:w-5 sm:h-5 text-dark-blue shrink-0" />
										)}
										{i === 3 && (
											<Globe className="w-4 h-4 sm:w-5 sm:h-5 text-dark-blue shrink-0" />
										)}
										{i === 4 && (
											<Award className="w-4 h-4 sm:w-5 sm:h-5 text-dark-blue shrink-0" />
										)}
										{t(`about.experience_list.${i}`)}
									</p>
								))}
							</div>
						</div>
						<div
							className={`${isLg ? "pl-8 lg:pl-12" : isMobile ? "pl-0 pb-6" : "pl-6 pb-6"} w-full lg:w-[50%] relative h-[300px] md:h-[400px] lg:h-[600px] order-1 lg:order-2`}
						>
							<div className="relative w-full h-full">
								<img
									src={about_img}
									alt="Mobile Screen"
									className="absolute left-0 w-full h-full object-cover"
									style={{
										clipPath:
											"polygon(100% 0, 60% 0, 40% 50%, 60% 100%, 100% 100%)",
										transform: "translateX(5px)",
									}}
								/>
								<img
									src={about_img}
									alt="Mobile Screen"
									className="absolute right-0 w-full h-full object-cover"
									style={{
										clipPath: "polygon(0 0, 60% 0, 40% 50%, 60% 100%, 0 100%)",
										transform: "translateX(-5px)",
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</AnimatedSection>
			<VisionJourney />
			<CompetitiveEdges />
			<div className="flex flex-col items-center px-[20px] md:px-4 lg:px-0">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl text-center">
					{t("faq.title")}
				</h2>
				<div className="max-w-[1440px] grid gap-6 lg:grid-cols-2 sm:mt-8 md:mt-16 lg:gap-12 items-start mt-6 lg:px-0 md:px-4">
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
