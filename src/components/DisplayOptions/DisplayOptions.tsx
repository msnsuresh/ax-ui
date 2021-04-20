import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import styled from "styled-components";
import AppContext, { VIEW } from "../../Context/AppContext";

export interface DisplayOptionsProps {}

const FontAwesomeIconWrapper = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const DisplayOptions: React.FC<DisplayOptionsProps> = (): React.ReactElement => {
  const { currentView, setCurrentView } = React.useContext(AppContext);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentView(e.target.value as VIEW);
  };
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label
        className={`btn btn-secondary ${currentView === VIEW.card && "active"}`}
      >
        <input
          type="radio"
          name="options"
          id="option1"
          checked={currentView === VIEW.card}
          onChange={changeHandler}
          value={VIEW.card}
        />
        <FontAwesomeIconWrapper icon="th-large" />
      </label>
      <label
        className={`btn btn-secondary ${
          currentView === VIEW.chart && "active"
        }`}
      >
        <input
          type="radio"
          name="options"
          id="option1"
          checked={currentView === VIEW.chart}
          onChange={changeHandler}
          value={VIEW.chart}
        />
        <FontAwesomeIconWrapper icon="chart-line" />
      </label>
      <label
        className={`btn btn-secondary ${
          currentView === VIEW.table && "active"
        }`}
      >
        <input
          type="radio"
          name="options"
          id="option1"
          checked={currentView === VIEW.table}
          onChange={changeHandler}
          value={VIEW.table}
        />
        <FontAwesomeIconWrapper icon="table" />
      </label>
    </div>
    // <FontAwesomeIconWrapper
    //   icon="table"
    //   className="mx-1"
    //   opacity={currentView === VIEW.table ? 1 : 0.5}
    //   onClick={(): void => clickHandler(VIEW.table)}
    // />
    // <FontAwesomeIconWrapper
    //   icon="chart-line"
    //   className="mx-1"
    //   opacity={currentView === VIEW.chart ? 1 : 0.5}
    //   onClick={(): void => clickHandler(VIEW.chart)}
    // />
    // <FontAwesomeIconWrapper
    //   icon="th-large"
    //   className="mx-1"
    //   opacity={currentView === VIEW.card ? 1 : 0.5}
    //   onClick={(): void => clickHandler(VIEW.card)}
    // />
  );
};

export default DisplayOptions;
