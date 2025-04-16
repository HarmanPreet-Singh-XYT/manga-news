import { ChevronRight, Heart, Bookmark, Eye, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Releases = ({mangaReleases, themeClass, accentColor, accentBg, secondaryBg, darkMode, cardHoverClass, setHoveredCard, toggleLike, toggleBookmark, likedItems, bookmarkedItems, hoveredCard}) => {
  // State variables
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate loading effect
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`${themeClass} py-10 px-4 rounded-lg transition-colors duration-300`}>
      <div className={`container mx-auto ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-black uppercase transform -skew-x-6 tracking-tight relative group">
            <span className={`${accentColor} inline-block transform hover:scale-105 transition-transform`}>Latest</span>{" "}
            <span className="relative">
              Releases
              <span className={`absolute -bottom-1 left-0 h-1.5 ${accentBg} w-0 group-hover:w-full transition-all duration-300 ease-out`}></span>
            </span>
          </h3>
          <a href="#" className={`${accentColor} text-white font-bold flex items-center hover:scale-105 transition-all px-4 py-2 rounded-full backdrop-blur-md ${darkMode ? 'bg-pink-500 bg-opacity-20' : 'bg-violet-600 bg-opacity-20'}`}>
            View All <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mangaReleases.map((manga, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-lg transform 
                ${index % 3 === 0 ? 'rotate-1' : index % 3 === 1 ? '-rotate-1' : 'rotate-0'} 
                ${cardHoverClass} hover:rotate-0 hover:shadow-xl
                ${hoveredCard === index ? 'scale-105 z-10' : 'z-0'}
                transition-all duration-300
                ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                height: '400px',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Full image background */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={manga.image || "/api/placeholder/300/400"} 
                  alt={manga.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              {/* Glass overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Glassy border effect */}
              <div className="absolute inset-0 border-2 border-white border-opacity-10 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              {/* Rating badge */}
              {manga.rating && (
                <div className="absolute top-3 left-3 flex items-center bg-black/30 backdrop-blur-md text-yellow-400 px-2 py-1 rounded-lg border border-white/10">
                  <Star size={14} className="fill-current mr-1" />
                  <span className="text-xs font-bold">{manga.rating}</span>
                </div>
              )}
              
              {/* Views badge */}
              {manga.views && (
                <div className="absolute top-3 left-16 flex items-center bg-black/30 backdrop-blur-md text-white px-2 py-1 rounded-lg border border-white/10">
                  <Eye size={14} className="mr-1" />
                  <span className="text-xs font-bold">{manga.views}</span>
                </div>
              )}
              
              {/* Hot badge */}
              {manga.hot && (
                <div className="absolute top-3 right-3 animate-pulse">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-3 py-1 text-xs rounded-md backdrop-blur-sm">
                    HOT 🔥
                  </div>
                </div>
              )}
              
              {/* New badge */}
              {manga.new && (
                <div className="absolute top-3 right-3 animate-bounce">
                  <div className={`${accentBg} text-white font-bold px-3 py-1 text-xs rounded-md backdrop-blur-sm`}>
                    NEW ✨
                  </div>
                </div>
              )}
              
              {/* Content container - slides up from bottom */}
              <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end h-3/5">
                {/* Title with animated underline */}
                <h4 className="font-bold text-xl mb-2 text-white truncate group-hover:text-clip transition-all relative">
                  {manga.title}
                  <span className={`absolute -bottom-1 left-0 h-0.5 ${accentBg} w-0 group-hover:w-1/2 transition-all duration-500 ease-out delay-100`}></span>
                </h4>
                
                {/* Chapter and date info */}
                <div className="flex justify-between items-center mb-3">
                  <span className={`font-medium text-sm ${accentColor} backdrop-blur-sm px-2 py-0.5 rounded-full bg-black/20`}>{manga.chapter}</span>
                  <span className="text-gray-300 text-xs backdrop-blur-sm px-2 py-0.5 rounded-full bg-black/20">{manga.date}</span>
                </div>
                
                {/* Genre tags */}
                <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {manga.genres?.map((genre, i) => (
                    <span key={i} className={`text-xs ${accentBg} bg-opacity-60 backdrop-blur-sm text-white px-2 py-1 rounded-full`}>
                      {genre}
                    </span>
                  ))}
                </div>
                
                {/* Description - appears on hover */}
                <p className="text-gray-200 text-sm line-clamp-3 mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  {manga.description}
                </p>
                
                {/* Actions row */}
                <div className="flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300">
                  <div className="flex gap-4">
                    <button 
                      className="hover:scale-125 transition-transform relative group backdrop-blur-sm bg-black/20 p-2 rounded-full"
                      onClick={() => toggleLike(index)}
                      aria-label="Like manga"
                    >
                      <Heart 
                        size={18} 
                        className={`transition-all duration-300 ${likedItems.includes(index) ? "text-red-500 fill-current scale-110" : "text-gray-300 hover:text-red-500"}`} 
                      />
                    </button>
                    <button 
                      className="hover:scale-125 transition-transform relative group backdrop-blur-sm bg-black/20 p-2 rounded-full"
                      onClick={() => toggleBookmark(index)}
                      aria-label="Bookmark manga"
                    >
                      <Bookmark 
                        size={18} 
                        className={`transition-all duration-300 ${bookmarkedItems.includes(index) ? "text-blue-500 fill-current scale-110" : "text-gray-300 hover:text-blue-500"}`} 
                      />
                    </button>
                  </div>
                  <a href={manga.link}>
                    <button className={`${accentBg} text-white px-4 py-1.5 text-sm font-bold transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-full backdrop-blur-md`}>
                      Read Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Releases