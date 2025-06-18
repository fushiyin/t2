// components/FloatingBox.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FloatingBox = ({ children, className, duration = 0.6 }) => {
	const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.3,
	});

	const variants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 50 },
	};

	return (
		<div
			ref={ref}
			className={className}
		>
			<AnimatePresence>
				{inView && (
					<motion.div
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={variants}
						transition={{ duration, ease: "easeOut" }}
						className="w-full h-full"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FloatingBox;
