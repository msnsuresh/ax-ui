import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "../components/Loader/Loader";
// import Home from "./Home";
// import Quote from "./Quote";

const Home = React.lazy(() => import("./Home"));
const Quote = React.lazy(() => import("./Quote"));

const Routes: React.FC = (): React.ReactElement => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quote/:quoteName" component={Quote} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default Routes;
