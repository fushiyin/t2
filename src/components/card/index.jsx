const HoverCard = ({ icon, title, description, className = "" }) => {
	return (
		<div className={`flex flex-col items-start text-left w-full h-full ${className}`}>
			<div className="mb-6">{icon}</div>
			<h2 className="text-xl font-semibold mb-2 text-gray-900 min-h-[56px]">{title}</h2>
			<p className="text-base text-gray-600 min-h-[96px]">{description}</p>
		</div>
	);
};

export default HoverCard;
