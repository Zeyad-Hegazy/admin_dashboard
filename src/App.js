import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Sidebar, ThemeSettings } from "./components";
import {
	Ecommerce,
	Orders,
	Calendar,
	Employees,
	Pyramid,
	Customers,
	Kanban,
	Area,
	Bar,
	Line,
	Pie,
	Financial,
	Editor,
} from "./pages";

import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
	const { activeMenu, themeSettings, setThemeSettings, currentMode } =
		useStateContext();

	const [mainColor, setMainColor] = useState(localStorage.getItem("mainColor"));
	const [mainMode, setMainMode] = useState(localStorage.getItem("themeMode"));

	useEffect(() => {
		localStorage.setItem("mainColor", "#03C9D7");
		localStorage.setItem("themeMode", "Light");

		setMainColor(localStorage.getItem("mainColor"));
		setMainMode(localStorage.getItem("themeMode"));
	}, [localStorage.getItem("mainColor"), localStorage.getItem("themeMode")]);

	return (
		<div className={mainMode === "Dark" ? "dark" : ""}>
			<BrowserRouter>
				<div className="flex relative dark:bg-main-dark-bg">
					<div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
						<TooltipComponent content="Settings" position="Top">
							<button
								type="button"
								className="text-3xl p-3 hover:drop-shadow-xl"
								style={{
									background: mainColor,
									borderRadius: "50%",
									color: currentMode === "Dark" ? "black" : "white",
								}}
								onClick={() => setThemeSettings(true)}
							>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>
					{activeMenu ? (
						<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
							<Sidebar />
						</div>
					) : (
						<div className="w-0  dark:bg-secondary-dark-bg">
							<Sidebar />
						</div>
					)}
					<div
						className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
							activeMenu ? "md:ml-72" : "flex-2"
						}`}
					>
						<div className="fixid md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
							<Navbar />
						</div>
						<div>
							{themeSettings && <ThemeSettings />}

							<Routes>
								{/* Dashboard */}
								<Route path="/" element={<Ecommerce />} />
								<Route path="/ecommerce" element={<Ecommerce />} />

								{/* Pages */}
								<Route path="/orders" element={<Orders />} />
								<Route path="/employees" element={<Employees />} />
								<Route path="/customers" element={<Customers />} />

								{/* Apps */}
								<Route path="/calendar" element={<Calendar />} />
								<Route path="/kanban" element={<Kanban />} />
								<Route path="/editor" element={<Editor />} />

								{/* Charts */}
								<Route path="/line" element={<Line />} />
								<Route path="/area" element={<Area />} />
								<Route path="/bar" element={<Bar />} />
								<Route path="/pie" element={<Pie />} />
								<Route path="/financial" element={<Financial />} />
								<Route path="/pyramid" element={<Pyramid />} />
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
