import React from 'react';

/**
 * Team Section Component
 * Design: Professional team member showcase
 */
export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: 'Team Lead',
      role: 'Project Director',
      bio: 'Leads the overall project strategy and mission planning.',
      expertise: ['Project Management', 'Systems Design'],
    },
    {
      id: 2,
      name: 'Structures Engineer',
      role: 'Lead Structures',
      bio: 'Designs and oversees the rocket airframe and structural integrity.',
      expertise: ['CAD Design', 'Structural Analysis'],
    },
    {
      id: 3,
      name: 'Propulsion Specialist',
      role: 'Propulsion Lead',
      bio: 'Manages engine selection, integration, and performance optimization.',
      expertise: ['Rocket Engines', 'Thrust Vectoring'],
    },
    {
      id: 4,
      name: 'Avionics Engineer',
      role: 'Avionics Lead',
      bio: 'Develops telemetry systems, flight computers, and data acquisition.',
      expertise: ['Embedded Systems', 'Telemetry'],
    },
  ];

  return (
    <section id="team" className="relative py-32 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Our Team</span>
          <h2 className="cinematic-heading text-4xl md:text-5xl mt-4 mb-6">
            Meet the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Experts
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A dedicated team of engineers and enthusiasts working together to achieve L1 certification.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={member.id}
              className={`feature-card ${index === 0 ? 'stagger-1' : index === 1 ? 'stagger-2' : index === 2 ? 'stagger-3' : 'stagger-4'} fade-in-up`}
            >
              {/* Avatar Placeholder */}
              <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍🚀</span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-blue-400 font-semibold text-sm">{member.role}</p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-700">
                  {member.expertise.map((exp, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-500 bg-opacity-20 text-blue-300 px-2 py-1 rounded"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
