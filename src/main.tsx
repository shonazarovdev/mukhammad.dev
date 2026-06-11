import ReactDOM from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./i18n";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
);
