import { AxiosResponse } from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import api from "../../utils/API/api";
import { isResponseOk } from "../../utils/API/API.utils";
import { errorOverview, getOkOverview } from "./Overview.actions";
import { GetOverviewActionType, OverviewActionTypes } from "./Overview.types";

function getOverview(quote_symbol: string): Promise<AxiosResponse> {
  return api.get(`quote/overview/${quote_symbol}`);
}

function* onGetOverview(action: GetOverviewActionType) {
  try {
    const { status, data }: AxiosResponse = yield call(
      getOverview,
      action.payload
    );
    if (isResponseOk(status)) {
      yield put(getOkOverview(data));
    }
  } catch (e) {
    yield put(errorOverview("error"));
  }
}

function* watchOverviewSaga() {
  yield takeEvery(OverviewActionTypes.GET_OVERVIEW, onGetOverview);
}

export default function* overviewSaga() {
  yield all([fork(watchOverviewSaga)]);
}
