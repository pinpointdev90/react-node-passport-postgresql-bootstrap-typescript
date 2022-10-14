import axios from "axios";
import { useEffect, useState } from "react";
import { IUserLogged } from "../../interfaces/userLogged";
import { VITE_BACKEND } from "../../services/api";

export default function useGetUserLogged() {
  const [userLogged, setUserLogged] = useState<IUserLogged>({
    email: "",
    username: "",
    logged: false,
  });

  const getUser = async () => {
    try {
      const response = await axios.get(`${VITE_BACKEND}/auth/get-user`, {
        withCredentials: true,
      });

      if (response.data.user.provider === "google")
        setUserLogged({
          email: response.data.user.emails[0].value,
          username: response.data.user.displayName,
          logged: true,
        });

      if (response.data.user.provider === "discord")
        setUserLogged({
          email: response.data.user.email,
          username: response.data.user.username,
          logged: true,
        });

      if (response.data.user.provider === "github")
        setUserLogged({
          email: response.data.user.emails[0].value,
          username: response.data.user.username,
          logged: true,
        });
    } catch (error) {
      setUserLogged({
        email: "",
        username: "",
        logged: false,
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return {
    userLogged,
  };
}
