import React from 'react';
import { motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { SpotifyIcon, AppleMusicIcon, YouTubeIcon, LetterboxdIcon } from './components/Icons';
import ProfileSection from './components/ProfileSection';
import SocialLink from './components/SocialLink';
import DarkModeToggle from './components/DarkModeToggle';

const socialLinks = [
  { icon: SpotifyIcon, text: 'Spotify', href: 'https://open.spotify.com/user/fyzgrz05x0s9tkwexcnuietgw' },
  { icon: AppleMusicIcon, text: 'Apple Music', href: 'https://music.apple.com/profile/tnyebuah' },
  { icon: YouTubeIcon, text: 'YouTube', href: 'https://www.youtube.com/channel/UCUa9h9AKlhp_-jA5BiImuyA' },
  { icon: LetterboxdIcon, text: 'Letterboxd', href: 'https://letterboxd.com/tny70/' },
];

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 relative">
      {/* Dark Mode Toggle */}
      <div className="absolute top-6 right-6">
        <DarkModeToggle />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-2xl space-y-12">
        <ProfileSection />

        {/* Social Links Row */}
        <motion.div
          className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-6 sm:gap-y-4 items-center justify-items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </motion.div>
      </main>
      <Analytics />
    </div>
  );
}

export default App;
