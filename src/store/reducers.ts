import { combineReducers } from "@reduxjs/toolkit";

import { songsSlice } from "./songs/songsSlice";

export const reducers = () =>
  combineReducers({
    workers: songsSlice.reducer,
  });
