import classNames from "classnames";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IT_Consulting from "@/assets/img/IT_Consulting.jpg";
import System_Integration from "@/assets/img/System_Integration.jpg";
import Bigdata_Analysis from "@/assets/img/Bigdata_Analysis.jpg";
import Solution_Provider from "@/assets/img/Solution_Provider.png";
import Development_Center from "@/assets/img/Development_Center.png";
import AI from "@/assets/img/AI.png";

const Services = ({ contentClass }) => {
	const { t } = useTranslation();

	const services = [
		{
			id: 1,
			name: t("our_services.global_development.title"),
			description: t("our_services.global_development.description"),
			image: Development_Center,
			details: [
				"Frontend & Backend Development",
				"Hybrid & Native App Development",
				"UI/UX Design & Optimization",
				"Managed Global Development Center",
			],
		},
		{
			id: 2,
			name: t("our_services.system_integration.title"),
			description: t("our_services.system_integration.description"),
			image: System_Integration,
			details: [
				"Integrated System Development",
				"Data Integration & Management",
				"Solution Customization & Optimization",
			],
		},
		{
			id: 3,
			name: t("our_services.it_consulting.title"),
			description: t("our_services.it_consulting.description"),
			image: IT_Consulting,
			details: [
				"IT Strategy Development",
				"System Diagnosis & Improvement",
				"Solution Selection & Implementation Support",
			],
		},
		{
			id: 4,
			name: t("our_services.solution_provider.title"),
			description: t("our_services.solution_provider.description"),
			image: Solution_Provider,
			details: [
				"Smart Office, Smart Factory, Banking solution",
				"Modular/Scalable Software Supply",
				"Enterprise Solutions (CRM, ERP,MES, HRM, WMS, FMS, iBEEMS, etc)",
			],
		},
		{
			id: 5,
			name: t("our_services.ai_machine_learning.title"),
			description: t("our_services.ai_machine_learning.description"),
			image: AI,
			details: [
				"Machine Learning Model Development",
				"Natural Language Processing",
				"Computer Vision Solutions",
				"AI-powered Automation",
				"Predictive Analytics",
			],
		},
		{
			id: 6,
			name: t("our_services.big_data.title"),
			description: t("our_services.big_data.description"),
			image: Bigdata_Analysis,
			details: [
				"Big Data Processing & Analytics",
				"Business Intelligence Solutions",
				"Data Visualization & Reporting",
				"Real-time Data Analysis",
				"Data Mining & Pattern Recognition",
			],
		},
	];

	return (
		<div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
			<div
				className={classNames(
					"max-w-[1440px] flex flex-col items-center justify-center gap-12 mx-auto",
					{
						[contentClass]: contentClass,
					},
				)}
			>
				<div className="flex flex-col items-center justify-center space-y-4 text-center px-5 mb-5">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl pb-6 bg-gradient-to-r from-light-blue via-light-blue-gray to-pale-blue bg-clip-text text-transparent">
						{t("services.section.title")}
					</h2>
					<p className="md:max-w-[900px] text-white md:text-xl/relaxed">
						{t("services.section.description")}
					</p>
				</div>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={30}
					slidesPerView={1}
					navigation
					pagination={{
						clickable: true,
						bulletClass: "swiper-pagination-bullet",
						bulletActiveClass: "swiper-pagination-bullet-active",
					}}
					// autoplay={{
					// 	delay: 5000,
					// 	disableOnInteraction: false,
					// }}
					className="w-full h-[600px]"
				>
					{services.map((service) => (
						<SwiperSlide key={service.id}>
							<div className="relative flex flex-col md:flex-row h-full bg-transparent rounded-2xl shadow-lg overflow-hidden">
								{/* Image Section */}
								<div className="w-[60%] h-[95%] relative flex ">
									<div className="absolute left-[80px] top-1/2 -translate-y-1/2 w-[20px] h-[60%] bg-light-blue" />
									<div className="absolute left-[100px] w-[90%] h-[95%] flex items-center justify-center bg-white shadow-xl rounded-lg overflow-hidden mx-auto">
										<img
											src={service.image}
											alt={service.name}
											className="object-cover w-[95%] h-[95%]"
										/>
									</div>
									{/* <div className="absolute bottom-6 right-0 -translate-x-1/2 flex gap-2">
										{[...Array(5)].map((_, i) => (
											<div
												key={`bottom-${i}`}
												className="w-2 h-2 rounded-full bg-primary/50"
											/>
										))}
									</div>
									<div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
										{[...Array(5)].map((_, i) => (
											<div
												key={`right-${i}`}
												className="w-2 h-2 rounded-full bg-primary/50"
											/>
										))}
									</div> */}
								</div>

								{/* Content Section */}
								<div className="w-[50%] h-[90%]  md:w-1/2 pl-16 pr-8 pt-8 pb-8 flex flex-col justify-center">
									<h3 className="text-4xl font-bold mb-4 group-hover:text-primary transition-colors font-sans break-keep whitespace-normal break-words">
										{service.name}
									</h3>
									<p className="text-muted-foreground mb-8 font-sans break-keep whitespace-normal break-words w-[80%]">
										{service.description}
									</p>
									{/* <ul className="space-y-3 mb-8">
										{service.details.map((detail, idx) => (
											<li
												key={idx}
												className="flex items-center gap-2 text-sm"
											>
												<span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
												<span className="font-sans break-words whitespace-normal">
													{detail}
												</span>
											</li>
										))}
									</ul> */}
									<button className="inline-flex cursor-pointer font-bold items-center gap-2 px-6 py-3 text-heading-black hover:text-white bg-gradient-to-r from-pale-blue to-light-blue rounded-lg hover:bg-primary/90 w-fit duration-300 transform hover:scale-105 shadow-lg">
										{t("our_services.button_learn_more")}
										<ArrowRight className="w-4 h-4" />
									</button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Services;
