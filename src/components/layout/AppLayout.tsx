import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-gray-900">
      <Sidebar />
      <main className="h-full flex-1 overflow-hidden dark:bg-gray-900 dark:text-white">{children}</main>
    </div>
  );
};

export default AppLayout;
