import bg_banner from "@/assets/solution_img/SO_Solution.png";
import Video_SO from "@/assets/solution_img/Video_SO.mp4";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/sections/ContactCTA";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SOLUTION_DETAILS } from "@/constant/solution";
import useResponsive from "@/hooks/useResponsive";
import { idRouter } from "@/routes/idRouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import Lottie from "react-lottie";
import { useNavigate, useParams } from "react-router";
import Slide_Swiper from "./Slide_Swiper";

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

const SolutionDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const solution = SOLUTION_DETAILS.find((solution) => solution.id === parseInt(id));
	const [heroRef, heroInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const { ref: ref3, inView: inView3 } = useInView({
		threshold: 0.1,
	});

	const { t } = useTranslation();
	const { isMobile } = useResponsive();

	return (
		<div className="w-full flex flex-col items-center mt-[64px]">
			<div className="w-full relative">
				<img
					src={bg_banner}
					className={`w-full h-[500px] md:h-[800px] ${isMobile ? " flex justify-center" : ""}`}
				/>
				{/* overlay */}
				{/* <div className="absolute inset-0 bg-dark-blue/50" /> */}

				<div className="absolute max-w-[1440px] mx-auto inset-0 flex gap-4 flex-col items-center md:items-start justify-center">
					<p
						className={`text-xl text-white ${isMobile ? "" : ""}`}
						style={{
							textShadow:
								"0 2px 8px rgba(0,0,0,0.9), 0 0px 2px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.7)",
						}}
					>
						{solution.banner}
					</p>

					<p
						className={`text-left leading-relaxed font-sans break-keep whitespace-normal break-words ${isMobile ? "w-full" : "w-[55%]"}`}
					>
						{solution.title?.map((part, idx) => (
							<span
								key={idx}
								className={`text-3xl md:text-5xl text-center md:text-start font-bold block md:inline font-sans break-keep whitespace-normal break-words ${part.className}`}
								style={{
									textShadow:
										"0 2px 8px rgba(0,0,0,0.9), 0 0px 2px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.7)",
								}}
							>
								{part.text}
							</span>
						))}
					</p>

					<motion.p
						className=" text-center md:text-left w-full md:w-[50%] text-white text-base md:text-xl font-sans break-keep whitespace-normal break-words"
						initial="hidden"
						animate="visible"
						variants={fadeUp}
						style={{
							textShadow:
								"0 2px 8px rgba(0,0,0,0.9), 0 0px 2px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.7)",
						}}
					>
						{solution.description}
					</motion.p>
					<button
						type="button"
						className="hidden md:inline-flex cursor-pointer font-bold items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-base text-heading-black hover:text-white bg-gradient-to-r from-pale-blue to-light-blue rounded-lg hover:bg-primary/90 w-fit duration-300 transform hover:scale-105 shadow-lg font-sans break-keep whitespace-normal break-words"
						onClick={() => navigate(idRouter.contact)}
					>
						{solution.button}
						<ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
					</button>
				</div>
			</div>
			<div className="flex container max-w-[1440px] flex-wrap mx-auto md:relative mb-12 md:py-8">
				<div className="w-full md:w-[40%] flex flex-col flex-wrap items-center justify-center py-8">
					<div className="flex flex-col flex-wrap items-center justify-center md:absolute top-[0px] md:top-[-35%] left-0 z-10 shadow-none md:shadow-md rounded-2xl bg-white">
						{Object.values(solution.boxIntro).map((item, idx, arr) => (
							<React.Fragment key={idx}>
								<div className="flex flex-row items-center py-4 px-6 w-full md:max-w-[480px] gap-6 justify-center">
									<div className="w-[120px] flex-shrink-0">
										<Lottie
											options={{
												loop: true,
												autoplay: true,
												animationData: item.icon,
												rendererSettings: {
													preserveAspectRatio: "xMidYMid slice",
												},
											}}
											width={120}
											height={120}
										/>
									</div>
									<div className="flex flex-col items-start text-left w-full">
										<h3 className="text-xl font-bold mb-2 korean-text">
											{item.title}
										</h3>
										<p className="text-base text-gray-600 korean-text">
											{item.desc}
										</p>
									</div>
								</div>
								{idx !== arr.length - 1 && (
									<div className="w-[90%] border-b-2 border-[#D9D9D9] my-1 mx-auto" />
								)}
							</React.Fragment>
						))}
					</div>
				</div>
				<div className="w-full md:w-[60%] mb-4 md:mb-16 mt-4 h-auto flex flex-col text-center md:text-left items-center md:items-start mx-auto">
					<h2 className="text-3xl md:text-5xl font-bold text-dark-gray leading-snug font-sans break-keep whitespace-normal break-words mb-1">
						{solution.officeIntro.title_1}
					</h2>
					<h2 className="text-3xl mb-4 md:text-5xl font-bold text-dark-gray font-sans break-keep whitespace-normal break-words korean-text">
						{solution.officeIntro.title_2}
					</h2>
					<p className="text-base md:text-xl font-light text-dark-gray leading-relaxed w-[80%] md:w-full korean-text">
						{solution.officeIntro.desc}
					</p>
				</div>
			</div>
			<AnimatedSection className="w-full flex flex-col items-center">
				<motion.div
					ref={heroRef}
					initial={{ opacity: 0, y: -20 }}
					animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
					transition={{ duration: 0.6 }}
					className="relative flex flex-col items-center justify-center text-center h-[500px] md:h-[700px] w-full"
				>
					{/* Background image */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.6 }}
						className="absolute inset-0 w-full h-full bg-cover bg-center overflow-hidden"
					>
						<video
							src={Video_SO}
							autoPlay
							loop
							muted
							playsInline
							className="w-full h-full object-cover"
						/>
					</motion.div>
					{/* Overlay */}
					{/* <div className="absolute inset-0 bg-dark-blue/40" /> */}
					{/* Content */}
					<div className="relative z-10 flex flex-col justify-center items-center h-full  mx-auto text-center space-y-3">
						<h2
							className="px-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-sans break-keep whitespace-normal break-words text-white"
							style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
						>
							{solution.video.title_1?.map((part, idx) => (
								<span
									key={idx}
									className={`text-3xl md:text-5xl font-bold block md:inline font-sans break-keep whitespace-normal break-words leading-normal ${part.className}`}
								>
									{part.text}
								</span>
							))}
						</h2>
						<h2
							className="px-4 md:pb-4 text-3xl md:text-5xl font-bold tracking-tight font-sans break-keep whitespace-normal break-words text-white"
							style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
						>
							{solution.video.title_2?.map((part, idx) => (
								<span
									key={idx}
									className={`md:pb-4 text-3xl font-bold block md:inline font-sans break-keep whitespace-normal break-words leading-normal ${part.className}`}
								>
									{part.text}
								</span>
							))}
						</h2>
					</div>
				</motion.div>
			</AnimatedSection>
			{/* tab menu */}

			<div
				className={`w-full flex flex-col items-center mb-12 ${isMobile ? "mt-[-64px]" : "mt-[-103px]"} z-10`}
			>
				<Tabs
					defaultValue="tab1"
					className="w-full mx-auto max-w-[1440px]"
				>
					<TabsList className="h-auto w-full justify-center flex-wrap bg-transparent gap-2 md:gap-4">
						{Object.values(solution.menu_sub.header).map((label, index) => (
							<TabsTrigger
								key={index}
								value={`tab${index + 1}`}
								className="
									cursor-pointer
									rounded-none
									text-sm md:text-2xl
									px-2 md:px-8
									py-1 md:py-5
									min-h-[60px] md:min-h-[100px]
									flex items-center justify-center
									bg-[#1A318B] text-white
									hover:bg-light-blue hover:text-dark-gray
									transition-all
									data-[state=active]:bg-white
									data-[state=active]:text-dark-gray
									!rounded-tl-xl !rounded-tr-xl"
							>
								{label}
							</TabsTrigger>
						))}
					</TabsList>

					<TabsContent value="tab1">
						<div className="bg-white py-4">
							<div className="w-full mb-4 md:mb-16 mt-4 h-auto flex flex-col md:items-left justify-center">
								<h2
									className="mb-4 md:mb-6 text-3xl md:text-5xl font-bold text-center md:text-left text-dark-gray leading-snug font-sans break-keep whitespace-normal break-words korean-text"
									dangerouslySetInnerHTML={{ __html: solution.menu_sub[1].title }}
								/>
								<div
									className={`flex gap-4 ${isMobile ? "flex-wrap mb-12 px-4" : ""}`}
								>
									<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
										{Object.values(solution.menu_sub[1].item).map(
											(item, idx) => (
												<div
													key={idx}
													className="flex items-center gap-4 mb-4"
												>
													<div
														className="w-[100px] h-[100px] flex-shrink-0 justify-center flex items-center bg-[#2D54ED]"
														style={{
															clipPath:
																"polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0% 50%)",
															WebkitClipPath:
																"polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0% 50%)",
														}}
													>
														<Lottie
															options={{
																loop: true,
																autoplay: true,
																animationData: item.icon,
																rendererSettings: {
																	preserveAspectRatio:
																		"xMidYMid slice",
																},
															}}
															width={100}
															height={100}
														/>
													</div>
													<div>
														<h3 className="text-2xl font-bold mb-2 korean-text">
															{item.title}
														</h3>
														<p className="text-base text-gray-600 korean-text">
															{item.desc}
														</p>
													</div>
												</div>
											),
										)}
									</div>
									<div
										className={`flex flex-col gap-2 md:gap-4  ${isMobile ? "w-full" : "w-[500px] mt-[-30px]"}`}
									>
										<img
											className="shadow-lg rounded-2xl"
											src={solution.menu_sub[1].img_1}
										/>
										<img
											className="shadow-lg rounded-2xl"
											src={solution.menu_sub[1].img_2}
										/>
										<img
											className="shadow-lg rounded-2xl"
											src={solution.menu_sub[1].img_3}
										/>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>
					<TabsContent value="tab2">
						<div className="bg-white py-4">
							<div className="w-full mb-4 md:mb-16 mt-4 h-auto flex flex-col md:items-left justify-center">
								<h2
									className="mb-4 md:mb-6 text-[20px] md:text-5xl font-bold text-center md:text-left text-dark-gray leading-snug font-sans break-keep whitespace-normal break-words"
									dangerouslySetInnerHTML={{ __html: solution.menu_sub[2].title }}
								/>
								<div
									className={`flex gap-4 ${isMobile ? "flex-wrap mb-12 px-4" : ""}`}
								>
									<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
										{Object.values(solution.menu_sub[2].item).map(
											(item, idx) => (
												<div
													key={idx}
													className="flex items-center gap-4 mb-4"
												>
													<div
														className="w-[100px] h-[100px] flex-shrink-0 justify-center flex items-center bg-[#2D54ED]"
														style={{
															clipPath:
																"polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0% 50%)",
															WebkitClipPath:
																"polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0% 50%)",
														}}
													>
														<Lottie
															options={{
																loop: true,
																autoplay: true,
																animationData: item.icon,
																rendererSettings: {
																	preserveAspectRatio:
																		"xMidYMid slice",
																},
															}}
															width={64}
															height={64}
														/>
													</div>
													<div>
														<h3 className="text-2xl font-bold mb-2 korean-text">
															{item.title}
														</h3>
														<p className="text-base text-gray-600 korean-text">
															{item.desc}
														</p>
													</div>
												</div>
											),
										)}
									</div>
									<div
										className={`flex flex-col gap-2 md:gap-4 ${isMobile ? "w-full" : "w-[500px] mt-[-30px]"}`}
									>
										<div className="flex gap-4">
											<img
												className="w-1/2 h-[250px] shadow-lg"
												src={solution.menu_sub[2].img_1}
											/>
											<img
												className="w-1/2 h-[250px] shadow-lg"
												src={solution.menu_sub[2].img_2}
											/>
										</div>
										<img
											className="object-contain shadow-lg rounded-2xl"
											src={solution.menu_sub[2].img_3}
										/>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>
					<TabsContent value="tab3">
						<div className="bg-white py-4">
							<div className="w-full mb-4 md:mb-16 mt-4 h-auto flex flex-col md:items-left justify-center">
								<h2
									className="mb-4 md:mb-6 text-[20px] text-center md:text-left md:text-5xl font-bold text-dark-gray leading-snug font-sans break-keep whitespace-normal break-words"
									dangerouslySetInnerHTML={{ __html: solution.menu_sub[3].title }}
								/>
								<div
									className={`flex gap-4 ${isMobile ? "flex-wrap mb-12 px-4" : ""}`}
								>
									<div className="flex-1 grid grid-cols-1 md:grid-cols-1 gap-6">
										{Object.values(solution.menu_sub[3].item).map(
											(item, idx) => (
												<div
													key={idx}
													className="flex items-center gap-4 mb-4"
												>
													<div
														className="w-[100px] h-[100px] flex-shrink-0 justify-center flex items-center bg-[#2D54ED]"
														style={{
															clipPath:
																"polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0% 50%)",
															WebkitClipPath:
																"polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0% 50%)",
														}}
													>
														<Lottie
															options={{
																loop: true,
																autoplay: true,
																animationData: item.icon,
																rendererSettings: {
																	preserveAspectRatio:
																		"xMidYMid slice",
																},
															}}
															width={80}
															height={80}
														/>
													</div>
													<div>
														<h3 className="text-2xl font-bold mb-2 korean-text">
															{item.title}
														</h3>
														<p className="text-base text-gray-600 korean-text">
															{item.desc}
														</p>
													</div>
												</div>
											),
										)}
									</div>
									<div
										className={`flex flex-col gap-4 md:gap-6 justify-end items-end  ${isMobile ? "w-full" : "w-[500px]"}`}
									>
										<img
											className="shadow-lg"
											src={solution.menu_sub[3].img_1}
										/>
										<img
											className=" object-contain shadow-lg"
											src={solution.menu_sub[3].img_2}
										/>
										<img
											className=" object-contain shadow-lg"
											src={solution.menu_sub[3].img_3}
										/>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>
					<TabsContent value="tab4">
						<div className="bg-white py-4">
							<div className="w-full mb-4 md:mb-16 mt-4 h-auto flex flex-col md:items-left justify-center">
								<h2
									className="mb-4 md:mb-6 text-[20px] md:text-5xl text-center md:text-left font-bold text-dark-gray leading-snug font-sans break-keep whitespace-normal break-words"
									dangerouslySetInnerHTML={{ __html: solution.menu_sub[1].title }}
								/>
								<div
									className={`flex gap-4 ${isMobile ? "flex-wrap mb-12 px-4" : ""}`}
								>
									<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
										{Object.values(solution.menu_sub[4].item).map(
											(item, idx) => (
												<div
													key={idx}
													className="flex items-center gap-4 mb-4"
												>
													<div
														className="w-[100px] h-[100px] flex-shrink-0 justify-center flex items-center bg-[#2D54ED]"
														style={{
															clipPath:
																"polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0% 50%)",
															WebkitClipPath:
																"polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0% 50%)",
														}}
													>
														<Lottie
															options={{
																loop: true,
																autoplay: true,
																animationData: item.icon,
																rendererSettings: {
																	preserveAspectRatio:
																		"xMidYMid slice",
																},
															}}
															width={100}
															height={100}
														/>
													</div>
													<div>
														<h3 className="text-2xl font-bold mb-2 korean-text">
															{item.title}
														</h3>
														<p className="text-base text-gray-600 korean-text">
															{item.desc}
														</p>
													</div>
												</div>
											),
										)}
									</div>
									<div
										className={`flex flex-col gap-2 md:gap-4 ${isMobile ? "w-full" : "w-[500px]  mt-[-30px]"}`}
									>
										<img
											src={solution.menu_sub[1].img_1}
											className="shadow-lg rounded-2xl"
										/>
										<img
											src={solution.menu_sub[1].img_2}
											className="shadow-lg rounded-2xl"
										/>
										<img
											src={solution.menu_sub[1].img_3}
											className="shadow-lg rounded-2xl"
										/>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</div>

			<motion.section
				ref={ref3}
				className="w-full bg-white h-0 relative justify-center flex shadow-lg z-30"
				initial={{ opacity: 0, y: 20 }}
				animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
			>
				<motion.div
					className="container max-w-[1440px] mx-auto absolute md:rounded-3xl top-[-90px]"
					style={{
						background: "linear-gradient(90deg, #1A3087 0%, #2D54ED 100%)",
					}}
					initial={{ opacity: 0 }}
					animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className="w-full h-auto md:h-[200px] flex flex-col justify-center p-6 gap-4 md:gap-0">
						<h2
							className="w-full md:w-[60%] md:px-4 md:pb-4 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight font-sans break-keep whitespace-normal break-words text-white korean-text"
							style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
						>
							{t("solution.so.contact.title")}
						</h2>
						<p
							className="w-full md:w-[40%] md:px-4 text-base tracking-tighter font-sans break-keep whitespace-normal break-words text-white korean-text"
							style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
						>
							{t("solution.so.contact.desc")}
						</p>
						{isMobile && (
							<button
								type="button"
								className="cursor-pointer font-bold items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-base text-white bg-primary/90 rounded-lg hover:bg-[#1E399F] w-fit duration-300 transform hover:scale-105 shadow-lg korean-text"
							>
								<a
									href={idRouter?.contact}
									className="flex items-center gap-3"
									onClick={() => {
										console.log(idRouter?.contact);
									}}
								>
									{t("solution.so.contact.btn")}
									<ArrowRightIcon className="h-6 w-6 sm:h-5 sm:w-5 md:h-6 md:w-6" />
								</a>
							</button>
						)}
					</div>
					{!isMobile && (
						<div className="flex justify-center absolute right-[5%] top-[40%]">
							<button
								type="button"
								className="hidden md:inline-flex cursor-pointer font-bold items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-base text-white bg-primary/90 rounded-lg hover:bg-[#1E399F] w-fit duration-300 transform hover:scale-105 shadow-lg korean-text"
							>
								<a
									href={idRouter?.contact}
									className="flex items-center gap-3"
									onClick={() => {
										console.log(idRouter?.contact);
									}}
								>
									{t("solution.so.contact.btn")}
									<ArrowRightIcon className="h-6 w-6 sm:h-5 sm:w-5 md:h-6 md:w-6" />
								</a>
							</button>
						</div>
					)}
				</motion.div>
			</motion.section>

			<Slide_Swiper details={true} />

			<CTA />
		</div>
	);
};

export default SolutionDetail;
