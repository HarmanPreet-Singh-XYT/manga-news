import { Star, Bell, Flame, TrendingUp, Heart, Search, ChevronRight } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const Sidebar = ({darkMode}:{darkMode:boolean}) => {
  const [animatedIndex, setAnimatedIndex] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('All');
  
  // Simulate loading new trending topics when category changes
  useEffect(() => {
    setAnimatedIndex(0);
    const timeout = setTimeout(() => {
      setAnimatedIndex(null);
    }, 1500);
    
    return () => clearTimeout(timeout);
  }, [currentCategory]);

  // Trending topic categories
  const categories = ['All', 'Anime', 'Manga', 'Movies', 'Live Action'];
  
  // Enhanced trending topics with more variety and current anime references
  const trendingTopics = {
    'All': [
      { id: 22, title: "Jujutsu Kaisen Final Season Announcement", category: "Anime", trend: "hot" },
      { id: 23, title: "Haikyuu!! Final Movie Global Release", category: "Movie", trend: "up" },
      { id: 24, title: "Bleach: Thousand-Year Blood War Part 3", category: "Anime", trend: "hot" },
      { id: 25, title: "One Piece Live Action Season 2 Cast Reveal", category: "Live Action", trend: "up" },
      { id: 26, title: "New Jump Series 'Sakamoto Days' Adaptation", category: "Manga", trend: "up" }
    ],
    'Anime': [
      { id: 22, title: "Jujutsu Kaisen Final Season Announcement", category: "Anime", trend: "hot" },
      { id: 24, title: "Bleach: Thousand-Year Blood War Part 3", category: "Anime", trend: "hot" },
      { id: 27, title: "Undead Unluck Sequel Confirmation", category: "Anime", trend: "up" },
      { id: 28, title: "Studio MAPPA's New Original Series", category: "Anime", trend: "up" },
      { id: 29, title: "Dragon Ball Daima Global Reception", category: "Anime", trend: "up" }
    ],
    'Manga': [
      { id: 30, title: "Sakamoto Days Breaking Sales Records", category: "Manga", trend: "hot" },
      { id: 32, title: "One Piece Final Saga Latest Chapter", category: "Manga", trend: "hot" },
      { id: 31, title: "My Hero Academia Manga Conclusion", category: "Manga", trend: "up" },
      { id: 33, title: "Chainsaw Man Part 2 Latest Arc", category: "Manga", trend: "up" },
      { id: 34, title: "New Shueisha Digital Platform Launch", category: "Manga", trend: "up" }
    ],
    'Movies': [
      { id: 23, title: "Haikyuu!! Final Movie Global Release", category: "Movie", trend: "hot" },
      { id: 35, title: "Demon Slayer: Infinity Castle Announcement", category: "Movie", trend: "hot" },
      { id: 36, title: "Jujutsu Kaisen 0 Director's New Project", category: "Movie", trend: "up" },
      { id: 37, title: "Studio Ghibli's Next Feature Film", category: "Movie", trend: "up" },
      { id: 38, title: "Your Name Creator's Latest Work", category: "Movie", trend: "up" }
    ],
    'Live Action': [
      { id: 25, title: "One Piece Live Action Season 2 Cast Reveal", category: "Live Action", trend: "hot" },
      { id: 39, title: "Yu Yu Hakusho Netflix Season 2", category: "Live Action", trend: "up" },
      { id: 40, title: "My Hero Academia Hollywood Adaptation", category: "Live Action", trend: "up" },
      { id: 41, title: "Attack on Titan Final Film Production", category: "Live Action", trend: "up" },
      { id: 42, title: "Death Note New Series Announcement", category: "Live Action", trend: "hot" }
    ]
  };
  

  // Get current topics based on selected category
  const currentTopics = trendingTopics[currentCategory] || trendingTopics['All'];

  return (
    <div className="lg:w-1/3">
        {/* Trending Topics - Enhanced with category tabs and animations */}
        <div className="bg-gradient-to-br from-violet-900 to-indigo-900 text-white rounded-lg p-6 mb-8 border-2 border-violet-800 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400 opacity-20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <TrendingUp size={24} className="text-cyan-300 mr-2" />
              <h3 className="text-xl font-black">TOP TRENDING</h3>
            </div>
            
            {/* Category tabs */}
            <div className="flex space-x-1 mb-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-violet-700 scrollbar-track-transparent">
              {categories.map(category => (
                <button 
                  key={category}
                  onClick={() => setCurrentCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-all ${
                    currentCategory === category 
                      ? 'bg-cyan-400 text-violet-900 font-bold shadow-lg' 
                      : 'bg-violet-800 text-violet-300 hover:bg-violet-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <ul className="space-y-3">
              {currentTopics.map((topic, i) => (
                <li 
                  key={i} 
                  className={`pb-3 border-b border-violet-800 last:border-0 transition-all ${
                    animatedIndex === i ? 'animate-pulse bg-violet-800 bg-opacity-50 rounded p-2 -mx-2' : ''
                  }`}
                  onMouseEnter={() => setAnimatedIndex(i)}
                  onMouseLeave={() => setAnimatedIndex(null)}
                >
                  <a href={`/article/${topic.id}`} className="flex items-center text-white hover:text-cyan-300 transition-colors group">
                    <span className="font-black text-pink-400 mr-3 text-xl">{i + 1}</span>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className="text-xs bg-violet-800 text-cyan-300 px-2 py-0.5 rounded">{topic.category}</span>
                        {topic.trend === "hot" && (
                          <span className="ml-2 text-xs bg-pink-500 text-white px-2 py-0.5 rounded flex items-center">
                            <Flame size={12} className="mr-1 animate-pulse" />
                            HOT!
                          </span>
                        )}
                        {topic.trend === "up" && (
                          <span className="ml-2 text-xs bg-cyan-700 text-cyan-200 px-2 py-0.5 rounded flex items-center">
                            <TrendingUp size={12} className="mr-1" />
                            TRENDING
                          </span>
                        )}
                      </div>
                      <span className="font-bold block mt-1 group-hover:translate-x-1 transition-transform">{topic.title}</span>
                    </div>
                    <ChevronRight size={18} className="text-violet-600 group-hover:text-cyan-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
            <button className="w-full mt-6 bg-cyan-400 text-violet-900 font-bold py-2 rounded hover:bg-cyan-300 transition-colors flex items-center justify-center">
              VIEW ALL TRENDS
              <ChevronRight size={18} className="ml-1" />
            </button>
          </div>
        </div>
        
        {/* Editor's Picks - Enhanced with hover effects */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-8 border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} ${darkMode ? 'hover:border-pink-700' : 'hover:border-violet-300'} transition-colors shadow-lg`}>
          <div className="flex items-center mb-6">
            <h3 className="text-xl font-black bg-gradient-to-r from-pink-500 to-violet-600 text-white inline-block px-3 py-1 rounded">EDITOR'S PICKS</h3>
            <div className="ml-2">
              <Star size={16} className="text-yellow-400" />
            </div>
          </div>
          <div className="space-y-4">
            {[
              {
                id:47,
                title: "Why Chainsaw Man and Jujutsu Kaisen Are Redefining Modern Shonen",
                category: "Analysis",
                img: "https://m.media-amazon.com/images/I/71WYpi-EtgL._AC_UF1000,1000_QL80_.jpg"
              },
              {
                id:48,
                title: "The Art Evolution in One Piece: From East Blue to Egghead Island",
                category: "Deep Dive",
                img: "https://upload.wikimedia.org/wikipedia/en/2/21/One_Piece_DVD_21.png"
              },
              {
                id:49,
                title: "Top 10 Most Anticipated Anime of Summer 2025",
                category: "Seasonal",
                img: "https://m.media-amazon.com/images/M/MV5BNjhmN2RmYjgtN2ZlNC00YTdkLWFlMTYtMTdkNzkxMDA0ZjJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
              }
            ].map((article, i) => (
              <div
                key={i}
                className={`pb-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} last:border-0 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-violet-50'} p-2 -mx-2 rounded transition-colors group`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex">
                  <div className="w-20 h-20 overflow-hidden rounded mr-3 relative">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end justify-center pb-1">
                      <Heart size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-pink-500">{article.category.toUpperCase()}</span>
                    <h4 className="font-bold mt-1">
                      <a href={`/article/${article.id}`} className={`${darkMode ? 'text-gray-100 hover:text-pink-400' : 'text-gray-900 hover:text-violet-700'} transition-colors`}>{article.title}</a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className={`w-full mt-4 border-2 ${darkMode ? 'border-pink-700 text-pink-500 hover:bg-gray-700' : 'border-violet-500 text-violet-600 hover:bg-violet-50'} font-bold py-2 rounded-lg transition-colors flex items-center justify-center`}>
            MORE ARTICLES
            <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
        
        {/* Newsletter Signup - Enhanced with better visual feedback */}
        <div className="bg-gradient-to-br from-violet-600 to-indigo-800 rounded-lg p-6 text-white border-2 border-violet-800 relative overflow-hidden mb-8 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-cyan-400 opacity-20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-black flex items-center">
                <Bell size={20} className="mr-2 text-cyan-300" />
                JOIN OUR CREW!
              </h3>
              <span className="bg-cyan-300 text-violet-900 px-3 py-1 text-xs font-bold transform rotate-12 rounded">FREE!</span>
            </div>
            <p className="text-violet-200 mb-4">Get weekly manga updates, exclusive content, and early access to features!</p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full p-3 pl-10 rounded-lg bg-violet-700 text-white placeholder-violet-300 border-2 border-violet-500 focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300"
                />
                <div className="absolute left-3 top-3.5 text-violet-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="rounded text-cyan-400 focus:ring-cyan-300"
                  />
                  <label htmlFor="consent" className="text-sm text-violet-300">I want to receive promotional emails</label>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-400 to-cyan-300 text-violet-900 font-black py-3 rounded-lg hover:from-cyan-300 hover:to-cyan-200 transition-colors shadow-lg flex items-center justify-center">
                SUBSCRIBE NOW!
                <Bell size={16} className="ml-2" />
              </button>
            </form>
            <p className="text-xs text-center mt-3 text-violet-300">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        {/* Search Bar - New Addition */}
        {/* <div className="bg-white rounded-lg p-6 border-2 border-gray-200 mb-8 shadow-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="Search anime, manga, reviews..."
              className="w-full p-3 pl-10 pr-12 rounded-lg border-2 border-violet-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-colors"
            />
            <div className="absolute left-3 top-3.5 text-violet-400">
              <Search size={18} />
            </div>
            <button className="absolute right-2 top-2 bg-violet-600 text-white p-1.5 rounded hover:bg-violet-700 transition-colors">
              <Search size={16} />
            </button>
          </div>
        </div> */}
        
        {/* Popular Tags - Enhanced with count badges */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} mb-8 shadow-lg`}>
          <h3 className={`text-xl font-black mb-4 ${darkMode ? 'text-pink-500' : 'text-violet-900'} flex items-center`}>
            POPULAR TAGS
            <span className={`ml-2 text-xs ${darkMode ? 'bg-gray-700 text-pink-400' : 'bg-violet-100 text-violet-800'} px-2 py-0.5 rounded`}>14 TAGS</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              {name: "One Piece", count: 235},
              {name: "Jujutsu Kaisen", count: 187},
              {name: "Demon Slayer", count: 156},
              {name: "Bleach", count: 143},
              {name: "Chainsaw Man", count: 122},
              {name: "My Hero Academia", count: 110},
              {name: "Spy x Family", count: 98},
              {name: "Oshi no Ko", count: 87},
              {name: "MAPPA", count: 76},
              {name: "Ufotable", count: 65},
              {name: "Weekly Shonen Jump", count: 54},
              {name: "Seasonal", count: 43},
              {name: "Reviews", count: 32},
              {name: "Live Action", count: 21}
            ].map((tag) => (
              <a
                key={tag.name}
                href="#"
                className={`${darkMode ? 'bg-gray-700 hover:bg-purple-900 text-pink-400' : 'bg-gray-100 hover:bg-violet-100 text-violet-800'} px-3 py-1 rounded-full text-sm transition-colors flex items-center group`}
              >
                <span>#{tag.name.replace(/\s+/g, '')}</span>
                <span className={`ml-1 ${darkMode ? 'bg-gray-800 text-pink-300' : 'bg-white text-violet-600'} text-xs px-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}>
                  {tag.count}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Advertisement Banner - Enhanced with better call to action */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg p-6 text-white text-center border-2 border-pink-700 relative overflow-hidden shadow-xl">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
          <span className="text-xs font-bold text-pink-200 bg-pink-700 px-2 py-0.5 rounded">SPECIAL OFFER</span>
          <h4 className="text-2xl font-black mt-2">SPRING MANGA SALE</h4>
          <p className="text-pink-100 my-3">Get 25% off on all pre-orders & new releases!</p>
          <div className="relative group">
            <img src="https://readerinbookland.in/wp-content/uploads/2023/03/20230219_041001_0000.png" alt="Manga promotion" className="w-full h-32 object-cover rounded mt-2 mb-4 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-pink-600 bg-opacity-80 text-white px-3 py-1 rounded">VIEW DETAILS</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-white text-pink-600 font-bold py-2 px-4 rounded-full hover:bg-pink-100 transition-colors shadow-lg">
              BROWSE
            </button>
            <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-300 text-pink-700 font-bold py-2 px-4 rounded-full hover:from-yellow-300 hover:to-yellow-200 transition-colors shadow-lg animate-pulse">
              CLAIM 25% OFF
            </button>
          </div>
          <p className="text-xs mt-3 text-pink-200">Limited time offer. Ends April 30, 2025.</p>
        </div>
      </div>
  )
}

export default Sidebar