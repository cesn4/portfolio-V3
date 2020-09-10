import React, { FunctionComponent, ReactChild, Fragment } from "react";
import classNames from "classnames";
import { connect } from "react-redux";

import { SetAiCommand } from "~/store/actions";
import { AiCommandTypes } from "~/store/types/commandTypes";
import { ApplicationState } from "~/store/types/applicationState";
import Icon from "~/components/Icons";

import "./MenuPopMobile.scss";

const MenuPopMobile: FunctionComponent<MenuPopMobileProps> = ({
  label,
  text,
  visible = false,
  menuListContent,
  aiState,
  commands,
  text2,
  onClick,
  mobileClose,
}: MenuPopMobileProps) => {
  const className = "menu-pop-mobile";

  if (menuListContent === undefined) {
    return (
        <div
          className={classNames(`${className}`, {
            "-visible": visible,
          })}
        >
          <div className={`${className}__box`}>
            <div className={`${className}__label-box`}>
              <span className={`${className}__label`}>{label}</span>
              <button onClick={onClick} className={`${className}__button`}>
                <Icon name={"close"} size={32} color="#000000" />
              </button>
            </div>
            <div className={`${className}__text-box`}>
              {text && <p className={`${className}__text`}>{text}</p>}
              <span className={`${className}__text-command`}>{commands}</span>
              <span className={`${className}__text-2`}>{text2}</span>
            </div>
          </div>
        </div>
    );
  }
  const renderMenuList: Array<ReactChild> = menuListContent.map(
    ({ title, command, command2, command3 }: MenuListContent, index) => {
      const clickHandler: void | Function = (arg: AiCommandTypes) => {
        if (aiState) {
          SetAiCommand(arg);
        } else {
          alert("AI must be turned on before passing commands.");
        }
      };
      return (
        <Fragment key={index.toString()}>
          <span className={`${className}__list-title`}>{title}</span>
          <button
            className={`${className}__command`}
            onClick={(): void => {clickHandler(command);
              mobileClose();
              }}
          >
            {command}
          </button>
          {!!command2 && (
            <button
              className={`${className}__command`}
              onClick={(): void => {clickHandler(command2);
                mobileClose();
                }}
            >
              {command2}
            </button>
          )}
          {!!command3 && (
            <button
              className={`${className}__command`}
              onClick={(): void => {clickHandler(command3);
              mobileClose();
              }}
            >
              {command3}
            </button>
          )}
        </Fragment>
      );
    }
  );
  return (
      <div
        className={classNames(`${className}`, {
          "-visible": visible,
        })}
      >
        <div className={`${className}__box`}>
          <div className={`${className}__label-box`}>
            <span className={`${className}__label`}>{label}</span>
            <button onClick={onClick} className={`${className}__button`}>
              <Icon name={"close"} size={32} color="#000000" />
            </button>
          </div>
          {text && <p className={`${className}__text`}>{text}</p>}
          <div className={`${className}__list-box`}>{renderMenuList}</div>
        </div>
      </div>
  );
};

interface MenuPopMobileProps {
  visible?: boolean;
  label: string;
  text?: string | boolean;
  menuListContent?: Array<MenuListContent> | undefined;
  aiState: boolean;
  commands?: string;
  text2?: string;
  onClick: VoidFunction;
  mobileClose: VoidFunction;
}

export interface MenuListContent {
  title: string;
  command: AiCommandTypes;
  command2?: AiCommandTypes;
  command3?: AiCommandTypes;
}

const mapStateToProps = (state: ApplicationState): AiStateProp => {
  return {
    aiState: state.aiState,
  };
};

interface AiStateProp {
  aiState: boolean;
}

export default connect(mapStateToProps)(MenuPopMobile);
