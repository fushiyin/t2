import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import classNames from "classnames";
import { Ellipsis } from "lucide-react";
import InfinityHorizontalScroll from "./InfinityHorizontalScroll";

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

export default function Testimonials({ contentClass }) {
	return (
		<div className="relative bg-dark-gray w-full flex items-center justify-center h-[760px] md:h-full">
			<div
				className={classNames(
					"relative w-full flex items-center justify-center max-w-[1440px] h-full",
					{ [contentClass]: contentClass },
				)}
			>
				{/* Absolutely positioned title with box shadow */}
				<div className="absolute inset-10 md:inset-0 z-10 m-auto aspect-[1051/375] w-full max-w-[1051px] rounded-[300px]  blur-[97px] bg-dark-gray"></div>
				<div className="absolute inset-10 md:inset-0 z-20 m-auto aspect-[639/229] w-full max-w-[639px] rounded-[300px] blur-[52px] bg-dark-gray"></div>
				<div className="absolute inset-10 md:inset-0 flex items-center justify-center">
					<h2 className="z-30 w-full max-w-[600px] text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold  bg-gradient-to-r from-light-blue via-light-blue-gray to-pale-blue bg-clip-text text-transparent text-center px-6 py-4 sm:px-8 sm:py-5 md:px-[30px] md:py-[25px] rounded-[10px]">
						Feedback from customers
					</h2>
				</div>

				{/* Testimonial rows with horizontal infinite scroll */}
				<div className="flex flex-col gap-4 mt-8 mb-8 w-full relative h-full md:h-auto">
					<InfinityHorizontalScroll
						scrollSpeed={50000}
						height={300}
					>
						{duplicatedTestimonials[0].map((testimonial, index) => (
							<TestimonialCard
								testimonial={testimonial}
								key={`row1-${index}`}
							/>
						))}
					</InfinityHorizontalScroll>
					<InfinityHorizontalScroll
						scrollSpeed={50000}
						height={300}
						isRevert
					>
						{duplicatedTestimonials[1].map((testimonial, index) => (
							<TestimonialCard
								testimonial={testimonial}
								key={`row2-${index}`}
							/>
						))}
					</InfinityHorizontalScroll>
					<InfinityHorizontalScroll
						scrollSpeed={50000}
						height={300}
					>
						{duplicatedTestimonials[2].map((testimonial, index) => (
							<TestimonialCard
								testimonial={testimonial}
								key={`row3-${index}`}
							/>
						))}
					</InfinityHorizontalScroll>
				</div>
			</div>
		</div>
	);
}

// Testimonial card component
function TestimonialCard({ testimonial }) {
	return (
		<Card className="bg-dark-gray shadow-md h-[280px] w-[400px] border border-white/[0.08] rounded-xl">
			<CardContent className="p-6">
				<div className="flex items-start space-x-4">
					<Avatar className="border-2 border-white/[0.3]">
						<AvatarImage
							src={testimonial.avatar || "/placeholder.svg"}
							alt={testimonial.name}
						/>
						<AvatarFallback className="bg-dark-gray text-white">
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
