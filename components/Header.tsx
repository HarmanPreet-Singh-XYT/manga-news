import { 
  X, Menu, Bell, Sun, Moon, Search, Bookmark, BookOpen, 
  ChevronRight, Heart, Zap, User, Globe, ChevronUp, Star, 
  Newspaper
} from 'lucide-react'
import React, { useState, useEffect } from 'react'
import getTheme,{setTheme} from '@/app/api/cookie';
const Header = ({
  darkMode,
  toggleMenu,
  isMenuOpen,
  toggleDarkMode,
  toggleNotification,
  isNotificationOpen,
  showBackToTop,
  scrollToTop
}) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState('/');
  async function performThemeCheck(){
    const theme = await getTheme();
    if(!darkMode && theme==='dark'){
      toggleDarkMode();
    }else if(darkMode && theme==='light'){
      toggleDarkMode();
    }
  }
  // Detect current page for active state in navigation
  useEffect(() => {
    performThemeCheck();
    setCurrentPage(window.location.pathname);
  }, []);
  
  const categories = [
    {
      name: 'Home',
      href: '/',
      icon: <Star size={16} />
    },
    {
      name: 'Articles',
      href: '/articles',
      icon: <Newspaper size={16} />
    },
    {
      name: 'Series',
      href: '/series',
      icon: <BookOpen size={16} />
    },
    {
      name: 'Releases',
      href: '/releases',
      icon: <Zap size={16} />
    },
    {
      name: 'Events',
      href: '/events',
      icon: <Bell size={16} />
    },
    {
      name: 'About',
      href: '/about',
      icon: <User size={16} />
    },
  ]
  const changeTheme = async ()=>{
    toggleDarkMode();
    !darkMode ? await setTheme('dark') : await setTheme('light');
  }
  // Language options
  const languages = ['English', 'Japanese', 'Spanish', 'French'];
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const menuItems = [
    { name: 'Profile', href: '/profile' },
    { name: 'My Library', href: '/library' },
    { name: 'Reading History', href: '/history' },
    { name: 'Settings', href: '/settings' },
    { name: 'Logout', href: '/' },
  ];
  
  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };
  
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setLanguageMenuOpen(false);
  };

  // User menu state
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <>
    <header 
      className={`${
        darkMode 
          ? 'bg-gradient-to-r from-purple-900 to-indigo-950 shadow-indigo-900/50' 
          : 'bg-gradient-to-r from-purple-700 to-indigo-900 shadow-purple-700/30'
      } shadow-xl border-b-4 ${
        darkMode ? 'border-violet-950' : 'border-violet-900'
      } sticky top-0 z-40 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              className={`mr-4 p-2 rounded-full text-white ${
                darkMode ? 'hover:bg-violet-950' : 'hover:bg-violet-800'
              } transition-colors lg:hidden focus:outline-none focus:ring-2 focus:ring-cyan-300`} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href='/' className="group">
              <div className="flex items-center">
                <h1 
                  className="text-3xl font-black text-white relative group-hover:scale-105 transition-transform duration-300" 
                  style={{ 
                    textShadow: `3px 3px 0 ${darkMode ? '#15162c' : '#000'}`,
                  }}
                >
                  <span className="text-pink-400">MANGA</span>
                  <span className="text-cyan-300">PULSE</span>
                  <span className="text-yellow-300">!</span>
                  <div className="absolute -top-3 -right-6 w-6 h-6 bg-pink-400 rounded-full animate-ping opacity-75"></div>
                </h1>
              </div>
            </a>
          </div>
          
          <div className="hidden lg:flex space-x-6">
            {categories.map((category) => {
              const isActive = currentPage === category.href;
              return (
                <a 
                  key={category.name} 
                  href={category.href} 
                  className={`text-white font-bold ${
                    isActive 
                      ? 'text-cyan-300' 
                      : 'hover:text-cyan-300'
                  } transition-colors relative group py-2`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className="flex items-center">
                    <span className="mr-1 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      {category.icon}
                    </span>
                    {category.name.toUpperCase()}
                  </div>
                  <span 
                    className={`absolute -bottom-2 left-0 h-1 bg-pink-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Language switcher */}
            <div className="relative hidden md:block">
              <button 
                className={`p-2 rounded-full ${
                  darkMode ? 'hover:bg-violet-950' : 'hover:bg-violet-800'
                } text-white relative transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300`}
                onClick={toggleLanguageMenu}
                aria-label="Select language"
                aria-expanded={languageMenuOpen}
              >
                <Globe size={20} />
              </button>
              
              {languageMenuOpen && (
                <div 
                  className={`absolute right-0 mt-2 w-40 ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } rounded-lg shadow-xl border z-50 py-2 animate-fadeIn`}
                >
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => handleLanguageSelect(language)}
                      className={`block w-full text-left px-4 py-2 ${
                        darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                      } ${
                        selectedLanguage === language 
                          ? darkMode ? 'bg-gray-700 text-cyan-300' : 'bg-gray-50 text-indigo-600' 
                          : darkMode ? 'text-white' : 'text-gray-800'
                      } transition-colors`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Notifications button */}
            <button 
              className={`p-2 rounded-full ${
                darkMode ? 'hover:bg-violet-950' : 'hover:bg-violet-800'
              } text-white relative transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300`}
              onClick={toggleNotification}
              aria-label="Notifications"
              aria-expanded={isNotificationOpen}
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
            </button>
            
            {/* Dark mode toggle */}
            <button
              className={`p-2 rounded-full ${
                darkMode ? 'hover:bg-violet-950' : 'hover:bg-violet-800'
              } text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300`}
              onClick={changeTheme}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Search bar */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`hidden md:block ${
                  darkMode 
                    ? 'bg-violet-950 placeholder-violet-400' 
                    : 'bg-violet-800 placeholder-violet-300'
                } text-white border-none rounded-full py-2 px-4 pr-10 
                  focus:outline-none focus:ring-2 focus:ring-cyan-300 
                  transition-all duration-300 ${
                    searchFocused ? 'w-64' : 'w-40'
                  }`}
              />
              <button 
                className={`p-2 rounded-full hidden md:block
                  absolute top-0 right-0 md:mr-1 md:mt-1 
                  transition-colors duration-300 ${
                    searchQuery 
                      ? 'bg-pink-500 hover:bg-pink-600' 
                      : 'bg-cyan-400 hover:bg-cyan-300'
                  }`}
                aria-label="Search"
              >
                <Search size={18} className="text-violet-900" />
              </button>
            </div>
            
            {/* User avatar / login button */}
            <div className="relative">
              <button 
                className={`p-1 rounded-full ${
                  darkMode ? 'bg-violet-800' : 'bg-violet-600'
                } hover:ring-2 hover:ring-pink-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300`}
                onClick={toggleUserMenu}
                aria-label="User menu"
                aria-expanded={userMenuOpen}
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold">
                  U
                </div>
              </button>
              
              {userMenuOpen && (
                <div 
                  className={`absolute right-0 mt-2 w-48 ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } rounded-lg shadow-xl border z-50 py-2 animate-fadeIn`}
                >
                  <div className={`px-4 py-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      Welcome, User!
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      user@example.com
                    </p>
                  </div>
                  
                  {menuItems.map((item, i) => (
                    <a 
                      key={item.name} 
                      href={`/profile/${item.href}`}
                      className={`block px-4 py-2 ${
                        darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-50'
                      } transition-colors`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
      
    {/* Notification Dropdown with enhanced design */}
    {isNotificationOpen && (
      <div 
        className={`fixed right-4 mt-2 w-80 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } rounded-lg shadow-xl border-2 z-50 py-2 px-1 animate-slideDown`}
      >
        <div className="flex justify-between items-center px-3 pb-2 mb-2 border-b border-gray-200">
          <h4 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Notifications
          </h4>
          <button 
            className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-cyan-300`}
            onClick={toggleNotification}
            aria-label="Close notifications"
          >
            <X size={16} />
          </button>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {[
            {
              title: "Chainsaw Man Chapter 156 is out now!",
              description: "The latest chapter has arrived. Read it now!",
              time: "10 minutes ago",
              type: "chapter",
              unread: true
            },
            {
              title: "My Hero Academia final season announced",
              description: "The epic finale is coming this fall!",
              time: "2 hours ago",
              type: "news",
              unread: true
            },
            {
              title: "One Piece has new content",
              description: "Chapter 1089 has been released.",
              time: "Yesterday",
              type: "bookmark",
              unread: false
            },
            {
              title: "Your weekly recommendations are ready",
              description: "Check out series we think you'll love!",
              time: "2 days ago",
              type: "recommendation",
              unread: false
            }
          ].map((notification, i) => (
            <div 
              key={i} 
              className={`px-3 py-2 ${
                i !== 3 ? darkMode ? 'border-b border-gray-700' : 'border-b border-gray-100' : ''
              } ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
              } transition-colors cursor-pointer relative ${
                notification.unread ? (darkMode ? 'bg-gray-700/30' : 'bg-indigo-50/30') : ''
              }`}
            >
              {notification.unread && (
                <span className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full"></span>
              )}
              
              <div className="flex items-start">
                <div className={`p-2 rounded-full mr-3 ${
                  notification.type === 'chapter' 
                    ? 'bg-green-100 text-green-600' 
                    : notification.type === 'news'
                      ? 'bg-blue-100 text-blue-600'
                      : notification.type === 'bookmark'
                        ? 'bg-purple-100 text-purple-600'
                        : 'bg-pink-100 text-pink-600'
                }`}>
                  {notification.type === 'chapter' 
                    ? <BookOpen size={16} /> 
                    : notification.type === 'news'
                      ? <Zap size={16} />
                      : notification.type === 'bookmark'
                        ? <Bookmark size={16} />
                        : <Heart size={16} />
                  }
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {notification.title}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-1`}>
                    {notification.description}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pt-2 px-3 border-t border-gray-200 mt-2">
          <button className={`w-full py-2 text-center ${
            darkMode ? 'text-cyan-300 hover:bg-gray-700' : 'text-indigo-600 hover:bg-gray-50'
          } rounded transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-300`}>
            View all notifications
          </button>
        </div>
      </div>
    )}
      
    {/* Enhanced Mobile Menu with animations */}
    {isMenuOpen && (
      <div 
        className={`fixed overflow-y-auto inset-0 z-50 ${
          darkMode 
            ? 'bg-gradient-to-br from-purple-950 to-indigo-950' 
            : 'bg-gradient-to-br from-purple-900 to-indigo-900'
        } lg:hidden pt-20 animate-fadeIn`}
      >
        {/* Close Button */}
        <button 
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 rounded-full bg-violet-800 hover:bg-violet-700 transition-colors"
        >
          <X size={24} className="text-white" />
        </button>
        
        <div className="container mx-auto px-4">
          <ul className="space-y-4">
            {categories.map((category) => {
              const isActive = currentPage === category.href;
              return (
                <li key={category.name}>
                  <a 
                    href={category.href}
                    className={`block py-3 text-xl border-b ${
                      darkMode ? 'border-purple-800' : 'border-purple-700'
                    } flex justify-between items-center ${
                      isActive 
                        ? 'text-cyan-300' 
                        : 'text-white hover:text-cyan-300'
                    } transition-colors`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{category.icon}</span>
                      <span className="font-bold">{category.name.toUpperCase()}</span>
                    </div>
                    <ChevronRight size={20} className="text-pink-400" />
                  </a>
                </li>
              );
            })}
            
            <li className="pt-6">
              <div className="relative mb-4">
                <input 
                  type="text" 
                  placeholder="Search for manga, anime..." 
                  className={`w-full ${
                    darkMode 
                      ? 'bg-violet-950 placeholder-violet-400' 
                      : 'bg-violet-800 placeholder-violet-300'
                  } text-white border-none rounded-lg py-3 px-4 pr-12 
                    focus:outline-none focus:ring-2 focus:ring-cyan-300`}
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-cyan-400 hover:bg-cyan-300 transition-colors">
                  <Search size={20} className="text-violet-900" />
                </button>
              </div>
            </li>
            
            <li className="mt-2">
              <button className="w-full bg-pink-500 text-white font-bold py-3 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Bell size={20} className="mr-2" /> NOTIFICATIONS
              </button>
            </li>
            
            <li className="mt-4">
              <button className="w-full bg-cyan-400 text-violet-900 font-bold py-3 rounded-lg flex items-center justify-center hover:bg-cyan-300 transition-colors">
                <Heart size={20} className="mr-2" /> FAVORITES
              </button>
            </li>
            
            <li className="mt-4">
              <button 
                className="w-full bg-violet-800 text-white font-bold py-3 rounded-lg flex items-center justify-center hover:bg-violet-700 transition-colors"
                onClick={toggleDarkMode}
              >
                {darkMode ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />} 
                {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
              </button>
            </li>
            
            <li className="mt-4">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-lg flex items-center justify-center hover:from-indigo-700 hover:to-purple-700 transition-colors">
                <User size={20} className="mr-2" /> MY ACCOUNT
              </button>
            </li>
            
            <li className="mt-4">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-indigo-800'} mt-6`}>
                <h3 className="text-white font-bold mb-2">⭐ TRENDING NOW</h3>
                <div className="space-y-2">
                  {["Jujutsu Kaisen", "One Piece", "Demon Slayer"].map((title, i) => (
                    <a key={i} href="#" className="block text-cyan-300 hover:text-cyan-200 transition-colors">
                      {i+1}. {title}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )}

    {/* Enhanced Back to top button */}
    {showBackToTop && (
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-30 p-3 rounded-full shadow-lg ${
          darkMode ? 'bg-violet-800 hover:bg-violet-700' : 'bg-violet-600 hover:bg-violet-700'
        } text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-300`}
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>
    )}
    
    {/* Add global animations */}
    <style jsx global>{`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideDown {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes bounce {
        0%, 100% { transform: translateY(-5px); }
        50% { transform: translateY(0); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
      }
      
      .animate-slideDown {
        animation: slideDown 0.3s ease-out;
      }
      
      .animate-bounce {
        animation: bounce 2s infinite;
      }
    `}</style>
    </>
  )
}

export default Header