import React, { useState } from 'react'
import "../SongList/songList.css"
import "./songRow.css"
import sortDots from "../../assets/images/sort-dots.png"
import playGreyBtn from "../../assets/images/play-grey.png"
import Heart from "../../assets/images/heart.png"
import HeartFilled from "../../assets/images/heart-filled.png"
import RightIcon from "../../assets/images/done-icon.png"
import ShareIcon from "../../assets/images/icons8-forward-arrow-50.png"
import DownArrowGrey from '../../assets/images/down-arrow-grey.png'



interface ISong {
    id: number,
    songName: string,
    artistName: string,
    trackNumber: number,
    file?: File,
}

export const SongRow = (props: ISong) => {
    const { songName, artistName, trackNumber, file } = props;
    const [showImageOne, setShowImageOne] = useState(true);
    
    const toggleImage = () => {
        setShowImageOne((prev) => !prev);
    };

    return (
        <tr>
            <td>
                <div className="song-row-icons">
                    <img src={sortDots} alt="sort dots" />
                    <button>
                        <img src={playGreyBtn} alt="play song button" />
                    </button>
                </div>
            </td>
            <td>{songName}</td>
            <td>{artistName}</td>
            <td>{trackNumber}</td>
            <td>
                <div className='song-row-right-icons'>
                    <button onClick={toggleImage}>
                        {showImageOne ? (
                            <img src={Heart} alt="heart" />
                        ) : (
                            <img src={HeartFilled} alt="heart filled" />
                        )}
                    </button>
                    <button><img src={RightIcon} alt="Right icon" /></button>           
                    <button><img src={ShareIcon} alt="Share icon" /></button>
                    <div className='upload-song-btn'>
                         <button className="upload-song-btn">
                            <img src={DownArrowGrey} alt="down array" />
                            </button>
                    </div>
                   
                    
                </div>
            </td>
        </tr>
            

    )
}

