import "../index.css";
import Account from "../components/Account";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../features/auth/userSlice";

export default function Profile() {
  function toggleModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.toggle("active");
  }

  const [userName, setUsername] = useState("");
  const dispatch = useDispatch();

  const { firstName, lastName } = useSelector((state) => state.user);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ userName }));
    setUsername("");
  };

  return (
    <body>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName} !
          </h1>
          <button
            className="edit-button modal-btn modal-trigger"
            onClick={toggleModal}
          >
            {" "}
            Edit Name{" "}
          </button>
          <div className="modal-container">
            <div className="modal">
              <form onSubmit={onSubmit}>
                <div className="input-wrapper">
                  <label htmlFor="userName">User name:</label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="firstName">First name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={firstName}
                    disabled
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="lastName">Last name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={lastName}
                    disabled
                  />
                </div>
                <div className="edit-button__wrapper">
                  <button className="edit-button__wrapper--save button edit-button">
                    Save
                  </button>
                  <div>
                    <button
                      onClick={toggleModal}
                      className="edit-button__wrapper--cancel button edit-button"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account></Account>
        <Account></Account>
        <Account></Account>
      </main>
    </body>
  );
}
