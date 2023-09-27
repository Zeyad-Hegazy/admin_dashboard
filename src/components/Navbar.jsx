import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { avatar } from "../data/dummy.js";
import { Cart, Chat, Notifications, UserProfile } from ".";

import { useStateContext } from "../contexts/ContextProvider.js";

const NavButton = ({ title, customFunc, color, dotColor, icon }) => {
	return (
		<TooltipComponent content={title} position="BottomCenter">
			<button
				type="button"
				onClick={customFunc}
				style={{ color }}
				className="relative text-xl rounded-full p-3 dark:hover:bg-slate-900 hover:bg-light-gray"
			>
				<span
					style={{ background: dotColor }}
					className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
				></span>
				{icon}
			</button>
		</TooltipComponent>
	);
};

const Navbar = () => {
	const { currentColor } = useStateContext();

	const {
		activeMenu,
		setActiveMenu,
		isClicked,
		setIsClicked,
		handleClick,
		screenSize,
		setScreenSize,
	} = useStateContext();

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<div className="flex justify-between p-2 md:mx-6 relative">
			<NavButton
				title="Menu"
				customFunc={() => setActiveMenu((prevState) => !prevState)}
				color={currentColor}
				icon={<AiOutlineMenu />}
			/>
			<div className="flex relative">
				<NavButton
					title="Cart"
					customFunc={() => handleClick("cart", true)}
					color={currentColor}
					icon={<FiShoppingCart />}
				/>

				<NavButton
					title="Notifications"
					customFunc={() => handleClick("notification", true)}
					color={currentColor}
					dotColor="#03C9D7"
					icon={<RiNotification3Line />}
				/>

				<NavButton
					title="Chat"
					customFunc={() => handleClick("chat", true)}
					color={currentColor}
					dotColor="#03C9D7"
					icon={<BsChatLeft />}
				/>
				<TooltipComponent content="User Profile" position="BottomCenter">
					<div
						className="flex items-center p-1 gap-2 cursor-pointer hover:bg-light-gray rounded-lg"
						onClick={() => handleClick("userProfile", true)}
					>
						<img src={avatar} alt="avatar" className="h-8 w-8 rounded-full " />
						<p>
							<span className="text-gray-400 text-14">Hi, </span>{" "}
							<span className="text-gray-400 font-bold ml-1 text-14">
								Zeyad
							</span>
						</p>
						<MdKeyboardArrowDown className="text-gray-400 text-14" />
					</div>
				</TooltipComponent>

				{isClicked.cart && <Cart />}
				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notifications />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	);
};

export default Navbar;
