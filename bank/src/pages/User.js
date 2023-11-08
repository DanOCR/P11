import "../pages/Home.css";
import Account from "../components/Account";

export default function User() 

{
  

  function toggleModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.toggle("active")
  }



  return (
    <body>
      <main class="main bg-dark">
        <div class="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button class="edit-button modal-btn modal-trigger" onClick={toggleModal}> Edit Name </button>
          <div class="modal-container" >
            {/* <div class="overlay modal-trigger"></div> */}
            <div class="modal">
            
            
            <form id="form" action="/user" method="GET">
            
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div class="input-wrapper">
              <label for="password">First name</label>
              <input type="password" id="password" />
            </div>
            <div class="input-wrapper">
              <label for="password">Last name</label>
              <input type="password" id="mdp" />
            </div>
      
  
            
          
              
              <div class="div-buttons">
              <button class="edit-button" onClick={toggleModal}> Save </button>
              <button class="edit-button close-modal modal-trigger" onClick={toggleModal}> Cancel </button>
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
  ;
}
