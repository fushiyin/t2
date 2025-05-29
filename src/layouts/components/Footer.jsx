import { FOOTER } from "@/constant/footer";
import { motion } from "framer-motion";
import { Facebook, Globe, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";

const CONTACT_ITEMS = [
	{
		id: "phone",
		icon: <Phone className="text-foreground w-5 h-5 flex-shrink-0" />,
		content: (
			<div>
				<p className="text-foreground/80 text-sm">{FOOTER.PHONE_VN}</p>
				<p className="text-foreground/80 text-sm">{FOOTER.PHONE_KR}</p>
			</div>
		),
	},
	{
		id: "email",
		icon: <Mail className="text-foreground w-5 h-5 flex-shrink-0" />,
		content: (
			<div>
				<p className="text-foreground/80 text-sm">{FOOTER.EMAIL_1}</p>
				<p className="text-foreground/80 text-sm">{FOOTER.EMAIL_2}</p>
			</div>
		),
	},
	{
		id: "website",
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
		id: "address",
		icon: <MapPin className="text-foreground w-5 h-5 flex-shrink-0 mt-0.5" />,
		content: <p className="text-foreground/80 text-sm">{FOOTER.ADDRESS}</p>,
	},
];

const SOCIAL_LINKS = [
	{
		id: "facebook",
		name: "Facebook",
		url: "https://facebook.com",
		icon: <Facebook size={16} />,
		bgColor: "bg-foreground",
		textColor: "text-white",
	},
	{
		id: "kakaotalk",
		name: "KakaoTalk",
		url: "https://kakaotalk.com",
		icon: <MessageCircle size={16} />,
		bgColor: "bg-foreground",
		textColor: "text-white",
	},
	{
		id: "telegram",
		name: "Telegram",
		url: "https://t.me",
		icon: <Send size={16} />,
		bgColor: "bg-foreground",
		textColor: "text-white",
	},
];

const fadeIn = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
	const currentYear = new Date().getFullYear();
	// Contact information items

	const footerSections = [
		{
			id: "company",
			title: "Company",
			links: [
				{ to: "/about-us", label: "About Us" },
				{ to: "/careers", label: "Careers" },
				{ to: "/contact", label: "Contact" },
			],
		},
		{
			id: "resources",
			title: "Resources",
			links: [
				{ to: "/blog", label: "Blog" },
				{ to: "/documentation", label: "Documentation" },
				{ to: "/contact", label: "Contact" },
			],
		},
		{
			id: "studies",
			title: "Case Studies",
			links: [
				{ to: "/privacy", label: "Privacy" },
				{ to: "/terms", label: "Terms" },
			],
		},
	];

	const addressItem = CONTACT_ITEMS.find((item) => item.id === "address");

	return (
		<motion.footer
			variants={fadeIn}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			className="bg-white border-t border-gray-100"
		>
			<div className="container mx-auto max-w-[1440px] pt-12">
				<div className="flex flex-col xl:flex-row gap-8">
					{/* Logo + Social */}
					<div className="flex flex-col items-center xl:items-start space-y-4 w-full xl:w-2/5 lg:w-full">
						<Link
							to="/"
							className="text-foreground font-bold text-2xl"
						>
							T2Soft
						</Link>
						<p className="text-foreground/80 text-sm text-center xl:text-left">
							Your global software service and solution partner
						</p>
						<div className="flex space-x-3">
							{SOCIAL_LINKS.map((social) => (
								<a
									key={social.id}
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

					<div className="flex flex-1 sm:flex-row flex-col justify-between gap-8">
						{/* Menu Links */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:flex md:w-3/4 gap-8 w-full xl:w-2/3 text-center xl:text-left">
							{footerSections.map((section) => (
								<div
									key={section.id}
									className="md:w-1/3"
								>
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
						{/* Contact */}
						<div className="flex flex-col items-center xl:items-start space-y-4 w-full md:w-1/4 xl:w-1/3">
							<h3 className="text-foreground font-semibold text-lg mb-4">Contact</h3>
							{CONTACT_ITEMS.map((item) => {
								const isHiddenOnlyOnMd =
									item.id === "address" || item.id === "website";

								const visibilityClass = isHiddenOnlyOnMd
									? "md:hidden xl:flex "
									: "";

								return (
									<div
										key={item.id}
										className={`flex items-center space-x-3 ${visibilityClass}`}
									>
										{item.icon}
										<span className="text-sm text-foreground/80">
											{item.content}
										</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				{addressItem && (
					<div className="hidden md:flex xl:hidden md:w-full justify-center items-center space-x-3">
						{addressItem.icon}
						<span className="text-sm text-foreground/80">{addressItem.content}</span>
					</div>
				)}

				<div className="w-full mt-6 p-4 border-t border-gray-100 text-center">
					<p className="text-foreground/60 text-sm">
						© {currentYear} T2Soft. All rights reserved.
					</p>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
