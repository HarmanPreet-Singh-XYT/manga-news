import { BookOpen, Clock, Flame, Sparkles, Star, TrendingUp } from 'lucide-react'
import React, { useState } from 'react'

const AnimeCategoryTabs = ({darkMode}:{darkMode:boolean}) => {
    const categories = [
        { name: "TRENDING", icon: <TrendingUp size={16} className="inline-block mr-1" /> },
        { name: "NEW", icon: <Sparkles size={16} className="inline-block mr-1" /> },
        { name: "POPULAR", icon: <Star size={16} className="inline-block mr-1" /> },
        { name: "CLASSICS", icon: <BookOpen size={16} className="inline-block mr-1" /> },
        { name: "UPCOMING", icon: <Clock size={16} className="inline-block mr-1" /> }
      ];
      
      const [activeTab, setActiveTab] = useState("HOT RIGHT NOW");    
      const [isHovering, setIsHovering] = useState(null);
  return (
    <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-pink-500 animate-pulse opacity-50"></div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-cyan-400 animate-pulse opacity-50"></div>
        
        {/* Tab Scrollable Container */}
        <div className="overflow-x-auto pb-4 mb-8 hide-scrollbar border-b-2 border-indigo-300 dark:border-indigo-800">
          <div className="flex space-x-3 py-2">
            <button 
              className={`px-6 py-2.5 rounded-full whitespace-nowrap font-black uppercase text-sm transform hover:-translate-y-1 transition-all duration-200 flex items-center ${
                activeTab === "HOT RIGHT NOW" 
                  ? `bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/30` 
                  : `${darkMode ? 'bg-indigo-900 hover:bg-indigo-800' : 'bg-white hover:bg-violet-100'} ${darkMode ? 'text-white' : 'text-indigo-900'} border-2 ${darkMode ? 'border-indigo-700' : 'border-indigo-300'}`
              }`}
              onClick={() => setActiveTab("HOT RIGHT NOW")}
              onMouseEnter={() => setIsHovering("HOT RIGHT NOW")}
              onMouseLeave={() => setIsHovering(null)}
            >
              <Flame 
                size={16} 
                className={`inline-block mr-1.5 ${activeTab === "HOT RIGHT NOW" ? "animate-pulse" : ""}`}
              />
              HOT RIGHT NOW
              {activeTab === "HOT RIGHT NOW" && 
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></span>
              }
            </button>
            
            {categories.map((category) => (
              <button 
                key={category.name} 
                className={`px-6 py-2.5 rounded-full whitespace-nowrap font-black uppercase text-sm transform hover:-translate-y-1 transition-all duration-200 flex items-center ${
                  activeTab === category.name 
                    ? `bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30` 
                    : `${darkMode ? 'bg-indigo-900 hover:bg-indigo-800' : 'bg-white hover:bg-violet-100'} ${darkMode ? 'text-white' : 'text-indigo-900'} border-2 ${darkMode ? 'border-indigo-700' : 'border-indigo-300'}`
                }`}
                onClick={() => setActiveTab(category.name)}
                onMouseEnter={() => setIsHovering(category.name)}
                onMouseLeave={() => setIsHovering(null)}
              >
                {category.icon}
                {category.name}
                {activeTab === category.name && 
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></span>
                }
              </button>
            ))}
          </div>
        </div>
      </div>
  )
}

export default AnimeCategoryTabs