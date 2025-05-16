import t2darklogo from "@/assets/images/t2darklogo.png";
import t2lightlogo from "@/assets/images/t2lightlogo.png";
import classNames from "classnames";
import { ChevronDown, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [language, setLanguage] = useState("EN");
	const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

	const NAV_LINKS = [
		{ name: "Home", path: "/" },
		{ name: "About Us", path: "/about" },
		{ name: "Services", path: "/services" },
		{ name: "Career", path: "/career" },
		{ name: "Blog", path: "/blog" },
		// { name: "Contact Us", path: "/contact" },
	];
	const LANGUAGE = [
		{ code: "EN", label: "English" },
		{ code: "FR", label: "Français" },
		{ code: "ES", label: "Español" },
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

	const goToContact = () => {
		window.location.href = "/contact";
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
		<header className="sticky top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
			<div className="w-full px-4 sm:px-6 lg:px-8">
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
										"bg-[#DAE4ED] text-[#19286D]":
											window.location?.pathname === link?.path ||
											!window.location?.pathname,
										"text-gray-700 dark:text-gray-200 hover:text-[#19286D] hover:bg-gray-100 dark:hover:bg-gray-800":
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
						<button
							type="button"
							className="mr-4 px-4 py-2 text-sm font-medium text-white bg-[#19286D] rounded-md hover:bg-[#101944] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#19286D]"
							onClick={goToContact}
							aria-label="Contact Us"
							title="Contact Us"
						>
							Contact Us
						</button>

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
						{NAV_LINKS.map((link) => (
							<a
								key={link.path}
								href={link.path}
								className={`block px-3 py-2 text-base font-medium border-b border-b-[1px] ${
									location.pathname === link.path
										? "text-[#19286D] bg-[#DAE4ED]"
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
														? "bg-[#19286D] text-white"
														: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
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
		</header>
	);
};

export default Header;
