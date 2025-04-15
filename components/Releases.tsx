
'use client'
import { useEffect, useState } from 'react';
import { Bell, Menu, Search, X, Star, ChevronRight, Bookmark, Heart, MessageCircle, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MangaNewsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedItems, setLikedItems] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  
  // Theme and styling variables
  const themeClass = darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900';
  const accentColor = darkMode ? 'text-pink-500' : 'text-violet-600';
  const accentBg = darkMode ? 'bg-pink-500' : 'bg-violet-600';
  const secondaryBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const cardHoverClass = 'transition-all duration-300 hover:shadow-lg';
  
  // Toggle functions
  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);
  
  // Handle likes and bookmarks
  const toggleLike = (index) => {
    setLikedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  
  const toggleBookmark = (index) => {
    setBookmarkedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  // Latest manga releases data
  const mangaReleases = [
    {
      title: "Jujutsu Kaisen",
      chapter: "Chapter 256",
      image: "/api/placeholder/240/360",
      hot: true,
      description: "Yuji Itadori and the sorcerers face off against the cursed spirits.",
      date: "Apr 15"
    },
    {
      title: "My Hero Academia",
      chapter: "Chapter 402",
      image: "/api/placeholder/240/360",
      description: "The final arc continues as heroes make their last stand.",
      date: "Apr 14"
    },
    {
      title: "Chainsaw Man",
      chapter: "Chapter 153",
      image: "/api/placeholder/240/360",
      description: "Denji's new adventures unfold in this action-packed chapter.",
      date: "Apr 13"
    },
    {
      title: "Kagurabachi",
      chapter: "Chapter 34",
      image: "/api/placeholder/240/360",
      new: true,
      description: "The rising star manga continues its epic sword saga.",
      date: "Apr 15"
    }
  ];

  // Trending anime data
  const trendingAnime = [
    {
      title: "Frieren: Beyond Journey's End",
      genre: "Fantasy",
      rating: 4.9,
      image: "/api/placeholder/240/150",
      episodes: 28,
      studio: "Madhouse"
    },
    {
      title: "Solo Leveling",
      genre: "Action",
      rating: 4.8,
      image: "/api/placeholder/240/150",
      episodes: 12,
      studio: "A-1 Pictures"
    }
  ];

  // Popular news data
  const popularNews = [
    {
      title: "Hunter x Hunter Creator Returns from Hiatus",
      date: "Apr 15",
      comments: 42,
      excerpt: "Togashi announces return with 10 new chapters planned for 2025."
    },
    {
      title: "Crunchyroll Announces Spring 2025 Lineup",
      date: "Apr 14",
      comments: 35,
      excerpt: "20+ new shows including highly anticipated sequels and originals."
    },
    {
      title: "Spy x Family Movie Confirmed for Summer Release",
      date: "Apr 13",
      comments: 28,
      excerpt: "The Forger family heads to the big screen in a new original story."
    },
    {
      title: "Attack on Titan Author Reveals New Project",
      date: "Apr 12",
      comments: 21,
      excerpt: "Hajime Isayama's new dark fantasy series to debut this fall."
    }
  ];

  // Categories
  const categories = [
    "Shonen", "Shojo", "Seinen", "Isekai", 
    "Mecha", "Slice of Life", "Horror", "Movies", "Industry"
  ];

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen ${themeClass} font-sans transition-colors duration-300`}>
      {/* HEADER */}
      <Header 
        darkMode={darkMode} 
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        toggleDarkMode={toggleTheme}  
        toggleNotification={toggleNotification} 
        isNotificationOpen={isNotificationOpen} 
        showBackToTop={showBackToTop} 
        scrollToTop={scrollToTop}
      />
      
      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-blue-50'} p-6 animate-fadeIn`}>
          <div className="flex justify-end mb-6">
            <button 
              onClick={toggleMobileMenu} 
              className="p-2 transition-transform hover:rotate-90 duration-300"
            >
              <X size={24} className={accentColor} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 uppercase font-bold text-xl">
            <a href="#" className="transform -rotate-1 py-2 border-b-2 border-dashed border-gray-700 hover:translate-x-2 transition-transform">News</a>
            <a href="#" className="transform rotate-1 py-2 border-b-2 border-dashed border-gray-700 hover:translate-x-2 transition-transform">Releases</a>
            <a href="#" className="transform -rotate-1 py-2 border-b-2 border-dashed border-gray-700 hover:translate-x-2 transition-transform">Reviews</a>
            <a href="#" className="transform rotate-1 py-2 border-b-2 border-dashed border-gray-700 hover:translate-x-2 transition-transform">Community</a>
            <a href="#" className={`${accentBg} text-white py-2 px-4 text-center transform -rotate-1 clip-path-polygon mt-4 hover:scale-105 transition-transform`}>Subscribe</a>
          </nav>
        </div>
      )}
      
      {/* HERO SECTION */}
      <section className="container mx-auto px-4 py-6">
        <div className={`${secondaryBg} clip-path-polygon p-6 relative overflow-hidden border-4 ${darkMode ? 'border-pink-500' : 'border-violet-600'} transform -rotate-1 hover:rotate-0 transition-transform duration-300`}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="w-full h-full bg-speed-lines"></div>
          </div>
          
          <div className="absolute top-0 right-0 animate-pulse">
            <div className={`bg-yellow-500 text-black font-extrabold px-4 py-2 transform rotate-3 clip-path-explosion uppercase text-sm tracking-widest`}>
              Breaking
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 transform -skew-x-2 shadow-text-md">
            "One Piece Movie RED" Breaks Box Office Records!
          </h2>
          
          <p className="text-lg mb-6 max-w-3xl">
            The latest One Piece film shatters expectations, becoming the highest-grossing anime film of 2025 in just its opening weekend. Creator Eiichiro Oda shares his excitement in an exclusive interview.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#" className={`${accentBg} text-white font-bold uppercase py-2 px-6 clip-path-polygon transform hover:scale-105 transition-all flex items-center gap-2 group`}>
              <span>Read More</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-4`}>
              <span className="flex items-center gap-1">
                <Clock size={16} /> 2 hours ago
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle size={16} /> 42 comments
              </span>
              <span className="flex items-center gap-1">
                <Share2 size={16} className="hover:scale-110 transition-transform cursor-pointer" /> Share
              </span>
            </div>
          </div>
        </div>
      </section>
      
      {/* RELEASE SECTION */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-extrabold uppercase transform -skew-x-3 tracking-tight relative">
            <span className={accentColor}>Latest</span> Releases
            <span className={`block h-1 ${accentBg} w-12 mt-1`}></span>
          </h3>
          <a href="#" className={`text-sm ${accentColor} font-bold flex items-center hover:scale-105 transition-transform group`}>
            View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mangaReleases.map((manga, index) => (
            <div 
              key={index} 
              className={`${secondaryBg} border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} clip-path-polygon overflow-hidden transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} ${cardHoverClass} hover:rotate-0 hover:border-opacity-100 ${hoveredCard === index ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative group">
                <img src={manga.image} alt={manga.title} className="w-full object-cover h-64 transition-transform duration-500 group-hover:scale-105" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {manga.hot && (
                  <div className="absolute top-2 right-2 animate-pulse">
                    <div className={`bg-yellow-500 text-black font-bold px-3 py-1 text-sm
                      clip-path-explosion transform rotate-3`}>
                      HOT
                    </div>
                  </div>
                )}
                
                {manga.new && (
                  <div className="absolute top-2 right-2 animate-bounce">
                    <div className={`${accentBg} text-white font-bold px-3 py-1 text-sm
                      clip-path-explosion transform -rotate-2`}>
                      NEW
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 transform translate-y-0 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-white font-bold text-lg">{manga.title}</h4>
                  <p className="text-gray-300 text-sm truncate opacity-0 group-hover:opacity-100 transition-opacity duration-300">{manga.description}</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold">{manga.chapter}</span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{manga.date}</span>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="flex gap-3">
                    <button 
                      className="hover:scale-110 transition-transform" 
                      onClick={() => toggleLike(index)}
                    >
                      <Heart 
                        size={18} 
                        className={likedItems.includes(index) ? "text-red-500 fill-current" : "text-gray-400 hover:text-red-500"} 
                      />
                    </button>
                    <button 
                      className="hover:scale-110 transition-transform"
                      onClick={() => toggleBookmark(index)}
                    >
                      <Bookmark 
                        size={18} 
                        className={bookmarkedItems.includes(index) ? "text-blue-500 fill-current" : "text-gray-400 hover:text-blue-500"} 
                      />
                    </button>
                  </div>
                  <button className={`${accentBg} text-white px-3 py-1 text-sm font-bold clip-path-polygon transform hover:scale-105 transition-transform`}>
                    Read
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* TRENDING ANIME SECTION */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-extrabold uppercase transform -skew-x-3 tracking-tight mb-6 relative">
              <span className={accentColor}>Trending</span> Anime
              <span className={`block h-1 ${accentBg} w-12 mt-1`}></span>
            </h3>
            
            <div className={`${secondaryBg} border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} clip-path-polygon overflow-hidden p-6 mb-6 hover:shadow-xl transition-shadow duration-300`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative group overflow-hidden">
                  <img 
                    src="/api/placeholder/400/250" 
                    alt="Demon Slayer" 
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-3 left-3 animate-pulse">
                    <div className={`${accentBg} text-white px-3 py-1 text-sm font-bold clip-path-explosion transform -rotate-2`}>
                      Season Finale
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                
                <div>
                  <h4 className="text-xl font-extrabold uppercase mb-3 tracking-tight">
                    Demon Slayer: Hashira Training Arc
                  </h4>
                  <p className="mb-4 text-sm">
                    The highly anticipated finale drops this weekend, concluding the intense training arc and setting the stage for the final battle against Muzan.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} px-3 py-1 text-xs font-bold rounded-full hover:${accentBg} hover:text-white transition-colors duration-300 cursor-pointer`}>
                      Action
                    </span>
                    <span className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} px-3 py-1 text-xs font-bold rounded-full hover:${accentBg} hover:text-white transition-colors duration-300 cursor-pointer`}>
                      Fantasy
                    </span>
                    <span className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} px-3 py-1 text-xs font-bold rounded-full hover:${accentBg} hover:text-white transition-colors duration-300 cursor-pointer`}>
                      Drama
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} fill="#F59E0B" stroke="none" className="hover:scale-125 transition-transform" />
                      ))}
                    </div>
                    <span className="text-sm">5.0 (324 reviews)</span>
                  </div>
                  
                  <a href="#" className={`${accentBg} text-white font-bold uppercase py-2 px-4 clip-path-polygon transform hover:scale-105 transition-all inline-flex items-center gap-2 group`}>
                    <span>Watch Now</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trendingAnime.map((anime, index) => (
                <div 
                  key={index} 
                  className={`${secondaryBg} border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} clip-path-polygon overflow-hidden p-4 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 hover:scale-105 transition-transform duration-300`}
                >
                  <div className="flex gap-4">
                    <div className="w-24 h-24 overflow-hidden">
                      <img 
                        src={anime.image} 
                        alt={anime.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                      />
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{anime.title}</h5>
                      <div className="flex items-center gap-1 mb-2">
                        <Star size={14} fill="#F59E0B" stroke="none" />
                        <span className="text-xs">{anime.rating}</span>
                        <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} ml-2`}>{anime.genre}</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-2">
                        {anime.episodes} episodes • {anime.studio}
                      </div>
                      <a href="#" className={`text-xs ${accentColor} font-bold flex items-center group`}>
                        View Details 
                        <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* SIDEBAR */}
          <div className="w-full md:w-1/3">
            <div className={`${secondaryBg} border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} clip-path-polygon p-4 mb-6 transform rotate-1 hover:rotate-0 transition-transform duration-300`}>
              <h4 className="text-lg font-extrabold uppercase mb-4 tracking-tight relative">
                <span className={accentColor}>Popular</span> News
                <span className={`block h-1 ${accentBg} w-8 mt-1`}></span>
              </h4>
              
              <div className="space-y-4">
                {popularNews.map((news, index) => (
                  <div 
                    key={index} 
                    className={`pb-3 ${index < popularNews.length - 1 ? `border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}` : ''} hover:bg-gray-100 hover:bg-opacity-5 p-2 transition-colors rounded`}
                  >
                    <a href="#" className="font-bold hover:text-pink-500 transition-colors flex gap-2 group">
                      <span className={`${accentColor} font-extrabold`}>{index + 1}.</span>
                      {news.title}
                    </a>
                    <p className="text-xs text-gray-500 mt-1 ml-6">{news.excerpt}</p>
                    <div className="flex justify-between items-center mt-2 text-xs text-gray-400 ml-6">
                      <span>{news.date}</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle size={12} /> {news.comments}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`${secondaryBg} border-2 ${darkMode ? 'border-pink-500' : 'border-violet-500'} clip-path-polygon p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300`}>
              <h4 className="text-lg font-extrabold uppercase mb-4 tracking-tight relative">
                <span className={accentColor}>Weekly</span> Poll
                <span className={`block h-1 ${accentBg} w-8 mt-1`}></span>
              </h4>
              
              <div className="mb-4">
                <p className="font-bold mb-3">Which Spring 2025 anime are you most excited for?</p>
                
                {[
                  { name: "My Hero Academia S8", votes: 42 },
                  { name: "Spy x Family S3", votes: 38 },
                  { name: "Jujutsu Kaisen S3", votes: 56 },
                  { name: "Chainsaw Man S2", votes: 31 }
                ].map((option, index) => (
                  <div key={index} className="mb-2 hover:bg-gray-100 hover:bg-opacity-5 p-1 rounded transition-colors duration-300 cursor-pointer">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>{option.name}</span>
                      <span>{option.votes} votes</span>
                    </div>
                    <div className={`w-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                      <div 
                        className={`h-full ${accentBg} transition-all duration-700`} 
                        style={{ width: `${(option.votes / 56) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className={`w-full ${accentBg} text-white font-bold uppercase py-2 clip-path-polygon transform hover:scale-105 transition-all text-center`}>
                Vote Now
              </button>
            </div>
            
            {/* NEW DISCUSSION SECTION */}
            <div className={`${secondaryBg} border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} clip-path-polygon p-4 mt-6 transform rotate-1 hover:rotate-0 transition-transform duration-300`}>
              <h4 className="text-lg font-extrabold uppercase mb-4 tracking-tight relative">
                <span className={accentColor}>Hot</span> Discussions
                <span className={`block h-1 ${accentBg} w-8 mt-1`}></span>
              </h4>
              
              <div className="space-y-3">
                {[
                  { topic: "Is Jujutsu Kaisen the new king of shonen?", replies: 128, hot: true },
                  { topic: "Unpopular opinion: Chainsaw Man is overrated", replies: 95 },
                  { topic: "Will anime streaming get more expensive?", replies: 67 }
                ].map((discussion, index) => (
                  <div key={index} className={`flex items-center gap-3 p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg transition-colors cursor-pointer`}>
                    <div className={`${accentBg} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-sm">{discussion.topic}</p>
                        {discussion.hot && (
                          <span className="bg-red-500 text-white text-xs px-1 rounded animate-pulse">
                            HOT
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400">{discussion.replies} replies</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className={`w-full mt-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} py-2 font-bold text-sm rounded-lg hover:${accentBg} hover:text-white transition-colors`}>
                View All Discussions
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* NEWSLETTER WITH ENHANCED DESIGN */}
      <section className="container mx-auto px-4 py-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 clip-path-polygon relative border-2 ${darkMode ? 'border-pink-500' : 'border-violet-600'} transform -rotate-1 hover:rotate-0 transition-transform duration-300`}>
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="w-full h-full bg-halftone-pattern"></div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className={`inline-block ${accentBg} text-white px-3 py-1 text-sm font-bold mb-2 clip-path-explosion transform -rotate-2`}>
              Join The Community
            </div>
            
            <h3 className="text-2xl font-extrabold uppercase transform -skew-x-3 tracking-tight mb-3">
              Stay Updated on <span className={accentColor}>Anime News</span>
            </h3>
            <p className="mb-6">Get the latest manga chapters, anime episodes, and industry news delivered straight to your inbox!</p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className={`flex-1 p-3 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'focus:ring-pink-500' : 'focus:ring-violet-500'} transition-all`}
              />
              <button className={`${accentBg} text-white font-bold uppercase py-3 px-6 clip-path-polygon transform hover:scale-105 transition-all`}>
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
            
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex items-center">
                <Bell size={14} className={accentColor} />
                <span className="text-xs ml-1">Weekly Updates</span>
              </div>
              <div className="flex items-center">
                <Star size={14} className={accentColor} />
                <span className="text-xs ml-1">Exclusive Content</span>
              </div>
              <div className="flex items-center">
              <Star size={14} className={accentColor} />
                <span className="text-xs ml-1">Exclusive Content</span>
              </div>
              <div className="flex items-center">
                <X size={14} className={accentColor} />
                <span className="text-xs ml-1">No Spam</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <Footer categories={categories} />
      
      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 ${accentBg} text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-30`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
      
      <style jsx>{`
        .clip-path-polygon {
          clip-path: polygon(
            0% 10px, 
            10px 0%, 
            calc(100% - 5px) 0%, 
            100% 5px, 
            100% calc(100% - 10px), 
            calc(100% - 10px) 100%, 
            5px 100%, 
            0% calc(100% - 5px)
          );
        }
        
        .clip-path-explosion {
          clip-path: polygon(
            0% 20%, 
            15% 0%, 
            35% 10%, 
            50% 0%, 
            65% 10%, 
            85% 0%, 
            100% 20%, 
            90% 40%, 
            100% 60%, 
            85% 80%, 
            100% 100%, 
            65% 90%, 
            50% 100%, 
            35% 90%, 
            15% 100%, 
            0% 80%, 
            10% 60%, 
            0% 40%
          );
        }
        
        .shadow-text-md {
          text-shadow: 3px 3px 0px ${darkMode ? 'rgba(236, 72, 153, 0.5)' : 'rgba(124, 58, 237, 0.5)'};
        }
        
        .shadow-custom {
          text-shadow: 2px 2px 0px ${darkMode ? 'rgba(236, 72, 153, 0.7)' : 'rgba(124, 58, 237, 0.7)'};
        }
        
        .bg-speed-lines {
          background-image: repeating-linear-gradient(
            45deg,
            currentColor,
            currentColor 1px,
            transparent 1px,
            transparent 10px
          );
        }
        
        .bg-halftone-pattern {
          background-image: radial-gradient(
            currentColor 1px,
            transparent 1px
          );
          background-size: 10px 10px;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}

// Adding missing components that were referenced but not defined
const Clock = ({ size }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
};