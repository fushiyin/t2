import { Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import { ChevronUp } from "lucide-react";
import classNames from "classnames";
import Loading from "../CustomLoading";
import { Button } from "@/components/ui/button";
import OnboardingProvider from "../OnBoardingProvider";
import Onboarding from "../OnBoarding";
import { HeaderMobile, FooterMobile } from ".";

function ButtonScrollToTop() {
	const location = useLocation();
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [location]);

	useEffect(() => {
		const handleScroll = () => {
			const { scrollY } = window;
			setShowScrollTop(scrollY > 120);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Button
			type="button"
			onClick={scrollToTop}
			className={classNames(
				"size-[56px] fixed rounded-3xl bg-white bottom-[30px] right-[max(30px, calc(50vw - 628px - 30px - 56px))] shadow-[0px 2px 4px 0px #0000001F, 0px 4px 8px 0px #00000014]",
				{
					visible: showScrollTop,
					hidden: !showScrollTop,
				},
			)}
		>
			<ChevronUp
				size={24}
				color="red"
				strokeWidth={2}
			/>
		</Button>
	);
}

export default function MobileLayout({ children }) {
	return (
		<Suspense fallback={<> </>}>
			<OnboardingProvider>
				<Loading />
				<Onboarding />
				<HeaderMobile />
				<main>{children}</main>
				<ButtonScrollToTop />
				<FooterMobile />
				{/* <ToastContainer limit="3" /> */}
			</OnboardingProvider>
		</Suspense>
	);
}
