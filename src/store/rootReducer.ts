import { combineReducers } from "redux";
import { listQuoteReducer } from "./ListQuotes/ListQuotes.reducer";
import { ListQuoteState } from "./ListQuotes/ListQuotes.types";
import { overviewReducer } from "./Overview/Overview.reducer";
import { OverviewState } from "./Overview/Overview.types";
import { tableQuoteReducer } from "./TableQuotes/TableQuotes.reducer";
import { TableQuoteState } from "./TableQuotes/TableQuotes.types";
import { timeLineReducer } from "./TimeLine/TimeLine.reducer";
import { TimeLineState } from "./TimeLine/TimeLine.types";

export interface ApplicationState {
  overview: OverviewState;
  timeLine: TimeLineState;
  listQuote: ListQuoteState;
  tableQuote: TableQuoteState;
}

const rootReducer = combineReducers({
  overview: overviewReducer,
  timeLine: timeLineReducer,
  listQuote: listQuoteReducer,
  tableQuote: tableQuoteReducer,
});

export default rootReducer;
