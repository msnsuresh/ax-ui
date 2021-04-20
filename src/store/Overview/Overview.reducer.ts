import { Reducer } from "redux";
import { OverviewActionTypes, OverviewState, TREND } from "./Overview.types";

const initialState: OverviewState = {
  loading: false,
  error: "",
  data: {
    quote_name: "",
    symbol: "",
    date: "",
    highest: 0,
    lowest: 0,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    prevClose: 0,
    difference: 0,
    percentage: 0,
    trend: TREND.DOWN,
  },
};

const reducer: Reducer<OverviewState> = (state = initialState, action) => {
  switch (action.type) {
    case OverviewActionTypes.GET_OVERVIEW: {
      return {
        ...state,
        loading: true,
      };
    }
    case OverviewActionTypes.GET_OK_OVERVIEW: {
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    }
    case OverviewActionTypes.ERROR_OVERVIEW: {
      return {
        ...initialState,
        loading: false,
        error: "",
      };
    }
    case OverviewActionTypes.RESET_OVERVIEW: {
      return {
        ...initialState,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export { reducer as overviewReducer };
