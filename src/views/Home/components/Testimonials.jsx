import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Testimonial data
const testimonials = [
	// First column (scrolls right to left)
	[
		{
			name: "Michael P.",
			username: "@moderator0n",
			avatar: "/placeholder.svg?height=40&width=40",
			content:
				"After installing T2Soft on a bunch of machines on my home network, it just worked out. Had to restart the process but holy moly, just SSH'ed into my boxes, building code and pushing configs around like I'm home. Amazing. Converted!",
		},
		{
			name: "Grace Chen",
			username: "@gracetechie",
			avatar: "/placeholder.svg?height=40&width=40",
			content:
				"The hardest thing to understand about T2Soft is that there are no hard things to understand about it and it just works. Their support team is also incredibly responsive.",
		},
		{
			name: "Liam Keegan",
			username: "@LiamJKeegan",
			avatar: "/placeholder.svg?height=40&width=40",
			content:
				"This is sweet! Redirecting authentication to T2Soft to handle it for you eliminates the need to manage credentials. And EVERYTHING is protected, regardless of where the workload lives. AWESOME!",
		},
	],

	// Second column (scrolls left to right)
	[
		{
			name: "Morgan Gallant",
			username: "@morgallant",
			avatar: "/placeholder.svg?height=40&width=40",
			content:
				"The beauty of T2Soft is that they enable people to make their own personal internet, for free in most cases. It's this weird paradigm shift, since you have to actively work to make applications insecure rather than the other way around.",
		},
		{
			name: "Sarah Kim",
			username: "@techyteachme",
			avatar: "/placeholder.svg?height=40&width=40",
			content:
				"Just set up T2Soft and my entire team was connected within minutes. The onboarding experience was so smooth that even our non-technical staff had no issues getting started.",
		},
		{
			name: "Martin Lucina",
			username: "@matolucina",
			avatar: "/placeholder.svg?height=40&width=40",
			content:
				"Install T2Soft. Click 'Share node'. Send link. 2 minutes later, someone who's never used T2Soft before reports 'I can connect to the machine, this works like magic!'",
		},
	],

	// Third column (scrolls right to left)
	[
		{
			name: "John Lynch",
			username: "@johnrlynch",
			avatar: "/placeholder.svg?height=40&width=40",
			content:
				"If you deal with servers in any way drop everything and get this. VPN nirvana. T2Soft is a game-changer for our development team's productivity.",
		},
		{
			name: "Jasmine Prabowski",
			username: "@jmsprbw",
			avatar: "/placeholder.svg?height=40&width=40",
			content:
				"I am not an investor in T2Soft (though, I wish I were). From my lens they will change how we all use the internet. Just a question of when, not if. Seriously impressed with their service.",
		},
		{
			name: "Sumer Cip",
			username: "@sumercip",
			avatar: "/placeholder.svg?height=40&width=40",
			content:
				"I don't like ranting about software. But I will make an exception: T2Soft is really AMAZING! I have managed to set it up for my personal use WITHOUT reading a single line of documentation.",
		},
	],
];

