import "../pages/Home.css";
import Account from "../components/Account";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function User() 

{


  const  username  = useSelector((state) => state.user);
  const  firstname  = useSelector((state) => state.user);
  const  name  = useSelector((state) => state.user);

  
    // dispatch(editPost(postData))

  function toggleModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.toggle("active")
  }



  // return (
  //   <body>
  //     <main className="main bg-dark">
  //       <div className="header">
  //         <h1>
  //           {"Welcome back " + username} 
  //           <br />
  //         </h1>
  //         <button className="edit-button modal-btn modal-trigger" onClick={toggleModal}> Edit Name </button>
  //         <div className="modal-container" >
  //           {/* <div class="overlay modal-trigger"></div> */}
  //           <div className="modal">
            
            
  //           <form id="form" action="/user" method="GET" >
            
  //           <div className="input-wrapper">
  //             <label htmlFor="username">Username</label>
  //             <input type="text" id="username" placeholder="Username"/>
  //           </div>

  //           <div className="input-wrapper">
  //             <label htmlFor="password">First name</label>
  //             <input type="password" id="password" placeholder="First name"/>
  //           </div>
  //           <div className="input-wrapper">
  //             <label htmlFor="password">Last name</label>
  //             <input type="password" id="mdp" placeholder="Last name"/>
  //           </div>
  //           <div className="div-buttons">
  //             <button className="edit-button" onClick={toggleModal}> Save </button>
  //             <button className="edit-button close-modal modal-trigger" onClick={toggleModal}> Cancel </button>
  //             </div>
  //             </form>
  //           </div> 
  //         </div>
  //       </div>
  //       <h2 className="sr-only">Accounts</h2>
  //       <Account></Account>
  //       <Account></Account>
  //       <Account></Account>

  //     </main>
  //   </body>
  // )

  // const uservalue = "username";
  // const [editContent, setEditContent] = useState(uservalue)
  // const dispatch = useDispatch();
  // const handleEdit = (e) => {
  //   e.preventDefault();

  //   const postData =  {
  //     firstName : "Tony",
  //     lastName : "Stark",
  //     userName : editContent
  //   };

  //   dispatch(editPost(postData));

  // }
  return (
    <body>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            {"Welcome back " + username} 
            <br />
          </h1>
          <button className="edit-button modal-btn modal-trigger" onClick={toggleModal}> Edit Name </button>
          <div className="modal-container" >
            {/* <div class="overlay modal-trigger"></div> */}
            <div className="modal">
            
            
            <form id="form" action="/user" method="GET" 
            // onSubmit={e => handleEdit(e)}
            >
            
            <div className="input-wrapper">
              <label htmlFor="username" autoFocus={true} 
              // onChange={e => setEditContent(e.target.value)}
              > Username</label>
              <input type="text" id="username" placeholder="Username"/>
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">First name</label>
              <input type="password" id="password" placeholder="First name"/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Last name</label>
              <input type="password" id="mdp" placeholder="Last name"/>
            </div>
            <div className="div-buttons">
              <button className="edit-button" onClick={toggleModal}> Save </button>
              <button className="edit-button close-modal modal-trigger" onClick={toggleModal}> Cancel </button>
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
  )
  
}
