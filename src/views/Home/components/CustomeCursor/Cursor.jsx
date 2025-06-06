import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
	const cursorRef = useRef(null);
	const trailContainerRef = useRef(null);
	const position = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
	const isMoving = useRef(false);

	useEffect(() => {
		// Tạo container chứa các trail (dùng để giảm tạo div trực tiếp vào body)
		const trailContainer = document.createElement("div");
		trailContainer.style.position = "fixed";
		trailContainer.style.top = 0;
		trailContainer.style.left = 0;
		trailContainer.style.width = "100vw";
		trailContainer.style.height = "100vh";
		trailContainer.style.pointerEvents = "none";
		trailContainer.style.zIndex = "9998";
		document.body.appendChild(trailContainer);
		trailContainerRef.current = trailContainer;

		const cursor = cursorRef.current;

		// Di chuyển cursor bằng GSAP (mượt hơn style trực tiếp)
		const moveCursor = (x, y) => {
			gsap.to(cursor, {
				duration: 0.15,
				ease: "power3.out",
				x: x - 16,
				y: y - 16,
			});
		};

		// Tạo hiệu ứng trail mờ nhỏ mượt với GSAP
		const createTrail = (x, y) => {
			const trail = document.createElement("div");
			trail.style.position = "fixed";
			trail.style.left = `${x}px`;
			trail.style.top = `${y}px`;
			trail.style.width = "12px";
			trail.style.height = "12px";
			trail.style.borderRadius = "50%";
			trail.style.backgroundColor = "rgba(76, 74, 74, 0.1)";
			trail.style.pointerEvents = "none";
			trail.style.filter = "blur(4px)";
			trail.style.zIndex = "9998";
			trail.style.transform = "translate(-50%, -50%)";

			trailContainer.appendChild(trail);

			gsap.to(trail, {
				duration: 0.5,
				scale: 1.5,
				opacity: 0,
				ease: "power1.out",
				onComplete: () => {
					trail.remove();
				},
			});
		};

		const handleMouseMove = (e) => {
			position.current = { x: e.clientX, y: e.clientY };
			moveCursor(e.clientX, e.clientY);
			createTrail(e.clientX, e.clientY);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			if (trailContainerRef.current) {
				trailContainerRef.current.remove();
			}
		};
	}, []);

	return (
		<div
			ref={cursorRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: 32,
				height: 32,
				borderRadius: "50%",
				pointerEvents: "none",
				mixBlendMode: "difference",
				border: "1px solid #a09898",
				backgroundColor: "rgba(76, 74, 74, 0.6)",
				boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
				zIndex: 9999,
				transform: "translate3d(0,0,0)",
				willChange: "transform",
			}}
		/>
	);
};

export default CustomCursor;
