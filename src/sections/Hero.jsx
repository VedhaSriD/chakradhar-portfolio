import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { profile } from '../data/profile.js';
import SocialLinks from '../components/SocialLinks.jsx';

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 90]);
  const y2 = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -60]);
  const fade = (d) => (reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d } });
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-16 text-offwhite">
      <div className="grid-pattern absolute inset-0" aria-hidden="true" />
      <div className="bg-shift absolute inset-0 bg-gradient-to-br from-sage-deep/30 via-transparent to-walnut/30" aria-hidden="true" />
      <motion.div style={{ y: y1 }} className="absolute -right-24 top-24 h-72 w-72 rounded-full border border-sage/40 sm:h-96 sm:w-96" aria-hidden="true">
        <div className="animate-drift absolute inset-8 rounded-full border border-glow/40" />
        <div className="absolute inset-20 rotate-45 border border-sage-light/30" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-16 left-[8%] h-24 w-24 rotate-12 rounded-xl border border-glow/30" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <motion.p {...fade(0)} className="mb-4 font-serif text-lg italic text-glow-soft">{profile.name}</motion.p>
        <motion.h1 {...fade(0.1)} className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Exploring Technology. Understanding Security. <span className="text-glow">Building What&rsquo;s Next.</span>
        </motion.h1>
        <motion.p {...fade(0.2)} className="mt-6 max-w-xl text-lg text-sage-light">{profile.headline}</motion.p>
        <motion.div {...fade(0.3)} className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#interests" className="btn btn-ghost">Explore My Interests <ArrowDown size={16} /></a>
          {profile.resumeUrl && <a href={profile.resumeUrl} download className="btn btn-ghost"><Download size={16} /> Download Resume</a>}
        </motion.div>
        <motion.div {...fade(0.4)} className="mt-10"><SocialLinks /></motion.div>
      </div>
    </section>
  );
}
