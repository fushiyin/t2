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
						<span>View All</span>
						<svg
							width="18"
							height="20"
							viewBox="0 0 18 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-[18px] h-[20px]"
						>
							<path
								d="M16.3219 10.5891L11.1983 16.4224C11.0555 16.5849 10.8682 16.6666 10.6808 16.6666C10.4934 16.6666 10.3061 16.5849 10.1633 16.4224C9.87714 16.0966 9.87714 15.5699 10.1633 15.2441L14.0375 10.8332H2.62941C2.22464 10.8332 1.89746 10.4607 1.89746 9.99991C1.89746 9.53908 2.22464 9.16658 2.62941 9.16658H14.0375L10.1633 4.75577C9.87714 4.42993 9.87714 3.90322 10.1633 3.57738C10.4495 3.25155 10.9121 3.25155 11.1983 3.57738L16.3219 9.41072C16.6081 9.73655 16.6081 10.2633 16.3219 10.5891Z"
								fill="white"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CaseStudiesSection;
