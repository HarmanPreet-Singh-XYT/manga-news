// Enhanced Anime/Manga UI Components
import React, { useState, useEffect } from 'react';
import { 
  Search, Filter, Award, Clock, Heart, 
  ChevronRight, Star, Eye, Bookmark, 
  Flame as Fire, TrendingUp, Volume2, Zap, Menu
} from 'lucide-react';

// Custom hook for animations
function useAnimationObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
}

// Enhanced TabButton with more manga styling
function TabButton({ active, onClick, icon, label, isDarkMode }) {
  const activeClasses = isDarkMode 
    ? 'bg-pink-500 text-white scale-105 -rotate-1 shadow-glow-pink'
    : 'bg-violet-600 text-white scale-105 -rotate-1 shadow-glow-purple';
  
  const inactiveClasses = isDarkMode
    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
    : 'bg-violet-100 text-violet-700 hover:bg-violet-200 hover:scale-105';
  
  return (
    <button 
      onClick={onClick}
      className={`
        flex items-center px-4 sm:px-6 py-2 sm:py-3 font-bold uppercase tracking-wider
        transform transition duration-300 relative overflow-hidden
        ${active ? activeClasses : inactiveClasses}
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${isDarkMode ? 'pink' : 'violet'}-500
      `}
      style={{
        clipPath: "polygon(0 0, 100% 0%, 95% 100%, 5% 100%)"
      }}
      aria-pressed={active}
    >
      {active && (
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="manga-speedlines w-full h-full"></div>
        </div>
      )}
      <span className="relative flex items-center">
        {icon}
        <span className="ml-1 hidden sm:inline">{label}</span>
        <span className="ml-1 sm:hidden">{label.split(' ')[0]}</span>
      </span>
    </button>
  );
}

