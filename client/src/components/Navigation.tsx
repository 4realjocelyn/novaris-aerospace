import React, { useState } from 'react';
import { Link } from 'wouter';

/**
 * Navigation Component
 * Cinematic, professional aerospace aesthetic
 * Design: Minimalist dark blue with bright blue accents
 */
export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'timeline', label: 'Timeline', href: '/#timeline' },
    { id: 'team', label: 'Team', href: '/#team' },
    { id: 'specs', label: 'Specs', href: '/#specs' },
    { id: 'blog', label: 'Blog', href: '/blog' },
    { id: 'launch', label: 'Live Launch', href: '/launch' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700 bg-slate-900 bg-opacity-80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">N</span>
              </div>
              <div className="text-white font-bold text-lg">NOVARIS</div>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <button
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/launch">
            <button className="cinematic-btn text-sm">
              Live Launch
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
