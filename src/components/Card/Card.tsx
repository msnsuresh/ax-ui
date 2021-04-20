import * as React from "react";
import { CardContentStyled, CardTitleStyled, CardWrapper } from "./Card.styled";

export interface CardProps {
  className?: string;
  title?: React.ReactNode;
  content?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  className,
}): React.ReactElement => {
  return (
    <CardWrapper className={className}>
      {title && <CardTitleStyled>{title}</CardTitleStyled>}
      {content && <CardContentStyled>{content}</CardContentStyled>}
    </CardWrapper>
  );
};

export default Card;
