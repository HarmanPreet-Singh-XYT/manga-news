import { Eye, MessageCircle, Heart, Bookmark, Share2, Star, ChevronRight, Bell, TrendingUp as Trending, Award, Clock, Flame as Fire } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const Main = ({darkMode = false}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('breaking');
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

  const breakingNews = [
    {
      id: 1,
      img: "/api/placeholder/600/400",
      category: "Shonen",
      title: "Jujutsu Kaisen Creator Announces Final Arc Timeline",
      excerpt: "Gege Akutami reveals the popular dark fantasy series will conclude within the next two years.",
      author: "Kenji Nakamura",
      time: "4 hours ago",
      reads: "3.2k",
      comments: 42,
      isHot: true
    },
    {
      id: 2,
      img: "/api/placeholder/600/400",
      category: "Industry",
      title: "Studio MAPPA Takes Bold New Direction With Original Anime Series",
      excerpt: "The acclaimed studio behind Attack on Titan's final season announces a new cyberpunk project.",
      author: "Akira Yamamoto",
      time: "5 hours ago",
      reads: "2.9k",
      comments: 38,
      isHot: false
    },
    {
      id: 3,
      img: "/api/placeholder/600/400",
      category: "Movies",
      title: "Makoto Shinkai's Latest Film Dazzles With Revolutionary Animation",
      excerpt: "The visionary director pushes technical boundaries again with breathtaking weather effects.",
      author: "Haruka Kimura",
      time: "Yesterday",
      reads: "5.7k",
      comments: 96,
      isHot: true
    },
    {
      id: 4,
      img: "/api/placeholder/600/400",
      category: "Seinen",
      title: "Berserk Manga Will Continue Under New Creative Team",
      excerpt: "After Kentaro Miura's passing, trusted colleagues will complete his dark fantasy masterpiece.",
      author: "Takeshi Sato",
      time: "Yesterday",
      reads: "8.3k",
      comments: 135,
      isHot: true
    }
  ];

  const latestChapters = [
    {
      id: 5,
      img: "/api/placeholder/300/200",
      category: "Shonen",
      title: "My Hero Academia Chapter 407: Heroes Push Forward in Epic Battle",
      excerpt: "Deku and the heroes face their greatest challenge yet as the final battle intensifies.",
      author: "Mei Kobayashi",
      time: "6 hours ago",
      rating: 4.8,
      commentCount: 73
    },
    {
      id: 6,
      img: "/api/placeholder/300/200",
      category: "Seinen",
      title: "Vinland Saga Returns with Stunning Double-Length Chapter",
      excerpt: "Makoto Yukimura's historical masterpiece continues with breathtaking art and storytelling.",
      author: "Ryo Tanaka",
      time: "8 hours ago",
      rating: 4.9,
      commentCount: 52
    },
    {
      id: 7,
      img: "/api/placeholder/300/200",
      category: "Isekai",
      title: "Re:Zero Season 3 Reveals New Key Visual and Release Window",
      excerpt: "Fans rejoice as the popular isekai series announces its return after long hiatus.",
      author: "Hana Watanabe",
      time: "10 hours ago",
      rating: 4.7,
      commentCount: 89
    }
  ];

  const trendingNews = [
    {
      id: 8,
      img: "/api/placeholder/600/400",
      category: "Shojo",
      title: "Fruits Basket Creator's New Series Tops Charts Worldwide",
      excerpt: "The highly anticipated new romance manga has broken sales records in its first week.",
      author: "Yuki Tanaka",
      time: "2 days ago",
      reads: "12.8k",
      comments: 224,
      isHot: true
    },
    {
      id: 9,
      img: "/api/placeholder/600/400",
      category: "Industry",
      title: "Crunchyroll and Funimation Complete Merge, Announce Pricing Updates",
      excerpt: "The anime streaming giants have finally consolidated their platforms and subscription tiers.",
      author: "Satoshi Kimura",
      time: "3 days ago",
      reads: "9.5k",
      comments: 413,
      isHot: true
    },
    {
      id: 10,
      img: "/api/placeholder/600/400",
      category: "Gaming",
      title: "Persona 6 Announced with First Teaser Trailer",
      excerpt: "Atlus reveals the next installment in their popular JRPG series with a stunning visual teaser.",
      author: "Hiro Nakamura",
      time: "2 days ago",
      reads: "15.2k",
      comments: 528,
      isHot: true
    },
    {
      id: 11,
      img: "/api/placeholder/600/400",
      category: "Merchandise",
      title: "Chainsaw Man Nendoroids Sell Out Within Minutes of Release",
      excerpt: "Good Smile Company promises a second wave after unprecedented demand for the popular figures.",
      author: "Emi Suzuki",
      time: "4 days ago",
      reads: "7.1k",
      comments: 92,
      isHot: false
    }
  ];

  // Content to display based on active tab
  const getActiveContent = () => {
    switch(activeTab) {
      case 'trending':
        return trendingNews;
      case 'breaking':
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
          <button className="underline ml-2 font-semibold">View Schedule</button>
        </p>
        <button className={`text-xs font-bold px-2 py-1 rounded ${darkMode ? 'bg-violet-800 text-violet-200' : 'bg-violet-200 text-violet-800'}`}>
          SUBSCRIBE
        </button>
      </div>

      {/* Content Tab Navigation */}
      <div className="flex mb-6 border-b border-gray-200 dark:border-gray-700">
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
      </div>
            
      {/* Main News Grid */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <h3 className={`text-2xl font-black ${darkMode ? 'bg-violet-950' : 'bg-violet-900'} text-white inline-block px-4 py-1 transform -rotate-1 rounded-sm relative`}>
            {activeTab === 'breaking' ? 'BREAKING NEWS' : 'TRENDING NOW'}
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
          </h3>
          <div className={`ml-4 h-1 flex-grow ${darkMode ? 'bg-gradient-to-r from-pink-600 to-violet-900' : 'bg-gradient-to-r from-pink-500 to-violet-900'} rounded-full`}></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {isLoading ? (
            // Skeleton loaders while content loads
            [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
          ) : (
            getActiveContent().map((story) => (
              <div 
                key={story.id} 
                className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:border-violet-600' : 'bg-white border-gray-200 hover:border-violet-500'} rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:-translate-y-1 group`}
              >
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
                <div className="p-6">
                  <h4 className={`text-xl font-black mt-2 ${darkMode ? 'text-violet-300' : 'text-violet-900'} group-hover:text-pink-500 transition-colors line-clamp-2`}>
                    {story.title.toUpperCase()}
                  </h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-3 line-clamp-2`}>{story.excerpt}</p>
                  <div className={`flex items-center mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                    <div className="relative">
                      <img src="/api/placeholder/30/30" alt="Author" className="h-6 w-6 rounded-full border border-pink-400" />
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
                <div className="flex-1">
                  <h4 className={`text-xl font-black mt-2 ${darkMode ? 'text-violet-300' : 'text-violet-900'} hover:text-pink-500 transition-colors`}>
                    {story.title}
                  </h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-2`}>{story.excerpt}</p>
                  <div className="flex items-center mt-4 flex-wrap gap-y-2">
                    <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                      <img src="/api/placeholder/30/30" alt="Author" className="h-6 w-6 rounded-full border border-pink-400" />
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
                      <button className={`${darkMode ? 'bg-pink-800 text-pink-200 hover:bg-pink-700' : 'bg-pink-100 text-pink-800 hover:bg-pink-200'} px-3 py-1 rounded-full text-sm font-bold transition-colors flex items-center`}>
                        <Eye size={14} className="mr-1" />
                        Read
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-8 flex justify-center">
          <button className={`${
            darkMode 
              ? 'bg-gradient-to-r from-pink-600 to-violet-800 hover:from-pink-700 hover:to-violet-900' 
              : 'bg-gradient-to-r from-pink-500 to-violet-700 hover:from-pink-600 hover:to-violet-800'
          } text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg flex items-center group`}>
            LOAD MORE CONTENT
            <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Main