import { createContext } from "react";
import { IUserLogged } from "../interfaces/userLogged";

interface IAppContext {
  userLogged: IUserLogged;
}

export const defaultState: IAppContext = {
  userLogged: {
    username: "",
    email: "",
    logged: false,
  },
};

const AppContext = createContext<IAppContext>(defaultState);

export default AppContext;
