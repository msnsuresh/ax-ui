import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import styled from "styled-components";
import { OverviewResponse, TREND } from "../../store/Overview/Overview.types";
import { roundOff } from "../../utils/Number.utils";
import TrendInidicator from "../TrendIndicator/TrendIndicator";
import CardRow from "./CardRow";

const ContentWrapper = styled.div`
  .card-row:last-of-type {
    border-bottom: unset;
  }
`;

export interface OverviewContentProps extends OverviewResponse {}

const OverviewContent: React.FC<OverviewContentProps> = ({
  quote_name: name,
  symbol,
  highest,
  lowest,
  open,
  high,
  low,
  close,
  prevClose,
  difference,
  percentage,
  trend,
}) => {
  return (
    <ContentWrapper className="d-flex flex-wrap flex-column">
      <CardRow title="Previous Close" value={roundOff(prevClose)} />
      <CardRow title="Open" value={roundOff(open)} />
      <CardRow
        title="Highest"
        value={<TrendInidicator trend={TREND.UP} value={roundOff(highest)} />}
      />
      <CardRow
        title="Lowest"
        value={<TrendInidicator trend={TREND.DOWN} value={roundOff(lowest)} />}
      />
      <CardRow
        title="Trend"
        value={
          <TrendInidicator
            trend={trend}
            value={
              <FontAwesomeIcon
                icon={trend === TREND.UP ? "chevron-up" : "chevron-down"}
              />
            }
          />
        }
      />
    </ContentWrapper>
  );
};

export default OverviewContent;
