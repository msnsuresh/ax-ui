export interface PaginatedMeta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export interface Quote {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  adj_close: number;
  volume: number;
}

export interface TableQuoteResponse {
  meta: PaginatedMeta;
  data: Quote[];
}

export interface TableQuoteState {
  loading: boolean;
  error: string;
  data: TableQuoteResponse;
}

export interface TableQuoteRequestType {
  query: string;
  startDate: string;
  endDate: string;
  page: number;
  limit: number;
}

export enum TableQuoteActionTypes {
  GET_TABLE_QUOTE = "@@TABLE_QUOTE/GET",
  GET_OK_TABLE_QUOTE = "@@TABLE_QUOTE/GET_OK",
  LOAD_MORE_TABLE_QUOTE = "@@TABLE_QUOTE/LOAD_MORE",
  LOAD_MORE_OK_TABLE_QUOTE = "@@TABLE_QUOTE/LOAD_MORE_OK",
  ERROR_TABLE_QUOTE = "@@TABLE_QUOTE/ERROR",
  RESET_TABLE_QUOTE = "@@TABLE_QUOTE/RESET",
}

export interface GetTableQuoteActionType {
  type: TableQuoteActionTypes.GET_TABLE_QUOTE;
  payload: TableQuoteRequestType;
}

export interface GetOkTableQuoteActionType {
  type: TableQuoteActionTypes.GET_OK_TABLE_QUOTE;
  payload: TableQuoteResponse;
}

export interface LoadMoreTableQuoteActionType {
  type: TableQuoteActionTypes.LOAD_MORE_TABLE_QUOTE;
  payload: TableQuoteRequestType;
}

export interface LoadMoreOkTableQuoteActionType {
  type: TableQuoteActionTypes.LOAD_MORE_OK_TABLE_QUOTE;
  payload: TableQuoteResponse;
}

export interface ErrorTableQuoteActionType {
  type: TableQuoteActionTypes.ERROR_TABLE_QUOTE;
  payload: string;
}

export interface ResetTableQuoteActionType {
  type: TableQuoteActionTypes.RESET_TABLE_QUOTE;
}
