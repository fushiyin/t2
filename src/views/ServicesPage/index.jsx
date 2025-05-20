import CTA from "@/components/sections/ContactCTA";
import Services from "./components/Services";

export default function ServicesPage() {
	return (
		<div className="w-full flex flex-col items-center justify-center">
			<div className="container py-12 flex flex-col max-w-[1440px]">
				<h1 className="text-4xl font-bold mb-4">Our Services</h1>
				<p className="text-muted-foreground text-lg max-w-3xl">
					Explore our comprehensive range of technology solutions designed to help your
					business thrive in the digital era.
				</p>
			</div>
			<Services />
			<CTA />
		</div>
	);
}
