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
		<div className="snap-section bg-white">
			<div className="container px-4 md:px-6 h-full flex flex-col justify-center">
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
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{/* Card 1 */}
					<motion.div variants={cardVariants}>
						<HoverCard
							icon={<GlobeIcon className="h-6 w-6 text-white" />}
							title="Advanced talent and technical skills"
							description="A wealth of young IT talent who are sensitive to the latest technology and have excellent foreign language communication skills"
						/>
					</motion.div>

					{/* Card 2 */}
					<motion.div variants={cardVariants}>
						<HoverCard
							icon={<TrendingUpIcon className="h-6 w-6 text-white" />}
							title="Cost-effectiveness"
							description="The same level of development manpower can be secured at a cost 25-55% lower than that of advanced countries, which is advantageous for budget optimization."
						/>
					</motion.div>

					{/* Card 3 */}
					<motion.div variants={cardVariants}>
						<HoverCard
							icon={<GraduationCapIcon className="h-6 w-6 text-white" />}
							title="Geographic/Cultural Compatibility"
							description="Time difference within 2 hours, historical and cultural similarities enable real-time communication and smooth collaboration"
						/>
					</motion.div>

					{/* Card 4 */}
					<motion.div variants={cardVariants}>
						<HoverCard
							icon={<ClockIcon className="h-6 w-6 text-white" />}
							title="Stable political and economic environment"
							description="With political and economic stability and growth potential, Vietnam is emerging as a global IT outsourcing destination"
						/>
					</motion.div>

					{/* Card 5 */}
					<motion.div variants={cardVariants}>
						<HoverCard
							icon={<HeartHandshakeIcon className="h-6 w-6 text-white" />}
							title="Experience in global collaboration"
							description="Experience in collaboration with global companies from various countries including Korea, Japan, etc"
						/>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
