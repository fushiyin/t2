import about_img from "@/assets/img/About_us.png";
import image from "@/assets/img/bg-about-us.png";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/sections/ContactCTA";
import FAQ from "@/components/sections/FAQ";
import { FAQs } from "@/constant/common";
import { useTranslation } from "react-i18next";
import CompetitiveEdges from "../Home/components/CompetitiveEdges";
import VisionJourney from "../Home/components/Vision";

export default function AboutPage() {
	const { t } = useTranslation();
	const contentClass = "container h-full px-4 py-16 md:px-6 max-w-[1440px]";
	return (
		<div className="w-full flex flex-col gap-6 md:gap-10 items-center">
			<AnimatedSection className="w-full bg-muted/50 flex flex-col items-center">
				<div className="max-w-[1440px] container px-[20px] py-8 md:py-12 md:px-0 flex flex-col justify-center min-h-[50vh]">
					<div className="flex flex-col lg:flex-row">
						<div className="w-full lg:w-[50%] relative h-[300px] md:h-[400px] lg:h-[600px]">
							<div className="relative w-full h-full">
								<img
									src={about_img}
									alt="Mobile Screen"
									className="absolute left-0 w-full h-full object-cover"
									style={{
										clipPath:
											"polygon(0% 0%, 32% 0, 53% 55%, 32% 100%, 0% 100%)",
										transform: "translateX(-10px)",
									}}
								/>
								<img
									src={about_img}
									alt="Mobile Screen"
									className="absolute right-0 w-full h-full object-cover"
									style={{
										clipPath:
											"polygon(100% 0, 32% 0, 53% 55%, 32% 100%, 100% 100%)",
										transform: "translateX(10px)",
									}}
								/>
							</div>
						</div>
						<div className="w-full lg:w-[50%] pl-8 lg:pl-12">
							<div className="w-[90%] border-l-4 border-dark-blue pl-4">
								<h2 className="text-left text-5xl mb-4 font-bold tracking-tighter font-sans break-keep whitespace-normal break-words">
									{t("about.title")}
								</h2>
								<p className="text-left text-dark-blue md:text-xl/relaxed font-sans break-keep whitespace-normal break-words">
									{t("about.description")}
								</p>
							</div>

							<p className="w-[80%] text-muted-foreground text-sm font-sans text-left break-words whitespace-normal mt-6">
								{t("about.content")}
							</p>

							<h2 className="w-full flex text-dark-blue mt-8 text-4xl font-bold tracking-tighter justify-center font-sans break-keep whitespace-normal break-words">
								{t("about.experience")}
							</h2>

							<div className="flex w-[90%] flex-wrap gap-6 mt-8">
								{[1, 2, 3, 4].map((i) => (
									<p
										key={i}
										className="text-muted-foreground text-base md:text-xl/relaxed font-sans text-left break-keep whitespace-normal break-words w-[calc(50%-12px)]"
									>
										{t(`about.experience_list.${i}`)}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</AnimatedSection>
			<VisionJourney classNam={contentClass} />
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
