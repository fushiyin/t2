import t2darklogo from "@/assets/images/t2darklogo.png";
import t2lightlogo from "@/assets/images/t2lightlogo.png";
import classNames from "classnames";
import { ChevronDown, Globe, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [language, setLanguage] = useState("EN");
	const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
	const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

	const NAV_LINKS = [
		{ name: "Home", path: "/" },
		{ name: "About Us", path: "/about" },
		{ name: "Services", path: "/services" },
		{ name: "Career", path: "/career" },
		{ name: "Blog", path: "/blog" },
		{ name: "Contact", path: "/contact" },
	];
	const LANGUAGE = [
		{ code: "EN", label: "English" },
		{ code: "KO", label: "Korean" },
		{ code: "VI", label: "Vietnamese" },
	];

	useEffect(() => {
		const savedDarkMode = localStorage.getItem("darkMode") === "true";
		if (savedDarkMode) {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleDarkMode = () => {
		const newDarkMode = !isDarkMode;
		setIsDarkMode(newDarkMode);
		document.documentElement.classList.toggle("dark", newDarkMode);
		localStorage.setItem("darkMode", newDarkMode);
	};

	const toggleLanguageDropdown = () => {
		setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
	};

	const changeLanguage = (lang) => {
		setLanguage(lang);
		setIsLanguageDropdownOpen(false);
	};

	return (
		<header
			id="header"
			className="sticky top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50"
		>
			<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<a
							href="/"
							className="flex items-center"
						>
							<img
								className="h-8 w-auto"
								alt="Company Logo"
								src={isDarkMode ? t2darklogo : t2lightlogo}
							/>
						</a>
					</div>

					<nav className="hidden md:flex items-center space-x-8 ml-10">
						{NAV_LINKS.map((link) => (
							<a
								key={link.path}
								href={link.path}
								className={classNames(
									"px-3 py-2 text-sm font-medium transition-colors ",
									{
										"text-[var(--color-dark-blue)] font-extrabold underline underline-offset-8 dark:text-[var(--color-light-blue)]":
											window.location?.pathname === link?.path ||
											!window.location?.pathname,
										"text-gray-700 dark:text-gray-200 hover:text-[var(--color-dark-blue)] hover:bg-gray-100 dark:hover:bg-gray-800":
											!(
												window.location?.pathname === link?.path ||
												!window.location?.pathname
											),
									},
								)}
							>
								{link.name}
							</a>
						))}
					</nav>

					<div className="hidden md:flex items-center ml-auto">
						<div className="relative mr-4 hidden md:block">
							<input
								type="text"
								placeholder="Search..."
								className="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
							/>
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
						</div>
						<div className="relative">
							<button
								type="button"
								className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
								onClick={toggleLanguageDropdown}
							>
								<Globe className="h-5 w-5 mr-1" />
								<span>{language}</span>
								<ChevronDown className="h-4 w-4 ml-1" />
							</button>

							{isLanguageDropdownOpen && (
								<div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
									<button
										onClick={() => changeLanguage("EN")}
										className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										English
									</button>
									<button
										onClick={() => changeLanguage("FR")}
										className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										Français
									</button>
									<button
										onClick={() => changeLanguage("ES")}
										className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										Español
									</button>
								</div>
							)}
						</div>

						<button
							onClick={toggleDarkMode}
							className="ml-4 p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
							aria-label="Toggle dark mode"
						>
							{isDarkMode ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)}
						</button>
					</div>

					<button
						type="button"
						className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden fixed inset-x-0 top-16 bg-white dark:bg-gray-900 shadow-lg z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
						<div className="relative mb-4">
							<input
								type="text"
								placeholder="Search..."
								className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
							/>
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
						</div>

						{NAV_LINKS.map((link) => (
							<a
								key={link.path}
								href={link.path}
								className={`block px-3 py-2 text-base font-medium border-b border-b-[1px] ${
									location.pathname === link.path
										? "text-dark-blue bg-light-blue-gray"
										: "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border-b-[#f4f4f4]"
								}`}
							>
								{link.name}
							</a>
						))}

						<div className="relative">
							<button className="flex w-full justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
								<span>Settings</span>
							</button>

							<div className="mt-1 pl-1 space-y-1">
								<div className="px-3 py-2">
									<div className="flex items-center text-gray-700 dark:text-gray-200 mb-2">
										<Globe className="h-5 w-5 mr-2" />
										<span>Language: {language}</span>
									</div>
									<div className="grid grid-cols-3 gap-2 mt-1">
										{LANGUAGE.map(({ code, label }) => (
											<button
												key={code}
												onClick={() => changeLanguage(code)}
												className={`px-2 py-1 text-sm font-medium rounded ${
													language === code
														? "bg-[var(--color-deepest-navy)] dark:bg-[var(--color-light-blue)] text-white"
														: "bg-gray-100 dark:bg-white dark:text-[var(--color-deepest-navy)] text-gray-700"
												}`}
											>
												{label}
											</button>
										))}
									</div>
								</div>

								<div className="px-3 py-2">
									<div className="flex justify-between items-center">
										<div className="flex items-center text-gray-700 dark:text-gray-200">
											{isDarkMode ? (
												<Sun className="h-5 w-5 mr-2" />
											) : (
												<Moon className="h-5 w-5 mr-2" />
											)}
											<span>Theme: {isDarkMode ? "Dark" : "Light"}</span>
										</div>
										<button
											onClick={toggleDarkMode}
											className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
										>
											<span
												className={`${
													isDarkMode
														? "translate-x-6 bg-blue-500"
														: "translate-x-1 bg-white"
												} inline-block h-4 w-4 transform rounded-full transition`}
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{isMobileSearchOpen && (
				<div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-start justify-center pt-24 md:pt-32">
					<div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-[90vw] max-w-md p-4 relative">
						<button
							className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
							onClick={() => setIsMobileSearchOpen(false)}
							aria-label="Close search"
						>
							<X className="h-5 w-5" />
						</button>
						<div className="relative">
							<input
								type="text"
								placeholder="Search..."
								className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
							/>
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
