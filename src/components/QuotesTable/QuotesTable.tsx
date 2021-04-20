import * as React from "react";
import { TableQuoteResponse } from "../../store/TableQuotes/TableQuotes.types";

type TableQuoteMinimal = Pick<TableQuoteResponse, "meta" | "data">;
export interface QuotesTableProps extends TableQuoteMinimal {
  loadMore: (page: number, limit: number) => void;
}

const QuotesTable: React.FC<QuotesTableProps> = ({
  meta,
  data,
  loadMore,
}): React.ReactElement => {
  React.useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, []);

  const isBottom = (el: HTMLElement | null) => {
    return el && el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  const trackScrolling = () => {
    const wrappedElement = document.getElementById("bottom");
    if (isBottom(wrappedElement)) {
      if (meta.current_page < meta.last_page) {
        loadMore(meta.current_page + 1, meta.per_page);
      }
    }
  };

  return (
    <>
      <table className="table table-responsive table-borderless table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Adj Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((quote) => (
              <tr key={`${quote.date}`}>
                <td>{new Date(quote.date).toDateString()}</td>
                <td>{quote.open}</td>
                <td>{quote.high}</td>
                <td>{quote.low}</td>
                <td>{quote.close}</td>
                <td>{quote.adj_close}</td>
                <td>{quote.volume}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <span id="bottom" style={{ visibility: "hidden" }} />
    </>
  );
};

export default QuotesTable;
