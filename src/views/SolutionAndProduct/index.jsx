import Development from "@/assets/solution_img/Development.png";
import Maintenance from "@/assets/solution_img/Maintenance.png";
import Requirement from "@/assets/solution_img/Requirement.jpg";
import SO_Solution from "@/assets/solution_img/SO_Solution.png";
import Training from "@/assets/solution_img/Training.png";
import video_solution from "@/assets/video/Solution.mp4";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/sections/ContactCTA";
import { SECTIONS_KEY } from "@/constant/sideNavigation";
import useResponsive from "@/hooks/useResponsive";
import { idRouter } from "@/routes/idRouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { sectionClass } from "../Home";
import CompetitiveEdges from "../Home/components/CompetitiveEdges";

const SOLUTION_IMAGES = [
	{
		image: Requirement,
		title: (t) => t("solution.implementation.requirement.title"),
		description: (t) =>
			t("solution.implementation.requirement.description", { returnObjects: true }),
	},
	{
		image: Development,
		title: (t) => t("solution.implementation.development.title"),
		description: (t) =>
			t("solution.implementation.development.description", { returnObjects: true }),
	},
	{
		image: Training,
		title: (t) => t("solution.implementation.deploy_training.title"),
		description: (t) =>
			t("solution.implementation.deploy_training.description", { returnObjects: true }),
	},
	{
		image: Maintenance,
		title: (t) => t("solution.implementation.maintenance.title"),
		description: (t) =>
			t("solution.implementation.maintenance.description", { returnObjects: true }),
	},
];

