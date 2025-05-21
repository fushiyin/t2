import { ArrowRightIcon } from "lucide-react";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudiesSection = () => {
	return (
		<div className="w-full bg-white">
			<div className="mx-auto max-w-[1440px]">
				<header className="mb-20 text-center">
					<h1 className="mb-6 text-5xl font-bold leading-6 text-foreground max-md:text-4xl max-sm:text-3xl">
						Case Studies
					</h1>
					<p className="text-xl font-light leading-6 text-foreground/80 max-md:text-base max-sm:text-sm">
						{" "}
						Explore our successful projects and see how we&apos;ve helped businesses
						achieve their goals.
					</p>
				</header>

				<div className="grid gap-12 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
					<CaseStudyCard
						image="https://cdn.builder.io/api/v1/image/assets/TEMP/5f8fffbed5d74b02e2e01bf4813f50575b941330"
						category="E-commerce"
						title="Smart Office– A Company"
						description="This solution supports web, mobile (iOS/Android), kiosk, and wallpad platforms, enabling flexible office space use anytime, anywhere. It enhances operational efficiency and user convenience by digitalizing key functions like custom seating and meeting room booking."
						technologies="Vue.js, Vuex, Vue Router, Vuetify, ApexCharts, HTML/CSS, JavaScript, Axios"
					/>

					<CaseStudyCard
						image="https://cdn.builder.io/api/v1/image/assets/TEMP/5f8fffbed5d74b02e2e01bf4813f50575b941330"
						category="E-commerce"
						title="Financial Web Portal - F Project"
						description="The client aimed to provide users with fast, easy access to financial information. We developed a unified web and mobile platform with efficient search functions and intuitive UI/UX for an optimal user experience."
						technologies="Vue.js, Vuex, Vue Router, Vuetify, ApexCharts, HTML/CSS, JavaScript, Axios"
					/>

					<CaseStudyCard
						image="https://cdn.builder.io/api/v1/image/assets/TEMP/5f8fffbed5d74b02e2e01bf4813f50575b941330"
						category="E-commerce"
						title="Smart Office– A Company"
						description="The client aimed to provide users with fast, easy access to financial information. We developed a unified web and mobile platform with efficient search functions and intuitive UI/UX for an optimal user experience."
						technologies="Vue.js, Vuex, Vue Router, Vuetify, ApexCharts, HTML/CSS, JavaScript, Axios"
					/>
				</div>

				<div className="flex justify-center">
					<button className="flex gap-2.5 items-center px-3.5 py-2 text-sm font-bold rounded-md shadow-sm opacity-90 bg-foreground text-white cursor-pointer hover:opacity-100 transition-opacity duration-200">
						<span className="flex items-center gap-1">
							View All <ArrowRightIcon className="h-4 w-4" />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CaseStudiesSection;
