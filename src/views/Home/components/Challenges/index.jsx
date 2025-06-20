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
		<div className="flex flex-col rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 2xl:h-[180px] xl:h-[180px] lg:h-[160px]">
			{/* Header */}
			<h3 className="relative text-base md:text-3xl font-semibold h-[44px] bg-[#F0EFF5] rounded-t-3xl px-4">
				{/* Desktop macOS-style buttons */}
				<div className="hidden xl:flex items-center space-x-2 h-full">
					{/* Close */}
					<div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
						<svg
							className="w-2 h-2 text-white"
							viewBox="0 0 10 10"
							fill="currentColor"
						>
							<path
								d="M1 1L9 9M1 9L9 1"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
						</svg>
					</div>
				</div>
			</h3>
			<div
				className={`flex-1 flex justify-center items-center text-center gap-2 ${bgColor} text-base md:text-xl p-4 md:p-6 rounded-b-3xl`}
			>
				<p className="leading-snug">
					{item.map((part, idx) => (
						<span
							key={idx}
							className={`text-base md:text-xl korean-text ${part.className}`}
						>
							{part.text}
						</span>
					))}
				</p>
			</div>
		</div>
	);

	return (
		<section className="w-full h-full px-4 bg-white mt-2 relative">
			<div className="w-full h-full py-4 md:px-8 mx-auto max-w-[1440px] relative">
				{/* Title */}
				<div className="container mb-6 mt-4 w-full h-auto">
					<h2 className="text-[20px] md:text-5xl font-bold text-dark-gray font-sans leading-snug break-keep whitespace-normal break-words korean-text ">
						{t("challenges.title")}
					</h2>
					<h2 className="text-[20px] md:text-5xl font-bold text-dark-gray font-sans leading-snug pb-4 break-keep whitespace-normal break-words ">
						{t("challenges.title_2")}
					</h2>
					<p className="text-[16px] md:text-xl font-light text-muted-foreground leading-relaxed max-w-[900px] korean-text">
						{t("challenges.description")}
					</p>
				</div>

				{/* Desktop layout (≥1280px) */}
				<div className="relative h-[calc(100%-14rem)] max-w-[1440px] mx-auto hidden xl:block">
					<FloatingBox className="absolute w-full lg:w-[550px] top-0 lg:top-[10%] left-0 2xl:top-[10%] z-20">
						{renderBox(item1, "bg-dark-blue")}
					</FloatingBox>
					<FloatingBox className="absolute top-[17%] w-full lg:w-[550px] lg:top-0 xl:top-0 right-0 z-20">
						{renderBox(item2)}
					</FloatingBox>
					<FloatingBox className="absolute top-[35%] w-full lg:w-[550px] lg:top-[35%] xl:top-[40%] xl:left-[5%] 2xl:left-[5%] 2xl:top-[40%] z-20">
						{renderBox(item3)}
					</FloatingBox>
					<FloatingBox className="absolute top-[53%] w-full lg:w-[550px] lg:right-0 lg:top-[25%] xl:top-[30%] xl:right-[5%] 2xl:right-[5%] 2xl:top-[30%] z-20">
						{renderBox(item4, "bg-[#748FF8]")}
					</FloatingBox>
					<FloatingBox className="absolute bottom-[15%] w-full lg:w-[550px] lg:bottom-[25%] lg:right-0 2xl:bottom-[5%] xl:left-1/2 xl:bottom-[10%] transform xl:-translate-x-1/2 z-20">
						{renderBox(item5, "bg-dark-blue")}
					</FloatingBox>
				</div>

				{/* Mobile */}
				<div className="xl:hidden relative flex flex-col items-center bg-white overflow-hidden text-sm md:text-base">
					{/* Top row */}
					<div className="flex justify-between w-full mb-5 z-10 gap-x-2 px-2">
						{[
							{ data: item1, bg: "#162A7B", text: "white" },
							{ data: item2, bg: "#FFFFFF", text: "gray-700" },
						].map((box, idx) => (
							<div
								key={idx}
								className={`
				rounded-2xl shadow-md overflow-hidden border border-gray-200
				${idx === 0 ? "translate-y-[45px]" : ""}
			`}
								style={{
									backgroundColor: box.bg,
								}}
							>
								<div className="bg-[#F1F0F6] py-2 px-1">
									<div className="flex items-center justify-between px-2">
										<div className="flex items-center space-x-1">
											{/* Close */}
											<div className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center">
												<svg
													className="w-[6px] h-[6px] text-white"
													viewBox="0 0 10 10"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M2 2L8 8M8 2L2 8"
														stroke="currentColor"
														strokeWidth="1.2"
														strokeLinecap="round"
													/>
												</svg>
											</div>
										</div>
									</div>
								</div>

								<div className="px-4 py-4 text-[14px] md:px-12 md:py-12 md:text-[20px]">
									{box.data.map((part, idx) => (
										<span
											key={idx}
											className={`text-base md:text-xl korean-text ${part.className}`}
										>
											{part.text}
										</span>
									))}
								</div>
							</div>
						))}
					</div>

					{/* Middle row */}
					<div className="flex justify-between w-full mb-5 z-10 gap-x-2 px-2">
						{[
							{ data: item3, bg: "#FFFFFF", text: "text-gray-700" },
							{ data: item4, bg: "#738CF5", text: "text-white" },
						].map((box, idx) => (
							<div
								key={idx}
								className={`w-[45%] rounded-2xl shadow-md overflow-hidden border border-gray-200 
								${idx === 0 ? "translate-y-[35px]" : ""}`}
								style={{
									backgroundColor: box.bg,
									width: idx === 1 ? "55%" : "43%",
								}}
							>
								{/* Header bar with colored dots */}
								<div className="bg-[#F1F0F6] py-2 px-1">
									<div className="flex items-center justify-between px-2">
										<div className="flex items-center space-x-1">
											{/* Close */}
											<div className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center">
												<svg
													className="w-[6px] h-[6px] text-white"
													viewBox="0 0 10 10"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M2 2L8 8M8 2L2 8"
														stroke="currentColor"
														strokeWidth="1.2"
														strokeLinecap="round"
													/>
												</svg>
											</div>
										</div>
									</div>
								</div>

								{/* content */}
								<div
									className={`px-4 py-4 text-[14px] md:px-12 md:py-12 md:text-[20px] lg:px-12 lg:py-12`}
								>
									{box.data.map((part, idx) => (
										<span
											key={idx}
											className={`text-base md:text-xl ${part.className}`}
										>
											{part.text}
										</span>
									))}
								</div>
							</div>
						))}
					</div>

					{/* Bottom box */}
					<div className="w-[70%] rounded-2xl shadow-md overflow-hidden border border-gray-200 bg-[#162A7B] z-10">
						<div className="bg-[#F1F0F6] py-2 px-1">
							<div className="flex items-center justify-between px-2">
								<div className="flex items-center space-x-1">
									{/* Close */}
									<div className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center">
										<svg
											className="w-[6px] h-[6px] text-white"
											viewBox="0 0 10 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2 2L8 8M8 2L2 8"
												stroke="currentColor"
												strokeWidth="1.2"
												strokeLinecap="round"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>

						<div className="w-[85%] mx-auto rounded-2xl shadow-md overflow-hidden bg-[#162A7B]">
							<div className="px-4 py-4 md:px-12 md:py-12 mt-2">
								<p className="leading-snug text-white">
									{item5.map((part, idx) => (
										<span
											key={idx}
											className={`text-base md:text-xl korean-text ${part.className}`}
										>
											{part.text}
										</span>
									))}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Challenges;
