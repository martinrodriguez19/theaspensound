"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import Link from "next/link";

interface Track {
  id: number;
  title: string;
  artist: string;
  audioUrl: string;
  duration: string;
}

export default function AudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks: Track[] = [
    {
      id: 1,
      title: "Break Free",
      artist: "The Aspen Sound (Cover)",
      audioUrl: "/audio/break-free.mp3",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Heaven",
      artist: "The Aspen Sound ft. Nico Furman (Cover)",
      audioUrl: "/audio/heaven.mp3",
      duration: "4:12"
    },
    {
      id: 3,
      title: "Lets Dance",
      artist: "The Aspen Sound (Cover)",
      audioUrl: "/audio/lets-dance.mp3",
      duration: "3:58"
    },
    {
      id: 4,
      title: "Mil Horas",
      artist: "The Aspen Sound (Cover)",
      audioUrl: "/audio/mil-horas.mp3",
      duration: "4:30"
    },
    {
      id: 5,
      title: "Stand By Me",
      artist: "The Aspen Sound (Cover)",
      audioUrl: "/audio/stand-by-me.mp3",
      duration: "3:22"
    },
    {
      id: 6,
      title: "The Power Of Love",
      artist: "The Aspen Sound (Cover)",
      audioUrl: "/audio/the-power-of-love.mp3",
      duration: "3:55"
    }
  ];

  const handlePlayPause = (trackId: number) => {
    if (currentTrack === trackId) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      // Stop current track if any
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      // Load and play new track
      setCurrentTrack(trackId);
      setIsPlaying(true);
      
      // Wait for state update then play
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.src = tracks.find(t => t.id === trackId)?.audioUrl || "";
          audioRef.current.play();
        }
      }, 0);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTrack(null);
    };

    if (audio) {
      audio.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <section className="py-20" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h3 className="headline-text mb-4">DEMOS EN ESTUDIO</h3>
          <p className="text-xl text-gray-400">
            Escuchá la calidad de nuestro sonido
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4">
            {tracks.slice(0, 3).map((track) => (
              <div
                key={track.id}
                className="group flex items-center justify-between p-6 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: currentTrack === track.id ? '#1a1a1a' : '#000000',
                  border: '1px solid',
                  borderColor: currentTrack === track.id ? '#6b46c1' : '#374151'
                }}
                onClick={() => handlePlayPause(track.id)}
              >
                <div className="flex items-center flex-1">
                  <button
                    className="mr-4 p-3 rounded-full transition-all"
                    style={{
                      backgroundColor: currentTrack === track.id ? '#6b46c1' : '#191919'
                    }}
                    aria-label={isPlaying && currentTrack === track.id ? "Pausar" : "Reproducir"}
                  >
                    {isPlaying && currentTrack === track.id ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5 ml-0.5" />
                    )}
                  </button>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">
                      {track.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {track.artist}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {currentTrack === track.id && isPlaying && (
                    <Volume2 className="w-4 h-4 text-violet-400 animate-pulse" />
                  )}
       
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {tracks.slice(3, 6).map((track) => (
              <div
                key={track.id}
                className="group flex items-center justify-between p-6 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: currentTrack === track.id ? '#1a1a1a' : '#000000',
                  border: '1px solid',
                  borderColor: currentTrack === track.id ? '#6b46c1' : '#374151'
                }}
                onClick={() => handlePlayPause(track.id)}
              >
                <div className="flex items-center flex-1">
                  <button
                    className="mr-4 p-3 rounded-full transition-all"
                    style={{
                      backgroundColor: currentTrack === track.id ? '#6b46c1' : '#191919'
                    }}
                    aria-label={isPlaying && currentTrack === track.id ? "Pausar" : "Reproducir"}
                  >
                    {isPlaying && currentTrack === track.id ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5 ml-0.5" />
                    )}
                  </button>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">
                      {track.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {track.artist}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {currentTrack === track.id && isPlaying && (
                    <Volume2 className="w-4 h-4 text-violet-400 animate-pulse" />
                  )}
                  <span className="text-sm text-gray-500">
                    {track.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hidden audio element */}
        <audio ref={audioRef} />
      
      </div>
    </section>
  );
}