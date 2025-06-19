/* eslint-disable react-hooks/exhaustive-deps */
import korea from "@/assets/images/korea.webp";
import england from "@/assets/images/usa.png";
import t2darklogo from "@/assets/logos/T2_dark_Logo.png";
import t2lightlogo from "@/assets/logos/T2_light_Logo.png";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
} from "@/components/ui/drawer";
import { NAV_LINKS } from "@/constant/header";
import useResponsive from "@/hooks/useResponsive";
import classNames from "classnames";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";

const Header = () => {
	const location = useLocation();
	const [visibleLinks, setVisibleLinks] = useState(NAV_LINKS);
	const [hiddenLinks, setHiddenLinks] = useState([]);
	const [isCompactNav, setIsCompactNav] = useState(false);
	const { t, i18n } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [language, setLanguage] = useState({
		code: "ko",
		label: "Korean",
		imageUrl: england,
	});
	const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
	const [isOpenBlog, setIsOpenBlog] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const isHome = location.pathname === "/" ? true : false;

	const { isMobile } = useResponsive();
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
	];

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width <= 1140) {
				setIsCompactNav(true);
				const showPaths = ["/", "/about", "/services", "/solution&product"];
				setVisibleLinks(NAV_LINKS.filter((link) => showPaths.includes(link.path)));
				setHiddenLinks(NAV_LINKS.filter((link) => !showPaths.includes(link.path)));
			} else {
				setIsCompactNav(false);
				setVisibleLinks(NAV_LINKS);
				setHiddenLinks([]);
			}
		};

		handleResize(); // Gọi lần đầu
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const savedDarkMode = localStorage.getItem("darkMode") === "true";
		if (savedDarkMode) {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		}

		const storedLanguage = localStorage.getItem("language");
		if (storedLanguage) {
			const selectedLang = LANGUAGE?.find((lang) => lang.code === storedLanguage);
			if (selectedLang) {
				setLanguage(selectedLang);
			}
		}

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
			className={classNames("w-full z-50 transition-all duration-300 fixed left-0 right-0", {
				"top-10 bg-transparent": !isScrolled && isHome && !isMobile,
				"top-0 bg-white dark:bg-dark-blue shadow-md": isScrolled,
			})}
		>
			<div className="w-full max-w-[1440px] mx-auto px-4 2xl:px-0">
				<div className="w-full flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<Link
							to="/"
							className="flex items-center"
						>
							<img
								className="h-8 w-auto"
								alt="Company Logo"
								src={isScrolled || isDarkMode | !isHome ? t2lightlogo : t2darklogo}
							/>
						</Link>
					</div>

					<nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 xl:gap-7 border border-[#5c5cff] border-opacity-80 rounded-full px-6 py-2 shadow-sm backdrop-blur-sm bg-white/10">
						{visibleLinks.map((link) => {
							const isActive =
								window.location?.pathname === link?.path ||
								(!window.location?.pathname && link.path === "/");

							const isHomeTab = link.path === "/";

							return (
								<Link
									key={link.path}
									to={link.path}
									className={classNames(
										"relative transition-all duration-300 ease-in-out flex items-center justify-center font-medium text-base px-5 py-2 rounded-full group whitespace-nowrap",
										{
											"bg-black text-white shadow-md":
												isActive && (isScrolled || !isHomeTab),
											"text-[var(--color-dark-blue)] font-extrabold bg-white shadow-md":
												isActive && isHomeTab && !isScrolled,
											"text-white hover:bg-white hover:text-[var(--color-dark-blue)] hover:px-6 hover:py-2.5":
												isHome && !isScrolled && !isActive,
											"text-gray-700 dark:text-gray-200 hover:text-[var(--color-dark-blue)] hover:bg-gray-100 dark:hover:bg-light-blue":
												!isHome && !isActive,

											"dark:text-light-blue": isScrolled && isActive,
										},
									)}
								>
									{isActive && (
										<span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
									)}
									<span className="relative z-10">
										{t(link?.i18nKey) || link?.name}
									</span>
								</Link>
							);
						})}
					</nav>

					{isOpenBlog &&
						(() => {
							const contactLink = NAV_LINKS.find((link) => link.path === "/contact");
							const blogLink = NAV_LINKS.find((link) => link.path === "/blog");
							if (!contactLink && !blogLink) return null;
							return (
								<div className="origin-top-right flex flex-wrap text-center absolute top-16 right-8 w-36 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-gray-700/50 ring-opacity-5 focus:outline-none">
									<Link
										key={contactLink.path}
										to={contactLink.path}
										className={classNames(
											"px-3 py-2 text-base font-medium transition-colors w-full",
											{
												"text-[var(--color-dark-blue)] font-extrabold underline underline-offset-8 dark:text-light-blue":
													window.location?.pathname ===
														contactLink.path ||
													!window.location?.pathname,
												"text-gray-700 dark:text-gray-200 hover:text-[var(--color-dark-blue)] hover:bg-gray-100 dark:hover:bg-light-blue rounded-lg":
													!(
														window.location?.pathname ===
															contactLink.path ||
														!window.location?.pathname
													),
											},
										)}
									>
										{t(contactLink?.i18nKey) || contactLink?.name}
									</Link>
									<Link
										key={blogLink.path}
										to={blogLink.path}
										className={classNames(
											"px-3 py-2 text-base font-medium transition-colors w-full ",
											{
												"text-[var(--color-dark-blue)] font-extrabold underline underline-offset-8 dark:text-light-blue":
													window.location?.pathname === blogLink.path ||
													!window.location?.pathname,
												"text-gray-700 dark:text-gray-200 hover:text-[var(--color-dark-blue)] hover:bg-gray-100 dark:hover:bg-light-blue rounded-lg":
													!(
														window.location?.pathname ===
															blogLink.path ||
														!window.location?.pathname
													),
											},
										)}
									>
										{t(blogLink?.i18nKey) || blogLink?.name}
									</Link>
									<ChangeLanguages
										isTablet
										isScrolled={isScrolled}
										language={language}
										LANGUAGE={LANGUAGE}
										changeLanguage={changeLanguage}
										setIsOpenBlog={setIsOpenBlog}
									/>
								</div>
							);
						})()}

					<div className="hidden md:flex items-center ml-auto">
						<div className="relative hidden xl:block lg:block">
							<ChangeLanguages
								isScrolled={isScrolled}
								language={language}
								LANGUAGE={LANGUAGE}
								changeLanguage={changeLanguage}
								setIsOpenBlog={setIsOpenBlog}
							/>
						</div>

						<button
							onClick={toggleDarkMode}
							className={classNames(
								"hidden ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",
								{
									"text-white": !isScrolled,
									"text-gray-700 dark:text-gray-200": isScrolled,
								},
							)}
							aria-label="Toggle dark mode"
						>
							{isDarkMode ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)}
						</button>
					</div>

					{isCompactNav && (
						<button
							type="button"
							className={classNames(
								"group p-2 rounded-md transition-colors duration-200",
								{
									"text-white": !isScrolled && isHome,
									"text-gray-700 dark:text-gray-200": isScrolled,
									"hover:bg-white dark:hover:bg-gray-800": true,
								},
							)}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu"
						>
							{isMenuOpen ? (
								<X className="h-6 w-6 group-hover:text-black" />
							) : (
								<Menu className="h-6 w-6 group-hover:text-black" />
							)}
						</button>
					)}
				</div>
			</div>

			<Drawer
				direction="right"
				open={isMenuOpen}
				// onOpenChange={setIsMenuOpen}
			>
				<DrawerContent
					header={true}
					className="h-full overflow-y-auto z-9999"
				>
					<DrawerHeader className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
						<DrawerTitle className="flex w-full text-center justify-center relative text-lg font-semibold">
							{t("menu_drawer")}
							<DrawerClose
								asChild
								onClick={() => setIsMenuOpen(false)}
							>
								<X className="absolute h-6 w-6 right-0" />
							</DrawerClose>
						</DrawerTitle>
					</DrawerHeader>

					<div className="px-4 py-4 space-y-4">
						<div className="space-y-1">
							{[...visibleLinks, ...hiddenLinks].map((link) => {
								const isActive = location.pathname === link.path;
								return (
									<Link
										key={link.path}
										to={link.path}
										onClick={() => setIsMenuOpen(false)}
										className={classNames(
											"flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md transition-all duration-200",
											{
												"bg-black text-white": isActive,
												"text-gray-700 dark:text-gray-200 hover:bg-white hover:text-black":
													!isActive,
											},
										)}
									>
										{isActive && (
											<span className="h-2 w-2 bg-green-500 rounded-full"></span>
										)}
										{link.icon && (
											<link.icon
												className={classNames("w-5 h-5", {
													"text-white": isActive,
													"text-black": !isActive,
												})}
											/>
										)}

										<span>{t(link?.i18nKey) || link?.name}</span>
									</Link>
								);
							})}
						</div>
						<div className="border-t border-gray-200 dark:border-gray-700 my-4" />

						<div className="space-y-4 py-2 px-3">
							<div className="relative flex">
								<button
									type="button"
									className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
									onClick={toggleLanguageDropdown}
								>
									<span className="text-base  font-medium">
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
						</div>
					</div>
				</DrawerContent>
			</Drawer>
		</header>
	);
};

