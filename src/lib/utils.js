import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}


export function smoothScrollTo(targetY, duration = 500) {
	const startY = document.querySelector("main")?.scrollTop || 0;
	const distance = targetY - startY;
	let startTime = null;

	function animation(currentTime) {
		if (!startTime) startTime = currentTime;
		const timeElapsed = currentTime - startTime;
		const progress = Math.min(timeElapsed / duration, 1);
		const easeInOutQuad = progress < 0.5
			? 2 * progress * progress
			: -1 + (4 - 2 * progress) * progress;

		const newY = startY + distance * easeInOutQuad;
		const main = document.querySelector("main");
		if (main) main.scrollTop = newY;

		if (timeElapsed < duration) {
			requestAnimationFrame(animation);
		}
	}

	requestAnimationFrame(animation);
}
