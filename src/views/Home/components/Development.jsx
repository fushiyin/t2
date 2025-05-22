/* eslint-disable no-unused-vars */

import ReactLogo from "@/assets/img/react_logo.png";
import TypeScriptLogo from "@/assets/img/typescript_logo.webp";
import VueJsLogo from "@/assets/img/vuejs_logo.png";
import { AnimatePresence, motion } from "framer-motion";
import {
	CloudIcon,
	CodeIcon,
	CpuIcon,
	DatabaseIcon,
	MousePointerClickIcon,
	ServerIcon,
	SmartphoneIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Development() {
	const [selectedNode, setSelectedNode] = useState(null);
	const [showHint, setShowHint] = useState(true);

	// Hide the hint after user interaction
	useEffect(() => {
		if (selectedNode) {
			setShowHint(false);
		}
	}, [selectedNode]);

	// Tech stack data structure
	const techStack = {
		frontend: {
			name: "Frontend",
			icon: <CodeIcon className="h-5 w-5" />,
			description: "Creating responsive, intuitive, and visually appealing user interfaces",
			technologies: [
				{ name: "React.js", imageUrl: ReactLogo },
				{ name: "Vue.js", imageUrl: VueJsLogo },
				{ name: "Angular", imageUrl: ReactLogo },
				{ name: "Next.js", imageUrl: ReactLogo },
				{ name: "TypeScript", imageUrl: TypeScriptLogo },
				{ name: "Tailwind CSS", imageUrl: ReactLogo },
			],
			children: ["ui", "mobile"],
		},
		ui: {
			name: "UI Frameworks",
			icon: <MousePointerClickIcon className="h-5 w-5" />,
			description: "Modern UI libraries for building beautiful interfaces",
			technologies: [
				{ name: "Material UI", level: 90 },
				{ name: "Tailwind CSS", level: 95 },
				{ name: "Bootstrap", level: 85 },
				{ name: "Chakra UI", level: 80 },
				{ name: "Styled Components", level: 85 },
			],
			parent: "frontend",
		},
		mobile: {
			name: "Mobile",
			icon: <SmartphoneIcon className="h-5 w-5" />,
			description: "Cross-platform and native mobile app development",
			technologies: [
				{ name: "React Native", level: 90 },
				{ name: "Flutter", level: 85 },
				{ name: "iOS (Swift)", level: 80 },
				{ name: "Android (Kotlin)", level: 80 },
				{ name: "Ionic", level: 75 },
			],
			parent: "frontend",
		},
		backend: {
			name: "Backend",
			icon: <ServerIcon className="h-5 w-5" />,
			description: "Building robust, scalable, and secure server-side applications",
			technologies: [
				{ name: "Node.js", level: 95 },
				{ name: "Python", level: 90 },
				{ name: "Java", level: 85 },
				{ name: "C#/.NET", level: 80 },
				{ name: "PHP", level: 75 },
				{ name: "Go", level: 70 },
			],
			children: ["database", "cloud"],
		},
		database: {
			name: "Database",
			icon: <DatabaseIcon className="h-5 w-5" />,
			description: "Data storage and management solutions",
			technologies: [
				{ name: "PostgreSQL", level: 90 },
				{ name: "MongoDB", level: 95 },
				{ name: "MySQL", level: 85 },
				{ name: "Redis", level: 80 },
				{ name: "Firebase", level: 85 },
			],
			parent: "backend",
		},
		cloud: {
			name: "Cloud",
			icon: <CloudIcon className="h-5 w-5" />,
			description: "Cloud infrastructure and deployment solutions",
			technologies: [
				{ name: "AWS", level: 90 },
				{ name: "Google Cloud", level: 85 },
				{ name: "Azure", level: 80 },
				{ name: "Docker", level: 95 },
				{ name: "Kubernetes", level: 85 },
			],
			parent: "backend",
		},
		devops: {
			name: "DevOps",
			icon: <CpuIcon className="h-5 w-5" />,
			description: "Continuous integration, delivery, and infrastructure automation",
			technologies: [
				{ name: "CI/CD Pipelines", level: 90 },
				{ name: "Infrastructure as Code", level: 85 },
				{ name: "Monitoring & Logging", level: 80 },
				{ name: "Security & Compliance", level: 85 },
				{ name: "Performance Optimization", level: 90 },
			],
		},
	};

	// Root nodes (those without parents)
	const rootNodes = Object.entries(techStack).filter(([_, data]) => !data.parent);

	// Get child nodes for a given parent
	const getChildNodes = (parentId) => {
		return Object.entries(techStack)
			.filter(([id, data]) => data.parent === parentId)
			.map(([id, _]) => id);
	};

	// Render a node in the tree
	const renderNode = (id, level = 0, position = 0, totalSiblings = 1) => {
		const node = techStack[id];
		const isSelected = selectedNode === id;
		const hasChildren = node.children && node.children.length > 0;
		const childNodes = node.children || getChildNodes(id);

		// Calculate vertical position for balanced tree
		const verticalOffset = position - (totalSiblings - 1) / 2;

		return (
			<div
				key={id}
				className={`relative ${level === 0 ? "ml-0" : "ml-16"} ${
					level > 0 ? `mt-${Math.abs(verticalOffset) * 4}` : ""
				}`}
				style={{ zIndex: 10 - level }}
			>
				{/* Connection line to parent */}
				{level > 0 && (
					<div
						className="absolute right-full top-1/2 h-px w-16 bg-light-blue/50"
						style={{ transform: "translateY(-50%)" }}
					/>
				)}

				{/* Node */}
				<motion.button
					className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-white transition-all duration-300 ${
						isSelected
							? "bg-light-blue shadow-lg"
							: "bg-draker-blue/60 hover:bg-draker-blue cursor-pointer shadow"
					}`}
					onClick={() => setSelectedNode(id)}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.98 }}
				>
					<span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
						{node.icon}
					</span>
					<span className="font-medium">{node.name}</span>

					{/* Pulsing indicator for interactive hint */}
					{showHint && level === 0 && (
						<motion.span
							className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-white"
							animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
							transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
						/>
					)}
				</motion.button>

				{/* Child nodes */}
				{childNodes.length > 0 && (
					<div className="mt-6 space-y-4">
						{childNodes.map((childId, index) =>
							renderNode(childId, level + 1, index, childNodes.length),
						)}
					</div>
				)}
			</div>
		);
	};

	return (
		<div className=" bg-gradient-to-br from-closet-dark-blue to-normal-dark-blue w-full h-full flex flex-col justify-center items-center">
			<div className="container px-4 md:px-6 flex flex-col justify-center max-w-[1440px]">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
							Development Capacity
						</h2>
						<p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Our technical expertise and development capabilities across various
							technologies and platforms.
						</p>
						{showHint && (
							<p className="text-pale-blue flex items-center justify-center gap-2 mt-2 animate-pulse">
								<MousePointerClickIcon className="h-4 w-4" /> Click on any
								technology to explore our stack
							</p>
						)}
					</div>
				</div>

				<div className="flex flex-col lg:flex-row gap-8 h-full">
					{/* Tree visualization */}
					<div className="w-full lg:w-1/2 flex items-center justify-center overflow-auto py-8">
						<div className="flex flex-col space-y-8">
							{rootNodes.map(([id, _], index) =>
								renderNode(id, 0, index, rootNodes.length),
							)}
						</div>
					</div>

					{/* Technology details */}
					<div className="w-full lg:w-1/2 flex items-center justify-center">
						<AnimatePresence mode="wait">
							{selectedNode ? (
								<motion.div
									key={selectedNode}
									className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full max-w-lg"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3 }}
								>
									<div className="flex items-center gap-3 mb-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-full bg-light-blue">
											{techStack[selectedNode].icon}
										</div>
										<h3 className="text-2xl font-bold text-white">
											{techStack[selectedNode].name}
										</h3>
									</div>

									<p className="text-gray-200 mb-6">
										{techStack[selectedNode].description}
									</p>

									<div className="space-y-4">
										<h4 className="text-lg font-medium text-white">
											Technologies
										</h4>
										<div className="space-y-3">
											{techStack[selectedNode].technologies.map((tech) => (
												<div
													key={tech.name}
													className="space-y-1"
												>
													<div className="flex justify-between">
														<span className="text-gray-200">
															{tech.name}
														</span>
														<span className="text-pale-blue">
															{tech.level}%
														</span>
													</div>
													<div className="h-2 w-full rounded-full bg-white/20">
														<motion.div
															className="h-full rounded-full bg-lightBlue"
															initial={{ width: 0 }}
															animate={{ width: `${tech.level}%` }}
															transition={{ duration: 1, delay: 0.2 }}
														/>
													</div>
												</div>
											))}
										</div>
									</div>

									{!selectedNode && (
										<div className="flex items-center justify-center h-40 text-gray-300">
											<p>Select a technology category to see details</p>
										</div>
									)}
								</motion.div>
							) : (
								<motion.div
									className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full max-w-lg flex flex-col items-center justify-center"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<div className="text-center p-8">
										<MousePointerClickIcon className="h-12 w-12 text-pale-blue mx-auto mb-4 opacity-70" />
										<h3 className="text-xl font-medium text-white mb-2">
											Explore Our Tech Stack
										</h3>
										<p className="text-gray-300">
											Click on any technology category in the diagram to see
											our expertise and capabilities.
										</p>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
}
