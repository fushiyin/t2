import { useState, useEffect } from "react";

const useResponsive = () => {
	const [isDesktop, setIsDesktop] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [is2xl, setIs2xl] = useState(false);
	const [isXl, setIsXl] = useState(false);
	const [isLg, setIsLg] = useState(false);
	const [isMd, setIsMd] = useState(false);
	const [isSm, setIsSm] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			// Desktop (>= 1024px)
			setIsDesktop(window.innerWidth >= 1024);
			// Tablet (>= 768px and < 1024px)
			setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
			// Mobile (< 768px)
			setIsMobile(window.innerWidth < 768);
			// 2xl (>= 1536px)
			setIs2xl(window.innerWidth >= 1536);
			// xl (>= 1280px)
			setIsXl(window.innerWidth >= 1280);
			// lg (>= 1024px)
			setIsLg(window.innerWidth >= 1024);
			// md (>= 768px)
			setIsMd(window.innerWidth >= 768);
			// sm (>= 640px)
			setIsSm(window.innerWidth >= 640);
		};

		// Initial check
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return {
		isDesktop,
		isTablet,
		isMobile,
		is2xl,
		isXl,
		isLg,
		isMd,
		isSm,
	};
};

export default useResponsive;
