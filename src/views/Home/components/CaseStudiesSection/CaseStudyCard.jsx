import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

const CaseStudyCard = ({ image, category, title, description, technologies }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", stiffness: 300 }}
			className="bg-white rounded-xl overflow-hidden border shadow-md w-[400px] max-md:w-[350px] max-sm:w-full "
		>
			<img
				src={image}
				alt="Case study"
				className="w-full h-[184px] rounded-t-[8px] object-cover"
			/>
			<div className="p-4">
				<span className="inline-block px-4 py-2 mb-6 text-sm font-bold text-foreground rounded-md border border-foreground">
					{category}
				</span>
				<h2 className="mb-4 text-xl font-bold leading-6 text-foreground">{title}</h2>
				<p className="mb-6 text-sm font-light leading-6 text-foreground">{description}</p>
				<p className="mb-4 text-sm font-light leading-6 text-foreground text-opacity-80">
					<span className="font-bold text-foreground">Technologies:</span>{" "}
					<span>{technologies}</span>
				</p>
				<div className="flex gap-2 items-center text-sm font-semibold text-foreground transition-all duration-200 hover:text-opacity-80">
					<button className="flex items-center gap-1 underline cursor-pointer px-2 py-1 rounded hover:bg-muted hover:scale-105 hover:underline transition-all duration-300 ease-in-out">
						More{" "}
						<ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default CaseStudyCard;
