import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import TimelineSection from '@/components/sections/TimelineSection';
import TeamSection from '@/components/sections/TeamSection';
import RocketSpecsSection from '@/components/sections/RocketSpecsSection';
import Navigation from '@/components/Navigation';

/**
 * NOVARIS AEROSPACE | Level 1 Certification Rocket Project
 * 
 * Design Philosophy: Cinematic, Professional, Minimalistic
 * - Large immersive hero imagery
 * - Dark blue/navy color palette with bright blue accents
 * - Smooth animations and transitions
 * - Generous whitespace and typography
 * - Outstanding visual hierarchy
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Project Timeline */}
      <TimelineSection />

      {/* Team Section */}
      <TeamSection />

      {/* Rocket Specifications */}
      <RocketSpecsSection />

      {/* Footer */}
      <footer id="about" className="border-t border-slate-700 bg-slate-950 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-sm">N</span>
                </div>
                <span className="text-white font-bold">NOVARIS AEROSPACE</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Documenting our Level 1 certification rocket project from design through launch.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#timeline" className="hover:text-blue-400 transition-colors">Timeline</a></li>
                <li><a href="#team" className="hover:text-blue-400 transition-colors">Team</a></li>
                <li><a href="#specs" className="hover:text-blue-400 transition-colors">Specs</a></li>
                <li><a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
            <p>© 2026 NOVARIS AEROSPACE. Level 1 Certification Project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
