import React from "react";

import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	HiloOpenCloseSeries,
	DateTime,
	Tooltip,
	Crosshair,
	Zoom,
} from "@syncfusion/ej2-react-charts";

import { financialChartData } from "./../../data/dummy";

import { Header } from "../../components";

const Financial = () => {
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
			<Header category="Chart" title="Financial" />

			<ChartComponent
				id="financial-chart"
				primaryXAxis={{
					valueType: "DateTime",
					labelFormat: "yMMM",
					title: "Month",
				}}
				primaryYAxis={{
					title: "Price",
				}}
				tooltip={{ enable: true }}
				crosshair={{ enable: true }}
				zoomSettings={{
					enableSelectionZooming: true,
					enablePan: true,
					toolbarItems: ["ZoomIn", "ZoomOut", "Reset", "Pan"],
				}}
				title="AAPL Historical"
			>
				<SeriesCollectionDirective>
					<SeriesDirective
						type="HiloOpenClose"
						name="Apple Inc"
						dataSource={financialChartData}
						xName="x"
						high="high"
						low="low"
						open="open"
						close="close"
					></SeriesDirective>
				</SeriesCollectionDirective>

				<Inject
					services={[HiloOpenCloseSeries, DateTime, Tooltip, Crosshair, Zoom]}
				/>
			</ChartComponent>
		</div>
	);
};

export default Financial;
