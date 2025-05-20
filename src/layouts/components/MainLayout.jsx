import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";
import classNames from "classnames";
import { ChevronUp } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "./CustomLoading";
import Footer from "./Footer";
import Header from "./Header";
import Onboarding from "./OnBoarding";
import OnboardingProvider from "./OnBoardingProvider";

function ButtonScrollToTop() {
	const location = useLocation();
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = document.querySelector("main").scrollTop;
			setShowScrollTop(scrollTop > 120);
		};
		document.querySelector("main").addEventListener("scroll", handleScroll);
		return () => document.querySelector("main").removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		document.querySelector("main").scrollTo({ top: 0, behavior: "smooth" });
	}, [location]);

	const scrollToTop = () => {
		smoothScrollTo(0, 800);
	};

	return (
		<Button
			type="button"
			onClick={scrollToTop}
			className={classNames(
				"size-[56px] fixed cursor-pointer rounded-3xl bg-[#19286D] bottom-[30px] right-[30px] shadow-[0px 2px 4px 0px #0000001F, 0px 4px 8px 0px #00000014]",
				{
					visible: showScrollTop,
					hidden: !showScrollTop,
				},
			)}
		>
			<ChevronUp
				size={24}
				color="white"
				strokeWidth={2}
			/>
		</Button>
	);
}

export default function MainLayout() {
	return (
		<Suspense fallback={<> </>}>
			<OnboardingProvider>
				<Loading />
				<Onboarding />
				<div className="flex flex-col h-screen">
					<Header />
					<main className="flex-1 overflow-auto">
						<Outlet />
						<Footer />
						<ButtonScrollToTop />
					</main>
				</div>
			</OnboardingProvider>
		</Suspense>
	);
}
