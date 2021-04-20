import * as React from "react";
import { useSelector } from "react-redux";
import TitleWithTrend from "../../../components/QuoteOverview/TitleWithTrend";
import { getOverviewState } from "../../../store/Overview/Overview.selector";

export interface QuoteOverviewTitleProps {}

const QuoteOverviewTitle: React.FC<QuoteOverviewTitleProps> = (): React.ReactElement => {
  const { data } = useSelector(getOverviewState);
  return <TitleWithTrend {...data} className="flex-grow-1" />;
};

export default QuoteOverviewTitle;
