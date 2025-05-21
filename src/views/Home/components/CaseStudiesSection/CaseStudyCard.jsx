import { ArrowRightIcon } from "lucide-react";

const CaseStudyCard = ({ image, category, title, description, technologies }) => {
	return (
		<div className="bg-white rounded-lg shadow-md w-[400px] max-md:w-[350px] max-sm:w-full ">
			<img
				src={image}
				alt="Case study"
				className="w-full h-[184px] rounded-t-[8px] object-cover"
			/>
			<div className="p-4">
				<span className="inline-block px-4 py-2 mb-6 text-sm font-bold text-foreground rounded-md border border-foreground">
					{category}
				</span>
				<h2 className="mb-4 text-xl font-bold leading-6 text-foreground">{title}</h2>
				<p className="mb-6 text-sm font-light leading-6 text-foreground">{description}</p>
				<p className="mb-4 text-sm font-light leading-6 text-foreground text-opacity-80">
					<span className="font-bold text-foreground">Technologies:</span>{" "}
					<span>{technologies}</span>
				</p>
				<div className="flex gap-2 items-center text-sm font-semibold text-foreground">
					<button className="flex items-center gap-1 underline cursor-pointer">
						More <ArrowRightIcon className="h-4 w-4" />{" "}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CaseStudyCard;
