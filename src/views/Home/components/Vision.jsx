/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import mission from "@/assets/img/mission.png";
import values from "@/assets/img/values.png";
import vision from "@/assets/img/vision.png";
import { useEffect, useRef, useState } from "react";

const slides = [
	{
		id: "vision",
		title: "Vision",
		testimonial:
			"Become the best global development partnet leading next-generation technologies.",
		author: "Novacene",
		image: vision,
	},
	{
		id: "mission",
		title: "Mission",
		testimonial:
			"We provide reliable software development and solutions to customers around the world, and provide cost-effective and high-quality services with excellent development talents in Vietnam. We support our customer business growth through technological innovation and flexible collaboration.",
		author: "Novacene",
		image: mission,
	},
	{
		id: "values",
		title: "Values",
		testimonial:
			"Grow together as a team with customer, we quickly absorb and apply the latest trends and technologies to stay ahead. We gain customer trust through honest communication and responsible behaviors.",
		author: "Novacene",
		image: values,
	},
];

const Vision = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const autoPlayRef = useRef(null);
	const sliderContainerRef = useRef(null);

	// Auto-rotation effect
	useEffect(() => {
		const startTimer = () => {
			autoPlayRef.current = setTimeout(() => {
				nextSlide();
			}, 10000); // 10 seconds
		};

		startTimer();

		return () => {
			if (autoPlayRef.current) {
				clearTimeout(autoPlayRef.current);
			}
		};
	}, [activeIndex, isTransitioning]);

	// Function to calculate all slide positions for the oval effect
	const getSlidePositions = () => {
		const positions = [];
		const totalSlides = slides.length;

		for (let i = 0; i < totalSlides; i++) {
			// Calculate the position relative to active slide
			let relativePosition = (i - activeIndex + totalSlides) % totalSlides;

			// For a 3-slide setup, we want positions to be -1, 0, 1 (left, center, right)
			if (relativePosition > totalSlides / 2) {
				relativePosition = relativePosition - totalSlides;
			}

			positions.push({
				...slides[i],
				index: i,
				relativePosition,
			});
		}

		return positions;
	};

	const slidePositions = getSlidePositions();

	const goToSlide = (newDirection) => {
		if (isTransitioning) return;

		setIsTransitioning(true);

		if (newDirection === "next") {
			setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
		} else {
			setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
		}

		// Reset animation flag after transition completes
		setTimeout(() => {
			setIsTransitioning(false);
		}, 800); // Slightly longer than the CSS transition for safety
	};

	const nextSlide = () => goToSlide("next");

	// Reset auto rotation when user interacts
	const handleManualNavigation = (navFn) => {
		if (autoPlayRef.current) {
			clearTimeout(autoPlayRef.current);
		}
		navFn();
	};

	// Calculate oval-path styles for each slide based on position
	const getSlideStyle = (relativePosition) => {
		// Convert position to percentage around the oval
		// (0 = center, -1 = left side, 1 = right side)
		const baseScale = 0.85;
		const maxScale = 1;
		const baseBlur = 2; // px
		const baseZIndex = 10;

		// Center slide
		if (relativePosition === 0) {
			return {
				transform: `translateX(-50%) scale(${maxScale})`,
				filter: "blur(0px) brightness(1)",
				zIndex: baseZIndex + 10,
				left: "50%",
				top: "50%",
				opacity: 1,
			};
		}

		if (relativePosition === -1 || relativePosition === slides.length - 1) {
			return {
				transform: `translateX(-70%) scale(${baseScale})`,
				filter: `blur(${baseBlur}px) brightness(0.8)`,
				zIndex: baseZIndex,
				left: "30%",
				top: "50%",
				opacity: 1,
			};
		}

		if (relativePosition === 1 || relativePosition === -(slides.length - 1)) {
			return {
				transform: `translateX(-30%) scale(${baseScale})`,
				filter: `blur(${baseBlur}px) brightness(0.8)`,
				zIndex: baseZIndex,
				left: "70%",
				top: "50%",
				opacity: 1,
			};
		}

		return {
			transform: `translateX(-50%) scale(${baseScale * 0.7})`,
			filter: `blur(${baseBlur * 2}px) brightness(0.6)`,
			zIndex: baseZIndex - 10,
			left: "50%",
			top: "50%",
			opacity: 0,
		};
	};

	return (
		<div
			ref={sliderContainerRef}
			className="relative w-full h-full overflow-hidden flex flex-col gap-12 justify-center"
		>
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-t2-darkBlue">
					Vision, Mission & Values
				</h2>
				<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
					Which guide us in delivering innovative solutions and driving success for our
					clients.
				</p>
			</div>
			<div className="max-w-[1440px] mx-auto relative w-full h-[500px] flex justify-center items-center">
				<div
					className={`relative w-full max-w-7xl mx-auto h-full ${isTransitioning ? "pointer-events-none" : ""}`}
				>
					{slidePositions.map((slide) => {
						const slideStyle = getSlideStyle(slide.relativePosition);
						return (
							<div
								key={slide.id}
								className="absolute w-[800px] h-[500px] -translate-y-1/2 transition-all duration-700 ease-out"
								style={{
									...slideStyle,
									transitionProperty: "transform, filter, left, top, opacity",
								}}
							>
								<div
									className="w-full h-full overflow-hidden bg-white rounded-xl shadow-2xl flex items-center justify-center"
									style={{
										backgroundImage: `url(${slide.image})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}
								>
									<div className="max-w-3xl mx-auto text-center mt-6 px-6">
										<div className="bg-white/30 backdrop-blur-md rounded-lg p-6">
											<p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-4">
												{slide.testimonial}
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div
				className="absolute bottom-0 left-0 right-0 flex justify-center"
				style={{ bottom: "60px" }}
			>
				{slides.map((slide, index) => (
					<button
						key={slide.id}
						onClick={() => {
							if (index === activeIndex) return;
							handleManualNavigation(() => {
								setIsTransitioning(true);
								setActiveIndex(index);
								setTimeout(() => setIsTransitioning(false), 800);
							});
						}}
						className={`mx-2 h-3 rounded-full transition-all duration-300 ${
							activeIndex === index
								? "bg-[var(--color-deepest-navy)] w-3"
								: "bg-gray-500 bg-opacity-50 w-3"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Vision;
