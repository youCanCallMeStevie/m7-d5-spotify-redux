import {
  LIKED_SONG,
  REJECTED_SONG,
  SET_USER_DETAILS,
  LOGGED_IN,
  CREATE_PLAYLIST,
  ADD_TO_PLAYLIST
} from "./constants";

export const setUserDetails = (username, password) => ({
  type: SET_USER_DETAILS,
  payload: { username, password },
});
export const isLoggedIn = () => ({ type: LOGGED_IN });
export const likedSong = (song) => ({ type: LIKED_SONG, payload: song });
export const removedSong = (song) => ({ type: REJECTED_SONG, payload: song });
export const createPlaylist = (name) => ({ type: CREATE_PLAYLIST, payload: { name: name, trackslist: [] } })
export const addToPlaylist = (name, tracks) => ({ type: ADD_TO_PLAYLIST, payload:{name: name, track:tracks}})