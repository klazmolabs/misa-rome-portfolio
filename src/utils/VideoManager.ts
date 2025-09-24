// Global video manager to ensure only one video plays at a time
export class VideoManager {
  private static instance: VideoManager;
  private currentlyPlaying: HTMLVideoElement | null = null;
  private observers: Set<(video: HTMLVideoElement | null) => void> = new Set();

  static getInstance(): VideoManager {
    if (!VideoManager.instance) {
      VideoManager.instance = new VideoManager();
    }
    return VideoManager.instance;
  }

  setCurrentlyPlaying(video: HTMLVideoElement | null) {
    if (this.currentlyPlaying && this.currentlyPlaying !== video) {
      this.currentlyPlaying.pause();
    }
    this.currentlyPlaying = video;
    this.observers.forEach(observer => observer(video));
  }

  subscribe(observer: (video: HTMLVideoElement | null) => void) {
    this.observers.add(observer);
    return () => {
      this.observers.delete(observer);
    };
  }

  getCurrentlyPlaying(): HTMLVideoElement | null {
    return this.currentlyPlaying;
  }
}
