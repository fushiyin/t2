import t2screen from "@/assets/img/t2screen.png";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/sections/ContactCTA";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";
import DeviceMockup from "./components/DeviceMockup";
import TechStack from "./components/TechStack";
import UniqueValue from "./components/UniqueValue";

export default function AboutPage() {
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

	return (
		<div className="w-full flex flex-col gap-10 items-center">
			<AnimatedSection className="w-full bg-muted/50 flex flex-col items-center">
				<div className="container md:px-6 py-12 flex flex-col justify-center h-[50vh]">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						About Us
					</h2>
					<div className="grid gap-6 lg:grid-cols-2 sm:mt-16 lg:gap-12 items-center mt-10">
						<div className="space-y-4">
							<p className="text-muted-foreground md:text-xl/relaxed">
								T2Soft is a leading technology company based in Vietnam,
								specializing in innovative software solutions for global clients.
								Founded in 2010, we&apos;ve grown from a small team of passionate
								developers to a comprehensive technology partner.
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
										<CheckCircleIcon className="h-5 w-5 text-primary" />
										<span>
											Over 12 years of experience in software development
										</span>
									</motion.li>
									<motion.li
										className="flex items-center gap-2"
										variants={itemVariants}
									>
										<CheckCircleIcon className="h-5 w-5 text-primary" />
										<span>Team of 100+ skilled engineers and designers</span>
									</motion.li>
									<motion.li
										className="flex items-center gap-2"
										variants={itemVariants}
									>
										<CheckCircleIcon className="h-5 w-5 text-primary" />
										<span>Successfully delivered 200+ projects worldwide</span>
									</motion.li>
									<motion.li
										className="flex items-center gap-2"
										variants={itemVariants}
									>
										<CheckCircleIcon className="h-5 w-5 text-primary" />
										<span>Offices in Hanoi, Ho Chi Minh City, and Da Nang</span>
									</motion.li>
								</motion.ul>
							</motion.div>
						</div>
						<div className="relative w-[500px] h-[300px] mx-auto">
							<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
								<DeviceMockup imageSrc={t2screen} />
							</div>
							<div className="absolute left-4 top-20 z-20">
								<DeviceMockup
									imageSrc={t2screen}
									type="mobile"
								/>
							</div>
							<div className="absolute left-90 top-15 z-20 rotate-90">
								<DeviceMockup
									imageSrc={t2screen}
									type="tablet"
								/>
							</div>
						</div>
					</div>
				</div>
			</AnimatedSection>
			<UniqueValue />
			<TechStack />
			<CTA />
		</div>
	);
}
