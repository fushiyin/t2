import { CONTACT_ITEMS, SOCIAL_LINKS } from "@/constant/footer";
import { Link } from "react-router-dom";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	// Contact information items
	const footerSections = [
		{
			title: "Company",
			links: [
				{ to: "/about-us", label: "About Us" },
				{ to: "/careers", label: "Careers" },
				{ to: "/contact", label: "Contact" },
			],
		},
		{
			title: "Resources",
			links: [
				{ to: "/blog", label: "Blog" },
				{ to: "/documentation", label: "Documentation" },
				{ to: "/contact", label: "Contact" },
			],
		},
		{
			title: "Legal",
			links: [
				{ to: "/privacy", label: "Privacy" },
				{ to: "/terms", label: "Terms" },
			],
		},
	];

	return (
		<footer className="d-flex justify-center bg-white border-t border-gray-100 pt-12 pb-4 ">
			<div className="container mx-auto px-4 max-w-[1440px]">
				<div className="flex flex-col md:flex-row-reverse">
					{/* T2Soft */}

					<div className="md:w-3/8 mb-8 md:mb-0 flex flex-col items-end space-y-6">
						{/* Contact info */}
						<div className="space-y-3">
							{CONTACT_ITEMS.map((item, index) => (
								<div
									key={index}
									className="flex items-center space-x-3"
								>
									{" "}
									{item.icon}
									{item.content}
								</div>
							))}
						</div>

						{/* Social links */}

						<div className="flex space-x-3">
							{SOCIAL_LINKS.map((social, index) => (
								<a
									key={index}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									className={`${social.bgColor} ${social.textColor} p-2 rounded-full w-8 h-8 flex items-center justify-center hover:opacity-90 transition-opacity`}
									aria-label={social.name}
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>

					{/* Menu Links */}

					<div className="md:w-3/8 ">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
							{footerSections.map((section, index) => (
								<div key={index}>
									<h3 className="text-[#19286D] font-semibold text-lg mb-4">
										{section.title}
									</h3>
									<ul className="space-y-2">
										{section.links.map((link, linkIndex) => (
											<li key={linkIndex}>
												<Link
													to={link.to}
													className="text-gray-600 hover:text-[#19286D] transition-colors text-sm"
												>
													{link.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					<div className="md:w-2/8 mb-8 md:mb-0 flex flex-col space-y-6">
						<div>
							<Link
								to="/"
								className="text-[#19286D] font-bold text-2xl"
							>
								T2Soft
							</Link>
							<p className="text-gray-600 text-sm mt-2">
								Your global software service and solution partner
							</p>
						</div>
					</div>
				</div>

				<div className="mt-12 pt-4 border-t border-gray-100 text-center">
					<p className="text-gray-500 text-sm">
						© {currentYear} T2Soft. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
