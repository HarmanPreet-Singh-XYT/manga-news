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
  Eye
} from 'lucide-react';

export default function SeriesPage() {
  const [activeTab, setActiveTab] = useState('top');
  const [isLoading, setIsLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Sample data for different sections
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
  
  // Simulate loading state
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
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
    return <LoadingScreen />;
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section with Featured Series */}
      <section className="relative mb-16">
        <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
          <div 
            className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between relative"
            style={{
              backgroundImage: "url('/api/placeholder/1600/600')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay"
            }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute left-0 right-0 top-0 bottom-0" style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                  transform: `translateY(${scrollPosition * 0.2}px)`
                }}></div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"
                   style={{ transform: `translate(${50 - scrollPosition * 0.05}px, ${-150 + scrollPosition * 0.1}px)` }}></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20"
                   style={{ transform: `translate(${-100 + scrollPosition * 0.02}px, ${100 - scrollPosition * 0.08}px)` }}></div>
            </div>
            
            <div className="w-full md:w-2/3 z-10 transform hover:-rotate-1 transition-transform duration-500">
              <div className="bg-black bg-opacity-70 p-6 border-l-4 border-pink-500 clip-polygon">
                <div className="animate-slideIn">
                  <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tight transform -skew-x-1 text-shadow-manga">
                    DISCOVER <span className="text-pink-500 animate-pulse">AMAZING</span> SERIES
                  </h1>
                  <p className="text-lg mb-6 max-w-2xl leading-relaxed">
                    Explore the latest and greatest in anime and manga. From action-packed adventures to heartwarming romances, find your next obsession here.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-pink-500 hover:bg-pink-600 transform hover:scale-105 transition duration-300 text-white font-bold py-3 px-6 uppercase clip-button flex items-center">
                      BROWSE ALL
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                    <button className="bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transform hover:scale-105 transition duration-300 text-yellow-500 font-bold py-3 px-6 uppercase clip-button flex items-center">
                      SEASONAL CHART
                      <Clock size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 mt-8 md:mt-0 z-10">
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300 animate-fadeIn">
                <div className="absolute inset-0 bg-yellow-500 transform translate-x-2 translate-y-2 -z-10"></div>
                <div className="border-4 border-white p-1 bg-gray-900 relative overflow-hidden group">
                  <img 
                    src={featured.image} 
                    alt={featured.title} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black font-black p-2 transform rotate-12 clip-badge animate-pulse">
                    <span className="uppercase text-sm tracking-wide">Featured</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-12">
                    <button className="bg-pink-500 text-white px-4 py-2 font-bold uppercase clip-button transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center">
                      <Eye size={16} className="mr-1" />
                      Watch Now
                    </button>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 border-b-4 border-pink-500">
                  <h3 className="text-xl font-bold mb-1">{featured.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-500">
                      <Star size={16} className="fill-current" />
                      <span className="ml-1 font-medium">{featured.rating}</span>
                    </div>
                    <span className="text-sm text-gray-400">{featured.genre}</span>
                    <span className="text-sm bg-purple-900 px-2 py-1 rounded-sm">{featured.episodes} EP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagonal Divider */}
        <div className="h-16 bg-gray-900 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900" 
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)"
            }}
          ></div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        
        {/* Search Bar */}
        <div className="mb-12 transform -rotate-1">
          <div className="max-w-3xl mx-auto relative animate-fadeIn">
            <div className="absolute inset-0 bg-purple-600 transform translate-x-1 translate-y-1"></div>
            <div className="relative bg-gray-800 p-2 border-2 border-purple-500 flex items-center clip-polygon">
              <Search size={24} className="text-purple-400 ml-2" />
              <input 
                type="text" 
                placeholder="SEARCH FOR A SERIES..." 
                className="bg-transparent border-none focus:outline-none text-white placeholder-purple-300 p-2 flex-grow uppercase tracking-wide"
              />
              <div className="flex items-center">
                <button className="mr-2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-sm hover:scale-105 transition">
                  <Filter size={20} />
                </button>
                <button className="bg-pink-500 hover:bg-pink-600 transform hover:scale-105 transition text-white px-4 py-2 font-bold clip-button">
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
            <TabButton 
              active={activeTab === 'top'} 
              onClick={() => setActiveTab('top')}
              icon={<Award className="mr-2" />}
              label="TOP SERIES"
            />
            <TabButton 
              active={activeTab === 'latest'} 
              onClick={() => setActiveTab('latest')}
              icon={<Clock className="mr-2" />}
              label="LATEST SHOWS"
            />
            <TabButton 
              active={activeTab === 'favorites'} 
              onClick={() => setActiveTab('favorites')}
              icon={<Heart className="mr-2" />}
              label="FAN FAVORITES"
            />
          </div>
        </div>
        
        {/* Series Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {tabContent[activeTab].map((series, index) => (
            <SeriesCard 
              key={series.id} 
              series={series} 
              delay={index * 100}
            />
          ))}
        </div>

        {/* More sections */}
        <section className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black uppercase transform -skew-x-3 text-shadow-manga">
              <span className="text-purple-500">#</span>TRENDING NOW
            </h2>
            <a href="#" className="flex items-center text-pink-500 hover:text-pink-400 font-bold">
              VIEW ALL <ChevronRight size={16} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSeries.filter(s => s.isTrending).map((series, index) => (
              <TrendingCard key={series.id} series={series} delay={index * 150} />
            ))}
          </div>
        </section>
        
        {/* Season's Highlights */}
        <section className="mt-20 overflow-hidden">
          <div 
            className="p-8 bg-gradient-to-r from-purple-900 to-pink-900 relative"
            style={{
              clipPath: "polygon(0 0, 100% 5%, 98% 100%, 2% 95%)"
            }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-repeat" style={{ 
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              }}></div>
            </div>
            
            {/* Floating animated elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full filter blur-xl opacity-20 animate-float-slow"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500 rounded-full filter blur-xl opacity-20 animate-float-medium"></div>
            
            <h2 className="text-3xl font-black uppercase mb-8 transform -skew-x-3 text-center text-shadow-manga">
              <span className="text-yellow-500">SPRING</span> 2025 HIGHLIGHTS
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {latestShows.map((series, index) => (
                <div 
                  key={series.id} 
                  className={`transform hover:scale-105 transition duration-300 hover:-rotate-1 animate-fadeIn`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-purple-500 transform translate-x-1 translate-y-1 -z-10"></div>
                    <img 
                      src={series.image} 
                      alt={series.title} 
                      className="w-full h-auto object-cover border-2 border-white group-hover:border-yellow-500 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-12">
                      <div className="flex space-x-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition">
                          <Eye size={16} />
                        </button>
                        <button className="bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-600 transition">
                          <Bookmark size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2">
                      <h3 className="font-bold text-sm md:text-base truncate">{series.title}</h3>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-300">{series.genre}</span>
                        <span className="text-yellow-500 flex items-center">
                          <Star size={12} className="fill-current mr-1" />
                          {series.rating}
                        </span>
                      </div>
                    </div>
                    {series.isNew && (
                      <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold text-xs py-1 px-2 clip-badge">
                        NEW
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 transform hover:scale-105 transition text-black font-bold py-3 px-8 uppercase clip-button flex items-center mx-auto">
                <Clock size={16} className="mr-2" />
                SEASONAL CHART
              </button>
            </div>
          </div>
        </section>
        
        {/* Genres Section */}
        <section className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black uppercase transform -skew-x-3 text-shadow-manga">
              POPULAR <span className="text-pink-500">GENRES</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Action', 'Romance', 'Fantasy', 'Comedy', 'Horror', 'Sci-Fi', 'Sports', 'Slice of Life'].map((genre, index) => (
              <GenreCard key={genre} genre={genre} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Loading Screen Component
