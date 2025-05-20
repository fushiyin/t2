import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export default function Contact() {
	return (
		<div className=" w-full">
			<div className="py-12 md:py-16 lg:py-20 max-w-[1440px] mx-auto px-4 md:px-6">
				<h1 className="text-3xl font-bold mb-6">Contact Us</h1>

				<div className="grid gap-8 md:grid-cols-2">
					<div>
						<p className="text-muted-foreground mb-8">
							Have a question or want to discuss a potential project? Get in touch
							with our team and we&apos;ll get back to you as soon as possible.
						</p>

						<div className="space-y-6">
							<div className="flex items-start">
								<MailIcon className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
								<div>
									<h3 className="font-medium">Email</h3>
									<p className="text-muted-foreground">contact@t2soft.com</p>
								</div>
							</div>

							<div className="flex items-start">
								<PhoneIcon className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
								<div>
									<h3 className="font-medium">Phone</h3>
									<p className="text-muted-foreground">+84 (28) 123-4567</p>
								</div>
							</div>

							<div className="flex items-start">
								<MapPinIcon className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
								<div>
									<h3 className="font-medium">Address</h3>
									<p className="text-muted-foreground">
										123 Nguyen Hue Boulevard
										<br />
										District 1, Ho Chi Minh City
										<br />
										Vietnam
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-card p-6 rounded-lg shadow-sm">
						<h2 className="text-xl font-semibold mb-4">Send us a message</h2>
						<form className="space-y-4">
							<div className="grid gap-4 grid-cols-2">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium mb-1"
									>
										Name
									</label>
									<Input
										id="name"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium mb-1"
									>
										Email
									</label>
									<Input
										id="email"
										type="email"
										placeholder="your@email.com"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="company"
									className="block text-sm font-medium mb-1"
								>
									Company
								</label>
								<Input
									id="company"
									placeholder="Your company name"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-1"
								>
									Message
								</label>
								<Textarea
									id="message"
									placeholder="Your message..."
									className="min-h-[120px]"
								/>
							</div>

							<Button
								type="submit"
								className="w-full"
							>
								Send Message
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
