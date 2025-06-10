import SmartPagination from "@/components/SmartPagination/SmartPagination";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, Edit2, Filter, Plus, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

// Constants for select options
const DEPARTMENTS = [
	"Engineering",
	"Design",
	"Product",
	"Marketing",
	"Sales",
	"Human Resources",
	"Customer Support",
	"IT Security",
	"Data & Analytics",
	"Quality Assurance",
];

const LOCATIONS = ["Ho Chi Minh City", "Hanoi", "Da Nang", "Remote"];

const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship"];

const STATUS_OPTIONS = ["Open", "Closed"];

// Mock data for careers
const initialCareers = [
	{
		id: 1,
		title: "Senior Frontend Developer",
		department: "Engineering",
		location: "Ho Chi Minh City",
		type: "Full-time",
		status: "Open",
		applicants: 12,
		postedDate: "2024-03-15",
	},
	{
		id: 2,
		title: "UX/UI Designer",
		department: "Design",
		location: "Hanoi",
		type: "Full-time",
		status: "Open",
		applicants: 8,
		postedDate: "2024-03-14",
	},
	{
		id: 3,
		title: "Backend Developer",
		department: "Engineering",
		location: "Remote",
		type: "Contract",
		status: "Closed",
		applicants: 15,
		postedDate: "2024-03-10",
	},
	{
		id: 4,
		title: "Product Manager",
		department: "Product",
		location: "Ho Chi Minh City",
		type: "Full-time",
		status: "Open",
		applicants: 5,
		postedDate: "2024-03-12",
	},
	{
		id: 5,
		title: "DevOps Engineer",
		department: "Engineering",
		location: "Remote",
		type: "Full-time",
		status: "Open",
		applicants: 7,
		postedDate: "2024-03-13",
	},
	{
		id: 6,
		title: "Mobile App Developer",
		department: "Engineering",
		location: "Da Nang",
		type: "Full-time",
		status: "Open",
		applicants: 9,
		postedDate: "2024-04-01",
	},
	{
		id: 7,
		title: "Data Scientist",
		department: "Data & Analytics",
		location: "Remote",
		type: "Part-time",
		status: "Open",
		applicants: 14,
		postedDate: "2024-04-03",
	},
	{
		id: 8,
		title: "Marketing Specialist",
		department: "Marketing",
		location: "Hanoi",
		type: "Full-time",
		status: "Open",
		applicants: 6,
		postedDate: "2024-04-05",
	},
	{
		id: 9,
		title: "QA Engineer",
		department: "Quality Assurance",
		location: "Ho Chi Minh City",
		type: "Full-time",
		status: "Closed",
		applicants: 11,
		postedDate: "2024-03-30",
	},
	{
		id: 10,
		title: "Technical Writer",
		department: "Product",
		location: "Remote",
		type: "Contract",
		status: "Open",
		applicants: 4,
		postedDate: "2024-04-06",
	},
	{
		id: 11,
		title: "Business Analyst",
		department: "Product",
		location: "Ho Chi Minh City",
		type: "Full-time",
		status: "Open",
		applicants: 10,
		postedDate: "2024-04-02",
	},
	{
		id: 12,
		title: "HR Manager",
		department: "Human Resources",
		location: "Hanoi",
		type: "Full-time",
		status: "Open",
		applicants: 3,
		postedDate: "2024-04-01",
	},
	{
		id: 13,
		title: "Customer Support Specialist",
		department: "Customer Support",
		location: "Da Nang",
		type: "Part-time",
		status: "Closed",
		applicants: 7,
		postedDate: "2024-03-28",
	},
	{
		id: 14,
		title: "Cybersecurity Analyst",
		department: "IT Security",
		location: "Remote",
		type: "Full-time",
		status: "Open",
		applicants: 5,
		postedDate: "2024-04-04",
	},
	{
		id: 15,
		title: "Sales Executive",
		department: "Sales",
		location: "Ho Chi Minh City",
		type: "Full-time",
		status: "Open",
		applicants: 13,
		postedDate: "2024-04-07",
	},
];

const ITEMS_PER_PAGE = 8;

