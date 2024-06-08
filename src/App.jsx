import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router'
import Hero from './components/Home/Hero'
import FirstScreen from './components/Game/FirstScreen'
import AudioPlayer from './components/Home/AudioPlayer'
import Navbar from './components/Game/Navbar'

function App() {

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div>

        <Routes>
          <Route path='/' element={<Hero setIsPlaying={setIsPlaying} />} />

          <Route path='/game' element={<Navbar />}>
          <Route index element={<FirstScreen />} />
          </Route >
        </Routes>

        <AudioPlayer isPlaying={isPlaying}/>

        
      </div>
    </>
  )
}

export default App
