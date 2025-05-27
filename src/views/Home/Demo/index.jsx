import { useEffect, useRef, useState } from "react";

const VisionJourney = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const containerRef = useRef(null);
	const lastScrollTop = useRef(0);
	const scrollTimeout = useRef(null);

	const slides = [
		{
			id: "vision",
			title: "Vision",
			testimonial:
				"We provide reliable software development and solutions to customers around the world, and provide cost-effective and high-quality services with excellent development talents in Vietnam. We support our customer business growth through technological innovation and flexible collaboration.",
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
		const handleScroll = () => {
			if (!containerRef.current) return;
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			if (scrollTimeout.current) return;
			scrollTimeout.current = setTimeout(() => {
				const direction = scrollTop > lastScrollTop.current ? "down" : "up";

				setActiveIndex((prevIndex) => {
					if (direction === "down") {
						return (prevIndex + 1) % slides.length;
					} else {
						return (prevIndex - 1 + slides.length) % slides.length;
					}
				});

				lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
				scrollTimeout.current = null;
			}, 1500);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
		};
	}, [slides.length]);

	const getNextSlide = (index) => (index + 1) % slides.length;
	const getPrevSlide = (index) => (index - 1 + slides.length) % slides.length;

	return (
		<div
			ref={containerRef}
			className="h-[800px] w-full overflow-hidden relative snap-start snap-always"
			style={{ scrollSnapAlign: "start" }}
		>
			<div className="content flex flex-col items-center justify-space-between space-y-4 text-center">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-t2-darkBlue mt-5">
					OUR
				</h2>
				<div className="text-[72px] font-bold text-t2-darkBlue transition-all duration-500">
					{slides[activeIndex].title.toUpperCase()}
				</div>
				<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-all duration-500">
					{slides[activeIndex].testimonial}
				</p>
				<div className="w-[90px] h-[8px] mt-5 bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] mb-4" />
			</div>
			<div className="absolute top-1/2 h-full left-1/2 transform -translate-x-1/2">
				<div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
					<div className="w-[800px] h-[800px] rounded-full animate-spin-slow bg-gradient-to-b from-[#5087f7] to-transparent" />
				</div>
			</div>
			<div className="absolute top-1/2 left-[-75px] transform flex items-center justify-center gap-4">
				<div className="w-[150px] h-[150px] rounded-full animate-spin-slow bg-gradient-to-b from-[#5087f7] to-[#19286d]" />
				<div className="text-t2-darkBlue font-semibold transition-all duration-500">
					{slides[getPrevSlide(activeIndex)].title}
				</div>
			</div>
			<div className="absolute top-1/2 right-[-50px] transform flex items-center justify-center gap-4">
				<div className="text-t2-darkBlue font-semibold transition-all duration-500">
					{slides[getNextSlide(activeIndex)].title}
				</div>
				<div className="w-[150px] h-[150px] rounded-full animate-spin-slow bg-gradient-to-b from-[#5087f7] to-[#19286d]" />
			</div>
		</div>
	);
};

export default VisionJourney;
