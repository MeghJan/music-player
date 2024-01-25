import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SongRow } from '../SongRow/SongRow';
import { AppDispatch } from '../../store';
import './songList.css';
import { songSel } from '../../store/songs/selectors';
import { songsOp } from '../../store/songs/operations';
import { MusicUploadForm } from '../MusicUploadForm/MusicUploadForm';


export const SongList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const songs = useSelector(songSel.songsListSelector);

  useEffect(() => {
    dispatch(songsOp.getSongs());
  }, [dispatch]);

  return (
    <>
     <div className="songs-list">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Song Name</th>
            <th>Artist Name</th>
            <th>Track</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <SongRow
              key={song.id}
              songName={song.songName}
              artistName={song.artistName}
              trackNumber={song.trackNumber}
              id={song.id}
            />
          ))}
        </tbody>
      </table>
    </div>

    <MusicUploadForm />
    </>
   
  );
};