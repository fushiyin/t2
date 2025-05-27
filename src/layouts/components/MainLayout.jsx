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
				</OnboardingProvider>
			</LenisProvider>
		</Suspense>
	);
}
