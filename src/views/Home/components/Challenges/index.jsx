import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Challenges = () => {
	const { t } = useTranslation();

	const box1Ref = useRef(null);
	const box2Ref = useRef(null);
	const box3Ref = useRef(null);
	const box4Ref = useRef(null);
	const box5Ref = useRef(null);
	const titleRef = useRef(null);

	const box1InView = useInView(box1Ref, { amount: 0.2 });
	const box2InView = useInView(box2Ref, { amount: 0.2 });
	const box3InView = useInView(box3Ref, { amount: 0.2 });
	const box4InView = useInView(box4Ref, { amount: 0.2 });
	const box5InView = useInView(box5Ref, { amount: 0.2 });
	const titleInView = useInView(titleRef, { amount: 0.2 });

	const item1 = t("challenges.item.1", { returnObjects: true });
	const item2 = t("challenges.item.2", { returnObjects: true });
	const item3 = t("challenges.item.3", { returnObjects: true });
	const item4 = t("challenges.item.4", { returnObjects: true });
	const item5 = t("challenges.item.5", { returnObjects: true });

	return (
		<section className="w-full min-h-screen px-4 py-16 bg-white mt-2 relative">
			<div className="w-full h-full py-16 px-8 mx-auto max-w-[1440px] relative">
				{/* Header Section */}
				<motion.div
					ref={titleRef}
					initial={{ opacity: 0, visibility: "hidden" }}
					animate={
						titleInView
							? { opacity: 1, visibility: "visible" }
							: { opacity: 0, visibility: "hidden" }
					}
					transition={{ duration: 0.5 }}
					className="container mb-12 mt-4"
				>
					<div className="flex flex-col">
						<h2 className="text-5xl font-bold text-dark-gray font-sans break-keep whitespace-normal break-words leading-relaxed ">
							{t("challenges.title")}
						</h2>
						<h2 className="text-5xl font-bold text-dark-gray font-sans break-keep whitespace-normal break-words leading-relaxed pb-4">
							{t("challenges.title_2")}
						</h2>
						<p className="text-xl font-light text-muted-foreground leading-relaxed max-w-[900px]">
							{t("challenges.description")}
						</p>
					</div>
				</motion.div>

				{/* Floating Boxes Section */}
				<div className="relative max-w-[1440px] min-h-[700px] mx-auto">
					{/* Box 1 - Top Left */}
					<motion.div
						ref={box1Ref}
						initial={{ opacity: 0, y: 50, visibility: "hidden" }}
						animate={
							box1InView
								? { opacity: 1, y: 0, visibility: "visible" }
								: { opacity: 0, y: 50, visibility: "hidden" }
						}
						transition={{ duration: 0.7 }}
						className="absolute top-[5%] left-0 w-[420px] h-[160px] bg-white rounded-3xl shadow-lg border border-gray-200 z-20 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
					>
						<h3 className="text-xl font-semibold h-[44px] bg-[#F0EFF5] rounded-t-3xl" />
						<div className="h-full flex items-center justify-between bg-dark-blue rounded-b-3xl px-8">
							<div className="flex flex-col text-left gap-2">
								<p className="font-sans break-keep whitespace-normal break-words">
									{item1.map((part, idx) => (
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
					</motion.div>

					{/* Box 2 - Top Right */}
					<motion.div
						ref={box2Ref}
						initial={{ opacity: 0, y: 50, visibility: "hidden" }}
						animate={
							box2InView
								? { opacity: 1, y: 0, visibility: "visible" }
								: { opacity: 0, y: 50, visibility: "hidden" }
						}
						transition={{ duration: 0.7 }}
						className="absolute top-[-5%] right-0 w-[400px] h-[160px] bg-white rounded-3xl shadow-lg border border-gray-200 z-20 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
					>
						<h3 className="text-xl font-semibold h-[44px] bg-[#F0EFF5] rounded-t-3xl" />
						<div className="h-full flex flex-col text-center gap-2 bg-white rounded-b-3xl p-4">
							<p className="font-sans break-keep whitespace-normal break-words">
								{item2.map((part, idx) => (
									<span
										key={idx}
										className={part.className}
									>
										{part.text}
									</span>
								))}
							</p>
						</div>
					</motion.div>

					{/* Box 3 - Middle Left */}
					<motion.div
						ref={box3Ref}
						initial={{ opacity: 0, y: 50, visibility: "hidden" }}
						animate={
							box3InView
								? { opacity: 1, y: 0, visibility: "visible" }
								: { opacity: 0, y: 50, visibility: "hidden" }
						}
						transition={{ duration: 0.7 }}
						className="absolute top-[35%] left-[10%] w-[480px] h-[160px] bg-white rounded-3xl shadow-lg border border-gray-200 z-20 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
					>
						<h3 className="text-xl font-semibold h-[44px] bg-[#F0EFF5] rounded-t-3xl" />
						<div className="h-full flex flex-col text-center gap-2 bg-white rounded-b-3xl p-8">
							<p className="font-sans break-keep whitespace-normal break-words">
								{item3.map((part, idx) => (
									<span
										key={idx}
										className={part.className}
									>
										{part.text}
									</span>
								))}
							</p>
						</div>
					</motion.div>

					{/* Box 4 - Middle Right */}
					<motion.div
						ref={box4Ref}
						initial={{ opacity: 0, y: 50, visibility: "hidden" }}
						animate={
							box4InView
								? { opacity: 1, y: 0, visibility: "visible" }
								: { opacity: 0, y: 50, visibility: "hidden" }
						}
						transition={{ duration: 0.7 }}
						className="absolute top-[25%] right-[10%] w-[480px] h-[160px] bg-white rounded-3xl shadow-lg border border-gray-200 z-20 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
					>
						<h3 className="text-xl font-semibold h-[44px] bg-[#F0EFF5] rounded-t-3xl" />
						<div className="h-full flex flex-col text-center gap-2 bg-[#748FF8] rounded-b-3xl p-8">
							<p className="font-sans break-keep whitespace-normal break-words">
								{item4.map((part, idx) => (
									<span
										key={idx}
										className={part.className}
									>
										{part.text}
									</span>
								))}
							</p>
						</div>
					</motion.div>

					{/* Box 5 - Bottom Center */}
					<motion.div
						ref={box5Ref}
						initial={{ opacity: 0, y: 50, visibility: "hidden" }}
						animate={
							box5InView
								? { opacity: 1, y: 0, visibility: "visible" }
								: { opacity: 0, y: 50, visibility: "hidden" }
						}
						transition={{ duration: 0.7 }}
						className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[570px] h-[160px] bg-white rounded-3xl shadow-lg border border-gray-200 z-20 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
					>
						<h3 className="text-xl font-semibold h-[44px] bg-[#F0EFF5] rounded-t-3xl" />
						<div className="h-full flex flex-col text-center gap-2 bg-dark-blue rounded-b-3xl p-8">
							<p className="font-sans break-keep whitespace-normal break-words">
								{item5.map((part, idx) => (
									<span
										key={idx}
										className={part.className}
									>
										{part.text}
									</span>
								))}
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Challenges;
