import HoverCard from "@/components/card";
import classNames from "classnames";
import { motion } from "framer-motion";
import {
	ClockIcon,
	GlobeIcon,
	GraduationCapIcon,
	HeartHandshakeIcon,
	TrendingUpIcon,
} from "lucide-react";

export default function WhyVietnam({ contentClass }) {
	// Animation variants
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
		<div
			className={classNames(
				"w-full bg-gradient-to-b from-[#f5faff] via-[#f7fafd] to-[#eaf3ff] flex flex-col justify-center items-center",
			)}
		>
			<div
				className={classNames("flex flex-col justify-center gap-15", {
					[contentClass]: contentClass,
				})}
			>
				<div className="flex flex-col items-center justify-center gap-6 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Why Vietnam?
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Vietnam has emerged as a leading technology hub in Southeast Asia, offering
						a unique combination of talent, cost-effectiveness, and innovation.
					</p>
				</div>

				<motion.div
					className="w-full flex justify-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<div className="flex flex-wrap justify-center items-center md:justify-center sm:justify-start gap-4">
						{[
							{
								icon: <GlobeIcon className="h-8 w-8 bg-t2-darkBlue rounded-full" />,
								title: "Advanced talent and technical skills",
								description:
									"A wealth of young IT talent who are sensitive to the latest technology and have excellent foreign language communication skills",
							},
							{
								icon: (
									<TrendingUpIcon className="h-8 w-8 bg-t2-darkBlue rounded-full" />
								),
								title: "Cost-effectiveness",
								description:
									"The same level of development manpower can be secured at a cost 25-55% lower than that of advanced countries, which is advantageous for budget optimization.",
							},
							{
								icon: (
									<GraduationCapIcon className="h-8 w-8 bg-t2-darkBlue rounded-full" />
								),
								title: "Geographic/Cultural Compatibility",
								description:
									"Time difference within 2 hours, historical and cultural similarities enable real-time communication and smooth collaboration",
							},
							{
								icon: <ClockIcon className="h-8 w-8 bg-t2-darkBlue rounded-full" />,
								title: "Stable political and economic environment",
								description:
									"With political and economic stability and growth potential, Vietnam is emerging as a global IT outsourcing destination",
							},
							{
								icon: (
									<HeartHandshakeIcon className="h-8 w-8 bg-t2-darkBlue rounded-full" />
								),
								title: "Experience in global collaboration",
								description:
									"Experience in collaboration with global companies from various countries including Korea, Japan, etc",
							},
						].map((card, idx) => (
							<motion.div
								key={`why-vietnam-card-${idx}`}
								variants={cardVariants}
								className={classNames(
									"w-9/10 sm:w-1/3 md:w-1/4 2xl:w-1/6 bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-stretch relative min-w-[270px] min-h-[340px]",
								)}
							>
								<HoverCard {...card} />
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
