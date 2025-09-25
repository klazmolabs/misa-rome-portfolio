'use client';

import { useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  useEffect(() => {
    // Simple timer for loading duration
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2000); // 2 second loading duration

    // Preload critical videos
    const videosToPreload = [
      '/videos/MisaRome/MAIN_optimized.mp4',
      '/videos/MisaRome/FIRST_1_optimized.mp4',
      '/videos/MisaRome/Karen_1_optimized.mp4'
    ];

    videosToPreload.forEach((src) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.src = src;
    });

    return () => {
      clearTimeout(timer);
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
      
      {/* Small Loading Wheel - Centered */}
      <div 
        className="relative z-10 flex items-center justify-center"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Loading Wheel */}
        <div 
          className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin"
          style={{
            width: '48px',
            height: '48px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            borderTopColor: 'white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}
        ></div>
      </div>

      {/* Animations */}
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
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
