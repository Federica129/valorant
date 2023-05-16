import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface FavouriteState {
  agents: Record<string, unknown>[];
}

const initialState: FavouriteState = {
  agents: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    add: (state, action) => {
      state.agents = [...state.agents, action.payload];
    },
    remove: (state, action) => {
      state.agents = state.agents.filter((el) => el === action.payload);
    },
  },
});

export const { add, remove } = favouriteSlice.actions;

export default favouriteSlice.reducer;

export const store = configureStore({
  reducer: {
    favourite: favouriteSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
