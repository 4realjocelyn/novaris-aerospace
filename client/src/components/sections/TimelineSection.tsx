import React from 'react';

/**
 * Timeline Section Component
 * Design: Professional project development timeline
 */
export default function TimelineSection() {
  const phases = [
    {
      id: 1,
      phase: 'Phase 1',
      title: 'Design & Planning',
      description: 'Conceptualization, CAD modeling, and initial design reviews.',
      status: 'In Progress',
      date: 'Jan - Feb 2026',
      icon: '📐',
    },
    {
      id: 2,
      phase: 'Phase 2',
      title: 'Component Sourcing',
      description: 'Procuring rocket engines, avionics, and structural materials.',
      status: 'Upcoming',
      date: 'Mar 2026',
      icon: '🔧',
    },
    {
      id: 3,
      phase: 'Phase 3',
      title: 'Assembly & Build',
      description: 'Constructing the rocket structure and integrating all systems.',
      status: 'Upcoming',
      date: 'Apr - May 2026',
      icon: '🚀',
    },
    {
      id: 4,
      phase: 'Phase 4',
      title: 'Testing & Validation',
      description: 'Ground tests, system checks, and pre-launch verification.',
      status: 'Upcoming',
      date: 'Jun 2026',
      icon: '✓',
    },
    {
      id: 5,
      phase: 'Phase 5',
      title: 'Launch',
      description: 'L1 Certification launch - Live streaming and real-time telemetry.',
      status: 'Upcoming',
      date: 'Jul 2026',
      icon: '🎯',
    },
  ];

  return (
    <section id="timeline" className="relative py-32 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Project Progress</span>
          <h2 className="cinematic-heading text-4xl md:text-5xl mt-4 mb-6">
            Development
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Timeline
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Follow our journey from initial design through launch. Each phase represents a critical milestone in our L1 certification project.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="cinematic-card hover-glow">
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900" />

                    {/* Content */}
                    <div className="flex gap-4">
                      <div className="text-3xl">{phase.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-blue-400 font-semibold text-sm">{phase.phase}</span>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            phase.status === 'In Progress'
                              ? 'bg-green-500 bg-opacity-20 text-green-400'
                              : 'bg-slate-700 text-slate-300'
                          }`}>
                            {phase.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                        <p className="text-slate-300 text-sm mb-3">{phase.description}</p>
                        <span className="text-slate-400 text-xs">{phase.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
