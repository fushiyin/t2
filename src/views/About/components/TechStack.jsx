import { CheckCheck } from "lucide-react";

function TechStack() {
	const technologies = [
		{ name: "React", icon: <CheckCheck className="text-[#61DAFB]" /> },
		{ name: "Node.js", icon: <CheckCheck className="text-[#339933]" /> },
		{ name: "TypeScript", icon: <CheckCheck className="text-[#3178C6]" /> },
		{ name: "JavaScript", icon: <CheckCheck className="text-[#F7DF1E]" /> },
		{ name: "Python", icon: <CheckCheck className="text-[#3776AB]" /> },
		{ name: "MongoDB", icon: <CheckCheck className="text-[#47A248]" /> },
		{ name: "PostgreSQL", icon: <CheckCheck className="text-[#336791]" /> },
		{ name: "AWS", icon: <CheckCheck className="text-[#232F3E]" /> },
		{ name: "Docker", icon: <CheckCheck className="text-[#2496ED]" /> },
		{ name: "Tailwind CSS", icon: <CheckCheck className="text-[#06B6D4]" /> },
	];

	return (
		<div className="relative w-full max-w-[1440px] min-h-[800px] border-30 border-t-60 border-[var(--color-dark-blue)] rounded-xl p-8">
			<div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 w-[20px] h-[20px] rounded-full bg-[#ffffff]"></div>

			<div className="text-center mb-12">
				<h2 className="text-4xl font-bold text-[var(--color-dark-blue)] mb-4">
					Our Tech Stack
				</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					We leverage cutting-edge technologies to build robust and scalable solutions
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
				{technologies.map((tech, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
					>
						<div className="text-4xl mb-4">{tech.icon}</div>
						<h3 className="text-lg font-semibold text-gray-800">{tech.name}</h3>
					</div>
				))}
			</div>
		</div>
	);
}

export default TechStack;
