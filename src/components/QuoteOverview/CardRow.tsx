import * as React from "react";
import styled from "styled-components";

const CardRowWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
`;

const BoldText = styled.span`
  font-weight: 600;
`;

export interface CardRowProps {
  title: React.ReactNode;
  value: React.ReactNode;
}

const CardRow: React.FC<CardRowProps> = ({
  title,
  value,
}): React.ReactElement => {
  return (
    <CardRowWrapper className="py-1 d-flex flex-row-reverse card-row">
      <BoldText>{value}</BoldText>
      <span className="flex-grow-1">{title}</span>
    </CardRowWrapper>
  );
};

export default CardRow;
