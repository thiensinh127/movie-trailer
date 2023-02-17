import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    usersLoading(state) {
      // Use a "state machine" approach for loading state instead of booleans
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    usersReceived(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.user = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { usersLoading, usersReceived } = userSlice.actions;

export default userSlice.reducer;
