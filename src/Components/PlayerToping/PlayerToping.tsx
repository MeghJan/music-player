import React from 'react'
import { PlayAllButton } from '../PlayAllButton/PlayAllButton'
import { AddAllButton } from '../AddAllButton/AddAllButton'
import DownArrow from '../../assets/images/down-arrow-black.png'
import "./playerToping.css"

export const PlayerToping = () => {
  return (
    <div className="player-toping">
        <div className="player-buttons">
            <PlayAllButton />
            <AddAllButton />
        </div>
        <div className="toping-right-side">
            <button className="track-numbers">
                <div>Track Numbers</div>
                <span><img src={DownArrow} alt="down arrow" /></span>
            </button>
            <form action="" className="search-form">
                <input type="text" className="search-input" placeholder="Filter" />
            </form>
        </div>
    </div>
  )
}
