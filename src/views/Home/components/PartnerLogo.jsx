"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Sample partner logos - replace with actual logos
const partnerLogos = [
	{
		name: "Partner 1",
		logo: "https://upload.wikimedia.org/wikipedia/vi/thumb/c/c9/Highlands_Coffee_logo.svg/1200px-Highlands_Coffee_logo.svg.png",
	},
	{
		name: "Partner 2",
		logo: "https://cdn.haitrieu.com/wp-content/uploads/2022/06/logo-starbucks-1992.png",
	},
	{
		name: "Partner 3",
		logo: "https://laboong.vn/",
	},
	{
		name: "Partner 4",
		logo: "https://phela.vn/chuyendacsan/web/images/logo.png",
	},
	{
		name: "Partner 5",
		logo: "https://pholyquocsu.vn/wp-content/uploads/2022/07/logo-LQSs.png",
	},
	{
		name: "Partner 6",
		logo: "https://lh4.googleusercontent.com/proxy/05TQdj1j57sza3LuTthTPuyG_47HSzM1NsctbwDpXjaN9bg5l4PPQoABTY1_2t9CFtZjio7iImUhK6UBZd-FjFyxIzf9N1b1aWI3tnJLm_jYPAMHd7E8Hqa6G2wJebuzPl4bTJcKERFrVmnK",
	},
	{
		name: "Partner 7",
		logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png",
	},
	{
		name: "Partner 8",
		logo: "https://hanoicomputercdn.com/media/lib/30-05-2024/favicon-hacom-2024.png",
	},
	{
		name: "Partner 9",
		logo: "https://cdn.haitrieu.com/wp-content/uploads/2022/04/Logo-Bia-Ha-Noi-SL-H.png",
	},
];

export default function PartnerLogos() {
	const [duplicatedLogos, setDuplicatedLogos] = useState([...partnerLogos, ...partnerLogos]);

	useEffect(() => {
		// Duplicate logos to ensure smooth infinite scroll
		setDuplicatedLogos([...partnerLogos, ...partnerLogos]);
	}, []);

	return (
		<div className="w-full bg-white border-y border-t2-paleBlue py-4 overflow-hidden">
			<div className="relative w-full overflow-hidden h-[80px] flex items-center">
				<motion.div
					className="flex"
					animate={{
						x: ["0%", "-50%"],
					}}
					transition={{
						x: {
							duration: 30,
							ease: "linear",
							repeat: Number.POSITIVE_INFINITY,
						},
					}}
				>
					{duplicatedLogos.map((partner, index) => (
						<div
							key={`${partner.name}-${index}`}
							className="flex-shrink-0 mx-8 flex items-center justify-center"
						>
							<img
								src={partner.logo || "/placeholder.svg"}
								alt={partner.name}
								className="h-12 w-auto opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
							/>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
