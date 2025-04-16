'use client'
import { useState, useEffect } from 'react';
import { 
  Bell, 
  Bookmark, 
  ChevronRight, 
  Eye,
  Filter,
  Heart, 
  MessageCircle,
  Search,
  Share2, 
  Star,
  X
} from 'lucide-react';
import Featured from '../Home/Featured';

const ArticlesPage = ({ 
  articles = [], 
  darkMode = false,
  isLoading = false,
  title = "ANIME/MANGA ARTICLES"
}) => {
  const [likedArticles, setLikedArticles] = useState([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle like function
  const toggleLike = (id) => {
    if (likedArticles.includes(id)) {
      setLikedArticles(likedArticles.filter(articleId => articleId !== id));
    } else {
      setLikedArticles([...likedArticles, id]);
    }
  };

  // Toggle bookmark function
  const toggleBookmark = (id) => {
    if (bookmarkedArticles.includes(id)) {
      setBookmarkedArticles(bookmarkedArticles.filter(articleId => articleId !== id));
    } else {
      setBookmarkedArticles([...bookmarkedArticles, id]);
    }
  };

  // Extract unique categories from articles for filter
  const categories = ['all', ...Array.from(new Set(articles.map(article => article.category?.toLowerCase())))].filter(Boolean);

  // Filter articles by category and search query
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || 
      (article.category && article.category.toLowerCase() === activeCategory.toLowerCase());
    
    const matchesSearch = !searchQuery ||
      article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });


  // Skeleton loader for cards
  const CardSkeleton = () => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 animate-pulse`}>
      <div className="h-48 bg-gray-300 dark:bg-gray-600"></div>
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 items-center">
            <div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
          </div>
          <div className="flex space-x-2">
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );

  // Category styling function
  const getCategoryStyle = (category) => {
    const lowerCategory = category?.toLowerCase() || '';
    
    if (lowerCategory.includes('shonen')) return 'bg-blue-500';
    if (lowerCategory.includes('seinen')) return 'bg-red-500';
    if (lowerCategory.includes('shojo')) return 'bg-pink-500';
    if (lowerCategory.includes('industry')) return 'bg-purple-500';
    if (lowerCategory.includes('movie')) return 'bg-green-500';
    if (lowerCategory.includes('gaming')) return 'bg-yellow-500';
    if (lowerCategory.includes('merchandise')) return 'bg-orange-500';
    return 'bg-gray-500';
  };

  // Format view count for display
  const formatViewCount = (count) => {
    if (!count && count !== 0) return '0';
    
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };

  return (
    <div className={`w-full max-w-8xl mx-auto ${darkMode ? 'text-gray-200 bg-gray-900' : 'text-gray-900 bg-gray-100'}`}>
      {/* Notification Bar */}
      <div className={`flex items-center mb-6 p-3 rounded-lg ${darkMode ? 'bg-violet-900 bg-opacity-30' : 'bg-violet-100'} border-l-4 border-pink-500`}>
        <Bell size={18} className={`mr-2 ${darkMode ? 'text-pink-400' : 'text-pink-500'}`} />
        <p className="text-sm flex-grow">
          <span className="font-bold">NEW:</span> Exclusive industry interviews published weekly! 
          <button className="underline ml-2 font-semibold">Check Latest</button>
        </p>
        <button className={`text-xs font-bold px-2 py-1 rounded ${darkMode ? 'bg-violet-800 text-violet-200' : 'bg-violet-200 text-violet-800'}`}>
          SUBSCRIBE
        </button>
      </div>

      {/* Top Controls */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <h1 className={`text-3xl font-black`}>
          <span className={`${darkMode ? 'bg-violet-950' : 'bg-violet-900'} text-white inline-block px-4 py-1 transform -rotate-1 rounded-sm`}>
            {title}
          </span>
        </h1>
        
        <div className="flex space-x-2">
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border border-gray-300 dark:border-gray-700`}
            aria-label="Search"
          >
            <Search size={20} className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
          </button>
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border border-gray-300 dark:border-gray-700`}
            aria-label="Filter"
          >
            <Filter size={20} className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
          </button>
        </div>
      </div>

      {/* Search Bar - Expandable */}
      {searchOpen && (
        <div className={`mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg`}>
          <div className="flex items-center">
            <Search size={20} className={`mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input 
              type="text" 
              placeholder="Search articles by title, author, or topic..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`flex-grow outline-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
            />
            <button 
              onClick={() => setSearchOpen(false)}
              className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <X size={20} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
            </button>
          </div>
        </div>
      )}

      {/* Filter Bar - Expandable */}
      {filterOpen && (
        <div className={`mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg`}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold">Filter by Category</h3>
            <button 
              onClick={() => setFilterOpen(false)}
              className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <X size={20} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button 
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 rounded-full text-sm font-bold ${
                  activeCategory === category 
                    ? category === 'all'
                      ? `${darkMode ? 'bg-violet-800 text-violet-200' : 'bg-violet-600 text-white'}`
                      : getCategoryStyle(category) + ' text-white'
                    : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`
                } transition-colors`}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Featured Articles */}
      <Featured darkMode={darkMode}/>
      {/* All Articles Grid */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <h2 className={`text-2xl font-black ${darkMode ? 'bg-violet-950' : 'bg-violet-900'} text-white inline-block px-4 py-1 transform -rotate-1 rounded-sm relative`}>
            {activeCategory === 'all' ? 'ALL ARTICLES' : activeCategory.toUpperCase() + ' ARTICLES'}
          </h2>
          <div className={`ml-4 h-1 flex-grow ${darkMode ? 'bg-gradient-to-r from-pink-600 to-violet-900' : 'bg-gradient-to-r from-pink-500 to-violet-900'} rounded-full`}></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Skeleton loaders while content loads
            [...Array(6)].map((_, i) => <CardSkeleton key={i} />)
          ) : (
            filteredArticles.map((article) => (
              <div 
                key={article.id} 
                className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:border-violet-600' : 'bg-white border-gray-200 hover:border-violet-500'} rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:-translate-y-1 group`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={article.img || "/api/placeholder/600/400"} 
                    alt={article.title} 
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {article.category && (
                    <span className={`absolute top-0 right-0 ${getCategoryStyle(article.category)} text-white px-3 py-1 font-bold`}>
                      {article.category}
                    </span>
                  )}
                  {article.isHot && (
                    <span className="absolute top-0 left-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 font-bold flex items-center">
                      <Star size={14} className="mr-1" />
                      HOT
                    </span>
                  )}
                  {article.reads !== undefined && (
                    <div className="absolute bottom-0 left-0 bg-gradient-to-r from-violet-900 to-purple-800 text-white px-3 py-1 font-bold flex items-center">
                      <Eye size={14} className="mr-1" />
                      {formatViewCount(article.reads)} readers
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className={`text-xl font-black mt-2 ${darkMode ? 'text-violet-300' : 'text-violet-900'} group-hover:text-pink-500 transition-colors line-clamp-2`}>
                    {article.title}
                  </h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-3 line-clamp-2`}>
                    {article.excerpt}
                  </p>
                  <div className={`flex items-center mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                    <div className="relative">
                      <img 
                        src={article.authorImage || "/api/placeholder/30/30"} 
                        alt={article.author} 
                        className="h-6 w-6 rounded-full border border-pink-400" 
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                    </div>
                    <span className="font-bold ml-2 truncate max-w-24">
                      {article.author || 'Anonymous'}
                    </span>
                    {article.time && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{article.time}</span>
                      </>
                    )}
                    <div className="ml-auto flex space-x-2 items-center">
                      {article.comments !== undefined && (
                        <span className="flex items-center text-xs">
                          <MessageCircle size={14} className="mr-1" />
                          {article.comments}
                        </span>
                      )}
                      <button 
                        onClick={() => toggleLike(article.id)}
                        className={`${
                          likedArticles.includes(article.id)
                            ? 'text-pink-500 dark:text-pink-400'
                            : darkMode ? 'text-gray-400 hover:text-pink-400' : 'text-gray-500 hover:text-pink-500'
                        } transition-colors`}
                        aria-label="Like article"
                      >
                        <Heart size={16} className={likedArticles.includes(article.id) ? 'fill-current' : ''} />
                      </button>
                      <button 
                        onClick={() => toggleBookmark(article.id)}
                        className={`${
                          bookmarkedArticles.includes(article.id)
                            ? 'text-violet-500 dark:text-violet-400'
                            : darkMode ? 'text-gray-400 hover:text-violet-400' : 'text-gray-500 hover:text-violet-500'
                        } transition-colors`}
                        aria-label="Bookmark article"
                      >
                        <Bookmark size={16} className={bookmarkedArticles.includes(article.id) ? 'fill-current' : ''} />
                      </button>
                      <button className={`${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-500 hover:text-cyan-600'} transition-colors`}>
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {!isLoading && filteredArticles.length === 0 && (
          <div className={`text-center py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg`}>
            <p className="text-lg font-bold mb-2">No articles found {searchQuery ? 'matching your search' : 'in this category'}</p>
            <button 
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className={`${darkMode ? 'bg-violet-800 hover:bg-violet-700' : 'bg-violet-600 hover:bg-violet-700'} text-white px-4 py-2 rounded-full font-bold mt-2`}
            >
              View all articles
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ArticlesPage;