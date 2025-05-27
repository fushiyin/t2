const HoverCard = ({ icon, title, description, className = "" }) => {
	return (
		<div
			className={`flex flex-col items-start text-left w-full h-full gap-[24px] ${className}`}
		>
			{/* <div className="mb-6">{icon}</div> */}
			<div className="bg-gray-100 p-3 rounded-full inline-flex items-center justify-center">
				{icon}
			</div>
			<div>
				<h2 className="text-xl font-semibold mb-2 text-gray-900 min-h-[56px]">{title}</h2>
				<p className="text-base text-gray-600 min-h-[96px]">{description}</p>
			</div>
		</div>
	);
};

export default HoverCard;
