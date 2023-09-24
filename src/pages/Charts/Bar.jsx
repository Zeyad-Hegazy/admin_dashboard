import React from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	Tooltip,
	DataLabel,
	ColumnSeries,
} from "@syncfusion/ej2-react-charts";

import { barCustomSeries } from "../../data/dummy";

import { Header } from "../../components";

const primaryxAxis = { valueType: "Category" };
const primaryyAxis = {
	minimum: 0,
	maximum: 80,
	interval: 20,
};

const Bar = () => {
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
			<Header category="Chart" title="Bar" />

			<ChartComponent
				id="bar-chart"
				primaryXAxis={primaryxAxis}
				primaryYAxis={primaryyAxis}
			>
				<SeriesCollectionDirective>
					{barCustomSeries.map((item, index) => (
						<SeriesDirective key={index} {...item} />
					))}
				</SeriesCollectionDirective>
				<Inject
					services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}
				/>
			</ChartComponent>
		</div>
	);
};

export default Bar;
