import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}


// utils.ts or similar
export const smoothScrollTo = (targetY, duration = 500) => {
	const startY = window.scrollY || window.pageYOffset;
	const startTime = performance.now();

	const animateScroll = (currentTime) => {
		const elapsed = currentTime - startTime;
		const progress = Math.min(elapsed / duration, 1);
		const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
		const newY = startY + (targetY - startY) * ease;

		window.scrollTo(0, newY);

		if (progress < 1) {
			requestAnimationFrame(animateScroll);
		}
	};

	requestAnimationFrame(animateScroll);
};

export const scrollToTop = () => {
	smoothScrollTo(0, 500);
};

import FingerprintJS from "@fingerprintjs/fingerprintjs";
export function getCurrentTimeString() {
    const now = new Date();
    const pad = (n) => n.toString().padStart(2, "0");
    return `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(
        now.getSeconds()
    )}`;
}

export const generateDeviceId = async () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    return result.visitorId;
};
