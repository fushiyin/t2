import { Background, Controls, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function DevelopmentCapacity() {
	const nodes = [
		{
			id: "1", // required
			position: { x: 0, y: 0 }, // required
			data: { label: "Frontend" }, // required
		},
		{
			id: "1.1",
			position: { x: 100, y: 100 },
			data: { label: "UI FrameWork" },
		},
		{
			id: "1.1.1",
			position: { x: 100, y: 100 },
			data: { label: "React.js" },
		},
		{
			id: "2", // required
			position: { x: 0, y: 300 }, // required
			data: { label: "Backend" }, // required
		},
		{
			id: "2.1",
			position: { x: 100, y: 100 },
			data: { label: "Database" },
		},
	];
	const edges = [
		{ id: "1-1.1", source: "1", target: "1.1" },
		{ id: "1.1-1.1.1", source: "1.1", target: "1.1.1" },
		{ id: "2-2.1", source: "2", target: "2.1" },
		// { id: "1.1-1.1.1", source: "1.1", target: "1.1.1" },
	];

	return (
		<div className="h-full w-full">
			<div className="max-w-[1440px] h-full w-full nowheel nodrag">
				<ReactFlow
					nodes={nodes}
					edges={edges}
					fitView
					className="nodrag"
					panOnDrag={false}
				>
					<Background />
					<Controls />
				</ReactFlow>
			</div>
		</div>
	);
}
