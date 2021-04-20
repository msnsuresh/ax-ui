import { AxiosResponse } from "axios";
import { all, call, debounce, fork, put } from "redux-saga/effects";
import api from "../../utils/API/api";
import { isResponseOk } from "../../utils/API/API.utils";
import { getOkListQuote, errorListQuote } from "./ListQuotes.actions";
import {
  GetListQuoteActionType,
  ListQuoteActionTypes,
} from "./ListQuotes.types";

function getListQuote(quote_symbol = ""): Promise<AxiosResponse> {
  return api.get(`quote/list?query=${quote_symbol}`);
}

function* onGetListQuote(action: GetListQuoteActionType) {
  try {
    const { status, data }: AxiosResponse = yield call(
      getListQuote,
      action.payload
    );
    if (isResponseOk(status)) {
      yield put(getOkListQuote(data));
    }
  } catch (e) {
    yield put(errorListQuote("error"));
  }
}

function* watchListQuoteSaga() {
  yield debounce(500, ListQuoteActionTypes.GET_LIST_QUOTE, onGetListQuote);
}

export default function* listQuoteSaga() {
  yield all([fork(watchListQuoteSaga)]);
}
