'use client';

import Header from '@/components/Header';
import PortfolioGrid from '@/components/PortfolioGrid';
import VideoPlayer from '@/components/VideoPlayer';
import LoadingScreen from '@/components/LoadingScreen';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { VideoManager } from '@/utils/VideoManager';

// Sample portfolio items - replace with actual content
const portfolioItems = [
  {
    id: '1',
    title: 'Corporate Event Coverage',
    category: 'Live Event',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    href: '/work/corporate-event-coverage',
  },
  {
    id: '2',
    title: 'Brand Documentary',
    category: 'Productions',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop',
    href: '/work/brand-documentary',
  },
  {
    id: '3',
    title: 'Music Video - "Midnight"',
    category: 'Directed',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    href: '/work/music-video-midnight',
  },
  {
    id: '4',
    title: 'Conference Highlights',
    category: 'Live Event',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    href: '/work/conference-highlights',
  },
];


export default function Home() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [globalMute, setGlobalMute] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const videoManager = VideoManager.getInstance();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSectionHeight = window.innerHeight;
      
      // Show sticky header when scrolled past 50% of hero section
      setShowStickyHeader(scrollY > heroSectionHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subscribe to video manager to pause hero video when other videos play
  useEffect(() => {
    const unsubscribe = videoManager.subscribe((currentVideo) => {
      if (heroVideoRef.current && heroVideoRef.current !== currentVideo) {
        // Another video is playing, pause the hero video
        if (!heroVideoRef.current.paused) {
          heroVideoRef.current.pause();
          console.log('Hero video paused because another video started playing');
        }
      }
    });

    return unsubscribe;
  }, [videoManager]);

  const toggleGlobalMute = () => {
    const newMuteState = !globalMute;
    setGlobalMute(newMuteState);
    
    // Update all video elements on the page
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.muted = newMuteState;
    });
  };

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    // Force hero video to play after loading
    setTimeout(() => {
      if (heroVideoRef.current) {
        heroVideoRef.current.muted = true;
        heroVideoRef.current.play().catch(() => {
          console.log('Hero video autoplay prevented');
        });
      }
    }, 100);
  };

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      
      {/* Sticky Header with Logo */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md transition-all duration-300 ${
        showStickyHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="w-full py-6 flex items-center justify-center">
        <Image
            src="/images/logo.png"
            alt="Misa Rome"
            width={400}
            height={200}
            className="drop-shadow-2xl"
          priority
        />
        </div>
      </header>
      
      <main>
        {/* Hero Section with MAIN Video */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Main Video Background */}
          <video
            ref={heroVideoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            key="main-hero-video"
            onLoadedData={(e) => {
              const video = e.currentTarget;
              video.play().catch(() => {
                console.log('Autoplay prevented, but video is ready');
              });
            }}
            onClick={() => {
              // When hero video is clicked, set it as currently playing
              if (heroVideoRef.current) {
                if (heroVideoRef.current.paused) {
                  videoManager.setCurrentlyPlaying(heroVideoRef.current);
                  heroVideoRef.current.play().catch(() => {
                    console.log('Hero video play prevented');
                  });
                } else {
                  videoManager.setCurrentlyPlaying(null);
                  heroVideoRef.current.pause();
                }
              }
            }}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          >
            <source src="/videos/MisaRome/MAIN_optimized.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              
              {/* Misa Rome Logo */}
            <Image
                src="/images/logo.png"
                alt="Misa Rome"
                width={400}
                height={200}
                className="mx-auto drop-shadow-2xl"
                priority
              />
              
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center z-10">
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              
              {/* FIRST 1 Video - Featured */}
              <div className="w-full max-w-4xl mx-auto">
                <VideoPlayer
                  src="/videos/MisaRome/FIRST_1_optimized.mp4"
                  title="First"
                  category="Featured"
                />
              </div>

              {/* Rest of the videos in a grid - All Optimized */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <VideoPlayer
                  src="/videos/MisaRome/RECAP_DONE_optimized.mp4"
                  title="Recap"
                  category="Work"
                />
                <VideoPlayer
                  src="/videos/MisaRome/FOR_INSTA_optimized.mp4"
                  title="Instagram Reel"
                  category="Social"
                />
                <VideoPlayer
                  src="/videos/MisaRome/this_is_me_optimized.mp4"
                  title="This Is Me"
                  category="Personal"
                />
                <VideoPlayer
                  src="/videos/MisaRome/we_ready_optimized.mp4"
                  title="We Ready"
                  category="Work"
                />
                <VideoPlayer
                  src="/videos/MisaRome/Karen_1_optimized.mp4"
                  title="Karen"
                  category="Featured"
                />
                <VideoPlayer
                  src="/videos/MisaRome/como_david_optimized.mp4"
                  title="Como David"
                  category="Personal"
                />
                <VideoPlayer
                  src="/videos/MisaRome/4k_version_optimized.mp4"
                  title="4K Version"
                  category="Work"
                />
                <VideoPlayer
                  src="/videos/MisaRome/grade_3_optimized.mp4"
                  title="Grade 3"
                  category="Work"
                />
                <VideoPlayer
                  src="/videos/MisaRome/me_optimized.mp4"
                  title="Me"
                  category="Personal"
                />
                <VideoPlayer
                  src="/videos/MisaRome/clip_6_optimized.mp4"
                  title="Clip 6"
                  category="Work"
                />
                <VideoPlayer
                  src="/videos/MisaRome/RECAP_NO_TITLES_optimized.mp4"
                  title="Recap No Titles"
                  category="Work"
                />
                <VideoPlayer
                  src="/videos/MisaRome/rugged_optimized.mp4"
                  title="Rugged"
                  category="Work"
                />
              </div>

            </div>
        </div>
        </section>

      </main>

      {/* Global Volume Control - Simple & Reliable */}
      <div
        onClick={toggleGlobalMute}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 100,
          width: '56px',
          height: '56px',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {globalMute ? (
          // Muted - Simple emoji
          <span style={{ fontSize: '20px' }}>🔇</span>
        ) : (
          // Unmuted - Simple emoji
          <span style={{ fontSize: '20px' }}>🔊</span>
        )}
      </div>
    </div>
  );
}