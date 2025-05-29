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
	return (
		<Suspense fallback={<> </>}>
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
