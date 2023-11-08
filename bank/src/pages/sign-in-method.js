
const login = document.querySelector("#button");

login.addEventListener("onClick", async function (event) {
  event.preventDefault();

const userInput =  {
  username: document.getElementById("username").value,
  password: document.getElementById("password").value,

};

let response = await fetch("http://localhost:3001/api/v1/user/login", {
  method: "POST",
  headers: { "Content-type": "application/json"},
  body: JSON.stringify(userInput),
});

let result = await response.json();
let token = result.token;

if (response.status === "200") {
  localStorage.setItem("token", token);
  console.log("200");
  
}

else if (response.status === "401") {
  console.log("error 401");
  return alert("l'identifiant et/ou le mot de passe ne correspondent pas");

} else if (response.status === "404") {
  console.log("error 404");
  return alert("l'identifiant et/ou le mot de passe ne correspondent pas");
}
  
})
  .then((response) => response.json())
  .then((data) => 
  localStorage.setItem("token", data.body.token));