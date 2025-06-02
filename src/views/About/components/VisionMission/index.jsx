import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CompassIcon, EyeIcon, HeartIcon } from "lucide-react";

export default function VisionMission() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<div
			id="vision-mission"
			className="bg-t2-grayBlue/10 max-w-[1440px] px-4 md:px-6 py-12 flex flex-col"
		>
			<div className="container px-4 md:px-6 h-full flex flex-col justify-center">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark-gray">
							Vision, Mission & Values
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Our guiding principles that drive everything we do at T2Soft.
						</p>
					</div>
				</div>
				<motion.div
					className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div variants={cardVariants}>
						<Card className="bg-white border-t2-blue/20 h-full">
							<CardHeader className="pb-0 pt-6 flex flex-col items-center">
								<motion.div
									className="rounded-full p-3 bg-t2-lightBlue/20 mb-4"
									whileHover={{ scale: 1.1, rotate: 5 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<EyeIcon className="h-6 w-6 text-t2-blue" />
								</motion.div>
								<CardTitle className="text-xl text-center text-dark-gray">
									Vision
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center pt-4">
								<p className="text-muted-foreground">
									To be the leading technology partner bridging Vietnam&apos;s
									talent with global innovation, creating impactful digital
									solutions that transform businesses and improve lives.
								</p>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div variants={cardVariants}>
						<Card className="bg-white border-t2-blue/20 h-full">
							<CardHeader className="pb-0 pt-6 flex flex-col items-center">
								<motion.div
									className="rounded-full p-3 bg-t2-lightBlue/20 mb-4"
									whileHover={{ scale: 1.1, rotate: -5 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<CompassIcon className="h-6 w-6 text-t2-blue" />
								</motion.div>
								<CardTitle className="text-xl text-center text-dark-gray">
									Mission
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center pt-4">
								<p className="text-muted-foreground">
									We deliver exceptional software solutions by combining technical
									excellence with deep understanding of business needs, enabling
									our clients to succeed in the digital era.
								</p>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div variants={cardVariants}>
						<Card className="bg-white border-t2-blue/20 h-full">
							<CardHeader className="pb-0 pt-6 flex flex-col items-center">
								<motion.div
									className="rounded-full p-3 bg-t2-lightBlue/20 mb-4"
									whileHover={{ scale: 1.1, rotate: 5 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<HeartIcon className="h-6 w-6 text-t2-blue" />
								</motion.div>
								<CardTitle className="text-xl text-center text-dark-gray">
									Values
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center pt-4">
								<ul className="space-y-2 text-left">
									<li className="flex items-start gap-2">
										<span className="font-bold min-w-[80px] text-dark-gray">
											Excellence:
										</span>
										<span className="text-muted-foreground">
											Pursuing the highest standards in everything we do
										</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="font-bold min-w-[80px] text-dark-gray">
											Innovation:
										</span>
										<span className="text-muted-foreground">
											Embracing creativity and forward thinking
										</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="font-bold min-w-[80px] text-dark-gray">
											Integrity:
										</span>
										<span className="text-muted-foreground">
											Acting with honesty and transparency
										</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="font-bold min-w-[80px] text-dark-gray">
											Teamwork:
										</span>
										<span className="text-muted-foreground">
											Collaborating to achieve shared goals
										</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
