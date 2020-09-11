import React, { FunctionComponent, Fragment, ReactChild } from "react";
import classNames from "classnames";

import { SetAiCommand, SetProjectWindow } from "~/store/actions";
import { AiCommandTypes } from "~/store/types/commandTypes";
import { useSelector } from "react-redux";
import { ApplicationState } from "~/store/types/applicationState";
import { CommandListContent, commandList } from "~/mocks/commands";

import "./CommandMenuInterface.scss";
import { Link } from "react-router-dom";

const CommandMenuInterface: FunctionComponent<CommandMenuInterfaceProps> = ({
  menuState,
  closeHandler,
}: CommandMenuInterfaceProps) => {
  const className = "command-menu-interface";
  const aiState = useSelector((state: ApplicationState) => state.aiState);

  const renderCommandList: Array<ReactChild> = commandList.map(
    ({ title, command, command2, command3 }: CommandListContent, index) => {
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
      return (
        <Fragment key={index.toString()}>
          <span className={`${className}__label`}>{title}</span>
          <Link
            to="/"
            className={`${className}__command`}
            onClick={(): void => {
              clickHandler(command);
            }}
          >
            {command}
          </Link>
          {!!command2 && (
            <Link
              to="/"
              className={`${className}__command`}
              onClick={(): void => {
                clickHandler(command2);
              }}
            >
              {command2}
            </Link>
          )}
          {!!command3 && (
            <Link
              to="/"
              className={`${className}__command`}
              onClick={(): void => {
                clickHandler(command3);
              }}
            >
              {command3}
            </Link>
          )}
        </Fragment>
      );
    }
  );

  return (
    <div
      onMouseLeave={closeHandler}
      className={classNames(`${className}`, {
        "-active": menuState,
      })}
    >
      <div className={`${className}__content`}>{renderCommandList}</div>
    </div>
  );
};

interface CommandMenuInterfaceProps {
  menuState: boolean;
  closeHandler: VoidFunction;
}

export default CommandMenuInterface;
