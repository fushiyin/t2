import { useEffect, useState } from "react";
import ReactFlow, { Controls } from "reactflow";
import "reactflow/dist/style.css";

const techStack = {
	"Front-end": ["React", "Redux", "JavaScript", "HTML5", "CSS3", "Sass"],
	"Back-end": ["Node.js", "Express", "Python", "Django", "Java", "Spring Boot"],
	DevOps: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Jenkins"],
	Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
	"Mobile": ["React Native", "Flutter"],
};

function TechStack() {
	const [nodes, setNodes] = useState([]);
	const [edges, setEdges] = useState([]);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setTimeout(() => setShow(true), 100);
		const newNodes = [];
		const newEdges = [];
		const centerNode = {
			id: "center",
			data: { label: "Tech Stack" },
			position: { x: 0, y: 0 },
			style: {
				background: "#222",
				color: "#fff",
				borderRadius: "50%",
				width: 140,
				height: 140,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "1.3rem",
				fontWeight: "bold",
				boxShadow: "0 4px 24px #0002",
				opacity: show ? 1 : 0,
				transition: "opacity 0.7s",
			},
		};
		newNodes.push(centerNode);

		let nodeId = 1;
		let edgeId = 1;
		Object.entries(techStack).forEach(([category, techs], i, arr) => {
			const angle = (360 / arr.length) * i - 90;
			const rad = (angle * Math.PI) / 180;
			const radius = 300;
			const x = Math.cos(rad) * radius;
			const y = Math.sin(rad) * radius;

			const categoryNode = {
				id: `category-${i}`,
				data: { label: category },
				position: { x, y },
				style: {
					background: "#fff",
					color: "#222",
					borderRadius: "20px",
					padding: "8px 18px",
					fontWeight: "600",
					boxShadow: "0 2px 8px #0001",
					opacity: show ? 1 : 0,
					transition: "opacity 0.7s",
					transitionDelay: `${0.2 + i * 0.1}s`,
				},
			};
			newNodes.push(categoryNode);

			newEdges.push({
				id: `edge-${edgeId++}`,
				source: "center",
				target: `category-${i}`,
				style: { stroke: "#bbb", strokeWidth: 2, opacity: show ? 1 : 0, transition: "opacity 0.7s", transitionDelay: `${0.15 + i * 0.1}s` },
			});

			techs.forEach((tech, j) => {
				const techNode = {
					id: `tech-${nodeId++}`,
					data: { label: tech },
					position: { x: x + 150, y: y + j * 50 },
					style: {
						background: "#f5f5f5",
						color: "#333",
						borderRadius: "16px",
						padding: "5px 14px",
						fontSize: "0.95rem",
						boxShadow: "0 1px 4px #0001",
						opacity: show ? 1 : 0,
						transition: "opacity 0.7s",
						transitionDelay: `${0.4 + i * 0.1 + j * 0.07}s`,
					},
				};
				newNodes.push(techNode);

				newEdges.push({
					id: `edge-${edgeId++}`,
					source: `category-${i}`,
					target: `tech-${nodeId - 1}`,
					style: { stroke: "#bbb", strokeWidth: 2, opacity: show ? 1 : 0, transition: "opacity 0.7s", transitionDelay: `${0.4 + i * 0.1 + j * 0.07}s` },
				});
			});
		});

		setNodes(newNodes);
		setEdges(newEdges);
	}, [show]);

	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<ReactFlow nodes={nodes} edges={edges} fitView>
				<Controls />
			</ReactFlow>
		</div>
	);
}

export default TechStack;
