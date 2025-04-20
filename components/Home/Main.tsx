import { Eye, MessageCircle, Heart, Bookmark, Share2, Star, ChevronRight, Bell, TrendingUp, Award, Clock, Flame, Search, RefreshCw, Zap, ThumbsUp } from 'lucide-react'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import AnimeCategoryTabs from './AnimeCategoryTabs';
import { Article, Articles } from '@/app/data';

const Main = ({ darkMode = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('HOT RIGHT NOW');
  const [bookmarkedStories, setBookmarkedStories] = useState([]);
  const [likedStories, setLikedStories] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Slightly faster loading for better UX
    return () => clearTimeout(timer);
  }, []);

  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Simulate refresh functionality
  const refreshContent = useCallback(() => {
    setRefreshing(true);
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      setRefreshing(false);
      setIsLoading(false);
    }, 1000);
  }, []);

  const toggleBookmark = useCallback((storyId) => {
    setBookmarkedStories(prev => {
      if (prev.includes(storyId)) {
        return prev.filter(id => id !== storyId);
      } else {
        return [...prev, storyId];
      }
    });
  }, []);

  const toggleLike = useCallback((storyId) => {
    setLikedStories(prev => {
      if (prev.includes(storyId)) {
        return prev.filter(id => id !== storyId);
      } else {
        return [...prev, storyId];
      }
    });
  }, []);

  const getRandomRating = (min = 3.1, max = 5) => {
    return +(Math.random() * (max - min) + min).toFixed(1);
  };
  
  const mapToBreakingNews = useCallback((article) => {
    return {
      id: article.id,
      img: article.mainImage || "/api/placeholder/600/400",
      authorImage: article.authorImage,
      category: article.category,
      title: article.title,
      excerpt: article.subtitle,
      author: article.author,
      time: article.postedAgo,
      reads: article.viewCount,
      comments: article.commentCount,
      isHot: article.isHot
    };
  }, []);
  
  const mapToLatestChapters = useCallback((article) => {
    return {
      id: article.id,
      img: article.mainImage || "/api/placeholder/300/200",
      authorImage: article.authorImage,
      category: article.category,
      title: article.title,
      excerpt: article.subtitle,
      author: article.author,
      time: article.postedAgo,
      rating: getRandomRating(),
      commentCount: article.commentCount,
      chapterNumber: Math.floor(Math.random() * 200) + 1, // Add chapter numbers for manga
      releaseDate: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)).toLocaleDateString()
    };
  }, []);
  
  // Memoize data transformations to prevent unnecessary recalculations
  const breakingNews = useMemo(() => Articles.map(mapToBreakingNews), [mapToBreakingNews]);
  const latestChapters = useMemo(() => Articles.slice(10, 19).map(mapToLatestChapters), [mapToLatestChapters]);
  const trendingNews = useMemo(() => Articles.slice(5, 9).map(mapToBreakingNews), [mapToBreakingNews]);
  const newNews = useMemo(() => Articles.slice(22, 26).map(mapToBreakingNews), [mapToBreakingNews]);
  const popularNews = useMemo(() => Articles.slice(28, 32).map(mapToBreakingNews), [mapToBreakingNews]);
  const classicsNews = useMemo(() => Articles.slice(33, 38).map(mapToBreakingNews), [mapToBreakingNews]);
  const upcomingNews = useMemo(() => Articles.slice(39, 44).map(mapToBreakingNews), [mapToBreakingNews]);

  // Content to display based on active tab
  const getActiveContent = useCallback(() => {
    switch(activeTab) {
      case 'TRENDING':
        return trendingNews;
      case 'UPCOMING':
        return upcomingNews;
      case 'NEW':
        return newNews;
      case 'POPULAR':
        return popularNews;
      case 'CLASSICS':
        return classicsNews;
      default:
        return breakingNews;
    }
  }, [activeTab, breakingNews, trendingNews, upcomingNews, newNews, popularNews, classicsNews]);

  // Enhanced skeleton loader with animation
  const CardSkeleton = () => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden border-2 border-gray-200 animate-pulse shadow-md`}>
      <div className="h-48 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600"></div>
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-600 dark:to-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-600 dark:to-gray-700 rounded w-full"></div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 items-center">
            <div className="h-6 w-6 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full"></div>
            <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded w-24"></div>
          </div>
          <div className="flex space-x-2">
            <div className="h-4 w-4 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded"></div>
            <div className="h-4 w-4 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Shonen': return 'bg-blue-500';
      case 'Seinen': return 'bg-red-500';
      case 'Shojo': return 'bg-pink-500';
      case 'Industry': return 'bg-purple-500';
      case 'Movies': return 'bg-green-500';
      case 'Gaming': return 'bg-yellow-500';
      case 'Merchandise': return 'bg-orange-500';
      case 'Isekai': return 'bg-emerald-500';
      default: return 'bg-violet-500';
    }
  };

  return (
    <div className={`lg:w-2/3 ${darkMode ? 'text-gray-200' : 'text-gray-900'} relative`}>
      {/* Refresh Button */}
      <button 
        onClick={refreshContent}
        className={`fixed bottom-20 right-6 z-20 rounded-full p-3 shadow-lg 
          ${darkMode ? 'bg-violet-800 text-violet-200' : 'bg-violet-600 text-violet-50'} 
          ${refreshing ? 'animate-spin' : 'hover:bg-violet-700'} transition-all duration-300`}
        disabled={refreshing}
        aria-label="Refresh content"
      >
        <RefreshCw size={20} />
      </button>

      {/* Scroll to Top Button */}
      {/* {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-36 right-6 z-20 rounded-full p-3 shadow-lg 
            ${darkMode ? 'bg-pink-800 text-pink-200' : 'bg-pink-600 text-pink-50'} 
            hover:bg-pink-700 transition-all duration-300 animate-bounce`}
          aria-label="Scroll to top"
        >
          <ChevronRight size={20} className="transform rotate-270" />
        </button>
      )} */}

      {/* Search Bar */}
      {/* <div className={`mb-6 flex items-center p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border-l-4 ${darkMode ? 'border-pink-500' : 'border-violet-500'}`}>
        <Search size={20} className={`mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        <input 
          type="text" 
          placeholder="Search for anime, manga, news..." 
          className={`flex-grow bg-transparent border-none outline-none ${darkMode ? 'text-gray-200 placeholder-gray-500' : 'text-gray-800 placeholder-gray-400'}`}
        />
        <button className={`text-xs font-bold px-3 py-2 rounded-md ${darkMode ? 'bg-violet-800 text-violet-200 hover:bg-violet-700' : 'bg-violet-600 text-white hover:bg-violet-700'} transition-colors`}>
          SEARCH
        </button>
      </div> */}

      {/* Notification Bar with animation */}
      <div className={`flex items-center mb-6 p-3 rounded-lg ${darkMode ? 'bg-violet-900 bg-opacity-30' : 'bg-violet-100'} border-l-4 border-pink-500 shadow-md relative overflow-hidden`}>
        <Bell size={18} className={`mr-2 ${darkMode ? 'text-pink-400' : 'text-pink-500'}`} />
        <p className="text-sm flex-grow relative z-10">
          <span className="font-bold">NEW:</span> Weekly anime release schedule now available! 
          <a href='/releases'><button className="underline ml-2 font-semibold">View Schedule</button></a>
        </p>
        <button className={`text-xs font-bold px-3 py-2 rounded ${darkMode ? 'bg-violet-800 text-violet-200 hover:bg-violet-700' : 'bg-violet-200 text-violet-800 hover:bg-violet-300'} transition-colors z-10`}>
          SUBSCRIBE
        </button>
        {/* Animated background effect */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20">
          <div className={`absolute top-0 left-0 w-12 h-12 rounded-full ${darkMode ? 'bg-pink-500' : 'bg-pink-400'} blur-xl animate-pulse`} style={{animationDuration: '3s'}}></div>
          <div className={`absolute bottom-0 right-0 w-16 h-16 rounded-full ${darkMode ? 'bg-violet-500' : 'bg-violet-400'} blur-xl animate-pulse`} style={{animationDuration: '4s'}}></div>
        </div>
      </div>

      <AnimeCategoryTabs darkMode={darkMode} setActiveTab={setActiveTab} activeTab={activeTab}/>

      {/* Main News Grid */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <h3 className={`text-2xl font-black ${darkMode ? 'bg-violet-950' : 'bg-violet-900'} text-white inline-block px-4 py-1 transform -rotate-1 rounded-sm relative`}>
            {activeTab}
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
          </h3>
          <div className={`ml-4 h-1 flex-grow ${darkMode ? 'bg-gradient-to-r from-pink-600 to-violet-900' : 'bg-gradient-to-r from-pink-500 to-violet-900'} rounded-full`}></div>
          <button 
            onClick={refreshContent}
            className={`ml-2 p-1 rounded-full ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'} hover:text-pink-500 transition-colors`}
            aria-label="Refresh section"
          >
            <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {isLoading ? (
            // Skeleton loaders while content loads
            [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
          ) : (
            getActiveContent().slice(0, 4).map((story) => (
              <div 
                key={story.id} 
                className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:border-violet-600' : 'bg-white border-gray-200 hover:border-violet-500'} rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:-translate-y-1 group`}
              >
                <a href={`/article/${story.id}`}>
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={story.img} 
                      alt={story.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className={`absolute top-0 right-0 ${getCategoryColor(story.category)} text-white px-3 py-1 font-bold`}>
                      {story.category}
                    </span>
                    {story.isHot && (
                      <span className="absolute top-0 left-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 font-bold flex items-center">
                        <Flame size={14} className="mr-1" />
                        HOT
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 bg-gradient-to-r from-violet-900 to-purple-800 text-white px-3 py-1 font-bold flex items-center">
                      <Eye size={14} className="mr-1" />
                      {story.reads} readers
                    </div>
                    {/* Add hover overlay with quick actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-pink-500 text-white p-2 rounded-full mx-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye size={20} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          toggleBookmark(story.id);
                        }}
                        className="bg-violet-500 text-white p-2 rounded-full mx-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                      >
                        <Bookmark size={20} className={bookmarkedStories.includes(story.id) ? 'fill-current' : ''} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          toggleLike(story.id);
                        }}
                        className="bg-red-500 text-white p-2 rounded-full mx-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150"
                      >
                        <Heart size={20} className={likedStories.includes(story.id) ? 'fill-current' : ''} />
                      </button>
                    </div>
                  </div>
                </a>
                <div className="p-6">
                  <a href={`/article/${story.id}`}>
                    <h4 className={`text-xl font-black mt-2 ${darkMode ? 'text-violet-300' : 'text-violet-900'} group-hover:text-pink-500 transition-colors line-clamp-2`}>
                      {story.title.toUpperCase()}
                    </h4>
                  </a>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-3 line-clamp-2`}>{story.excerpt}</p>
                  <div className={`flex items-center mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                    <div className="relative">
                      <img src={story.authorImage} alt="Author" className="h-6 w-6 rounded-full border border-pink-400" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                    </div>
                    <span className="font-bold ml-2 truncate max-w-24">{story.author}</span>
                    <span className="mx-2">•</span>
                    <span>{story.time}</span>
                    <div className="ml-auto flex space-x-2 items-center">
                      <span className="flex items-center text-xs">
                        <MessageCircle size={14} className="mr-1" />
                        {story.comments}
                      </span>
                      <button 
                        onClick={() => toggleLike(story.id)}
                        className={`${
                          likedStories.includes(story.id)
                            ? 'text-pink-500 dark:text-pink-400'
                            : darkMode ? 'text-gray-400 hover:text-pink-400' : 'text-gray-500 hover:text-pink-500'
                        } transition-colors`}
                        aria-label="Like story"
                      >
                        <Heart size={16} className={likedStories.includes(story.id) ? 'fill-current' : ''} />
                      </button>
                      <button 
                        onClick={() => toggleBookmark(story.id)}
                        className={`${
                          bookmarkedStories.includes(story.id)
                            ? 'text-violet-500 dark:text-violet-400'
                            : darkMode ? 'text-gray-400 hover:text-violet-400' : 'text-gray-500 hover:text-violet-500'
                        } transition-colors`}
                        aria-label="Bookmark story"
                      >
                        <Bookmark size={16} className={bookmarkedStories.includes(story.id) ? 'fill-current' : ''} />
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
      </section>
      
      {/* Latest Chapters - Enhanced with chapter numbers and eye-catching design */}
      <section>
        <div className="flex items-center mb-6">
          <h3 className={`text-2xl font-black ${darkMode ? 'bg-violet-950' : 'bg-violet-900'} text-white inline-block px-4 py-1 transform -rotate-1 rounded-sm relative`}>
            LATEST CHAPTERS
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
          </h3>
          <div className={`ml-4 h-1 flex-grow ${darkMode ? 'bg-gradient-to-r from-pink-600 to-violet-900' : 'bg-gradient-to-r from-pink-500 to-violet-900'} rounded-full`}></div>
        </div>
        <div className="space-y-6">
          {isLoading ? (
            // Skeleton loaders
            [...Array(3)].map((_, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border-2 border-gray-200 animate-pulse`}>
                <div className="w-full md:w-48 h-48 md:h-36 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg"></div>
                <div className="flex-1 space-y-4">
                  <div className="h-6 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded w-3/4"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-600 dark:to-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-600 dark:to-gray-700 rounded w-full"></div>
                  <div className="flex items-center justify-between">
                    <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded w-24"></div>
                    <div className="h-8 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded w-32"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            latestChapters.slice(0, 9).map((story) => (
              <div key={story.id} className={`flex flex-col md:flex-row gap-6 ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-violet-600' : 'bg-white border-gray-200 hover:border-violet-500'} p-4 rounded-lg border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}>
                {/* Visual manga chapter indicator */}
                {/* <div className={`absolute -left-4 z-50 top-4 transform -rotate-45 ${darkMode ? 'bg-pink-700' : 'bg-pink-600'} text-white px-6 text-xs font-bold py-1`}>
                  CH {story.chapterNumber}
                </div> */}
                
                {/* Visual update tag if it's very recent */}
                {story.time.includes('hour') && (
                  <div className="absolute top-4 right-4 animate-pulse">
                    <div className={`${darkMode ? 'bg-green-800' : 'bg-green-600'} text-white text-xs font-bold rounded-full px-2 py-1 flex items-center`}>
                      <Zap size={12} className="mr-1" /> NEW
                    </div>
                  </div>
                )}
                
                <a href={`/article/${story.id}`}>
                  <div className="relative w-full md:w-48 flex-shrink-0">
                    <img 
                      src={story.img} 
                      alt={story.title} 
                      className="w-full md:w-48 h-48 md:h-36 object-cover rounded-lg"
                    />
                    <span className={`absolute top-2 right-2 ${getCategoryColor(story.category)} text-white px-2 py-1 text-sm font-bold rounded`}>
                      {story.category}
                    </span>
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-cyan-300 px-2 py-1 text-sm font-bold rounded flex items-center">
                      <Star size={12} className="mr-1 text-yellow-400" />
                      {story.rating}
                    </div>
                  </div>
                </a>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Released: {story.releaseDate}
                    </span>
                    {story.time.includes('day') && parseInt(story.time) <= 3 && (
                      <span className={`ml-2 ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'} text-xs px-2 py-0.5 rounded-full`}>
                        RECENT
                      </span>
                    )}
                  </div>
                  <a href={`/article/${story.id}`}>
                    <h4 className={`text-xl font-black mt-1 ${darkMode ? 'text-violet-300' : 'text-violet-900'} hover:text-pink-500 transition-colors flex items-center`}>
                      {story.title}
                      {/* <span className={`ml-2 text-sm px-2 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                        Chapter {story.chapterNumber}
                      </span> */}
                    </h4>
                  </a>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 line-clamp-2`}>{story.excerpt}</p>
                  <div className="flex items-center mt-4 flex-wrap gap-y-2">
                    <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                      <img src={story.authorImage} alt="Author" className="h-6 w-6 rounded-full border border-pink-400" />
                      <span className="font-bold ml-2">{story.author}</span>
                      <span className="mx-2">•</span>
                      <span>{story.time}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MessageCircle size={14} className="mr-1" />
                        {story.commentCount}
                      </div>
                      <div className="flex items-center ml-2">
                        <ThumbsUp size={14} className="mr-1" />
                        {Math.floor(Math.random() * 200) + 20}
                      </div>
                    </div>
                    <div className="ml-auto flex gap-2">
                      <button 
                        onClick={() => toggleBookmark(story.id)}
                        className={`${
                          bookmarkedStories.includes(story.id) 
                            ? `${darkMode ? 'bg-violet-800 text-violet-200' : 'bg-violet-100 text-violet-800'}`
                            : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`
                        } px-3 py-1 rounded-full text-sm font-bold hover:bg-violet-200 hover:text-violet-800 transition-colors flex items-center`}
                      >
                        <Bookmark size={14} className={`mr-1 ${bookmarkedStories.includes(story.id) ? 'fill-current' : ''}`} />
                        Save
                      </button>
                      <a href={`/article/${story.id}`}>
                        <button className={`${darkMode ? 'bg-pink-800 text-pink-200 hover:bg-pink-700' : 'bg-pink-100 text-pink-800 hover:bg-pink-200'} px-3 py-1 rounded-full text-sm font-bold transition-colors flex items-center`}>
                          <Eye size={14} className="mr-1" />
                          Read
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-8 flex justify-center">
          <a href='/articles'>
            <button className={`${
              darkMode 
                ? 'bg-gradient-to-r from-pink-600 to-violet-800 hover:from-pink-700 hover:to-violet-900' 
                : 'bg-gradient-to-r from-pink-500 to-violet-700 hover:from-pink-600 hover:to-violet-800'
            } text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg flex items-center group relative overflow-hidden`}>
              <span className="relative z-10">VIEW ALL ARTICLES</span>
              <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform relative z-10" />
              {/* Animated background on hover */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 to-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Main