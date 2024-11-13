import React, { PropsWithChildren } from "react";
import "./globals.css";

const Layout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <>{children}</>;
};

export default Layout;
