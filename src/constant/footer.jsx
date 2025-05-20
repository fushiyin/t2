import { Facebook, Globe, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

export const CONTACT_ITEMS = [
	{
		icon: <Phone className="text-[#19286D] w-5 h-5 flex-shrink-0" />,
		content: (
			<div>
				<p className="text-gray-600 text-sm">(VN)+84901709 319</p>
				<p className="text-gray-600 text-sm">(KR)+82104029 6760</p>
			</div>
		),
	},
	{
		icon: <Mail className="text-[#19286D] w-5 h-5 flex-shrink-0" />,
		content: (
			<div>
				<p className="text-gray-600 text-sm">ygkim@t2soft.com</p>
				<p className="text-gray-600 text-sm">ygkim@ttwosoft.com</p>
			</div>
		),
	},
	{
		icon: <Globe className="text-[#19286D] w-5 h-5 flex-shrink-0" />,
		content: (
			<a
				href="https://www.ttwosoft.com"
				target="_blank"
				rel="noopener noreferrer"
				className="text-gray-600 text-sm hover:text-[#19286D]"
			>
				www.ttwosoft.com
			</a>
		),
	},
	{
		icon: <MapPin className="text-[#19286D] w-5 h-5 flex-shrink-0 mt-0.5" />,
		content: (
			<p className="text-gray-600 text-sm">
				Kangnam Landmark72, Pham Hung, Nam tu Liem, Ha Noi
			</p>
		),
	},
];

export const SOCIAL_LINKS = [
	{
		name: "Facebook",
		url: "https://facebook.com",
		icon: <Facebook size={16} />,
		bgColor: "bg-[#19286D]",
		textColor: "text-white",
	},
	{
		name: "KakaoTalk",
		url: "https://kakaotalk.com",
		icon: <MessageCircle size={16} />,
		bgColor: "bg-[#19286D]",
		textColor: "text-white",
	},
	{
		name: "Telegram",
		url: "https://t.me",
		icon: <Send size={16} />,
		bgColor: "bg-[#19286D]",
		textColor: "text-white",
	},
];
