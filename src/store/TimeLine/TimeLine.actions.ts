import { action } from "typesafe-actions";
import {
  GetTimeLineActionType,
  GetOkTimeLineActionType,
  ErrorTimeLineActionType,
  ResetTimeLineActionType,
  TimeLineActionTypes,
  TimeLineResponse,
  TimeLineRequestType,
} from "./TimeLine.types";

export const getTimeLine = (
  timeLineRequest: TimeLineRequestType
): GetTimeLineActionType =>
  action(TimeLineActionTypes.GET_TIMELINE, timeLineRequest);

export const getOkTimeLine = (
  data: TimeLineResponse
): GetOkTimeLineActionType => action(TimeLineActionTypes.GET_OK_TIMELINE, data);

export const errorTimeLine = (error: string): ErrorTimeLineActionType =>
  action(TimeLineActionTypes.ERROR_TIMELINE, error);

export const resetTimeLine = (): ResetTimeLineActionType =>
  action(TimeLineActionTypes.RESET_TIMELINE);
