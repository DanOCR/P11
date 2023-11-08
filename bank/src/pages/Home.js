import "../pages/Home.css";
import Chat from "../images/icon-chat.png";
import Secure from "../images/icon-security.png";
import Money from "../images/icon-money.png";
import Feature from "../components/Feature";
import { useState } from "react";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }
  else {
    user = null;
  }
  return user;
}


export default function Home() {

  const [user, setUser] = useState(getUser());

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  }
  return (
    <>
    {user ? (
      <>
      <h4> Hello, {user.password} </h4>
      <button onClick={handleLogout} ></button>
      </>
    ) :
    <body>
      <main>
        <div class="hero">
          <section class="hero-content">
            <h2 class="sr-only">Promoted Content</h2>
            <p class="subtitle">No fees.</p>
            <p class="subtitle">No minimum deposit.</p>
            <p class="subtitle">High interest rates.</p>
            <p class="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section class="features">
          <h2 class="sr-only">Features</h2>
          <Feature src={Chat} />
          <Feature src={Secure} />
          <Feature src={Money} />
        </section>
      </main>
    </body>
}
</>
    
  );
}
