import React, { useState, useEffect } from 'react';

/**
 * Hero Section Component
 * Design: Cinematic, professional, minimalistic aerospace aesthetic
 * Focus: L1 Certification Rocket Project
 */
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663666297408/W6GtBouUUUaTgbHUktqoJw/novaris-hero-earth-cFkGRbzwrKLBeHwDxrrRw3.webp )',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-start py-32">
        <div className={`max-w-2xl ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          {/* Subtitle */}
          <div className="mb-6 inline-block">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
              Level 1 Certification Project
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="cinematic-heading text-5xl md:text-7xl mb-6 leading-tight">
            Building the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
              Future
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            NOVARIS AEROSPACE is documenting the complete journey of building and launching our Level 1 certification rocket. From design to launch, follow our team's progress in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="cinematic-btn">
              View Timeline
            </button>
            <button className="px-6 py-3 rounded-lg border border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
              Meet the Team
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-slate-400 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
