import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimationControls } from "framer-motion";
import { Ellipsis } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Testimonial data
const testimonials = [
	// First row (scrolls right to left)
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

	// Second row (scrolls left to right)
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

	// Third row (scrolls right to left)
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

// Create duplicated testimonials for seamless looping
const duplicatedTestimonials = testimonials.map((row) => [...row, ...row, ...row, ...row]);

export default function Testimonials() {
	const containerRef = useRef(null);
	const [rowWidths, setRowWidths] = useState([0, 0, 0]);

	// Animation controls for each row
	const row1Controls = useAnimationControls();
	const row2Controls = useAnimationControls();
	const row3Controls = useAnimationControls();

	// Refs for each row to measure widths
	const row1Ref = useRef(null);
	const row2Ref = useRef(null);
	const row3Ref = useRef(null);

	// Measure row widths after render
	useEffect(() => {
		if (row1Ref.current && row2Ref.current && row3Ref.current) {
			setRowWidths([
				row1Ref.current.scrollWidth / 2,
				row2Ref.current.scrollWidth / 2,
				row3Ref.current.scrollWidth / 2,
			]);
		}
	}, []);

	// Start animations after widths are measured
	useEffect(() => {
		if (rowWidths[0] > 0 && rowWidths[1] > 0 && rowWidths[2] > 0) {
			// First row animation (right to left)
			row1Controls.start({
				x: [-rowWidths[0], -rowWidths[0] * 2],
				transition: {
					x: {
						repeat: Number.POSITIVE_INFINITY,
						repeatType: "loop",
						duration: 30,
						ease: "linear",
					},
				},
			});

			// Second row animation (left to right)
			row2Controls.start({
				x: [-rowWidths[1] * 2, -rowWidths[1]],
				transition: {
					x: {
						repeat: Number.POSITIVE_INFINITY,
						repeatType: "loop",
						duration: 35,
						ease: "linear",
					},
				},
			});

			// Third row animation (right to left)
			row3Controls.start({
				x: [-rowWidths[2], -rowWidths[2] * 2],
				transition: {
					x: {
						repeat: Number.POSITIVE_INFINITY,
						repeatType: "loop",
						duration: 32,
						ease: "linear",
					},
				},
			});
		}
	}, [rowWidths, row1Controls, row2Controls, row3Controls]);

	return (
		<div
			className="snap-section bg-white w-full h-full relative flex items-center justify-center"
			ref={containerRef}
		>
			<div className="container px-4 md:px-6 relative h-full w-full flex items-center justify-center">
				{/* Absolutely positioned title with box shadow */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full flex justify-center">
					<motion.div
						className="bg-[#222] px-8 py-4 rounded-lg shadow-[0_0_30px_rgba(0,100,255,0.3)] inline-block"
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

				{/* Testimonial rows with horizontal infinite scroll */}
				<div className="flex flex-col gap-12 mt-8 mb-8 w-full">
					{/* Row 1 - Right to Left */}
					<div className="relative overflow-hidden h-[300px]">
						<motion.div
							ref={row1Ref}
							className="flex gap-6 absolute"
							animate={row1Controls}
						>
							{duplicatedTestimonials[0].map((testimonial, index) => (
								<div
									key={`row1-${index}`}
									className="w-80 flex-shrink-0"
								>
									<TestimonialCard testimonial={testimonial} />
								</div>
							))}
						</motion.div>
					</div>

					{/* Row 2 - Left to Right */}
					<div className="relative overflow-hidden h-[300px]">
						<motion.div
							ref={row2Ref}
							className="flex gap-6 absolute"
							animate={row2Controls}
						>
							{duplicatedTestimonials[1].map((testimonial, index) => (
								<div
									key={`row2-${index}`}
									className="w-80 flex-shrink-0"
								>
									<TestimonialCard testimonial={testimonial} />
								</div>
							))}
						</motion.div>
					</div>

					{/* Row 3 - Right to Left */}
					<div className="relative overflow-hidden h-[300px]">
						<motion.div
							ref={row3Ref}
							className="flex gap-6 absolute"
							animate={row3Controls}
						>
							{duplicatedTestimonials[2].map((testimonial, index) => (
								<div
									key={`row3-${index}`}
									className="w-80 flex-shrink-0"
								>
									<TestimonialCard testimonial={testimonial} />
								</div>
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
		<Card className="bg-near-black-blue/90 border-near-black-blue hover:border-[#444] shadow-md hover:shadow-lg transition-all duration-300 h-full">
			<CardContent className="p-6">
				<div className="flex items-start space-x-4">
					<Avatar className="border-2 border-light-blue">
						<AvatarImage
							src={testimonial.avatar || "/placeholder.svg"}
							alt={testimonial.name}
						/>
						<AvatarFallback className="bg-dark-blue text-white">
							{testimonial.name.charAt(0)}
						</AvatarFallback>
					</Avatar>
					<div>
						<div className="font-medium text-white">{testimonial.name}</div>
						<div className="text-sm text-gray-400">{testimonial.username}</div>
					</div>
				</div>
				<p className="mt-4 text-gray-300 leading-relaxed line-clamp-4">
					{testimonial.content}
				</p>
				<div className="mt-4 flex items-center space-x-4 text-gray-400 text-sm">
					<button className="hover:text-gray-200 transition-colors">Reply</button>
					<button className="hover:text-gray-200 transition-colors">Share</button>
					<button className="hover:text-gray-200 transition-colors">
						<Ellipsis size={18} />
					</button>
				</div>
			</CardContent>
		</Card>
	);
}
