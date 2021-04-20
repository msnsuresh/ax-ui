import { ApplicationState } from "../rootReducer";
import { TableQuoteState } from "./TableQuotes.types";

export const getTableQuoteState = (state: ApplicationState): TableQuoteState =>
  state.tableQuote;
