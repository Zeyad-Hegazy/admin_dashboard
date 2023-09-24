import React, { useState, useEffect } from "react";
import { BsDot } from "react-icons/bs";
import { Stacked, Button, SparkLine } from "../components";
import { earningData, SparklineAreaData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
	const { currentMode } = useStateContext();

	const [mainColor, setMainColor] = useState(localStorage.getItem("mainColor"));

	useEffect(() => {
		setMainColor(localStorage.getItem("mainColor"));
	}, [localStorage.getItem("mainColor")]);

	return (
		<div className="mt-12">
			<div className="flex flex-wrap lg:flex-nowrap justify-center">
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
					<div>
						<p className="text-gray-400 font-bold">Eearnings</p>
						<p className="text-2xl">$63,448,87</p>
					</div>
					<div className="m-6">
						<Button
							color={currentMode === "Dark" ? "black" : "white"}
							backgroundColor={mainColor}
							text="Download"
							borderRadius="10px"
							size="md"
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-center gap-8 flex-wrap">
				{earningData.map((item) => (
					<div
						key={item.title}
						className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
					>
						<button
							type="button"
							style={{ color: item.iconColor, backgroundColor: item.iconBg }}
							className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
						>
							{item.icon}
						</button>
						<p className="mt-3">
							<span className="text-lg font-semibold">{item.amount}</span>
							<span className={`text-sm text-${item.pcColor} ml-2`}>
								{item.percentage}
							</span>
						</p>
						<p className="text-sm text-gray-400">{item.title}</p>
					</div>
				))}
			</div>

			<div className="flex gap-10 flex-wrap justify-center">
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-xl md:w-780">
					<div className="flex justify-between">
						<p className="font-semibold text-xl">Revenue Updates</p>
						<div className="flex items-center gap-4">
							<p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl dark:text-gray-200">
								<span>
									<BsDot />
								</span>
								<span>Expense</span>
							</p>
							<p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
								<span>
									<BsDot />
								</span>
								<span>Budget</span>
							</p>
						</div>
					</div>
					<div className="mt-10 flex gap-10 flex-wrap justify-center">
						<div className="border-r-1 border-color m-4 pr-10">
							<div>
								<p>
									<span className="text-3xl font-semibold">$93,438</span>
									<span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
										23%
									</span>
								</p>
								<p className="text-gray-500 mt-1 dark:text-gray-300">Budget</p>
							</div>
							<div className="mt-8">
								<p>
									<span className="text-3xl font-semibold">$48,438</span>
								</p>
								<p className="text-gray-500 mt-1 dark:text-gray-300">Expense</p>
							</div>
							<div className="mt-5">
								<SparkLine
									currentColor={currentMode === "Black" ? "#F7F7F7" : mainColor}
									id="line-parkline"
									type="Line"
									height="80px"
									width="250px"
									data={SparklineAreaData}
									color={mainColor}
								/>
							</div>
							<div className="mt-10">
								<Button
									color={currentMode === "Dark" ? "black" : "white"}
									backgroundColor={mainColor}
									text="Download Report"
									borderRadius="10px"
									size="md"
								/>
							</div>
						</div>
						<div>
							<Stacked width="320px" hight="360px" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ecommerce;
