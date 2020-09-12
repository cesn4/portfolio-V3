import React, { FunctionComponent } from "react";

import Machine from "~/sections/Machine";
import MainLayout from "~/layouts";
import { motion } from "framer-motion";

import "./Main.scss";

const Main: FunctionComponent = () => {
  const className = "main";

  return (
    <div className={`${className}`}>
      <MainLayout>
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{duration: 1 }}
          exit={{ opacity: 0}}
        >
          <Machine />
        </motion.div>
      </MainLayout>
    </div>
  );
};

export default Main;
