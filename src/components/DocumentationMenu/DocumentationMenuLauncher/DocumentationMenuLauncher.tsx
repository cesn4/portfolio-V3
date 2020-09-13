import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import "./DocumentationMenuLauncher.scss";
import { useSelector } from "react-redux";
import { ApplicationState } from "~/store/types/applicationState";

const DocumentationMenuLauncher: FunctionComponent<DocumentationMenuLauncherProps> = ({
  openHandler,
  menuState,
  main = false,
}: DocumentationMenuLauncherProps) => {
  const className = "documentation-menu-launcher";
  const animationState = useSelector(
    (state: ApplicationState) => state.animationState
  );

  const active = {
    visible: { opacity: 1, transition: { duration: 0.3, delay: 0.1 } },
    hidden: { opacity: 0, transition: { duration: 0.3, delay: 0.1 } },
  };
  const inactive = {
    opacity: 1,
  };

  return (
    <motion.div
      initial={animationState ? active.hidden : inactive}
      animate={animationState ? active.visible : inactive}
      exit={animationState ? active.hidden : inactive}
      className={classNames(`${className}`, {
        "-active": menuState,
        "-main": main,
      })}
      onMouseEnter={openHandler}
      onClick={openHandler}
    >
      <span className={`${className}__text`}>Documentation</span>
    </motion.div>
  );
};

interface DocumentationMenuLauncherProps {
  openHandler: VoidFunction;
  menuState: boolean;
  main?: boolean;
}

export default DocumentationMenuLauncher;
