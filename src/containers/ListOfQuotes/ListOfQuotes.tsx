import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getListQuote } from "../../store/ListQuotes/ListQuotes.actions";
import { getListQuoteState } from "../../store/ListQuotes/ListQuotes.selector";

export interface ListOfQuotesProps {}

const ListOfQuotes: React.FC<ListOfQuotesProps> = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(getListQuoteState);
  const [query, setQuery] = React.useState<string>();

  React.useEffect(() => {
    dispatch(getListQuote(query));
  }, [query]);

  return (
    <>
      <blockquote className="blockquote">List of Quotes from NASDAQ</blockquote>
      <input
        className="form-input mb-2"
        placeholder="Search quotes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? (
        <Loader />
      ) : (
        data.data.map(
          (item, index): React.ReactElement => (
            <div key={`${item.quote_name}-${index}`}>
              <Link to={`/quote/${item.symbol}`}>
                {item.quote_name} ( {item.symbol} )
              </Link>
            </div>
          )
        )
      )}
    </>
  );
};

export default ListOfQuotes;
