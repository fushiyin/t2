import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CTA() {
	const { t } = useTranslation();

	return (
		<div className="w-full h-full flex items-center justify-center bg-muted/50 py-16">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						{t("contact_cta.title")}
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans break-keep whitespace-normal break-words">
						{t("contact_cta.description")}
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
						<Link to="/services">{t("contact_cta.services_button")}</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
