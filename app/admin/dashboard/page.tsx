'use client'
import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  XCircle, 
  Eye,
  Server,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const stats = {
    totalArticles: 12847,
    totalUsers: 45621,
    totalComments: 89234,
    dailyViews: 156789,
    weeklyGrowth: 12.5,
    monthlyGrowth: 34.8
  };

  const articleStatus = {
    published: 8945,
    pending: 234,
    draft: 567,
    rejected: 89
  };

  const trafficData = [
    { category: 'Manga Reviews', views: 45600, color: 'bg-pink-500' },
    { category: 'Anime News', views: 38200, color: 'bg-purple-500' },
    { category: 'Character Guides', views: 29800, color: 'bg-violet-500' },
    { category: 'Industry News', views: 22400, color: 'bg-indigo-500' }
  ];

  const recentAlerts = [
    { type: 'abuse', message: 'Spam comments detected on "Top 10 Anime 2024"', time: '5 min ago' },
    { type: 'system', message: 'Background job queue at 85% capacity', time: '15 min ago' },
    { type: 'moderation', message: '3 articles pending review', time: '1 hour ago' }
  ];

  const themeClasses = isDarkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-blue-50 text-gray-900';

  const cardClasses = isDarkMode
    ? 'bg-gray-800 border-pink-500'
    : 'bg-white border-violet-500';

  const StatCard = ({ icon: Icon, title, value, change, trend }) => (
    <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`}>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform"></div>
      <div className="flex items-start justify-between relative z-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide opacity-70">{title}</p>
          <p className="text-3xl font-black mt-2" style={{ textShadow: isDarkMode ? '2px 2px 4px rgba(0,0,0,0.8)' : '2px 2px 4px rgba(0,0,0,0.1)' }}>
            {value.toLocaleString()}
          </p>
          {change && (
            <div className={`flex items-center mt-2 text-sm font-bold ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
              <TrendingUp size={16} className="mr-1" />
              {change}% vs last period
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${isDarkMode ? 'bg-pink-500/20' : 'bg-violet-500/20'}`}>
          <Icon size={24} className={isDarkMode ? 'text-pink-400' : 'text-violet-600'} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 opacity-50"></div>
    </div>
  );

  const TrafficCard = ({ category, views, color }) => (
    <div className={`${cardClasses} border-2 rounded-lg p-4 hover:-translate-y-1 transition-all duration-300`}>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wide">{category}</h4>
          <p className="text-2xl font-black mt-1">{views.toLocaleString()}</p>
        </div>
        <div className={`w-4 h-12 ${color} rounded-full relative`}>
          <div className={`absolute -top-1 -right-1 w-6 h-6 ${color} rounded-full animate-pulse opacity-70`}></div>
        </div>
      </div>
    </div>
  );

  const StatusBadge = ({ status, count }) => {
    const colors = {
      published: 'bg-green-500',
      pending: 'bg-yellow-500', 
      draft: 'bg-gray-500',
      rejected: 'bg-red-500'
    };
    return (
      <div className={`${cardClasses} border-2 rounded-full px-6 py-3 flex items-center space-x-3 hover:-translate-y-1 transition-all duration-300`}>
        <div className={`w-3 h-3 ${colors[status]} rounded-full animate-pulse`}></div>
        <span className="font-bold uppercase text-sm tracking-wide">{status}</span>
        <span className="text-xl font-black">{count}</span>
      </div>
    );
  };

  const AlertItem = ({ alert }) => {
    const icons = {
      abuse: Shield,
      system: Server,
      moderation: Eye
    };
    const colors = {
      abuse: 'text-red-400',
      system: 'text-yellow-400', 
      moderation: 'text-blue-400'
    };
    const Icon = icons[alert.type];
    
    return (
      <div className={`${cardClasses} border-l-4 ${isDarkMode ? 'border-l-pink-500' : 'border-l-violet-500'} rounded-r-lg p-4 mb-3 hover:-translate-y-1 transition-all duration-300`}>
        <div className="flex items-start space-x-3">
          <Icon size={20} className={colors[alert.type]} />
          <div className="flex-1">
            <p className="font-semibold text-sm">{alert.message}</p>
            <p className="text-xs opacity-70 mt-1">{alert.time}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${themeClasses} transition-all duration-500`}>
      {/* Header */}
      <header className={`${cardClasses} border-b-2 p-6 sticky top-0 z-50 backdrop-blur-lg bg-opacity-90`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
                <Zap className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black uppercase tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                OTAKU CENTRAL
              </h1>
              <p className="text-sm opacity-70 font-bold">ADMIN DASHBOARD</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700'
              } hover:-translate-y-1 shadow-lg`}
            >
              {isDarkMode ? '☀️ LIGHT' : '🌙 DARK'}
            </button>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto">
        {/* Stats Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-black uppercase tracking-wide mb-4 flex items-center">
            <BarChart3 className={`mr-2 ${isDarkMode ? 'text-pink-400' : 'text-violet-600'}`} />
            DASHBOARD OVERVIEW
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              icon={FileText} 
              title="Total Articles" 
              value={stats.totalArticles}
              change={stats.monthlyGrowth}
              trend="up"
            />
            <StatCard 
              icon={Users} 
              title="Total Users" 
              value={stats.totalUsers}
              change={stats.weeklyGrowth}
              trend="up"
            />
            <StatCard 
              icon={MessageSquare} 
              title="Comments" 
              value={stats.totalComments}
              change={8.3}
              trend="up"
            />
            <StatCard 
              icon={Eye} 
              title="Daily Views" 
              value={stats.dailyViews}
              change={15.7}
              trend="up"
            />
          </div>
        </div>

        {/* Traffic Analytics */}
        <div className="mb-8">
          <h2 className="text-xl font-black uppercase tracking-wide mb-4 flex items-center">
            <Globe className={`mr-2 ${isDarkMode ? 'text-pink-400' : 'text-violet-600'}`} />
            TRAFFIC BY CATEGORY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trafficData.map((item, index) => (
              <TrafficCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Article Status & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Article Status */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-wide mb-4 flex items-center">
              <FileText className={`mr-2 ${isDarkMode ? 'text-pink-400' : 'text-violet-600'}`} />
              ARTICLE STATUS
            </h2>
            <div className="space-y-3">
              <StatusBadge status="published" count={articleStatus.published} />
              <StatusBadge status="pending" count={articleStatus.pending} />
              <StatusBadge status="draft" count={articleStatus.draft} />
              <StatusBadge status="rejected" count={articleStatus.rejected} />
            </div>
          </div>

          {/* Alerts & System Health */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-wide mb-4 flex items-center">
              <AlertTriangle className={`mr-2 ${isDarkMode ? 'text-pink-400' : 'text-violet-600'}`} />
              ALERTS & SYSTEM HEALTH
            </h2>
            <div>
              {recentAlerts.map((alert, index) => (
                <AlertItem key={index} alert={alert} />
              ))}
            </div>
            
            {/* System Health Indicators */}
            <div className={`${cardClasses} border-2 rounded-lg p-6 mt-4`}>
              <h3 className="font-bold uppercase text-sm mb-4 tracking-wide">SYSTEM STATUS</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">SERVER UPTIME</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-bold text-sm">99.9%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">BACKGROUND JOBS</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="font-bold text-sm">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">DATABASE HEALTH</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-bold text-sm">OPTIMAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-black uppercase tracking-wide mb-4 flex items-center">
            <Zap className={`mr-2 ${isDarkMode ? 'text-pink-400' : 'text-violet-600'}`} />
            QUICK ACTIONS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FileText, label: 'NEW ARTICLE', color: 'from-green-500 to-emerald-600' },
              { icon: Users, label: 'USER MANAGEMENT', color: 'from-blue-500 to-cyan-600' },
              { icon: Shield, label: 'MODERATION', color: 'from-red-500 to-pink-600' },
              { icon: BarChart3, label: 'ANALYTICS', color: 'from-purple-500 to-violet-600' }
            ].map((action, index) => (
              <button
                key={index}
                className={`bg-gradient-to-br ${action.color} text-white p-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center space-y-2`}
              >
                <action.icon size={24} />
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;