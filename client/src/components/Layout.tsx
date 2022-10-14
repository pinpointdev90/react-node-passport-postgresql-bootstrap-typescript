import { ReactElement } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactElement;
}

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />

      <div className="container p-4">{children}</div>
    </>
  );
}

export default Layout;
