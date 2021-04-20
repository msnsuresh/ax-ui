import * as React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Column from "../components/Column/Column";
import Container from "../components/Container/Container";
import DateRange from "../components/DateRange/DateRange";
import DisplayOptions from "../components/DisplayOptions/DisplayOptions";
import Navbar from "../components/Navbar/Navbar";
import Row from "../components/Row/Row";
import QuoteOverview from "../containers/QuoteOverview/QuoteOverview";
import QuoteOverviewTitle from "../containers/QuoteOverview/Title/QuoteOverviewTitle";
import TableQuotes from "../containers/TableQuotes/TableQuotes";
import TimeLineChart from "../containers/TimeLine/TimeLineChart";
import AppContext, { VIEW } from "../Context/AppContext";
import DateRangeContext, { DateRangeType } from "../Context/DateRangeContext";
import { resetOverview } from "../store/Overview/Overview.actions";
import { resetTableQuote } from "../store/TableQuotes/TableQuotes.actions";
import { resetTimeLine } from "../store/TimeLine/TimeLine.actions";
import { formatDate } from "../utils/Date.utils";

interface QueryParamsType {
  quoteName: string;
}

const Quote: React.FC = () => {
  const tmpEndDate = new Date();
  const tmpStartDate = new Date();
  tmpStartDate.setDate(tmpEndDate.getDate() - 7);

  let { quoteName } = useParams<QueryParamsType>();
  const [currentView, setCurrentView] = React.useState<VIEW>(VIEW.card);
  const [startDate, setStartDate] = React.useState(formatDate(tmpStartDate));
  const [endDate, setEndDate] = React.useState(formatDate(tmpEndDate));
  const [type, setType] = React.useState(DateRangeType.ONE_WEEK);
  const dispatch = useDispatch();

  React.useEffect((): (() => void) => {
    return (): void => {
      dispatch(resetOverview());
      dispatch(resetTimeLine());
      dispatch(resetTableQuote());
    };
  }, []);

  const getDisplayContent = (): React.ReactElement => {
    if (currentView === VIEW.card) {
      return <QuoteOverview quote={quoteName} />;
    } else if (currentView === VIEW.chart) {
      return <TimeLineChart quoteName={quoteName} />;
    } else {
      return <TableQuotes quoteName={quoteName} />;
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <DateRangeContext.Provider
          value={{
            startDate,
            endDate,
            type,
            setStartDate,
            setEndDate,
            setType,
          }}
        >
          <Row className="my-4">
            <Column className="d-flex flex-row-reverse align-items-center">
              <QuoteOverviewTitle />
            </Column>
          </Row>

          <Row className="my-4">
            <Column className="d-flex flex-row-reverse align-items-center">
              <>
                <AppContext.Provider value={{ currentView, setCurrentView }}>
                  <DisplayOptions />
                </AppContext.Provider>
                {currentView !== VIEW.card && (
                  <div className="flex-grow-1">
                    <DateRange />
                  </div>
                )}
              </>
            </Column>
          </Row>

          <Row className="my-4">
            <Column>{getDisplayContent()}</Column>
          </Row>
        </DateRangeContext.Provider>
      </Container>
    </>
  );
};

export default Quote;
