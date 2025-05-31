import useResponsive from "@/hooks/useResponsive";
import CustomCursor from "@/views/Home/components/CustomeCursor/Cursor";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
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
	const { isMobile } = useResponsive(); 

	return (
		<Suspense fallback={<> </>}>
			{!isMobile && <CustomCursor />}
			<LenisProvider>
				<OnboardingProvider>
					<CustomLoading />
					<Onboarding />
					<Header />
					<Outlet />
					<Footer />
					<ButtonScrollToTop />
					<CallPhoneButton phoneNumber="0123456789" />
				</OnboardingProvider>
			</LenisProvider>
		</Suspense>
	);
}
