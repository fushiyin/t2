import "@/i18n";
import AppRouter from "@/routes";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
	const { i18n } = useTranslation();

	useEffect(() => {
		const { languages } = navigator;
		const isKorean = languages.includes("ko") || languages.includes("ko-KR");
		const languagesSetting = JSON.parse(localStorage.getItem("userSettings"));
		const localLanguage = languagesSetting?.find((obj) => obj?.optionKind === "Language");
		const defineLanguage = isKorean
			? {
					filePath: "/img/country/KR.svg",
					labelEng: "Korea",
					labelKor: "한국어",
					optionKind: "Language",
					optionValue: "KOR", // only need this, can remove the other param
				}
			: {
					filePath: "/img/country/US.svg",
					labelEng: "English",
					labelKor: "영어",
					optionKind: "Language",
					optionValue: "USA",
				};
		const currentLanguage = localLanguage || defineLanguage;
		switch (currentLanguage?.optionValue) {
			case "KOR":
				if (i18n.language !== "ko") i18n.changeLanguage("ko");
				break;
			case "USA":
				if (i18n.language !== "en") i18n.changeLanguage("en");
				break;
			// case "VNM":
			//   if (i18n.language !== "vi") i18n.changeLanguage("vi");
			//   break;
			default: // for other setting value find in local if we never setting before
				if (i18n.language !== "en" && !isKorean) {
					i18n.changeLanguage("en");
				}
				if (i18n.language !== "ko" && isKorean) {
					i18n.changeLanguage("ko");
				}
		}
	}, [i18n]);

	return <AppRouter />;
}

export default App;
