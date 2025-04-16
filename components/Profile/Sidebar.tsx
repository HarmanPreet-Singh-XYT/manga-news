import { ChevronRight, LogOut, Sparkles, Star, Zap, Award, Sword } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const Sidebar = ({ darkMode, navItems, activeTab, setActiveTab }) => {
  const [hoverItem, setHoverItem] = useState(null);
  const [showEffect, setShowEffect] = useState(false);
  const [effectPosition, setEffectPosition] = useState({ x: 0, y: 0 });
  
  // Trigger animation effect when active tab changes
  useEffect(() => {
    if (activeTab) {
      setShowEffect(true);
      setTimeout(() => setShowEffect(false), 700);
    }
  }, [activeTab]);
  
  // Handle click animation position
  const handleItemClick = (id, e) => {
    setActiveTab(id);
    setEffectPosition({ x: e.clientX, y: e.clientY });
  };
  
  // Random rotation for manga style elements
  const randomRotation = () => Math.random() * 4 - 2;
  
  // Power level indicator - anime style
  const PowerLevel = ({ level }) => {
    return (
      <div className="flex items-center mt-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 mx-0.5 rounded-full ${i < level ? (darkMode ? 'bg-pink-500' : 'bg-violet-500') : 'bg-gray-400'}`}
          />
        ))}
      </div>
    );
  };
  
  return (
    <div className={`w-64 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border-r-4 ${darkMode ? 'border-pink-600' : 'border-violet-500'} relative transform -rotate-1 transition-all duration-300`}
      style={{ boxShadow: darkMode ? '5px 5px 0 rgba(236, 72, 153, 0.3)' : '5px 5px 0 rgba(124, 58, 237, 0.3)' }}
    >
      {/* Decorative manga patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {/* Speed lines */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={`line-${i}`} 
            className={`absolute h-0.5 ${darkMode ? 'bg-pink-300' : 'bg-violet-300'}`}
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 80}%`,
              transform: `rotate(${Math.random() * 180}deg)`
            }}
          />
        ))}
        
        {/* Tone dots - manga style */}
        {[...Array(40)].map((_, i) => (
          <div 
            key={`dot-${i}`} 
            className={`absolute rounded-full ${darkMode ? 'bg-pink-400' : 'bg-violet-400'}`}
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Header with manga styling */}
      <div className={`p-6 relative ${darkMode ? 'bg-gray-800' : 'bg-white'} mb-2 shadow-md overflow-hidden`}>
        {/* Background diagonal stripes - manga style */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(10)].map((_, i) => (
            <div 
              key={`stripe-${i}`} 
              className={`absolute h-6 w-full ${darkMode ? 'bg-pink-300' : 'bg-violet-300'}`}
              style={{ 
                top: `${i * 12}px`,
                transform: 'rotate(-45deg) scale(2)',
              }}
            />
          ))}
        </div>
        
        <h2 
          className={`text-2xl font-black uppercase tracking-tight transform -skew-x-6 relative z-10 ${darkMode ? 'text-pink-500' : 'text-violet-600'}`} 
          style={{ 
            textShadow: darkMode ? '2px 2px 0px #831843, -1px -1px 0 #000' : '2px 2px 0px #7c3aed, -1px -1px 0 #000',
            WebkitTextStroke: darkMode ? '1px #000' : '1px #4c1d95'
          }}
        >
          <span className="relative inline-block">
            MY
            <Sparkles className="absolute -top-1 -right-2 w-4 h-4 text-yellow-300" />
          </span>{' '}
          <span className="relative inline-block">
            ACCOUNT
            <Zap className="absolute -bottom-1 -right-2 w-4 h-4 text-yellow-300" />
          </span>
        </h2>
        
        {/* Enhanced manga-style decorative corners */}
        <div className="absolute top-0 left-0 w-6 h-6 transform -translate-x-1 -translate-y-1">
          <div className="absolute top-0 left-0 w-full h-full border-t-4 border-l-4 border-yellow-500"></div>
          <div className="absolute top-1 left-1 w-full h-full border-t-2 border-l-2 border-black"></div>
        </div>
        <div className="absolute top-0 right-0 w-6 h-6 transform translate-x-1 -translate-y-1">
          <div className="absolute top-0 right-0 w-full h-full border-t-4 border-r-4 border-yellow-500"></div>
          <div className="absolute top-1 right-1 w-full h-full border-t-2 border-r-2 border-black"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-6 h-6 transform -translate-x-1 translate-y-1">
          <div className="absolute bottom-0 left-0 w-full h-full border-b-4 border-l-4 border-yellow-500"></div>
          <div className="absolute bottom-1 left-1 w-full h-full border-b-2 border-l-2 border-black"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-6 h-6 transform translate-x-1 translate-y-1">
          <div className="absolute bottom-0 right-0 w-full h-full border-b-4 border-r-4 border-yellow-500"></div>
          <div className="absolute bottom-1 right-1 w-full h-full border-b-2 border-r-2 border-black"></div>
        </div>
      </div>
      
      {/* User info with more manga styling */}
      <div 
        className={`px-4 py-6 mb-8 mx-2 ${darkMode ? 'bg-gray-700' : 'bg-indigo-100'} transform rotate-1 transition-all duration-300 relative`} 
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
          boxShadow: darkMode ? '3px 3px 0 rgba(0,0,0,0.3)' : '3px 3px 0 rgba(79, 70, 229, 0.2)'
        }}
      >
        {/* Manga action lines behind avatar */}
        <div className="absolute left-12 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-24 h-24 opacity-20 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div 
              key={`avatar-line-${i}`}
              className="absolute top-1/2 left-1/2 w-full h-1 transform -translate-y-1/2"
              style={{
                background: darkMode ? 'linear-gradient(90deg, rgba(236,72,153,0) 0%, rgba(236,72,153,1) 50%, rgba(236,72,153,0) 100%)' : 
                            'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(124,58,237,1) 50%, rgba(124,58,237,0) 100%)',
                transform: `rotate(${i * 45}deg) translateY(-50%)`,
              }}
            />
          ))}
        </div>
        
        <div className="flex items-center space-x-3">
          <div 
            className={`w-12 h-12 rounded-full ${darkMode ? 'bg-pink-600' : 'bg-violet-500'} flex items-center justify-center font-bold text-white text-xl relative overflow-hidden`}
            style={{ 
              boxShadow: '0 0 0 2px black, 0 0 0 4px white',
              transform: `rotate(${randomRotation()}deg)`
            }}
          >
            {/* Shine effect on avatar */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-50" 
                style={{ transform: 'translateX(-100%)', animation: 'shine 2s infinite' }}></div>
            
            {/* Avatar content */}
            <div className="relative">
              KM
              <style jsx>{`
                @keyframes shine {
                  0% { transform: translateX(-100%) }
                  50% { transform: translateX(100%) }
                  100% { transform: translateX(100%) }
                }
              `}</style>
            </div>
            
            {/* Badge icons */}
            <Star className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300" />
            <Award className="absolute -bottom-1 -right-1 w-4 h-4 text-blue-300" />
          </div>
          
          <div>
            <h3 
              className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`} 
              style={{ 
                textShadow: darkMode ? '1px 1px 0px rgba(0,0,0,0.5)' : '1px 1px 0px rgba(0,0,0,0.2)',
                transform: `rotate(${randomRotation()/2}deg)`
              }}
            >
              KunaiMaster
              <span className="inline-block ml-1 text-xs font-normal px-1 py-0.5 bg-yellow-500 text-black rounded transform rotate-2">
                LVL 42
              </span>
            </h3>
            
            <div className="flex items-center">
              <span className={`inline-block w-2 h-2 rounded-full mr-1 ${darkMode ? 'bg-pink-500' : 'bg-violet-500'} animate-pulse`}></span>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Premium Member</p>
            </div>
            
            {/* Power level indicator */}
            <PowerLevel level={4} />
          </div>
        </div>
      </div>
      
      {/* Navigation items with enhanced anime styling */}
      <nav className="px-2 py-4">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              {/* Active item indicator */}
              {activeTab === item.id && (
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                  <div className="w-3 h-3 bg-yellow-500 transform rotate-45 animate-pulse"></div>
                </div>
              )}
              
              <button
                onClick={(e) => handleItemClick(item.id, e)}
                onMouseEnter={() => setHoverItem(item.id)}
                onMouseLeave={() => setHoverItem(null)}
                className={`group w-full flex items-center px-4 py-3 transition-all duration-200
                  ${activeTab === item.id 
                    ? `${darkMode ? 'bg-pink-600' : 'bg-violet-500'} text-white font-bold` 
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-indigo-100'}`}`}
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)',
                  transform: `rotate(${activeTab === item.id ? '-1deg' : '0deg'}) scale(${activeTab === item.id ? '1.02' : '1'})`,
                  boxShadow: activeTab === item.id ? (darkMode ? '2px 2px 0 rgba(0,0,0,0.5)' : '2px 2px 0 rgba(79, 70, 229, 0.3)') : 'none'
                }}
              >
                {/* Icon with glow effect on hover/active */}
                <span 
                  className={`relative mr-3 transition-transform duration-300 ${hoverItem === item.id || activeTab === item.id ? 'scale-125' : ''}`}
                >
                  {item.icon}
                  {(hoverItem === item.id || activeTab === item.id) && (
                    <span className={`absolute inset-0 ${darkMode ? 'text-pink-300' : 'text-violet-300'} animate-pulse`} style={{ filter: 'blur(2px)' }}>
                      {item.icon}
                    </span>
                  )}
                </span>

                {/* Label with manga-style underline */}
                <span className="relative">
                  {item.label}
                  {activeTab === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white" style={{ 
                      clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
                    }}></span>
                  )}
                </span>
                
                {/* Indicator for active item */}
                {activeTab === item.id && (
                  <div className="ml-auto flex items-center">
                    <Sword className="w-4 h-4 text-yellow-300 mr-1 animate-pulse" />
                    <ChevronRight className="text-yellow-300" />
                  </div>
                )}
              </button>
              
              {/* Active item exploding effect */}
              {showEffect && activeTab === item.id && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={`effect-${i}`}
                      className={`absolute w-4 h-1 ${darkMode ? 'bg-pink-400' : 'bg-violet-400'}`}
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: 'left center',
                        transform: `translateY(-50%) rotate(${i * 60}deg) translateX(${showEffect ? '100%' : '0%'})`,
                        opacity: showEffect ? 0 : 1,
                        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                      }}
                    />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Logout button with enhanced manga styling */}
      <div className="absolute bottom-8 w-full px-4">
        <button 
          className={`w-full flex items-center justify-center px-4 py-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} font-bold uppercase tracking-tight transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden`}
          style={{ 
            clipPath: 'polygon(3% 0, 100% 0, 97% 100%, 0% 100%)',
            boxShadow: darkMode ? '3px 3px 0px rgba(236, 72, 153, 0.5)' : '3px 3px 0px rgba(124, 58, 237, 0.5)'
          }}
        >
          {/* Hover effect - manga style slash lines */}
          <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300">
            {[...Array(5)].map((_, i) => (
              <div 
                key={`logout-line-${i}`} 
                className="absolute h-full w-1 bg-black transform -skew-x-45"
                style={{ left: `${i * 25}%` }}
              />
            ))}
          </div>
          
          <LogOut className={`w-5 h-5 mr-2 ${darkMode ? 'text-pink-500' : 'text-violet-500'}`} />
          <span 
            className={`${darkMode ? 'text-pink-100' : 'text-violet-900'}`}
            style={{ 
              textShadow: darkMode ? '1px 1px 0 rgba(0,0,0,0.5)' : '1px 1px 0 rgba(0,0,0,0.2)',
              letterSpacing: '0.05em'
            }}
          >
            Logout
          </span>
        </button>
      </div>
      
      {/* Action speed lines - anime style */}
      {activeTab && (
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className={`w-16 h-32 ${darkMode ? 'text-pink-500' : 'text-violet-500'} opacity-30`}>
            {[...Array(5)].map((_, i) => (
              <div 
                key={`action-line-${i}`} 
                className={`absolute h-1 ${darkMode ? 'bg-pink-500' : 'bg-violet-500'}`}
                style={{ 
                  top: `${i * 20}%`, 
                  right: '0',
                  width: `${100 - (i * 15)}%`,
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Sound effect text - manga style */}
      {showEffect && (
        <div 
          className="absolute text-2xl font-black pointer-events-none z-20 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700"
          style={{
            left: effectPosition.x,
            top: effectPosition.y,
            opacity: showEffect ? 1 : 0,
            color: darkMode ? '#ec4899' : '#7c3aed',
            textShadow: '2px 2px 0 #000',
            transform: `translate(-50%, -50%) rotate(${randomRotation() * 2}deg) scale(${showEffect ? 1.5 : 1})`,
          }}
        >
          {['BOOM!', 'POW!', 'CLICK!', 'WHAM!'][Math.floor(Math.random() * 4)]}
        </div>
      )}
      
      {/* Decorative sticker */}
      <div className="absolute -bottom-2 -left-2 w-16 h-16 transform rotate-12">
        <div 
          className={`w-full h-full rounded-full flex items-center justify-center text-xs font-bold ${darkMode ? 'bg-pink-500 text-white' : 'bg-yellow-400 text-black'}`}
          style={{ border: '2px dashed black' }}
        >
          <div className="text-center transform -rotate-12">
            SUPER<br/>MENU
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;