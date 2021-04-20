import { AxiosResponse } from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import api from "../../utils/API/api";
import { isResponseOk } from "../../utils/API/API.utils";
import {
  getOkTableQuote,
  errorTableQuote,
  loadMoreOkTableQuote,
} from "./TableQuotes.actions";
import {
  GetTableQuoteActionType,
  TableQuoteActionTypes,
  TableQuoteRequestType,
} from "./TableQuotes.types";

function getTableQuote(request: TableQuoteRequestType): Promise<AxiosResponse> {
  return api.get(
    `quote/history-data?query=${request.query}&startDate=${request.startDate}&endDate=${request.endDate}&page=${request.page}&limit=${request.limit}`
  );
}

function* onGetTableQuote(action: GetTableQuoteActionType) {
  try {
    const { status, data }: AxiosResponse = yield call(
      getTableQuote,
      action.payload
    );
    if (isResponseOk(status)) {
      yield put(getOkTableQuote(data));
    }
  } catch (e) {
    yield put(errorTableQuote("error"));
  }
}

function* onLoadMoreTableQuote(action: GetTableQuoteActionType) {
  try {
    const { status, data }: AxiosResponse = yield call(
      getTableQuote,
      action.payload
    );
    if (isResponseOk(status)) {
      yield put(loadMoreOkTableQuote(data));
    }
  } catch (e) {
    yield put(errorTableQuote("error"));
  }
}

function* watchTableQuoteSaga() {
  yield takeEvery(TableQuoteActionTypes.GET_TABLE_QUOTE, onGetTableQuote);
  yield takeEvery(
    TableQuoteActionTypes.LOAD_MORE_TABLE_QUOTE,
    onLoadMoreTableQuote
  );
}

export default function* tableQuoteSaga() {
  yield all([fork(watchTableQuoteSaga)]);
}
