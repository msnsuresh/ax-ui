import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as React from "react";
import ReactDomServer from "react-dom/server";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import DateRangeContext from "../../Context/DateRangeContext";
import { getTimeLine } from "../../store/TimeLine/TimeLine.actions";
import { getTimeLineState } from "../../store/TimeLine/TimeLine.selector";
import { roundOff } from "../../utils/Number.utils";
// import data from "./data.json";

export interface TimeLineChartProps {
  quoteName: string;
}

const TimeLineChart: React.FC<TimeLineChartProps> = ({
  quoteName,
}): React.ReactElement => {
  const { startDate, endDate } = React.useContext(DateRangeContext);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(getTimeLineState);

  React.useEffect(() => {
    loadData();
  }, [startDate]);

  const loadData = () => {
    dispatch(
      getTimeLine({
        symbol: quoteName,
        startDate,
        endDate,
      })
    );
  };

  const baseOptions: Highcharts.Options = {
    credits: {
      enabled: false,
    },
    title: {
      text: quoteName,
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
    yAxis: {
      title: {
        text: "",
      },
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
        data: data.data,
      },
    ],
  };
  return loading ? (
    <Loader />
  ) : (
    <HighchartsReact options={baseOptions} highcharts={Highcharts} />
  );
};

export default TimeLineChart;
