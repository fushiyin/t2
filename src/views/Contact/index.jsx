import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
	const { t } = useTranslation();
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

		await new Promise((resolve) => setTimeout(resolve, 1000));

		console.log("Form submitted:", formState);

		setIsSubmitting(false);
		setIsSubmitted(true);
		setFormState({ name: "", email: "", company: "", message: "" });

		setTimeout(() => {
			setIsSubmitted(false);
		}, 5000);
	};

	return (
		<div className="w-full h-full bg-white py-[64px]">
			<div className="mx-auto max-w-[1440px]">
				<div className="flex flex-col md:flex-row-reverse">
					<div className="w-full h-full bg-white flex items-center justify-center">
						<div className="container xl:px-4 sm:px-0 md:px-0 h-full flex flex-col justify-center">
							<div className="grid gap-10 lg:grid-cols-2 items-center">
								<div className="space-y-4 p-3 md:p-3 lg:p-6 xl:p-6">
									<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark-gray">
										{t("contact.description")}
									</h2>
									<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
										{t("contact.description2")}
									</p>
									<ul className="space-y-2 text-muted-foreground">
										<li className="flex items-center gap-2">
											<span className="h-2 w-2 rounded-full bg-near-black-blue"></span>
											<span>{t("contact.description_sub.expert")}</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="h-2 w-2 rounded-full bg-near-black-blue"></span>
											<span>{t("contact.description_sub.cutting_edge")}</span>
										</li>
										<li className="flex items-center gap-2">
											<span className="h-2 w-2 rounded-full bg-near-black-blue"></span>
											<span>{t("contact.description_sub.dedicated")}</span>
										</li>
									</ul>
								</div>

								<div className="bg-white/80 rounded-lg border-t shadow-lg">
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
											<h3 className="text-xl font-bold mb-2 text-dark-gray">
												{t("contact.form.success_submit")}
											</h3>
											<p className="text-muted-foreground">
												{t("contact.form.success_message")}
											</p>
										</motion.div>
									) : (
										<form
											onSubmit={handleSubmit}
											className="space-y-4 p-3 md:p-3 lg:p-6 xl:p-6"
										>
											<div>
												<label
													htmlFor="name"
													className="block text-sm font-medium mb-1 text-dark-gray"
												>
													{t("contact.form.name")}
												</label>
												<Input
													id="name"
													name="name"
													value={formState.name}
													onChange={handleChange}
													placeholder="Your name"
													required
													className="focus:outline-none focus:ring-0 focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-0 border-t2-grayBlue focus-visible:border-light-blue"
												/>
											</div>
											<div>
												<label
													htmlFor="email"
													className="block text-sm font-medium mb-1 text-dark-gray"
												>
													{t("contact.form.email")}
												</label>
												<Input
													id="email"
													name="email"
													type="email"
													value={formState.email}
													onChange={handleChange}
													placeholder="your@email.com"
													required
													className="focus:outline-none focus:ring-0 focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-0 border-t2-grayBlue focus-visible:border-light-blue"
												/>
											</div>
											<div>
												<label
													htmlFor="company"
													className="block text-sm font-medium mb-1 text-dark-gray"
												>
													{t("contact.form.company")}
												</label>
												<Input
													id="company"
													name="company"
													value={formState.company}
													onChange={handleChange}
													placeholder="Your company name"
													className="focus:outline-none focus:ring-0 focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-0 border-t2-grayBlue focus-visible:border-light-blue"
												/>
											</div>
											<div>
												<label
													htmlFor="message"
													className="block text-sm font-medium mb-1 text-dark-gray"
												>
													{t("contact.form.message")}
												</label>
												<Textarea
													id="message"
													name="message"
													value={formState.message}
													onChange={handleChange}
													placeholder={t(
														"contact.form.message_placeholder",
													)}
													className="min-h-[120px] border-t2-grayBlue focus:outline-none focus:ring-0 focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-light-blue"
													required
												/>
											</div>
											<Button
												type="submit"
												className="w-full bg-dark-blue hover:bg-light-blue cursor-pointer text-white transition-colors duration-300"
												disabled={isSubmitting}
											>
												{isSubmitting
													? t("contact.form.submitting")
													: t("contact.form.submit")}
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
