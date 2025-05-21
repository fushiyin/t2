import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

const Pagination = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<nav
			role="navigation"
			aria-label="pagination"
			className={cn("flex items-center justify-between", className)}
			{...props}
		/>
	);
};

const PaginationContent = ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => {
	return (
		<ul
			className={cn("flex items-center gap-1", className)}
			{...props}
		/>
	);
};

const PaginationItem = ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => {
	return (
		<li
			className={className}
			{...props}
		/>
	);
};

const PaginationLink = React.forwardRef<
	HTMLAnchorElement,
	React.AnchorHTMLAttributes<HTMLAnchorElement> & {
		isActive?: boolean;
	}
>(({ className, isActive, ...props }, ref) => {
	return (
		<a
			ref={ref}
			aria-current={isActive ? "page" : undefined}
			className={cn(
				"inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background px-2 py-1 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
				isActive && "bg-accent text-accent-foreground",
				className,
			)}
			{...props}
		/>
	);
});
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = React.forwardRef<
	HTMLAnchorElement,
	React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
	return (
		<a
			ref={ref}
			className={cn(
				"inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 py-1 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
				className,
			)}
			{...props}
		>
			<ChevronLeft className="mr-2 h-4 w-4" />
			Previous
		</a>
	);
});
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = React.forwardRef<
	HTMLAnchorElement,
	React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
	return (
		<a
			ref={ref}
			className={cn(
				"inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 py-1 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
				className,
			)}
			{...props}
		>
			Next
			<ChevronRight className="ml-2 h-4 w-4" />
		</a>
	);
});
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cn("flex h-9 w-9 items-center justify-center", className)}
			{...props}
		>
			...
		</span>
	);
};

export {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
};
