import React, { Fragment } from "react";

import MainHeader from "../Header/MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      {props.children}
    </Fragment>
  );
};

export default Layout;
