import Logo from "../images/argentBankLogo.png";
import "../pages/Home.js";
import {useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {logout, reset} from "../features/auth/authSlice.js"

export default function NavBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  return (
    <nav class="main-nav">
      <a class="main-nav-logo" href="/">
        <img
          class="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        {/* {user ? ( */}
          {/* <button className="btn" onClick={onLogout}> Logout </button> */}
            {/* ) : ( */}
        <>
        <a class="main-nav-item" href="./sign-it">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
        </>
        {/* )} */}
        
      </div>
    </nav>
  );
}