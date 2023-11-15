import axios from "axios"

const API_URL = "http://localhost:3001/api/v1/user/profile";

const profile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, null, config);

  if (response.data.body) {
    localStorage.setItem("userProfile", JSON.stringify(response.data.body));
  }

  return response.data;
};

const userService = {
  profile
}

export default userService;