export default function SolutionAndProduct() {
	const { t } = useTranslation();
	const { isMobile } = useResponsive();

	const [titleRef, titleInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const { ref: ref1, inView: inView1 } = useInView({
		threshold: 0.1,
	});

	const { ref: ref2, inView: inView2 } = useInView({
		threshold: 0.1,
	});

	const { ref: ref3, inView: inView3 } = useInView({
		threshold: 0.1,
	});

	const { ref: ref4, inView: inView4 } = useInView({
		threshold: 0.1,
	});

	const navigate = useNavigate();

	const products = [
		{
			id: 1,
			name: t("solution.product.so.title"),
			description: t("solution.product.so.description"),
			image: SO_Solution,
		},
	];

	return (
		<div className="w-full mt-[64px]">
			<AnimatedSection className="w-full flex flex-col items-center">
				<motion.div
					ref={titleRef}
					initial={{ opacity: 0, y: -20 }}
					animate={
						isMobile
							? { opacity: 1, y: 0 }
							: titleInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: -20 }
					}
					transition={{ duration: 0.6 }}
					className="relative mb-8 flex flex-col items-center justify-center text-center h-[300px] md:h-[500px] w-full"
				>
					{/* video */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={
							isMobile
								? { opacity: 1 }
								: titleInView
									? { opacity: 1 }
									: { opacity: 0 }
						}
						transition={{ duration: 0.6 }}
						className="absolute inset-0 w-full h-full bg-cover bg-center overflow-hidden"
					>
						<video
							src={video_solution}
							autoPlay
							loop
							muted
							playsInline
							className="w-full h-full object-cover"
						/>
					</motion.div>
					{/* Overlay */}
					{/* <div className="absolute inset-0 bg-dark-blue/30" /> */}
					{/* Content */}
					<div className="relative z-10 flex flex-col justify-center items-center h-full max-w-3xl mx-auto text-center space-y-3">
						<motion.h2
							className="leading-relaxed px-8 md:pb-4 text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight font-sans break-keep whitespace-normal break-words text-white "
							style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)", lineHeight: "1.2" }}
							dangerouslySetInnerHTML={{ __html: t("solution.video.title") }}
						/>

						<p
							className="px-4 text-xl md:text-2xl tracking-tighter font-sans break-keep whitespace-normal break-words text-white "
							style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
						>
							{t("solution.video.sublime")}
						</p>
					</div>
				</motion.div>
			</AnimatedSection>
			<motion.section
				ref={ref1}
				className="w-full pt-4 pb-4 bg-background"
				initial={{ opacity: 0, y: 20 }}
				animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
			>
				<motion.div
					className="container max-w-[1440px] mx-auto"
					initial={{ opacity: 0 }}
					animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Swiper
						modules={[Navigation, Pagination, Autoplay, EffectFade]}
						spaceBetween={20}
						slidesPerView={1}
						navigation={false}
						allowTouchMove={false}
						pagination={{
							clickable: true,
							bulletClass: "swiper-pagination-bullet",
							bulletActiveClass: "swiper-pagination-bullet-active",
						}}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
						}}
						effect="fade"
						fadeEffect={{
							crossFade: true,
						}}
						className="w-full h-[600px] md:h-[500px] pb-12 sm:pb-16"
					>
						{products.map((product) => (
							<SwiperSlide key={product.id}>
								<div className="relative flex flex-col items-center md:flex-row h-full bg-transparent rounded-3xl overflow-hidden">
									{/* Image Section */}
									<div className="w-[95%] md:w-[60%] h-[80%] md:h-[95%] relative flex">
										{!isMobile && (
											<div
												className="absolute left-[80px] top-[45%] -translate-y-1/2 w-[20px] bg-[#000]"
												style={{ height: "60%" }}
											/>
										)}
										<div
											className={`absolute ${isMobile ? "left-0 w-full" : "left-[100px] w-[85%]"} h-full md:h-[90%] flex items-center justify-center bg-white shadow-xl rounded-3xl overflow-hidden mx-auto`}
										>
											<img
												src={product.image}
												alt={product.name}
												className="object-cover w-[95%] h-[93%] rounded-3xl"
											/>
										</div>
									</div>

									{/* Content Section */}
									<div className="w-full md:w-[50%] h-[60%] md:h-[90%] px-4 md:pl-8 md:pr-8 pt-4 md:pt-8 pb-4 md:pb-8 gap-4 flex flex-col md:px-0 ">
										<div className="flex items-center space-x-3">
											<div className="flex space-x-1">
												<div className="w-8 h-4 bg-gradient-to-r from-pale-blue to-light-blue transform -skew-x-[30deg]"></div>
												<div className="w-8 h-4 bg-gradient-to-r from-pale-blue to-light-blue transform -skew-x-[30deg]"></div>
											</div>
											<h3 className="text-lg font-semibold font-sans break-keep whitespace-normal break-words">
												{t("solution.product.so.kick_start")}
											</h3>
										</div>
										<h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4 md:mb-2 text-[#000] group-hover:text-primary transition-colors font-sans break-keep whitespace-normal break-words">
											{product.name}
										</h3>
										<p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 md:mb-2 font-sans break-keep whitespace-normal break-words w-full md:w-[90%] ">
											{product.description}
										</p>
										<button
											type="button"
											className="hidden md:inline-flex cursor-pointer font-bold items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-base text-heading-black hover:text-white bg-gradient-to-r from-pale-blue to-light-blue rounded-lg hover:bg-primary/90 w-fit duration-300 transform hover:scale-105 shadow-lg font-sans break-keep whitespace-normal break-words"
											onClick={() => navigate(idRouter.contact)}
										>
											{t("solution.product.so.learn_more")}
											<ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
										</button>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</motion.div>
			</motion.section>
			<motion.section
				ref={ref2}
				className="w-full pt-4 pb-[73px] md:pb-28 bg-[#F8FAFC]"
				initial={{ opacity: 0, y: 20 }}
				animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
			>
				<motion.div
					className="container max-w-[1440px] mx-auto"
					initial={{ opacity: 0 }}
					animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className="flex flex-col items-center justify-center gap-8 text-center mb-4 md:mb-8">
						<div className="space-y-2">
							<p className="max-w-[900px] text-[#0A33D1] font-bold text-xl md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed 2xl:text-2xl font-sans break-keep whitespace-normal break-words">
								{t("solution.implementation.title")}
							</p>
							<h2 className="capitalize mx-auto w-[80%] md:w-full text-4xl font-bold tracking-tighter sm:text-5xl text-dark-gray font-sans break-keep whitespace-normal break-words leading-normal">
								{t("solution.implementation.description")}
							</h2>
						</div>

						<div className="w-full grid grid-cols-1 md:grid-cols-4">
							{isMobile ? (
								<Swiper
									modules={[Navigation, Pagination, Autoplay]}
									spaceBetween={20}
									slidesPerView={1}
									navigation={false}
									pagination={{
										clickable: true,
										bulletClass: "swiper-pagination-bullet",
										bulletActiveClass: "swiper-pagination-bullet-active",
									}}
									autoplay={{
										delay: 3000,
										disableOnInteraction: false,
									}}
									className="w-full h-[550px] pb-12 mx-auto"
								>
									{SOLUTION_IMAGES.map((item, idx) => (
										<SwiperSlide key={idx}>
											<div className="group relative overflow-hidden cursor-pointer h-full">
												<img
													src={item.image}
													alt={item.title(t)}
													className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
													draggable={false}
												/>
												{/* Overlay */}
												<div className="absolute inset-0 bg-[#16224E9C] pointer-events-none" />
												{/* Content */}
												<div className="absolute inset-0 flex flex-col w-full h-full px-4 py-6 text-white z-10 items-start">
													<div className="w-16 h-1 bg-light-blue mb-2"></div>
													<div className="text-2xl font-semibold drop-shadow mb-2 w-full text-left font-sans break-keep whitespace-normal break-words capitalize">
														{item.title(t)}
													</div>
													<div className="text-base drop-shadow w-full">
														<ul className="list-disc list-outside pl-6 text-left">
															{Object.values(item.description(t)).map(
																(desc, i) => (
																	<li
																		className="font-sans break-keep whitespace-normal break-words leading-loose"
																		key={i}
																	>
																		{desc}
																	</li>
																),
															)}
														</ul>
													</div>
												</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							) : (
								SOLUTION_IMAGES.map((item, idx) => (
									<div
										key={idx}
										className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
									>
										<img
											src={item.image}
											alt={item.title(t)}
											className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
											draggable={false}
										/>
										{/* Overlay */}
										<div className="absolute inset-0 bg-[#16224E9C] group-hover:bg-[#0730D0BD] transition-all duration-600 pointer-events-none" />
										<div className="absolute inset-0 flex flex-col justify-end items-start w-full h-full px-4 py-6 text-white z-10 transition-all duration-600 ease-in-out group-hover:opacity-0 opacity-100 group-hover:translate-y-8 translate-y-0">
											<div className="w-16 h-1 bg-light-blue group-hover:bg-white mb-2"></div>
											<div className="text-2xl font-semibold drop-shadow mb-0 w-full transition-all duration-600 ease-in-out text-left font-sans break-keep whitespace-normal break-words capitalize">
												{item.title(t)}
											</div>
										</div>
										<div className="absolute inset-0 flex flex-col justify-start items-start w-full h-full px-4 py-6 text-white z-10 transition-all duration-600 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-8">
											<div className="w-16 h-1 bg-light-blue group-hover:bg-white mb-2"></div>
											<div className="text-2xl font-semibold drop-shadow mb-2 w-full transition-all duration-600 ease-in-out text-left font-sans break-keep whitespace-normal break-words">
												{item.title(t)}
											</div>
											<div className="text-base drop-shadow w-full transition-all duration-600 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
												<ul className="list-disc list-outside pl-6 text-left">
													{Object.values(item.description(t)).map(
														(desc, i) => (
															<li
																className="font-sans break-keep whitespace-normal break-words leading-loose"
																key={i}
															>
																{desc}
															</li>
														),
													)}
												</ul>
											</div>
										</div>
									</div>
								))
							)}
						</div>
					</div>
				</motion.div>
			</motion.section>
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
							className="w-full md:w-[60%] md:px-4 md:pb-4 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight font-sans break-keep whitespace-normal break-words text-white"
							style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
						>
							{t("solution.suggest.title")}{" "}
						</h2>
						<p
							className="w-full md:w-[40%] md:px-4 text-base tracking-tighter font-sans break-keep whitespace-normal break-words text-white"
							style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
						>
							{t("solution.suggest.description")}
						</p>
						{isMobile && (
							<button
								type="button"
								className="cursor-pointer font-bold items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-base text-white bg-primary/90 rounded-lg hover:bg-[#1E399F] w-fit duration-300 transform hover:scale-105 shadow-lg"
							>
								<a
									href={idRouter?.contact}
									className="flex items-center gap-3"
									onClick={() => {
										console.log(idRouter?.contact);
									}}
								>
									{t("solution.suggest.btn")}
									<ArrowRightIcon className="h-6 w-6 sm:h-5 sm:w-5 md:h-6 md:w-6" />
								</a>
							</button>
						)}
					</div>
					{!isMobile && (
						<div className="flex justify-center absolute right-[5%] top-[40%]">
							<button
								type="button"
								className="hidden md:inline-flex cursor-pointer font-bold items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-base text-white bg-primary/90 rounded-lg hover:bg-[#1E399F] w-fit duration-300 transform hover:scale-105 shadow-lg"
							>
								<a
									href={idRouter?.contact}
									className="flex items-center gap-3"
									onClick={() => {
										console.log(idRouter?.contact);
									}}
								>
									{t("solution.suggest.btn")}
									<ArrowRightIcon className="h-6 w-6 sm:h-5 sm:w-5 md:h-6 md:w-6" />
								</a>
							</button>
						</div>
					)}
				</motion.div>
			</motion.section>
			<motion.section
				ref={ref4}
				id={SECTIONS_KEY.COMPETITIVE_EDGE.id}
				className={sectionClass}
				initial={{ opacity: 0, y: 20 }}
				animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.6 }}
			>
				<CompetitiveEdges isSolution={true} />
			</motion.section>
			<CTA />
		</div>
	);
}
