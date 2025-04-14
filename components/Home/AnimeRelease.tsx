import React, { useState } from 'react';
import { Calendar, Bell, Star, Clock, ChevronRight, CheckCircle } from 'lucide-react';

export default function AnimeReleaseSchedule({ darkMode = false }) {
  const [activeTab, setActiveTab] = useState('week');
  
  const upcomingReleases = {
    week: [
      {
        title: "One Piece Ch. 1092",
        image: "/api/placeholder/300/400",
        days: 2,
        hours: 14,
        type: "manga",
        isHot: true
      },
      {
        title: "Jujutsu Kaisen S2 Finale",
        image: "/api/placeholder/300/400",
        days: 4,
        hours: 3,
        type: "anime",
        isHot: true
      },
      {
        title: "Demon Slayer Movie Blu-ray",
        image: "/api/placeholder/300/400",
        days: 5,
        hours: 6,
        type: "movie",
        isHot: false
      },
      {
        title: "SPY×FAMILY Season 2",
        image: "/api/placeholder/300/400",
        days: 6,
        hours: 22,
        type: "anime",
        isHot: true
      }
    ],
    month: [
      {
        title: "Chainsaw Man Volume 14",
        image: "/api/placeholder/300/400",
        days: 12,
        hours: 8,
        type: "manga",
        isHot: true
      },
      {
        title: "My Hero Academia Final Season",
        image: "/api/placeholder/300/400",
        days: 18,
        hours: 14,
        type: "anime",
        isHot: true
      },
      {
        title: "Oshi no Ko Season 2",
        image: "/api/placeholder/300/400",
        days: 22,
        hours: 10,
        type: "anime",
        isHot: false
      },
      {
        title: "Kagurabachi Ch. 30",
        image: "/api/placeholder/300/400",
        days: 25,
        hours: 6,
        type: "manga",
        isHot: true
      }
    ]
  };
  
  const getBadgeColor = (type) => {
    switch(type) {
      case 'manga':
        return darkMode ? 'bg-pink-600' : 'bg-pink-500';
      case 'anime':
        return darkMode ? 'bg-cyan-600' : 'bg-cyan-500';
      case 'movie':
        return darkMode ? 'bg-purple-600' : 'bg-purple-500';
      default:
        return darkMode ? 'bg-indigo-600' : 'bg-indigo-500';
    }
  };
  
  const getCountdownColor = (days) => {
    if (days < 3) return 'bg-pink-500';
    if (days < 7) return 'bg-cyan-400';
    return 'bg-violet-500';
  };

  return (
    <section className="rounded-xl relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl"></div>
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
      
      {/* Main container */}
      <div className={`relative ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-white to-gray-50'} rounded-lg shadow-xl overflow-hidden border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
          <div className={`absolute top-0 left-0 w-4 h-16 ${darkMode ? 'bg-pink-600' : 'bg-pink-500'} transform -rotate-45 -translate-x-6 translate-y-2`}></div>
        </div>
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className={`absolute top-0 right-0 w-4 h-16 ${darkMode ? 'bg-cyan-600' : 'bg-cyan-500'} transform rotate-45 translate-x-6 translate-y-2`}></div>
        </div>
        
        <div className="p-6">
          {/* Header section */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center mb-4 md:mb-0 group">
              <div className={`mr-3 p-2 rounded-lg ${darkMode ? 'bg-violet-900/50' : 'bg-violet-100'} transform -rotate-6 transition-transform group-hover:rotate-0 duration-300`}>
                <Calendar size={28} className={`${darkMode ? 'text-pink-400' : 'text-pink-500'} drop-shadow-sm`} />
              </div>
              <h3 className={`text-2xl font-black tracking-wider uppercase ${darkMode ? 'text-white' : 'text-gray-800'} transform -rotate-2 group-hover:rotate-0 transition-transform duration-300`}>
                UPCOMING<span className={darkMode ? 'text-pink-400' : 'text-pink-500'}>RELEASES</span>
              </h3>
              <div className="hidden md:flex ml-2">
                <div className={`animate-pulse w-2 h-2 rounded-full ${darkMode ? 'bg-pink-400' : 'bg-pink-500'} mr-1`}></div>
                <div className={`animate-pulse delay-150 w-2 h-2 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-cyan-500'} mr-1`}></div>
                <div className={`animate-pulse delay-300 w-2 h-2 rounded-full ${darkMode ? 'bg-violet-400' : 'bg-violet-500'}`}></div>
              </div>
            </div>
            
            <div className="flex space-x-2 bg-gradient-to-r from-violet-200/20 to-indigo-600/20 p-1 rounded-full">
              <button 
                onClick={() => setActiveTab('week')}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeTab === 'week' 
                    ? `${darkMode ? 'bg-gradient-to-r from-violet-800 to-indigo-800 text-white shadow-lg' : 'bg-gradient-to-r from-violet-200 to-indigo-200 text-violet-900 shadow-md'}`
                    : `${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-violet-900'}`
                }`}
              >
                This Week
              </button>
              <button 
                onClick={() => setActiveTab('month')}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeTab === 'month' 
                    ? `${darkMode ? 'bg-gradient-to-r from-violet-800 to-indigo-800 text-white shadow-lg' : 'bg-gradient-to-r from-violet-200 to-indigo-200 text-violet-900 shadow-md'}`
                    : `${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-violet-900'}`
                }`}
              >
                Next Month
              </button>
            </div>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {upcomingReleases[activeTab].map((item, i) => (
              <div 
                key={i} 
                className={`${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-white to-gray-100'} 
                  rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group relative`}
              >
                {/* Content Type Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <div className={`px-2 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(item.type)} shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                    {item.type.toUpperCase()}
                  </div>
                </div>
                
                {/* Hot Badge */}
                {item.isHot && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className={`flex items-center px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 shadow-md transform rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                      <Star size={12} className="mr-1" fill="white" />
                      HOT
                    </div>
                  </div>
                )}
                
                <div className="relative">
                  {/* Image with gradient overlay */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                  
                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h4 className="text-white font-bold text-center text-shadow drop-shadow-lg">{item.title}</h4>
                  </div>
                </div>
                
                {/* Bottom Section */}
                <div className="p-4 text-center">
                  {/* Countdown */}
                  <div className="flex justify-center items-center">
                    <div className={`flex items-center px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-900/80' : 'bg-gray-200'} font-mono font-bold text-lg relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                      <Clock size={16} className={`mr-2 ${getCountdownColor(item.days)} text-white rounded-full p-0.5`} />
                      <span className={`absolute top-0 left-0 w-full h-1 ${getCountdownColor(item.days)} animate-pulse`}></span>
                      <span className={darkMode ? 'text-white' : 'text-gray-800'}>
                        {item.days}d {item.hours}h
                      </span>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <button className={`mt-4 w-full py-2 rounded-full flex items-center justify-center 
                    ${darkMode 
                      ? 'bg-gradient-to-r from-violet-800 to-indigo-800 hover:from-violet-700 hover:to-indigo-700 text-white' 
                      : 'bg-gradient-to-r from-violet-200 to-indigo-200 hover:from-violet-300 hover:to-indigo-300 text-violet-900'
                    } font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg`}>
                    <Bell size={16} className="mr-2" />
                    Set Reminder
                    <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Section */}
          <div className="mt-8 flex justify-center">
            <button className={`px-6 py-2 rounded-full flex items-center 
              ${darkMode 
                ? 'bg-transparent text-violet-400 hover:text-pink-400 border border-violet-700 hover:border-pink-700' 
                : 'bg-transparent text-violet-700 hover:text-pink-700 border border-violet-200 hover:border-pink-200'
              } font-bold transition-all duration-300`}>
              View Complete Schedule
              <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        
        {/* Bottom decorative accents */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500`}></div>
      </div>
    </section>
  );
}