import { LIKED_SONG } from "./constants";

export const likedSong = (song) => ({ type: LIKED_SONG, payload: song });
export const addUser = (data) => ({ type: ADD_USER, payload: data });
