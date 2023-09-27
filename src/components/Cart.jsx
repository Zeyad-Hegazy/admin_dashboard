import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { cartData } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

import { Button } from "../components";

const Cart = () => {
	const { handleClick, currentColor, currentMode } = useStateContext();
	return (
		<div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
			<div className="float-right w-400 h-screen dark:bg-main-dark-bg dark:text-gray-200 bg-white dark:bg[#484b52]">
				<div className="flex justify-between pt-10 p-6">
					<p className="font-semibold text-xl">Shopping Cart</p>
					<button
						type="button"
						onClick={() => handleClick("cart", false)}
						style={{
							color: "rgb(153, 171, 180)",
							borderRadius: "50%",
						}}
						className="text-2xl p-2 hover:drop-shadow-xl hover:bg-light-gray dark:hover:bg-slate-600"
					>
						<MdOutlineCancel />
					</button>
				</div>
				{cartData.map((item, index) => (
					<div key={index}>
						<div className="py-2 flex gap-8 justify-center items-center">
							<img
								className="h-20 w-20 rounded-lg"
								src={item.image}
								alt={item.name}
							/>

							<div>
								<p className="font-semibold text-xl">{item.name}</p>
								<p className="text-gray-400 pb-2 ">{item.category}</p>
								<div className="flex items-center justify-start gap-6">
									<p className="font-semibold text-lg">{item.price}</p>
									<div className="h-12 w-auto border-2 flex">
										<div className="p-2 flex justify-center items-center border-r-2 text-center">
											<AiOutlineMinus className="text-red-500" />
										</div>
										<div className="p-4 flex justify-center items-center border-r-2 text-center">
											0
										</div>
										<div className="p-2 flex justify-center items-center text-center">
											<AiOutlinePlus className="text-green-500" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="border-t-1 border-color m-2" />
					</div>
				))}

				<div className="p-2 px-4 flex justify-between items-center">
					<p className="text-gray-400 pb-2  ">Sub Total</p>
					<p className="font-semibold text-xl">$890</p>
				</div>
				<div className="p-2 px-4 flex justify-between items-center">
					<p className="text-gray-400 pb-2">Total</p>
					<p className="font-semibold text-xl">$890</p>
				</div>
				<div className="mx-6 mb-2">
					<Button
						backgroundColor={currentColor}
						color={currentMode === "Dark" ? "black" : "#fff"}
						borderRadius="10px"
						size="md"
						className="w-full"
						text="Place Order"
					/>
				</div>
			</div>
		</div>
	);
};

export default Cart;
