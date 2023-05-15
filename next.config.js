/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    googleApiKey: process.env.GOOGLE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectID: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    senderID: process.env.SENDER_ID,
    firebaseAppId: process.env.FIREBASE_APP,
    measurementID: process.env.MEASUREMENT_ID,
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;