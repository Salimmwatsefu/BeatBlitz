import React from 'react'
import { Link, useNavigate } from 'react-router-dom'




function PlayButton({ onPlayClick }) {

  
  return (
    <div>
      
        <button onClick={onPlayClick} className=' bg-white/20 w-[250px] text-center py-7 rounded-full'>
            <span className=' text-2xl'>Play Game</span>
        </button>
       
        
    </div>
  )
}

export default PlayButton