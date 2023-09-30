import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FormBlockProps } from "../../src/components/Block/FormBlock/FormBlock.props";

export interface FavouriteState {
  agents: Record<string, unknown>[];
}

const initialFavouriteState: FavouriteState = {
  agents: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: initialFavouriteState,
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

const userState: { user: Record<string, unknown> } = { user: {} };

export const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

const initialAddNewChampState: { champ: FormBlockProps[] } = {
  champ: [],
};

export const addNewChampSlice = createSlice({
  name: "addNewChamp",
  initialState: initialAddNewChampState,
  reducers: {
    addChamp: (state, action) => {
      state.champ = [...state.champ, action.payload];
    },
  },
});

export const { addChamp } = addNewChampSlice.actions;

export const store = configureStore({
  reducer: {
    favourite: favouriteSlice.reducer,
    user: userSlice.reducer,
    champ: addNewChampSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
