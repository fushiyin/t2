import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Briefcase, Building2, Users } from "lucide-react";
import { FORM_CV, CAREER_DETAILS } from "@/constant/career";
import { motion } from "framer-motion";

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

export default function CareersDetail() {
	const { id } = useParams();
	const navigate = useNavigate();

	const career = CAREER_DETAILS.find((career) => career.id === parseInt(id));

	if (!career) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen">
				<h1 className="text-2xl font-bold mb-4">Position not found</h1>
				<Button
					onClick={() => navigate(-1)}
					className="flex items-center gap-2"
				>
					<ArrowLeft size={16} />
					Back to Careers
				</Button>
			</div>
		);
	}

	return (
		<div className="container py-12 max-w-[1440px] mx-auto px-4 md:px-6">
			<motion.div
				initial="hidden"
				animate="visible"
				variants={fadeUp}
				className="mb-8"
			>
				<Button
					variant="ghost"
					className="mb-4"
					onClick={() => navigate(-1)}
				>
					<ArrowLeft className="mr-2 h-4 w-4" />
					Back to Careers
				</Button>

				<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
					<div>
						<h1 className="text-3xl font-bold mb-3">{career.title}</h1>
						<div className="flex flex-wrap gap-2">
							<span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-sm">
								<MapPin className="mr-1 h-4 w-4" />
								{career.location}
							</span>
							<span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-sm">
								<Briefcase className="mr-1 h-4 w-4" />
								{career.type}
							</span>
							<span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-sm">
								<Building2 className="mr-1 h-4 w-4" />
								{career.department}
							</span>
							<span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-sm">
								<Users className="mr-1 h-4 w-4" />
								{career.applicants} applicants
							</span>
						</div>
					</div>
					<Button
						className="bg-primary text-white hover:bg-primary/90"
						onClick={() => window.open(FORM_CV)}
					>
						Apply Now
					</Button>
				</div>
			</motion.div>

			<div className="grid gap-6 md:grid-cols-3">
				<motion.div
					className="md:col-span-2 space-y-6"
					initial="hidden"
					animate="visible"
					variants={fadeUp}
				>
					<Card>
						<CardContent className="p-6">
							<h2 className="text-xl font-bold mb-4">Job Description</h2>
							<p className="text-muted-foreground mb-6">{career.description}</p>

							<div>
								<h2 className="text-xl font-semibold mb-2">Requirements</h2>
								<ul className="space-y-2 text-muted-foreground mb-6">
									{career.requirements.map((req, index) => {
										if (req === "Preferential conditions for applicants:") {
											return (
												<li
													key={index}
													className=""
												>
													{req}
													<ul className="list-none pl-6 mt-2 space-y-1">
														{career.requirements
															.slice(index + 1, index + 5)
															.map((condition, subIndex) => (
																<li
																	key={`${index}-${subIndex}`}
																	className="text-muted-foreground"
																>
																	{condition.trim()}
																</li>
															))}
													</ul>
												</li>
											);
										}
										// Skip the numbered conditions as they're handled above
										if (
											req.trim().startsWith("1.") ||
											req.trim().startsWith("2.") ||
											req.trim().startsWith("3.") ||
											req.trim().startsWith("4.")
										) {
											return null;
										}
										// Regular requirement item
										return (
											<li
												key={index}
												className="list-disc list-inside"
											>
												{req}
											</li>
										);
									})}
								</ul>
							</div>

							<h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
							<ul className="list-disc list-inside space-y-2">
								{career.responsibilities.map((resp, index) => (
									<li
										key={index}
										className="text-muted-foreground"
									>
										{resp}
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</motion.div>

				<motion.div
					className="space-y-6"
					initial="hidden"
					animate="visible"
					variants={fadeUp}
				>
					<Card>
						<CardContent className="p-6">
							<h2 className="text-xl font-bold mb-4">Benefits</h2>
							<ul className="space-y-2">
								{career.benefits.map((benefit, index) => (
									<li
										key={index}
										className="text-muted-foreground"
									>
										• {benefit}
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="p-6">
							<h2 className="text-xl font-bold mb-4">Job Overview</h2>
							<div className="space-y-3">
								<div>
									<p className="text-sm text-muted-foreground">Posted Date</p>
									<p className="font-medium">{career.postedDate}</p>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Job Type</p>
									<p className="font-medium">{career.type}</p>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Location</p>
									<p className="font-medium">{career.location}</p>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Department</p>
									<p className="font-medium">{career.department}</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
}
