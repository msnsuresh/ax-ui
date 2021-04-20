import { AxiosResponse } from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import api from "../../utils/API/api";
import { isResponseOk } from "../../utils/API/API.utils";
import { errorTimeLine, getOkTimeLine } from "./TimeLine.actions";
import {
  GetTimeLineActionType,
  TimeLineActionTypes,
  TimeLineRequestType,
} from "./TimeLine.types";

function getTimeLine(
  timeLineRequest: TimeLineRequestType
): Promise<AxiosResponse> {
  return api.get(
    `quote/chart?query=${timeLineRequest.symbol}&startDate=${timeLineRequest.startDate}&endDate=${timeLineRequest.endDate}`
  );
}

function* onGetTimeLine(action: GetTimeLineActionType) {
  try {
    const { status, data }: AxiosResponse = yield call(
      getTimeLine,
      action.payload
    );
    if (isResponseOk(status)) {
      yield put(getOkTimeLine(data));
    }
  } catch (e) {
    yield put(errorTimeLine("error"));
  }
}

function* watchTimeLineSaga() {
  yield takeEvery(TimeLineActionTypes.GET_TIMELINE, onGetTimeLine);
}

export default function* timeLineSaga() {
  yield all([fork(watchTimeLineSaga)]);
}
