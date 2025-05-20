import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
	return (
		<div className="w-full h-full flex items-center justify-center bg-muted/50 py-16">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Ready to Transform Your Ideas?
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Let&apos;s discuss how T2Soft can help you achieve your technology goals.
						Our team is ready to bring your vision to life.
					</p>
				</div>
				<div className="flex flex-col gap-2 min-[400px]:flex-row">
					<Button
						asChild
						size="lg"
					>
						<Link
							to="/contact"
							className="flex items-center gap-2"
						>
							Contact Us <ArrowRightIcon className="h-4 w-4" />
						</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						size="lg"
					>
						<Link to="/services">Explore Our Services</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
