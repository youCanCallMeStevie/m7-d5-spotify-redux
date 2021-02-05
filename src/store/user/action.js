import {
  LIKED_SONG,
  REJECTED_SONG,
  SET_USER_DETAILS,
  LOGGED_IN,
  TOGGLE_LIKED_SONG,
} from "./constants";

export const setUserDetails = (username, password) => ({
  type: SET_USER_DETAILS,
  payload: { username, password },
});
export const isLoggedIn = () => ({ type: LOGGED_IN });
export const likedSong = (song) => ({ type: LIKED_SONG, payload: song });
export const removedSong = (song) => ({ type: REJECTED_SONG, payload: song });
export const toggleLikeSong = (song) => ({
  type: TOGGLE_LIKED_SONG,
  payload: song,
});