// Enhanced SeriesCard with more anime styling and accessibility
function SeriesCard({ series, delay = 0, isDarkMode }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
useEffect(() => {
  setIsLoaded(true);
}, [])

  return (
    <div 
      className="transform hover:scale-105 transition duration-300 hover:-rotate-1 animate-on-scroll opacity-0"
      style={{ 
        animationDelay: `${delay}ms`,
        transitionDelay: `${delay}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-violet-200'} 
        border-2 overflow-hidden group rounded-sm
        ${isDarkMode ? 'hover:border-pink-500' : 'hover:border-violet-500'} 
        transition-colors duration-300
      `}>
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* Image skeleton loader */}
          {!isLoaded && (
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse`}>
              <div className="h-full w-full flex items-center justify-center">
                <span className={`${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>Loading...</span>
              </div>
            </div>
          )}
          
          <img 
            src={series.image} 
            alt={series.title} 
            className={`w-full h-full object-cover transform 
              group-hover:scale-110 transition-transform duration-700
              ${isLoaded ? 'opacity-100' : 'opacity-0'}`
            }
            onLoad={() => setIsLoaded(true)}
          />
          
          {/* Overlay gradient with anime-style action menu */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
            <div className="flex justify-center space-x-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <button 
                className={`${isDarkMode ? 'bg-pink-500 hover:bg-pink-600' : 'bg-violet-500 hover:bg-violet-600'} text-white p-2 rounded-full transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${isDarkMode ? 'pink' : 'violet'}-500`}
                aria-label="View series"
              >
                <Eye size={16} />
              </button>
              <button 
                className={`${isDarkMode ? 'bg-purple-500 hover:bg-purple-600' : 'bg-violet-700 hover:bg-violet-800'} text-white p-2 rounded-full transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${isDarkMode ? 'purple' : 'violet'}-500`}
                aria-label="Bookmark series"
              >
                <Bookmark size={16} />
              </button>
              <button 
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                aria-label="Add to favorites"
              >
                <Heart size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced badges with animations */}
        <div className="absolute top-0 right-0 flex flex-col gap-2 p-2">
          {series.isNew && (
            <div className="bg-yellow-500 text-black font-bold text-xs py-1 px-2 transform rotate-3 clip-badge animate-pulse shadow-md">
              <span className="flex items-center">
                <Zap size={12} className="mr-1" />
                NEW
              </span>
            </div>
          )}
          {series.isTrending && (
            <div className={`${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'} text-white font-bold text-xs py-1 px-2 transform -rotate-3 clip-badge flex items-center shadow-md`}>
              <Fire size={12} className="mr-1 animate-flicker" />
              HOT
            </div>
          )}
        </div>
        
        {/* Enhanced info section */}
        <div className="p-3">
          <h3 className={`font-bold text-sm md:text-base mb-1 truncate ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {series.title}
          </h3>
          <div className="flex justify-between items-center">
            <span className={`text-xs ${isDarkMode ? 'bg-purple-900 text-white' : 'bg-violet-100 text-violet-800'} px-2 py-1 rounded-sm`}>
              {series.genre}
            </span>
            <div className="flex items-center text-yellow-500" title={`Rating: ${series.rating}/5`}>
              <Star size={14} className="fill-current" />
              <span className="ml-1 text-sm font-medium">{series.rating}</span>
            </div>
          </div>
          <div className={`mt-2 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center`}>
            <Clock size={12} className="mr-1" />
            {series.episodes} Episodes
          </div>
          
          {/* Progress bar - new feature */}
          {series.progress && (
            <div className="mt-2">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Progress</span>
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {series.currentEp}/{series.episodes}
                </span>
              </div>
              <div className={`h-1.5 w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                <div 
                  className={`h-full ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'} rounded-full`} 
                  style={{ width: `${(series.currentEp / series.episodes) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Enhanced TrendingCard with improved layout and responsiveness
function TrendingCard({ series, delay = 0, isDarkMode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, [])
  return (
    <div 
      className="transform hover:scale-105 transition duration-500 hover:rotate-1 animate-on-scroll opacity-0"
      style={{ 
        animationDelay: `${delay}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      <div className={`
        relative flex flex-col sm:flex-row 
        ${isDarkMode ? 'bg-gray-800 border-pink-500' : 'bg-white border-violet-500'} 
        border-l-4 overflow-hidden group rounded-r-sm shadow-lg
      `}>
        <div className="w-full sm:w-1/3 overflow-hidden">
          {!isLoaded && (
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse`}>
              <div className="h-full w-full flex items-center justify-center">
                <span className={`${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>Loading...</span>
              </div>
            </div>
          )}
          
          <img 
            src={series.image} 
            alt={series.title} 
            className={`w-full h-48 sm:h-full object-cover transform 
              group-hover:scale-110 transition-transform duration-700
              ${isLoaded ? 'opacity-100' : 'opacity-0'}`
            }
            onLoad={() => setIsLoaded(true)}
          />
          <div className={`absolute top-0 left-0 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'} text-xs text-white font-bold py-1 px-2 clip-badge flex items-center shadow-md`}>
            <Fire size={12} className="mr-1 animate-flicker" />
            TRENDING
          </div>
          
          {/* Episode indicator - new feature */}
          {series.latestEpisode && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-2 flex items-center justify-between">
              <div className="flex items-center">
                <Volume2 size={14} className="text-white mr-1" />
                <span className="text-white text-xs">EP {series.latestEpisode}</span>
              </div>
              <span className={`text-xs ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'} text-white px-2 py-0.5 rounded-sm`}>
                NEW
              </span>
            </div>
          )}
        </div>
        
        <div className="w-full sm:w-2/3 p-4 relative">
          {/* Manga-style speed lines in background - enhanced */}
          <div className="absolute inset-0 opacity-5">
            <div className="manga-speedlines w-full h-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-2">
              <TrendingUp size={18} className={isDarkMode ? 'text-pink-500' : 'text-violet-500'} />
              <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'} ml-2 truncate`}>
                {series.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center mb-3 gap-2">
              <div className="flex items-center text-yellow-500">
                <Star size={16} className="fill-current" />
                <span className="ml-1 font-medium">{series.rating}</span>
              </div>
              <span className={`text-sm ${isDarkMode ? 'bg-purple-900 text-white' : 'bg-violet-100 text-violet-800'} px-2 py-1 rounded-sm`}>
                {series.genre}
              </span>
              {series.year && (
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {series.year}
                </span>
              )}
            </div>
            
            {/* Description - new feature */}
            {series.description && (
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 line-clamp-2`}>
                {series.description}
              </p>
            )}
            
            <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 flex items-center`}>
              <Clock size={14} className="mr-1" />
              <span>{series.episodes} Episodes</span>
            </div>
            
            <div className="flex items-center justify-between">
              <button 
                className={`
                  ${isDarkMode ? 'text-pink-500 hover:text-pink-400' : 'text-violet-600 hover:text-violet-500'} 
                  font-bold text-sm uppercase flex items-center group-hover:underline
                  focus:outline-none focus:ring-2 focus:ring-${isDarkMode ? 'pink' : 'violet'}-500 rounded-sm p-1
                `}
                aria-label="Read more about this series"
              >
                READ MORE 
                <ChevronRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex space-x-2">
                <button 
                  className={`
                    ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-violet-100 hover:bg-violet-200'} 
                    p-2 rounded-full transition hover:scale-110
                    focus:outline-none focus:ring-2 focus:ring-${isDarkMode ? 'gray' : 'violet'}-500
                  `}
                  aria-label="Bookmark series"
                >
                  <Bookmark size={14} className={isDarkMode ? 'text-gray-300' : 'text-violet-500'} />
                </button>
                <button 
                  className={`
                    ${isDarkMode ? 'bg-gray-700 hover:bg-pink-500' : 'bg-violet-100 hover:bg-violet-500'} 
                    p-2 rounded-full transition hover:scale-110
                    focus:outline-none focus:ring-2 focus:ring-${isDarkMode ? 'pink' : 'violet'}-500
                  `}
                  aria-label="Add to favorites"
                >
                  <Heart size={14} className={isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-violet-500 group-hover:text-white'} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced SearchBar component
function SearchBar({ isDarkMode }) {
  return (
    <div className="mb-12 transform -rotate-1">
      <div className="max-w-3xl mx-auto relative animate-fadeIn">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-purple-600' : 'bg-violet-600'} transform translate-x-1 translate-y-1`}></div>
        <div className={`
          relative ${isDarkMode ? 'bg-gray-800 border-2 border-purple-500' : 'bg-white border-2 border-violet-400 shadow-md'} 
          p-2 flex items-center clip-polygon
          focus-within:border-${isDarkMode ? 'pink' : 'violet'}-500 transition-colors
        `}>
          <Search size={24} className={isDarkMode ? 'text-purple-400 ml-2' : 'text-violet-500 ml-2'} />
          <input 
            type="text" 
            placeholder="SEARCH FOR A SERIES..." 
            className={`
              bg-transparent border-none focus:outline-none
              ${isDarkMode ? 'placeholder-purple-300 text-white' : 'placeholder-violet-400 text-gray-800'} 
              p-2 flex-grow uppercase tracking-wide text-sm md:text-base
            `}
            aria-label="Search for anime or manga series"
          />
          <div className="flex items-center">
            <button 
              className={`
                mr-2 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-violet-100 hover:bg-violet-200 text-violet-800'} 
                p-2 rounded-sm hover:scale-105 transition
                focus:outline-none focus:ring-2 focus:ring-${isDarkMode ? 'gray' : 'violet'}-500
              `}
              aria-label="Filter search results"
            >
              <Filter size={20} />
            </button>
            <button 
              className={`
                ${isDarkMode ? 'bg-pink-500 hover:bg-pink-600' : 'bg-violet-600 hover:bg-violet-700'} 
                transform hover:scale-105 transition text-white px-4 py-2 font-bold clip-button
                focus:outline-none focus:ring-2 focus:ring-${isDarkMode ? 'pink' : 'violet'}-500
              `}
              aria-label="Submit search"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// New mobile navigation component
function MobileNavigation({ isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-6 z-40
          ${isDarkMode ? 'bg-pink-500' : 'bg-violet-600'} 
          text-white p-3 rounded-full shadow-lg
          focus:outline-none focus:ring-2 focus:ring-${isDarkMode ? 'pink' : 'violet'}-500
        `}
        aria-label="Toggle mobile navigation"
        aria-expanded={isOpen}
      >
        <Menu size={24} />
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50 flex items-end justify-center pb-20">
          <div 
            className={`
              ${isDarkMode ? 'bg-gray-900 border-t-2 border-pink-500' : 'bg-white border-t-2 border-violet-500'} 
              p-4 rounded-t-xl w-full max-w-md animate-slideUp
            `}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Menu
              </h2>
              <button 
                onClick={() => setIsOpen(false)}
                className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <nav>
              <ul className="space-y-2">
                {['Home', 'Discover', 'Categories', 'New Releases', 'My List', 'Settings'].map(item => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className={`
                        block p-3 ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-800 hover:bg-gray-100'} 
                        rounded-lg font-medium
                      `}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

// Sample CSS to add to your global styles
const GlobalStyles = () => (
  <style jsx global>{`
    /* Manga-style speedlines animation */
    .manga-speedlines {
      background-image: linear-gradient(90deg, transparent 0%, transparent 50%, currentColor 50%, currentColor 51%, transparent 51%, transparent 100%);
      background-size: 20px 100%;
      animation: moveSpeedlines 10s linear infinite;
    }
    
    @keyframes moveSpeedlines {
      0% { background-position: 0 0; }
      100% { background-position: 1000px 0; }
    }
    
    /* Clip paths for manga-style elements */
    .clip-polygon {
      clip-path: polygon(0 0, 100% 0, 98% 100%, 2% 100%);
    }
    
    .clip-button {
      clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
    }
    
    .clip-badge {
      clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
    }
    
    /* Fire animation */
    .animate-flicker {
      animation: flicker 1.5s infinite alternate;
    }
    
    @keyframes flicker {
      0%, 18%, 22%, 25%, 53%, 57%, 100% {
        opacity: 1;
      }
      20%, 24%, 55% {
        opacity: 0.5;
      }
    }
    
    /* Animation for scroll reveal */
    .animate-on-scroll {
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Slide up animation for mobile menu */
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    
    .animate-slideUp {
      animation: slideUp 0.3s ease forwards;
    }
    
    /* Glow effects for active tabs */
    .shadow-glow-pink {
      box-shadow: 0 0 15px rgba(236, 72, 153, 0.6);
    }
    
    .shadow-glow-purple {
      box-shadow: 0 0 15px rgba(124, 58, 237, 0.6);
    }
    
    /* Line clamp for multi-line text truncation */
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `}</style>
);

// Main component example usage
function AnimeMangaUI({ isDarkMode = false }) {
  const [activeTab, setActiveTab] = useState('top');
  useAnimationObserver();
  
  // Sample data (would be fetched from API in real app)
  const topSeries = [
    { id: 1, title: "One Piece", rating: 9.8, image: "/api/placeholder/250/350", genre: "Adventure", isNew: false, isTrending: true, episodes: 1074 },
    { id: 2, title: "Demon Slayer", rating: 9.6, image: "/api/placeholder/250/350", genre: "Action", isNew: true, isTrending: true, episodes: 44 },
    { id: 3, title: "Jujutsu Kaisen", rating: 9.5, image: "/api/placeholder/250/350", genre: "Supernatural", isNew: false, isTrending: false, episodes: 48 },
    { id: 4, title: "My Hero Academia", rating: 9.4, image: "/api/placeholder/250/350", genre: "Superhero", isNew: false, isTrending: false, episodes: 138 },
    { id: 5, title: "Attack on Titan", rating: 9.7, image: "/api/placeholder/250/350", genre: "Dark Fantasy", isNew: false, isTrending: true, episodes: 88 },
    { id: 6, title: "Chainsaw Man", rating: 9.5, image: "/api/placeholder/250/350", genre: "Horror", isNew: true, isTrending: true, episodes: 12 },
  ];

  const latestShows = [
    { id: 7, title: "Solo Leveling", rating: 9.3, image: "/api/placeholder/250/350", genre: "Action", isNew: true, isTrending: true, episodes: 12 },
    { id: 8, title: "Blue Lock", rating: 9.1, image: "/api/placeholder/250/350", genre: "Sports", isNew: true, isTrending: false, episodes: 24 },
    { id: 9, title: "Frieren", rating: 9.4, image: "/api/placeholder/250/350", genre: "Fantasy", isNew: true, isTrending: true, episodes: 28 },
    { id: 10, title: "Oshi no Ko", rating: 9.2, image: "/api/placeholder/250/350", genre: "Drama", isNew: true, isTrending: false, episodes: 11 },
  ];

  const fanFavorites = [
    { id: 11, title: "Hunter X Hunter", rating: 9.7, image: "/api/placeholder/250/350", genre: "Adventure", isNew: false, isTrending: false, episodes: 148 },
    { id: 12, title: "Fullmetal Alchemist", rating: 9.8, image: "/api/placeholder/250/350", genre: "Fantasy", isNew: false, isTrending: false, episodes: 64 },
    { id: 13, title: "Death Note", rating: 9.6, image: "/api/placeholder/250/350", genre: "Thriller", isNew: false, isTrending: false, episodes: 37 },
    { id: 14, title: "Naruto", rating: 9.5, image: "/api/placeholder/250/350", genre: "Action", isNew: false, isTrending: false, episodes: 220 },
    { id: 15, title: "Cowboy Bebop", rating: 9.7, image: "/api/placeholder/250/350", genre: "Sci-Fi", isNew: false, isTrending: false, episodes: 26 },
    { id: 16, title: "Vinland Saga", rating: 9.4, image: "/api/placeholder/250/350", genre: "Historical", isNew: false, isTrending: false, episodes: 48 },
  ];

  const featured = topSeries[0];
  
  const tabContent = {
    top: topSeries,
    latest: latestShows,
    favorites: fanFavorites
  };
  

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
      <GlobalStyles />
      
      <main className="container mx-auto px-4 py-8">
        {/* Enhanced Search Bar */}
        <SearchBar isDarkMode={isDarkMode} />
        
        {/* Enhanced Tabs Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
            <TabButton 
              active={activeTab === 'top'} 
              onClick={() => setActiveTab('top')}
              icon={<Award size={18} className="mr-1" />}
              label="TOP SERIES"
              isDarkMode={isDarkMode}
            />
            <TabButton 
              active={activeTab === 'latest'} 
              onClick={() => setActiveTab('latest')}
              icon={<Clock size={18} className="mr-1" />}
              label="LATEST SHOWS"
              isDarkMode={isDarkMode}
            />
            <TabButton 
              active={activeTab === 'favorites'} 
              onClick={() => setActiveTab('favorites')}
              icon={<Heart size={18} className="mr-1" />}
              label="FAN FAVORITES"
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
        
        {/* Series Grid with responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {tabContent[activeTab].map((series, index) => (
            <SeriesCard 
              key={series.id} 
              series={series} 
              delay={index * 100}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
        
        {/* Trending Now section */}
        <section className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className={`text-2xl md:text-3xl font-black uppercase transform -skew-x-3 Mode ? 'text-shadow-manga-dark' : 'text-shadow-manga-light'}`}>
            <span className={isDarkMode ? 'text-pink-500' : 'text-violet-600'}>#</span>TRENDING NOW
          </h2>
          <a href="#" className={`flex items-center ${isDarkMode ? 'text-pink-500 hover:text-pink-400' : 'text-violet-600 hover:text-violet-800'} font-bold`}>
            VIEW ALL <ChevronRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topSeries.filter(s => s.isTrending).map((series, index) => (
            <TrendingCard key={series.id} series={series} delay={index * 150} isDarkMode={isDarkMode} />
          ))}
        </div>
      </section>
      
      {/* Featured Collections - New Section */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-2xl md:text-3xl font-black uppercase transform -skew-x-3 ${isDarkMode ? 'text-shadow-manga-dark' : 'text-shadow-manga-light'}`}>
            <span className={isDarkMode ? 'text-purple-500' : 'text-violet-600'}>⭐</span>COLLECTIONS
          </h2>
          <a href="#" className={`flex items-center ${isDarkMode ? 'text-pink-500 hover:text-pink-400' : 'text-violet-600 hover:text-violet-800'} font-bold`}>
            VIEW ALL <ChevronRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {['Isekai Favorites', 'Shonen Classics', 'Must-Watch Romance', 'Hidden Gems'].map((collection, index) => (
            <div 
              key={collection}
              className={`
                relative overflow-hidden rounded-lg aspect-video animate-on-scroll opacity-0
                transform hover:scale-105 transition duration-300
              `}
              style={{ 
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 150}ms`
              }}
            >
              <img 
                src={`/api/placeholder/${400 + index}/${300 + index}`} 
                alt={collection} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg mb-1">{collection}</h3>
                <p className="text-gray-200 text-sm">20+ titles</p>
              </div>
              <div className={`
                absolute top-3 right-3 
                ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'} 
                text-white rounded-full p-2
                transform rotate-12
              `}>
                <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Mobile Navigation */}
      {/* <MobileNavigation isDarkMode={isDarkMode} /> */}
    </main>
    </div>
  );
}

// Export all components
export { 
  TabButton, 
  SeriesCard, 
  TrendingCard, 
  SearchBar, 
  MobileNavigation,
  AnimeMangaUI
};