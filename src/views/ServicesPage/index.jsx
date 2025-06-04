import { motion } from "framer-motion";
import {
	ArrowRight,
	Code,
	Database,
	Globe,
	Layers,
	LineChart,
	Settings,
	ChevronRight,
} from "lucide-react";
import CTA from "@/components/sections/ContactCTA";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

					{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
