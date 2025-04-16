import { Eye, MessageCircle, Heart, Bookmark, Share2, Star, ChevronRight, Bell, TrendingUp as Trending, Award, Clock, Flame as Fire } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import AnimeCategoryTabs from './AnimeCategoryTabs';
import { Article, Articles } from '@/app/data';

const Main = ({darkMode = false}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('HOT RIGHT NOW');
  const [bookmarkedStories, setBookmarkedStories] = useState([]);
  const [likedStories, setLikedStories] = useState([]);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleBookmark = (storyId) => {
    if (bookmarkedStories.includes(storyId)) {
      setBookmarkedStories(bookmarkedStories.filter(id => id !== storyId));
    } else {
      setBookmarkedStories([...bookmarkedStories, storyId]);
    }
  };

  const toggleLike = (storyId) => {
    if (likedStories.includes(storyId)) {
      setLikedStories(likedStories.filter(id => id !== storyId));
    } else {
      setLikedStories([...likedStories, storyId]);
    }
  };
  function getRandomRating(min = 3.1, max = 5) {
    return +(Math.random() * (max - min) + min).toFixed(1);
  }
  
  function mapToBreakingNews(article: Article) {
    return {
      id: article.id,
      img: article.mainImage || "/api/placeholder/600/400",
      authorImage:article.authorImage,
      category: article.category,
      title: article.title,
      excerpt: article.subtitle,
      author: article.author,
      time: article.postedAgo,
      reads: article.viewCount,
      comments: article.commentCount,
      isHot: article.isHot
    };
  }
  
  function mapToLatestChapters(article: Article) {
    return {
      id: article.id,
      img: article.mainImage || "/api/placeholder/300/200",
      authorImage:article.authorImage,
      category: article.category,
      title: article.title,
      excerpt: article.subtitle,
      author: article.author,
      time: article.postedAgo,
      rating: getRandomRating(), // Optional: assign a fixed or derived rating if available
      commentCount: article.commentCount
    };
  }
  
  function mapToTrendingNews(article: Article) {
    return {
      id: article.id,
      img: article.mainImage || "/api/placeholder/600/400",
      authorImage:article.authorImage,
      category: article.category,
      title: article.title,
      excerpt: article.subtitle,
      author: article.author,
      time: article.postedAgo,
      reads: article.viewCount,
      comments: article.commentCount,
      isHot: article.isHot
    };
  }
  
  const breakingNews = Articles.map(mapToBreakingNews);

  const latestChapters = Articles.slice(10, 19).map(mapToLatestChapters);

  const trendingNews = Articles.slice(5,9).map(mapToTrendingNews);

  const newNews = Articles.slice(22,26).map(mapToTrendingNews);

  const Popular = Articles.slice(28,32).map(mapToTrendingNews);

  const Classics = Articles.slice(33,38).map(mapToTrendingNews);

  const Upcoming = Articles.slice(39,44).map(mapToTrendingNews);
  // Content to display based on active tab
  const getActiveContent = () => {
    switch(activeTab) {
      case 'TRENDING':
        return trendingNews;
      case 'UPCOMING':
        return Upcoming;
      case 'NEW':
        return newNews;
      case 'POPULAR':
        return Popular;
      case 'CLASSICS':
        return Classics;
      default:
        return breakingNews;
    }
  };

  // Skeleton loader for cards
  const CardSkeleton = () => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden border-2 border-gray-200 animate-pulse`}>
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

  return (
    <div className={`lg:w-2/3 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
      {/* Notification Bar */}
      <div className={`flex items-center mb-6 p-3 rounded-lg ${darkMode ? 'bg-violet-900 bg-opacity-30' : 'bg-violet-100'} border-l-4 border-pink-500`}>
        <Bell size={18} className={`mr-2 ${darkMode ? 'text-pink-400' : 'text-pink-500'}`} />
        <p className="text-sm flex-grow">
          <span className="font-bold">NEW:</span> Weekly anime release schedule now available! 
          <a href='/releases'><button className="underline ml-2 font-semibold">View Schedule</button></a>
        </p>
        <button className={`text-xs font-bold px-2 py-1 rounded ${darkMode ? 'bg-violet-800 text-violet-200' : 'bg-violet-200 text-violet-800'}`}>
          SUBSCRIBE
        </button>
      </div>

      {/* Content Tab Navigation */}
      {/* <div className="flex mb-6 border-b border-gray-200 dark:border-gray-700">
        <button 
          onClick={() => setActiveTab('breaking')}
          className={`flex items-center px-4 py-2 font-bold text-sm ${
            activeTab === 'breaking' 
              ? `${darkMode ? 'text-pink-400 border-b-2 border-pink-400' : 'text-pink-600 border-b-2 border-pink-600'}`
              : `${darkMode ? 'text-gray-400' : 'text-gray-600'}`
          } transition-colors`}
        >
          <Fire size={16} className="mr-1" />
          BREAKING NEWS
        </button>
        <button 
          onClick={() => setActiveTab('trending')}
          className={`flex items-center px-4 py-2 font-bold text-sm ${
            activeTab === 'trending' 
              ? `${darkMode ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-cyan-600 border-b-2 border-cyan-600'}`
              : `${darkMode ? 'text-gray-400' : 'text-gray-600'}`
          } transition-colors`}
        >
          <Trending size={16} className="mr-1" />
          TRENDING
        </button>
        <button 
          className={`flex items-center px-4 py-2 font-bold text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors`}
        >
          <Award size={16} className="mr-1" />
          TOP RATED
        </button>
        <button 
          className={`flex items-center px-4 py-2 font-bold text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors`}
        >
          <Clock size={16} className="mr-1" />
          UPCOMING
        </button>
      </div> */}
            <AnimeCategoryTabs darkMode={darkMode} setActiveTab={setActiveTab} activeTab={activeTab}/>
      {/* Main News Grid */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <h3 className={`text-2xl font-black ${darkMode ? 'bg-violet-950' : 'bg-violet-900'} text-white inline-block px-4 py-1 transform -rotate-1 rounded-sm relative`}>
            {activeTab}
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
          </h3>
          <div className={`ml-4 h-1 flex-grow ${darkMode ? 'bg-gradient-to-r from-pink-600 to-violet-900' : 'bg-gradient-to-r from-pink-500 to-violet-900'} rounded-full`}></div>
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
                  <div className="relative overflow-hidden">
                    <img 
                      src={story.img} 
                      alt={story.title} 
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className={`absolute top-0 right-0 ${
                      story.category === 'Shonen' ? 'bg-blue-500' :
                      story.category === 'Seinen' ? 'bg-red-500' :
                      story.category === 'Shojo' ? 'bg-pink-500' :
                      story.category === 'Industry' ? 'bg-purple-500' :
                      story.category === 'Movies' ? 'bg-green-500' :
                      story.category === 'Gaming' ? 'bg-yellow-500' :
                      story.category === 'Merchandise' ? 'bg-orange-500' : 'bg-gray-500'
                    } text-white px-3 py-1 font-bold`}>{story.category}</span>
                    {story.isHot && (
                      <span className="absolute top-0 left-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 font-bold flex items-center">
                        <Fire size={14} className="mr-1" />
                        HOT
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 bg-gradient-to-r from-violet-900 to-purple-800 text-white px-3 py-1 font-bold flex items-center">
                      <Eye size={14} className="mr-1" />
                      {story.reads} readers
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
      
      {/* Latest Chapters */}
      <section>
        <div className="flex items-center mb-6">
          <h3 className={`text-2xl font-black ${darkMode ? 'bg-violet-950' : 'bg-violet-900'} text-white inline-block px-4 py-1 transform -rotate-1 rounded-sm`}>LATEST CHAPTERS</h3>
          <div className={`ml-4 h-1 flex-grow ${darkMode ? 'bg-gradient-to-r from-pink-600 to-violet-900' : 'bg-gradient-to-r from-pink-500 to-violet-900'} rounded-full`}></div>
        </div>
        <div className="space-y-6">
          {isLoading ? (
            // Skeleton loaders
            [...Array(3)].map((_, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg border-2 border-gray-200 animate-pulse`}>
                <div className="w-full md:w-48 h-48 md:h-36 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                <div className="flex-1 space-y-4">
                  <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  <div className="flex items-center justify-between">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
                    <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            latestChapters.map((story) => (
              <div key={story.id} className={`flex flex-col md:flex-row gap-6 ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-violet-600' : 'bg-white border-gray-200 hover:border-violet-500'} p-4 rounded-lg border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <a href={`/article/${story.id}`}>
                  <div className="relative w-full md:w-48 flex-shrink-0">
                    <img 
                      src={story.img} 
                      alt={story.title} 
                      className="w-full md:w-48 h-48 md:h-36 object-cover rounded-lg"
                    />
                    <span className={`absolute top-2 right-2 ${
                      story.category === 'Shonen' ? 'bg-blue-500' :
                      story.category === 'Seinen' ? 'bg-red-500' :
                      story.category === 'Isekai' ? 'bg-green-500' : 'bg-pink-500'
                    } text-white px-2 py-1 text-sm font-bold rounded`}>{story.category}</span>
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-cyan-300 px-2 py-1 text-sm font-bold rounded flex items-center">
                      <Star size={12} className="mr-1 text-yellow-400" />
                      {story.rating}
                    </div>
                  </div>
                </a>
                <div className="flex-1">
                  <a href={`/article/${story.id}`}>
                    <h4 className={`text-xl font-black mt-2 ${darkMode ? 'text-violet-300' : 'text-violet-900'} hover:text-pink-500 transition-colors`}>
                      {story.title}
                    </h4>
                  </a>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-2`}>{story.excerpt}</p>
                  <div className="flex items-center mt-4 flex-wrap gap-y-2">
                    <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                      <img src={story.authorImage} alt="Author" className="h-6 w-6 rounded-full border border-pink-400" />
                      <span className="font-bold ml-2">{story.author}</span>
                      <span className="mx-2">•</span>
                      <span>{story.time}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <MessageCircle size={14} className="mr-1" />
                        {story.commentCount}
                      </span>
                    </div>
                    <div className="ml-auto flex gap-2">
                      <button 
                        onClick={() => toggleBookmark(story.id)}
                        className={`${
                          bookmarkedStories.includes(story.id) 
                            ? `${darkMode ? 'bg-violet-800 text-violet-200' : 'bg-violet-100 text-violet-800'}`
                            : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`
                        } px-3 py-1 rounded-full text-sm font-bold hover:bg-violet-200 transition-colors flex items-center`}
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
            } text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg flex items-center group`}>
              VIEW ARTICLES
              <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Main