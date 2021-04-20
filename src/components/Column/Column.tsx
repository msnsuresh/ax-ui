import * as React from "react";

export interface ColumnProps {
  className?: string;
}

const Column: React.FC<ColumnProps> = ({
  className = "",
  children,
}): React.ReactElement => {
  return <div className={`col ${className}`}>{children}</div>;
};

export default Column;
