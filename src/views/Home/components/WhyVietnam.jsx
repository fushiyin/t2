import HoverCard from "@/components/card";
import classNames from "classnames";
import { motion } from "framer-motion";
import { Award, HandCoins, Handshake, HeartHandshakeIcon, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhyVietnam({ contentClass }) {
	const { t } = useTranslation();
	const whyVietnam = [
		{
			icon: <Award className="h-8 w-8 rounded-full" />,
			title: t("why_vietnam.talent.title"),
			description: t("why_vietnam.talent.description"),
		},
		{
			icon: <HandCoins className="h-8 w-8 rounded-full" />,
			title: t("why_vietnam.cost.title"),
			description: t("why_vietnam.cost.description"),
		},
		{
			icon: <Handshake className="h-8 w-8 rounded-full" />,
			title: t("why_vietnam.geo_n_culture.title"),
			description: t("why_vietnam.geo_n_culture.description"),
		},
		{
			icon: <Scale className="h-8 w-8 rounded-full" />,
			title: t("why_vietnam.politic_n_eco.title"),
			description: t("why_vietnam.politic_n_eco.description"),
		},
		{
			icon: <HeartHandshakeIcon className="h-8 w-8 rounded-full" />,
			title: t("why_vietnam.experience.title"),
			description: t("why_vietnam.experience.description"),
		},
	];
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<div className={classNames("w-full bg-white flex flex-col justify-center items-center")}>
			<div
				className={classNames("flex flex-col justify-center gap-15", {
					[contentClass]: contentClass,
				})}
			>
				<div className="flex flex-col items-center justify-center gap-6 text-center md:px-12">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						{t("why_vietnam.title")}
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-base/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
						{t("why_vietnam.description")}
					</p>
				</div>

				<motion.div
					className="w-full flex justify-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<div className="flex flex-wrap justify-center items-center md:justify-center sm:justify-start gap-4">
						{whyVietnam?.map((card, idx) => (
							<motion.div
								key={`why-vietnam-card-${idx}`}
								variants={cardVariants}
								whileHover={{ scale: 1.03 }}
								transition={{ type: "spring", stiffness: 200, damping: 15 }}
								className={classNames(
									"w-9/10 sm:w-1/3 md:w-1/4 2xl:w-1/6 bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-stretch relative sm:min-w-[250px] sm:min-h-[330px] border-t",
								)}
							>
								<HoverCard {...card} />
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
