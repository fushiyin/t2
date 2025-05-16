import { ArrowRight } from "lucide-react";

const CaseStudyCard = ({ image, category, title, description, technologies }) => {
	return (
		<article className="bg-white rounded-lg shadow-sm w-[400px] max-md:w-[350px] max-sm:w-full">
			<img
				src={image}
				alt="Case study"
				className="w-full h-[184px] rounded-t-[8px] object-cover"
			/>
			<div className="p-4">
				<span className="inline-block px-4 py-2 mb-6 text-sm font-bold text-indigo-600 rounded-md border border-indigo-600">
					{category}
				</span>
				<h2 className="mb-4 text-xl font-bold leading-6 text-blue-950">{title}</h2>
				<p className="mb-6 text-sm font-light leading-6 text-blue-950">{description}</p>
				<p className="mb-4 text-sm font-light leading-6 text-blue-950 text-opacity-80">
					<span className="font-bold text-blue-950">Technologies:</span>{" "}
					<span>{technologies}</span>
				</p>
				<div className="flex gap-2 items-center text-sm font-semibold text-blue-950">
					<button className="underline cursor-pointer">More</button>
					<ArrowRight />
				</div>
			</div>
		</article>
	);
};

export default CaseStudyCard;
