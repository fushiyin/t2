import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowRightIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const mockData = {
	data: [
		{
			id: 1,
			title: "Understanding React Server Components",
			date: "May 8, 2025",
			readTime: "6 min read",
			description: "Learn what React Server Components are and how they improve performance.",
			image: "https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg",
		},
		{
			id: 2,
			title: "10 UI Patterns for Better UX",
			date: "May 7, 2025",
			readTime: "5 min read",
			description: "Explore common UI patterns that enhance user experience and retention.",
			image: "https://images.pexels.com/photos/18272899/pexels-photo-18272899.jpeg",
		},
		{
			id: 3,
			title: "Tailwind CSS: Best Practices",
			date: "May 6, 2025",
			readTime: "4 min read",
			description:
				"How to structure your Tailwind CSS code for scalability and maintainability.",
			image: "https://images.pexels.com/photos/5054346/pexels-photo-5054346.jpeg",
		},
		{
			id: 4,
			title: "Build a Chat App with Socket.io",
			date: "May 5, 2025",
			readTime: "8 min read",
			description: "Step-by-step tutorial for building a real-time chat app.",
			image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 5,
			title: "Context vs Redux: What to Use?",
			date: "May 4, 2025",
			readTime: "7 min read",
			description: "Compare React Context API and Redux for state management.",
			image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 6,
			title: "Getting Started with Next.js 14",
			date: "May 3, 2025",
			readTime: "5 min read",
			description: "Quick guide to get up and running with Next.js 14.",
			image: "https://images.unsplash.com/photo-1547658719-da2b511691a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 7,
			title: "Design Systems 101",
			date: "May 2, 2025",
			readTime: "6 min read",
			description: "Learn the value of design systems in modern UI development.",
			image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 8,
			title: "React Suspense for Beginners",
			date: "May 1, 2025",
			readTime: "4 min read",
			description: "A beginner-friendly intro to React Suspense.",
			image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 9,
			title: "TypeScript in React Projects",
			date: "April 30, 2025",
			readTime: "5 min read",
			description: "How to use TypeScript effectively in React applications.",
			image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		},
	],
	pageNo: 1,
	pageSize: 9,
};

export default function Blog() {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [pageNo, setPageNo] = useState(1);

	useEffect(() => {
		getBlogs();
	}, [pageNo]);

	useEffect(() => {
		const delayDebounce = setTimeout(() => {
			// fetchBlogs(0, 0, searchValue);
		}, 600);
		return () => clearTimeout(delayDebounce);
	}, [searchValue]);

	const getBlogs = async () => {
		setLoading(true);
		try {
			// const res = await fetchBlogs({ pageNo, pageSize, search: searchDebounced });
			setBlogs(mockData.data);
			setPageNo(mockData.pageNo);
		} catch (e) {
			console.error("Error fetching blogs:", e);
			setBlogs([]);
		} finally {
			setLoading(false);
		}
	};

	const handleSearchChange = (e) => {
		setSearchValue(e?.target?.value ?? "");
	};

	return (
		<div className=" flex flex-col items-center justify-center mx-auto overflow-y-hidden">
			<div className="max-w-[1440px] mx-auto py-6 ">
				<div className="mb-10 text-center flex flex-col items-center justify-center gap-6">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-t2-darkBlue">
						Blog
					</h2>
					<div className="flex justify-center w-2/3">
						<input
							type="text"
							value={searchValue}
							onChange={handleSearchChange}
							placeholder="Search blog titles..."
							className="border px-4 py-2 rounded-md w-full max-w-md shadow-sm"
						/>
					</div>
				</div>

				{loading ? (
					<div className="flex justify-center py-20">
						<Loader2 className="w-10 h-10 animate-spin text-primary" />
					</div>
				) : blogs.length === 0 ? (
					<div className="flex justify-center py-20">
						<p className="text-lg text-muted-foreground">
							No blogs found. Please check back later.
						</p>
					</div>
				) : (
					<>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{blogs.map((blog) => (
								<div
									key={blog.id}
									className="bg-card rounded-lg overflow-hidden shadow-md"
								>
									<img
										src={blog.image}
										alt={blog.title}
										className="h-48 w-full object-cover"
									/>
									<div className="p-4">
										<p className="text-sm text-muted-foreground mt-1">
											{blog.date} - {blog.readTime}
										</p>
										<h2 className="text-lg font-semibold">{blog.title}</h2>
										<p className="text-sm text-muted-foreground mt-1">
											{blog.description}
										</p>
										<span className=" flex items-center gap-1 text-primary mt-2 cursor-pointer hover:">
											Read more <ArrowRightIcon className="h-4 w-4" />
										</span>
									</div>
								</div>
							))}
						</div>
					</>
				)}

				<Pagination className="mt-4">
					<PaginationContent className="flex justify-center items-center gap-2 flex-wrap">
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink
								href="#"
								isActive
							>
								2
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
}
