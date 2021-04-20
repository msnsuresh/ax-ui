import * as React from "react";

export interface RowProps {
  className?: string;
}

const Row: React.FC<RowProps> = ({
  className = "",
  children,
}): React.ReactElement => {
  return <div className={`row ${className}`}>{children}</div>;
};

export default Row;
