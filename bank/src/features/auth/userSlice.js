import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

// Get username from localStorage

const userData = JSON.parse(localStorage.getItem("userProfile"))
  ? JSON.parse(localStorage.getItem("userProfile"))
  : "";
const firstName = userData.firstName;
const lastName = userData.lastName;
const userName = userData.userName;

const initialState = {
  firstName: firstName ? firstName : "",
  lastName: lastName ? lastName : "",
  userName: userName ? userName : "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const profile = createAsyncThunk(
  "user/profile",
  async (user, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.body.token;
      console.log(thunkAPI.getState().auth.user);
      return await userService.profile(token, user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update user profile

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.body.token;
      return await userService.updateProfile(data, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userName = action.payload.body.userName;
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
      })
      .addCase(profile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.userName = null;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userName = action.payload.body.userName;
        state.message = action.payload.message;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
