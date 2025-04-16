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
  X,
  Calendar,
  TrendingUp,
  Clock,
  Tag,
  ChevronDown,
  Flame,
  Menu
} from 'lucide-react';
import Featured from '../Home/Featured';
import { useRouter } from 'next/navigation';

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
  const [sortBy, setSortBy] = useState('latest');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animatedCards, setAnimatedCards] = useState({});

  useEffect(() => {
    // Load user preferences from localStorage if available
    const savedLikes = localStorage.getItem('likedArticles');
    const savedBookmarks = localStorage.getItem('bookmarkedArticles');
    
    if (savedLikes) setLikedArticles(JSON.parse(savedLikes));
    if (savedBookmarks) setBookmarkedArticles(JSON.parse(savedBookmarks));
    
    // Add staggered animation for cards
    if (articles.length) {
      const animationTimings = {};
      articles.forEach((article, index) => {
        setTimeout(() => {
          setAnimatedCards(prev => ({
            ...prev,
            [article.id]: true
          }));
        }, index * 10);
        animationTimings[article.id] = true;
      });
    }
  }, [articles]);

  // Save preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem('likedArticles', JSON.stringify(likedArticles));
  }, [likedArticles]);

  useEffect(() => {
    localStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarkedArticles));
  }, [bookmarkedArticles]);

  // Toggle like function
  const toggleLike = (id, event) => {
    event.stopPropagation();
    if (likedArticles.includes(id)) {
      setLikedArticles(likedArticles.filter(articleId => articleId !== id));
    } else {
      setLikedArticles([...likedArticles, id]);
      
      // Show heart animation
      const heartEl = document.createElement('div');
      heartEl.className = 'heart-animation';
      document.body.appendChild(heartEl);
      
      setTimeout(() => {
        document.body.removeChild(heartEl);
      }, 1000);
    }
  };

  // Toggle bookmark function
  const toggleBookmark = (id, event) => {
    event.stopPropagation();
    if (bookmarkedArticles.includes(id)) {
      setBookmarkedArticles(bookmarkedArticles.filter(articleId => articleId !== id));
    } else {
      setBookmarkedArticles([...bookmarkedArticles, id]);
    }
  };

  // Extract unique categories from articles for filter
  const categories = ['all', ...Array.from(new Set(articles.map(article => article.category?.toLowerCase())))].filter(Boolean);

  // Sort articles function
  const sortArticles = (articles) => {
    switch(sortBy) {
      case 'popular':
        return [...articles].sort((a, b) => (b.reads || 0) - (a.reads || 0));
      case 'comments':
        return [...articles].sort((a, b) => (b.comments || 0) - (a.comments || 0));
      case 'trending':
        return [...articles].sort((a, b) => ((b.isHot ? 1 : 0) - (a.isHot ? 1 : 0)));
      case 'latest':
      default:
        // Assuming there's a date field, if not fall back to id or another field
        return [...articles].sort((a, b) => {
          if (a.date && b.date) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          }
          return b.id - a.id;
        });
        
    }
  };

  // Filter articles by category and search query
  const filteredArticles = sortArticles(articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || 
      (article.category && article.category.toLowerCase() === activeCategory.toLowerCase());
    
    const matchesSearch = !searchQuery ||
      article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  }));
  const router = useRouter();
  // Navigation to article page (simulated)
  const navigateToArticle = (id) => {
    router.push(`/article/${id}`)
    console.log(`Navigating to article ${id}`);
    // In a real app, you would use router.push or similar
  };

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

  // Category styling function with more distinctive anime/manga related styles
  const getCategoryStyle = (category) => {
    const lowerCategory = category?.toLowerCase() || '';
    
    if (lowerCategory.includes('shonen')) return 'bg-blue-600 border-l-4 border-yellow-400';
    if (lowerCategory.includes('seinen')) return 'bg-red-600 border-l-4 border-gray-800';
    if (lowerCategory.includes('shojo')) return 'bg-pink-500 border-l-4 border-pink-300';
    if (lowerCategory.includes('industry')) return 'bg-purple-600 border-l-4 border-purple-300';
    if (lowerCategory.includes('movie')) return 'bg-green-600 border-l-4 border-green-300';
    if (lowerCategory.includes('gaming')) return 'bg-yellow-500 border-l-4 border-yellow-300';
    if (lowerCategory.includes('merchandise')) return 'bg-orange-500 border-l-4 border-orange-300';
    if (lowerCategory.includes('news')) return 'bg-cyan-600 border-l-4 border-cyan-300';
    if (lowerCategory.includes('review')) return 'bg-emerald-600 border-l-4 border-emerald-300';
    if (lowerCategory.includes('cosplay')) return 'bg-fuchsia-600 border-l-4 border-fuchsia-300';
    return 'bg-violet-600 border-l-4 border-violet-300';
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
      {/* Custom CSS for heart animation */}
      <style jsx global>{`
        .heart-animation {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: url('/heart-animation.svg') no-repeat;
          background-size: contain;
          z-index: 1000;
          animation: heart-beat 1s ease-out;
          opacity: 0;
        }
        
        @keyframes heart-beat {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0.8; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.9; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
        
        .card-enter {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .card-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 300ms, transform 300ms;
        }
      `}</style>

      {/* Notification Bar */}
      <div className={`flex items-center mb-6 p-3 rounded-lg ${darkMode ? 'bg-violet-900 bg-opacity-30' : 'bg-violet-100'} border-l-4 border-pink-500 relative overflow-hidden`}>
        
        <div className="absolute top-0 right-0 border-t-16 border-r-16 border-pink-500 opacity-40"></div>
        
        <Bell size={18} className={`mr-2 ${darkMode ? 'text-pink-400' : 'text-pink-500'} animate-pulse`} />
        <p className="text-sm flex-grow">
          <span className="font-bold">NEW:</span> Exclusive interview with "Demon Slayer" creator coming this Friday! 
          <button className="underline ml-2 font-semibold">Pre-register</button>
        </p>
        <button className={`text-xs font-bold px-2 py-1 rounded ${darkMode ? 'bg-violet-800 text-violet-200 hover:bg-violet-700' : 'bg-violet-200 text-violet-800 hover:bg-violet-300'} transition-colors`}>
          SUBSCRIBE
        </button>
      </div>

      {/* Top Controls */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <h1 className={`text-3xl font-black relative`}>
          <span className={`${darkMode ? 'bg-violet-950' : 'bg-violet-900'} text-white inline-block px-4 py-1 transform -rotate-1 rounded-sm relative overflow-hidden`}>
            {title}
            {/* Manga-style speed lines */}
            <div className="absolute inset-0 bg-repeat-x opacity-10" style={{backgroundImage: "url('/speed-lines.svg')"}}></div>
          </span>
        </h1>
        
        <div className="flex space-x-2">
          {/* Sort button with dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowSortOptions(!showSortOptions)}
              className={`flex items-center px-3 py-2 rounded ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border border-gray-300 dark:border-gray-700`}
            >
              <span className="mr-1 text-sm font-medium">Sort: </span>
              <span className={`text-sm font-bold ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>
                {sortBy === 'latest' && 'Latest'}
                {sortBy === 'popular' && 'Popular'}
                {sortBy === 'comments' && 'Most Discussed'}
                {sortBy === 'trending' && 'Trending'}
              </span>
              <ChevronDown size={16} className="ml-1" />
            </button>
            
            {showSortOptions && (
              <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                <div className="py-1">
                  {['latest', 'popular', 'comments', 'trending'].map(option => (
                    <button
                      key={option}
                      className={`block px-4 py-2 text-sm w-full text-left ${
                        sortBy === option 
                          ? darkMode ? 'bg-violet-900 text-white' : 'bg-violet-100 text-violet-900'
                          : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setSortBy(option);
                        setShowSortOptions(false);
                      }}
                    >
                      <div className="flex items-center">
                        {option === 'latest' && <Clock size={14} className="mr-2" />}
                        {option === 'popular' && <Eye size={14} className="mr-2" />}
                        {option === 'comments' && <MessageCircle size={14} className="mr-2" />}
                        {option === 'trending' && <TrendingUp size={14} className="mr-2" />}
                        {option === 'latest' && 'Latest'}
                        {option === 'popular' && 'Popular'}
                        {option === 'comments' && 'Most Discussed'}
                        {option === 'trending' && 'Trending'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
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
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full md:hidden ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border border-gray-300 dark:border-gray-700`}
            aria-label="Menu"
          >
            <Menu size={20} className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg`}>
          <div className="flex justify-between mb-4">
            <h3 className="font-bold">Menu</h3>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <X size={20} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
            </button>
          </div>
          <div className="space-y-3">
            <button className={`w-full text-left py-2 px-3 rounded-lg ${darkMode ? 'bg-violet-900 text-white' : 'bg-violet-100 text-violet-900'} font-bold`}>Latest Articles</button>
            <button className={`w-full text-left py-2 px-3 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>New Releases</button>
            <button className={`w-full text-left py-2 px-3 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Top Series</button>
            <button className={`w-full text-left py-2 px-3 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Industry News</button>
            <button className={`w-full text-left py-2 px-3 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Reviews</button>
          </div>
        </div>
      )}

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
              autoFocus
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className={`p-1 mr-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <X size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
              </button>
            )}
            <button 
              onClick={() => setSearchOpen(false)}
              className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <X size={20} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
            </button>
          </div>
          
          {/* Quick search suggestions */}
          {!searchQuery && (
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs font-bold mb-2 text-gray-500 dark:text-gray-400">POPULAR SEARCHES:</p>
              <div className="flex flex-wrap gap-2">
                {['One Piece', 'Jujutsu Kaisen', 'Demon Slayer', 'Manga Releases', 'New Anime'].map((term, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSearchQuery(term)}
                    className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
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

          {/* Advanced filters */}
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs font-bold mb-2 text-gray-500 dark:text-gray-400">ADDITIONAL FILTERS:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <label className={`flex items-center p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Most Recent</span>
              </label>
              <label className={`flex items-center p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Trending</span>
              </label>
              <label className={`flex items-center p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Video Content</span>
              </label>
              <label className={`flex items-center p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Exclusive</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Featured Articles */}
      <Featured darkMode={darkMode}/>
      
      {/* Weekly Spotlight - New Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <span className={`text-2xl font-black ${darkMode ? 'bg-pink-800' : 'bg-pink-600'} text-white inline-block px-4 py-1 transform -rotate-1 rounded-sm`}>
            THIS WEEK'S SPOTLIGHT
          </span>
          <div className={`ml-4 h-1 flex-grow ${darkMode ? 'bg-gradient-to-r from-pink-600 to-violet-900' : 'bg-gradient-to-r from-pink-500 to-violet-900'} rounded-full`}></div>
        </div>

        <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-2 border-pink-500 grid md:grid-cols-2`}>
          <div className="relative">
            <img 
              src="https://a.storyblok.com/f/178900/1920x1080/33d68393d5/blue-lock-the-movie-episode-nagi.jpg" 
              alt="Weekly Spotlight" 
              className="w-full h-86 object-cover overflow-hidden" 
            />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-pink-600 to-pink-500 text-white px-3 py-1 font-bold flex items-center">
              <Flame size={16} className="mr-1" />
              EXCLUSIVE
            </div>
          </div>
          <div className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-3">
                <Tag size={16} className="mr-1 text-pink-500" />
                <span className="text-sm font-bold bg-pink-100 dark:bg-pink-900 dark:bg-opacity-30 text-pink-700 dark:text-pink-300 px-2 py-1 rounded">FEATURED</span>
              </div>
              <h3 className="text-2xl font-black mb-3 text-pink-600 dark:text-pink-400">Blue Lock Movie -Episode Nagi- Release Date Confirmed!</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              It's time for the genius to take center stage! The official release date for the highly anticipated anime film "Blue Lock The Movie -Episode Nagi-" has been locked in. Prepare to witness Seishiro Nagi's story unfold in theaters soon!
              </p>
              <div className="flex items-center mb-4">
                <Calendar size={16} className="mr-1 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">April 11, 2025</span>
                <span className="mx-2 text-gray-400">•</span>
                <Eye size={16} className="mr-1 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">47.3K readers</span>
              </div>
            </div>
            <a href={`/article/13`}>
              <button className={`self-start ${darkMode ? 'bg-pink-700 hover:bg-pink-800' : 'bg-pink-600 hover:bg-pink-700'} text-white font-bold py-2 px-4 rounded-lg flex items-center`}>
                Read Featured
                <ChevronRight size={16} className="ml-1" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="mb-12 ">
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
                onClick={() => navigateToArticle(article.id)}
                className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:border-violet-600' : 'bg-white border-gray-200 hover:border-violet-500'} rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:-translate-y-1 group cursor-pointer ${animatedCards[article.id] ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'} transition-all duration-500 relative`}
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
                      <Flame size={14} className="mr-1" />HOT
                    </span>
                  )}
                  {article.reads !== undefined && (
                    <div className="absolute bottom-0 left-0 bg-gradient-to-r from-violet-900 to-purple-800 text-white px-3 py-1 font-bold flex items-center">
                      <Eye size={14} className="mr-1" />
                      {formatViewCount(article.reads)} readers
                    </div>
                  )}
                  
                  {/* New badge for premium content */}
                  {article.isPremium && (
                    <div className="absolute bottom-0 right-0 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-3 py-1 font-bold flex items-center">
                      <Star size={14} className="mr-1" />
                      PREMIUM
                    </div>
                  )}
                  
                  {/* Reading time estimate */}
                  {article.readTime && (
                    <div className="absolute top-12 left-0 bg-black bg-opacity-70 text-white px-2 py-1 text-xs font-medium flex items-center">
                      <Clock size={12} className="mr-1" />
                      {article.readTime} min read
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
                        onClick={(e) => toggleLike(article.id, e)}
                        className={`${
                          likedArticles.includes(article.id)
                            ? 'text-pink-500 dark:text-pink-400'
                            : darkMode ? 'text-gray-400 hover:text-pink-400' : 'text-gray-500 hover:text-pink-500'
                        } transition-colors transform active:scale-110`}
                        aria-label="Like article"
                      >
                        <Heart size={16} className={likedArticles.includes(article.id) ? 'fill-current' : ''} />
                      </button>
                      <button 
                        onClick={(e) => toggleBookmark(article.id, e)}
                        className={`${
                          bookmarkedArticles.includes(article.id)
                            ? 'text-violet-500 dark:text-violet-400'
                            : darkMode ? 'text-gray-400 hover:text-violet-400' : 'text-gray-500 hover:text-violet-500'
                        } transition-colors transform active:scale-110`}
                        aria-label="Bookmark article"
                      >
                        <Bookmark size={16} className={bookmarkedArticles.includes(article.id) ? 'fill-current' : ''} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Share functionality would go here
                          console.log(`Share article ${article.id}`);
                        }}
                        className={`${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-500 hover:text-cyan-600'} transition-colors transform active:scale-110`}
                      >
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Tags section - new feature */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover overlay with action prompt */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity flex items-end justify-center p-6">
                  <span className="text-white font-bold text-lg">Read Article →</span>
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
        
        {/* Load More button */}
        {!isLoading && filteredArticles.length > 0 && (
          <div className="mt-8 text-center">
            <button className={`${darkMode ? 'bg-violet-800 hover:bg-violet-700 border-violet-600' : 'bg-white hover:bg-gray-50 border-violet-500'} border-2 rounded-full px-6 py-3 font-bold text-violet-600 dark:text-violet-300 flex items-center mx-auto`}>
              Load More Articles
              <ChevronDown size={16} className="ml-2" />
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Subscription */}
      
    </div>
  );
};

export default ArticlesPage;