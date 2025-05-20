import ContactCTA from "../Home/components/ContactCTA";

const Contact = () => {
	return (
		<div className="w-full h-[600px] bg-white pt-[64px]">
			<div className="mx-auto max-w-[1440px]">
				<div className="flex flex-col md:flex-row-reverse">
					<ContactCTA />
				</div>
			</div>
		</div>
	);
};

export default Contact;
