export enum TREND {
  UP = "UP",
  DOWN = "DOWN",
}

export interface OverviewResponse {
  quote_name: string;
  symbol: string;
  date: string;
  highest: number;
  lowest: number;
  open: number;
  high: number;
  low: number;
  close: number;
  prevClose: number;
  difference: number;
  percentage: number;
  trend: TREND;
}

export interface OverviewState {
  loading: boolean;
  error: string;
  data: OverviewResponse;
}

export enum OverviewActionTypes {
  GET_OVERVIEW = "@@OVERVIEW/GET",
  GET_OK_OVERVIEW = "@@OVERVIEW/GET_OK",
  ERROR_OVERVIEW = "@@OVERVIEW/ERROR",
  RESET_OVERVIEW = "@@OVERVIEW/RESET",
}

export interface GetOverviewActionType {
  type: OverviewActionTypes.GET_OVERVIEW;
  payload: string;
}

export interface GetOkOverviewActionType {
  type: OverviewActionTypes.GET_OK_OVERVIEW;
  payload: OverviewResponse;
}

export interface ErrorOverviewActionType {
  type: OverviewActionTypes.ERROR_OVERVIEW;
  payload: string;
}

export interface ResetOverviewActionType {
  type: OverviewActionTypes.RESET_OVERVIEW;
}
