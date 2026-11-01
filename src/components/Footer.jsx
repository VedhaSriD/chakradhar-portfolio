import SocialLinks from './SocialLinks.jsx';
import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="bg-ink text-sage-light">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm">© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and Framer Motion.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
