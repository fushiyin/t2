import HoverCard from "@/components/card";
import { motion } from "framer-motion";
import {
	ClockIcon,
	GlobeIcon,
	GraduationCapIcon,
	HeartHandshakeIcon,
	TrendingUpIcon,
} from "lucide-react";

export default function WhyVietnam() {
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
		<div className="snap-section h-full w-full bg-gradient-to-b from-[#f5faff] via-[#f7fafd] to-[#eaf3ff] flex flex-col justify-center items-center">
			<div className="container px-4 py-10 md:px-6 h-full flex flex-col justify-center gap-15">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-t2-darkBlue">
							Why Vietnam?
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Vietnam has emerged as a leading technology hub in Southeast Asia,
							offering a unique combination of talent, cost-effectiveness, and
							innovation.
						</p>
					</div>
				</div>

				<motion.div
					className="w-full flex justify-center mt-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<div className="w-full bg-white/80 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
						{[
							{
								icon: (
									<GlobeIcon className="h-12 w-12 bg-t2-darkBlue rounded-full" />
								),
								title: "Advanced talent and technical skills",
								description:
									"A wealth of young IT talent who are sensitive to the latest technology and have excellent foreign language communication skills",
							},
							{
								icon: (
									<TrendingUpIcon className="h-12 w-12 bg-t2-darkBlue rounded-full" />
								),
								title: "Cost-effectiveness",
								description:
									"The same level of development manpower can be secured at a cost 25-55% lower than that of advanced countries, which is advantageous for budget optimization.",
							},
							{
								icon: (
									<GraduationCapIcon className="h-12 w-12 bg-t2-darkBlue rounded-full" />
								),
								title: "Geographic/Cultural Compatibility",
								description:
									"Time difference within 2 hours, historical and cultural similarities enable real-time communication and smooth collaboration",
							},
							{
								icon: (
									<ClockIcon className="h-12 w-12 bg-t2-darkBlue rounded-full" />
								),
								title: "Stable political and economic environment",
								description:
									"With political and economic stability and growth potential, Vietnam is emerging as a global IT outsourcing destination",
							},
							{
								icon: (
									<HeartHandshakeIcon className="h-12 w-12 bg-t2-darkBlue rounded-full" />
								),
								title: "Experience in global collaboration",
								description:
									"Experience in collaboration with global companies from various countries including Korea, Japan, etc",
							},
						].map((card, idx, arr) => (
							<div
								key={idx}
								className="flex-1 flex flex-col items-stretch relative min-w-[220px] min-h-[320px] h-full"
							>
								<motion.div
									variants={cardVariants}
									className="p-6 h-full flex"
								>
									<HoverCard {...card} />
								</motion.div>
								{/* Line phân cách giữa các card, chỉ hiện trên md trở lên */}
								{idx < arr.length - 1 && (
									<div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 h-[80%] w-px bg-gray-200"></div>
								)}
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
