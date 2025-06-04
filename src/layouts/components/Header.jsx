import t2darklogo from "@/assets/images/t2darklogo.png";
import t2lightlogo from "@/assets/images/t2lightlogo.png";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
} from "@/components/ui/drawer";
import { NAV_LINKS } from "@/constant/header";
import classNames from "classnames";
import { ChevronDown, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import korea from "@/assets/images/korea.webp";
import england from "@/assets/images/usa.png";

const Header = () => {
	const location = useLocation();
	const { t, i18n } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [language, setLanguage] = useState({
		code: "ko",
		label: "Korean",
		imageUrl: england,
	});
	const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
	const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

	const LANGUAGE = [
		{
			code: "ko",
			label: "Korean",
			imageUrl: korea,
		},
		{
			code: "en",
			label: "English",
			imageUrl: england,
		},
		// {
		// 	code: "vi",
		// 	label: "Vietnamese",
		// 	imageUrl: "https://www.countryflags.com/wp-content/uploads/vietnam-flag-png-large.png",
		// },
	];

	useEffect(() => {
		const savedDarkMode = localStorage.getItem("darkMode") === "true";
		if (savedDarkMode) {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		}

		const storedLanguage = localStorage.getItem("language");
		if (storedLanguage) {
			const selectedLang = LANGUAGE.find((lang) => lang.code === storedLanguage);
			if (selectedLang) {
				setLanguage(selectedLang);
			}
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
		i18n.changeLanguage(lang?.code || "ko");
		localStorage.setItem("language", lang?.code || "ko");
		setIsLanguageDropdownOpen(false);
	};

	return (
		<header
			id="header"
			className="sticky top-0 w-full bg-white dark:bg-dark-blue shadow-md z-50"
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

					<nav className="hidden items-center space-x-8 ml-10 md:flex md:space-x-2 xl:space-x-6 lg:space-x-4">
						{NAV_LINKS.map((link) => (
							<a
								key={link.path}
								href={link.path}
								className={classNames(
									"px-3 py-2 text-base font-medium transition-colors ",
									{
										"text-[var(--color-dark-blue)] font-extrabold underline underline-offset-8 dark:text-light-blue":
											window.location?.pathname === link?.path ||
											!window.location?.pathname,
										"text-gray-700 dark:text-gray-200 hover:text-[var(--color-dark-blue)] hover:bg-gray-100 dark:hover:bg-light-blue rounded-lg":
											!(
												window.location?.pathname === link?.path ||
												!window.location?.pathname
											),
									},
								)}
							>
								{t(link?.i18nKey) || link?.name}
							</a>
						))}
					</nav>

					<div className="hidden md:flex items-center ml-auto">
						<div className="relative mr-4 block md:hidden xl:block lg:block">
							<input
								type="text"
								placeholder={t("common.search")}
								className="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:text-dark-blue dark:bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500"
							/>
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-dark-blue" />
						</div>
						<div className="relative">
							<button
								type="button"
								className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
								onClick={toggleLanguageDropdown}
							>
								{/* <Globe className="h-5 w-5 mr-1" /> */}
								<img
									src={language.imageUrl}
									alt={language.label}
									className="inline-block h-5 w-7"
								/>
								<ChevronDown className="h-4 w-4 ml-1" />
							</button>

							{isLanguageDropdownOpen && (
								<div className="origin-top-right absolute top-8 right-0 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-gray-700/50 ring-opacity-5 focus:outline-none">
									{LANGUAGE.map((lang_item, index) => {
										return (
											<button
												key={`lang_item_${lang_item?.code}_${index}`}
												onClick={() => changeLanguage(lang_item)}
												className={classNames(
													"flex justify-start cursor-pointer w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-header-hover hover:text-dark-blue dark:hover:bg-dark-blue",
													{
														"bg-header-active dark:light-blue-gray text-gray-700":
															language?.code === lang_item.code,
														"rounded-t-md": index === 0,
														"rounded-b-md":
															index === LANGUAGE.length - 1,
													},
												)}
											>
												<img
													src={lang_item.imageUrl}
													alt={lang_item.label}
													className="inline-block h-5 w-7 mr-2"
												/>
												{lang_item.label}
											</button>
										);
									})}
								</div>
							)}
						</div>

						<button
							onClick={toggleDarkMode}
							className="hidden ml-4 p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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

			<Drawer
				direction="right"
				open={isMenuOpen}
				onOpenChange={setIsMenuOpen}
			>
				<DrawerContent
					header={true}
					className="h-full overflow-y-auto z-9999"
				>
					<DrawerHeader className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
						<DrawerTitle className="flex w-full text-center justify-center relative text-lg font-semibold">
							{t("menu_drawer")}
							<DrawerClose asChild>
								<X className="absolute h-6 w-6 right-0" />
							</DrawerClose>
						</DrawerTitle>
					</DrawerHeader>

					<div className="px-4 py-4 space-y-4">
						<div className="space-y-1">
							{NAV_LINKS.map((link) => (
								<a
									key={link.path}
									href={link.path}
									className={`block px-3 py-2 text-base font-medium border-b rounded-sm ${
										location.pathname === link.path
											? "text-dark-blue bg-light-blue-gray"
											: "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border-b-[#f4f4f4]"
									}`}
								>
									{t(link?.i18nKey) || link?.name}
								</a>
							))}
						</div>

						<div className="space-y-4 py-2 px-3">
							<div className="relative flex">
								<button
									type="button"
									className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
									onClick={toggleLanguageDropdown}
								>
									<span className="text-base font-medium">
										{t("language")} :
										<img
											src={language.imageUrl}
											alt={language.label}
											className="inline-block h-5 w-7 ml-2"
										/>
									</span>
									<ChevronDown className="absolute right-0" />
								</button>

								{isLanguageDropdownOpen && (
									<div className="origin-top-right absolute top-10 w-full right-0 rounded-md shadow-lg bg-white dark:bg-gray-800 border border-gray-300 ring-gray-700/50 ring-opacity-5 focus:outline-none">
										{LANGUAGE.map((lang_item, index) => {
											return (
												<button
													key={`lang_item_${lang_item?.code}_${index}`}
													onClick={() => changeLanguage(lang_item)}
													className={classNames(
														"flex justify-start items-center cursor-pointer w-full h-[48px] px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-light-blue hover:text-white dark:hover:bg-dark-blue",
														{
															"bg-light-blue-gray dark:bg-light-blue text-gray-700":
																language?.code === lang_item.code,
															"rounded-t-md": index === 0,
															"rounded-b-md":
																index === LANGUAGE.length - 1,
														},
													)}
												>
													<img
														src={lang_item.imageUrl}
														alt={lang_item.label}
														className="inline-block h-5 w-7 mr-2"
													/>
													{lang_item.label}
												</button>
											);
										})}
									</div>
								)}
							</div>

							{/* <div>
								<div className="flex items-center text-gray-700 font-medium
								 dark:text-gray-200 mb-2">
									<Globe className="h-5 w-5 mr-2" />
									<span>Language: {language?.label}</span>
								</div>
								<div className="grid grid-cols-3 gap-2 mt-4">
									{LANGUAGE.map((lang_item, index) => (
										<button
											key={`lang_item_${lang_item?.code}_${index}`}
											onClick={() => changeLanguage(lang_item)}
											className={`px-4 py-2 text-sm font-medium rounded ${
												language?.code === lang_item.code
													? "bg-[var(--color-deepest-navy)] 
													dark:bg-light-blue text-white"
													: "bg-gray-100 dark:bg-white dark:text-[var
													(--color-deepest-navy)] text-gray-700 "
											}`}
										>
											{lang_item?.label}
										</button>
									))}
								</div>
							</div> */}

							{/* Theme Toggle */}
							{/* <div className="flex justify-between items-center">
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
									className="relative inline-flex h-6 w-11
									 items-center rounded-full bg-gray-200 dark:bg-gray-700"
								>
									<span
										className={`${
											isDarkMode
												? "translate-x-6 bg-blue-500"
												: "translate-x-1 bg-white"
										} inline-block h-4 w-4 transform rounded-full transition`}
									/>
								</button>
							</div> */}
						</div>
					</div>
				</DrawerContent>
			</Drawer>

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
								placeholder={t("common.search")}
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
