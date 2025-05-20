import { useNavigate } from "react-router-dom";

const ContactSection = () => {
	const navigate = useNavigate();

	const handleContactClick = () => {
		navigate("/contact");
	};

	return (
		<div className="w-full h-full flex items-center bg-light-blue-gray/60 px-5">
			<div className="flex flex-col max-w-[1440px] mx-auto w-full gap-8 md:gap-10 justify-center">
				<h2 className="text-5xl font-bold tracking-tighter leading-tight text-t2-darkBlue max-md:text-4xl max-sm:text-3xl">
					Ready to Transform Your Ideas?
				</h2>
				<p className="text-sm font-bold leading-6 text-muted-foreground max-w-xl">
					Let&apos;s discuss how T2Soft can help you achieve your technology goals. Our
					team is ready to bring your vision to life.
				</p>
				<ul className="list-disc list-inside text-sm font-bold leading-6 text-muted-foreground max-w-xl space-y-2">
					<li>Expert consultation tailored to your business needs</li>
					<li>Cutting-edge technology solutions</li>
					<li>Dedicated support throughout your project</li>
				</ul>
				<button
					onClick={handleContactClick}
					className="self-start bg-[#19286D] hover:bg-blue-700 cursor-pointer text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300 shadow-md"
				>
					Contact Us
				</button>
			</div>
		</div>
	);
};

export default ContactSection;
