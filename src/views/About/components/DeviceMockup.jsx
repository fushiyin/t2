const DeviceMockup = ({ imageSrc, type }) => {
	if (type === "mobile") {
		return (
			<div className="w-[120px] h-[220px] bg-[var(--pure-black)] dark:bg-[var(--color-light-blue-gray)] rounded-[1rem] p-2 shadow-lg relative">
				<div className="w-12 h-2 bg-gray-800 rounded-md mx-auto mb-2" />
				<div className="w-full h-[190px] overflow-hidden rounded-[1rem]">
					<img
						src={imageSrc}
						alt="Mobile Screen"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		);
	}

	if (type === "tablet") {
		return (
			<div className="w-[200px] h-[280px] bg-[var(--pure-black)] dark:bg-[var(--color-light-blue-gray)]  rounded-[1.5rem] p-3 shadow-lg relative">
				<div className="w-14 h-1.5 bg-gray-800 rounded-md mx-auto mb-3" />
				<div className="w-full h-[235px] overflow-hidden rounded-[1rem]">
					<img
						src={imageSrc}
						alt="Tablet Screen"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="w-[300px]">
			<div className="rounded-lg overflow-hidden shadow-lg bg-gray-200 h-[200px] border-10 border-[var(--pure-black)] dark:border-[var(--color-light-blue-gray)] ">
				<img
					src={imageSrc}
					alt="Computer Screen"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="w-20 h-4 bg-[var(--pure-black)] dark:bg-[var(--color-light-blue-gray)] rounded-md mx-auto mt-2" />
		</div>
	);
};

export default DeviceMockup;
