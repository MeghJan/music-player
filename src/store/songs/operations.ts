import { AppDispatch } from "..";
import { ISong } from "../types";
import { songsSlice } from "./songsSlice";
// import song1 from "../../assets/songs/song1.mp3";


//token is stored in local storage
const token= localStorage.getItem('token');

const { setSongs } = songsSlice.actions;

const data = [
  {
      id: 1,
      songName: 'Halo',
      artistName: 'Blackbird Blackbird',
      trackNumber: 1,
      // file: {song1},
  },
  {
      id: 2,
      songName: 'Blind',
      artistName: 'Blackbird Blackbird',
      trackNumber: 2,
  },
  {
      id: 3,
      songName: 'Twin Flames',
      artistName: 'Blackbird Blackbird',
      trackNumber: 3,
  },
  {
      id: 4,
      songName: 'Left to Hurt',
      artistName: 'Blackbird Blackbird',
      trackNumber: 4,
  },
  {
      id: 5,
      songName: 'Starlight',
      artistName: 'Blackbird Blackbird',
      trackNumber: 5,
  },
  {
      id: 6,
      songName: 'Modern Disbelief',
      artistName: 'Blackbird Blackbird',
      trackNumber: 6,
  },
]

// get the list of the songs 
const getSongs = () => {
  return async (dispatch: AppDispatch) => {
    try {
      // Simulating an API call to fetch data =>
      //if we had the API then we will write this code by fetching the data 
      // const songs = await fetch(
      //   // this row will be change after we get the api from backend
      //   `${baseUrl}/api`,
      //   {
      //     headers: {
      //       'Authorization': `Bearer ${token}`,
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );
      // if (!songs.ok) {
      //   console.error('Failed to fetch songs:', songs.status, await songs.text());
      //   return;
      // }

      // const responseData = await songs.json();

      // if (responseData.data) {
      //   dispatch(setSongs(responseData.data));
      // } else {
      //   console.error('Invalid response format. Expected an array.');
      // }
      //dispatch the static data that we have
      dispatch(setSongs(data));

    } catch (error) {
      console.log(error);
    }
  };
};

const { uploadSong } = songsSlice.actions; // Destructure the actions

//upload a new song
const uploadSongOperation = (body: ISong) => {
  return async (dispatch: AppDispatch) => {
    try {
      // Simulate API call
      // const response = await fetch('your-api-endpoint', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(body),
      // });

      // Simulate a successful response
      // if (response.ok) {
        const { file, ...serializablePayload } = body;
        dispatch(uploadSong(serializablePayload));
      // } else {
      //   // Handle error case
      //   console.error('Failed to upload song:', response.status);
      // }
    } catch (error) {
      console.error('Error uploading song:', error);
      // Handle error case
    }
  };
};

export const songsOp = { getSongs, uploadSong: uploadSongOperation };
