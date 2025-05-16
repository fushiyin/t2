const ContactSection = () => {
	return (
		<section
			className="py-20 bg-blue-950"
			id="contact-section"
		>
			<div className="flex gap-10 justify-between px-5 mx-auto max-w-[1440px] max-md:flex-col">
				<div className="max-w-[663px]">
					<h2 className="mb-6 text-5xl font-bold tracking-tighter leading-10 text-white max-md:text-4xl max-sm:text-3xl">
						Ready to Transform Your Ideas?
					</h2>
					<p className="mb-6 text-sm font-bold leading-6 text-white">
						Let&apos;s discuss how T2Soft can help you achieve your technology goals.
						Our team is ready to bring your vision to life.
					</p>
					<ul className="text-sm font-bold leading-6 text-white">
						<li>Expert consultation tailored to your business needs</li>
						<li>Cutting-edge technology solutions</li>
						<li>Dedicated support throughout your project</li>
					</ul>
				</div>

				<div className="p-3.5 bg-white rounded-md shadow-[6px_6px_8px_rgba(25,40,109,0.60)] w-[625px] max-md:w-full">
					<form className="flex flex-col gap-6">
						<div>
							<label
								htmlFor="fullName"
								className="mb-2 text-sm font-bold tracking-tighter leading-4 text-blue-950"
							>
								Full Name
							</label>
							<input
								id="fullName"
								type="text"
								placeholder="Your name"
								className="px-1.5 w-full text-sm rounded-md border border-slate-200 h-[30px]"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="mb-2 text-sm font-bold tracking-tighter leading-4 text-blue-950"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								placeholder="your@email.com"
								className="px-1.5 w-full text-sm rounded-md border border-slate-200 h-[30px]"
							/>
						</div>

						<div>
							<label
								htmlFor="company"
								className="mb-2 text-sm font-bold tracking-tighter leading-4 text-blue-950"
							>
								Company
							</label>
							<input
								id="company"
								type="text"
								placeholder="Your company name"
								className="px-1.5 w-full text-sm rounded-md border border-slate-200 h-[30px]"
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="mb-2 text-sm font-bold tracking-tighter leading-4 text-blue-950"
							>
								How can we help?
							</label>
							<textarea
								id="message"
								placeholder="Your name . . ."
								className="px-1.5 py-2 w-full text-sm rounded-md border resize-none border-slate-200 h-[100px]"
							/>
						</div>

						<button
							type="submit"
							className="w-full text-sm font-bold tracking-tighter leading-4 rounded-md bg-blue-950 h-[46px] text-slate-200"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
