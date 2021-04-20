import * as React from "react";
import styled from "styled-components";
import { OverviewResponse, TREND } from "../../store/Overview/Overview.types";
import { roundOff } from "../../utils/Number.utils";
import TrendInidicator from "../TrendIndicator/TrendIndicator";

const NameStyled = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;
const MessageStyled = styled.div`
  font-size: 0.75rem;
  font-style: italic;
  color: grey;
`;

type QuotePreview = Pick<
  OverviewResponse,
  | "quote_name"
  | "symbol"
  | "close"
  | "difference"
  | "percentage"
  | "trend"
  | "date"
>;
export interface TitleWithTrendProps extends QuotePreview {
  className?: string;
}

const TitleWithTrend: React.FC<TitleWithTrendProps> = ({
  quote_name: name,
  symbol,
  date,
  close,
  difference,
  percentage,
  trend,
  className,
}) => {
  const getIndicator = (): string => {
    return trend === TREND.UP ? "+" : "-";
  };
  return name ? (
    <div className={className}>
      <NameStyled className="px-1 d-block">
        {name} ( {symbol} )
      </NameStyled>
      <NameStyled className="px-1">{close}</NameStyled>
      <TrendInidicator
        className="px-1"
        trend={trend}
        value={
          <>
            {getIndicator()}
            {roundOff(difference)}
          </>
        }
      />
      <TrendInidicator
        className="px-1"
        trend={trend}
        value={
          <>
            ( {getIndicator()}
            {roundOff(percentage)} %)
          </>
        }
      />
      <MessageStyled>As of {new Date(date).toString()}</MessageStyled>
    </div>
  ) : (
    <></>
  );
};

export default TitleWithTrend;
