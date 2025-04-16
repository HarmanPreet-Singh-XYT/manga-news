import React, { useState } from 'react';
import { BookOpen, Star, Clock, Filter, Search, ChevronDown, ChevronUp, Heart, BookMarked, XCircle } from 'lucide-react';

const MyLibrary = ({ activeTab, darkMode }) => {
  const [sortBy, setSortBy] = useState('recently-read');
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(['All']);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock manga data with more properties
  const mangaList = [
    { 
      id: 1, 
      title: "One Piece", 
      lastChapter: 1082, 
      lastRead: 1080, 
      readProgress: 99, 
      isNew: true, 
      coverColor: "bg-blue-100", 
      categories: ["Action", "Adventure", "Fantasy"],
      isFavorite: true
    },
    { 
      id: 2, 
      title: "Jujutsu Kaisen", 
      lastChapter: 240, 
      lastRead: 217, 
      readProgress: 90, 
      isNew: false, 
      coverColor: "bg-purple-100",
      categories: ["Action", "Supernatural", "School"],
      isFavorite: false
    },
    { 
      id: 3, 
      title: "Chainsaw Man", 
      lastChapter: 156, 
      lastRead: 156, 
      readProgress: 100, 
      isNew: false, 
      coverColor: "bg-red-100",
      categories: ["Action", "Horror", "Supernatural"],
      isFavorite: true
    },
    { 
      id: 4, 
      title: "Spy x Family", 
      lastChapter: 87, 
      lastRead: 45, 
      readProgress: 52, 
      isNew: false, 
      coverColor: "bg-green-100",
      categories: ["Comedy", "Action", "Slice of Life"],
      isFavorite: false
    },
    { 
      id: 5, 
      title: "My Hero Academia", 
      lastChapter: 402, 
      lastRead: 380, 
      readProgress: 94, 
      isNew: false, 
      coverColor: "bg-yellow-100",
      categories: ["Action", "Superhero", "School"],
      isFavorite: false
    },
    { 
      id: 6, 
      title: "Demon Slayer", 
      lastChapter: 205, 
      lastRead: 205, 
      readProgress: 100, 
      isNew: true, 
      coverColor: "bg-red-100",
      categories: ["Action", "Historical", "Supernatural"],
      isFavorite: true
    }
  ];

  // All available categories for filtering
  const allCategories = ["Action", "Adventure", "Comedy", "Fantasy", "Horror", "School", "Slice of Life", "Supernatural", "Superhero", "Historical"];

  // Filter and sort the manga list
  let filteredManga = [...mangaList];
  
  // Apply search filter
  if (searchTerm) {
    filteredManga = filteredManga.filter(manga => 
      manga.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // Apply category filter
  if (!selectedCategories.includes('All')) {
    filteredManga = filteredManga.filter(manga => 
      selectedCategories.some(cat => manga.categories.includes(cat))
    );
  }
  
  // Apply sorting
  filteredManga.sort((a, b) => {
    switch (sortBy) {
      case 'alphabetical':
        return a.title.localeCompare(b.title);
      case 'progress':
        return b.readProgress - a.readProgress;
      case 'recently-read':
      default:
        return b.lastRead - a.lastRead;
    }
  });

  const toggleCategory = (category) => {
    if (category === 'All') {
      setSelectedCategories(['All']);
      return;
    }
    
    let newCategories = [...selectedCategories];
    if (newCategories.includes('All')) {
      newCategories = [category];
    } else if (newCategories.includes(category)) {
      newCategories = newCategories.filter(cat => cat !== category);
      if (newCategories.length === 0) newCategories = ['All'];
    } else {
      newCategories.push(category);
    }
    
    setSelectedCategories(newCategories);
  };

  const toggleFavorite = (id) => {
    // In a real app, this would update state
    console.log(`Toggled favorite for manga ID ${id}`);
  };

  return (
    <>
      {activeTab === 'library' && (
        <div className="space-y-6">
          {/* Animated Title with shaking effect on hover */}
          <h1 
            className={`text-3xl font-black uppercase transform -skew-x-3 hover:scale-105 transition-transform ${darkMode ? 'text-pink-500' : 'text-violet-600'}`} 
            style={{ 
              textShadow: darkMode ? '3px 3px 0px #831843' : '3px 3px 0px #7c3aed',
              transition: 'transform 0.2s'
            }}
          >
            MY MANGA COLLECTION
          </h1>
          
          {/* Search and Filter Controls */}
          <div className={`flex flex-col md:flex-row gap-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search your library..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border focus:ring-2 ${darkMode ? 'focus:ring-pink-500' : 'focus:ring-violet-500'} outline-none`}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <XCircle size={18} />
                </button>
              )}
            </div>
            
            {/* Sort control */}
            <div className="flex gap-2">
              <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded px-3 py-2`}>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`appearance-none pr-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} outline-none`}
                >
                  <option value="recently-read">Recently Read</option>
                  <option value="alphabetical">A-Z</option>
                  <option value="progress">Completion</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              <button 
                onClick={() => setShowFilter(!showFilter)}
                className={`flex items-center gap-1 px-3 py-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded transition-colors`}
              >
                <Filter size={16} />
                <span className="hidden md:inline">Filter</span>
                {showFilter ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
          </div>
          
          {/* Filter categories */}
          {showFilter && (
            <div className={`p-4 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex flex-wrap gap-2`}>
              <button
                onClick={() => toggleCategory('All')}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${selectedCategories.includes('All') 
                  ? (darkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white') 
                  : (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700')}`}
              >
                All
              </button>
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`text-xs px-3 py-1 rounded-full transition-colors ${selectedCategories.includes(category) 
                    ? (darkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white') 
                    : (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700')}`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
          
          {/* Manga Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredManga.length > 0 ? filteredManga.map((manga) => (
              <div 
                key={manga.id}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} transform ${manga.id % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:scale-105 transition-all duration-300`}
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                  boxShadow: darkMode 
                    ? `3px 3px 0px rgba(236, 72, 153, 0.3)${manga.isFavorite ? ', 0 0 15px rgba(236, 72, 153, 0.5)' : ''}` 
                    : `3px 3px 0px rgba(124, 58, 237, 0.3)${manga.isFavorite ? ', 0 0 15px rgba(124, 58, 237, 0.5)' : ''}`
                }}
              >
                <div className="relative overflow-hidden">
                  <div className={`aspect-w-2 aspect-h-3 ${darkMode ? 'bg-gray-700' : manga.coverColor}`}>
                    {/* This could be an actual image in a real app */}
                    <div className="flex items-center justify-center text-lg font-bold">
                      {manga.title.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                    <div 
                      className={`h-full ${darkMode ? 'bg-pink-500' : 'bg-violet-500'}`}
                      style={{ width: `${manga.readProgress}%` }}
                    ></div>
                  </div>
                  
                  {/* New badge */}
                  {manga.isNew && (
                    <span 
                      className="absolute top-2 right-2 py-1 px-3 bg-yellow-500 text-black font-bold text-xs" 
                      style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}
                    >
                      NEW
                    </span>
                  )}
                  
                  {/* Favorite button */}
                  <button 
                    onClick={() => toggleFavorite(manga.id)}
                    className="absolute top-2 left-2 p-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-opacity"
                  >
                    <Heart 
                      size={16} 
                      className={manga.isFavorite ? 'text-red-500 fill-red-500' : 'text-white'} 
                    />
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg uppercase tracking-tight">{manga.title}</h3>
                    <div className="flex items-center gap-1 text-xs">
                      <Clock size={14} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                        Updated
                      </span>
                    </div>
                  </div>
                  
                  {/* Category tags */}
                  <div className="flex flex-wrap gap-1 mt-1 mb-2">
                    {manga.categories.slice(0, 2).map(category => (
                      <span 
                        key={category} 
                        className={`text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {category}
                      </span>
                    ))}
                    {manga.categories.length > 2 && (
                      <span className={`text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                        +{manga.categories.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex justify-between`}>
                    <span className="flex items-center gap-1">
                      <BookMarked size={14} />
                      <span>Ch. {manga.lastRead}/{manga.lastChapter}</span>
                    </span>
                    <span>{manga.readProgress}%</span>
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <button 
                      className={`text-sm px-3 py-1 flex items-center gap-1 font-bold ${
                        darkMode 
                          ? 'bg-pink-600 hover:bg-pink-700 text-white' 
                          : 'bg-violet-600 hover:bg-violet-700 text-white'
                      } rounded transition-colors`}
                    >
                      <BookOpen size={14} />
                      CONTINUE
                    </button>
                    <button className={`text-sm ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}>
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>
            )) : (
              <div className={`col-span-3 py-10 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <p className="text-lg font-medium">No manga found matching your filters</p>
                <p className="mt-2">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
          
          {/* Load more button */}
          {filteredManga.length > 0 && (
            <div className="flex justify-center mt-8">
              <button 
                className={`py-2 px-8 font-bold uppercase ${
                  darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-violet-600 hover:bg-violet-700'
                } text-white transform -skew-x-6 hover:scale-105 transition-transform`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
              >
                LOAD MORE
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyLibrary;