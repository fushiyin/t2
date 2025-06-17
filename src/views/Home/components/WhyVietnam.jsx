import bg_whyVietnam from "@/assets/img/why-vn-bg.png";
import HoverCard from "@/components/HoverCard";
import classNames from "classnames";
import { motion } from "framer-motion";
import { ArrowRight, Award, HandCoins, Handshake, HeartHandshakeIcon, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";
import bg_whyVietnam_2 from "@/assets/img/bg-text-why_vn.jpg";
import logo_t2 from "@/assets/logos/T2_light_Logo.png";
export default function WhyVietnam() {
	const { t } = useTranslation();
	const whyVietnam = [
		{
			title: t("why_vietnam.title"),
			description: t("why_vietnam.description"),
		},
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

	return (
		<div className="flex flex-col pt-6">
			<div className="w-full h-[250px] relative flex justify-center">
				<img
					src={bg_whyVietnam}
					alt=""
					className="w-full h-full object-cover"
				/>
				<div className="max-w-[1440px] absolute top-1/2 w-full transform -translate-y-1/2 flex items-center justify-between font-sans break-keep whitespace-normal break-words">
					<p className="text-white text-4xl font-bold max-w-[50%] leading-relaxed">
						{t("why_vietnam.text_header.title")}
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						className="absolute right-[5%] inline-flex cursor-pointer font-bold items-center gap-3 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg text-heading-black hover:text-white bg-gradient-to-r from-pale-blue to-light-blue rounded-xl hover:bg-primary/90 w-fit duration-300 transform hover:scale-105 shadow-xl"
					>
						{t("our_services.button_learn_more")}
						<ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
					</motion.button>
				</div>
			</div>

			<div className={classNames("w-full bg-white flex justify-center items-center")}>
				<div className="flex justify-center gap-15 container h-full py-10 max-w-[1440px]">
					<div className="flex items-center justify-center gap-6 text-center ">
						{/* Grid layout for whyVietnam items */}
						<div className="flex gap-8 w-full items-center">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
								{whyVietnam.map((item, idx) => (
									<HoverCard
										key={idx}
										icon={item.icon}
										title={item.title}
										description={item.description}
										className={`w-full h-[250px] flex flex-col items-center text-center p-4 ${
											item.icon ? "bg-gray-50 rounded-xl shadow-md" : ""
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full h-[320px] relative flex justify-center">
				<img
					src={bg_whyVietnam_2}
					alt=""
					className="w-full h-full object-cover"
				/>
				<div className="max-w-[1440px] absolute top-1/2 w-full transform -translate-y-1/2 flex items-center justify-between font-sans break-keep whitespace-normal break-words">
					<div className="px-4">
						<img
							src={logo_t2}
							className="w-[200px] object-cover mb-4"
						/>
						<p className="text-dark-gray text-4xl font-bold max-w-[80%] leading-relaxed">
							{t("why_vietnam.text_footer.title")}
						</p>
					</div>
					<p className="text-dark-gray text-xl font-bold max-w-[50%] leading-relaxed">
						{t("why_vietnam.text_footer.desc")}
					</p>
				</div>
			</div>
		</div>
	);
}
