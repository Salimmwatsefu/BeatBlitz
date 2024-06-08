import React, { useEffect, useRef, useState } from 'react';

const AudioPlayer = ({ isPlaying }) => {
  const audioRef = useRef(null); // Create a ref for the audio element
  const [isMuted, setIsMuted] = useState(false); // State to track mute status
  const songs = [
    '/assets/music/relationship.mp3',
    '/assets/music/no-complaints.mp3',
    '/assets/music/the-weekend.mp3',
  ];

  const playRandomSong = () => {
    const audio = audioRef.current;
    if (audio) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      audio.src = songs[randomIndex];

      setTimeout(() => {
        audio.load(); // Load the audio
      audio.play(); // Start playing once loaded
      console.log('Music is playing:', audio.src);

      }, 2000)
      
    }
  };

  useEffect(() => {
    console.log('isPlaying:', isPlaying);
    const audio = audioRef.current; // Get the audio element
    if (isPlaying) {
      playRandomSong();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Toggle mute status
  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  return (
    <audio ref={audioRef} loop muted={isMuted} style={{ display: 'none' }} />
  );
};

export default AudioPlayer;
