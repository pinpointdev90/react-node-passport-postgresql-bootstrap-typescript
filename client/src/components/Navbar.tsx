import { useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "@react-icons/all-files/ai/AiOutlineGoogle";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { RiDiscordFill } from "@react-icons/all-files/ri/RiDiscordFill";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { VITE_BACKEND } from "../services/api";

function Navbar() {
  const navigate = useNavigate();
  const { userLogged } = useContext(AppContext);

  const loginWithGoogle = () => {
    window.open(`${VITE_BACKEND}/auth/google`, "_self");
  };

  const loginWithGithub = () => {
    window.open(`${VITE_BACKEND}/auth/github`, "_self");
  };

  const loginWithDiscord = () => {
    window.open(`${VITE_BACKEND}/auth/discord`, "_self");
  };

  const logout = () => {
    window.open(`${VITE_BACKEND}/auth/logout`, "_self");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span
            className="navbar-brand"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Passport Example
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {userLogged.logged ? (
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={logout}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#loginmodal"
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="loginmodal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign In</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column align-items-center justify-content-center">
              <button
                className="google-button btn btn-primary w-100 d-flex flex-row align-items-center justify-content-center"
                style={{ fontSize: "1rem" }}
                onClick={loginWithGoogle}
              >
                <AiOutlineGoogle className="mx-2" />
                Sign in with Google
              </button>
              <button
                className="github-button btn btn-primary w-100 d-flex flex-row align-items-center justify-content-center my-2"
                style={{ fontSize: "1rem" }}
                onClick={loginWithGithub}
              >
                <AiFillGithub className="mx-2" /> Sign in with Github
              </button>
              <button
                className="discord-button btn btn-primary w-100 d-flex flex-row align-items-center justify-content-center"
                style={{ fontSize: "1rem" }}
                onClick={loginWithDiscord}
              >
                <RiDiscordFill className="mx-2" /> Sign in with Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
