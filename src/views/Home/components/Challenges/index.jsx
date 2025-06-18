import { useTranslation } from "react-i18next";
import FloatingBox from "./FloatingBox";

const Challenges = () => {
	const { t } = useTranslation();

	const item1 = t("challenges.item.1", { returnObjects: true });
	const item2 = t("challenges.item.2", { returnObjects: true });
	const item3 = t("challenges.item.3", { returnObjects: true });
	const item4 = t("challenges.item.4", { returnObjects: true });
	const item5 = t("challenges.item.5", { returnObjects: true });

	const renderBox = (item, bgColor = "bg-white") => (
		<div className="flex flex-col h-full rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
			{/* Header */}
			<h3 className="relative text-base md:text-3xl font-semibold h-[44px] bg-[#F0EFF5] rounded-t-3xl">
				<span className="absolute left-4 top-1/2 -translate-y-1/2 w-[24px] h-[24px] rounded-full bg-[#031F8D] text-white flex items-center justify-center text-sm md:text-xl font-bold leading-[1]">
					×
				</span>
			</h3>

			{/* Content */}
			<div
				className={`flex-1 flex justify-center items-center text-center gap-2 ${bgColor} text-base md:text-xl p-4 md:p-6 rounded-b-3xl`}
			>
				<p className="leading-snug">
					{item.map((part, idx) => (
						<span
							key={idx}
							className={`text-base md:text-xl ${part.className}`}
						>
							{part.text}
						</span>
					))}
				</p>
			</div>
		</div>
	);

	return (
		<section className="w-full min-h-fit md:min-h-screen px-4 bg-white mt-2 relative">
			<div className="w-full min-h-fit md:min-h-screen py-4 md:px-8 mx-auto max-w-[1440px] relative">
				{/* Title */}
				<div className="container mb-12 mt-4">
					<h2 className="text-[20px] md:text-5xl font-bold text-dark-gray font-sans leading-snug">
						{t("challenges.title")}
					</h2>
					<h2 className="text-[20px] md:text-5xl font-bold text-dark-gray font-sans leading-snug pb-4">
						{t("challenges.title_2")}
					</h2>
					<p className="text-[16px] md:text-xl font-light text-muted-foreground leading-relaxed max-w-[900px]">
						{t("challenges.description")}
					</p>
				</div>

				{/* Desktop layout */}
				<div className="relative max-w-[1440px] min-h-[700px] mx-auto hidden md:block">
					<FloatingBox className="absolute top-[5%] left-0 w-[420px] h-[160px] z-20">
						{renderBox(item1, "bg-dark-blue")}
					</FloatingBox>
					<FloatingBox className="absolute top-[-5%] right-0 w-[400px] h-[160px] z-20">
						{renderBox(item2)}
					</FloatingBox>
					<FloatingBox className="absolute top-[35%] left-[10%] w-[480px] h-[160px] z-20">
						{renderBox(item3)}
					</FloatingBox>
					<FloatingBox className="absolute top-[25%] right-[10%] w-[480px] h-[160px] z-20">
						{renderBox(item4, "bg-[#748FF8]")}
					</FloatingBox>
					<FloatingBox className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[570px] h-[160px] z-20">
						{renderBox(item5, "bg-dark-blue")}
					</FloatingBox>
				</div>

				{/* Mobile layout */}
				<div className="md:hidden px-1">
					<div className="flex flex-col rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 bg-[#748FF8]">
						{/* Header */}
						<h3 className="relative text-base font-semibold h-[44px] bg-[#F0EFF5] rounded-t-3xl">
							<span className="absolute left-4 top-1/2 -translate-y-1/2 w-[24px] h-[24px] rounded-full bg-[#031F8D] text-white flex items-center justify-center text-sm font-bold leading-[1]">
								×
							</span>
						</h3>

						{/* Content */}
						<div className="bg-[#6A5ACD] flex-1 flex flex-col justify-start text-left gap-4 text-white text-sm p-4 rounded-b-3xl">
							{[item1, item2, item3, item4, item5].map((item, idx) => (
								<div
									key={idx}
									className="flex items-start gap-2"
								>
									{/* Index number */}
									<div className="min-w-[20px] mt-0.5 font-bold">{idx + 1}.</div>

									{/* Text */}
									<div className="space-x-1 leading-snug">
										{item.map((part, i) => (
											<span
												key={i}
												className={`text-sm ${part.className}`}
											>
												{part.text}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Challenges;
