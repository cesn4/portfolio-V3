import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Link, useParams } from "react-router-dom";

import { SetAiCommand, SetProjectWindow } from "~/store/actions";
import { AiCommandTypes } from "~/store/types/commandTypes";
import { useSelector } from "react-redux";
import { ApplicationState } from "~/store/types/applicationState";

import "./CommandMenuInterface.scss";

const CommandMenuInterface: FunctionComponent<CommandMenuInterfaceProps> = ({
  menuState,
  closeHandler,
}: CommandMenuInterfaceProps) => {
  const className = "command-menu-interface";
  const aiState = useSelector((state: ApplicationState) => state.aiState);
  const { slug } = useParams();

  const clickHandler: void | Function = (arg: AiCommandTypes) => {
    if (aiState) {
      SetAiCommand(arg);
      SetProjectWindow(false);
      closeHandler();
    } else {
      alert("AI must be turned on before passing commands.");
      closeHandler();
      SetProjectWindow(false);
    }
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
            clickHandler("Why do you exist?");
          }}
        >
          Why do you exist?
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
            clickHandler("Tell me about your experiances.");
          }}
        >
          Tell me about your experiances.
        </Link>
        {slug ? (
          <div
            className={`${className}__command`}
            onClick={(): void => {
              secondaryClickHandler();
            }}
          >
            Show me your works.
          </div>
        ) : (
          <Link
            to="/"
            className={`${className}__command`}
            onClick={(): void => {
              clickHandler("Show me your works.");
            }}
          >
            Show me your works.
          </Link>
        )}
        <Link
          to="/"
          className={`${className}__command`}
          onClick={(): void => {
            clickHandler("What kind of skills do you posses?");
          }}
        >
          What kind of skills do you posses?.
        </Link>
        <span className={`${className}__label`}>Games</span>
        <Link
          to="/"
          className={`${className}__command`}
          onClick={(): void => {
            clickHandler("How about match of chess?");
          }}
        >
          How about match of chess?
        </Link>
        <Link
          to="/"
          className={`${className}__command`}
          onClick={(): void => {
            clickHandler("Contact");
          }}
        >
          Contact
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
