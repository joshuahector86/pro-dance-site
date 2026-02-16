import React, { type ReactNode } from "react";
import Topbar from "./topbar";
import Footer from "./footer";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex">
        <Topbar />
      </div>
      <div className="flex-1 mt-5">{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
