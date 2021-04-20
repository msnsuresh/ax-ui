import HighchartsReact from "highcharts-react-official";
import * as React from "react";
import * as Highcharts from "highcharts";
import data from "./data.json";
import ReactDomServer from "react-dom/server";
import { roundOff } from "../../utils/Number.utils";

// {
//   title: {
//     text: "Chart title",
//   },
//   yAxis: {
//     title: {
//       text: "Y Title"
//     },
//   },
// }

export interface TimeLineProps {
  options: Highcharts.Options;
}

const TimeLine: React.FC<TimeLineProps> = ({ options }): React.ReactElement => {
  const baseOptions: Highcharts.Options = {
    credits: {
      enabled: false,
    },
    chart: {
      zoomType: "x",
    },
    tooltip: {
      headerFormat: "",
      useHTML: true,
      formatter: function (this: any) {
        return ReactDomServer.renderToStaticMarkup(
          <div className="">
            {this.point.data.map(
              (item: any): React.ReactElement => (
                <div className="d-flex flex-row">
                  <span className="flex-grow-1 px-2">{item.name}</span>
                  <span className="text-right">{roundOff(item.value)}</span>
                </div>
              )
            )}
          </div>
        );
      },
    },
    xAxis: {
      type: "datetime",
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillOpacity: 0,
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
    series: [
      {
        type: "area",
        name: "Quote ",
        data,
      },
    ],
    ...options,
  };
  return <HighchartsReact options={baseOptions} highcharts={Highcharts} />;
};

export default TimeLine;
