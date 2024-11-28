import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="font-sans">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
