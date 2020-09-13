import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import "./CommandMenuLauncher.scss";
import { useSelector } from "react-redux";
import { ApplicationState } from "~/store/types/applicationState";

const CommandMenuLauncher: FunctionComponent<CommandMenuLauncherProps> = ({
  openHandler,
  menuState,
  main = false,
}: CommandMenuLauncherProps) => {
  const className = "command-menu-launcher";
  const animationState = useSelector(
    (state: ApplicationState) => state.animationState
  );

  const active = {
    visible: { opacity: 1, transition: { duration: 0.3, delay: 0.2 } },
    hidden: { opacity: 0, transition: { duration: 0.3, delay: 0.2 } },
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
      <span className={`${className}__text`}>Commands</span>
    </motion.div>
  );
};

interface CommandMenuLauncherProps {
  openHandler: VoidFunction;
  menuState: boolean;
  main?: boolean;
}

export default CommandMenuLauncher;
