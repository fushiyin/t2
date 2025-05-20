import { motion } from "framer-motion";
import { GlobeIcon, ShieldCheckIcon, UsersIcon, ZapIcon } from "lucide-react";

export default function UniqueValue() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<div
			id="unique-value"
			className="bg-white max-w-[1440px] px-4 md:px-6 py-12 flex flex-col"
		>
			<div className="container px-4 md:px-6 h-full flex flex-col justify-center">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-t2-darkBlue">
							T2Soft&apos;s Unique Advantages
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							What sets us apart from other technology providers and makes us your
							ideal partner.
						</p>
					</div>
				</div>
				<motion.div
					className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 mt-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div
						className="flex flex-col items-start space-y-4"
						variants={itemVariants}
					>
						<motion.div
							className="rounded-full p-3 bg-t2-lightBlue/20"
							whileHover={{ scale: 1.1, rotate: 5 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<ShieldCheckIcon className="h-6 w-6 text-t2-blue" />
						</motion.div>
						<h3 className="text-2xl font-bold text-t2-darkBlue">Quality Assurance</h3>
						<p className="text-muted-foreground">
							Our rigorous quality control processes ensure that every line of code
							meets the highest standards. We implement comprehensive testing
							methodologies including unit testing, integration testing, and automated
							QA processes to deliver robust, bug-free solutions.
						</p>
					</motion.div>
					<motion.div
						className="flex flex-col items-start space-y-4"
						variants={itemVariants}
					>
						<motion.div
							className="rounded-full p-3 bg-t2-lightBlue/20"
							whileHover={{ scale: 1.1, rotate: -5 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<ZapIcon className="h-6 w-6 text-t2-blue" />
						</motion.div>
						<h3 className="text-2xl font-bold text-t2-darkBlue">Technical Expertise</h3>
						<p className="text-muted-foreground">
							Our team comprises specialists across various technologies and domains.
							From cloud architecture to AI implementation, mobile development to
							enterprise solutions, we bring deep technical knowledge and practical
							experience to every project.
						</p>
					</motion.div>
					<motion.div
						className="flex flex-col items-start space-y-4"
						variants={itemVariants}
					>
						<motion.div
							className="rounded-full p-3 bg-t2-lightBlue/20"
							whileHover={{ scale: 1.1, rotate: 5 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<UsersIcon className="h-6 w-6 text-t2-blue" />
						</motion.div>
						<h3 className="text-2xl font-bold text-t2-darkBlue">Cultural Alignment</h3>
						<p className="text-muted-foreground">
							We bridge Eastern dedication with Western business practices. Our team
							understands global business cultures while bringing Vietnamese values of
							diligence, precision, and commitment to excellence, creating a
							harmonious working relationship with clients worldwide.
						</p>
					</motion.div>
					<motion.div
						className="flex flex-col items-start space-y-4"
						variants={itemVariants}
					>
						<motion.div
							className="rounded-full p-3 bg-t2-lightBlue/20"
							whileHover={{ scale: 1.1, rotate: -5 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<GlobeIcon className="h-6 w-6 text-t2-blue" />
						</motion.div>
						<h3 className="text-2xl font-bold text-t2-darkBlue">Scalable Solutions</h3>
						<p className="text-muted-foreground">
							We design with growth in mind. Our architecture and development
							approaches prioritize scalability, allowing your solutions to grow
							seamlessly with your business. From startups to enterprises, we build
							technology that adapts to your evolving needs.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
