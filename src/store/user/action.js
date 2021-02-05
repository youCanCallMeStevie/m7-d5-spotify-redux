import { LIKED_SONG, REJECTED_SONG } from "./constants";

export const likedSong = (song) => ({ type: LIKED_SONG, payload: song });
export const removedSong = (song) => ({ type: REJECTED_SONG, payload: song})
