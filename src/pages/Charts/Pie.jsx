import React from "react";
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	PieSeries,
	AccumulationDataLabel,
	AccumulationLegend,
	AccumulationTooltip,
	Inject,
} from "@syncfusion/ej2-react-charts";

import { pieChartData } from "../../data/dummy";

import { Header } from "../../components";

const Pie = () => {
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
			<Header category="Chart" title="Pie" />

			<div className="w-full">
				<AccumulationChartComponent id="pie-chart" tooltip={{ enable: true }}>
					<Inject
						services={[
							PieSeries,
							AccumulationDataLabel,
							AccumulationLegend,
							AccumulationTooltip,
						]}
					/>

					<AccumulationSeriesCollectionDirective>
						<AccumulationSeriesDirective
							dataSource={pieChartData}
							xName="x"
							yName="y"
							type="Pie"
							radius="100%"
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

export default Pie;
