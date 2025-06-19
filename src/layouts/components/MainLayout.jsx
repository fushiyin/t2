import useResponsive from "@/hooks/useResponsive";
import CustomCursor from "@/views/Home/components/CustomeCursor/Cursor";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import {
	ButtonScrollToTop,
	CustomLoading,
	Footer,
	Header,
	LenisProvider,
	Onboarding,
	OnboardingProvider,
} from "..";
import CallPhoneButton from "./CallPhoneButton";

export default function MainLayout() {
	const { isTouchDevice } = useResponsive();
	const location = useLocation();
	console.log("isMobile:", isMobile);

	return (
		<>
			{!isTouchDevice && <CustomCursor />}
			<LenisProvider>
				<OnboardingProvider>
					<CustomLoading />
					<Onboarding />
					<main className="flex min-h-screen flex-col justify-between">
						<Header />
						<Suspense
							fallback={<CustomLoading defaultLoading />}
							key={location?.key}
						>
							<Outlet />
						</Suspense>
						<Footer />
					</main>
					<ButtonScrollToTop />
					<CallPhoneButton phoneNumber="02439333868" />
				</OnboardingProvider>
			</LenisProvider>
		</>
	);
}
