import { FOOTER } from "@/constant/footer";
import { Facebook, Globe, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";

const CONTACT_ITEMS = [
	{
		icon: <Phone className="text-foreground w-5 h-5 flex-shrink-0" />,
		content: (
			<div>
				<p className="text-foreground/80 text-sm">{FOOTER.PHONE_VN}</p>
				<p className="text-foreground/80 text-sm">{FOOTER.PHONE_KR}</p>
			</div>
		),
	},
	{
		icon: <Mail className="text-foreground w-5 h-5 flex-shrink-0" />,
		content: (
			<div>
				<p className="text-foreground/80 text-sm">{FOOTER.EMAIL_1}</p>
				<p className="text-foreground/80 text-sm">{FOOTER.EMAIL_2}</p>
			</div>
		),
	},
	{
		icon: <Globe className="text-foreground w-5 h-5 flex-shrink-0" />,
		content: (
			<a
				href="https://www.ttwosoft.com"
				target="_blank"
				rel="noopener noreferrer"
				className="text-foreground/80 text-sm hover:text-dark-blue"
			>
				{FOOTER.WEB_SITE}
			</a>
		),
	},
	{
		icon: <MapPin className="text-foreground w-5 h-5 flex-shrink-0 mt-0.5" />,
		content: <p className="text-foreground/80 text-sm">{FOOTER.ADDRESS}</p>,
	},
];

const SOCIAL_LINKS = [
	{
		name: "Facebook",
		url: "https://facebook.com",
		icon: <Facebook size={16} />,
		bgColor: "bg-foreground",
		textColor: "text-white",
	},
	{
		name: "KakaoTalk",
		url: "https://kakaotalk.com",
		icon: <MessageCircle size={16} />,
		bgColor: "bg-foreground",
		textColor: "text-white",
	},
	{
		name: "Telegram",
		url: "https://t.me",
		icon: <Send size={16} />,
		bgColor: "bg-foreground",
		textColor: "text-white",
	},
];

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
									<h3 className="text-foreground font-semibold text-lg mb-4">
										{section.title}
									</h3>
									<ul className="space-y-2">
										{section.links.map((link, linkIndex) => (
											<li key={linkIndex}>
												<Link
													to={link.to}
													className="text-foreground/80 hover:text-dark-blue transition-colors text-sm"
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
								className="text-foreground font-bold text-2xl"
							>
								T2Soft
							</Link>
							<p className="text-foreground/80 text-sm mt-2">
								Your global software service and solution partner
							</p>
						</div>
					</div>
				</div>

				<div className="mt-12 pt-4 border-t border-gray-100 text-center">
					<p className="text-foreground/60 text-sm">
						© {currentYear} T2Soft. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
