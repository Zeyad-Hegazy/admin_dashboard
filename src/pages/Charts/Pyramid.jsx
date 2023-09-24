import React from "react";
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	PyramidSeries,
	AccumulationDataLabel,
	AccumulationLegend,
	AccumulationTooltip,
	Inject,
} from "@syncfusion/ej2-react-charts";

import { PyramidData } from "../../data/dummy";

import { Header } from "../../components";

const Pyramid = () => {
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
			<Header category="Chart" title="Pyramid" />

			<div className="w-full">
				<AccumulationChartComponent
					id="pyramid-chart"
					tooltip={{ enable: true }}
					legendSettings={{ position: "Bottom" }}
				>
					<Inject
						services={[
							PyramidSeries,
							AccumulationDataLabel,
							AccumulationLegend,
							AccumulationTooltip,
						]}
					/>

					<AccumulationSeriesCollectionDirective>
						<AccumulationSeriesDirective
							dataSource={PyramidData}
							xName="x"
							yName="y"
							type="Pyramid"
							dataLabel={{
								visible: true,
								name: "text",
								position: "Outside",
							}}
						/>
					</AccumulationSeriesCollectionDirective>
				</AccumulationChartComponent>
			</div>
		</div>
	);
};

export default Pyramid;
