import "../pages/Home.css";
import Chat from "../images/icon-chat.png";
import Secure from "../images/icon-security.png";
import Money from "../images/icon-money.png";
import Feature from "../components/Feature";



export default function Home() {

  return (
    <body>
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className ="sr-only">Features</h2>
          <Feature src={Chat} />
          <Feature src={Secure} />
          <Feature src={Money} />
        </section>
      </main>
    </body>
  );
}
