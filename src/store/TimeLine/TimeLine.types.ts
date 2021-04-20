export interface Legend {
  name: string;
  value: number;
}

export interface TimeLine {
  x: number;
  y: number;
  data: Legend[];
}

export interface TimeLineResponse {
  data: TimeLine[];
}

export interface TimeLineState {
  loading: boolean;
  error: string;
  data: TimeLineResponse;
}

export interface TimeLineRequestType {
  symbol: string;
  startDate: string;
  endDate: string;
}

export enum TimeLineActionTypes {
  GET_TIMELINE = "@@TIMELINE/GET",
  GET_OK_TIMELINE = "@@TIMELINE/GET_OK",
  ERROR_TIMELINE = "@@TIMELINE/ERROR",
  RESET_TIMELINE = "@@TIMELINE/RESET",
}

export interface GetTimeLineActionType {
  type: TimeLineActionTypes.GET_TIMELINE;
  payload: TimeLineRequestType;
}

export interface GetOkTimeLineActionType {
  type: TimeLineActionTypes.GET_OK_TIMELINE;
  payload: TimeLineResponse;
}

export interface ErrorTimeLineActionType {
  type: TimeLineActionTypes.ERROR_TIMELINE;
  payload: string;
}

export interface ResetTimeLineActionType {
  type: TimeLineActionTypes.RESET_TIMELINE;
}
