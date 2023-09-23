import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screenSize, setScreenSize] = useState(undefined);
	const [currentColor, setCurrentColor] = useState(
		localStorage.getItem("mainColor")
	);
	const [currentMode, setCurrentMode] = useState(
		localStorage.getItem("themeMode")
	);
	const [themeSettings, setThemeSettings] = useState(false);

	const setMode = (e) => {
		if (e.target.value === "Dark") {
			setCurrentMode(e.target.value);
			setCurrentColor("#F7F7F7");

			localStorage.setItem("mainColor", "#F7F7F7");
			localStorage.setItem("themeMode", e.target.value);
		} else if (e.target.value === "Light") {
			if (currentColor === "#F7F7F7") {
				setCurrentColor("#03C9D7");
				localStorage.setItem("mainColor", "#03C9D7");
			}

			setCurrentMode(e.target.value);
			setCurrentColor(localStorage.getItem("mainColor"));
			localStorage.setItem("mainColor", localStorage.getItem("mainColor"));
			localStorage.setItem("themeMode", e.target.value);
		}
	};

	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem("mainColor", color);
	};

	const handleClick = (clicked) => {
		setIsClicked({ ...initialState, [clicked]: true });
	};

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
				//
				setColor,
				currentColor,
				setMode,
				currentMode,
				setThemeSettings,
				themeSettings,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
