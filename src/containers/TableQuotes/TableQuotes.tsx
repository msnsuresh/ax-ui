import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import QuotesTable from "../../components/QuotesTable/QuotesTable";
import DateRangeContext from "../../Context/DateRangeContext";
import {
  getTableQuote,
  loadMoreTableQuote,
  resetTableQuote,
} from "../../store/TableQuotes/TableQuotes.actions";
import { getTableQuoteState } from "../../store/TableQuotes/TableQuotes.selector";

export interface TableQuotesProps {
  quoteName: string;
}

const TableQuotes: React.FC<TableQuotesProps> = ({
  quoteName,
}): React.ReactElement => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(getTableQuoteState);
  const { startDate, endDate } = React.useContext(DateRangeContext);

  const loadContent = (page = 1, limit = 50): void => {
    dispatch(
      getTableQuote({
        query: quoteName,
        startDate,
        endDate,
        page,
        limit,
      })
    );
  };

  React.useEffect(() => {
    // dispatch(
    //   getTableQuote({
    //     query: quoteName,
    //     startDate,
    //     endDate,
    //     page: 1,
    //     limit: 50,
    //   })
    // );
    dispatch(resetTableQuote());
    loadContent();
  }, [startDate]);

  return (
    <>
      {loading && <Loader />}
      {!loading && data.data.length > 0 && (
        <QuotesTable meta={data.meta} data={data.data} loadMore={loadContent} />
      )}
    </>
  );
};

export default TableQuotes;
