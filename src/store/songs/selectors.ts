
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IInitialSongs } from "../types";

const songsSelector = (state: RootState) => state.workers;

const songsListSelector = createSelector(
  [songsSelector],
  (songs: IInitialSongs) => songs.songsList
);

const songSelector = createSelector(
  [songsSelector],
  (songs: IInitialSongs) => songs.song
);

export const songSel = {
    songsSelector,
    songsListSelector,
    songSelector,
};
