import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(null);
	const { t } = useTranslation();

	const handleToggle = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	const faqs = [
		{
			question: t("faq.questions.services.question"),
			answer: t("faq.questions.services.answer"),
		},
		{
			question: t("faq.questions.technologies.question"),
			answer: t("faq.questions.technologies.answer"),
		},
		{
			question: t("faq.questions.quality.question"),
			answer: t("faq.questions.quality.answer"),
		},
		{
			question: t("faq.questions.communication.question"),
			answer: t("faq.questions.communication.answer"),
		},
		{
			question: t("faq.questions.pricing.question"),
			answer: t("faq.questions.pricing.answer"),
		},
	];

	return (
		<section className="w-full max-w-2xl mx-auto">
			<div className="divide-y divide-gray-200">
				{faqs.map((faq, idx) => (
					<div
						key={idx}
						className="relative"
					>
						<button
							className={classNames(
								"w-full flex items-center justify-between pb-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-300",
								{
									"pt-5": idx,
								},
							)}
							onClick={() => handleToggle(idx)}
							aria-expanded={openIndex === idx}
							aria-controls={`faq-panel-${idx}`}
						>
							<span className="font-semibold text-lg md:text-xl transition-colors duration-300">
								{faq.question}
							</span>
							<span
								className={classNames(
									"ml-4 text-2xl select-none transition-all duration-500 ease-in-out",
									{
										"rotate-45 scale-110": openIndex === idx,
									},
								)}
							>
								+
							</span>
						</button>
						<div
							id={`faq-panel-${idx}`}
							className={classNames(
								"overflow-hidden transition-all duration-500 ease-in-out",
								{
									"max-h-0 opacity-0": openIndex !== idx,
									"max-h-[500px] opacity-100": openIndex === idx,
								},
							)}
						>
							<div className="pb-5 pl-2 text-base md:text-lg text-muted-foreground transform transition-all duration-500 ease-in-out font-sans break-keep whitespace-normal break-words">
								{faq.answer}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
