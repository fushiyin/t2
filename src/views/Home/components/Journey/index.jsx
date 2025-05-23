const VisionJourney = () => {
	const slides = [
		{
			id: "vision",
			title: "Vision",
			testimonial:
				"Become the best global development partnet leading next-generation technologies.",
			author: "Novacene",
		},
		{
			id: "mission",
			title: "Mission",
			testimonial:
				"We provide reliable software development and solutions to customers around the world, and provide cost-effective and high-quality services with excellent development talents in Vietnam. We support our customer business growth through technological innovation and flexible collaboration.",
			author: "Novacene",
		},
		{
			id: "values",
			title: "Values",
			testimonial:
				"Grow together as a team with customer, we quickly absorb and apply the latest trends and technologies to stay ahead. We gain customer trust through honest communication and responsible behaviors.",
			author: "Novacene",
		},
	];
	return (
		<div className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-white to-blue-100 relative overflow-hidden">
			<div className="absolute top-10 left-1/2 transform -translate-x-1/2">
				<div className="w-64 h-64 bg-gradient-to-b from-blue-100 to-transparent rounded-full" />
				<p className="absolute top-24 left-1/2 transform -translate-x-1/2 text-xl font-semibold text-blue-700">
					VISION
				</p>
			</div>

			<div className="absolute bottom-50 left-1/2 transform -translate-x-1/2">
				<div className="w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] bg-gradient-to-b from-indigo-300 to-indigo-500 rounded-full" />
				<div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 text-center">
					<h1 className="text-4xl font-extrabold text-white">MISSION</h1>
					<p className="text-sm text-white mt-2 px-4">
						Your main goal is to learn how to set and achieve goals. <br />
						Do it, and your life will find the necessary balance.
					</p>
				</div>
			</div>
		</div>
	);
};

export default VisionJourney;
