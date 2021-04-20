import React from "react";
import { Provider } from "react-redux";
import Routes from "./pages/Routes";
import { confirgureStore } from "./store/store";
import { GlobalStyle } from "./styles/GlobalStyle";

const store = confirgureStore();

const App: React.FC = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
};

export default App;
