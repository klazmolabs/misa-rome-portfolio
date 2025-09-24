# Firebase Storage Setup for Misa Rome Portfolio

## 🔥 Firebase Storage Configuration

Your videos are configured to load from: `gs://misa-rome-portfolio.firebasestorage.app`

## 📁 Required File Structure in Firebase Storage

Upload your videos to Firebase Storage with this exact structure:

```
videos/
└── MisaRome/
    ├── MAIN_optimized.mp4          (Hero video)
    ├── FIRST_1_optimized.mp4       (Featured video)
    ├── RECAP_DONE_optimized.mp4
    ├── FOR_INSTA_optimized.mp4
    ├── this_is_me_optimized.mp4
    ├── we_ready_optimized.mp4
    ├── Karen_1_optimized.mp4
    ├── como_david_optimized.mp4
    ├── 4k_version_optimized.mp4
    ├── grade_3_optimized.mp4
    ├── me_optimized.mp4
    ├── clip_6_optimized.mp4
    ├── RECAP_NO_TITLES_optimized.mp4
    └── rugged_optimized.mp4
```

## 🚀 Steps to Upload Videos

### Method 1: Using Firebase Console (Easiest)
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your `misa-rome-portfolio` project
3. Go to Storage in the left sidebar
4. Click "Upload files" or "Upload folder"
5. Upload all videos maintaining the folder structure above
6. **Important**: Make files publicly accessible:
   - Select each video file
   - Click "Access Token" tab
   - Generate a new token or make public

### Method 2: Using Firebase CLI
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init storage

# Upload videos
firebase storage:upload ./public/videos/MisaRome/ gs://misa-rome-portfolio.firebasestorage.app/videos/MisaRome/
```

### Method 3: Using gsutil (Google Cloud)
```bash
# Install Google Cloud CLI
# Then authenticate and upload
gsutil -m cp -r ./public/videos/MisaRome gs://misa-rome-portfolio.firebasestorage.app/videos/
```

## 🔧 Environment Variables Setup

1. Copy `firebase.env.example` to `.env.local`
2. Fill in your Firebase config values from Firebase Console > Project Settings
3. The storage bucket is already configured as: `misa-rome-portfolio.firebasestorage.app`

## 🎯 Video URL Format

Videos will be accessible at URLs like:
```
https://firebasestorage.googleapis.com/v0/b/misa-rome-portfolio.firebasestorage.app/o/videos%2FMisaRome%2FMAIN_optimized.mp4?alt=media
```

## ✅ Testing

After uploading, your website will automatically load videos from Firebase Storage instead of local files.

## 💰 Cost Estimation

For ~21GB of video files:
- Storage: ~$0.50/month
- Bandwidth: Depends on usage (first 1GB/day is free)
- Very cost-effective for a portfolio website!
