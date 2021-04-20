import { all } from "redux-saga/effects";
import listQuoteSaga from "./ListQuotes/ListQuotes.saga";
import overviewSaga from "./Overview/Overview.saga";
import tableQuoteSaga from "./TableQuotes/TableQuotes.saga";
import timeLineSaga from "./TimeLine/TimeLine.saga";

export default function* rootSaga() {
  yield all([
    overviewSaga(),
    timeLineSaga(),
    listQuoteSaga(),
    tableQuoteSaga(),
  ]);
}
