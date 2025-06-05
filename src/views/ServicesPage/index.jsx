import CTA from "@/components/sections/ContactCTA";
import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Globe, Layers, LineChart, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const services = [
	{
		id: 1,
		name: "Custom Software Development",
		description:
			"Bespoke software solutions designed and built from the ground up to address your specific business challenges and requirements",
		icon: Code,
		details: [
			"Enterprise applications",
			"Saas platforms",
			"E-commerce solutions",
			"CRM and ERP systems",
		],
	},
	{
		id: 2,
		name: "Mobile App Development",
		description:
			"Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
		icon: Globe,
		details: ["iOS development", "Android development", "React Native", "Flutter"],
	},
	{
		id: 3,
		name: "Web Development",
		description:
			"Responsive, high-performance web applications and sites built with the latest technologies and frameworks.",
		icon: Database,
		details: [
			"Progressive Web Apps",
			"E-commerce platforms",
			"Content management systems",
			"Web portals",
		],
	},
	{
		id: 4,
		name: "Cloud Services",
		description:
			"Cloud architecture, migration, and management services to optimize your infrastructure and operations.",
		icon: Layers,
		details: [
			"AWS, Azure, GCP",
			"Cloud migration",
			"DevOps implementation",
			"Microservices architecture",
		],
	},
	{
		id: 5,
		name: "AI & Machine Learning",
		description:
			"Intelligent solutions that leverage the power of AI and ML to drive insights and automation.",
		icon: LineChart,
		details: [
			"Predictive analytics",
			"Natural language processing",
			"Computer vision",
			"Recommendation systems",
		],
	},
	{
		id: 6,
		name: "QA & Testing",
		description:
			"Comprehensive quality assurance and testing services to ensure your software meets the highest standards.",
		icon: Settings,
		details: ["Manual testing", "Automated testing", "Performance testing", "Security testing"],
	},
];

export default function ServicesPage() {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const handleGetStarted = () => {
		navigate("/contact");
	};

	return (
		<div className="w-full">
			<section className="relative bg-muted/50 min-h-[50vh] flex items-center bg-background overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
				<div className="container relative mx-auto px-4 max-w-[1440px]">
					<div className="max-w-3xl mx-auto text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="space-y-8"
						>
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-sans break-keep whitespace-normal break-words">
								{t("services.hero.title")}{" "}
								<span className="text-primary">{t("services.hero.highlight")}</span>
							</h2>

							<p className="text-xl text-muted-foreground font-sans break-keep whitespace-normal break-words">
								{t("services.hero.description")}
							</p>

							<div className="flex flex-wrap justify-center gap-4">
								<button
									onClick={handleGetStarted}
									className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-medium font-sans break-keep whitespace-normal break-words"
								>
									{t("services.hero.cta")}
									<ArrowRight className="w-5 h-5" />
								</button>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
			<section className="w-full py-24 bg-background">
				<div className="container max-w-[1440px] mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans break-keep whitespace-normal break-words">
							{t("services.section.title")}
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans break-keep whitespace-normal break-words">
							{t("services.section.description")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
									<p className="text-muted-foreground text-sm mb-6 font-sans break-keep whitespace-normal break-words">
										{t(`services.items.${service.id}.description`)}
									</p>
									<ul className="space-y-3">
										{service.details.map((detail, idx) => (
											<li
												key={idx}
												className="flex items-center gap-2 text-sm"
											>
												<div className="w-1.5 h-1.5 rounded-full bg-primary font-sans break-keep whitespace-normal break-words" />
												{t(`services.items.${service.id}.details.${idx}`)}
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
