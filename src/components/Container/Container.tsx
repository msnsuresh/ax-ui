import * as React from "react";

export interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  className = "",
  children,
}): React.ReactElement => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
