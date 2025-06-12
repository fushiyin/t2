import React from "react";
import section1_bg from "@/assets/solution_img/section01_background.svg";
const SolutionAndProduct = () => {
	return (
		<div className="w-full h-full bg-white">
			<div className="mx-auto max-w-[1440px] relative">
				<img
					src={section1_bg}
					alt=""
					className="absolute top-0 left-0 w-full h-full object-cover"
				/>
				<h4>내가 스스로 정한 업무 공간에서</h4>
				<h1>영감을 주는 스마트오피스로 출근해볼까요?</h1>
			</div>
		</div>
	);
};

export default SolutionAndProduct;
