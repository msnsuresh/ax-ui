import { Reducer } from "redux";
import { TimeLineActionTypes, TimeLineState } from "./TimeLine.types";

const initialState: TimeLineState = {
  loading: false,
  error: "",
  data: {
    data: [],
  },
};

const reducer: Reducer<TimeLineState> = (state = initialState, action) => {
  switch (action.type) {
    case TimeLineActionTypes.GET_TIMELINE: {
      return {
        ...state,
        loading: true,
      };
    }
    case TimeLineActionTypes.GET_OK_TIMELINE: {
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    }
    case TimeLineActionTypes.ERROR_TIMELINE: {
      return {
        ...initialState,
        loading: false,
        error: "",
      };
    }
    case TimeLineActionTypes.RESET_TIMELINE: {
      return {
        ...initialState,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export { reducer as timeLineReducer };
