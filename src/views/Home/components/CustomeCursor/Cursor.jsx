import { useEffect } from "react";

const CustomCursor = () => {
	useEffect(() => {
		const cursor = document.getElementById("custom-cursor");

		const handleMouseMove = (e) => {
			const x = e.clientX - 10; // căn giữa (10 = nửa width)
			const y = e.clientY - 10;
			cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
		};

		document.addEventListener("mousemove", handleMouseMove);
		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div
			id="custom-cursor"
			className="fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full bg-#4c4a4a/70 pointer-events-none mix-blend-difference border border-#a09898"
		/>
	);
};

export default CustomCursor;
