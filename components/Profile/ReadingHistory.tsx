import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, Star, Bookmark, ChevronRight, X, Filter } from 'lucide-react';

const ReadingHistory = ({ darkMode, activeTab }) => {
  // Sample manga data with more details
  const [mangaHistory, setMangaHistory] = useState([
    {
      id: 1,
      title: "One Piece",
      chapter: 1084,
      daysAgo: 1,
      coverImage: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      lastRead: "2025-04-16",
      progress: 85,
      isBookmarked: true,
      rating: 5,
      genre: "Shonen"
    },
    {
      id: 2,
      title: "Jujutsu Kaisen",
      chapter: 253,
      daysAgo: 2,
      coverImage: "https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_.jpg",
      lastRead: "2025-04-15",
      progress: 92,
      isBookmarked: false,
      rating: 4,
      genre: "Supernatural"
    },
    {
      id: 3,
      title: "Chainsaw Man",
      chapter: 156,
      daysAgo: 3,
      coverImage: "https://m.media-amazon.com/images/I/71WYpi-EtgL._AC_UF1000,1000_QL80_.jpg",
      lastRead: "2025-04-14",
      progress: 78,
      isBookmarked: true,
      rating: 5,
      genre: "Horror"
    },
    {
      id: 4,
      title: "Spy x Family",
      chapter: 89,
      daysAgo: 4,
      coverImage: "https://m.media-amazon.com/images/M/MV5BZDkwNjc0NWEtNzJlOC00N2YwLTk4MjktZGFlZDE2Y2QzOWI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      lastRead: "2025-04-13",
      progress: 65,
      isBookmarked: false,
      rating: 4,
      genre: "Comedy"
    },
    {
      id: 5,
      title: "My Hero Academia",
      chapter: 422,
      daysAgo: 6,
      coverImage: "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      lastRead: "2025-04-11",
      progress: 94,
      isBookmarked: true,
      rating: 3,
      genre: "Shonen"
    }
  ]);

  // State for view options
  const [viewMode, setViewMode] = useState('all'); // 'all', 'bookmarked', 'recent'
  const [showFilters, setShowFilters] = useState(false);
  const [filterGenre, setFilterGenre] = useState('All');
  const [sortBy, setSortBy] = useState('recent'); // 'recent', 'title', 'rating'

  // Function to toggle bookmark
  const toggleBookmark = (id) => {
    setMangaHistory(prev => 
      prev.map(manga => 
        manga.id === id ? {...manga, isBookmarked: !manga.isBookmarked} : manga
      )
    );
  };

  // Function to remove from history
  const removeFromHistory = (id) => {
    setMangaHistory(prev => prev.filter(manga => manga.id !== id));
  };

  // Apply filters and sorting
  const filteredManga = mangaHistory.filter(manga => {
    if (viewMode === 'bookmarked' && !manga.isBookmarked) return false;
    if (viewMode === 'recent' && manga.daysAgo > 3) return false;
    if (filterGenre !== 'All' && manga.genre !== filterGenre) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'recent') return a.daysAgo - b.daysAgo;
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  // Available genres for filtering
  const genres = ['All', 'Shonen', 'Supernatural', 'Horror', 'Comedy'];

  // Anime-inspired animation effect
  const [animateItem, setAnimateItem] = useState(null);
  
  useEffect(() => {
    if (animateItem !== null) {
      const timer = setTimeout(() => {
        setAnimateItem(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [animateItem]);

  if (activeTab !== 'history') {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Anime-Style Header */}
      <div className="relative">
        <h1 
          className={`text-3xl font-black uppercase transform -skew-x-3 ${darkMode ? 'text-pink-500' : 'text-violet-600'}`} 
          style={{ textShadow: darkMode ? '3px 3px 0px #831843' : '3px 3px 0px #7c3aed' }}
        >
          READING HISTORY
        </h1>
        <div 
          className={`absolute -bottom-1 left-0 h-1 w-3/4 ${darkMode ? 'bg-pink-600' : 'bg-violet-600'}`}
          style={{ transform: 'skewX(-20deg)' }}
        ></div>
      </div>
      
      {/* Controls Section */}
      <div className={`flex flex-wrap items-center justify-between gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {/* View Toggle */}
        <div className="flex border rounded-md overflow-hidden">
          <button 
            onClick={() => setViewMode('all')} 
            className={`px-3 py-1 text-sm font-bold transition-colors ${viewMode === 'all' ? 
              (darkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white') : 
              (darkMode ? 'bg-gray-800' : 'bg-gray-100')}`}
          >
            All
          </button>
          <button 
            onClick={() => setViewMode('bookmarked')} 
            className={`px-3 py-1 text-sm font-bold transition-colors flex items-center ${viewMode === 'bookmarked' ? 
              (darkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white') : 
              (darkMode ? 'bg-gray-800' : 'bg-gray-100')}`}
          >
            <Bookmark size={14} className="mr-1" /> Bookmarked
          </button>
          <button 
            onClick={() => setViewMode('recent')} 
            className={`px-3 py-1 text-sm font-bold transition-colors flex items-center ${viewMode === 'recent' ? 
              (darkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white') : 
              (darkMode ? 'bg-gray-800' : 'bg-gray-100')}`}
          >
            <Clock size={14} className="mr-1" /> Recent
          </button>
        </div>
        
        {/* Filter Button */}
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-1 text-sm font-bold px-3 py-1 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
        >
          <Filter size={14} /> Filters
        </button>
      </div>
      
      {/* Filter Options */}
      {showFilters && (
        <div className={`p-4 rounded-md ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="flex justify-between mb-2">
            <h3 className="font-bold">Filter Options</h3>
            <button onClick={() => setShowFilters(false)}>
              <X size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Genre Filter */}
            <div>
              <label className="block text-sm font-medium mb-1">Genre</label>
              <select 
                value={filterGenre}
                onChange={(e) => setFilterGenre(e.target.value)}
                className={`w-full px-3 py-2 rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border`}
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
            
            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium mb-1">Sort By</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`w-full px-3 py-2 rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border`}
              >
                <option value="recent">Most Recent</option>
                <option value="title">Title (A-Z)</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content Area */}
      <div 
        className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform -rotate-1`} 
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 98% 95%, 95% 100%, 0 100%)',
          boxShadow: darkMode ? '4px 4px 0px rgba(236, 72, 153, 0.3)' : '4px 4px 0px rgba(124, 58, 237, 0.3)'
        }}
      >
        <div className="space-y-4">
          {filteredManga.length === 0 ? (
            <div className={`p-8 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="mb-4 flex justify-center">
                <BookOpen size={48} strokeWidth={1} />
              </div>
              <h3 className="text-lg font-bold mb-2">No manga in your history</h3>
              <p>Try adjusting your filters or explore new manga to read!</p>
            </div>
          ) : (
            filteredManga.map((manga) => (
              <div 
                key={manga.id} 
                className={`p-4 ${darkMode ? 'bg-gray-700 hover:bg-gray-650' : 'bg-indigo-50 hover:bg-indigo-100'} 
                  flex items-center ${manga.id % 2 === 0 ? 'transform rotate-1' : ''}
                  ${animateItem === manga.id ? 'scale-105' : ''} transition-all duration-300`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}
                onMouseEnter={() => setAnimateItem(manga.id)}
              >
                {/* Cover Image */}
                <div className="relative mr-4">
                  <img 
                    src={manga.coverImage} 
                    alt={manga.title} 
                    className="w-12 h-16 object-cover" 
                  />
                  {/* Progress Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                    <div 
                      className={`h-full ${darkMode ? 'bg-pink-500' : 'bg-violet-500'}`}
                      style={{ width: `${manga.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-bold">{manga.title}</h3>
                    {/* Rating Stars */}
                    <div className="ml-2 flex">
                      {[...Array(manga.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={`fill-current ${darkMode ? 'text-yellow-500' : 'text-yellow-500'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="inline-flex items-center">
                      <BookOpen size={12} className="mr-1" /> Ch. {manga.chapter}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="inline-flex items-center">
                      <Clock size={12} className="mr-1" /> {manga.daysAgo} {manga.daysAgo === 1 ? 'day' : 'days'} ago
                    </span>
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-opacity-50 inline-block" 
                      style={{
                        backgroundColor: darkMode ? 'rgba(236, 72, 153, 0.2)' : 'rgba(124, 58, 237, 0.2)',
                        color: darkMode ? 'rgb(236, 72, 153)' : 'rgb(124, 58, 237)'
                      }}
                    >
                      {manga.genre}
                    </span>
                  </p>
                </div>
                
                {/* Actions */}
                <div className="flex items-center space-x-2">
                  {/* Bookmark Toggle */}
                  <button 
                    onClick={() => toggleBookmark(manga.id)}
                    className={`p-1 rounded-full ${
                      manga.isBookmarked 
                        ? (darkMode ? 'text-pink-500' : 'text-violet-500') 
                        : (darkMode ? 'text-gray-500' : 'text-gray-400')
                    } hover:bg-opacity-20 ${
                      darkMode ? 'hover:bg-gray-600' : 'hover:bg-indigo-200'
                    }`}
                  >
                    <Bookmark size={18} className={manga.isBookmarked ? "fill-current" : ""} />
                  </button>
                  
                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromHistory(manga.id)}
                    className={`p-1 rounded-full ${darkMode ? 'text-gray-500 hover:text-pink-500 hover:bg-gray-600' : 'text-gray-400 hover:text-violet-500 hover:bg-indigo-200'} hover:bg-opacity-20`}
                  >
                    <X size={18} />
                  </button>
                  
                  {/* Continue Reading Button */}
                  <button 
                    className={`ml-1 py-1 px-3 text-sm font-bold ${
                      darkMode 
                        ? 'bg-pink-600 hover:bg-pink-700' 
                        : 'bg-violet-600 hover:bg-violet-700'
                    } text-white transform hover:scale-105 transition-transform flex items-center`}
                    style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                  >
                    CONTINUE <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Pagination and View All */}
        <div className="flex justify-between items-center mt-6">
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Showing {filteredManga.length} of {mangaHistory.length} titles
          </div>
          
          <button 
            className={`py-2 px-8 font-bold uppercase ${
              darkMode 
                ? 'border-2 border-pink-700 hover:bg-pink-700' 
                : 'border-2 border-violet-300 hover:bg-violet-100'
            } transform skew-x-3 hover:scale-105 transition-transform`}
            style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
          >
            VIEW ALL HISTORY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadingHistory;