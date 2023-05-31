import { configureStore, createSlice } from "@reduxjs/toolkit";
import recipiesReducer from "./allRecipies";
import { allPostsFetcherAndSetter } from "./allRecipies";
import axios from "axios";
const initialState = {
  isLoggedIn: false,
};
const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
    },
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
});
export const storeFetcher = (id) => {
  return async (dispatch) => {
    if (id) {
      try {
        const response = await axios.post(
          "http://localhost:3001/user/getStore",
          {
            id,
          }
        );
        if (response.data.loginStatus == true) {
          dispatch(loginSlice.actions.login());
        } else {
          dispatch(loginSlice.actions.logout());
        }
      } catch (err) {
        console.log(
          "Error in sending backend userid, ERROR file:clientside store.js "
        );
        console.log(err);
      }
    } else {
      dispatch(loginSlice.actions.logout());
    }
  };
};

export const asyncLogoutHandler = (id) => {
  return async (dispatch) => {
    if (id) {
      try {
        const response = await axios.post("http://localhost:3001/auth/logout", {
          id,
        });
        if (response.data.loginInfo == "inverted") {
          dispatch(loginSlice.actions.logout());
        } else {
          alert("From async logout of store.js of client side");
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      // window.location.pathname("/");
      console.log("Nothing to do");
    }
  };
};

export const asyncLoginHandler = (username, password) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:3001/auth/login", {
      username,
      password,
    });
    if (res.data.loggedIn === true) {
      localStorage.setItem("userID", res.data.userID);
      dispatch(loginSlice.actions.login());
    } else {
      console.log(
        "i am from async login function in client side store.js file"
      );
    }
    // if(response.)
    // setCookie("userToken", res.data.token);
    // navigate("/");
  };
};

export const addRecipie = (id, title, imgUrl, duration, description) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/user/add/recipie",
      {
        id,
        title,
        imgUrl,
        duration,
        description,
        likes: 0,
      }
    );
    if (response.data.message == "added") {
      console.log(response);
      alert("Successfully added new recipie");
    }
  };
};
export const increaseLike = (userid, recipieid) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/user/add/updatelikes",
      {
        userid,
        recipieid,
      }
    );
    dispatch(allPostsFetcherAndSetter());
  };
};

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    recipies: recipiesReducer,
  },
});
export const loginActions = loginSlice.actions;

export default store;
