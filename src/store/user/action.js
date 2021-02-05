import { LIKED_SONG, SET_USER_DETAILS, LOGGED_IN } from "./constants";

export const likedSong = (song) => ({ type: LIKED_SONG, payload: song });
export const setUserDetails = (username, password) => ({
  type: SET_USER_DETAILS,
  payload: { username, password },
});
export const isLoggedIn = (toggle) => ({ type: LOGGED_IN, payload: toggle });
