'use client'
import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, TrendingUp, Star, ChevronUp, Menu, X, Moon, Sun, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedEventsSection from './Events/FeaturedEvents';
import AnimeEventsList from './Events/UpcomingEvents';

export default function EventsPage() {
  const [darkMode, setDarkMode] = useState(false); // Default to dark mode for manga aesthetic
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = ['All', 'Anime', 'Manga', 'Conventions', 'Releases', 'Virtual'];

  const featuredEvents = [
    {
      id: 1,
      title: "AnimeExpo 2025",
      image: "/api/placeholder/800/500",
      date: "May 15-18, 2025",
      location: "Los Angeles Convention Center",
      category: "Conventions",
      isTrending: true,
      isFeatured: true,
      description: "The largest anime convention in North America returns with special guests, exclusive panels, and premiere screenings."
    },
    {
      id: 2,
      title: "One Piece: Final Saga Premiere",
      image: "/api/placeholder/800/500",
      date: "June 2, 2025",
      location: "Global Streaming Event",
      category: "Releases",
      isTrending: true,
      isFeatured: true,
      description: "The highly anticipated final saga of the legendary anime series begins with a special 2-hour premiere episode."
    }
  ];

  const events = [
    {
      id: 3,
      title: "Chainsaw Man Season 2 Launch Party",
      image: "/api/placeholder/400/300",
      date: "April 30, 2025",
      location: "Tokyo & Virtual",
      category: "Releases",
      isTrending: true,
      description: "Join the cast and creators for an exclusive preview and Q&A session."
    },
    {
      id: 4,
      title: "Manga Industry Summit",
      image: "/api/placeholder/400/300",
      date: "May 8-9, 2025",
      location: "New York City",
      category: "Manga",
      description: "Leading publishers and creators discuss the future of manga in western markets."
    },
    {
      id: 5,
      title: "Virtual Cosplay Competition",
      image: "/api/placeholder/400/300",
      date: "May 22, 2025",
      location: "Online",
      category: "Virtual",
      description: "Show off your best anime-inspired costumes in this global online event."
    },
    {
      id: 6,
      title: "Jujutsu Kaisen Art Exhibition",
      image: "/api/placeholder/400/300",
      date: "May 25-June 10, 2025",
      location: "San Francisco",
      category: "Anime",
      description: "Exclusive artwork and behind-the-scenes content from the hit series."
    },
    {
      id: 7,
      title: "Digital Manga Workshop",
      image: "/api/placeholder/400/300",
      date: "June 5, 2025",
      location: "Online",
      category: "Manga",
      description: "Learn digital manga creation techniques from industry professionals."
    },
    {
      id: 8,
      title: "AnimeFest Seattle",
      image: "/api/placeholder/400/300",
      date: "June 12-14, 2025",
      location: "Seattle Convention Center",
      category: "Conventions",
      description: "Three days of panels, screenings, and special guests celebrating anime culture."
    }
  ];
  const [activeTab, setActiveTab] = useState("HOT RIGHT NOW");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  
  

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <div className={`min-h-screen ${
      darkMode 
        ? 'bg-gray-900 text-white bg-[url("/api/placeholder/40/40")] bg-repeat' 
        : 'bg-violet-50 text-gray-900 bg-[url("/api/placeholder/40/40")] bg-repeat'
    } transition-colors duration-300 font-sans`}
    style={{ 
      backgroundImage: darkMode 
        ? 'linear-gradient(rgba(17, 24, 39, 0.97), rgba(17, 24, 39, 0.97)), url("/api/placeholder/40/40")' 
        : 'linear-gradient(rgba(239, 246, 255, 0.92), rgba(239, 246, 255, 0.92)), url("/api/placeholder/40/40")'
    }}>
      
      <Header 
        darkMode={darkMode} 
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        toggleDarkMode={toggleDarkMode} 
        toggleNotification={toggleNotification} 
        isNotificationOpen={isNotificationOpen} 
        showBackToTop={showBackToTop} 
        scrollToTop={scrollToTop}
      />
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-50 ${darkMode ? 'bg-gray-900/98' : 'bg-violet-50/98'} backdrop-blur-sm flex flex-col md:hidden`}
             style={{ 
               backgroundImage: darkMode 
                 ? 'url("/api/placeholder/400/400")' 
                 : 'url("/api/placeholder/400/400")',
               backgroundSize: '200px',
              //  backgroundOpacity: '0.05'
             }}>
          <div className="flex justify-end p-4">
            <button 
              onClick={toggleMenu}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-violet-100 hover:bg-blue-200'} transition-colors duration-300`}
              aria-label="Close menu"
            >
              <X size={24} className={darkMode ? 'text-pink-500' : 'text-violet-600'} />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-8 p-8">
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setIsMenuOpen(false);
                }}
                className={`uppercase font-black text-xl tracking-wide transition-all duration-300 ${
                  activeCategory === category 
                    ? (darkMode ? 'text-yellow-400 scale-110' : 'text-violet-600 scale-110') 
                    : darkMode ? 'text-white hover:text-pink-400' : 'text-gray-900 hover:text-violet-500'
                }`}
                style={{ 
                  textShadow: activeCategory === category 
                    ? (darkMode ? '1px 1px 2px rgba(234, 179, 8, 0.7)' : '1px 1px 2px rgba(37, 99, 235, 0.7)') 
                    : 'none',
                  transform: activeCategory === category ? 'skewX(-5deg)' : 'none'
                }}
              >
                {activeCategory === category ? `★ ${category} ★` : category}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <main className="container mx-auto px-4 py-8 relative">
        {/* Page Title with Manga Style */}
        <div className="relative mb-12 mx-auto max-w-4xl">
          <div className={`absolute inset-0 ${darkMode ? 'bg-pink-600' : 'bg-violet-600'} transform -skew-x-3 skew-y-1 -rotate-1`}></div>
          <div className={`relative p-6 ${darkMode ? 'bg-gray-800 border-pink-600' : 'bg-white border-violet-600'} border-4 transform rotate-1`}>
            <h1 className="font-black text-3xl md:text-5xl uppercase tracking-tight text-center" 
                style={{ 
                  
                  textShadow: darkMode ? '3px 3px 0px #EC4899' : '3px 3px 0px #2563EB',
                  letterSpacing: '-1px'
                }}>
              MANGA <span className={`${darkMode ? 'text-pink-500' : 'text-violet-600'}`}>イベント</span> EVENTS
            </h1>
            <div className="flex justify-center mt-4">
              <div className={`h-1 w-32 ${darkMode ? 'bg-pink-500' : 'bg-violet-500'} transform -skew-x-12`}></div>
            </div>
          </div>
        </div>
        
        {/* Category Pills (Mobile Only) */}
        <div className="md:hidden overflow-x-auto flex space-x-2 py-4 mb-6">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-2 text-sm font-black transition-all duration-300 transform ${
                activeCategory === category 
                  ? (darkMode 
                      ? 'bg-pink-600 text-white shadow-lg border-2 border-yellow-400 -rotate-2' 
                      : 'bg-violet-600 text-white shadow-lg border-2 border-yellow-400 -rotate-2')
                  : darkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700' 
                    : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
              }`}
              style={{
                clipPath: activeCategory === category 
                  ? 'polygon(0% 0%, 95% 0%, 100% 40%, 100% 100%, 5% 100%, 0% 60%)' 
                  : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Featured Events Section with Manga Style */}
        <section className="mb-16">
          <div className="relative inline-block mb-8">
            <h2 className={`text-2xl md:text-3xl font-black uppercase px-6 py-2 inline-block ${
              darkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white'
            }`}
            style={{
              clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)',
              
            }}>
              Featured Events!
            </h2>
            <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full ${darkMode ? 'bg-yellow-400' : 'bg-yellow-400'} flex items-center justify-center`}>
              <Star size={16} className="text-black" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredEvents.map(event => (
              <div 
                key={event.id} 
                className={`relative overflow-hidden transition-all duration-300 transform hover:-rotate-1`}
              >
                {/* Manga panel style border */}
                <div className={`absolute inset-0 ${darkMode ? 'bg-gray-800 border-white' : 'bg-white border-black'} border-4 shadow-xl`}></div>
                
                <div className="relative">
                  {/* "Manga page" corner fold */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent via-transparent to-gray-300 transform rotate-90"></div>
                  
                  <div className="relative h-64 overflow-hidden border-b-4 border-black">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Manga-style overlay patterns */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent mix-blend-multiply"></div>
                    
                    {/* Speed lines overlay */}
                    <div className="absolute inset-0 opacity-20" 
                         style={{
                           background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, white 2px, white 3px)'
                         }}></div>
                    
                    {/* Category tag like manga sound effect */}
                    <div className="absolute top-4 left-4 transform -rotate-6">
                      <div className={`py-1 px-3 ${
                        darkMode ? 'bg-yellow-400 text-black' : 'bg-yellow-400 text-black'
                      } text-xs font-black uppercase tracking-widest`}
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
                        textShadow: '1px 1px 0px white'
                      }}>
                        {event.category}
                      </div>
                    </div>
                    
                    {/* Trending explosion */}
                    {event.isTrending && (
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 ${
                          darkMode ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white'
                        } text-xs font-black flex items-center`}
                        style={{
                          clipPath: 'polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)',
                        }}>
                          <TrendingUp size={12} className="mr-1" /> HOT!
                        </div>
                      </div>
                    )}
                    
                    {/* Title in comic style balloon */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`relative ${
                        darkMode ? 'bg-white text-black' : 'bg-white text-black'
                      } p-3 rounded-lg border-2 border-black`}
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 98% 80%, 85% 100%, 75% 80%, 0% 80%)'
                      }}>
                        <h3 className="font-black text-lg md:text-xl" style={{  }}>
                          {event.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative p-6">
                    {/* Event details with manga styling */}
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center text-sm">
                        <Calendar size={16} className={`mr-2 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
                        <span className="font-bold">{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin size={16} className={`mr-2 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
                        <span className="font-bold">{event.location}</span>
                      </div>
                      
                      {/* Description in manga bubble */}
                      <div className={`mt-3 p-3 relative ${
                        darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'
                      } border-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                      style={{
                        borderRadius: '10px'
                      }}>
                        <p>{event.description}</p>
                        {/* Bubble pointer */}
                        <div className="absolute -top-2 left-4 w-4 h-4 transform rotate-45 
                          border-l-2 border-t-2 border-gray-600
                          bg-inherit"></div>
                      </div>
                      
                      {/* Action button with manga style */}
                      <div className="mt-4 text-center">
                        <button className={`px-6 py-2 font-black text-white transform transition-all duration-300 hover:scale-105 hover:-rotate-2 ${
                          darkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500'
                        }`}
                        style={{
                          clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
                          boxShadow: darkMode ? '3px 3px 0px #EC4899' : '3px 3px 0px #2563EB'
                        }}>
                          LEARN MORE →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        {/* Upcoming Events & Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-8">
              <div className="relative inline-block">
                <h2 className={`text-2xl md:text-3xl font-black uppercase px-6 py-2 inline-block ${
                  darkMode ? 'bg-gray-800 text-white border-2 border-pink-500' : 'bg-white text-violet-600 border-2 border-violet-500'
                }`}
                style={{
                  transform: 'skew(-5deg)',
                  
                }}>
                  Upcoming Events
                </h2>
                
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400"></div>
              </div>
              
              <button 
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className={`flex items-center px-4 py-2 font-bold text-sm ${
                  darkMode 
                    ? 'bg-gray-800 text-pink-400 border border-pink-500' 
                    : 'bg-white text-violet-600 border border-violet-500'
                }`}
                style={{
                  transform: 'skew(-5deg)'
                }}
              >
                <Filter size={14} className="mr-2" />
                Filters
              </button>
            </div>
            
            
            {isFiltersOpen && (
              <div className={`mb-6 p-4 ${darkMode ? 'bg-gray-800 border-2 border-pink-500' : 'bg-white border-2 border-violet-500'}`}
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 99% 95%, 95% 100%, 0% 100%, 1% 5%)'
                }}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Month</label>
                    <select className={`w-full px-3 py-2 ${
                      darkMode 
                        ? 'bg-gray-700 text-white border-gray-600' 
                        : 'bg-violet-50 border-gray-300'
                    } border`}>
                      <option>All</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Location</label>
                    <select className={`w-full px-3 py-2 ${
                      darkMode 
                        ? 'bg-gray-700 text-white border-gray-600' 
                        : 'bg-violet-50 border-gray-300'
                    } border`}>
                      <option>All</option>
                      <option>Online</option>
                      <option>USA</option>
                      <option>Japan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Type</label>
                    <select className={`w-full px-3 py-2 ${
                      darkMode 
                        ? 'bg-gray-700 text-white border-gray-600' 
                        : 'bg-violet-50 border-gray-300'
                    } border`}>
                      <option>All Types</option>
                      <option>Convention</option>
                      <option>Release</option>
                      <option>Exhibition</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className={`w-full px-3 py-2 font-bold text-white transform transition-all duration-300 ${
                      darkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500'
                    }`}
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
                    }}>
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEvents.map((event, index) => (
                <div 
                  key={event.id} 
                  className={`relative overflow-hidden transition-all duration-300 transform hover:scale-102 hover:-rotate-1`}
                  style={{
                    transform: index % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)'
                  }}
                >
                  
                  <div className={`${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                  } border-4 shadow-lg overflow-hidden`}>
                    
                    <div className="relative h-48 overflow-hidden border-b-2 border-dashed border-gray-500">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover filter contrast-110"
                      />
                      
                      
                      <div className="absolute inset-0 opacity-30 mix-blend-multiply"
                           style={{
                             backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
                             backgroundSize: '4px 4px'
                           }}></div>
                      
                      
                      <div className="absolute bottom-0 left-0 right-0">
                        <div className={`w-20 py-1 text-center transform rotate-3 translate-y-2 translate-x-2 ${
                          darkMode ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white'
                        } border border-black`}>
                          <span className="text-xs font-black uppercase tracking-wider"
                                style={{  }}>
                            {event.category}
                          </span>
                        </div>
                      </div>
                      
                      
                      {event.isTrending && (
                        <div className="absolute top-2 right-2">
                          <div className={`px-2 py-1 ${
                            darkMode ? 'bg-yellow-400 text-black' : 'bg-yellow-400 text-black'
                          } text-xs font-black flex items-center`}
                          style={{
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                          }}>
                            <TrendingUp size={10} className="mr-1" /> HOT
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      
                      <h3 className="font-black text-lg mb-3" 
                          style={{  }}>
                        {event.title}
                      </h3>
                      
                      <div className="flex flex-col space-y-2 mb-3">
                        <div className="flex items-center text-sm">
                          <Calendar size={14} className={`mr-2 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
                          <span className="font-bold">{event.date}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin size={14} className={`mr-2 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
                          <span className="font-bold">{event.location}</span>
                        </div>
                      </div>
                      
                      
                      <div className={`mt-2 p-2 relative text-sm ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-100'
                      } border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                      style={{
                        borderRadius: '6px',
                        transform: 'rotate(-0.5deg)'
                      }}>
                        <p>{event.description}</p>
                      </div>
                      
                      
                      <div className="mt-4 text-center">
                        <button className={`px-4 py-2 text-sm font-black text-white transform transition-all duration-300 scale-105 hover:-rotate-2 ${
                          darkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500'
                        }`}
                        style={{
                          clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
                          boxShadow: darkMode ? '2px 2px 0px #EC4899' : '2px 2px 0px #2563EB'
                        }}>
                          DETAILS! →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
           
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-3">
                <button className={`w-10 h-10 flex items-center justify-center font-black ${
                  darkMode 
                  ? 'bg-gray-800 text-white border-2 border-gray-700 hover:border-pink-500' 
                  : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-violet-500'
                }`}
                style={{ transform: 'skew(-5deg)' }}>
                  1
                </button>
                <button className={`w-10 h-10 flex items-center justify-center font-black ${
                  darkMode 
                  ? 'bg-gray-800 text-white border-2 border-gray-700 hover:border-pink-500' 
                  : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-violet-500'
                }`}
                style={{ transform: 'skew(-5deg)' }}>
                  2
                </button>
                <button className={`w-10 h-10 flex items-center justify-center font-black ${
                  darkMode 
                  ? 'bg-pink-600 text-white border-2 border-pink-800' 
                  : 'bg-violet-600 text-white border-2 border-blue-800'
                }`}
                style={{ transform: 'skew(-5deg)' }}>
                  3
                </button>
                <button className={`w-10 h-10 flex items-center justify-center font-black ${
                  darkMode 
                  ? 'bg-gray-800 text-white border-2 border-gray-700 hover:border-pink-500' 
                  : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-violet-500'
                }`}
                style={{ transform: 'skew(-5deg)' }}>
                  4
                </button>
              </div>
            </div>
          </div> */}
          <AnimeEventsList/>
          
          {/* <div className="lg:w-1/3">
            
            
          </div> */}
        </div>
      </main>
      
      <Footer categories={categories} />
      
      
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center ${
            darkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white'
          } shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3`}
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            boxShadow: darkMode ? '3px 3px 0px rgba(236, 72, 153, 0.7)' : '3px 3px 0px rgba(37, 99, 235, 0.7)'
          }}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}