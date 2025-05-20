import CTA from "@/components/sections/ContactCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Careers() {
	const openPositions = [
		{
			title: "Senior Frontend Developer",
			location: "Ho Chi Minh City, Vietnam",
			type: "Full-time",
			description:
				"We're looking for an experienced frontend developer with expertise in React, Next.js, and modern web technologies.",
		},
		{
			title: "Backend Engineer",
			location: "Hanoi, Vietnam",
			type: "Full-time",
			description:
				"Join our backend team to build scalable and robust APIs and services using Node.js, Python, or Java.",
		},
		{
			title: "DevOps Engineer",
			location: "Remote",
			type: "Full-time",
			description:
				"Help us improve our infrastructure, CI/CD pipelines, and cloud deployments on AWS and GCP.",
		},
		{
			title: "UX/UI Designer",
			location: "Da Nang, Vietnam",
			type: "Full-time",
			description:
				"Create beautiful and intuitive user interfaces and experiences for our clients' products.",
		},
		{
			title: "Project Manager",
			location: "Ho Chi Minh City, Vietnam",
			type: "Full-time",
			description:
				"Lead project teams and ensure successful delivery of software projects for our clients.",
		},
	];

	return (
		<div className=" flex flex-col items-center justify-center mx-auto">
			<div className="container py-12 max-w-[1440px]">
				<h1 className="text-4xl font-bold mb-4">Careers at T2Soft</h1>
				<p className="text-muted-foreground text-lg max-w-3xl mb-8">
					Join our team of talented professionals and work on exciting projects that make
					a difference.
				</p>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
					<Card>
						<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
							<div className="rounded-full p-3 bg-primary/10 mb-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-primary"
								>
									<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
									<circle
										cx="9"
										cy="7"
										r="4"
									></circle>
									<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold">Collaborative Culture</h3>
							<p className="text-muted-foreground">
								Work in a supportive environment where teamwork and knowledge
								sharing are valued.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
							<div className="rounded-full p-3 bg-primary/10 mb-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-primary"
								>
									<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
									<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold">Continuous Learning</h3>
							<p className="text-muted-foreground">
								Access to training, conferences, and resources to help you grow
								professionally.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
							<div className="rounded-full p-3 bg-primary/10 mb-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-primary"
								>
									<path d="M12 2L2 7l10 5 10-5-10-5z"></path>
									<path d="M2 17l10 5 10-5"></path>
									<path d="M2 12l10 5 10-5"></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold">Challenging Projects</h3>
							<p className="text-muted-foreground">
								Work on diverse and innovative projects that push the boundaries of
								technology.
							</p>
						</CardContent>
					</Card>
				</div>

				<h2 className="text-2xl font-bold mb-6">Open Positions</h2>
				<div className="space-y-6 mb-12">
					{openPositions.map((position, index) => (
						<Card key={index}>
							<CardContent className="p-6">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
									<div>
										<h3 className="text-xl font-bold">{position.title}</h3>
										<div className="flex flex-wrap gap-2 mt-2">
											<span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
												{position.location}
											</span>
											<span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
												{position.type}
											</span>
										</div>
										<p className="text-muted-foreground mt-2">
											{position.description}
										</p>
									</div>
									<Button className="md:self-start">Apply Now</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
			<CTA />
		</div>
	);
}