const Careers = () => {
	const [careers, setCareers] = useState(initialCareers);
	const [currentPage, setCurrentPage] = useState(1);
	const [sortConfig, setSortConfig] = useState({ key: "title", direction: "asc" });
	const [editingCareer, setEditingCareer] = useState(null);
	const [careerToDelete, setCareerToDelete] = useState(null);
	const [showAddDialog, setShowAddDialog] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [statusFilter, setStatusFilter] = useState("All");

	const form = useForm({
		defaultValues: {
			title: "",
			department: "",
			location: "",
			type: "",
			status: "Open",
		},
	});

	// Handle form submission
	const onSubmit = (data) => {
		if (editingCareer) {
			// Update existing career
			setCareers(
				careers.map((career) =>
					career.id === editingCareer.id
						? { ...career, ...data, postedDate: career.postedDate }
						: career,
				),
			);
		} else {
			// Add new career
			const newCareer = {
				id: careers.length + 1,
				...data,
				status: "Open",
				applicants: 0,
				postedDate: new Date().toISOString().split("T")[0],
			};
			setCareers([...careers, newCareer]);
		}
		setShowAddDialog(false);
		setEditingCareer(null);
		form.reset();
	};

	// Handle edit button click
	const handleEdit = (career) => {
		setEditingCareer(career);
		form.reset(career);
		setShowAddDialog(true);
	};

	// Handle sort
	const handleSort = (key) => {
		let direction = "asc";
		if (sortConfig.key === key && sortConfig.direction === "asc") {
			direction = "desc";
		}
		setSortConfig({ key, direction });
	};

	// Sort careers
	const sortedCareers = [...careers].sort((a, b) => {
		if (!sortConfig.key) return 0;

		if (a[sortConfig.key] < b[sortConfig.key]) {
			return sortConfig.direction === "asc" ? -1 : 1;
		}
		if (a[sortConfig.key] > b[sortConfig.key]) {
			return sortConfig.direction === "asc" ? 1 : -1;
		}
		return 0;
	});

	// Filter careers based on search term and status
	const filteredCareers = sortedCareers.filter((career) => {
		const matchesSearch =
			career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			career.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
			career.location.toLowerCase().includes(searchQuery.toLowerCase());

		const matchesStatus = statusFilter === "All" || career.status === statusFilter;

		return matchesSearch && matchesStatus;
	});

	// Pagination
	const totalPages = Math.ceil(filteredCareers.length / ITEMS_PER_PAGE);
	const paginatedCareers = filteredCareers.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE,
	);

	const confirmDelete = () => {
		if (careerToDelete) {
			setCareers(careers.filter((career) => career.id !== careerToDelete));
			setCareerToDelete(null);
		}
	};

	// Sort icon component
	const SortIcon = ({ columnKey }) => {
		if (sortConfig.key !== columnKey) return null;
		return sortConfig.direction === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="p-6"
		>
			<motion.div
				initial={{ y: -20 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
				className="flex justify-between items-center mb-6"
			>
				<div>
					<h1 className="text-2xl font-bold">Careers Management</h1>
					<p className="text-muted-foreground">Manage job postings and applications</p>
				</div>
				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Button onClick={() => setShowAddDialog(true)}>
						<Plus className="mr-2 h-4 w-4" /> Add New Position
					</Button>
				</motion.div>
			</motion.div>

			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="space-y-4"
			>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										variant="outline"
										className="flex items-center gap-2"
									>
										{sortConfig.direction === "asc" ? (
											<ChevronUp className="mr-2 h-4 w-4" />
										) : (
											<ChevronDown className="mr-2 h-4 w-4" />
										)}
										Sort by:{" "}
										{sortConfig.key
											? sortConfig.key.charAt(0).toUpperCase() +
												sortConfig.key.slice(1)
											: "Select"}
									</Button>
								</motion.div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem onClick={() => handleSort("title")}>
									Title
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => handleSort("department")}>
									Department
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => handleSort("location")}>
									Location
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => handleSort("type")}>
									Type
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => handleSort("status")}>
									Status
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => handleSort("applicants")}>
									Applicants
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => handleSort("postedDate")}>
									Posted Date
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<div className="flex items-center space-x-4">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="outline"
									className="flex items-center gap-2"
								>
									<Filter size={16} />
									Status: {statusFilter}
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem onClick={() => setStatusFilter("All")}>
									All
								</DropdownMenuItem>
								{STATUS_OPTIONS.map((status) => (
									<DropdownMenuItem
										key={status}
										onClick={() => setStatusFilter(status)}
									>
										{status}
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
						<div className="relative">
							<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Search positions..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-8"
							/>
						</div>
					</div>
				</div>

				<div className="rounded-md border">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("title")}
								>
									<div className="flex items-center gap-2">
										Title
										<SortIcon columnKey="title" />
									</div>
								</TableHead>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("department")}
								>
									<div className="flex items-center gap-2">
										Department
										<SortIcon columnKey="department" />
									</div>
								</TableHead>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("location")}
								>
									<div className="flex items-center gap-2">
										Location
										<SortIcon columnKey="location" />
									</div>
								</TableHead>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("type")}
								>
									<div className="flex items-center gap-2">
										Type
										<SortIcon columnKey="type" />
									</div>
								</TableHead>
								<TableHead>Status</TableHead>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("applicants")}
								>
									<div className="flex items-center gap-2">
										Applicants
										<SortIcon columnKey="applicants" />
									</div>
								</TableHead>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("postedDate")}
								>
									<div className="flex items-center gap-2">
										Posted Date
										<SortIcon columnKey="postedDate" />
									</div>
								</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<AnimatePresence>
								{paginatedCareers.map((career, index) => (
									<motion.tr
										key={career.id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3, delay: index * 0.05 }}
									>
										<TableCell className="font-medium">
											{career.title}
										</TableCell>
										<TableCell>{career.department}</TableCell>
										<TableCell>{career.location}</TableCell>
										<TableCell>{career.type}</TableCell>
										<TableCell>
											<span
												className={`px-2 py-1 rounded-full text-xs ${
													career.status === "Open"
														? "bg-green-100 text-green-800"
														: "bg-red-100 text-red-800"
												}`}
											>
												{career.status}
											</span>
										</TableCell>
										<TableCell>{career.applicants}</TableCell>
										<TableCell>{career.postedDate}</TableCell>
										<TableCell className="text-right">
											<div className="flex justify-end gap-2">
												<motion.button
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.9 }}
													onClick={() => handleEdit(career)}
													className="p-2 hover:bg-gray-100 rounded-full"
												>
													<Edit2 className="h-4 w-4" />
												</motion.button>
												<motion.button
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.9 }}
													onClick={(id) => {
														setCareerToDelete(id);
													}}
													className="p-2 hover:bg-gray-100 rounded-full"
												>
													<Trash2 className="h-4 w-4" />
												</motion.button>
											</div>
										</TableCell>
									</motion.tr>
								))}
							</AnimatePresence>
						</TableBody>
						<TableFooter>
							<TableRow>
								<TableCell colSpan={8}>
									<SmartPagination
										currentPage={currentPage}
										totalPages={totalPages}
										onPageChange={setCurrentPage}
									/>
								</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
				</div>
			</motion.div>

			{/* Dialog components with animations */}
			<AnimatePresence>
				{showAddDialog && (
					<Dialog
						open={showAddDialog}
						onOpenChange={(open) => {
							setShowAddDialog(open);
							if (!open) {
								setEditingCareer(null);
								form.reset();
							}
						}}
					>
						<DialogContent>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.3 }}
							>
								<DialogHeader>
									<DialogTitle>Add New Position</DialogTitle>
								</DialogHeader>
								<Form {...form}>
									<form
										onSubmit={form.handleSubmit(onSubmit)}
										className="space-y-4"
									>
										<FormField
											control={form.control}
											name="title"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Title</FormLabel>
													<FormControl>
														<Input
															placeholder="Enter position title"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="department"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Department</FormLabel>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Select department" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															{DEPARTMENTS.map((dept) => (
																<SelectItem
																	key={dept}
																	value={dept}
																>
																	{dept}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="location"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Location</FormLabel>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Select location" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															{LOCATIONS.map((loc) => (
																<SelectItem
																	key={loc}
																	value={loc}
																>
																	{loc}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="type"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Type</FormLabel>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Select type" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															{JOB_TYPES.map((type) => (
																<SelectItem
																	key={type}
																	value={type}
																>
																	{type}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="status"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Status</FormLabel>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Select status" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															{STATUS_OPTIONS.map((status) => (
																<SelectItem
																	key={status}
																	value={status}
																>
																	{status}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
													<FormMessage />
												</FormItem>
											)}
										/>
										<DialogFooter>
											<Button type="submit">
												{editingCareer ? "Save Changes" : "Add Position"}
											</Button>
										</DialogFooter>
									</form>
								</Form>
							</motion.div>
						</DialogContent>
					</Dialog>
				)}
			</AnimatePresence>

			{/* Delete Confirmation Dialog */}
			<Dialog
				open={!!careerToDelete}
				onOpenChange={() => setCareerToDelete(null)}
			>
				<DialogContent>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.3 }}
					>
						<DialogHeader>
							<DialogTitle>Confirm Delete</DialogTitle>
						</DialogHeader>
						<div className="py-4">
							<p>
								Are you sure you want to delete this position? This action cannot be
								undone.
							</p>
						</div>
						<DialogFooter>
							<div className="flex justify-end gap-2">
								<Button
									variant="outline"
									onClick={() => setCareerToDelete(null)}
								>
									Cancel
								</Button>
								<Button
									variant="destructive"
									onClick={confirmDelete}
								>
									Delete
								</Button>
							</div>
						</DialogFooter>
					</motion.div>
				</DialogContent>
			</Dialog>
		</motion.div>
	);
};

export default Careers;