export default Header;

export const ChangeLanguages = ({
	language,
	LANGUAGE,
	changeLanguage,
	isTablet,
	setIsOpenBlog,
	isScrolled,
}) => {
	const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

	const toggleLanguageDropdown = () => {
		setIsLanguageDropdownOpen((prev) => !prev);
	};

	return (
		<div
			className={classNames("relative", {
				"w-full": isTablet,
			})}
		>
			<button
				type="button"
				className={classNames(
					"flex items-center text-center justify-center text-sm dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer",
					{
						"px-3 py-2 w-full": isTablet,
						"text-dark-gray": isScrolled,
						"text-white": !isScrolled,
					},
				)}
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
				<div
					className={classNames(
						"origin-top-right absolute top-10 right-0 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-gray-700/50 ring-opacity-5 focus:outline-none z-50",
						{ "w-36": isTablet, "w-48": !isTablet },
					)}
				>
					{LANGUAGE.map((lang_item, index) => (
						<button
							key={`lang_item_${lang_item?.code}_${index}`}
							onClick={() => {
								changeLanguage(lang_item);
								setIsLanguageDropdownOpen(false);
								setIsOpenBlog(false);
							}}
							className={classNames(
								"flex justify-start cursor-pointer w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-header-hover hover:text-dark-blue dark:hover:bg-dark-blue",
								{
									"bg-header-active dark:light-blue-gray text-gray-700":
										language?.code === lang_item.code,
									"rounded-t-md": index === 0,
									"rounded-b-md": index === LANGUAGE.length - 1,
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
					))}
				</div>
			)}
		</div>
	);
};
