import { Reducer } from "redux";
import { ListQuoteActionTypes, ListQuoteState } from "./ListQuotes.types";

const initialState: ListQuoteState = {
  loading: false,
  error: "",
  data: {
    data: [],
  },
};

const reducer: Reducer<ListQuoteState> = (state = initialState, action) => {
  switch (action.type) {
    case ListQuoteActionTypes.GET_LIST_QUOTE: {
      return {
        ...state,
        loading: true,
      };
    }
    case ListQuoteActionTypes.GET_OK_LIST_QUOTE: {
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    }
    case ListQuoteActionTypes.ERROR_LIST_QUOTE: {
      return {
        ...initialState,
        loading: false,
        error: "",
      };
    }
    case ListQuoteActionTypes.RESET_LIST_QUOTE: {
      return {
        ...initialState,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export { reducer as listQuoteReducer };
