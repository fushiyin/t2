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
			className="flex flex-col items-start space-y-4 border-1 border-[var(--color-dark-gray)] p-5 rounded-xl"
			variants={itemVariants}
		>
			<motion.div
				className="flex justify-center w-full"
				whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
				transition={{ type: "spring", stiffness: 300 }}
			>
				<div className=" rounded-full p-3 bg-dark-blue">
					<Icon
						className="h-6 w-6 "
						color="#ffffff"
					/>
				</div>
			</motion.div>
			<h3 className="text-2xl font-bold text-dark-gray text-center w-full">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
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
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark-gray">
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
