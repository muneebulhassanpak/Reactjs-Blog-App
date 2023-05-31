import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allRecipies: [],
};
const allAvailableRecipies = createSlice({
  name: "allRecipies",
  initialState,
  reducers: {
    updater(state, action) {
      state.allRecipies = action.payload;
    },
  },
});

export const allPostsFetcherAndSetter = () => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:3001/posts/all-posts", {
      id: "6473076018cbb62dc32eeec0",
    });
    dispatch(
      allAvailableRecipies.actions.updater(response.data.allPosts.allRecipies)
    );
  };
};
export const allAvailableRecipiesActions = allAvailableRecipies.actions;
export default allAvailableRecipies.reducer;
