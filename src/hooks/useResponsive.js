import { useMediaQuery } from "react-responsive";

function useResponsive() {
	const mediaQueryTabletOrMobile = useMediaQuery({ query: "(max-width: 1256px)" });
	const mediaQueryMobile = useMediaQuery({ query: "(max-width: 1023px)" });

	const isTabletOrMobile = !!localStorage.getItem("mobile_view") || mediaQueryTabletOrMobile;

	const isMobile = !!localStorage.getItem("mobile_view") || mediaQueryMobile;

	return { isTabletOrMobile, isMobile };
}

export default useResponsive;
