import Logo from "../images/argentBankLogo.png";
import "../pages/Home.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice.js";
import { profile } from "../features/auth/userSlice.js";

export default function NavBar() {
   const  user  = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  const onProfile = () => {
    navigate("/user");
    dispatch(profile());
  } 

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank </h1>
      </a>
      <div>
      {user ?
        <>
        <button className="btn"  onClick={onProfile} > Profile </button>
        <button className="btn"  onClick={onLogout} > Logout </button>
        </>
       :
        <a className="main-nav-item" href="./sign-it">
          <i className="fa fa-user-circle"></i>
          Sign In
          </a> 
      }
      </div>
    </nav>
  );
}