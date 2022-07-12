import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";
import favorites from "../components/layouts/favorites";

const initialState = {
  isLoading: false,
  error: null,
  dataLoaded: false,
  users: null,
  favorites: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetching(state) {
      state.isLoading = true;
    },
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.dataLoaded = true;
      state.users = action.payload;
    },
    fetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeFavoriteUser(state, action) {
      state.favorites = state.favorites.filter((u) => u.id !== action.payload);
    },
    getStatus(state, action) {
      if (state.users.users) {
        localStorage.setItem("favorites", state.users.users);
      }
    }
  },
});

const { reducer: usersReducer, actions } = usersSlice;
const { fetching, fetchSuccess, fetchError, getStatus } = actions;

export const loadUsersList = () => async (dispatch) => {
  dispatch(fetching());
  try {
    const content = await fetch("http://localhost:3004/users");
    const usersContent = await content.json();
    dispatch(fetchSuccess(usersContent));
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};

export const getBookmark = (user) => async (dispatch) => {
  localStorageService.addBookmark([...user]);
  try {
    await dispatch(getStatus(user));
  } catch (e) {
    console.error(e);
  }
};

export const getUsersList = () => (state) => state.users.users;

export const getDataStatus = () => (state) => state.users.dataLoaded;

export const getUsersLoadingStatus = () => (state) => state.users.isLoading;

export const getUserById = (userId) => (state) => {
  if (state.users.users) return state.users.users.find((u) => u.id === userId);
};

export const getFavoriteUsers = () => (state) => state.favorites;

export const pushIntoFavorites = (id) => async (dispatch) => {
  const content = await fetch("http://localhost:3004/users");
  const usersContent = await content.json();
  
};

// export const removeOutOfFavorites = (id) => async (dispatch) => {
//   dispatch(removeFavoriteUser(id));
//   try {
//     localStorage.removeItem(USERS);
//     localStorage.setItem(USERS, state.favorites);
//   } catch (e) {
//     dispatch(fetchError(e.message));
//   }
// };

export default usersReducer;
