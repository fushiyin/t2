import { useEffect } from "react";

const CustomCursor = () => {
	useEffect(() => {
		const cursor = document.getElementById("custom-cursor");

		const handleMouseMove = (e) => {
			const x = e.clientX - 16;
			const y = e.clientY - 16;
			cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;

			createTrail(x, y);
		};

		const createTrail = (x, y) => {
			const trail = document.createElement("div");
			trail.className = `
        fixed w-4 h-4 rounded-full bg-[#4c4a4a]/10 
        pointer-events-none z-[9998] blur-sm
        animate-fade-out
      `;
			trail.style.left = `${x}px`;
			trail.style.top = `${y}px`;

			document.body.appendChild(trail);

			setTimeout(() => {
				trail.remove();
			}, 400);
		};

		document.addEventListener("mousemove", handleMouseMove);
		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<>
			<style>{`
				@keyframes fadeOut {
					from {
						opacity: 0.4;
						transform: scale(1);
					}
					to {
						opacity: 0;
						transform: scale(1.5);
					}
				}
				.animate-fade-out {
					animation: fadeOut 0.4s ease-out forwards;
				}
			`}</style>

			<div
				id="custom-cursor"
				className="fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full pointer-events-none mix-blend-difference border border-[#a09898] bg-[#4c4a4a]/60 shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
			/>
		</>
	);
};

export default CustomCursor;
