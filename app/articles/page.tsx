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

const ArticlesPage = ({ darkMode = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [likedArticles, setLikedArticles] = useState([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  // Mock data for articles
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setArticles([
        {
          id: 1,
          title: "One Piece Manga to Take 1-Month Break for Author's 25th Anniversary Planning",
          excerpt: "Eiichiro Oda's legendary pirate adventure will pause publication for a month as the team prepares special content for the series' 25th anniversary celebration.",
          img: "/api/placeholder/800/500",
          category: "Shonen",
          author: "Yuki Tanaka",
          time: "2 hours ago",
          reads: "24.5K",
          comments: 183,
          isHot: true,
          isFeatured: true
        },
        {
          id: 2,
          title: "Chainsaw Man Part 2 Nears Climatic Arc, Hints at Anime Season 2 Release",
          excerpt: "Tatsuki Fujimoto's demonic thriller manga approaches a major turning point as fans eagerly anticipate news of the second anime season adaptation.",
          img: "/api/placeholder/800/500",
          category: "Seinen",
          author: "Rei Kobayashi",
          time: "5 hours ago",
          reads: "18.3K",
          comments: 142,
          isHot: true,
          isFeatured: false
        },
        {
          id: 3,
          title: "Jujutsu Kaisen Final Arc: Gege Akutami Discusses Series Conclusion Plans",
          excerpt: "Creator reveals the approaching endgame for the popular supernatural battle manga in exclusive interview, promising 'satisfying resolutions' for fan-favorite characters.",
          img: "/api/placeholder/800/500",
          category: "Shonen",
          author: "Haruki Mori",
          time: "8 hours ago",
          reads: "21.7K",
          comments: 256,
          isHot: false,
          isFeatured: true
        },
        {
          id: 4,
          title: "Oshi no Ko Manga Collaboration Announced with Famous J-Pop Group",
          excerpt: "The meta idol industry manga by Aka Akasaka partners with real-life performers for special edition releases and possible anime tie-in content.",
          img: "/api/placeholder/800/500",
          category: "Seinen",
          author: "Sakura Ito",
          time: "12 hours ago",
          reads: "15.9K",
          comments: 97,
          isHot: false,
          isFeatured: false
        },
        {
          id: 5,
          title: "Studio Ghibli Announces New Film Project Led by Hayao Miyazaki's Son",
          excerpt: "Goro Miyazaki takes the helm for an original fantasy adventure film, continuing the legendary animation studio's legacy with fresh creative direction.",
          img: "/api/placeholder/800/500",
          category: "Movies",
          author: "Akira Tanaka",
          time: "1 day ago",
          reads: "32.4K",
          comments: 217,
          isHot: true,
          isFeatured: false
        },
        {
          id: 6,
          title: "Demon Slayer Creator's New One-Shot Manga to Debut Next Month",
          excerpt: "Koyoharu Gotouge returns with a standalone story set in a new fantasy world, marking the artist's first publication since concluding their blockbuster series.",
          img: "/api/placeholder/800/500",
          category: "Shonen",
          author: "Kenji Watanabe",
          time: "1 day ago",
          reads: "27.1K",
          comments: 176,
          isHot: false,
          isFeatured: true
        }
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

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

  // Filter articles by category
  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category.toLowerCase() === activeCategory.toLowerCase());

  // Featured articles
  const featuredArticles = articles.filter(article => article.isFeatured);

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

  // Featured article skeleton
  const FeaturedSkeleton = () => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden border-2 border-gray-200 animate-pulse mb-8`}>
      <div className="h-72 lg:h-96 bg-gray-300 dark:bg-gray-600"></div>
      <div className="p-6 space-y-4">
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 items-center">
            <div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
          </div>
          <div className="flex space-x-2">
            <div className="h-8 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${darkMode ? 'text-gray-200 bg-gray-900' : 'text-gray-900 bg-gray-50'}`}>
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
            ANIME/MANGA ARTICLES
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
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1 rounded-full text-sm font-bold ${
                activeCategory === 'all' 
                  ? `${darkMode ? 'bg-violet-800 text-violet-200' : 'bg-violet-600 text-white'}`
                  : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`
              } transition-colors`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveCategory('shonen')}
              className={`px-3 py-1 rounded-full text-sm font-bold ${
                activeCategory === 'shonen' 
                  ? 'bg-blue-600 text-white'
                  : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`
              } transition-colors`}
            >
              Shonen
            </button>
            <button 
              onClick={() => setActiveCategory('seinen')}
              className={`px-3 py-1 rounded-full text-sm font-bold ${
                activeCategory === 'seinen' 
                  ? 'bg-red-600 text-white'
                  : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`
              } transition-colors`}
            >
              Seinen
            </button>
            <button 
              onClick={() => setActiveCategory('shojo')}
              className={`px-3 py-1 rounded-full text-sm font-bold ${
                activeCategory === 'shojo' 
                  ? 'bg-pink-600 text-white'
                  : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`
              } transition-colors`}
            >
              Shojo
            </button>
            <button 
              onClick={() => setActiveCategory('movies')}
              className={`px-3 py-1 rounded-full text-sm font-bold ${
                activeCategory === 'movies' 
                  ? 'bg-green-600 text-white'
                  : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`
              } transition-colors`}
            >
              Movies
            </button>
            <button 
              onClick={() => setActiveCategory('industry')}
              className={`px-3 py-1 rounded-full text-sm font-bold ${
                activeCategory === 'industry' 
                  ? 'bg-purple-600 text-white'
                  : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`
              } transition-colors`}
            >
              Industry
            </button>
          </div>
        </div>
      )}

      {/* Featured Articles */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <h2 className={`text-2xl font-black ${darkMode ? 'bg-violet-950' : 'bg-violet-900'} text-white inline-block px-4 py-1 transform -rotate-1 rounded-sm relative`}>
            FEATURED ARTICLES
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
          </h2>
          <div className={`ml-4 h-1 flex-grow ${darkMode ? 'bg-gradient-to-r from-pink-600 to-violet-900' : 'bg-gradient-to-r from-pink-500 to-violet-900'} rounded-full`}></div>
        </div>
        
        {isLoading ? (
          <FeaturedSkeleton />
        ) : featuredArticles.length > 0 && (
          <div 
            className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:border-violet-600' : 'bg-white border-gray-200 hover:border-violet-500'} rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:-translate-y-1 group mb-8`}
          >
            <div className="relative overflow-hidden">
              <img 
                src={featuredArticles[0].img} 
                alt={featuredArticles[0].title} 
                className="w-full h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className={`absolute top-4 left-4 ${
                featuredArticles[0].category === 'Shonen' ? 'bg-blue-500' :
                featuredArticles[0].category === 'Seinen' ? 'bg-red-500' :
                featuredArticles[0].category === 'Shojo' ? 'bg-pink-500' :
                featuredArticles[0].category === 'Industry' ? 'bg-purple-500' :
                featuredArticles[0].category === 'Movies' ? 'bg-green-500' : 'bg-gray-500'
              } text-white px-4 py-1 font-bold rounded-full text-sm`}>{featuredArticles[0].category}</span>
              
              {featuredArticles[0].isHot && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 font-bold flex items-center rounded-full">
                  <Star size={14} className="mr-1" />
                  FEATURED
                </span>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 pt-24">
                <h3 className="text-3xl font-black text-white mb-2">{featuredArticles[0].title}</h3>
                <p className="text-gray-200 mb-4">{featuredArticles[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-200 text-sm">
                    <img src="/api/placeholder/30/30" alt="Author" className="h-8 w-8 rounded-full border-2 border-pink-400" />
                    <span className="font-bold ml-2">{featuredArticles[0].author}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredArticles[0].time}</span>
                  </div>
                  <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors flex items-center">
                    READ ARTICLE
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

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
                    src={article.img} 
                    alt={article.title} 
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className={`absolute top-0 right-0 ${
                    article.category === 'Shonen' ? 'bg-blue-500' :
                    article.category === 'Seinen' ? 'bg-red-500' :
                    article.category === 'Shojo' ? 'bg-pink-500' :
                    article.category === 'Industry' ? 'bg-purple-500' :
                    article.category === 'Movies' ? 'bg-green-500' :
                    article.category === 'Gaming' ? 'bg-yellow-500' :
                    article.category === 'Merchandise' ? 'bg-orange-500' : 'bg-gray-500'
                  } text-white px-3 py-1 font-bold`}>{article.category}</span>
                  {article.isHot && (
                    <span className="absolute top-0 left-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 font-bold flex items-center">
                      <Star size={14} className="mr-1" />
                      HOT
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 bg-gradient-to-r from-violet-900 to-purple-800 text-white px-3 py-1 font-bold flex items-center">
                    <Eye size={14} className="mr-1" />
                    {article.reads} readers
                  </div>
                </div>
                <div className="p-6">
                  <h4 className={`text-xl font-black mt-2 ${darkMode ? 'text-violet-300' : 'text-violet-900'} group-hover:text-pink-500 transition-colors line-clamp-2`}>
                    {article.title}
                  </h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-3 line-clamp-2`}>{article.excerpt}</p>
                  <div className={`flex items-center mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                    <div className="relative">
                      <img src="/api/placeholder/30/30" alt="Author" className="h-6 w-6 rounded-full border border-pink-400" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                    </div>
                    <span className="font-bold ml-2 truncate max-w-24">{article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{article.time}</span>
                    <div className="ml-auto flex space-x-2 items-center">
                      <span className="flex items-center text-xs">
                        <MessageCircle size={14} className="mr-1" />
                        {article.comments}
                      </span>
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
            <p className="text-lg font-bold mb-2">No articles found in this category</p>
            <button 
              onClick={() => setActiveCategory('all')}
              className={`${darkMode ? 'bg-violet-800 hover:bg-violet-700' : 'bg-violet-600 hover:bg-violet-700'} text-white px-4 py-2 rounded-full font-bold mt-2`}
            >
              View all articles
            </button>
          </div>
        )}
        
        {!isLoading && filteredArticles.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button className={`${
              darkMode 
                ? 'bg-gradient-to-r from-pink-600 to-violet-800 hover:from-pink-700 hover:to-violet-900' 
                : 'bg-gradient-to-r from-pink-500 to-violet-700 hover:from-pink-600 hover:to-violet-800'
            } text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg flex items-center group`}>
              LOAD MORE ARTICLES
              <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </section>
      
      {/* Newsletter Signup */}
      <section className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-lg border-2 mb-8`}>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className={`text-2xl font-black ${darkMode ? 'text-violet-300' : 'text-violet-900'} mb-3`}>
            STAY UPDATED WITH ANIME NEWS
          </h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
            Get weekly digests of the best articles, industry news, and exclusive content straight to your inbox!
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className={`flex-grow p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-violet-500`}
            />
            <button className={`${
              darkMode 
                ? 'bg-gradient-to-r from-pink-600 to-violet-800 hover:from-pink-700 hover:to-violet-900' 
                : 'bg-gradient-to-r from-pink-500 to-violet-700 hover:from-pink-600 hover:to-violet-800'
            } text-white px-6 py-3 rounded-lg font-bold transition-colors`}>
              SUBSCRIBE
            </button>
          </div>
          <p className={`text-xs mt-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            By subscribing, you agree to our privacy policy. We promise not to spam!
          </p>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;