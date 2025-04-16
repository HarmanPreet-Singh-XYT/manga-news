'use client';
import { useState, useEffect } from 'react';
import { 
  Flame as Fire, 
  Star, 
  TrendingUp, 
  Clock, 
  Heart, 
  Award, 
  Search, 
  ChevronRight, 
  Filter,
  Bookmark,
  Eye,
  Sun,
  Moon
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopularGenresSection from './Series/Genres';
import Season from './Series/Season';
import AnimeHeroSection from './Series/Hero';
import { AnimeMangaUI } from './Series/Mid';


export default function SeriesPage() {
  // Theme state with localStorage persistence
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('top');
  const [isLoading, setIsLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Initialize theme from localStorage if available
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme) {
  //     setIsDarkMode(savedTheme === 'dark');
  //   } else {
  //     // Check user's system preference
  //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //     setIsDarkMode(prefersDark);
  //   }
  // }, []);

  // Save theme preference when it changes
  // useEffect(() => {
  //   localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  //   // Apply a class to the document for global styles
  //   if (isDarkMode) {
  //     document.documentElement.classList.add('dark-mode');
  //     document.documentElement.classList.remove('light-mode');
  //   } else {
  //     document.documentElement.classList.add('light-mode');
  //     document.documentElement.classList.remove('dark-mode');
  //   }
  // }, [isDarkMode]);
  
  // Sample data for different sections
  const topSeries = [
    { id: 5, title: "One Piece", rating: 9.8, image: "https://m.media-amazon.com/images/I/81rEhhwbubL.jpg", genre: "Adventure", isNew: false, isTrending: true, episodes: 1074 },
    { id: 10, title: "Demon Slayer", rating: 9.6, image: "https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/2ZfAUG5CTXdM34S1OhmMW1zF.jpg", genre: "Action", isNew: true, isTrending: true, episodes: 44 },
    { id: 3, title: "Jujutsu Kaisen", rating: 9.5, image: "https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_.jpg", genre: "Supernatural", isNew: false, isTrending: false, episodes: 48 },
    { id: 4, title: "My Hero Academia", rating: 9.4, image: "https://external-preview.redd.it/netflix-my-hero-academia-youre-next-premieres-april-20-v0-JwzZ0n7z9UTm0yjaMDwEcl5p3pr7k-1RJdKSZDH_O0I.jpg?auto=webp&s=6f9b748eb34eccac28fd299e1ac0e8c1e109dc0b", genre: "Superhero", isNew: false, isTrending: false, episodes: 138 },
    { id: 1, title: "Attack on Titan", rating: 9.7, image: "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_.jpg", genre: "Dark Fantasy", isNew: false, isTrending: true, episodes: 88 },
    { id: 2, title: "Chainsaw Man", rating: 9.5, image: "https://a.storyblok.com/f/178900/849x1200/a315230dc9/chainsaw-man-the-movie-reze-arc-csm-visual.jpg/m/filters:quality(95)format(webp)", genre: "Horror", isNew: true, isTrending: true, episodes: 12 },
  ];

  const latestShows = [
    { id: 11, title: "Solo Leveling", rating: 9.3, image: "https://m.media-amazon.com/images/I/71goH8p2ENL.jpg", genre: "Action", isNew: true, isTrending: true, episodes: 12 },
    { id: 8, title: "Blue Lock", rating: 9.1, image: "https://m.media-amazon.com/images/M/MV5BNjliYmU5N2EtYmNjNi00NGM0LWEzZWItN2Q0YzM5YTk4Y2Q1XkEyXkFqcGc@._V1_.jpg", genre: "Sports", isNew: true, isTrending: false, episodes: 24 },
    { id: 12, title: "Frieren", rating: 9.4, image: "https://m.media-amazon.com/images/M/MV5BZTI4ZGMxN2UtODlkYS00MTBjLWE1YzctYzc3NDViMGI0ZmJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", genre: "Fantasy", isNew: true, isTrending: true, episodes: 28 },
    { id: 19, title: "Oshi no Ko", rating: 9.2, image: "https://m.media-amazon.com/images/M/MV5BYzM3ZGJkN2YtOTQ5Ny00MzEyLTlkMzQtZDVhYzM3YWFlM2QwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg0", genre: "Drama", isNew: true, isTrending: false, episodes: 11 },
  ];

  const fanFavorites = [
    { id: 112, title: "Hunter X Hunter", rating: 9.7, image: "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", genre: "Adventure", isNew: false, isTrending: false, episodes: 148 },
    { id: 122, title: "Fullmetal Alchemist", rating: 9.8, image: "https://m.media-amazon.com/images/M/MV5BNDczZWMyMjEtZDI0ZS00YThjLWE2MjEtNTIxNmVmZDhkNDg5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", genre: "Fantasy", isNew: false, isTrending: false, episodes: 64 },
    { id: 13, title: "Death Note", rating: 9.6, image: "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", genre: "Thriller", isNew: false, isTrending: false, episodes: 37 },
    { id: 14, title: "Naruto", rating: 9.5, image: "https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", genre: "Action", isNew: false, isTrending: false, episodes: 220 },
    { id: 15, title: "Cowboy Bebop", rating: 9.7, image: "https://m.media-amazon.com/images/M/MV5BM2VhZjk2MWMtZjc2OC00YzA4LWI0NzAtZGQ1YjVkOTk5YzVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", genre: "Sci-Fi", isNew: false, isTrending: false, episodes: 26 },
    { id: 16, title: "Vinland Saga", rating: 9.4, image: "https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_.jpg", genre: "Historical", isNew: false, isTrending: false, episodes: 48 },
  ];

  const featured = topSeries[0];
  
  const tabContent = {
    top: topSeries,
    latest: latestShows,
    favorites: fanFavorites
  };
  
  
  // Simulate loading state
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <LoadingScreen isDarkMode={isDarkMode} />;
  }
  
  // Theme-conditional classes
  const baseBgClass = isDarkMode ? 'bg-gray-900' : 'bg-indigo-50';
  const baseTextClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const primaryAccent = isDarkMode ? 'pink-500' : 'violet-600';
  const secondaryAccent = isDarkMode ? 'purple-900' : 'violet-200';
  
  const categories = [
    "Shonen", "Shojo", "Seinen", "Isekai", 
    "Mecha", "Slice of Life", "Horror", "Movies", "Industry"
  ];
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
      <div className={`min-h-screen ${baseBgClass} ${baseTextClass} font-sans transition-colors duration-300`}>
        <Header 
          darkMode={isDarkMode} 
          toggleMenu={toggleMenu} 
          isMenuOpen={isMenuOpen} 
          toggleDarkMode={toggleDarkMode}  
          toggleNotification={toggleNotification} 
          isNotificationOpen={isNotificationOpen} 
          showBackToTop={showBackToTop} 
          scrollToTop={scrollToTop}
        />
        {/* Hero Section with Featured Series */}
        <AnimeHeroSection isDarkMode={isDarkMode}/>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 pb-20">
          
          <AnimeMangaUI isDarkMode={isDarkMode}/>
          
          {/* Season's Highlights */}
          <Season isDarkMode={isDarkMode} latestShows={latestShows}/>
          <PopularGenresSection isDarkMode={isDarkMode}/>
        </div>
        <Footer categories={categories} />
        <style jsx>{`
          .text-shadow-manga {
            text-shadow: 3px 3px 0px rgba(236, 72, 153, 0.7);
          }
          
          .clip-polygon {
            clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);
          }
          
          .clip-button {
            clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
          }
          
          .clip-badge {
            clip-path: polygon(0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes float-slow {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          @keyframes float-medium {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .animate-slideIn {
            animation: slideIn 0.8s ease-out forwards;
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }

          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }

          .animate-float-medium {
            animation: float-medium 4s ease-in-out infinite;
          }
        `}</style>
      </div>
  );
}

