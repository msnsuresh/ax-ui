import * as React from "react";
import { formatDate } from "../utils/Date.utils";

export enum DateRangeType {
  ONE_WEEK = "ONE_WEEK",
  ONE_MONTH = "ONE_MONTH",
  THREE_MONTH = "THREE_MONTH",
  SIX_MONTH = "SIX_MONTH",
  ONE_YEAR = "ONE_YEAR",
  TWO_YEAR = "TWO_YEAR",
  FOUR_YEAR = "FOUR_YEAR",
}

export interface DateRangeContextType {
  startDate: string;
  endDate: string;
  type: DateRangeType;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<DateRangeType>>;
}
const endDate = new Date();
const startDate = new Date();
startDate.setDate(endDate.getDate() - 7);

const DateRangeContext = React.createContext<DateRangeContextType>({
  startDate: formatDate(startDate),
  endDate: formatDate(endDate),
  type: DateRangeType.ONE_WEEK,
  setStartDate: (date) => {},
  setEndDate: (date) => {},
  setType: (type) => {},
});

export default DateRangeContext;
