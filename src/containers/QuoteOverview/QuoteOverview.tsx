import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import OverviewContent from "../../components/QuoteOverview/OverviewContent";
import { getOverview } from "../../store/Overview/Overview.actions";
import { getOverviewState } from "../../store/Overview/Overview.selector";

export interface QuoteOverviewProps {
  quote: string;
}

const QuoteOverview: React.FC<QuoteOverviewProps> = ({
  quote,
}): React.ReactElement => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(getOverviewState);

  React.useEffect((): void => {
    dispatch(getOverview(quote));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card content={loading ? <Loader /> : <OverviewContent {...data} />} />
    </>
  );
};

export default QuoteOverview;
