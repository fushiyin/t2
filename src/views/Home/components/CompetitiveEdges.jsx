/* eslint-disable react-hooks/exhaustive-deps */
import Communicate from "@/assets/lotties/communicate.json";
import Computer from "@/assets/lotties/computer.json";
import Cost from "@/assets/lotties/cost.json";
import Dev from "@/assets/lotties/dev.json";
import useResponsive from "@/hooks/useResponsive";
import classNames from "classnames";
import { BarChart3, Check, Code, Cpu, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";

// Add flip card styles
const styles = `
  .preserve-3d {
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
`;

const defaultOptions = {
	loop: true,
	autoplay: true,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const AUTO_SWITCH_INTERVAL = 5000;

const CompetitiveEdges = () => {
	const [activeEdge, setActiveEdge] = useState(null);
	const [isHovered, setIsHovered] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const { t } = useTranslation();
	const { isDesktop, isTablet, isMobile, is2xl, isXl, isLg } = useResponsive();
	const contentClass = "container h-full px-4 py-16 md:px-6 max-w-[1440px]";
	const classNames_icon =
		"w-20 h-20 2xl:w-[56px] 2xl:h-[56px] xl:w-[48px] xl:h-[48px] lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] text-black";

	const getLottieSize = () => {
		if (isMobile) return { width: 300, height: 225 };
		if (isTablet) return { width: 320, height: 240 };
		if (isDesktop) {
			if (is2xl) return { width: 300, height: 225 };
			if (isXl) return { width: 280, height: 210 };
			if (isLg) return { width: 260, height: 250 };
			return { width: 260, height: 195 };
		}
		return { width: 300, height: 225 };
	};

	const edges = [
		{
			id: 0,
			title: t("competitive_edges.edges.coordinator.title"),
			icon: <Cpu className={classNames_icon} />,
			description: t("competitive_edges.edges.coordinator.description", {
				returnObjects: true,
			}),
			lottie: Computer,
		},
		{
			id: 1,
			title: t("competitive_edges.edges.developer.title"),
			icon: <Code className={classNames_icon} />,
			description: t("competitive_edges.edges.developer.description", {
				returnObjects: true,
			}),
			lottie: Dev,
		},
		{
			id: 2,
			title: t("competitive_edges.edges.communication.title"),
			icon: <BarChart3 className={classNames_icon} />,
			description: t("competitive_edges.edges.communication.description", {
				returnObjects: true,
			}),
			lottie: Communicate,
		},
		{
			id: 3,
			title: t("competitive_edges.edges.cost.title"),
			icon: <DollarSign className={classNames_icon} />,
			description: t("competitive_edges.edges.cost.description", { returnObjects: true }),
			lottie: Cost,
		},
	];

	useEffect(() => {
		if (!activeEdge && edges.length > 0) {
			setActiveEdge(edges[0]);
		}
	}, []);

	useEffect(() => {
		if (isHovered) return;
		const interval = setInterval(() => {
			setActiveEdge((prev) => {
				const currentIndex = edges.findIndex((e) => e.id === prev?.id);
				const nextIndex = (currentIndex + 1) % edges.length;
				return edges[nextIndex];
			});
		}, AUTO_SWITCH_INTERVAL);

		return () => clearInterval(interval);
	}, [isHovered]);

	return (
		<div className="w-full bg-white flex flex-col items-center justify-center">
			<style>{styles}</style>
			<div
				className={classNames({
					[contentClass]: contentClass,
				})}
			>
				<div className="flex flex-col items-center justify-center gap-8">
					<div className="flex flex-col items-center justify-center gap-4">
						<h2 className="text-5xl font-bold text-center text-dark-gray">
							{t("competitive_edges.title")}
						</h2>
						<p className="text-center text-dark-gray">
							{t("competitive_edges.description")}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 w-full">
						{edges.map((edge) => {
							const isActive = activeEdge?.id === edge.id;
							const isHovering = hoveredIndex === edge.id;
							const lottieSize = getLottieSize();

							return (
								<div
									key={edge.id}
									className="flex flex-col"
									onMouseEnter={() => {
										setIsHovered(true);
										setHoveredIndex(edge.id);
										setActiveEdge(edge);
									}}
									onMouseLeave={() => {
										setIsHovered(false);
										setHoveredIndex(null);
									}}
								>
									<div
										className={classNames(
											"w-full h-[350px] sm:h-[350px] md:h-[350px] xl:h-[400px] aspect-[3/4] relative transition-all duration-500 preserve-3d",
											isActive || isHovering ? "rotate-y-180" : "",
										)}
									>
										{/* Front of card */}
										<div className="w-full h-full absolute backface-hidden">
											<div className="relative w-full h-full flex flex-col items-end justify-between rounded-lg shadow-lg p-8 cursor-pointer transition-all duration-300 border-t border-zinc-300 dark:border-zinc-700 bg-white text-dark">
												<p className="text-center text-xl 2xl:text-2xl xl:text-xl lg:text-xl md:text-xl w-full font-bold uppercase text-dark-gray">
													{edge.title}
												</p>
												<div className="w-full h-full flex items-center justify-center">
													<Lottie
														options={{
															...defaultOptions,
															animationData: edge.lottie,
														}}
														width={lottieSize.width}
														height={lottieSize.height}
													/>
												</div>
												<div className="absolute bottom-2 right-2">
													{edge.icon}
												</div>
											</div>
										</div>

										{/* Back of card */}
										<div className="w-full h-full absolute backface-hidden rotate-y-180 bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] rounded-lg shadow-lg p-8">
											<div className="w-full h-full flex flex-col justify-center space-y-6">
												{edge.description.map((benefit, index) => (
													<div
														key={index}
														className="flex items-start gap-4 mb-2"
													>
														<Check
															className="text-white mt-1 flex-shrink-0"
															size={24}
														/>
														<p className="text-white leading-relaxed text-base 2xl:text-base xl:text-xs lg:text-xl md:text-sm">
															{benefit}
														</p>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="w-[90px] h-[8px] bg-gradient-to-r from-[var(--color-light-mint)] to-[var(--color-light-green)] mb-4"></div>
				</div>
			</div>
		</div>
	);
};

export default CompetitiveEdges;
