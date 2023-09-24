import React from "react";

import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	SplineAreaSeries,
	DateTime,
	Legend,
	Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
	areaCustomSeries,
	areaPrimaryXAxis,
	areaPrimaryYAxis,
} from "../../data/dummy";

import { Header } from "../../components";

const Area = () => {
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
			<Header category="Chart" title="Inflation Rate in Percentage" />

			<div className="w-full">
				<ChartComponent
					id="area-chart"
					primaryXAxis={areaPrimaryXAxis}
					primaryYAxis={areaPrimaryYAxis}
					chartArea={{ border: { width: 0 } }}
					tooltip={{ enable: true }}
				>
					<SeriesCollectionDirective>
						{areaCustomSeries.map((item, index) => (
							<SeriesDirective key={index} {...item} />
						))}
					</SeriesCollectionDirective>

					<Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
				</ChartComponent>
			</div>
		</div>
	);
};

export default Area;
