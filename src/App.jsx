import "@/i18n";
import AppRouter from "@/routes";
import "lenis/dist/lenis.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
	const { i18n } = useTranslation();
	const [isLanguageReady, setIsLanguageReady] = useState(false);
	console.log(navigator.language);

	useEffect(() => {
		const storedLanguage = localStorage.getItem("i18nextLng");

		if (storedLanguage) {
			if (i18n.language !== storedLanguage) {
				i18n.changeLanguage(storedLanguage).then(() => {
					setIsLanguageReady(true);
				});
			} else {
				setIsLanguageReady(true);
			}
		} else {
			localStorage.setItem("i18nextLng", "ko");
			setIsLanguageReady(true);
		}
	}, [i18n]);

	if (!isLanguageReady) {
		return null;
	}

	return <AppRouter />;
}

export default App;
