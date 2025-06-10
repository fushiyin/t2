/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const VisionJourney = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);
	const containerRef = useRef(null);
	const { t } = useTranslation();

	const slides = [
		{
			id: "vision",
			title: t("vision.title"),
			testimonial: `${t("vision.des_1")}\n${t("vision.des_2")}`,
		},
		{
			id: "mission",
			title: t("mission.title"),
			testimonial: `${t("mission.des_1")}\n${t("mission.des_2")}`,
		},
		{
			id: "values",
			title: t("values.title"),
			testimonial: `${t("values.des_1")}\n${t("values.des_2")}`,
		},
	];

	useEffect(() => {
		const handleWheel = (e) => {
			if (isScrolling) return;

			const isAtStart = activeIndex === 0;
			const isAtEnd = activeIndex === slides.length - 1;

			if ((e.deltaY < 0 && isAtStart) || (e.deltaY > 0 && isAtEnd)) {
				return;
			}

			e.preventDefault();

			setIsScrolling(true);
			if (e.deltaY > 0 && activeIndex < slides.length - 1) {
				setActiveIndex((prev) => prev + 1);
			} else if (e.deltaY < 0 && activeIndex > 0) {
				setActiveIndex((prev) => prev - 1);
			}

			setTimeout(() => setIsScrolling(false), 1000);
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener("wheel", handleWheel, { passive: false });
			return () => container.removeEventListener("wheel", handleWheel);
		}
	}, [activeIndex, isScrolling, slides.length]);

	const getCirclePosition = (index) => {
		const total = slides.length;
		const angle = (index * 2 * Math.PI) / total - (activeIndex * 2 * Math.PI) / total;
		const radius = 300;

		const x = Math.cos(angle) * radius;
		const y = Math.sin(angle) * radius;

		return {
			left: `calc(35% + ${x}px)`,
			top: `calc(40% + ${y}px)`,
			transform: `scale(${index === activeIndex ? 2 : 0.8})`,
			zIndex: index === activeIndex ? 10 : 1,
		};
	};

	return (
		<div
			ref={containerRef}
			className="h-full w-screen overflow-hidden relative perspective-1000"
		>
			<div className="absolute left-0 top-0 h-full w-1/2">
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
					<div className="w-[600px] h-[600px] border-2 border-[var(--primary)]/20 rounded-full transform-3d animate-spin-slow" />
				</div>

				<div className="absolute inset-0 flex items-center justify-center">
					{slides.map((slide, index) => (
						<div
							key={slide.id}
							className="absolute transition-all duration-1000 ease-in-out cursor-pointer"
							style={getCirclePosition(index)}
							onClick={() => setActiveIndex(index)}
							onScroll={() => setActiveIndex(index)}
						>
							<div className="relative">
								<div className="absolute inset-0 bg-[var(--primary)]/20 blur-2xl rounded-full" />

								<div className="w-48 h-48 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform relative overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/30" />
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgb(80,135,247),transparent_100%)]" />

									<div className="relative z-10 text-center">
										<h3 className="text-white font-bold text-2xl mb-2">
											{slide.title}
										</h3>
										<div className="w-16 h-1 bg-white/30 mx-auto" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="absolute right-0 top-0 h-full w-1/2 backdrop-blur-lg p-12 flex flex-col justify-center border-l border-[var(--primary)]/20">
				<div className="max-w-2xl mx-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark-gray">
						{slides[activeIndex].title}
					</h2>
					<div className="w-[90px] h-[8px] mt-5 bg-linear-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] mb-4"></div>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						{slides[activeIndex].testimonial}
					</p>
					<p className="text-xl text-gray-300 leading-relaxed mb-8"></p>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={`w-3 h-3 rounded-full transition-all duration-300 ${
							activeIndex === index
								? "bg-light-blue-gray scale-125"
								: "bg-light-blue-gray/30"
						}`}
						aria-label={`Go to ${slides[index].title}`}
					/>
				))}
			</div>

			<style jsx>{`
				@keyframes spin-slow {
					0% {
						background-position: 10px 0;
					}
					100% {
						background-position: 560px 0px;
					}
				}
				.animate-spin-slow {
					animation: spin-slow 10s linear infinite;
				}
			`}</style>
		</div>
	);
};

export default VisionJourney;
