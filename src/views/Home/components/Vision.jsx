import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
	{
		id: "vision",
		title: "Vision",
		description:
			"To create a world where technology empowers every person and organization to achieve more.",
		color: "bg-blue-600",
		icon: "👁️",
	},
	{
		id: "mission",
		title: "Mission",
		description:
			"We strive to build cutting-edge solutions that solve real-world problems and improve the quality of life for our global community.",
		color: "bg-green-600",
		icon: "🚀",
	},
	{
		id: "values",
		title: "Values",
		description:
			"Integrity, Innovation, Inclusion, and Impact drive everything we do. We believe in transparent communication, creative thinking, diverse perspectives, and meaningful outcomes.",
		color: "bg-purple-600",
		icon: "💎",
	},
];

const Vision = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const slidesContainerRef = useRef(null);
	const autoplayTimerRef = useRef(null);

	useEffect(() => {
		autoplayTimerRef.current = setInterval(() => {
			goToSlide(activeIndex + 1);
		}, 5000);

		return () => {
			if (autoplayTimerRef.current) {
				clearInterval(autoplayTimerRef.current);
			}
		};
	}, [activeIndex]);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "ArrowLeft") {
				prevSlide();
				resetAutoplayTimer();
			} else if (e.key === "ArrowRight") {
				nextSlide();
				resetAutoplayTimer();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [activeIndex]);

	const goToSlide = (index) => {
		if (isAnimating) return;

		setIsAnimating(true);
		let newIndex = index;

		if (index < 0) {
			newIndex = SLIDES.length - 1;
		} else if (index >= SLIDES.length) {
			newIndex = 0;
		}

		setActiveIndex(newIndex);

		setTimeout(() => {
			setIsAnimating(false);
		}, 500);
	};

	const prevSlide = () => goToSlide(activeIndex - 1);
	const nextSlide = () => goToSlide(activeIndex + 1);

	const handleTouchStart = (e) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 75) {
			nextSlide();
		}

		if (touchEnd - touchStart > 75) {
			prevSlide();
		}
	};

	const resetAutoplayTimer = () => {
		if (autoplayTimerRef.current) {
			clearInterval(autoplayTimerRef.current);
			autoplayTimerRef.current = setInterval(() => {
				goToSlide(activeIndex + 1);
			}, 5000);
		}
	};

	return (
		<section
			className="relative h-full w-full overflow-hidden"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			<div
				ref={slidesContainerRef}
				className="h-full w-full flex transition-transform duration-500 ease-in-out"
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{SLIDES.map((slide, index) => (
					<div
						key={`slide_${index}`}
						className={`h-full w-full flex-shrink-0 ${slide.color} text-white flex flex-col items-center justify-center px-6 sm:px-12 md:px-24`}
					>
						<div className="text-center max-w-4xl mx-auto">
							<div className="text-5xl sm:text-7xl mb-6">{slide.icon}</div>
							<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
								{slide.title}
							</h2>
							<p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
								{slide.description}
							</p>
						</div>
					</div>
				))}
			</div>

			<button
				className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white focus:outline-none transition-all"
				onClick={() => {
					prevSlide();
					resetAutoplayTimer();
				}}
				aria-label="Previous slide"
			>
				<ChevronLeft size={24} />
			</button>

			<button
				className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white focus:outline-none transition-all"
				onClick={() => {
					nextSlide();
					resetAutoplayTimer();
				}}
				aria-label="Next slide"
			>
				<ChevronRight size={24} />
			</button>

			<div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
				{SLIDES.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full focus:outline-none transition-all ${
							index === activeIndex
								? "bg-white"
								: "bg-white bg-opacity-40 hover:bg-opacity-60"
						}`}
						onClick={() => {
							goToSlide(index);
							resetAutoplayTimer();
						}}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
};

export default Vision;
