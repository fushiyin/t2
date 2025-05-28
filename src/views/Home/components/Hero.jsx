import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { t } from "i18next";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const buttonVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				delay: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<>
			{/* Video Background */}
			<div className="absolute inset-0 w-full h-full">
				<video
					autoPlay
					loop
					muted
					playsInline
					className="w-full h-full object-cover"
				>
					<source
						src="https://www.var-meta.com/images/home/video-hero.webm"
						type="video/webm"
					/>
					{/* Fallback image if video doesn't load */}
					<img
						src="/placeholder.svg?height=1080&width=1920"
						alt="Technology background"
						className="w-full h-full object-cover"
					/>
				</video>
				{/* Overlay for better text readability */}
				<motion.div
					className="absolute inset-0 bg-dark-blue/50"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				></motion.div>
				{/* <div className="absolute bottom-0 left-0 right-0">
					<PartnerLogos />
				</div> */}
			</div>
			{/* Content */}
			<div className="container relative z-10 flex items-center">
				<motion.div
					className="flex flex-col items-center space-y-6 text-center w-full"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<div className="space-y-4">
						<motion.h1
							className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white"
							variants={itemVariants}
						>
							{t("slogan")}
						</motion.h1>
						<motion.p
							className="mx-auto max-w-[1100px] text-gray-200 md:text-xl"
							variants={itemVariants}
						>
							{t("description")}
						</motion.p>
					</div>
					<motion.div
						className="space-x-4"
						variants={buttonVariants}
					>
						<Button
							asChild
							size="lg"
							className="rounded-md bg-dark-blue text-white hover:bg-light-blue"
						>
							<Link
								href="/contact"
								className="flex items-center gap-2"
							>
								Contact Us <ArrowRightIcon className="h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>
			{/* Partner Logos */}
		</>
	);
}
