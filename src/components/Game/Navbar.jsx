import React from 'react'
import { Outlet } from 'react-router'


function Navbar() {
  return (
    <div className=' h-12 bg-white/10 mt-1'>
        <div className=' text-black flex'>
            <div className=' flex'>
                <h1 className=' text-2xl ml-12 mt-2'>BeatBlitz</h1>
                <span className='mt-4 text-xs ml-2 font-game text-white/65'>i know this track</span>
            </div>

            <div className='right-[10%] absolute top-[16px]'>
                <ul className='flex text-white/60 gap-7'>
                    <li>Home</li>
                    <li>Leaderboards</li>
                    <li>Login</li>
                </ul>
            </div>
            
        </div>
    <Outlet />
    </div>
  )
}

export default Navbar