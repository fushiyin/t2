import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HelmetProvider>
			<ReactLenis root />
			<App />
		</HelmetProvider>
	</StrictMode>,
);
