import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Link, useParams } from "react-router-dom";

import {
  SetAiCommand,
  SetAnimationState,
  SetProjectWindow,
} from "~/store/actions";
import { AiCommandTypes } from "~/store/types/commandTypes";

import "./CommandMenuInterface.scss";

const CommandMenuInterface: FunctionComponent<CommandMenuInterfaceProps> = ({
  menuState,
  closeHandler,
}: CommandMenuInterfaceProps) => {
  const className = "command-menu-interface";
  const { slug } = useParams();

  const clickHandler: void | Function = (arg: AiCommandTypes) => {
    if (slug) {
      window.innerWidth < 800 && SetAnimationState(true);
      SetAiCommand(arg);
      SetProjectWindow(false);
      closeHandler();
    } else {
      SetAiCommand(arg);
      SetProjectWindow(false);
      closeHandler();
    }
  };

  const projectsClickHandler: Function = (arg: AiCommandTypes) => {
    SetAiCommand(arg);
    closeHandler();
    window.innerWidth < 800 && SetAnimationState(true);
  };

  const secondaryClickHandler: VoidFunction = () => {
    SetProjectWindow(true);
    closeHandler();
  };

  return (
    <div
      onMouseLeave={closeHandler}
      className={classNames(`${className}`, {
        "-active": menuState,
      })}
    >
      <div className={`${className}__content`}>
        <span className={`${className}__label`}>Existential</span>
        <Link
          to="/"
          className={`${className}__command`}
          onClick={(): void => {
            clickHandler("Who are you?");
          }}
        >
          Who are you?
        </Link>
        <Link
          to="/"
          className={`${className}__command`}
          onClick={(): void => {
            clickHandler("What's your purpose?");
          }}
        >
          What's your purpose?
        </Link>
        <Link
          to="/"
          className={`${className}__command`}
          onClick={(): void => {
            clickHandler("Who created you?");
          }}
        >
          Who created you?
        </Link>
        <span className={`${className}__label`}>Portfolio</span>
        <Link
          to="/"
          className={`${className}__command`}
          onClick={(): void => {
            clickHandler("Tell me about your creators experiances.");
          }}
        >
          Tell me about your creators experiances.
        </Link>
        {slug ? (
          <div
            className={`${className}__command`}
            onClick={(): void => {
              secondaryClickHandler();
            }}
          >
            Show me his projects.
          </div>
        ) : (
          <Link
            to="/"
            className={`${className}__command`}
            onClick={(): void => {
              projectsClickHandler("Show me his projects.");
            }}
          >
            Show me his projects.
          </Link>
        )}
        <Link
          to="/"
          className={`${className}__command`}
          onClick={(): void => {
            clickHandler("What kind of skills does he posses?");
          }}
        >
          What kind of skills does he posses?
        </Link>
        <span className={`${className}__label`}>Games</span>
        <Link
          to="/"
          className={`${className}__command`}
          onClick={(): void => {
            clickHandler("How about a match of chess?");
          }}
        >
          How about match of chess?
        </Link>
        <span className={`${className}__label`}>Contact</span>
        <Link
          to="/"
          className={`${className}__command`}
          onClick={(): void => {
            clickHandler("I would like to contact your creator.");
          }}
        >
          I would like to contact your creator.
        </Link>
      </div>
    </div>
  );
};

interface CommandMenuInterfaceProps {
  menuState: boolean;
  closeHandler: VoidFunction;
}

export default CommandMenuInterface;
