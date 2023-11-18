import Logo from "../images/argentBankLogo.png";
import "../pages/Home.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice.js";

export default function NavBar() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  const onProfile = () => {
    navigate("/profile");
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank </h1>
      </a>
      <div>
        {user ? (
          <>
            <button
              className="btn main-nav__item edit-button"
              to="/user"
              onClick={onProfile}
            >
              {" "}
              Profile{" "}
            </button>
            <button className="btn main-nav__item edit-button" onClick={onLogout}>
              {" "}
              Logout{" "}
            </button>
          </>
        ) : (
          <a className="main-nav-item" href="./Login">
            <i className="fa fa-user-circle" />
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
}
