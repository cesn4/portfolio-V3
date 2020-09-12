import React, { FunctionComponent, ReactNode } from "react";

import StatusBar from "~/components/StatusBar";
import CommandMenu from "~/components/CommandMenu";
import DocumentationMenu from "~/components/DocumentationMenu";
import ProjectMenu from "~/components/ProjectMenu";

import "./MainLayout.scss";

const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
  main = false,
}: MainLayoutProps) => {
  const className = "main-layout";
  return (
    <div className={className}>
      <StatusBar />
      <CommandMenu main={main}/>
      <DocumentationMenu main={main}/>
      <ProjectMenu />
      {children}
    </div>
  );
};

interface MainLayoutProps {
  children: ReactNode;
  main?: boolean;
}

export default MainLayout;