export default function Testimonials() {
	const containerRef = useRef(null);
	const [columnHeights, setColumnHeights] = useState([0, 0, 0]);

	// Animation controls for each column
	const column1Controls = useAnimationControls();
	const column2Controls = useAnimationControls();
	const column3Controls = useAnimationControls();

	// Refs for each column to measure heights
	const column1Ref = useRef(null);
	const column2Ref = useRef(null);
	const column3Ref = useRef(null);

	// Measure column heights after render
	useEffect(() => {
		if (column1Ref.current && column2Ref.current && column3Ref.current) {
			setColumnHeights([
				column1Ref.current.scrollHeight,
				column2Ref.current.scrollHeight,
				column3Ref.current.scrollHeight,
			]);
		}
	}, []);

	// Start animations after heights are measured
	useEffect(() => {
		if (columnHeights[0] > 0 && columnHeights[1] > 0 && columnHeights[2] > 0) {
			// First column animation (top to bottom)
			column1Controls.start({
				y: [-columnHeights[0] / 2, 0],
				transition: {
					y: {
						repeat: Number.POSITIVE_INFINITY,
						repeatType: "loop",
						duration: 25,
						ease: "linear",
					},
				},
			});

			// Second column animation (bottom to top)
			column2Controls.start({
				y: [0, -columnHeights[1] / 2],
				transition: {
					y: {
						repeat: Number.POSITIVE_INFINITY,
						repeatType: "loop",
						duration: 30,
						ease: "linear",
					},
				},
			});

			// Third column animation (top to bottom)
			column3Controls.start({
				y: [-columnHeights[2] / 2, 0],
				transition: {
					y: {
						repeat: Number.POSITIVE_INFINITY,
						repeatType: "loop",
						duration: 28,
						ease: "linear",
					},
				},
			});
		}
	}, [columnHeights, column1Controls, column2Controls, column3Controls]);

	// Create duplicated testimonials for seamless looping
	const duplicatedTestimonials = [
		[...testimonials[0], ...testimonials[0]],
		[...testimonials[1], ...testimonials[1]],
		[...testimonials[2], ...testimonials[2]],
	];

	return (
		<div
			className="snap-section bg-white text-white w-full h-full relative flex items-center justify-center"
			ref={containerRef}
		>
			<div className="container px-4 md:px-6 relative h-full">
				{/* Absolutely positioned title with box shadow */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full flex justify-center">
					<motion.div
						className="bg-[#5087f7] px-8 py-4 rounded-lg shadow-[0_0_30px_rgba(0,100,255,0.3)] inline-block"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<h2 className="text-3xl md:text-5xl font-bold text-white text-center">
							Developer Approved
						</h2>
					</motion.div>
				</div>

				{/* Semi-transparent overlay to make the title more visible */}
				{/* <div className="absolute top-1/2 left-0 right-0 h-24 bg-gradient-to-b from-[#111]/80 via-[#111]/80 to-[#111]/80 transform -translate-y-1/2 z-10"></div> */}

				{/* Testimonial columns with infinite scroll */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 overflow-hidden h-full">
					{/* Column 1 - Top to Bottom */}
					<div className="relative overflow-hidden h-full">
						<motion.div
							ref={column1Ref}
							className="flex flex-col gap-6 absolute top-0 left-0 right-0"
							animate={column1Controls}
						>
							{duplicatedTestimonials[0].map((testimonial, index) => (
								<TestimonialCard
									key={`col1-${index}`}
									testimonial={testimonial}
								/>
							))}
						</motion.div>
					</div>

					{/* Column 2 - Bottom to Top */}
					<div className="relative overflow-hidden h-full">
						<motion.div
							ref={column2Ref}
							className="flex flex-col gap-6 absolute top-0 left-0 right-0"
							animate={column2Controls}
						>
							{duplicatedTestimonials[1].map((testimonial, index) => (
								<TestimonialCard
									key={`col2-${index}`}
									testimonial={testimonial}
								/>
							))}
						</motion.div>
					</div>

					{/* Column 3 - Top to Bottom */}
					<div className="relative overflow-hidden h-full">
						<motion.div
							ref={column3Ref}
							className="flex flex-col gap-6 absolute top-0 left-0 right-0"
							animate={column3Controls}
						>
							{duplicatedTestimonials[2].map((testimonial, index) => (
								<TestimonialCard
									key={`col3-${index}`}
									testimonial={testimonial}
								/>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

// Testimonial card component
function TestimonialCard({ testimonial }) {
	return (
		<Card className="bg-near-black-blue/90 border-near-black-blue hover:border-[#444] shadow-md hover:shadow-lg transition-all duration-300">
			<CardContent className="p-6">
				<div className="flex items-start space-x-4">
					<Avatar className="border-2 border-t2-blue">
						<AvatarImage
							src={testimonial.avatar || "/placeholder.svg"}
							alt={testimonial.name}
						/>
						<AvatarFallback className="bg-t2-darkBlue text-white">
							{testimonial.name.charAt(0)}
						</AvatarFallback>
					</Avatar>
					<div>
						<div className="font-medium text-white">{testimonial.name}</div>
						<div className="text-sm text-gray-400">{testimonial.username}</div>
					</div>
				</div>
				<p className="mt-4 text-gray-300 leading-relaxed">{testimonial.content}</p>
				<div className="mt-4 flex items-center space-x-4 text-gray-400 text-sm">
					<button className="hover:text-gray-200 transition-colors">Reply</button>
					<button className="hover:text-gray-200 transition-colors">Share</button>
					<button className="hover:text-gray-200 transition-colors">...</button>
				</div>
			</CardContent>
		</Card>
	);
}
