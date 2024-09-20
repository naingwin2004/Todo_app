import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TodosContextProvider from "./contexts/TodosContextProvider.jsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

import "./index.css";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<KindeProvider
			clientId='8d4c619f73d54a52b2511194a5573ca1'
			domain='https://naingwin.kinde.com'
			redirectUri='http://localhost:5173'
			logoutUri='http://localhost:5173'>
			<TodosContextProvider>
				<App />
			</TodosContextProvider>
		</KindeProvider>
	</StrictMode>,
);
