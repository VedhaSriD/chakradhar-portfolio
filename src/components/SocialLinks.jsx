import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile.js';

const links = [
  { label: 'GitHub', href: profile.github, Icon: Github, external: true },
  { label: 'LinkedIn', href: profile.linkedin, Icon: Linkedin, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail, external: false },
];

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex gap-3 ${className}`}>
      {links.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-sage-light/60 transition duration-200 hover:-translate-y-0.5 hover:border-glow hover:text-glow active:scale-90"
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
