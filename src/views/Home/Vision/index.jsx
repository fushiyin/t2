import planet1 from "@/assets/img/planet1.png";
import planet2 from "@/assets/img/planet2.jpg";
import planet3 from "@/assets/img/planet3.jpg";
import wallpaper from "@/assets/img/wallpaper.jpg";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

const Stars = () => {
	const stars = Array.from({ length: 100 }).map((_, index) => ({
		id: index,
		top: `${Math.random() * 100}%`,
		left: `${Math.random() * 100}%`,
		size: `${Math.random() * 2 + 1}px`,
		opacity: Math.random() * 0.5 + 0.5,
		animationDelay: `${Math.random() * 5}s`,
	}));

	return (
		<div className="absolute inset-0 overflow-hidden">
			{stars.map((star) => (
				<div
					key={star.id}
					className="absolute rounded-full bg-white animate-twinkle"
					style={{
						top: star.top,
						left: star.left,
						width: star.size,
						height: star.size,
						opacity: star.opacity,
						animationDelay: star.animationDelay,
					}}
				/>
			))}
		</div>
	);
};

const VisionJourney = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const containerRef = useRef(null);
	const { t } = useTranslation();

	const slides = [
		{
			id: "vision",
			title: t("vision.title"),
			backgroundColor: "#090f33",
			image: planet1,
			testimonial: t("vision.description"),
		},
		{
			id: "mission",
			title: t("mission.title"),
			backgroundColor: "#090f33",
			image: planet2,
			testimonial: t("mission.description"),
		},
		{
			id: "values",
			title: t("values.title"),
			image: planet3,
			backgroundColor: "#b95a00",
			testimonial: t("values.description"),
		},
	];

	const getNextSlide = (index) => (index + 1) % slides.length;
	const getPrevSlide = (index) => (index - 1 + slides.length) % slides.length;

	const getPlanetStyles = (index) => {
		const isCenter = index === activeIndex;
		const isLeft = index === getPrevSlide(activeIndex);
		const isRight = index === getNextSlide(activeIndex);

		let width,
			height,
			top = 50;

		const deviceWidth = window.innerWidth;

		switch (true) {
			case deviceWidth < 576:
				width = 200;
				height = 200;
				top = 75;
				break;
			case deviceWidth >= 768 && deviceWidth < 992:
				width = 400;
				height = 400;
				break;
			default:
				width = 900;
				height = 900;
		}
		const baseStyles = {
			position: "absolute",
			transformOrigin: "center",
			transition: "all 1000ms ease-in-out",
			cursor: "pointer",
			top: `${top}%`,
			left: `calc(50% - ${width / 2}px)`,
			transform: "translate(-50%, -50%)",
		};
		if (isCenter) {
			return {
				...baseStyles,
				width: width,
				height: height,
				opacity: 1,
				zIndex: 10,
				transform: `
					translate(-50%, -50%),
					scale(1)
				`,
			};
		} else if (isLeft) {
			return {
				...baseStyles,
				width: width / 3,
				height: height / 3,
				zIndex: 5,
				left: -width / 6,
				transform: `
					scale(0.8)
				`,
			};
		} else if (isRight) {
			return {
				...baseStyles,
				width: width / 3,
				height: height / 3,
				zIndex: 5,
				left: `calc(100% - ${width / 6}px)`,
				transform: "scale(0.8)",
			};
		}
		return { ...baseStyles, display: "none" };
	};

	return (
		<div
			ref={containerRef}
			className="h-[600px] md:h-[870px] w-full overflow-hidden relative snap-start snap-always bg-[#30323d]"
			style={{
				scrollSnapAlign: "start",
				backgroundImage: `url(${wallpaper})`,
				backgroundSize: "contain",
			}}
		>
			<Stars />
			<div className="content flex flex-col items-center justify-space-between text-center">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mt-5">
					{t("our")}
				</h2>
				<div className="text-2xl sm:text-6xl font-bold text-white transition-all duration-500">
					{slides[activeIndex].title.toUpperCase()}
				</div>
				<p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-all duration-500 px-5 mt-5 font-sans break-keep whitespace-normal break-words">
					{slides[activeIndex].testimonial}
				</p>
				<div className="w-[90px] h-[8px] mt-5 bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] mb-4" />
			</div>
			<div
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center  transform-3d  [animation:rotate_20s_linear_infinite]"
				style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
			>
				{slides.map((slide, index) => {
					const planetStyles = getPlanetStyles(index);
					const isCenter = index === activeIndex;
					const isLeft = index === getPrevSlide(activeIndex);
					return (
						<div
							className="flex gap-5"
							key={slide.id}
							style={planetStyles}
							onClick={() => setActiveIndex(index)}
						>
							<div
								className="w-full h-full absolute rounded-full [animation:rotate_15s_linear_infinite] animate-spin-slow rotate"
								style={{
									backgroundImage: `url(${slide?.image})`,
									backgroundSize: "cover",
									backgroundColor: slide.backgroundColor,
									boxShadow: isCenter
										? `inset 0px -20px 50px 10px ${slide.backgroundColor}, 0px 0px 30px 6px ${slide.backgroundColor}`
										: null,
								}}
							/>

							{!isCenter && (
								<div
									className="absolute text-white font-semibold z-20 text-center w-max px-2 text-base md:text-2xl"
									style={{
										top: "50%",
										transform: "translateY(-50%)",
										...(isLeft
											? { left: "calc(100% + 20px)" }
											: { right: "calc(100% + 20px)" }),
									}}
								>
									{slide.title.toUpperCase()}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default VisionJourney;
