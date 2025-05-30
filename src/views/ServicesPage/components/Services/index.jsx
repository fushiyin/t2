import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
	BrainCircuitIcon,
	CloudIcon,
	CodeIcon,
	DatabaseIcon,
	ShieldIcon,
	SmartphoneIcon,
} from "lucide-react";

export default function Services() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<AnimatedSection className="w-full py-16 flex flex-col items-center">
			<div className="max-w-[1440px]">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Services Provided
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Comprehensive technology solutions tailored to your business needs.
						</p>
					</div>
				</div>
				<motion.div
					className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					<motion.div variants={cardVariants}>
						<Card className="border-primary/20 h-full">
							<CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full">
								<motion.div
									className="rounded-full p-3 bg-primary/10"
									whileHover={{ scale: 1.1, rotate: 5 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<CodeIcon className="h-6 w-6 text-primary" />
								</motion.div>
								<h3 className="text-xl font-bold">Custom Software Development</h3>
								<p className="text-muted-foreground">
									Bespoke software solutions designed and built from the ground up
									to address your specific business challenges and requirements.
								</p>
								<ul className="text-sm text-muted-foreground space-y-1 text-left w-full">
									<li>• Enterprise applications</li>
									<li>• SaaS platforms</li>
									<li>• E-commerce solutions</li>
									<li>• CRM and ERP systems</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div variants={cardVariants}>
						<Card className="bg-background border-primary/20 h-full">
							<CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full">
								<motion.div
									className="rounded-full p-3 bg-primary/10"
									whileHover={{ scale: 1.1, rotate: -5 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<SmartphoneIcon className="h-6 w-6 text-primary" />
								</motion.div>
								<h3 className="text-xl font-bold">Mobile App Development</h3>
								<p className="text-muted-foreground">
									Native and cross-platform mobile applications that deliver
									exceptional user experiences across all devices.
								</p>
								<ul className="text-sm text-muted-foreground space-y-1 text-left w-full">
									<li>• iOS development</li>
									<li>• Android development</li>
									<li>• React Native</li>
									<li>• Flutter</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div variants={cardVariants}>
						<Card className="bg-background border-primary/20 h-full">
							<CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full">
								<motion.div
									className="rounded-full p-3 bg-primary/10"
									whileHover={{ scale: 1.1, rotate: 5 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<DatabaseIcon className="h-6 w-6 text-primary" />
								</motion.div>
								<h3 className="text-xl font-bold">Web Development</h3>
								<p className="text-muted-foreground">
									Responsive, high-performance web applications and sites built
									with the latest technologies and frameworks.
								</p>
								<ul className="text-sm text-muted-foreground space-y-1 text-left w-full">
									<li>• Progressive Web Apps</li>
									<li>• E-commerce platforms</li>
									<li>• Content management systems</li>
									<li>• Web portals</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div variants={cardVariants}>
						<Card className="bg-background border-primary/20 h-full">
							<CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full">
								<motion.div
									className="rounded-full p-3 bg-primary/10"
									whileHover={{ scale: 1.1, rotate: -5 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<CloudIcon className="h-6 w-6 text-primary" />
								</motion.div>
								<h3 className="text-xl font-bold">Cloud Solutions</h3>
								<p className="text-muted-foreground">
									Cloud architecture, migration, and management services to
									optimize your infrastructure and operations.
								</p>
								<ul className="text-sm text-muted-foreground space-y-1 text-left w-full">
									<li>• AWS, Azure, GCP</li>
									<li>• Cloud migration</li>
									<li>• DevOps implementation</li>
									<li>• Microservices architecture</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div variants={cardVariants}>
						<Card className="bg-background border-primary/20 h-full">
							<CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full">
								<motion.div
									className="rounded-full p-3 bg-primary/10"
									whileHover={{ scale: 1.1, rotate: 5 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<BrainCircuitIcon className="h-6 w-6 text-primary" />
								</motion.div>
								<h3 className="text-xl font-bold">AI & Machine Learning</h3>
								<p className="text-muted-foreground">
									Intelligent solutions that leverage the power of AI and ML to
									drive insights and automation.
								</p>
								<ul className="text-sm text-muted-foreground space-y-1 text-left w-full">
									<li>• Predictive analytics</li>
									<li>• Natural language processing</li>
									<li>• Computer vision</li>
									<li>• Recommendation systems</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div variants={cardVariants}>
						<Card className="bg-background border-primary/20 h-full">
							<CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full">
								<motion.div
									className="rounded-full p-3 bg-primary/10"
									whileHover={{ scale: 1.1, rotate: -5 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<ShieldIcon className="h-6 w-6 text-primary" />
								</motion.div>
								<h3 className="text-xl font-bold">QA & Testing</h3>
								<p className="text-muted-foreground">
									Comprehensive quality assurance and testing services to ensure
									your software meets the highest standards.
								</p>
								<ul className="text-sm text-muted-foreground space-y-1 text-left w-full">
									<li>• Manual testing</li>
									<li>• Automated testing</li>
									<li>• Performance testing</li>
									<li>• Security testing</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</AnimatedSection>
	);
}
