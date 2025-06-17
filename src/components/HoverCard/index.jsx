import { motion } from "framer-motion";

const HoverCard = ({ icon, title, description, className = "" }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className={`flex flex-col ${icon ? "items-center text-center" : "items-start text-left"} w-full h-full gap-4 ${className}`}
		>
			{icon && (
				<div className="bg-gradient-to-r from-pale-blue to-light-blue p-3 rounded-full inline-flex items-center justify-center text-white">
					{icon}
				</div>
			)}
			<div>
				<h2
					className={`font-semibold mb-2 text-gray-900 sm:min-h-[48px] ${
						icon ? "text-xl" : "h-[48px] text-5xl font-bold mb-6"
					}`}
				>
					{title}
				</h2>
				{!icon && (
					<div className="flex items-center gap-2 mb-4">
						<div className="w-[10px] h-[10px] rounded-full bg-gradient-to-r from-pale-blue to-light-blue"></div>
						<div className="w-[10px] h-[10px] rounded-full bg-gradient-to-r from-pale-blue to-light-blue"></div>
						<div className="w-[10px] h-[10px] rounded-full bg-gradient-to-r from-pale-blue to-light-blue"></div>
						<div className="h-[10px] w-1/2 bg-gradient-to-r from-pale-blue to-light-blue"></div>
					</div>
				)}
				<p className={`text-gray-900 min-h-[96px] ${icon ? "text-base" : "text-lg mt-4"}`}>
					{description}
				</p>
			</div>
		</motion.div>
	);
};

export default HoverCard;
