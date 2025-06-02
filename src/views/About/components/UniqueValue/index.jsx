import { motion } from "framer-motion";
import { GlobeIcon, ShieldCheckIcon, UsersIcon, ZapIcon } from "lucide-react";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2 },
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

const advantages = [
	{
		icon: ShieldCheckIcon,
		title: "Quality Assurance",
		description:
			"Our rigorous quality control processes ensure that every line of code meets the highest standards. We implement comprehensive testing methodologies including unit testing, integration testing, and automated QA processes to deliver robust, bug-free solutions.",
	},
	{
		icon: ZapIcon,
		title: "Technical Expertise",
		description:
			"Our team comprises specialists across various technologies and domains. From cloud architecture to AI implementation, mobile development to enterprise solutions, we bring deep technical knowledge and practical experience to every project.",
	},
	{
		icon: UsersIcon,
		title: "Cultural Alignment",
		description:
			"We bridge Eastern dedication with Western business practices. Our team understands global business cultures while bringing Vietnamese values of diligence, precision, and commitment to excellence, creating a harmonious working relationship with clients worldwide.",
	},
	{
		icon: GlobeIcon,
		title: "Scalable Solutions",
		description:
			"We design with growth in mind. Our architecture and development approaches prioritize scalability, allowing your solutions to grow seamlessly with your business. From startups to enterprises, we build technology that adapts to your evolving needs.",
	},
];

function AdvantageItem({ icon: Icon, title, description, index }) {
	return (
		<motion.div
			className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col gap-3 items-stretch relative sm:min-h-[300px] border-t"
			variants={itemVariants}
			whileHover={{ scale: 1.03 }}
			transition={{ type: "spring", stiffness: 200, damping: 15 }}
		>
			<motion.div
				className="flex justify-center w-full"
				whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
				transition={{ type: "spring", stiffness: 300 }}
			>
				<div className="bg-gray-100 p-3 rounded-full inline-flex items-center justify-center">
					<Icon className="h-8 w-8 rounded-full" />
				</div>
			</motion.div>
			<h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
			<p className="text-base text-gray-600 min-h-[96px]">{description}</p>
		</motion.div>
	);
}

export default function UniqueValue() {
	return (
		<div
			id="unique-value"
			className="max-w-[1440px] py-12 flex flex-col px-4 lg:px-0"
		>
			<div className="container h-full flex flex-col justify-center">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							We make sure to provide best services
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							What sets us apart from other technology providers and makes us your
							ideal partner.
						</p>
					</div>
				</div>
				<motion.div
					className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4 mt-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{advantages.map((item, index) => (
						<AdvantageItem
							key={item.title}
							{...item}
							index={index}
						/>
					))}
				</motion.div>
			</div>
		</div>
	);
}
