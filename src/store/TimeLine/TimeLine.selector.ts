import { ApplicationState } from "../rootReducer";
import { TimeLineState } from "./TimeLine.types";

export const getTimeLineState = (state: ApplicationState): TimeLineState =>
  state.timeLine;