// Loading Screen Component
function LoadingScreen({ isDarkMode }) {
  const baseBgClass = isDarkMode ? 'bg-gray-900' : 'bg-indigo-50';
  const spinnerBorderColor = isDarkMode ? 'border-pink-500' : 'border-violet-600';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  
  return (
    <div className={`min-h-screen ${baseBgClass} flex flex-col items-center justify-center`}>
      <div className={`w-24 h-24 border-t-4 border-b-4 ${spinnerBorderColor} rounded-full animate-spin mb-8`}></div>
      <h2 className={`text-2xl font-bold ${textColor} uppercase tracking-widest animate-pulse`}>Loading...</h2>
    </div>
  );
}

// Component for tabs
function TabButton({ active, onClick, icon, label, isDarkMode }) {
  const activeClasses = isDarkMode 
    ? 'bg-pink-500 text-white scale-105 -rotate-1'
    : 'bg-violet-600 text-white scale-105 -rotate-1';
  
  const inactiveClasses = isDarkMode
    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
    : 'bg-violet-100 text-violet-700 hover:bg-violet-200 hover:scale-105';
  
  return (
    <button 
      onClick={onClick}
      className={`
        flex items-center px-6 py-3 font-bold uppercase tracking-wider
        transform transition duration-300
        ${active ? activeClasses : inactiveClasses}
      `}
      style={{
        clipPath: "polygon(0 0, 100% 0%, 95% 100%, 5% 100%)"
      }}
    >
      {icon}
      {label}
    </button>
  );
}


