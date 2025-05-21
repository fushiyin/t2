export default function Blog() {
	return (
		<div className="container py-12 flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold mb-6">Blog</h1>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] ">
				{[1, 2, 3, 4, 5, 6].map((i) => (
					<div
						key={i}
						className="bg-card rounded-lg overflow-hidden shadow-sm"
					>
						<div className="h-48 bg-muted-foreground/20 relative">
							<div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
								Blog Image {i}
							</div>
						</div>
						<div className="p-6">
							<div className="flex items-center text-sm text-muted-foreground mb-2">
								<span>May 8, 2025</span>
								<span className="mx-2">•</span>
								<span>5 min read</span>
							</div>
							<h2 className="text-xl font-semibold mb-2">
								Lorem ipsum dolor sit amet consectetur
							</h2>
							<p className="text-muted-foreground mb-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<a
								href="#"
								className="text-primary hover:underline"
							>
								Read more →
							</a>
						</div>
					</div>
				))}
			</div>

			<div className="mt-12 flex justify-center">
				<nav className="flex items-center gap-1">
					<a
						href="#"
						className="w-10 h-10 flex items-center justify-center rounded-md border border-input bg-background"
					>
						1
					</a>
					<a
						href="#"
						className="w-10 h-10 flex items-center justify-center rounded-md border border-input bg-background text-muted-foreground"
					>
						2
					</a>
					<a
						href="#"
						className="w-10 h-10 flex items-center justify-center rounded-md border border-input bg-background text-muted-foreground"
					>
						3
					</a>
					<span className="w-10 h-10 flex items-center justify-center">...</span>
					<a
						href="#"
						className="w-10 h-10 flex items-center justify-center rounded-md border border-input bg-background text-muted-foreground"
					>
						8
					</a>
				</nav>
			</div>
		</div>
	);
}
