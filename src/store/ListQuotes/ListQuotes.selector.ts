import { ApplicationState } from "../rootReducer";
import { ListQuoteState } from "./ListQuotes.types";

export const getListQuoteState = (state: ApplicationState): ListQuoteState =>
  state.listQuote;
