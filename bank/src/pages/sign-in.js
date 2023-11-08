import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import {login, reset} from "../features/auth/authSlice"
import "../pages/Home.css";
import { loginUser } from "../store/userSlice";


export default function Login () {

// states
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// Redux state

const {loading, error} = useSelector((state) => state.user);
const dispatch = useDispatch();
const navigate = useNavigate;

const handleLoginEvent = (e) => {
  e.preventDefault();
  let userCredentials = {
    email, password
  }
  dispatch(loginUser(userCredentials)).then((result) => {
    if(result.payload) {
      setEmail("");
      setPassword("");
      navigate("/");
    }
  })
}


  // const [formData, setFormData] = useState ( {
  //   email: "",
  //   password: "",
  // })

  // const {email, password} = formData

  // const navigate = useNavigate()
  //   const dispatch = useDispatch()

  //   const {user, isLoading, isError, isSuccess, message} = 
  //   useSelector((state) => state.auth)

  //   useEffect(() => {
  //     if(isSuccess || user) {
  //         navigate("/")
  //     }
  //     dispatch(reset())
      
  // }, [user, isLoading, isError, isSuccess, message, navigate, dispatch])

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }))
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault()

  //   const userData = {
  //     email,
  //     password
  //   }

  //   dispatch(login(userData))
  // }


  
  return (
    <body>
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form id="form" name="form" method="get" 
          onSubmit={handleLoginEvent}>
            <div class="input-wrapper">
              <label for="username"> E-mail </label>
              <input type="email" id="username" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me"> Remember me</label>
            </div>

            {/* <a href="./user.html" class="sign-in-button">Sign In</a> */}

            <button id="button" class="sign-in-button" type="submit" value="connexion">
              {loading ? "Loading" : "Sign In"}
            </button>
            {error && (
              <div role="alert"> {error} </div>
            )}
          </form>
        </section>
      </main>
    </body>
    
  );
}