// Component for series cards
function SeriesCard({ series, delay = 0,isDarkMode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="transform hover:scale-105 transition duration-300 hover:-rotate-1 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-violet-200'} border-2 overflow-hidden group`}>
        <div className="relative">
          <img 
            src={series.image} 
            alt={series.title} 
            className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
            <div className="flex justify-center space-x-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <button className={`${isDarkMode ? 'bg-pink-500 hover:bg-pink-600' : 'bg-violet-500 hover:bg-violet-600'} text-white p-2 rounded-full transition`}>
                <Eye size={16} />
              </button>
              <button className={`${isDarkMode ? 'bg-purple-500 hover:bg-purple-600' : 'bg-violet-700 hover:bg-violet-800'} text-white p-2 rounded-full transition`}>
                <Bookmark size={16} />
              </button>
              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                <Heart size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-0 right-0 flex flex-col gap-2 p-2">
          {series.isNew && (
            <div className="bg-yellow-500 text-black font-bold text-xs py-1 px-2 transform rotate-3 clip-badge animate-pulse">
              NEW
            </div>
          )}
          {series.isTrending && (
            <div className={`${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'} text-white font-bold text-xs py-1 px-2 transform -rotate-3 clip-badge flex items-center`}>
              <Fire size={12} className="mr-1" />
              HOT
            </div>
          )}
        </div>
        
        <div className="p-3">
          <h3 className={`font-bold text-sm md:text-base mb-1 truncate ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{series.title}</h3>
          <div className="flex justify-between items-center">
            <span className={`text-xs ${isDarkMode ? 'bg-purple-900 text-white' : 'bg-violet-100 text-violet-800'} px-2 py-1 rounded-sm`}>{series.genre}</span>
            <div className="flex items-center text-yellow-500">
              <Star size={14} className="fill-current" />
              <span className="ml-1 text-sm font-medium">{series.rating}</span>
            </div>
          </div>
          <div className={`mt-2 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center`}>
            <Clock size={12} className="mr-1" />
            {series.episodes} Episodes
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for trending cards
function TrendingCard({ series, delay = 0,isDarkMode }) {
  
  return (
    <div 
      className="transform hover:scale-105 transition duration-500 hover:rotate-1 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`relative flex ${isDarkMode ? 'bg-gray-800 border-pink-500' : 'bg-white border-violet-500'} border-l-4 overflow-hidden group`}>
        <div className="w-1/3 overflow-hidden">
          <img 
            src={series.image} 
            alt={series.title} 
            className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className={`absolute top-0 left-0 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'} text-xs text-white font-bold py-1 px-2 clip-badge flex items-center`}>
            <Fire size={12} className="mr-1" />
            TRENDING
          </div>
        </div>
        
        <div className="w-2/3 p-4 relative">
          {/* Manga-style speed lines in background */}
          <div className="absolute inset-0 opacity-5">
            <div style={{ 
              backgroundImage: `linear-gradient(90deg, transparent 0%, transparent 50%, ${isDarkMode ? 'white' : 'black'} 50%, ${isDarkMode ? 'white' : 'black'} 51%, transparent 51%, transparent 100%)`,
              backgroundSize: "10px 100%"
            }} className="w-full h-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-2">
              <TrendingUp size={18} className={isDarkMode ? 'text-pink-500' : 'text-violet-500'} />
              <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'} ml-2`}>{series.title}</h3>
            </div>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center text-yellow-500 mr-3">
                <Star size={16} className="fill-current" />
                <span className="ml-1 font-medium">{series.rating}</span>
              </div>
              <span className={`text-sm ${isDarkMode ? 'bg-purple-900 text-white' : 'bg-violet-100 text-violet-800'} px-2 py-1 rounded-sm`}>{series.genre}</span>
            </div>
            
            <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 flex items-center`}>
              <Clock size={14} className="mr-1" />
              <span>{series.episodes} Episodes</span>
            </div>
            
            <div className="flex items-center justify-between">
              <button className={`${isDarkMode ? 'text-pink-500 hover:text-pink-400' : 'text-violet-600 hover:text-violet-500'} font-bold text-sm uppercase flex items-center group-hover:underline`}>
                READ MORE <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex space-x-2">
                <button className={`${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-violet-100 hover:bg-violet-200'} p-2 rounded-full transition`}>
                  <Bookmark size={14} className={isDarkMode ? 'text-gray-300' : 'text-violet-500'} />
                </button>
                <button className={`${isDarkMode ? 'bg-gray-700 hover:bg-pink-500' : 'bg-violet-100 hover:bg-violet-500'} p-2 rounded-full transition`}>
                  <Heart size={14} className={isDarkMode ? 'text-gray-300' : 'text-violet-500'} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}