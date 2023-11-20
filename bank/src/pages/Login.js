import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import "../index.css";
import { profile } from "../features/auth/userSlice";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [remember, setRemember] = useState(false);

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const customId = "custom-id-yes";

    if (isError) {
      toast.error(message);
      const input = document.getElementById("form-email");
      input.setCustomValidity("Incorrect email or password");
      input.reportValidity();
    }

    if (isSuccess || user) {
      toast.success(message, {
        toastId: customId,
      });
      dispatch(profile());
      navigate("/profile");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <body>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={onSubmit} noValidate>
            <div className="input-wrapper">
              <input
                type="email"
                id="form-email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              <label htmlFor="form-email">Email</label>
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                id="form-password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
              <label htmlFor="form-password">Password</label>
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="form-checkbox"
                name="rememberMe"
                onChange={() => setRemember(!remember)}
                checked={remember}
              />
              <label htmlFor="form-checkbox">Remember me</label>
            </div>
            <button className="sign-in-button button">
              {" "}
              {isLoading ? "Loading" : "Sign In"}{" "}
            </button>
          </form>

          {/* <form onSubmit={onSubmit}>
            <div className="input-wrapper">
              <input
                type="email"
                id="form-email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              <label htmlFor="form-email">Email</label>
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                id="form-password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
              <label htmlFor="form-password">Password</label>
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="form-checkbox"
                name="rememberMe"
                onChange={() => setRemember(!remember)}
                checked={remember}
              />
              <label htmlFor="form-checkbox">Remember me</label>
            </div>
            <button className="sign-in-button button">
              {" "}
              {isLoading ? "Loading" : "Sign In"}{" "}
            </button>
          </form> */}
        </section>
      </main>
    </body>
  );
}
