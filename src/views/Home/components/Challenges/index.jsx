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
			<h3 className="relative text-3xl font-semibold h-[44px] bg-[#F0EFF5] rounded-t-3xl">
				<span className="absolute left-4 top-1/2 -translate-y-1/2 w-[24px] h-[24px] rounded-full bg-[#031F8D] text-white flex items-center justify-center text-[20px] font-bold leading-[1]">
					×
				</span>
			</h3>

			{/* Content */}
			<div
				className={`flex-1 flex justify-center items-center text-center gap-2 ${bgColor} text-2xl p-6 rounded-b-3xl`}
			>
				<p className="leading-snug">
					{item.map((part, idx) => (
						<span
							key={idx}
							className={part.className}
						>
							{part.text}
						</span>
					))}
				</p>
			</div>
		</div>
	);

	return (
		<section className="w-full min-h-screen px-4 py-16 bg-white mt-2 relative">
			<div className="w-full h-full py-16 px-8 mx-auto max-w-[1440px] relative">
				<div className="container mb-12 mt-4">
					<h2 className="text-5xl font-bold text-dark-gray font-sans break-keep whitespace-normal break-words leading-relaxed">
						{t("challenges.title")}
					</h2>
					<h2 className="text-5xl font-bold text-dark-gray font-sans break-keep whitespace-normal break-words leading-relaxed pb-4">
						{t("challenges.title_2")}
					</h2>
					<p className="text-xl font-light text-muted-foreground leading-relaxed max-w-[900px]">
						{t("challenges.description")}
					</p>
				</div>

				<div className="relative max-w-[1440px] min-h-[700px] mx-auto">
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
			</div>
		</section>
	);
};

export default Challenges;
