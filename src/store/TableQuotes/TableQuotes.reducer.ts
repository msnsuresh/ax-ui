import { Reducer } from "redux";
import { TableQuoteActionTypes, TableQuoteState } from "./TableQuotes.types";

const initialState: TableQuoteState = {
  loading: false,
  error: "",
  data: {
    data: [],
    meta: {
      total: 0,
      per_page: 0,
      current_page: 0,
      last_page: 0,
    },
  },
};

const reducer: Reducer<TableQuoteState> = (state = initialState, action) => {
  switch (action.type) {
    case TableQuoteActionTypes.GET_TABLE_QUOTE: {
      return {
        ...state,
        loading: true,
      };
    }
    case TableQuoteActionTypes.GET_OK_TABLE_QUOTE: {
      return {
        ...state,
        loading: false,
        error: "",
        data: {
          meta: action.payload.meta,
          data: [...state.data.data, ...action.payload.data], //action.payload.data,
        },
      };
    }
    case TableQuoteActionTypes.LOAD_MORE_OK_TABLE_QUOTE: {
      return {
        loading: false,
        error: "",
        data: {
          meta: action.payload.meta,
          data: [...state.data.data, ...action.payload.data],
        },
      };
    }
    case TableQuoteActionTypes.ERROR_TABLE_QUOTE: {
      return {
        ...initialState,
        loading: false,
        error: "",
      };
    }
    case TableQuoteActionTypes.RESET_TABLE_QUOTE: {
      return {
        ...initialState,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export { reducer as tableQuoteReducer };
