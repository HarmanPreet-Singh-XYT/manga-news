import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Eye, Star, Search, Heart, Bell } from 'lucide-react';

const AnimeHeroSection = ({isDarkMode}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [featured, setFeatured] = useState({
    title: "Demon Slayer: Infinity Train",
    image: "/api/placeholder/400/500",
    rating: "9.2",
    genre: "Action/Fantasy",
    episodes: "26",
    isNew: true
  });
  
  // Trending anime list
  const [trendingAnime, setTrendingAnime] = useState([
    { id: 1, title: "Jujutsu Kaisen", genre: "Action" },
    { id: 2, title: "One Piece", genre: "Adventure" },
    { id: 3, title: "Attack on Titan", genre: "Dark Fantasy" }
  ]);
  
  const baseBgClass = isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section className="relative mb-16">
    
      <div className={`${isDarkMode ? 'bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-r from-indigo-50 via-violet-200 to-indigo-50'} overflow-hidden`}>
        <div 
          className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between relative"
          style={{
            backgroundImage: "url('/api/placeholder/1600/600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        >
          {/* Animated background elements - enhanced with more elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute left-0 right-0 top-0 bottom-0" style={{
                backgroundImage: `radial-gradient(circle, ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(124,58,237,0.1)'} 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
                transform: `translateY(${scrollPosition * 0.2}px)`
              }}></div>
            </div>
            <div className={`absolute top-0 right-0 w-96 h-96 ${isDarkMode ? 'bg-purple-500' : 'bg-violet-400'} rounded-full filter blur-3xl opacity-20 animate-pulse`}
                 style={{ transform: `translate(${50 - scrollPosition * 0.05}px, ${-150 + scrollPosition * 0.1}px)` }}></div>
            <div className={`absolute bottom-0 left-0 w-64 h-64 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-600'} rounded-full filter blur-3xl opacity-20`}
                 style={{ transform: `translate(${-100 + scrollPosition * 0.02}px, ${100 - scrollPosition * 0.08}px)` }}></div>
            {/* New animated elements */}
            <div className={`absolute top-1/3 left-1/4 w-40 h-40 ${isDarkMode ? 'bg-blue-500' : 'bg-indigo-300'} rounded-full filter blur-3xl opacity-10 animate-float`}></div>
            <div className={`absolute bottom-1/4 right-1/3 w-48 h-48 ${isDarkMode ? 'bg-yellow-500' : 'bg-amber-200'} rounded-full filter blur-3xl opacity-10 animate-float-delayed`}></div>
          </div>
          
          <div className="w-full md:w-3/5 z-10 transform hover:-rotate-1 transition-transform duration-500">
            <div className={`${isDarkMode ? 'bg-black bg-opacity-70 border-l-4 border-pink-500' : 'bg-white bg-opacity-70 border-l-4 border-violet-600'} p-6 clip-polygon backdrop-blur-sm`}>
              <div className="animate-slideIn">
                <div className="flex items-center mb-2">
                  <div className={`h-1 w-12 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-600'} mr-2`}></div>
                  <span className={`text-sm font-bold uppercase tracking-wider ${isDarkMode ? 'text-pink-400' : 'text-violet-700'}`}>Anime & Manga Hub</span>
                </div>
                
                <h1 className={`text-4xl md:text-6xl font-black uppercase mb-4 tracking-tight transform -skew-x-1 ${isDarkMode ? 'text-shadow-manga-dark' : 'text-shadow-manga-light'}`}>
                  DISCOVER <span className={`${isDarkMode ? 'text-pink-500' : 'text-violet-600'} animate-pulse`}>AMAZING</span> SERIES
                </h1>
                <p className="text-lg mb-6 max-w-2xl leading-relaxed">
                  Explore the latest and greatest in anime and manga. From action-packed adventures to heartwarming romances, find your next obsession here.
                </p>
                
                {/* Search bar */}
                <div className={`relative mb-6 max-w-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} flex items-center rounded-md overflow-hidden shadow-lg`}>
                  <input 
                    type="text" 
                    placeholder="Search anime or manga..." 
                    className={`w-full p-3 pl-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} focus:outline-none`}
                  />
                  <button className={`${isDarkMode ? 'bg-pink-500 hover:bg-pink-600' : 'bg-violet-600 hover:bg-violet-700'} p-3 text-white`}>
                    <Search size={18} />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className={`${isDarkMode ? 'bg-pink-500 hover:bg-pink-600' : 'bg-violet-600 hover:bg-violet-700'} transform hover:scale-105 transition duration-300 text-white font-bold py-3 px-6 uppercase clip-button flex items-center`}>
                    BROWSE ALL
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                  <button className={`bg-transparent ${isDarkMode ? 'border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-500' : 'border-2 border-yellow-600 hover:bg-yellow-500 hover:text-white text-yellow-600'} transform hover:scale-105 transition duration-300 font-bold py-3 px-6 uppercase clip-button flex items-center`}>
                    SEASONAL CHART
                    <Clock size={16} className="ml-1" />
                  </button>
                </div>
                
                {/* Trending tags */}
                <div className="mt-6">
                  <div className="flex items-center text-sm mb-2">
                    <span className={`font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>TRENDING:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trendingAnime.map(anime => (
                      <a 
                        key={anime.id}
                        href="#" 
                        className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} px-3 py-1 rounded-full text-sm transition-all duration-300 transform hover:scale-105 flex items-center`}
                      >
                        <span>#</span>{anime.title.split(' ')[0].toLowerCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 mt-8 md:mt-0 z-10">
            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300 animate-fadeIn">
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-yellow-500' : 'bg-yellow-500'} transform translate-x-2 translate-y-2 -z-10`}></div>
              <div className={`border-4 ${isDarkMode ? 'border-white bg-gray-900' : 'border-violet-300 bg-white'} p-1 relative overflow-hidden group`}>
                <img 
                  src={featured.image} 
                  alt={featured.title} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black font-black p-2 transform rotate-12 clip-badge animate-pulse">
                  <span className="uppercase text-sm tracking-wide">Featured</span>
                </div>
                {featured.isNew && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white font-black p-2 transform -rotate-12 clip-badge">
                    <span className="uppercase text-sm tracking-wide">New</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-2 pb-12">
                  <button className={`${isDarkMode ? 'bg-pink-500 hover:bg-pink-600' : 'bg-violet-600 hover:bg-violet-700'} text-white px-4 py-2 font-bold uppercase clip-button transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center`}>
                    <Eye size={16} className="mr-1" />
                    Watch Now
                  </button>
                  <button className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} ${isDarkMode ? 'text-white' : 'text-gray-900'} px-3 py-2 font-bold uppercase clip-button transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center`}>
                    <Heart size={16} className={`mr-1 ${isDarkMode ? 'text-pink-500' : 'text-violet-600'}`} />
                    <span className="sr-only">Add to favorites</span>
                  </button>
                </div>
              </div>
              <div className={`${isDarkMode ? 'bg-gray-800 border-b-4 border-pink-500' : 'bg-white border-b-4 border-violet-600 shadow-md'} p-4`}>
                <h3 className="text-xl font-bold mb-1">{featured.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} className="fill-current" />
                    <span className="ml-1 font-medium">{featured.rating}</span>
                  </div>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{featured.genre}</span>
                  <span className={`text-sm ${isDarkMode ? 'bg-purple-900' : 'bg-violet-200 text-violet-800'} px-2 py-1 rounded-sm`}>{featured.episodes} EP</span>
                </div>
                
                {/* Added notification option */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-700">
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>New episode on Friday</span>
                  <button className={`flex items-center text-xs ${isDarkMode ? 'text-pink-400 hover:text-pink-300' : 'text-violet-600 hover:text-violet-800'}`}>
                    <Bell size={14} className="mr-1" />
                    Notify me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Diagonal Divider - Enhanced with decorative elements */}
      <div className={`h-16 ${baseBgClass} relative overflow-hidden`}>
        <div 
          className={`absolute top-0 left-0 right-0 h-32 ${isDarkMode ? 'bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-r from-indigo-50 via-violet-200 to-indigo-50'}`} 
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)"
          }}
        ></div>
        
        {/* Decorative elements on the divider */}
        <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2">
          <div className={`h-6 w-6 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'} rounded-full opacity-70`}></div>
        </div>
        <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className={`h-4 w-4 ${isDarkMode ? 'bg-yellow-500' : 'bg-yellow-400'} rounded-full opacity-70`}></div>
        </div>
        <div className="absolute bottom-0 right-1/4 transform translate-x-1/2">
          <div className={`h-8 w-8 ${isDarkMode ? 'bg-blue-500' : 'bg-indigo-400'} rounded-full opacity-70`}></div>
        </div>
      </div>
      
      {/* Add some animation keyframes in a style tag */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 8s ease-in-out 1s infinite;
        }
        
        .clip-polygon {
          clip-path: polygon(0 0, 100% 0, 98% 100%, 0 100%);
        }
        
        .clip-button {
          clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
        }
        
        .clip-badge {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
        }
        
        .text-shadow-manga-light {
          text-shadow: 2px 2px 0 rgba(124, 58, 237, 0.5);
        }
        
        .text-shadow-manga-dark {
          text-shadow: 2px 2px 0 rgba(236, 72, 153, 0.5);
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AnimeHeroSection;