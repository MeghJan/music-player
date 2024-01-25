import React, { useState } from 'react'
import DownArrow from '../../assets/images/down-arrow-black.png'
import { useSelector } from 'react-redux';
import { songSel } from '../../store/songs/selectors';

interface ISong {
  id: number;
  songName: string;
  artistName: string;
  trackNumber: number;
}

export const AddAllButton = () => {
  const [queuedSongs, setQueuedSongs] = useState<ISong[]>([]);
  const songs = useSelector(songSel.songsListSelector);

  //handle Add All songs to queue button click
  const handleAddAll = () => {
    console.log('Add All clicked');
    console.log('Current Queued Songs:', queuedSongs);
    console.log('All Songs:', songs);
    
    // Filter out songs that are already in the queuedSongs
    const newSongsToAdd = songs.filter((song) => !queuedSongs.some((queuedSong) => queuedSong.id === song.id));

    setQueuedSongs([...queuedSongs, ...newSongsToAdd]);
  };

  return (
    <button className="add-all" onClick={handleAddAll}>
        Add All
        <span><img src={DownArrow} alt="down arrow" /></span>
    </button>
  )
}
