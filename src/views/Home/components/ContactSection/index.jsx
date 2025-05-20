const ContactSection = () => {
	return (
		<div className="w-full h-full flex items-center bg-light-blue-gray/60">
			<div className="flex gap-10 justify-between px-5 mx-auto flex-col w-full max-w-[1440px]">
				<h2 className="mb-6 text-5xl font-bold tracking-tighter leading-10 text-near-black-blue max-md:text-4xl max-sm:text-3xl">
					Ready to Transform Your Ideas?
				</h2>
				<p className="mb-6 text-sm font-bold leading-6 text-black/80">
					Let&apos;s discuss how T2Soft can help you achieve your technology goals. Our
					team is ready to bring your vision to life.
				</p>
				<ul className="text-sm font-bold leading-6 text-black/80">
					<li>Expert consultation tailored to your business needs</li>
					<li>Cutting-edge technology solutions</li>
					<li>Dedicated support throughout your project</li>
				</ul>
			</div>
		</div>
	);
};

export default ContactSection;
