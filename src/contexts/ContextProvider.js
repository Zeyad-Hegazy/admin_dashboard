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
	const [currentColor, setCurrentColor] = useState("#03C9D7");
	const [currentMode, setCurrentMode] = useState("Light");
	const [themeSettings, setThemeSettings] = useState(false);

	const setMode = (e) => {
		if (e.target.value === "Dark") {
			setCurrentColor("#F7F7F7");
			setCurrentMode("Dark");
		} else if (e.target.value === "Light" && currentColor === "#F7F7F7") {
			setCurrentColor("#03C9D7");
			setCurrentMode("Light");
		} else {
			setCurrentMode(e.target.value);
		}
	};

	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem("mainColor", color);
	};

	const handleClick = (clicked, state) => {
		setIsClicked({ ...initialState, [clicked]: state });
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
