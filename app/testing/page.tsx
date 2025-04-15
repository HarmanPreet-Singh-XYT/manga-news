'use client'
import { useState, useEffect } from 'react';
import { ChevronRight, Star, Play,Flame as Fire, Sparkles, Heart } from 'lucide-react';

export default function AnimeMangaCollections() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Anime-inspired color palette - more vibrant and energetic
  const colors = {
    primary: isDarkMode ? 'from-fuchsia-600 to-purple-600' : 'from-fuchsia-500 to-purple-600',
    secondary: isDarkMode ? 'from-cyan-400 to-blue-600' : 'from-cyan-300 to-blue-500',
    accent: isDarkMode ? 'from-rose-500 to-orange-500' : 'from-rose-400 to-orange-400',
    highlight: isDarkMode ? 'from-amber-400 to-yellow-500' : 'from-amber-300 to-yellow-400'
  };

  const collections = [
    {
      title: "ISEKAI EXPLOSION",
      count: "24 titles",
      description: "Transport to another world with these mind-blowing adventures!",
      tags: ["Fantasy", "Action"],
      color: colors.primary,
      icon: <Sparkles className="w-6 h-6" />,
      image: "/api/placeholder/400/240"
    },
    {
      title: "BATTLE ARENA",
      count: "32 titles",
      description: "Epic fights, legendary warriors, and ultimate power!",
      tags: ["Action", "Shonen"],
      color: colors.secondary,
      icon: <Fire className="w-6 h-6" />,
      image: "/api/placeholder/401/240"
    },
    {
      title: "HEART SKIP",
      count: "18 titles",
      description: "Fall in love with these unforgettable romance stories!",
      tags: ["Romance", "Drama"],
      color: colors.accent,
      icon: <Heart className="w-6 h-6" />,
      image: "/api/placeholder/402/240"
    },
    {
      title: "HIDDEN TREASURES",
      count: "15 titles",
      description: "Discover amazing series that flew under the radar!",
      tags: ["Underrated", "Diverse"],
      color: colors.highlight,
      icon: <Star className="w-6 h-6" />,
      image: "/api/placeholder/403/240"
    }
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Manga-style background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        
        {/* Speed lines */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-gray-700 opacity-10"
            style={{
              height: '1px',
              width: `${Math.random() * 200 + 100}px`,
              transform: `rotate(${Math.random() * 180}deg)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          ></div>
        ))}
      </div>
      
      {/* Explosive section title */}
      <div className="relative z-10 mb-12 text-center">
        <div className="inline-block relative">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight transform -skew-x-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-600 pb-2">
            コレクション
          </h2>
          <div className="absolute -bottom-2 -right-6 w-12 h-12 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -top-2 -left-6 w-8 h-8 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        </div>
        
        <div className="flex items-center justify-center mt-1">
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          <Star className="w-6 h-6 mx-2 text-yellow-400" fill="currentColor" />
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>
        
        <h3 className="text-xl mt-2 font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          EXPLOSIVE COLLECTIONS
        </h3>
      </div>
      
      {/* Dynamic Collection Grid with Action Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {collections.map((collection, index) => (
          <div 
            key={collection.title}
            className="group relative overflow-hidden rounded-xl bg-opacity-90 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Dynamic Background with Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-90 transition-all duration-500`}></div>
            
            {/* Action Lines Animation on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute bg-white"
                  style={{
                    height: '2px',
                    width: `${Math.random() * 100 + 50}%`,
                    transform: `rotate(${Math.random() * 90 - 45}deg)`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100 - 50}%`,
                    opacity: 0.7
                  }}
                ></div>
              ))}
            </div>
            
            {/* Collection Image with Mask Effect */}
            <div className="relative pt-4 px-4">
              <div className="relative overflow-hidden rounded-lg transform transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full aspect-video object-cover"
                />
                
                {/* Overlay Icon with Pulse Effect */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-center backdrop-filter backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white" fill="white" />
                  </div>
                </div>
                
                {/* Explosion Animation on Active */}
                {activeIndex === index && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white animate-ping"
                        style={{
                          animationDuration: `${0.8 + Math.random() * 0.4}s`,
                          transform: `rotate(${i * 45}deg) translateX(${30 + Math.random() * 20}px)`,
                          opacity: 0.8
                        }}
                      ></div>
                    ))}
                  </div>
                )}
                
                {/* Dynamic Tag Positioning */}
                <div className="absolute -bottom-2 -right-2 transform rotate-12">
                  <div className={`rounded-lg py-1 px-3 bg-gradient-to-r ${collection.color} text-white font-bold text-xs uppercase tracking-wider shadow-lg`}>
                    {collection.count}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Collection Info with Dynamic Styling */}
            <div className="relative p-4 text-white z-10">
              {/* Icon Badge */}
              <div className="absolute -top-8 right-4 transform -rotate-12 bg-white rounded-full p-2 shadow-lg">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${collection.color} flex items-center justify-center`}>
                  {collection.icon}
                </div>
              </div>
              
              <h3 className="font-black text-xl tracking-tight uppercase leading-tight mb-1">
                {collection.title}
              </h3>
              
              <p className="text-sm text-white text-opacity-90 mb-3">
                {collection.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {collection.tags.map(tag => (
                  <span key={tag} className="inline-block px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs font-semibold backdrop-filter backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Action Button with Dramatic Effect */}
              <button className="w-full py-2 px-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-white 
                font-bold uppercase tracking-wider transition-all duration-300 backdrop-filter backdrop-blur-sm
                border border-white border-opacity-30 flex items-center justify-center group-hover:scale-105">
                EXPLORE
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Corner Flash Effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white opacity-0 group-hover:opacity-10 rotate-45 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
          </div>
        ))}
      </div>
      
      {/* Manga-style View All Button */}
      <div className="mt-10 text-center relative z-10">
        <a href="#" className="inline-block group">
          <div className="relative overflow-hidden px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full 
            text-white font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1">
            <span className="relative z-10 flex items-center">
              VIEW ALL COLLECTIONS
              <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            {/* Speedlines on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute h-full w-1 bg-white"
                  style={{
                    left: `${i * 10}%`,
                    opacity: 0.1 + (i % 3) * 0.05,
                    transform: 'skewX(-20deg)'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </a>
      </div>
      
      {/* Manga-Style Decorative Bottom Border */}
      <div className="relative mt-20 opacity-70">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <Star size={20} className="text-yellow-400" fill="currentColor" />
            <div className="absolute top-0 left-0 w-full h-full animate-ping opacity-50">
              <Star size={20} className="text-yellow-400" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}