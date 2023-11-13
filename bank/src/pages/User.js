import "../pages/Home.css";
import Account from "../components/Account";
import { useSelector } from "react-redux/es/hooks/useSelector";


export default function User() 

{


  const  user  = useSelector((state) => state.auth.user); 

  function toggleModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.toggle("active")
  }



  return (
    <body>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            {"Welcome back" + user} 
            <br />
          </h1>
          <button className="edit-button modal-btn modal-trigger" onClick={toggleModal}> Edit Name </button>
          <div className="modal-container" >
            {/* <div class="overlay modal-trigger"></div> */}
            <div className="modal">
            
            
            <form id="form" action="/user" method="GET">
            
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label for="password">First name</label>
              <input type="password" id="password" />
            </div>
            <div className="input-wrapper">
              <label for="password">Last name</label>
              <input type="password" id="mdp" />
            </div>
      
  
            
          
              
              <div className="div-buttons">
              <button className="edit-button" onClick={toggleModal}> Save </button>
              <button className="edit-button close-modal modal-trigger" onClick={toggleModal}> Cancel </button>
              </div>
              </form>
            </div> 
          </div>
        </div>
        <h2 class="sr-only">Accounts</h2>
        <Account></Account>
        <Account></Account>
        <Account></Account>

      </main>
    </body>
    
  )
  
}
