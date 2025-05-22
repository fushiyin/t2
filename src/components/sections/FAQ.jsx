import { useState } from "react";

export default function FAQ({ faqs = [] }) {
	const [openIndex, setOpenIndex] = useState(null);

	const handleToggle = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<section className="w-full max-w-2xl mx-auto">
			<div className="divide-y divide-gray-200">
				{faqs.map((faq, idx) => (
					<div key={idx}>
						<button
							className="w-full flex items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
							onClick={() => handleToggle(idx)}
							aria-expanded={openIndex === idx}
							aria-controls={`faq-panel-${idx}`}
						>
							<span className="font-semibold text-lg md:text-xl">{faq.question}</span>
							<span className="ml-4 text-2xl select-none">
								{openIndex === idx ? "–" : "+"}
							</span>
						</button>
						{openIndex === idx && (
							<div
								id={`faq-panel-${idx}`}
								className="pb-5 pl-2 text-base md:text-lg text-muted-foreground animate-fadeIn"
							>
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
