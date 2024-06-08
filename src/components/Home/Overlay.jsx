import React, { useEffect, useState } from 'react'
import PlayButton from './PlayButton'
import AudioPlayer from './AudioPlayer';
import { useNavigate } from 'react-router';




export default function Overlay({ setIsPlaying }) {


  const navigate = useNavigate();

  const handlePlayClick = () => {
    
    setIsPlaying(true);
    navigate('/game');
  };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0,  width: '100%', height: '100%' }}>
      
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 style={{ margin: 0, padding: 0, fontSize: '15em', fontWeight: 500, letterSpacing: '-0.05em' }}>BeatBlitz</h1>
        <h3 className='absolute top-[110px] left-[810px]'>TM</h3>
        <div className=' flex justify-center'>

        <PlayButton onPlayClick={handlePlayClick} />

        </div>
        
      </div>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>pretty bad —</div>
      
      
    </div>
  )
}
