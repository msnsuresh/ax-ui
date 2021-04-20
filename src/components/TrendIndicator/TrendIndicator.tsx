import * as React from "react";
import styled from "styled-components";
import { TREND } from "../../store/Overview/Overview.types";

const TrendIndicatorWrapper = styled.span<{ trend: TREND }>`
  color: ${(props): string => (props.trend === TREND.UP ? "green" : "red")};
`;

export interface TrendInidicatorProps {
  trend: TREND;
  value: React.ReactNode;
  className?: string;
}

const TrendInidicator: React.FC<TrendInidicatorProps> = ({
  trend,
  value,
  className,
}) => {
  return (
    <TrendIndicatorWrapper className={className} trend={trend}>
      {value}
    </TrendIndicatorWrapper>
  );
};

export default TrendInidicator;
