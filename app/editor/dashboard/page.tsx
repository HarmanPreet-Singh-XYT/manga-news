'use client'
import React, { useState } from 'react';
import { 
  Sun, Moon, Bell, Eye, Heart, MessageCircle, 
  Calendar, Clock, TrendingUp, Edit3, User,
  ChevronRight, Zap, Star, Award, Coffee
} from 'lucide-react';

export default function MangaNewsDashboard() {
  const [darkMode, setDarkMode] = useState(true);

  const stats = [
    { 
      label: 'ARTICLES PUBLISHED', 
      value: '47', 
      change: '+12%', 
      icon: Edit3, 
      color: 'from-pink-500 to-rose-500',
      pulse: true 
    },
    { 
      label: 'PENDING REVIEWS', 
      value: '8', 
      change: '-3', 
      icon: Clock, 
      color: 'from-violet-500 to-purple-500',
      pulse: false 
    },
    { 
      label: 'TOTAL VIEWS', 
      value: '284K', 
      change: '+24%', 
      icon: Eye, 
      color: 'from-blue-500 to-cyan-500',
      pulse: true 
    },
    { 
      label: 'ENGAGEMENT', 
      value: '12.4K', 
      change: '+8%', 
      icon: Heart, 
      color: 'from-pink-500 to-red-500',
      pulse: true 
    }
  ];

  const deadlines = [
    {
      title: 'One Piece Chapter 1095 Review',
      dueDate: 'Today, 6:00 PM',
      priority: 'high',
      category: 'MANGA'
    },
    {
      title: 'Attack on Titan Final Season Analysis',
      dueDate: 'Tomorrow, 2:00 PM',
      priority: 'medium',
      category: 'ANIME'
    },
    {
      title: 'Weekly Shonen Jump Roundup',
      dueDate: 'June 18, 11:59 PM',
      priority: 'low',
      category: 'NEWS'
    }
  ];

  const activities = [
    {
      type: 'comment',
      user: 'Editor Sarah',
      action: 'commented on your draft',
      article: '"Demon Slayer Season 4 Predictions"',
      time: '15 minutes ago',
      avatar: '👩‍💼'
    },
    {
      type: 'approval',
      user: 'Chief Editor',
      action: 'approved your article',
      article: '"Top 10 Underrated Manga of 2025"',
      time: '2 hours ago',
      avatar: '🎯'
    },
    {
      type: 'like',
      user: '127 readers',
      action: 'liked your article',
      article: '"Jujutsu Kaisen Manga Ending Theory"',
      time: '4 hours ago',
      avatar: '❤️'
    },
    {
      type: 'view',
      user: 'Analytics',
      action: 'Your article reached 10K views',
      article: '"Studio Ghibli New Project Announced"',
      time: '6 hours ago',
      avatar: '📈'
    }
  ];

  const themeClasses = darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-blue-50 text-gray-900';

  const cardClasses = darkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-purple-200';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-violet-500"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 60, 237, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Header */}
      <header className={`relative z-10 border-b-4 ${darkMode ? 'border-pink-500 bg-gray-800/90' : 'border-violet-500 bg-white/90'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-violet-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">🖋️</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-black uppercase tracking-wide" style={{ textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)' }}>
                  MANGA NEWS HQ
                </h1>
                <p className={`text-sm font-bold uppercase ${darkMode ? 'text-pink-400' : 'text-violet-600'}`}>
                  🧭 JOURNALIST DASHBOARD
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className={`relative p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-purple-100 hover:bg-purple-200'} transition-all duration-200 hover:-translate-y-1 shadow-lg`}>
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-bounce flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              </button>
              
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white' 
                    : 'bg-gradient-to-r from-violet-500 to-purple-500 text-white'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="font-bold uppercase text-sm">ALEX TANAKA</p>
                  <p className={`text-xs uppercase ${darkMode ? 'text-pink-400' : 'text-violet-600'}`}>Senior Writer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Coffee className={`w-6 h-6 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
            <h2 className="text-3xl font-black uppercase" style={{ textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)' }}>
              GOOD MORNING, ALEX!
            </h2>
          </div>
          <p className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Ready to create some amazing manga content today? ✨
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-lg border-2 shadow-lg transition-all duration-300 hover:-translate-y-1 ${cardClasses} overflow-hidden group`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} shadow-lg ${stat.pulse ? 'animate-pulse' : ''}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  {stat.pulse && (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xs font-black uppercase tracking-wider mb-2 opacity-70">
                  {stat.label}
                </h3>
                <div className="flex items-end space-x-2">
                  <span className="text-3xl font-black">{stat.value}</span>
                  <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                    stat.change.startsWith('+') 
                      ? 'bg-green-500 text-white' 
                      : stat.change.startsWith('-') 
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-500 text-white'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Deadlines */}
          <div className={`p-6 rounded-lg border-2 shadow-lg ${cardClasses}`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black uppercase" style={{ textShadow: darkMode ? '1px 1px 2px rgba(0,0,0,0.5)' : '1px 1px 2px rgba(0,0,0,0.1)' }}>
                  UPCOMING DEADLINES
                </h3>
              </div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="space-y-4">
              {deadlines.map((deadline, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-200 hover:-translate-y-1 ${
                    darkMode ? 'bg-gray-700 border-gray-600 hover:border-pink-500' : 'bg-purple-50 border-purple-200 hover:border-violet-500'
                  } group cursor-pointer`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 text-xs font-black uppercase rounded-full ${
                          deadline.category === 'MANGA' 
                            ? 'bg-pink-500 text-white' 
                            : deadline.category === 'ANIME'
                              ? 'bg-violet-500 text-white'
                              : 'bg-blue-500 text-white'
                        }`}>
                          {deadline.category}
                        </span>
                        <span className={`w-2 h-2 rounded-full ${
                          deadline.priority === 'high' 
                            ? 'bg-red-500 animate-pulse' 
                            : deadline.priority === 'medium'
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                        }`}></span>
                      </div>
                      <h4 className="font-bold mb-1">{deadline.title}</h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Due: {deadline.dueDate}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className={`p-6 rounded-lg border-2 shadow-lg ${cardClasses}`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black uppercase" style={{ textShadow: darkMode ? '1px 1px 2px rgba(0,0,0,0.5)' : '1px 1px 2px rgba(0,0,0,0.1)' }}>
                  ACTIVITY FEED
                </h3>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
            
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-200 hover:-translate-y-1 ${
                    darkMode ? 'bg-gray-700 border-gray-600 hover:border-violet-500' : 'bg-purple-50 border-purple-200 hover:border-pink-500'
                  } group cursor-pointer`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{activity.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-bold text-sm uppercase">{activity.user}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          activity.type === 'comment' 
                            ? 'bg-blue-500' 
                            : activity.type === 'approval'
                              ? 'bg-green-500'
                              : activity.type === 'like'
                                ? 'bg-pink-500'
                                : 'bg-purple-500'
                        }`}></span>
                      </div>
                      <p className="text-sm mb-1">
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{activity.action}</span>
                        <span className={`font-semibold ml-1 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`}>
                          {activity.article}
                        </span>
                      </p>
                      <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-xl font-black uppercase mb-4" style={{ textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)' }}>
            QUICK ACTIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'NEW ARTICLE', icon: Edit3, color: 'from-pink-500 to-rose-500' },
              { label: 'VIEW ANALYTICS', icon: TrendingUp, color: 'from-violet-500 to-purple-500' },
              { label: 'MANAGE DRAFTS', icon: Star, color: 'from-blue-500 to-cyan-500' }
            ].map((action, index) => (
              <button 
                key={index}
                className={`p-4 rounded-full bg-gradient-to-r ${action.color} text-white font-black uppercase tracking-wide shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center space-x-2 group`}
              >
                <action.icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}