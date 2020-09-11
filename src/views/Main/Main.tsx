import React, { FunctionComponent } from "react";

import Machine from "~/sections/Machine";
import MainLayout from "~/layouts";

import "./Main.scss";

const Main: FunctionComponent = () => {
  const className = "main";

  return (
    <div className={`${className}`}>
      <MainLayout>
        <Machine/>
      </MainLayout>
    </div>
  );
};


export default Main;
