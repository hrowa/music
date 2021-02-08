import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay, faPause, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"

const Player = ({ currentSong, setCurrentSong, isPlaying, 
    setIsPlaying, audioRef, songInfo, setSongInfo, songs, song, setSongs }) => {
//Event Handlers
const playSongHandler = () => {
    if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
    } else {
        audioRef.current.play();
        setIsPlaying(!isPlaying);
    }
};

const getTime = (time) => {
    return(
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
};

//useEffect
useEffect(() => {
    const newSongs = songs.map((song) => {
        if(song.id === currentSong.id){
            return{
                ...song,
                active: true,
            }
        }else{
            return{
                ...song,
                active: false,
            }
        }
        });
        setSongs(newSongs);
    }, [currentSong]);

const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value});
}

const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if(direction === "skip-forward") {
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if(direction === "skip-back") {
        if((currentIndex -1) % songs.length === -1){
            await setCurrentSong(songs[songs.length - 1]);
            if(isPlaying) audioRef.current.play();
            return
        }
        setCurrentSong(songs[(currentIndex + -1) % songs.length]);
    }
    if(isPlaying) audioRef.current.play();
    };

return(
    <div className="player">
        <div className="time-control">
            <p>{songInfo.duration ? getTime(songInfo.currentTime) : "0:00"}</p>
            <input 
                min={0} 
                max={songInfo.duration || 0} 
                value={songInfo.currentTime} 
                onChange={dragHandler}
                type="range"/>
            <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon
                onClick={() => skipTrackHandler('skip-back')} 
                className="skip-back" 
                icon={faAngleLeft} 
                size="2x" />
            <FontAwesomeIcon 
                onClick={playSongHandler} 
                className="play" 
                icon={isPlaying ? faPause : faPlay } 
                size="2x" />
            <FontAwesomeIcon
                onClick={() => skipTrackHandler('skip-forward')} 
                className="skip-forward" 
                icon={faAngleRight} 
                size="2x" />
        </div>
        </div>
    );
};

export default Player;