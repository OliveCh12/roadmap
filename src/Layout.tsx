import React from "react";

type Props = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="wrapper">
      {props.sidebar}
      <main className="main">{props.children}</main>
    </div>
  );
};

export default Layout;
