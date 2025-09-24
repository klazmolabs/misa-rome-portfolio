'use client';

import { useState, useRef, useEffect } from 'react';
import { VideoManager } from '@/utils/VideoManager';

interface VideoPlayerProps {
  src: string;
  title: string;
  category: string;
  poster?: string;
  className?: string;
}


const VideoPlayer = ({ src, title, category, poster, className = '' }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoManager = VideoManager.getInstance();

  // Subscribe to video manager updates
  useEffect(() => {
    const unsubscribe = videoManager.subscribe((currentVideo) => {
      if (videoRef.current && videoRef.current !== currentVideo) {
        setIsPlaying(false);
      }
    });

    return unsubscribe;
  }, [videoManager]);

  // Lazy loading - only load video when close to viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current && !videoRef.current.src) {
          // Load video source only when it comes into view
          videoRef.current.src = src;
          videoRef.current.load();
        }
      },
      {
        rootMargin: '200px', // Start loading 200px before entering viewport
        threshold: 0
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [src]);

  // Intersection Observer to play video when visible and centered
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current && containerRef.current && videoRef.current.src) {
          // Only check play if video is loaded
          checkAndPlayIfCentered();
        } else if (videoRef.current) {
          if (videoManager.getCurrentlyPlaying() === videoRef.current) {
            videoManager.setCurrentlyPlaying(null);
          }
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [videoManager]);

  // Function to check if this video is most centered and should play
  const checkAndPlayIfCentered = () => {
    if (!containerRef.current || !videoRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const videoCenter = rect.top + rect.height / 2;
    const distanceFromCenter = Math.abs(videoCenter - viewportCenter);
    
    // Check if user has scrolled to bottom of page
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100;
    
    // Check if this is the last video on the page
    const allVideos = document.querySelectorAll('video');
    const isLastVideo = videoRef.current === allVideos[allVideos.length - 1];
    
    // Play if video is reasonably centered OR if it's the last video and user is at bottom
    const isInViewportCenter = rect.top < viewportCenter && rect.bottom > viewportCenter;
    const isMostlyCentered = distanceFromCenter < window.innerHeight / 4;
    const shouldPlayAtBottom = isAtBottom && isLastVideo && rect.top < window.innerHeight;
    
    if (isInViewportCenter && isMostlyCentered || shouldPlayAtBottom) {
      videoManager.setCurrentlyPlaying(videoRef.current);
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  // Listen for scroll events to continuously check which video should play
  useEffect(() => {
    const handleScroll = () => {
      if (isVisible && containerRef.current && videoRef.current) {
        checkAndPlayIfCentered();
      }
    };

    const throttledScroll = throttle(handleScroll, 200); // Increased throttle to 200ms
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [isVisible]);

  // Simple throttle function
  const throttle = (func: (...args: unknown[]) => void, limit: number) => {
    let inThrottle: boolean;
    return function(...args: unknown[]) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        videoManager.setCurrentlyPlaying(null);
        setIsPlaying(false);
      } else {
        videoManager.setCurrentlyPlaying(videoRef.current);
        videoRef.current.play().catch(() => {
          // Handle play promise rejection
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    }
  };


  return (
    <div 
      ref={containerRef}
      className={`group relative aspect-video overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        muted={true}
        loop
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadStart={() => {}}
        onCanPlay={() => {}}
        onError={(e) => console.error('Video error:', src, e)}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
      >
        {/* Source will be added dynamically via lazy loading */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/40" />

      {/* Play button - only show when paused */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handlePlay}
      >
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300">
          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end justify-start p-8">
        <div
          className={`transition-all duration-500 ${
            isHovered ? 'transform translate-y-0 opacity-100' : 'transform translate-y-2 opacity-90'
          }`}
        >
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-2 font-medium">
            {category}
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h3>
        </div>
      </div>


      {/* Click overlay for play/pause */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={handlePlay}
      />
    </div>
  );
};

export default VideoPlayer;