import bg1 from "@/assets/img/bg1.avif";
import bg2 from "@/assets/img/bg2.avif";
import bg3 from "@/assets/img/bg3.avif";
import bg4 from "@/assets/img/bg4.avif";
import bg5 from "@/assets/img/bg5.avif";
import bg6 from "@/assets/img/bg6.avif";
import CTA from "@/components/sections/ContactCTA";
import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Globe, Layers, LineChart, Settings } from "lucide-react";

const services = [
	{
		id: 1,
		name: "Custom Software Development",
		description:
			"Bespoke software solutions designed and built from the ground up to address your specific business challenges and requirements",
		icon: Code,
		image: bg1,
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
		image: bg2,
		details: ["iOS development", "Android development", "React Native", "Flutter"],
	},
	{
		id: 3,
		name: "Web Development",
		description:
			"Responsive, high-performance web applications and sites built with the latest technologies and frameworks.",
		icon: Database,
		image: bg3,
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
		image: bg4,
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
		image: bg5,
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
		image: bg6,
		details: ["Manual testing", "Automated testing", "Performance testing", "Security testing"],
	},
];

export default function ServicesPage() {
	return (
		<div className="w-full">
			<section className="flex flex-col items-center justify-center w-full min-h-[50vh] flex items-center bg-muted/50">
				<div className="container relative max-w-6xl mx-auto px-4">
					<div>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="text-center"
						>
							<h2 className="text-2xl md:text-3xl my-5 font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
								Our Services
							</h2>
							<p className="text-xl text-muted-foreground mb-8">
								Discover our comprehensive range of technology services designed to
								drive your business forward.
							</p>
							<button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
								Get Started
								<ArrowRight className="w-4 h-4" />
							</button>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="w-full py-20">
				<div className="container max-w-6xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((service) => (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.03 }}
								transition={{ type: "spring", stiffness: 200, damping: 15 }}
								className="bg-white/80 rounded-2xl shadow-lg flex flex-col gap-3 items-stretch relative sm:min-h-[300px] border-t group relative bg-card rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-md"
							>
								<div className="relative h-48 overflow-hidden border-b border-border">
									<img
										src={service.image}
										alt={service.name}
										className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
								</div>

								<div className="p-6 border-t border-border/50">
									<h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
										{service.name}
									</h3>
									<p className="text-muted-foreground text-sm mb-4">
										{service.description}
									</p>
									<ul className="space-y-2 border-t border-border/50 pt-4">
										{service.details.map((detail, idx) => (
											<li
												key={idx}
												className="flex items-center gap-2 text-sm"
											>
												<div className="w-1.5 h-1.5 rounded-full bg-primary" />
												{detail}
											</li>
										))}
									</ul>
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
