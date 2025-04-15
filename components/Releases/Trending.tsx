import { Star, ChevronRight, Eye, Heart, Clock, Calendar, TrendingUp } from 'lucide-react'
import React, { useState } from 'react'

const AnimeCard = ({ anime, accentColor, darkMode, accentBg, secondaryBg }) => {
  return (
    <div 
      className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden p-4 rounded-lg transform hover:scale-102 transition-all duration-300 hover:shadow-xl`}
    >
      <div className="flex gap-4">
        <div className="w-24 h-32 overflow-hidden rounded-md relative group">
          <img 
            src={anime.image} 
            alt={anime.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
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
        </div>
        <div className="flex-1">
          <h5 className="font-bold mb-1 line-clamp-1">{anime.title}</h5>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>{anime.genre}</span>
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center`}>
              <Clock size={10} className="mr-1" /> {anime.duration}
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-2 line-clamp-2">
            {anime.description || `Latest release from ${anime.studio}. New episodes weekly.`}
          </p>
          <div className="flex items-center justify-between">
            <a href="#" className={`text-xs ${accentColor} font-bold flex items-center group`}>
              View Details 
              <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <Heart size={14} />
              </button>
              <span className="text-xs text-gray-500">{anime.likes || '42'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FeaturedAnime = ({ anime, accentColor, accentBg, darkMode }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img 
        src={anime.image || "/api/placeholder/400/250"}
        alt={anime.title} 
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute top-3 left-3">
        <div className={`${accentBg} text-white px-3 py-1 text-sm font-bold rounded-tr-md rounded-bl-md transform -rotate-2 shadow-md`}>
          {anime.badge || "Season Finale"}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h4 className="text-xl font-extrabold text-white mb-2 drop-shadow-md">
          {anime.title}
        </h4>
        <div className="flex flex-wrap gap-2 mb-3">
          {anime.tags?.map((tag, index) => (
            <span key={index} className="px-2 py-0.5 text-xs font-medium bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors cursor-pointer">
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
    </div>
  )
}

const Trending = ({ accentColor, accentBg, secondaryBg, darkMode }) => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample enhanced data
  const trendingAnime = [
    {
      id: 1,
      title: "Jujutsu Kaisen: Shibuya Incident",
      image: "/api/placeholder/120/120",
      rating: "4.9",
      genre: "Action",
      episodes: "24",
      studio: "MAPPA",
      duration: "24 min",
      description: "Yuji and the sorcerers face their greatest threat yet in the Shibuya district.",
      likes: "14.5K",
      tags: ["Action", "Supernatural", "Horror"]
    },
    {
      id: 2,
      title: "Attack on Titan: Final Season",
      image: "/api/placeholder/120/120",
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
      id: 3,
      title: "My Hero Academia: Heroes Rising",
      image: "/api/placeholder/120/120",
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
      id: 4,
      title: "Spy x Family: Second Mission",
      image: "/api/placeholder/120/120",
      rating: "4.9",
      genre: "Comedy",
      episodes: "12",
      studio: "Wit Studio",
      duration: "24 min",
      description: "The Forger family continues their mission while hiding their true identities.",
      likes: "12.6K",
      tags: ["Comedy", "Action", "Slice of Life"]
    }
  ];

  const featuredAnime = {
    id: 0,
    title: "Demon Slayer: Hashira Training Arc",
    image: "/api/placeholder/600/400",
    badge: "Season Finale",
    rating: "5.0",
    reviewCount: "324",
    views: "24.7K",
    releaseDate: "Apr 15",
    tags: ["Action", "Fantasy", "Drama"],
    description: "The highly anticipated finale drops this weekend, concluding the intense training arc and setting the stage for the final battle against Muzan."
  };

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'action', label: 'Action' },
    { id: 'fantasy', label: 'Fantasy' },
    { id: 'comedy', label: 'Comedy' },
    { id: 'romance', label: 'Romance' }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-extrabold uppercase tracking-tight relative flex items-center">
          <TrendingUp className={accentColor} size={24} strokeWidth={2.5} />
          <span className="ml-2">
            <span className={accentColor}>Trending</span> Anime
          </span>
          <span className={`block h-1 ${accentBg} w-12 mt-1 absolute bottom-0 left-0`}></span>
        </h3>
        
        <div className="hidden md:flex space-x-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id 
                  ? `${accentBg} text-white` 
                  : `${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="md:hidden mb-4 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-2 pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === tab.id 
                  ? `${accentBg} text-white` 
                  : `${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden p-6 mb-6 shadow-md hover:shadow-xl transition-shadow duration-300`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeaturedAnime 
            anime={featuredAnime} 
            accentColor={accentColor} 
            accentBg={accentBg}
            darkMode={darkMode}
          />
          
          <div>
            <h4 className="text-xl font-extrabold uppercase mb-3 tracking-tight">
              {featuredAnime.title}
            </h4>
            <p className="mb-4 text-sm">
              {featuredAnime.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {featuredAnime.tags.map((tag, idx) => (
                <span key={idx} className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} px-3 py-1 text-xs font-bold rounded-full hover:${accentBg} hover:text-white transition-colors duration-300 cursor-pointer`}>
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
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center gap-1 text-sm">
                <Eye size={16} />
                <span>{featuredAnime.views} views</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Calendar size={16} />
                <span>Released: {featuredAnime.releaseDate}</span>
              </div>
            </div>
            
            <a href="#" className={`${accentBg} text-white font-bold uppercase py-2 px-4 rounded-lg transform hover:translate-y-1 transition-all inline-flex items-center gap-2 group`}>
              <span>Watch Now</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trendingAnime.map((anime) => (
          <AnimeCard 
            key={anime.id} 
            anime={anime} 
            accentColor={accentColor} 
            accentBg={accentBg} 
            darkMode={darkMode}
            secondaryBg={secondaryBg}
          />
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        {/* <a href="#" className={`border ${darkMode ? 'border-gray-700' : 'border-gray-300'} ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2 transition-colors duration-300`}>
          <span>View All Trending Anime</span>
          <ChevronRight size={16} />
        </a> */}
      </div>
    </div>
  )
}

export default Trending