/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { useOnboarding } from "./OnBoardingProvider";

const Loading = () => {
	const { isLoading, setIsLoading } = useOnboarding();
	const colors = ["#03071F", "#090F33", "#101944", "#19286D", "#DAE4ED"];

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<div className="flex space-x-3">
						{colors.map((color, index) => (
							<motion.div
								key={index}
								className="w-4 h-4 rounded-full"
								style={{ backgroundColor: color }}
								animate={{
									scale: [1, 1.5, 1],
									opacity: [0.7, 1, 0.7],
								}}
								transition={{
									duration: 1.2,
									repeat: Number.POSITIVE_INFINITY,
									delay: index * 0.1,
									ease: "easeInOut",
								}}
							/>
						))}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Loading;
