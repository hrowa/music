import React, { useState, useRef } from 'react'
import data from './data'

//Styles
import "./styles/app.scss";
import "./styles/_library.scss"

//Components
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'

function App() {
const audioRef = useRef(null);
//State
const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0});
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);
const [libraryStatus, setLibraryStatus] = useState(false);
const [songVolume, setSongVolume] = useState({currentVolume: 1});
  
const timeUpdateHandler = (e) => {
const current = e.target.currentTime;
const duration = e.target.duration;
  setSongInfo({...songInfo, currentTime: current, duration})
};

const volumeUpdateHandler = (e) => {
  const currVolume = e.target.volume;
setSongVolume({...songVolume, currentVolume: currVolume})
}

const songEndHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play();
}
  return (
    <div className="App">
    <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
    <Song currentSong={currentSong} />
    <Player 
      audioRef={audioRef}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}
      isPlaying={isPlaying}
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      songs={songs}
      setSongs={setSongs}
      setCurrentSong={setCurrentSong}
      songVolume={songVolume}
      setSongVolume={setSongVolume}
      />
    <Library 
      songs={songs}
      setCurrentSong={setCurrentSong}
      audioRef={audioRef}
      isPlaying={isPlaying}
      setSongs={setSongs}
      libraryStatus={libraryStatus}
      setLibraryStatus={setLibraryStatus}
    />
    <audio 
      onLoadedMetadata={timeUpdateHandler} 
      onTimeUpdate={timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio}
      onEnded={songEndHandler}
      onVolumeChange={volumeUpdateHandler}
      >
      </audio>
    </div>
  );
}

export default App;
