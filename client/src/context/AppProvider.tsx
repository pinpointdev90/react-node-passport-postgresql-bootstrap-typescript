import { ReactElement, useState } from "react";
import useGetUserLogged from "../hooks/auth/useGetUserLogged";
import { IUserLogged } from "../interfaces/userLogged";
import AppContext from "./AppContext";

interface Props {
  children: ReactElement;
}

function AppProvider({ children }: Props) {
  const { userLogged } = useGetUserLogged();

  return (
    <AppContext.Provider value={{ userLogged }}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
