import { Card, CardContent } from "@/components/ui/card";
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
						<Card className="border-t2-paleBlue h-full">
							<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
								<div className="rounded-full p-3 bg-t2-lightBlue/20">
									<GlobeIcon className="h-6 w-6 text-t2-blue" />
								</div>
								<h3 className="text-xl font-bold text-t2-darkBlue">
									Strategic Location
								</h3>
								<p className="text-muted-foreground">
									Located in the heart of Southeast Asia with convenient time zone
									for global collaboration
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Card 2 */}
					<motion.div variants={cardVariants}>
						<Card className="border-t2-paleBlue h-full">
							<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
								<div className="rounded-full p-3 bg-t2-lightBlue/20">
									<TrendingUpIcon className="h-6 w-6 text-t2-blue" />
								</div>
								<h3 className="text-xl font-bold text-t2-darkBlue">
									Growing Tech Ecosystem
								</h3>
								<p className="text-muted-foreground">
									Rapidly expanding technology sector with government support and
									investment
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Card 3 */}
					<motion.div variants={cardVariants}>
						<Card className="border-t2-paleBlue h-full">
							<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
								<div className="rounded-full p-3 bg-t2-lightBlue/20">
									<GraduationCapIcon className="h-6 w-6 text-t2-blue" />
								</div>
								<h3 className="text-xl font-bold text-t2-darkBlue">
									Skilled Workforce
								</h3>
								<p className="text-muted-foreground">
									Young, educated population with strong STEM education and
									technical skills
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Card 4 */}
					<motion.div variants={cardVariants}>
						<Card className="border-t2-paleBlue h-full">
							<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
								<div className="rounded-full p-3 bg-t2-lightBlue/20">
									<ClockIcon className="h-6 w-6 text-t2-blue" />
								</div>
								<h3 className="text-xl font-bold text-t2-darkBlue">
									Cost Efficiency
								</h3>
								<p className="text-muted-foreground">
									Competitive labor costs with high-quality output and operational
									efficiency
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Card 5 */}
					<motion.div variants={cardVariants}>
						<Card className="border-t2-paleBlue h-full">
							<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
								<div className="rounded-full p-3 bg-t2-lightBlue/20">
									<HeartHandshakeIcon className="h-6 w-6 text-t2-blue" />
								</div>
								<h3 className="text-xl font-bold text-t2-darkBlue">
									Cultural Work Ethic
								</h3>
								<p className="text-muted-foreground">
									Strong commitment to quality, dedication, and continuous
									improvement
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
