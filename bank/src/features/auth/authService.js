import axios from "axios"

/* const API_URL = "/api/users/" */

/* // Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
} */

// Login user

/* const userInput = {
    email: "tony@stark.com",
    password: "$2b$12$hubMO0Br9zs79hLsi1DiHuPwkfbUfsWkrB1LTFHrCWz741vh23jpC"
} */
/* const login = async (userData) => {
    const response = await axios.post("localhost:3001/api/v1/user/login", userData, {
    method: "POST",
  mode: "cors",
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({userInput})})
    
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
} */

const API_URL = "http://localhost:3001/api/v1/user/";

const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData);
  
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  };

  // const GEt(post) et EDIT(put) profile
  // faire un fichier pour

// Logout user
const logout = () => {
    localStorage.removeItem("user")
}

const authService = {
    /* register, */
    logout,
    login,
    // profile
}

export default authService