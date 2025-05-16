import { AnimatePresence, motion } from "framer-motion";
import { CodeIcon, LayoutIcon, PaintbrushIcon } from "lucide-react";
import { useState } from "react";

export default function DevelopmentCapacity() {
	const [selectedTech, setSelectedTech] = useState("react");
	// Tech stack with React/Next.js only examples
	const techStack = {
		react: {
			name: "React",
			description: "A JavaScript library for building user interfaces",
			code: `// React Counter Component
    import { useState } from 'react';

    export default function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div className="p-4 border rounded-md">
        <h2 className="text-xl font-bold mb-2">
            Counter: {count}
        </h2>
        <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setCount(count + 1)}
        >
            Increment
        </button>
        </div>
    );
}`,
		},
		nextjs: {
			name: "Next.js",
			description: "The React framework for production",
			code: `// Next.js Page Component
    'use client'
    import { useState } from 'react';

    export default function Page() {
    const [message, setMessage] = useState('');
    
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
            Next.js Demo
        </h1>
        
        <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded w-full mb-4"
            placeholder="Type something..."
        />
        {message && (
            <div className="p-4 bg-gray-100 rounded">
            <p>You typed: {message}</p>
            </div>
        )}
        </div>
    );
}`,
		},
		tailwind: {
			name: "Tailwind CSS",
			description: "A utility-first CSS framework",
			code: `// React component with Tailwind CSS
    export default function Card() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
            Card Title
            </div>
            <p className="text-gray-700 text-base">
            This card is styled using Tailwind CSS utility classes.
            No custom CSS required!
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full 
                        px-3 py-1 text-sm font-semibold 
                        text-gray-700 mr-2 mb-2">
            #tailwind
            </span>
            <span className="inline-block bg-gray-200 rounded-full 
                        px-3 py-1 text-sm font-semibold 
                        text-gray-700 mr-2 mb-2">
            #react
            </span>
        </div>
        </div>
    );
}`,
		},
	};

	return (
		<div className="h-full w-full bg-gradient-to-br from-[#5087f7] to-[#101944] flex items-center justify-center">
			<div className="container px-4 md:px-6 h-full flex flex-col justify-center">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
							Development Capacity
						</h2>
						<p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Our technical expertise and development capabilities with React and
							Next.js.
						</p>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row gap-8">
					{/* Tech selection */}
					<div className="w-full lg:w-1/3">
						<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
							<h3 className="text-xl font-bold text-white mb-4">
								Frontend Technologies
							</h3>
							<div className="space-y-3">
								{Object.entries(techStack).map(([key, tech]) => (
									<motion.button
										key={key}
										className={`w-full text-left p-4 rounded-md flex items-center gap-3 transition-colors ${
											selectedTech === key
												? "bg-white text-t2-darkBlue"
												: "bg-white/10 text-white hover:bg-white/20"
										}`}
										onClick={() =>
											setSelectedTech(selectedTech === key ? null : key)
										}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										{key === "react" && <CodeIcon className="h-5 w-5" />}
										{key === "nextjs" && <LayoutIcon className="h-5 w-5" />}
										{key === "tailwind" && (
											<PaintbrushIcon className="h-5 w-5" />
										)}
										<div>
											<div className="font-medium">{tech.name}</div>
											<div
												className={`text-sm ${selectedTech === key ? "text-gray-600" : "text-gray-300"}`}
											>
												{tech.description}
											</div>
										</div>
									</motion.button>
								))}
							</div>
						</div>
					</div>

					{/* Code preview */}
					<div className="w-full lg:w-2/3">
						<AnimatePresence mode="wait">
							{selectedTech ? (
								<motion.div
									key={selectedTech}
									className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl h-[500px]"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3 }}
								>
									{/* Code editor header */}
									<div className="bg-[#2D2D2D] px-4 py-2 flex items-center">
										<div className="flex space-x-2">
											<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
											<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
											<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
										</div>
										<div className="ml-4 text-gray-400 text-sm">
											{techStack[selectedTech].name} Example
										</div>
									</div>

									{/* Code content */}
									<div className="p-4 h-[calc(100%-40px)] overflow-auto">
										<pre className="text-gray-300 font-mono text-sm">
											<code>
												{techStack[selectedTech].code
													.split("\n")
													.map((line, i) => (
														<div
															key={i}
															className="flex"
														>
															<span className="text-gray-500 w-8 text-right pr-4 select-none">
																{i + 1}
															</span>
															<span className="flex-1">{line}</span>
														</div>
													))}
											</code>
										</pre>
									</div>
								</motion.div>
							) : (
								<motion.div
									className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-[500px] flex flex-col items-center justify-center text-center"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5 }}
								>
									<CodeIcon className="h-16 w-16 text-white/50 mb-4" />
									<h3 className="text-xl font-bold text-white mb-2">
										Select a Technology
									</h3>
									<p className="text-gray-300 max-w-md">
										Click on one of the technologies on the left to see code
										examples and learn more about our development capabilities.
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
}
