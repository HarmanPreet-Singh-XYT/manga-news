'use client'
import React, { useState, useEffect } from 'react';
import { Play, Star, TrendingUp, Calendar, User, Eye, Heart, Share2, Search, Menu, X, Bell, Flame } from 'lucide-react';

const MangaNewsSite = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animatedElements, setAnimatedElements] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedElements(prev => ({
        ...prev,
        pulse: !prev.pulse
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const featuredNews = [
    {
      id: 1,
      title: "DEMON SLAYER SEASON 4 OFFICIALLY ANNOUNCED",
      category: "ANIME",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      views: "2.3M",
      likes: "45K",
      isHot: true
    },
    {
      id: 2,
      title: "ONE PIECE CHAPTER 1100 BREAKS INTERNET",
      category: "MANGA",
      image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&h=400&fit=crop",
      views: "1.8M",
      likes: "32K",
      isHot: true
    },
    {
      id: 3,
      title: "ATTACK ON TITAN FINAL MOVIE TRAILER",
      category: "MOVIE",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      views: "987K",
      likes: "28K",
      isHot: false
    }
  ];

  const trendingTopics = [
    "Demon Slayer", "One Piece", "Jujutsu Kaisen", "Attack on Titan", 
    "Naruto", "Dragon Ball", "My Hero Academia", "Chainsaw Man"
  ];

  const quickNews = [
    { title: "Studio Ghibli announces new project", time: "2h ago", category: "NEWS" },
    { title: "Crunchyroll Awards 2024 winners revealed", time: "4h ago", category: "AWARDS" },
    { title: "Manga sales hit record high in 2024", time: "6h ago", category: "INDUSTRY" },
    { title: "Tokyo Anime Fair dates announced", time: "8h ago", category: "EVENTS" }
  ];

  const themeClasses = darkMode 
    ? "bg-gray-900 text-white" 
    : "bg-blue-50 text-gray-900";

  const accentColor = darkMode ? "text-pink-500" : "text-violet-600";
  const accentBg = darkMode ? "bg-pink-500" : "bg-violet-600";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const borderColor = darkMode ? "border-pink-500" : "border-violet-500";

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Header */}
      <header className={`${cardBg} shadow-lg border-b-4 ${borderColor} sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 ${accentBg} rounded-lg flex items-center justify-center transform rotate-12 shadow-lg`}>
                <span className="text-white font-black text-xl">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-black uppercase tracking-wider">
                  ANIME<span className={accentColor}>HUB</span>
                </h1>
                <div className="flex items-center space-x-1">
                  <div className={`w-2 h-2 ${accentBg} rounded-full animate-pulse`}></div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-70">
                    LIVE NEWS
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['NEWS', 'ANIME', 'MANGA', 'REVIEWS', 'EVENTS'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-200 relative group"
                >
                  {item}
                  <div className={`absolute -bottom-1 left-0 w-0 h-0.5 ${accentBg} group-hover:w-full transition-all duration-300`}></div>
                </a>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              <button className={`p-2 rounded-full hover:${accentBg} hover:text-white transition-all duration-200 hover:-translate-y-1`}>
                <Search className="w-5 h-5" />
              </button>
              <button className={`p-2 rounded-full hover:${accentBg} hover:text-white transition-all duration-200 hover:-translate-y-1 relative`}>
                <Bell className="w-5 h-5" />
                <div className={`absolute -top-1 -right-1 w-3 h-3 ${accentBg} rounded-full animate-pulse`}></div>
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-4 py-2 rounded-full font-bold text-sm ${accentBg} text-white hover:scale-105 transition-transform duration-200 shadow-lg uppercase tracking-wider`}
              >
                {darkMode ? 'LIGHT' : 'DARK'}
              </button>
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${cardBg} shadow-lg border-b-2 ${borderColor}`}>
          <div className="px-4 py-4 space-y-4">
            {['NEWS', 'ANIME', 'MANGA', 'REVIEWS', 'EVENTS'].map((item) => (
              <a
                key={item}
                href="#"
                className="block font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className={`px-6 py-2 ${accentBg} text-white rounded-full font-black uppercase tracking-widest text-sm shadow-lg transform -rotate-2`}>
                🔥 BREAKING NEWS
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 text-shadow-lg">
              LATEST ANIME &<br />
              <span className={accentColor}>MANGA NEWS</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-80 max-w-3xl mx-auto">
              Stay updated with the hottest anime releases, manga chapters, and industry news
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-8 py-4 ${accentBg} text-white rounded-full font-black uppercase tracking-wider hover:scale-105 transition-transform duration-200 shadow-lg flex items-center justify-center space-x-2`}>
                <Flame className="w-5 h-5" />
                <span>HOT NEWS</span>
              </button>
              <button className={`px-8 py-4 border-2 ${borderColor} rounded-full font-black uppercase tracking-wider hover:scale-105 transition-transform duration-200 hover:${accentBg} hover:text-white`}>
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics Bar */}
      <section className={`${cardBg} border-y-2 ${borderColor} py-4 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <TrendingUp className={`w-5 h-5 ${accentColor}`} />
              <span className="font-black uppercase tracking-wider text-sm">TRENDING:</span>
            </div>
            <div className="flex space-x-6 animate-pulse">
              {trendingTopics.map((topic, index) => (
                <span
                  key={index}
                  className={`text-sm font-bold hover:${accentColor} cursor-pointer transition-colors duration-200 whitespace-nowrap`}
                >
                  #{topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured News Grid */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-black uppercase tracking-wider flex items-center space-x-3">
                  <Flame className={`w-8 h-8 ${accentColor} animate-pulse`} />
                  <span>FEATURED NEWS</span>
                </h3>
                <button className={`text-sm font-bold uppercase tracking-wider ${accentColor} hover:underline`}>
                  VIEW ALL
                </button>
              </div>

              <div className="grid gap-6">
                {featuredNews.map((news, index) => (
                  <article
                    key={news.id}
                    className={`${cardBg} rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 ${index === 0 ? borderColor : 'border-transparent'} group cursor-pointer`}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 relative overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        {news.isHot && (
                          <div className={`absolute top-4 left-4 px-3 py-1 ${accentBg} text-white text-xs font-black uppercase tracking-wider rounded-full animate-pulse`}>
                            🔥 HOT
                          </div>
                        )}
                        <div className={`absolute top-4 right-4 px-3 py-1 ${cardBg} text-xs font-bold uppercase tracking-wider rounded-full opacity-90`}>
                          {news.category}
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h4 className="text-xl md:text-2xl font-black uppercase tracking-wider mb-4 group-hover:text-pink-500 transition-colors duration-200">
                          {news.title}
                        </h4>
                        <p className="opacity-70 mb-6 line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span className="font-bold">{news.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span className="font-bold">{news.likes}</span>
                            </div>
                          </div>
                          <button className={`p-2 rounded-full hover:${accentBg} hover:text-white transition-all duration-200 hover:-translate-y-1`}>
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick News */}
            <section className={`${cardBg} rounded-lg p-6 shadow-lg border-2 ${borderColor}`}>
              <h4 className="text-xl font-black uppercase tracking-wider mb-6 flex items-center space-x-2">
                <div className={`w-3 h-3 ${accentBg} rounded-full animate-pulse`}></div>
                <span>QUICK UPDATES</span>
              </h4>
              <div className="space-y-4">
                {quickNews.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 border-l-4 border-pink-500 hover:bg-opacity-50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${accentColor}`}>
                        {item.category}
                      </span>
                      <span className="text-xs opacity-60">{item.time}</span>
                    </div>
                    <h5 className="font-bold group-hover:text-pink-500 transition-colors duration-200">
                      {item.title}
                    </h5>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className={`${cardBg} rounded-lg p-6 shadow-lg border-2 ${borderColor} text-center`}>
              <div className={`w-16 h-16 ${accentBg} rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce`}>
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-black uppercase tracking-wider mb-4">
                NEVER MISS<br />
                <span className={accentColor}>AN UPDATE</span>
              </h4>
              <p className="opacity-70 mb-6 text-sm">
                Get the latest anime and manga news delivered to your inbox
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-full border-2 ${borderColor} focus:outline-none focus:ring-2 focus:ring-pink-500 bg-transparent font-bold text-center`}
                />
                <button className={`w-full px-6 py-3 ${accentBg} text-white rounded-full font-black uppercase tracking-wider hover:scale-105 transition-transform duration-200 shadow-lg`}>
                  SUBSCRIBE NOW
                </button>
              </div>
            </section>

            {/* Social Stats */}
            <section className={`${cardBg} rounded-lg p-6 shadow-lg border-2 ${borderColor}`}>
              <h4 className="text-xl font-black uppercase tracking-wider mb-6 text-center">
                JOIN THE COMMUNITY
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 border-2 border-pink-500 rounded-lg">
                  <div className="text-2xl font-black text-pink-500">2.5M+</div>
                  <div className="text-xs font-bold uppercase tracking-wider">FOLLOWERS</div>
                </div>
                <div className="text-center p-4 border-2 border-violet-500 rounded-lg">
                  <div className="text-2xl font-black text-violet-500">150K+</div>
                  <div className="text-xs font-bold uppercase tracking-wider">SUBSCRIBERS</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`${cardBg} border-t-4 ${borderColor} mt-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className={`w-12 h-12 ${accentBg} rounded-lg flex items-center justify-center transform rotate-12 shadow-lg`}>
                <span className="text-white font-black text-xl">A</span>
              </div>
              <h1 className="text-2xl font-black uppercase tracking-wider">
                ANIME<span className={accentColor}>HUB</span>
              </h1>
            </div>
            <p className="opacity-70 mb-6 max-w-2xl mx-auto">
              Your ultimate destination for anime and manga news, reviews, and community discussions. 
              Stay connected with the latest from the world of Japanese animation.
            </p>
            <div className="flex justify-center space-x-6">
              {['Twitter', 'Discord', 'YouTube', 'Instagram'].map((social) => (
                <button
                  key={social}
                  className={`px-4 py-2 border-2 ${borderColor} rounded-full font-bold text-sm hover:${accentBg} hover:text-white transition-all duration-200 hover:-translate-y-1 uppercase tracking-wider`}
                >
                  {social}
                </button>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 opacity-60 text-sm">
              <p>&copy; 2024 AnimeHub. All rights reserved. Made with ❤️ for anime fans worldwide.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MangaNewsSite;