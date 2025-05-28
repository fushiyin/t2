/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from "react";

const Motconvit = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);
	const containerRef = useRef(null);

	const slides = [
		{
			id: "vision",
			title: "Vision",
			testimonial:
				"Become the best global development partner leading next-generation technologies.",
		},
		{
			id: "mission",
			title: "Mission",
			testimonial:
				"We provide reliable software development and solutions to customers around the world, and provide cost-effective and high-quality services with excellent development talents in Vietnam. We support our customer business growth through technological innovation and flexible collaboration.",
		},
		{
			id: "values",
			title: "Values",
			testimonial:
				"Grow together as a team with customer, we quickly absorb and apply the latest trends and technologies to stay ahead. We gain customer trust through honest communication and responsible behaviors.",
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
		// const total = slides.length;
		// const angle = (index * 2 * Math.PI) / total - (activeIndex * 2 * Math.PI) / total;
		// const radius = 300;

		// const x = Math.cos(angle) * radius;
		// const y = Math.sin(angle) * radius;

		return {
			// left: `calc(35% + ${x}px)`,
			// top: `calc(40% + ${y}px)`,
			// transform: `scale(${index === activeIndex ? 2 : 0.8})`,
			// zIndex: index === activeIndex ? 10 : 1,
			position: "absolute",
			left: `${index === activeIndex ? 1000 : 50}px)`,
			top: `${index === activeIndex ? 1000 : 50}px)`,
			background: `${index === activeIndex ? "red" : "blue"}`,
		};
	};

	useEffect(() => {
		console.log("activeIndex", activeIndex);
	}, [activeIndex]);

	return (
		<div
			ref={containerRef}
			className="h-screen w-screen overflow-hidden relative perspective-1000"
		>
			<div className="absolute left-0 top-0 h-full w-full">
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
					<div className="w-[600px] h-[600px] border-2 border-[var(--color-dark-blue)]/20 rounded-full animate-spin-slow" />
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
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--color-light-blue)_30%,transparent_100%)]" />

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
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index
								? "bg-light-blue-gray scale-125"
								: "bg-light-blue-gray/30"
							}`}
						aria-label={`Go to ${slides[index].title}`}
					/>
				))}
			</div>

			<style jsx>{`
				.perspective-1000 {
					perspective: 1000px;
				}
				@keyframes spin-slow {
					0% {
						transform: rotateX(90deg) rotateZ(0deg);
					}
					100% {
						transform: rotateX(90deg) rotateZ(-360deg);
					}
				}
				.animate-spin-slow {
					transform-style: preserve-3d;
					animation: spin-slow 60s linear infinite;
				}
			`}</style>
		</div>
	);
};

export default Motconvit;
