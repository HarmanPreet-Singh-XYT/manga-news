'use client'
import React, { useState } from 'react';
import { Bell, MessageCircle, Edit, BookOpen, Star, Megaphone, Settings, X, Check, Filter } from 'lucide-react';

const NotificationCenter = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'reply',
      title: 'Reply to your comment',
      message: 'OtakuMaster replied to your comment on "One Piece Chapter 1100 Review"',
      time: '2 minutes ago',
      unread: true,
      link: '/article/one-piece-1100#comment-123'
    },
    {
      id: 2,
      type: 'update',
      title: 'Article Updated',
      message: 'Breaking: Attack on Titan Final Season Part 4 has been updated with new information',
      time: '15 minutes ago',
      unread: true,
      link: '/article/aot-final-season'
    },
    {
      id: 3,
      type: 'category',
      title: 'New Manga Release',
      message: 'New article in "Weekly Releases": My Hero Academia Chapter 405 is now available',
      time: '1 hour ago',
      unread: false,
      link: '/article/mha-405'
    },
    {
      id: 4,
      type: 'editor',
      title: "Editor's Pick",
      message: 'Top 10 Most Anticipated Anime of 2025 - Handpicked by our editorial team',
      time: '3 hours ago',
      unread: true,
      link: '/article/top-anime-2025'
    },
    {
      id: 5,
      type: 'announcement',
      title: 'Site Announcement',
      message: 'New feature: Dark mode is now available! Switch themes in your profile settings.',
      time: '1 day ago',
      unread: false,
      link: '/settings'
    },
    {
      id: 6,
      type: 'reply',
      title: 'Reply to your comment',
      message: 'AnimeFan2024 replied to your comment on "Demon Slayer Season 4 Predictions"',
      time: '2 days ago',
      unread: false,
      link: '/article/demon-slayer-s4#comment-456'
    }
  ]);

  const [showSettings, setShowSettings] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    replies: true,
    updates: true,
    categories: true,
    editorPicks: true,
    announcements: true
  });

  const filters = ['All', 'Replies', 'Updates', 'Categories', 'Editor Picks', 'Announcements'];

  const getFilteredNotifications = () => {
    if (activeFilter === 'All') return notifications;
    const filterMap = {
      'Replies': 'reply',
      'Updates': 'update', 
      'Categories': 'category',
      'Editor Picks': 'editor',
      'Announcements': 'announcement'
    };
    return notifications.filter(n => n.type === filterMap[activeFilter]);
  };

  const getNotificationIcon = (type) => {
    const iconMap = {
      reply: MessageCircle,
      update: Edit,
      category: BookOpen,
      editor: Star,
      announcement: Megaphone
    };
    const Icon = iconMap[type];
    return <Icon className="w-5 h-5" />;
  };

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, unread: false } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const unreadCount = notifications.filter(n => n.unread).length;
  const theme = isDark ? 'dark' : 'light';

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDark 
        ? 'bg-gray-900 text-white' 
        : 'bg-blue-50 text-gray-900'
    }`}>
      {/* Header */}
      <div className={`border-b-4 ${
        isDark 
          ? 'bg-gray-800 border-pink-500' 
          : 'bg-white border-violet-500'
      } shadow-lg`}>
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${
                isDark ? 'bg-pink-500' : 'bg-violet-500'
              } shadow-lg transform hover:-translate-y-1 transition-all duration-200`}>
                <Bell className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-black uppercase tracking-wider" 
                    style={{ textShadow: isDark ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)' }}>
                  NOTIFICATION CENTER
                </h1>
                <div className="flex items-center space-x-2 mt-1">
                  {unreadCount > 0 && (
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      isDark 
                        ? 'bg-pink-500 text-white' 
                        : 'bg-violet-500 text-white'
                    } animate-pulse`}>
                      {unreadCount} NEW
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-3 rounded-full ${
                  isDark 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                } transform hover:-translate-y-1 transition-all duration-200 shadow-lg`}
              >
                <Settings className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setIsDark(!isDark)}
                className={`px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider ${
                  isDark 
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white' 
                    : 'bg-gradient-to-r from-violet-500 to-violet-600 text-white'
                } transform hover:-translate-y-1 transition-all duration-200 shadow-lg`}
              >
                {isDark ? '☀️ LIGHT' : '🌙 DARK'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Settings Panel */}
        {showSettings && (
          <div className={`mb-6 p-6 rounded-lg ${
            isDark ? 'bg-gray-800' : 'bg-white'
          } border-4 ${
            isDark ? 'border-pink-500' : 'border-violet-500'
          } shadow-lg transform animate-pulse`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-black uppercase">NOTIFICATION SETTINGS</h2>
              <button
                onClick={() => setShowSettings(false)}
                className={`p-2 rounded-full ${
                  isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                } transition-colors duration-200`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(notificationSettings).map(([key, value]) => (
                <label key={key} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setNotificationSettings(prev => ({
                      ...prev,
                      [key]: e.target.checked
                    }))}
                    className={`w-5 h-5 rounded ${
                      isDark ? 'accent-pink-500' : 'accent-violet-500'
                    }`}
                  />
                  <span className="font-bold uppercase tracking-wide text-sm">
                    {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className={`mb-6 p-4 rounded-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        } shadow-lg border-2 ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2 flex-wrap">
              <Filter className="w-5 h-5" />
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-200 transform hover:-translate-y-1 ${
                    activeFilter === filter
                      ? isDark
                        ? 'bg-pink-500 text-white shadow-lg'
                        : 'bg-violet-500 text-white shadow-lg'
                      : isDark
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className={`px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider ${
                  isDark 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                } transform hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center space-x-2`}
              >
                <Check className="w-4 h-4" />
                <span>MARK ALL READ</span>
              </button>
            )}
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {getFilteredNotifications().map(notification => (
            <div
              key={notification.id}
              className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg border-l-4 ${
                notification.unread 
                  ? isDark ? 'border-pink-500' : 'border-violet-500'
                  : isDark ? 'border-gray-600' : 'border-gray-300'
              } transform hover:-translate-y-1 transition-all duration-200 cursor-pointer group`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-3 rounded-lg ${
                    notification.unread
                      ? isDark ? 'bg-pink-500' : 'bg-violet-500'
                      : isDark ? 'bg-gray-700' : 'bg-gray-200'
                  } transition-colors duration-200`}>
                    {getNotificationIcon(notification.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-black uppercase text-lg">
                        {notification.title}
                      </h3>
                      {notification.unread && (
                        <div className={`w-3 h-3 rounded-full ${
                          isDark ? 'bg-pink-500' : 'bg-violet-500'
                        } animate-pulse`} />
                      )}
                    </div>
                    
                    <p className={`${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    } mb-3 leading-relaxed`}>
                      {notification.message}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {notification.time}
                      </span>
                      
                      <button className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        isDark 
                          ? 'bg-pink-500 hover:bg-pink-600 text-white' 
                          : 'bg-violet-500 hover:bg-violet-600 text-white'
                      } opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:-translate-y-1`}>
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {getFilteredNotifications().length === 0 && (
            <div className={`text-center py-12 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <Bell className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-black uppercase mb-2">NO NOTIFICATIONS</h3>
              <p>No notifications found for the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;