// Utility to get Firebase Storage video URLs
export const getVideoUrl = (videoPath: string): string => {
  // Firebase Storage public URL format
  const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/misa-rome-portfolio.firebasestorage.app/o';
  
  // Encode the file path for URL
  const encodedPath = encodeURIComponent(videoPath);
  
  // Add media token for public access
  return `${baseUrl}/${encodedPath}?alt=media`;
};

// Video paths mapping (update these to match your Firebase Storage structure)
export const videoFiles = {
  hero: 'videos/MisaRome/MAIN_optimized.mp4',
  first: 'videos/MisaRome/FIRST_1_optimized.mp4',
  recap: 'videos/MisaRome/RECAP_DONE_optimized.mp4',
  instagram: 'videos/MisaRome/FOR_INSTA_optimized.mp4',
  thisIsMe: 'videos/MisaRome/this_is_me_optimized.mp4',
  weReady: 'videos/MisaRome/we_ready_optimized.mp4',
  karen: 'videos/MisaRome/Karen_1_optimized.mp4',
  comoDavid: 'videos/MisaRome/como_david_optimized.mp4',
  fourK: 'videos/MisaRome/4k_version_optimized.mp4',
  grade3: 'videos/MisaRome/grade_3_optimized.mp4',
  me: 'videos/MisaRome/me_optimized.mp4',
  clip6: 'videos/MisaRome/clip_6_optimized.mp4',
  recapNoTitles: 'videos/MisaRome/RECAP_NO_TITLES_optimized.mp4',
  rugged: 'videos/MisaRome/rugged_optimized.mp4'
};
