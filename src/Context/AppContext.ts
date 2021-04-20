import * as React from "react";

export enum VIEW {
  "card" = "card",
  "chart" = "chart",
  "table" = "table",
}

export interface AppContextType {
  currentView: VIEW;
  setCurrentView: React.Dispatch<React.SetStateAction<VIEW>>;
}

const AppContext = React.createContext<AppContextType>({
  currentView: VIEW.card,
  setCurrentView: (view) => {},
});

export default AppContext;
