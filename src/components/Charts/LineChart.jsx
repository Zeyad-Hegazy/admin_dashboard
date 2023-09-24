import React from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	LineSeries,
	DateTime,
	Legend,
	Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
	lineCustomSeries,
	LinePrimaryYAxis,
	LinePrimaryXAxis,
} from "../../data/dummy";

const LineChart = () => {
	return (
		<ChartComponent
			id="line-chart"
			primaryXAxis={LinePrimaryXAxis}
			primaryYAxis={LinePrimaryYAxis}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
		>
			<SeriesCollectionDirective>
				{lineCustomSeries.map((item, index) => (
					<SeriesDirective key={index} {...item} />
				))}
			</SeriesCollectionDirective>

			<Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
		</ChartComponent>
	);
};

export default LineChart;
