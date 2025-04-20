
import { Star, ChevronRight, Eye, Heart, Clock, Calendar, TrendingUp, BookOpen, Share2, Bookmark, X, Search } from 'lucide-react'
import React, { useState, useEffect } from 'react'

// Enhanced AnimeCard with better hover effects and accessibility
const AnimeCard = ({ anime, accentColor, darkMode, accentBg, secondaryBg }) => {
  const [saved, setSaved] = useState(false);
  
  return (
    <div 
      className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden p-4 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
      role="article"
      aria-label={`Anime: ${anime.title}`}
    >
      <div className="flex gap-4">
        <div className="w-24 h-32 overflow-hidden rounded-md relative group">
          <img 
            src={anime.image || "/api/placeholder/96/128"} 
            alt={anime.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star size={12} fill="#F59E0B" stroke="none" />
                <span className="text-xs text-white font-bold">{anime.rating}</span>
              </div>
              <span className="text-xs text-white">{anime.episodes} ep</span>
            </div>
          </div>
          {anime.isNew && (
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 py-0.5 rotate-3 font-bold">
              NEW
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h5 className="font-bold line-clamp-1">{anime.title}</h5>
            <button 
              onClick={() => setSaved(!saved)} 
              className={`ml-2 flex-shrink-0 transition-colors ${saved ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
              aria-label={saved ? "Remove from favorites" : "Add to favorites"}
              title={saved ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart size={14} fill={saved ? "currentColor" : "none"} />
            </button>
          </div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} cursor-pointer transition-colors`}>{anime.genre}</span>
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center`}>
              <Clock size={10} className="mr-1" /> {anime.duration}
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-2 line-clamp-2">
            {anime.description || `Latest release from ${anime.studio}. New episodes weekly.`}
          </p>
          <div className="flex items-center justify-between">
            <a 
              href={`/series/details/${anime.id}`} 
              className={`text-xs ${accentColor} font-bold flex items-center group transition-all hover:underline`}
              aria-label={`View details for ${anime.title}`}
            >
              View Details 
              <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2">
              <span className="text-xs flex items-center gap-1">
                <Eye size={12} className="text-gray-400" />
                <span className="text-gray-500">{anime.views || '3.2K'}</span>
              </span>
              <span className="text-xs flex items-center gap-1">
                <Heart size={12} className="text-gray-400" />
                <span className="text-gray-500">{anime.likes || '42'}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Enhanced Featured Anime with more interactive elements
const FeaturedAnime = ({ anime, accentColor, accentBg, darkMode }) => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img 
        src={anime.image || "/api/placeholder/400/250"}
        alt={anime.title} 
        className="w-full h-64 object-cover transition-transform duration-700 scale-105 group-hover:scale-110" 
        loading="lazy"
      />
      
      {/* Overlay for trailer button */}
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button 
          onClick={() => setIsTrailerOpen(true)}
          className={`${accentBg} hover:bg-opacity-90 px-4 py-2 rounded-full text-white font-bold flex items-center gap-2 transform transition-transform scale-90 group-hover:scale-100`}
          aria-label={`Watch trailer for ${anime.title}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
          Watch Trailer
        </button>
      </div>
      
      {/* Badge */}
      <div className="absolute top-3 left-3">
        <div className={`${accentBg} text-white px-3 py-1 text-sm font-bold rounded-tr-md rounded-bl-md transform -rotate-2 shadow-md`}>
          {anime.badge || "Season Finale"}
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h4 className="text-xl font-extrabold text-white mb-2 drop-shadow-md">
          {anime.title}
        </h4>
        <div className="flex flex-wrap gap-2 mb-3">
          {anime.tags?.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 text-xs font-medium bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} fill="#F59E0B" stroke="none" />
              ))}
            </div>
            <span className="text-sm text-white">{anime.rating} ({anime.reviewCount} reviews)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-white text-xs">
              <Eye size={14} />
              <span>{anime.views || '10.2K'}</span>
            </div>
            <div className="flex items-center gap-1 text-white text-xs">
              <Calendar size={14} />
              <span>{anime.releaseDate || 'Apr 15'}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trailer Modal */}
      {isTrailerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden max-w-3xl w-full">
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
              <h3 className="font-bold">Trailer: {anime.title}</h3>
              <button 
                onClick={() => setIsTrailerOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="Close trailer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video bg-black">
              {/* This would be replaced with an actual video embed */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <p>Video trailer would play here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Enhanced Trending component with improved UI and features
const Trending = ({ accentColor, accentBg, secondaryBg, darkMode }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Simulate loading effect when changing tabs
  useEffect(() => {
    if (activeTab !== 'all') {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);
  
  // Sample enhanced data
  const trendingAnime = [
    {
      id: 9,
      title: "Jujutsu Kaisen: Shibuya Incident",
      image: "https://m.media-amazon.com/images/I/91ZXOZjKeWL._UF1000,1000_QL80_.jpg",
      rating: "4.9",
      genre: "Action",
      episodes: "24",
      studio: "MAPPA",
      duration: "24 min",
      description: "Yuji and the sorcerers face their greatest threat yet in the Shibuya district.",
      likes: "14.5K",
      tags: ["Action", "Supernatural", "Horror"],
      isNew: true
    },
    {
      id: 8,
      title: "Attack on Titan: Final Season",
      image: "https://i.redd.it/z2uyaj1t6pb91.jpg",
      rating: "4.8",
      genre: "Dark Fantasy",
      episodes: "16",
      studio: "MAPPA",
      duration: "24 min",
      description: "The war between Marley and Paradis reaches its conclusion in this final season.",
      likes: "22.3K",
      tags: ["Action", "Drama", "Fantasy"]
    },
    {
      id: 6,
      title: "My Hero Academia: Heroes Rising",
      image: "https://w0.peakpx.com/wallpaper/498/585/HD-wallpaper-heroes-rising-anime-heroes-rising-my-hero-academia.jpg",
      rating: "4.7",
      genre: "Superhero",
      episodes: "12",
      studio: "Bones",
      duration: "24 min",
      description: "Class 1-A faces their greatest villain yet while training far from home.",
      likes: "9.8K",
      tags: ["Action", "School", "Comedy"]
    },
    {
      id: 7,
      title: "Spy x Family: Second Mission",
      image: "https://a.storyblok.com/f/178900/1200x1696/48b8663276/spy-x-family-staffel-2-key-visual.jpeg/m/filters:quality(95)format(webp)",
      rating: "4.9",
      genre: "Comedy",
      episodes: "12",
      studio: "Wit Studio",
      duration: "24 min",
      description: "The Forger family continues their mission while hiding their true identities.",
      likes: "12.6K",
      tags: ["Comedy", "Action", "Slice of Life"],
      isNew: true
    }
  ];

  const featuredAnime = {
    id: 10,
    title: "Demon Slayer: Hashira Training Arc",
    image: "https://i.ytimg.com/vi/S6AZBy5bHd4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASwYmVLMSsgC0uOynTzJWs4lJzRQ",
    badge: "Season Finale",
    rating: "5.0",
    reviewCount: "324",
    views: "24.7K",
    releaseDate: "Apr 15",
    tags: ["Action", "Fantasy", "Drama"],
    description: "The highly anticipated finale drops this weekend, concluding the intense training arc and setting the stage for the final battle against Muzan."
  };

  const tabs = [
    { id: 'all', label: 'All', count: 24 },
    { id: 'action', label: 'Action', count: 16 },
    { id: 'fantasy', label: 'Fantasy', count: 12 },
    { id: 'comedy', label: 'Comedy', count: 8 },
    { id: 'romance', label: 'Romance', count: 6 }
  ];
  
  // Filter anime by search query
  const filteredAnime = trendingAnime.filter(anime => 
    searchQuery === '' || anime.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h3 className="text-2xl font-extrabold uppercase tracking-tight relative flex items-center">
          <TrendingUp className={accentColor} size={24} strokeWidth={2.5} />
          <span className="ml-2">
            <span className={accentColor}>Trending</span> Anime
          </span>
          <span className={`block h-1 ${accentBg} w-12 mt-1 absolute -bottom-1 left-0`}></span>
        </h3>
        
        <div className="flex items-center gap-2">
          {showSearch ? (
            <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg overflow-hidden flex items-center pr-2`}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anime..."
                className={`py-1 px-3 text-sm w-full outline-none ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                autoFocus
              />
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowSearch(false);
                }}
                className="text-gray-500"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              className={`p-2 rounded-md ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              aria-label="Search anime"
            >
              <Search size={18} />
            </button>
          )}
          
          <div className="hidden sm:block border-l h-6 mx-1 border-gray-300 dark:border-gray-700"></div>
          
          <div className="hidden md:flex space-x-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors flex items-center ${
                  activeTab === tab.id 
                    ? `${accentBg} text-white` 
                    : `${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`
                }`}
              >
                {tab.label}
                <span className={`ml-1 text-xs ${activeTab === tab.id ? 'bg-white bg-opacity-20 text-black' : 'bg-gray-500 text-white bg-opacity-20'} px-1.5 py-0.5 rounded-full`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile tabs */}
      <div className="md:hidden mb-4 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-2 pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors whitespace-nowrap flex items-center ${
                activeTab === tab.id 
                  ? `${accentBg} text-white` 
                  : `${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`
              }`}
            >
              {tab.label}
              <span className={`ml-1 text-xs ${activeTab === tab.id ? 'bg-white bg-opacity-20 text-black' : 'bg-gray-500 text-white bg-opacity-20'} px-1.5 py-0.5 rounded-full`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured anime section */}
      <div className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden p-4 md:p-6 mb-6 shadow-md hover:shadow-xl transition-shadow duration-300`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeaturedAnime 
            anime={featuredAnime} 
            accentColor={accentColor} 
            accentBg={accentBg}
            darkMode={darkMode}
          />
          
          <div>
            <h4 className="text-xl font-extrabold uppercase mb-3 tracking-tight flex items-center">
              {featuredAnime.title}
              <span className={`ml-2 ${accentBg} text-white text-xs px-2 py-0.5 rounded-full uppercase`}>
                Exclusive
              </span>
            </h4>
            <p className="mb-4 text-sm">
              {featuredAnime.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {featuredAnime.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} px-3 py-1 text-xs font-bold rounded-full hover:${accentBg} hover:text-white transition-colors duration-300 cursor-pointer`}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="#F59E0B" stroke="none" className="hover:scale-125 transition-transform" />
                ))}
              </div>
              <span className="text-sm">{featuredAnime.rating} ({featuredAnime.reviewCount} reviews)</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1 text-sm">
                <Eye size={16} />
                <span>{featuredAnime.views} views</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Calendar size={16} />
                <span>Released: {featuredAnime.releaseDate}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <BookOpen size={16} />
                <span>12 chapters</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <a 
                href={`/series/details/${featuredAnime.id}`} 
                className={`${accentBg} text-white font-bold uppercase py-2 px-4 rounded-lg transform hover:translate-y-1 transition-all inline-flex items-center gap-2 group`}
              >
                <span>Watch Now</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button 
                className={`border ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'} rounded-lg px-4 py-2 font-medium transition-colors inline-flex items-center gap-2`}
              >
                <Bookmark size={16} />
                <span>Add to List</span>
              </button>
              
              <button 
                className={`border ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'} rounded-lg p-2 font-medium transition-colors`}
                aria-label="Share"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trending anime cards */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div 
              key={i} 
              className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden p-4 rounded-lg animate-pulse`}
              style={{height: '144px'}}
            >
              <div className="flex gap-4">
                <div className="w-24 h-32 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-1/4"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mb-1 w-full"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-5/6"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mt-4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAnime.length > 0 ? filteredAnime.map((anime) => (
            <AnimeCard 
              key={anime.id} 
              anime={anime} 
              accentColor={accentColor} 
              accentBg={accentBg} 
              darkMode={darkMode}
              secondaryBg={secondaryBg}
            />
          )) : (
            <div className={`col-span-2 ${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-8 rounded-lg text-center`}>
              <p className="text-gray-500 mb-2">No anime matches your search.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className={`${accentColor} text-sm font-medium`}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      )}
      
      {/* View all button */}
      {/* {filteredAnime.length > 0 && !searchQuery && (
        <div className="flex justify-center mt-8">
          <a 
            href="/trending" 
            className={`border ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'} rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2 transition-colors duration-300`}
          >
            <span>View All Trending Anime</span>
            <ChevronRight size={16} />
          </a>
        </div>
      )} */}
    </div>
  )
}
export default Trending;