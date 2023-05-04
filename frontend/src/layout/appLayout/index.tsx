import React from "react";

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return <div>{children}</div>;
};
