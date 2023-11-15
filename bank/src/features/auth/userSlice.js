import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import userService from "./userService"

// Get username from localStorage

const userData = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : "";
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

export const profile = createAsyncThunk("user/profile",
async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.body.token;
    console.log(thunkAPI.getState().auth.user)
    return await userService.profile(token);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

export const userSlice = createSlice( {
    name: "user",
    initialState,
    reducers: {
        reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ""
    }
    },
    extraReducers: (builder) => {
    builder
    .addCase(profile.pending, (state) => {
        state.isLoading = true
    })
    .addCase(profile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.userName = action.payload
    })
    .addCase(profile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.userName = null
    })
    },
})

export const {reset} = userSlice.actions
export default userSlice.reducer