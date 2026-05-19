import React from 'react';

/**
 * Rocket Specifications Section Component
 * Design: Technical specs showcase
 */
export default function RocketSpecsSection() {
  const specs = [
    { category: 'Dimensions', items: [
      { label: 'Height', value: '1.2 m' },
      { label: 'Diameter', value: '76 mm' },
      { label: 'Dry Mass', value: '1.5 kg' },
    ]},
    { category: 'Performance', items: [
      { label: 'Max Altitude', value: '1,000 m' },
      { label: 'Apogee Velocity', value: '150 m/s' },
      { label: 'Burn Time', value: '3.5 s' },
    ]},
    { category: 'Systems', items: [
      { label: 'Engine', value: 'H123-W' },
      { label: 'Recovery', value: 'Parachute' },
      { label: 'Telemetry', value: 'Real-time' },
    ]},
  ];

  return (
    <section id="specs" className="relative py-32 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Technical Details</span>
          <h2 className="cinematic-heading text-4xl md:text-5xl mt-4 mb-6">
            Rocket
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Specifications
            </span>
          </h2>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specs.map((specGroup, groupIndex) => (
            <div
              key={groupIndex}
              className={`cinematic-card hover-glow ${groupIndex === 0 ? 'stagger-1' : groupIndex === 1 ? 'stagger-2' : 'stagger-3'} fade-in-up`}
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-slate-700">
                {specGroup.category}
              </h3>
              
              <div className="space-y-4">
                {specGroup.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="stat-label">{item.label}</span>
                    <span className="text-slate-200 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Rocket Visualization */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-slate-900 rounded-lg p-12 border border-blue-800">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Rocket Image Placeholder */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-32 h-64 bg-gradient-to-b from-slate-600 to-slate-800 rounded-full flex items-center justify-center text-6xl">
                🚀
              </div>
            </div>

            {/* Description */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">NOVARIS-L1</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Our Level 1 certification rocket is designed for optimal performance and reliability. Built with precision engineering and tested rigorously to ensure successful flight and recovery.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span className="text-slate-300">Certified motor H-class</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span className="text-slate-300">Advanced recovery system</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span className="text-slate-300">Real-time telemetry tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
