import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/profile";

const profile = async (token, user) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  if (user) {
    const response = await axios.put(API_URL, user, config);
    if (response.data.body) {
      localStorage.setItem("userProfile", JSON.stringify(response.data.body));
    }
    return response.data;
  } else {
    const response = await axios.post(API_URL, null, config);
    if (response.data.body) {
      localStorage.setItem("userProfile", JSON.stringify(response.data.body));
    }
    return response.data;
  }
};

// Update user profile
const updateProfile = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL, data, config);

  if (response.data) {
    localStorage.setItem("userProfile", JSON.stringify(response.data.body));
  }

  return response.data;
};

const userService = {
  profile,
  updateProfile,
};

export default userService;
