export interface QuoteMinimal {
  quote_name: string;
  symbol: string;
}

export interface ListQuoteResponse {
  data: QuoteMinimal[];
}

export interface ListQuoteState {
  loading: boolean;
  error: string;
  data: ListQuoteResponse;
}

export enum ListQuoteActionTypes {
  GET_LIST_QUOTE = "@@LIST_QUOTE/GET",
  GET_OK_LIST_QUOTE = "@@LIST_QUOTE/GET_OK",
  ERROR_LIST_QUOTE = "@@LIST_QUOTE/ERROR",
  RESET_LIST_QUOTE = "@@LIST_QUOTE/RESET",
}

export interface GetListQuoteActionType {
  type: ListQuoteActionTypes.GET_LIST_QUOTE;
  payload?: string;
}

export interface GetOkListQuoteActionType {
  type: ListQuoteActionTypes.GET_OK_LIST_QUOTE;
  payload: ListQuoteResponse;
}

export interface ErrorListQuoteActionType {
  type: ListQuoteActionTypes.ERROR_LIST_QUOTE;
  payload: string;
}

export interface ResetListQuoteActionType {
  type: ListQuoteActionTypes.RESET_LIST_QUOTE;
}
