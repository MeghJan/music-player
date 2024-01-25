import React, { useEffect, useState } from 'react'
import DownArrow from '../../assets/images/down-arrow-black.png'
import { useSelector } from 'react-redux';
import { songSel } from '../../store/songs/selectors';

export const PlayAllButton = ({  }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const songs = useSelector(songSel.songsListSelector);

  const handlePlayAll = () => {
    setIsPlaying(true);
    console.log("Play All clicked");
  };

  useEffect(() => {
    if (isPlaying) {
      playAllSongs();
    }
  }, [isPlaying]);

  const playAllSongs = () => {
    const playNextSong = () => {
      setCurrentSongIndex((prevIndex) => prevIndex + 1);
    };

    //if the playlist length is finished, stop playing and reset the index
    if (!songs || currentSongIndex >= songs.length) {
      console.log('All songs played or songs list is empty');
      setIsPlaying(false);
      setCurrentSongIndex(0);
      return;
    }
  
    // Simulate playback duration
    //show the playing song name in the console   
    console.log(`Playing: ${songs[currentSongIndex].songName}`);
    setTimeout(() => {
      playNextSong();
    }, 1000); // Assuming 1 second per song for simulation
  };

  return (
    <button className="play-all" onClick={handlePlayAll}>
        Play All
        <span><img src={DownArrow} alt="down arrow" /></span>
    </button>
  )
}
