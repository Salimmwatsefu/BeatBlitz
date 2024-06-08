import React from 'react'
import { Canvas } from '@react-three/fiber'
import Stars from './Stars'
import Overlay from './Overlay'

export default function Hero({setIsPlaying}) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }} className='bg-black'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
      <Overlay setIsPlaying={setIsPlaying} />
      
    </div>
  )
}
