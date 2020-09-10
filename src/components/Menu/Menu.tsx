import React, { FunctionComponent, useState, Fragment, useEffect } from "react";

import MenuLauncher from "./MenuLauncher";
import MenuPop, { MenuListContent } from "./MenuPop/MenuPop";
import MenuPopMobile from "./MenuPopMobile";

const Menu: FunctionComponent<MenuProps> = ({
  label,
  text,
  menuListContent,
  commands,
  text2,
}: MenuProps) => {
  const [menuState, setMenuState] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      if (window.innerWidth <= 1200) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
  }, [])

  const menuStateToggle: VoidFunction = () => {
    setMenuState(!menuState);
  };

  const mobileCLoseHandler = () => {
    if (isMobile) {
      return setMenuState(false);
    } else {
      return () => {};
    }
  };

  return (
    <Fragment>
      <MenuLauncher
        onClick={menuStateToggle}
        active={menuState}
        label={label}
      />
      {isMobile ? (
        <MenuPopMobile
          mobileClose={mobileCLoseHandler}
          label={label}
          visible={menuState}
          text={text}
          menuListContent={menuListContent}
          commands={commands}
          text2={text2}
          onClick={menuStateToggle}
        />
      ) : (
        <MenuPop
          label={label}
          visible={menuState}
          text={text}
          menuListContent={menuListContent}
          commands={commands}
          text2={text2}
          onClick={menuStateToggle}
        />
      )}
    </Fragment>
  );
};

interface MenuProps {
  label: string;
  text?: string | boolean;
  menuListContent?: Array<MenuListContent>;
  commands?: string;
  text2?: string;
}

export default Menu;
