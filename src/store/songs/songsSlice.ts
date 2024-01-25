import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialSongs } from "./initialState";
import { IInitialSongs, ISong } from "../types";


export const songsSlice = createSlice({
  name: "workers",
  initialState: initialSongs,
  reducers: {
    setSongs(state: IInitialSongs, action: PayloadAction<ISong[]>) {
      state.songsList = action.payload;
    },

    setSong(state: IInitialSongs, action: PayloadAction<ISong>) {
      state.song = action.payload;
    },

    uploadSong(state: IInitialSongs, action: PayloadAction<ISong>) {
      const newSong: ISong = {
        ...action.payload,
        file: action.payload.file, // Include the file in the new song
      };

      state.songsList = [...state.songsList, newSong];
    },

  },
});

