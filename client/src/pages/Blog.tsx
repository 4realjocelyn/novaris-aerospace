import React, { useState } from 'react';

/**
 * Blog Page Component
 * Design: Cinematic blog listing and article showcase
 */
export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'Designing the NOVARIS-L1: Initial Concepts',
      excerpt: 'In this post, we explore the initial design phase of our Level 1 certification rocket, including CAD modeling and structural analysis.',
      category: 'Design',
      date: 'May 15, 2026',
      author: 'Team Lead',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663666297408/W6GtBouUUUaTgbHUktqoJw/novaris-rocket-launch-8DJGwUrGgMW32pAGfRfkcX.webp',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'Choosing the Right Motor: H-Class Selection',
      excerpt: 'A detailed breakdown of our motor selection process, including thrust curves, burn time analysis, and certification requirements.',
      category: 'Engineering',
      date: 'May 10, 2026',
      author: 'Propulsion Specialist',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663666297408/W6GtBouUUUaTgbHUktqoJw/novaris-satellite-3AFeNSmtjnADkh3PJCrrRP.webp',
      readTime: '7 min',
    },
    {
      id: 3,
      title: 'Avionics Integration: Building Our Flight Computer',
      excerpt: 'Learn how we integrated our custom avionics system with real-time telemetry, altitude tracking, and data logging capabilities.',
      category: 'Avionics',
      date: 'May 5, 2026',
      author: 'Avionics Engineer',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663666297408/W6GtBouUUUaTgbHUktqoJw/novaris-space-station-SnkDWJQYGH828uJBhqhKvR.webp',
      readTime: '8 min',
    },
    {
      id: 4,
      title: 'Recovery System Testing: Parachute Deployment',
      excerpt: 'We test and validate our parachute recovery system to ensure safe and reliable descent after apogee.',
      category: 'Testing',
      date: 'Apr 28, 2026',
      author: 'Structures Engineer',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663666297408/W6GtBouUUUaTgbHUktqoJw/novaris-hero-earth-cFkGRbzwrKLBeHwDxrrRw3.webp',
      readTime: '6 min',
    },
  ];

  const categories = ['all', 'Design', 'Engineering', 'Avionics', 'Testing'];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category === selectedCategory );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-20">
      {/* Header */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Latest Updates</span>
            <h1 className="cinematic-heading text-5xl md:text-6xl mt-4">
              Blog &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Articles
              </span>
            </h1>
            <p className="text-slate-400 text-lg mt-6 max-w-2xl">
              Follow our journey through detailed articles on design, engineering, testing, and project updates.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'border border-slate-700 text-slate-300 hover:border-blue-400'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article, index) => (
              <article
                key={article.id}
                className={`feature-card cursor-pointer group ${index === 0 ? 'stagger-1' : index === 1 ? 'stagger-2' : index === 2 ? 'stagger-3' : 'stagger-4'} fade-in-up`}
              >
                {/* Article Image */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50" />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-700 text-xs text-slate-400">
                    <div className="flex gap-2">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
