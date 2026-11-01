import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '../data/profile.js';
import useActiveSection from '../hooks/useActiveSection.js';

const ids = navItems.map(([id]) => id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sage-light/40 bg-offwhite/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-semibold text-sage-deep">{profile.name.split(' ')[0]}<span className="text-glow-muted">.</span></a>
        <ul className="hidden gap-1 lg:flex">
          {navItems.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? 'true' : undefined}
                className={`group relative px-3 py-2 text-sm transition-colors ${active === id ? 'text-sage-deep font-semibold' : 'text-walnut hover:text-sage-deep'}`}>
                {label}
                <span className={`absolute inset-x-3 bottom-1 h-0.5 origin-left rounded bg-glow transition-transform duration-300 ${active === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </a>
            </li>
          ))}
        </ul>
        <button className="rounded-lg p-2 text-walnut-deep lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-sage-light/40 bg-offwhite px-5 pb-4 lg:hidden">
          {navItems.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}
                className={`block py-3 text-base ${active === id ? 'font-semibold text-sage-deep' : 'text-walnut'}`}>{label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