function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div className="w-24 h-24 border-t-4 border-b-4 border-pink-500 rounded-full animate-spin mb-8"></div>
      <h2 className="text-2xl font-bold text-white uppercase tracking-widest animate-pulse">Loading...</h2>
    </div>
  );
}

// Component for tabs
function TabButton({ active, onClick, icon, label }) {
  return (
    <button 
      onClick={onClick}
      className={`
        flex items-center px-6 py-3 font-bold uppercase tracking-wider
        transform transition duration-300
        ${active 
          ? 'bg-pink-500 text-white scale-105 -rotate-1' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'}
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
function SeriesCard({ series, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="transform hover:scale-105 transition duration-300 hover:-rotate-1 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-gray-800 border-2 border-gray-700 overflow-hidden group">
        <div className="relative">
          <img 
            src={series.image} 
            alt={series.title} 
            className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3`}>
            <div className="flex justify-center space-x-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition">
                <Eye size={16} />
              </button>
              <button className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition">
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
            <div className="bg-pink-500 text-white font-bold text-xs py-1 px-2 transform -rotate-3 clip-badge flex items-center">
              <Fire size={12} className="mr-1" />
              HOT
            </div>
          )}
        </div>
        
        <div className="p-3">
          <h3 className="font-bold text-sm md:text-base mb-1 truncate">{series.title}</h3>
          <div className="flex justify-between items-center">
            <span className="text-xs bg-purple-900 px-2 py-1 rounded-sm">{series.genre}</span>
            <div className="flex items-center text-yellow-500">
              <Star size={14} className="fill-current" />
              <span className="ml-1 text-sm font-medium">{series.rating}</span>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-400 flex items-center">
            <Clock size={12} className="mr-1" />
            {series.episodes} Episodes
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for trending cards
function TrendingCard({ series, delay = 0 }) {
  return (
    <div 
      className="transform hover:scale-105 transition duration-500 hover:rotate-1 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative flex bg-gray-800 border-l-4 border-pink-500 overflow-hidden group">
        <div className="w-1/3 overflow-hidden">
          <img 
            src={series.image} 
            alt={series.title} 
            className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-0 left-0 bg-pink-500 text-xs text-white font-bold py-1 px-2 clip-badge flex items-center">
            <Fire size={12} className="mr-1" />
            TRENDING
          </div>
        </div>
        
        <div className="w-2/3 p-4 relative">
          {/* Manga-style speed lines in background */}
          <div className="absolute inset-0 opacity-5">
            <div style={{ 
              backgroundImage: "linear-gradient(90deg, transparent 0%, transparent 50%, white 50%, white 51%, transparent 51%, transparent 100%)",
              backgroundSize: "10px 100%"
            }} className="w-full h-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-2">
              <TrendingUp size={18} className="text-pink-500 mr-2" />
              <h3 className="font-bold text-lg">{series.title}</h3>
            </div>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center text-yellow-500 mr-3">
                <Star size={16} className="fill-current" />
                <span className="ml-1 font-medium">{series.rating}</span>
              </div>
              <span className="text-sm bg-purple-900 px-2 py-1 rounded-sm">{series.genre}</span>
            </div>
            
            <div className="text-sm text-gray-300 mb-4 flex items-center">
              <Clock size={14} className="mr-1 text-gray-400" />
              <span>{series.episodes} Episodes</span>
            </div>
            
            <div className="flex items-center justify-between">
              <button className="text-pink-500 hover:text-pink-400 font-bold text-sm uppercase flex items-center group-hover:underline">
                READ MORE <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex space-x-2">
                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition">
                  <Bookmark size={14} className="text-gray-300" />
                </button>
                <button className="bg-gray-700 hover:bg-pink-500 p-2 rounded-full transition">
                  <Heart size={14} className="text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Genre Card Component
function GenreCard({ genre, index }) {
  const backgrounds = [
    "bg-gradient-to-r from-red-900 to-orange-900", // Action
    "bg-gradient-to-r from-pink-900 to-purple-900", // Romance
    "bg-gradient-to-r from-blue-900 to-indigo-900", // Fantasy
    "bg-gradient-to-r from-yellow-900 to-green-900", // Comedy
    "bg-gradient-to-r from-gray-900 to-red-900", // Horror
    "bg-gradient-to-r from-cyan-900 to-blue-900", // Sci-Fi
    "bg-gradient-to-r from-green-900 to-teal-900", // Sports
    "bg-gradient-to-r from-purple-900 to-pink-900", // Slice of Life
  ];
  
  return (
    <div 
      className={`${backgrounds[index % backgrounds.length]} p-6 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 clip-polygon relative overflow-hidden animate-fadeIn`}
      style={{ 
        animationDelay: `${index * 100}ms`,
        clipPath: "polygon(0 0, 100% 0%, 95% 100%, 5% 100%)"
      }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "15px 15px"
        }}></div>
      </div>
      
      <h3 className="text-xl font-bold uppercase text-center text-white">{genre}</h3>
      <div className="mt-2 text-center">
        <button className="text-sm text-white hover:underline flex items-center justify-center mx-auto">
          Explore <ChevronRight size={14} className="ml-1" />
        </button>
      </div>
    </div>
  );
}

// Add global styles
const style = document.createElement('style');
style.innerHTML = `
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
`;
document.head.appendChild(style);