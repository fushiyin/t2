import earth from "@/assets/img/earth.png";
import classNames from "classnames";
import { MapPinCheckInsideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import "./style.css";

const GlobeComponent = () => {
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setPaused(true);
		}, 10000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="max-w-[1440px] m-auto earth-container w-full h-full grid grid-cols-2 px-10 items-center justify-center">
			<div
				className={classNames(
					"relative transform-3d earth h-[400px] w-[400px] rounded-full bg-cover [transform:rotate(20deg)] [animation:rotate_15s_linear_infinite] [box-shadow:inset_0px_-20px_50px_10px_#7debf2,0px_0px_30px_6px_#7debf2]",
					{
						paused,
						// zoomIn: paused,
					},
				)}
				style={{
					backgroundImage: `url(${earth})`,
				}}
			>
				<div
					className={classNames(
						"pinned absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
						{
							hidden: !paused,
						},
					)}
				>
					<MapPinCheckInsideIcon
						className="rotate-[-20deg]"
						color="red"
					/>
				</div>
			</div>
		</div>
	);
};

export default GlobeComponent;
