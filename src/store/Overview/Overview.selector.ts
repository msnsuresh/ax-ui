import { ApplicationState } from "../rootReducer";
import { OverviewState } from "./Overview.types";

export const getOverviewState = (state: ApplicationState): OverviewState =>
  state.overview;
