import { action } from "typesafe-actions";
import {
  TableQuoteActionTypes,
  GetTableQuoteActionType,
  GetOkTableQuoteActionType,
  ErrorTableQuoteActionType,
  ResetTableQuoteActionType,
  TableQuoteRequestType,
  TableQuoteResponse,
  LoadMoreTableQuoteActionType,
  LoadMoreOkTableQuoteActionType,
} from "./TableQuotes.types";

export const getTableQuote = (
  request: TableQuoteRequestType
): GetTableQuoteActionType =>
  action(TableQuoteActionTypes.GET_TABLE_QUOTE, request);

export const getOkTableQuote = (
  data: TableQuoteResponse
): GetOkTableQuoteActionType =>
  action(TableQuoteActionTypes.GET_OK_TABLE_QUOTE, data);

export const loadMoreTableQuote = (
  request: TableQuoteRequestType
): LoadMoreTableQuoteActionType =>
  action(TableQuoteActionTypes.LOAD_MORE_TABLE_QUOTE, request);

export const loadMoreOkTableQuote = (
  data: TableQuoteResponse
): LoadMoreOkTableQuoteActionType =>
  action(TableQuoteActionTypes.LOAD_MORE_OK_TABLE_QUOTE, data);

export const errorTableQuote = (error: string): ErrorTableQuoteActionType =>
  action(TableQuoteActionTypes.ERROR_TABLE_QUOTE, error);

export const resetTableQuote = (): ResetTableQuoteActionType =>
  action(TableQuoteActionTypes.RESET_TABLE_QUOTE);
