import { ChevronRight, Heart, Bookmark, Eye, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Releases = ({mangaReleases,themeClass,accentColor,accentBg,secondaryBg,darkMode,cardHoverClass,setHoveredCard,toggleLike,toggleBookmark,likedItems,bookmarkedItems,hoveredCard}) => {
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
          <a href="#" className={`${accentColor} text-white font-bold flex items-center hover:scale-105 transition-all px-4 py-2 rounded-full bg-opacity-10 hover:bg-opacity-20 ${darkMode ? 'bg-pink-500' : 'bg-violet-600'}`}>
            View All <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mangaReleases.map((manga, index) => (
            <div 
              key={index} 
              className={`${secondaryBg} border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} 
                overflow-hidden transform ${index % 3 === 0 ? 'rotate-1' : index % 3 === 1 ? '-rotate-1' : 'rotate-0'} 
                ${cardHoverClass} hover:rotate-0 hover:border-opacity-100 hover:border-2
                ${hoveredCard === index ? 'scale-105 z-10' : 'z-0'}
                transition-all duration-300 relative
                ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative group overflow-hidden">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={manga.image || "/api/placeholder/300/400"} 
                    alt={manga.title} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {manga.rating && (
                  <div className="absolute top-2 left-2 flex items-center bg-black bg-opacity-70 text-yellow-400 px-2 py-1 rounded-lg">
                    <Star size={14} className="fill-current mr-1" />
                    <span className="text-xs font-bold">{manga.rating}</span>
                  </div>
                )}
                
                {manga.views && (
                  <div className="absolute top-2 left-16 flex items-center bg-black bg-opacity-70 text-gray-200 px-2 py-1 rounded-lg">
                    <Eye size={14} className="mr-1" />
                    <span className="text-xs font-bold">{manga.views}</span>
                  </div>
                )}
                
                {manga.hot && (
                  <div className="absolute top-2 right-2 animate-pulse">
                    <div className="bg-yellow-500 text-black font-bold px-3 py-1 text-xs rounded-md transform rotate-3" 
                      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%)' }}>
                      HOT 🔥
                    </div>
                  </div>
                )}
                
                {manga.new && (
                  <div className="absolute top-2 right-2 animate-bounce">
                    <div className={`${accentBg} text-white font-bold px-3 py-1 text-xs rounded-md transform -rotate-2`}
                      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 70%)' }}>
                      NEW ✨
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-2">
                  <div className="flex space-x-2">
                    {manga.genres?.map((genre, i) => (
                      <span key={i} className={`text-xs ${accentBg} bg-opacity-90 text-white px-2 py-1 rounded-full`}>
                        {genre}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-200 text-sm line-clamp-3">{manga.description}</p>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-bold text-lg mb-1 truncate hover:text-clip transition-all">{manga.title}</h4>
                
                <div className="flex justify-between items-center mb-3">
                  <span className={`font-medium text-sm ${accentColor}`}>{manga.chapter}</span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>{manga.date}</span>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="flex gap-4">
                    <button 
                      className="hover:scale-125 transition-transform relative group"
                      onClick={() => toggleLike(index)}
                      aria-label="Like manga"
                    >
                      <Heart 
                        size={18} 
                        className={`transition-all duration-300 ${likedItems.includes(index) ? "text-red-500 fill-current scale-110" : "text-gray-400 hover:text-red-500"}`} 
                      />
                      {likedItems.includes(index) && (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Liked</span>
                      )}
                    </button>
                    <button 
                      className="hover:scale-125 transition-transform relative group"
                      onClick={() => toggleBookmark(index)}
                      aria-label="Bookmark manga"
                    >
                      <Bookmark 
                        size={18} 
                        className={`transition-all duration-300 ${bookmarkedItems.includes(index) ? "text-blue-500 fill-current scale-110" : "text-gray-400 hover:text-blue-500"}`} 
                      />
                      {bookmarkedItems.includes(index) && (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Bookmarked</span>
                      )}
                    </button>
                  </div>
                  <button className={`${accentBg} text-white px-4 py-1.5 text-sm font-bold transform hover:translate-y-px hover:shadow-md transition-all duration-200 rounded`}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)' }}>
                    Read Now
                  </button>
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