'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment between 5-20
      });
    }, 200);

    // Preload critical videos
    const videosToPreload = [
      '/videos/MisaRome/MAIN.mp4',
      '/videos/MisaRome/FIRST 1.mp4',
      '/videos/MisaRome/RECAP DONE.mp4'
    ];

    videosToPreload.forEach((src) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.src = src;
    });

    // Loading text animation
    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === 'Loading...') return 'Loading';
        return prev + '.';
      });
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)]"></div>
      
      {/* Content - Perfectly Centered */}
      <div 
        className="relative z-10 text-center"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Large Progress Percentage */}
        <div 
          className="text-white text-8xl md:text-9xl font-black tracking-tight"
          style={{
            fontSize: 'clamp(6rem, 15vw, 9rem)',
            fontWeight: '900',
            color: 'white',
            letterSpacing: '-0.025em',
            lineHeight: '1',
            margin: 0,
            padding: 0
          }}
        >
          {Math.round(Math.min(progress, 100))}%
        </div>
        
        {/* Subtle loading text below */}
        <div 
          className="mt-8"
          style={{
            marginTop: '2rem'
          }}
        >
          <p 
            className="text-white/40 text-sm font-light tracking-widest uppercase"
            style={{
              color: 'rgba(255, 255, 255, 0.4)',
              fontSize: '0.875rem',
              fontWeight: '300',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              margin: 0,
              padding: 0
            }}
          >
            {loadingText}
          </p>
        </div>
      </div>

      {/* Fade out animation */}
      <style jsx>{`
        .fade-out {
          animation: fadeOut 0.8s ease-out forwards;
        }
        
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
