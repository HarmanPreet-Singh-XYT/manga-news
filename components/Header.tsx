import { X, Menu, Bell, Sun, Moon, Search, Bookmark, BookOpen, ChevronRight, Heart, Zap } from 'lucide-react'
import React from 'react'

const Header = ({darkMode,toggleMenu,isMenuOpen,toggleDarkMode,toggleNotification,isNotificationOpen,showBackToTop,scrollToTop}:{darkMode:any,toggleMenu:any,isMenuOpen:any,toggleDarkMode:any,toggleNotification:any,isNotificationOpen:any,showBackToTop:any,scrollToTop:any}) => {
  const categories = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Series',
      href: '/series',
    },
    {
      name: 'Releases',
      href: '/releases',
    },
    {
      name: 'Events',
      href: '/events',
    },
    {
      name: 'About',
      href: '/about',
    },
  ]
  return (
    <>
    <header className={`${darkMode ? 'bg-gradient-to-r from-purple-900 to-indigo-950 shadow-indigo-900/50' : 'bg-gradient-to-r from-purple-700 to-indigo-900 shadow-purple-700/30'} shadow-lg border-b-4 ${darkMode ? 'border-violet-950' : 'border-violet-900'} sticky top-0 z-40`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                className={`mr-4 p-2 rounded-full text-white ${darkMode ? 'hover:bg-violet-950' : 'hover:bg-violet-800'} transition-colors lg:hidden`} 
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <a href='/'>
                <div className="flex items-center">
                  <h1 className="text-3xl font-black text-white relative" style={{ textShadow: `3px 3px 0 ${darkMode ? '#15162c' : '#000'}` }}>
                    <span className="text-pink-400">MANGA</span>
                    <span className="text-cyan-300">PULSE</span>!
                    <div className="absolute -top-3 -right-6 w-6 h-6 bg-pink-400 rounded-full animate-ping opacity-75"></div>
                  </h1>
                </div>
              </a>
            </div>
            
            <div className="hidden lg:flex space-x-6">
              {categories.map((category) => (
                <a 
                  key={category.name} 
                  href={category.href} 
                  className="text-white font-bold hover:text-cyan-300 transition-colors relative group"
                >
                  {category.name.toUpperCase()}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                className={`p-2 rounded-full ${darkMode ? 'hover:bg-violet-950' : 'hover:bg-violet-800'} text-white relative transition-colors`}
                onClick={toggleNotification}
                aria-label="Notifications"
              >
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
              </button>
              <button
                className={`p-2 rounded-full ${darkMode ? 'hover:bg-violet-950' : 'hover:bg-violet-800'} text-white transition-colors`}
                onClick={toggleDarkMode}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className={`hidden md:block ${darkMode ? 'bg-violet-950 placeholder-violet-400' : 'bg-violet-800 placeholder-violet-300'} text-white border-none rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-colors`}
                />
                <button className="p-2 rounded-full bg-cyan-400 hover:bg-cyan-300 absolute -right-0.5 -top-0.5 md:mr-1 md:mt-1 transition-colors">
                  <Search size={20} className="text-violet-900" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Notification Dropdown */}
      {isNotificationOpen && (
        <div className={`fixed right-4 mt-2 w-80 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-xl border-2 z-50 py-2 px-1 animate-slideDown`}>
          <div className="flex justify-between items-center px-3 pb-2 mb-2 border-b border-gray-200">
            <h4 className="font-bold text-lg">Notifications</h4>
            <button 
              className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              onClick={toggleNotification}
            >
              <X size={16} />
            </button>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {[
              {
                title: "Chainsaw Man Chapter 156 is out!",
                time: "10 minutes ago",
                type: "chapter"
              },
              {
                title: "My Hero Academia final season announced",
                time: "2 hours ago",
                type: "news"
              },
              {
                title: "Your bookmarked series 'One Piece' has new content",
                time: "Yesterday",
                type: "bookmark"
              }
            ].map((notification, i) => (
              <div 
                key={i} 
                className={`px-3 py-2 ${i !== 2 ? 'border-b' : ''} ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'} transition-colors cursor-pointer`}
              >
                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-3 ${
                    notification.type === 'chapter' 
                      ? 'bg-green-100 text-green-600' 
                      : notification.type === 'news'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-purple-100 text-purple-600'
                  }`}>
                    {notification.type === 'chapter' 
                      ? <BookOpen size={16} /> 
                      : notification.type === 'news'
                        ? <Zap size={16} />
                        : <Bookmark size={16} />
                    }
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{notification.title}</p>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-2 px-3 border-t border-gray-200 mt-2">
            <button className={`w-full py-2 text-center ${darkMode ? 'text-cyan-300 hover:bg-gray-700' : 'text-indigo-600 hover:bg-gray-50'} rounded transition-colors text-sm font-medium`}>
              View all notifications
            </button>
          </div>
        </div>
      )}
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-50 ${darkMode ? 'bg-gradient-to-br from-purple-950 to-indigo-950' : 'bg-gradient-to-br from-purple-900 to-indigo-900'} lg:hidden pt-20`}>
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category}>
                  <a 
                    href="#" 
                    className={`block py-3 text-xl border-b ${darkMode ? 'border-purple-800' : 'border-purple-700'} flex justify-between items-center text-white font-bold hover:text-cyan-300 transition-colors`}
                  >
                    {category.toUpperCase()}
                    <ChevronRight size={20} className="text-pink-400" />
                  </a>
                </li>
              ))}
              <li className="mt-8">
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
            </ul>
          </div>
        </div>
      )}

      {/* Back to top button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-30 p-3 rounded-full shadow-lg ${darkMode ? 'bg-violet-800 hover:bg-violet-700' : 'bg-violet-600 hover:bg-violet-700'} text-white transition-all duration-300 animate-bounce`}
          aria-label="Back to top"
        >
          <ChevronRight className="transform rotate-270" size={24} />
        </button>
      )}
      </>
  )
}

export default Header