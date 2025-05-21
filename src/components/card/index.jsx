import { motion } from "framer-motion";

const HoverCard = ({
	icon,
	title,
	description,
	defaultBgColor = "bg-blue-500",
	hoverBgColor = "bg-white",
	defaultTextColor = "text-white",
	hoverTextColor = "text-gray-800",
	className = "",
}) => {
	return (
		<div className={`relative w-full h-full max-w-sm mx-auto ${className}`}>
			<motion.div
				className="relative overflow-hidden rounded-lg h-full"
				whileHover="hover"
				initial="default"
			>
				{/* card */}
				<motion.div
					variants={{
						default: { opacity: 1 },
						hover: { opacity: 0 },
					}}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className={`p-10 flex flex-col items-center text-center h-full ${defaultBgColor}`}
				>
					<div className="mb-4">{icon}</div>
					<motion.h2
						className={`text-2xl font-bold ${defaultTextColor}`}
						variants={{
							default: { y: 0 },
							hover: { y: -4 },
						}}
					>
						{title}
					</motion.h2>
				</motion.div>

				{/* card hover */}
				<motion.div
					variants={{
						default: {
							opacity: 0,
							y: 20,
						},
						hover: {
							opacity: 1,
							y: 0,
						},
					}}
					transition={{ duration: 0.3, ease: "easeOut" }}
					className={`absolute inset-0 p-6 shadow-lg rounded-lg ${hoverBgColor} shadow-xl border border-gray-200`}
				>
					<motion.p
						className={`text-base font-bold ${hoverTextColor}`}
						variants={{
							default: { opacity: 0 },
							hover: { opacity: 1 },
						}}
						transition={{ delay: 0.1 }}
					>
						{description}
					</motion.p>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default HoverCard;
