import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Handle form submission here
		console.log("Form submitted:", formState);

		setIsSubmitting(false);
		setIsSubmitted(true);
		setFormState({ name: "", email: "", company: "", message: "" });

		// Reset success message after 5 seconds
		setTimeout(() => {
			setIsSubmitted(false);
		}, 5000);
	};

	return (
		<div className="w-full h-[600px] bg-white pt-[64px]">
			<div className="mx-auto max-w-[1440px]">
				<div className="flex flex-col md:flex-row-reverse">
					<div className="w-full h-full bg-white flex items-center justify-center">
						<div className="container px-4 md:px-6 h-full flex flex-col justify-center">
							<div className="grid gap-10 lg:grid-cols-2 items-center">
								<div className="space-y-4">
									<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-t2-darkBlue">
										Ready to Transform Your Ideas?
									</h2>
									<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
										Let&apos;s discuss how T2Soft can help you achieve your
										technology goals. Our team is ready to bring your vision to
										life.
									</p>
									<ul className="space-y-2 text-muted-foreground">
										<li className="flex items-center gap-2">
											<span className="h-2 w-2 rounded-full bg-near-black-blue"></span>
											<span>
												Expert consultation tailored to your business needs
											</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="h-2 w-2 rounded-full bg-near-black-blue"></span>
											<span>Cutting-edge technology solutions</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="h-2 w-2 rounded-full bg-near-black-blue"></span>
											<span>Dedicated support throughout your project</span>
										</li>
									</ul>
								</div>

								<div className="bg-white rounded-lg border border-pale-blue p-6 shadow-sm">
									{isSubmitted ? (
										<motion.div
											className="flex flex-col items-center justify-center h-full py-8 text-center"
											initial={{ opacity: 0, scale: 0.9 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.3 }}
										>
											<div className="rounded-full bg-green-100 p-3 mb-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6 text-green-600"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M5 13l4 4L19 7"
													/>
												</svg>
											</div>
											<h3 className="text-xl font-bold mb-2 text-t2-darkBlue">
												Message Sent!
											</h3>
											<p className="text-muted-foreground">
												Thank you for reaching out. We&apos;ll get back to
												you shortly.
											</p>
										</motion.div>
									) : (
										<form
											onSubmit={handleSubmit}
											className="space-y-4"
										>
											<div>
												<label
													htmlFor="name"
													className="block text-sm font-medium mb-1 text-t2-darkBlue"
												>
													Full Name
												</label>
												<Input
													id="name"
													name="name"
													value={formState.name}
													onChange={handleChange}
													placeholder="Your name"
													required
													className="border-t2-grayBlue focus-visible:ring-t2-blue"
												/>
											</div>
											<div>
												<label
													htmlFor="email"
													className="block text-sm font-medium mb-1 text-t2-darkBlue"
												>
													Email
												</label>
												<Input
													id="email"
													name="email"
													type="email"
													value={formState.email}
													onChange={handleChange}
													placeholder="your@email.com"
													required
													className="border-t2-grayBlue focus-visible:ring-t2-blue"
												/>
											</div>
											<div>
												<label
													htmlFor="company"
													className="block text-sm font-medium mb-1 text-t2-darkBlue"
												>
													Company
												</label>
												<Input
													id="company"
													name="company"
													value={formState.company}
													onChange={handleChange}
													placeholder="Your company name"
													className="border-t2-grayBlue focus-visible:ring-t2-blue"
												/>
											</div>
											<div>
												<label
													htmlFor="message"
													className="block text-sm font-medium mb-1 text-t2-darkBlue"
												>
													How can we help?
												</label>
												<Textarea
													id="message"
													name="message"
													value={formState.message}
													onChange={handleChange}
													placeholder="Tell us about your project or inquiry..."
													className="min-h-[120px] border-t2-grayBlue focus-visible:ring-t2-blue"
													required
												/>
											</div>
											<Button
												type="submit"
												className="w-full bg-dark-blue hover:bg-blue-700 cursor-pointer text-white"
												disabled={isSubmitting}
											>
												{isSubmitting ? "Sending..." : "Send Message"}
											</Button>
										</form>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
