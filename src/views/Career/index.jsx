import { Card, CardContent } from "@/components/ui/card";
import { FORM_CV, OPEN_POSITIONS } from "@/constant/career";
import { motion } from "framer-motion";
import { BookOpen, Layers, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

export default function Careers() {
	const { t } = useTranslation();

	const career_items = [
		{
			icon: (
				<Users
					className="text-dark-gray"
					size={24}
				/>
			),
			title: t("careers.collaborative"),
			desc: t("careers.collaborative_description"),
		},
		{
			icon: (
				<BookOpen
					className="text-dark-gray"
					size={24}
				/>
			),
			title: t("careers.learning"),
			desc: t("careers.learning_description"),
		},
		{
			icon: (
				<Layers
					className="text-dark-gray"
					size={24}
				/>
			),
			title: t("careers.challenging"),
			desc: t("careers.challenging_description"),
		},
	];

	return (
		<div className="flex flex-col items-center justify-center mx-auto">
			<div className="container py-12 max-w-[1440px] md:pl-6 md:pr-6 px-4 lg:px-6 xl:px-6">
				<motion.h1
					className="w-full text-4xl text-center font-bold mb-4 font-sans break-keep whitespace-normal break-words"
					initial="hidden"
					animate="visible"
					variants={fadeUp}
				>
					{t("careers.title")}
				</motion.h1>

				<motion.p
					className="w-full text-center text-muted-foreground text-lg mb-8 font-sans break-keep whitespace-normal break-words"
					initial="hidden"
					animate="visible"
					variants={fadeUp}
				>
					{t("careers.description")}
				</motion.p>

				<motion.div
					className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{career_items.map((item, index) => (
						<motion.div
							key={index}
							variants={fadeUp}
							whileHover={{ scale: 1.03 }}
							transition={{ type: "spring", stiffness: 200, damping: 15 }}
						>
							<Card className="hover:shadow-lg transition-shadow  bg-white/80 border-t shadow-lg">
								<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
									<div className="rounded-full p-3 bg-gray-100">{item.icon}</div>
									<h3 className="text-2xl text-dark-gray font-bold font-sans break-keep whitespace-normal break-words">
										{item.title}
									</h3>
									<p className="text-muted-foreground font-sans break-keep whitespace-normal break-words">
										{item.desc}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<motion.h2
					className="text-3xl text-dark-gray font-bold mb-6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeUp}
				>
					{t("careers.open_positions")}
				</motion.h2>

				<motion.div
					className="space-y-6 mb-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{OPEN_POSITIONS.map((position, index) => (
						<motion.div
							key={index}
							variants={fadeUp}
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 180, damping: 16 }}
						>
							<Card className="hover:shadow-md transition-shadow bg-white/80 border-t shadow-lg">
								<CardContent className="p-6">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
										<div className="flex-1">
											<h3 className="text-xl font-bold">{position.title}</h3>
											<div className="flex flex-wrap gap-2 mt-2">
												<span className="inline-flex text-dark-gray items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
													{position.location}
												</span>
												<span className="inline-flex text-dark-gray items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
													{position.type}
												</span>
												<span className="inline-flex text-dark-gray items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
													{position.site}
												</span>
											</div>
											<p className="text-muted-foreground mt-2">
												{position.description}
											</p>
										</div>
										<motion.button
											className="md:item-center cursor-pointer bg-primary lg:w-[130px] md:w-[130px] text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition"
											whileTap={{ scale: 0.95 }}
											onClick={() => window.open(FORM_CV)}
										>
											Apply Now
										</motion.button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>

			<motion.div
				className="w-full bg-muted py-12 px-6"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={fadeUp}
			>
				<div className="max-w-[1440px] flex flex-col md:flex-row mx-auto space-y-6 md:space-y-0 md:space-x-6 sm:w-full">
					<motion.div className="flex-1 space-y-4">
						<h2 className="text-3xl text-dark-gray font-bold font-sans break-keep whitespace-normal break-words">
							{t("careers.title_cv")}
						</h2>
						<p className="text-muted-foreground text-lg font-sans break-keep whitespace-normal break-words">
							{t("careers.description_cv")}
						</p>
					</motion.div>

					<div className="flex-1 flex xl:justify-end lg:justify-end md:justify-end sm:pt-6 md:p-6 lg:p-0 xl:p-0 2xl:p-6 items-center xl:w-fix p-0 sm:w-full">
						<div className="w-full lg:w-[130px] md:w-[130px] sm:w-full">
							<motion.a
								onClick={() => window.open(FORM_CV)}
								className="w-full bg-primary text-center text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 inline-block cursor-pointer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.97 }}
								transition={{ type: "spring", stiffness: 200, damping: 15 }}
								layout
							>
								Send CV
							</motion.a>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
