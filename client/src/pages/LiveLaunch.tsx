import React, { useState, useEffect } from 'react';

/**
 * Live Launch Page Component
 * Design: Real-time mission control interface
 */
export default function LiveLaunch() {
  const [countdownTime, setCountdownTime] = useState(300); // 5 minutes
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownTime((prev) => {
        if (prev <= 0) {
          setIsLive(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const telemetry = [
    { label: 'Altitude', value: '0 M', unit: 'm' },
    { label: 'Velocity', value: '0 M/S', unit: 'm/s' },
    { label: 'Acceleration', value: '0 G', unit: 'g' },
    { label: 'Temperature', value: '25 °C', unit: '°C' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-20">
      {/* Live Stream Section */}
      <section className="relative py-12 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-slate-600'}`} />
              <span className="text-sm font-semibold uppercase tracking-widest">
                {isLive ? 'LIVE NOW' : 'LAUNCH COUNTDOWN'}
              </span>
            </div>
            <h1 className="cinematic-heading text-4xl md:text-5xl">
              NOVARIS-L1
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Launch Event
              </span>
            </h1>
          </div>

          {/* Video Stream */}
          <div className="relative w-full bg-black rounded-lg overflow-hidden mb-8 aspect-video border border-slate-700">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-black">
              <div className="text-center">
                <div className="text-6xl mb-4">📹</div>
                <p className="text-slate-400">Live stream will appear here</p>
                <p className="text-slate-500 text-sm mt-2">Embed your streaming URL (YouTube, Twitch, etc.)</p>
              </div>
            </div>
          </div>

          {/* Countdown & Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Countdown */}
            <div className="cinematic-card text-center">
              <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest">Time to Launch</p>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-mono">
                {formatTime(countdownTime)}
              </div>
              <p className="text-slate-500 text-xs mt-2">{isLive ? 'LAUNCH IN PROGRESS' : 'Countdown active'}</p>
            </div>

            {/* Mission Status */}
            <div className="cinematic-card">
              <p className="text-slate-400 text-sm mb-4 uppercase tracking-widest">Mission Status</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Systems Check</span>
                  <span className="text-green-400 font-semibold">✓ NOMINAL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Weather</span>
                  <span className="text-green-400 font-semibold">✓ CLEAR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Range Safety</span>
                  <span className="text-green-400 font-semibold">✓ GO</span>
                </div>
              </div>
            </div>

            {/* Launch Location */}
            <div className="cinematic-card">
              <p className="text-slate-400 text-sm mb-4 uppercase tracking-widest">Launch Site</p>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-500 text-xs">Location</p>
                  <p className="text-white font-semibold">TBD</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs">Date & Time</p>
                  <p className="text-white font-semibold">TBD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Telemetry */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="cinematic-heading text-3xl mb-8">
            Real-time
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Telemetry
            </span>
          </h2>

          {/* Telemetry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {telemetry.map((item, index) => (
              <div
                key={index}
                className={`cinematic-card text-center hover-glow ${index === 0 ? 'stagger-1' : index === 1 ? 'stagger-2' : index === 2 ? 'stagger-3' : 'stagger-4'} fade-in-up`}
              >
                <p className="stat-label mb-2">{item.label}</p>
                <div className="stat-value">{item.value}</div>
                <p className="text-slate-500 text-xs mt-2">{item.unit}</p>
              </div>
            ))}
          </div>

          {/* Charts Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="cinematic-card">
              <h3 className="text-lg font-bold text-white mb-4">Altitude Profile</h3>
              <div className="h-48 flex items-center justify-center text-slate-400">
                <p>Chart will display live altitude data</p>
              </div>
            </div>

            <div className="cinematic-card">
              <h3 className="text-lg font-bold text-white mb-4">Velocity Profile</h3>
              <div className="h-48 flex items-center justify-center text-slate-400">
                <p>Chart will display live velocity data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Info */}
      <section className="py-12 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="cinematic-heading text-3xl mb-8">Mission Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cinematic-card">
              <h3 className="text-xl font-bold text-white mb-4">Objectives</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Achieve Level 1 Certification altitude</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Validate avionics and telemetry systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Demonstrate safe recovery procedures</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Collect flight data for analysis</span>
                </li>
              </ul>
            </div>

            <div className="cinematic-card">
              <h3 className="text-xl font-bold text-white mb-4">Safety Protocols</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Pre-launch systems verification</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Range safety officer oversight</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Real-time flight monitoring</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Emergency abort procedures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
