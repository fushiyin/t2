import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/sections/ContactCTA";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";
import UniqueValue from "./components/UniqueValue";
import VisionMission from "./components/VisionMission";

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
		<div className="w-full flex flex-col items-center">
			{/* <div className="container py-12">
				<h1 className="text-4xl font-bold mb-4">About Us</h1>
				<p className="text-muted-foreground text-lg max-w-3xl">
					Learn more about T2Soft, our mission, values, and what makes us a leading
					technology partner.
				</p>
			</div> */}
			<AnimatedSection className="w-full bg-muted/50 flex flex-col items-center">
				<div className="container md:px-6 py-12 flex flex-col bg-[#101944]">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
						<div className="space-y-4">
							<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
								02
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								About Us
							</h2>
							<p className="text-muted-foreground md:text-xl/relaxed">
								T2Soft is a leading technology company based in Vietnam,
								specializing in innovative software solutions for global clients.
								Founded in 2010, we&apos;ve grown from a small team of passionate
								developers to a comprehensive technology partner.
							</p>
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
									<span>Over 12 years of experience in software development</span>
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
						</div>
						<motion.div
							className="flex justify-center lg:justify-end"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							<div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-lg">
								<img
									src="/placeholder.svg?height=800&width=1000"
									alt="T2Soft office in Vietnam"
									className="object-cover"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</AnimatedSection>
			<VisionMission />
			<UniqueValue />
			<CTA />
		</div>
	);
}
