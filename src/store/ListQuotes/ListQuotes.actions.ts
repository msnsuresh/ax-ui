import { action } from "typesafe-actions";
import {
  ListQuoteActionTypes,
  ListQuoteResponse,
  GetListQuoteActionType,
  GetOkListQuoteActionType,
  ErrorListQuoteActionType,
  ResetListQuoteActionType,
} from "./ListQuotes.types";

export const getListQuote = (queryString?: string): GetListQuoteActionType =>
  action(ListQuoteActionTypes.GET_LIST_QUOTE, queryString);

export const getOkListQuote = (
  data: ListQuoteResponse
): GetOkListQuoteActionType =>
  action(ListQuoteActionTypes.GET_OK_LIST_QUOTE, data);

export const errorListQuote = (error: string): ErrorListQuoteActionType =>
  action(ListQuoteActionTypes.ERROR_LIST_QUOTE, error);

export const resetListQuote = (): ResetListQuoteActionType =>
  action(ListQuoteActionTypes.RESET_LIST_QUOTE);
