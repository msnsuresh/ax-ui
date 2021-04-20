import { action } from "typesafe-actions";
import {
  ErrorOverviewActionType,
  GetOkOverviewActionType,
  GetOverviewActionType,
  OverviewActionTypes,
  OverviewResponse,
  ResetOverviewActionType,
} from "./Overview.types";

export const getOverview = (queryString: string): GetOverviewActionType =>
  action(OverviewActionTypes.GET_OVERVIEW, queryString);

export const getOkOverview = (
  data: OverviewResponse
): GetOkOverviewActionType => action(OverviewActionTypes.GET_OK_OVERVIEW, data);

export const errorOverview = (error: string): ErrorOverviewActionType =>
  action(OverviewActionTypes.ERROR_OVERVIEW, error);

export const resetOverview = (): ResetOverviewActionType =>
  action(OverviewActionTypes.RESET_OVERVIEW);
