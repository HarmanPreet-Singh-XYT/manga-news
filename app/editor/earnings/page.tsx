'use client'
import React, { useState } from 'react';
import { 
  Sun, 
  Moon, 
  TrendingUp, 
  Eye, 
  Clock, 
  MessageCircle, 
  Heart, 
  DollarSign, 
  MousePointer, 
  BarChart3,
  Users,
  Zap,
  Star,
  Award,
  BookOpen,
  Target
} from 'lucide-react';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  const articlesData = [
    {
      id: 1,
      title: "One Piece Chapter 1098 LEAKED - Kuma's Tragic Backstory Revealed",
      views: 45672,
      readTime: "4.2 min",
      comments: 523,
      likes: 1234,
      revenue: 156.78,
      affiliateClicks: 89,
      category: "ONE PIECE",
      trending: true
    },
    {
      id: 2,
      title: "Demon Slayer Season 4 Animation Studio Change CONFIRMED",
      views: 32108,
      readTime: "3.8 min",
      comments: 298,
      likes: 876,
      revenue: 98.45,
      affiliateClicks: 67,
      category: "DEMON SLAYER",
      trending: false
    },
    {
      id: 3,
      title: "Attack on Titan Final Season Alternative Ending Fan Theory",
      views: 28543,
      readTime: "5.1 min",
      comments: 412,
      likes: 654,
      revenue: 87.32,
      affiliateClicks: 45,
      category: "ATTACK ON TITAN",
      trending: false
    },
    {
      id: 4,
      title: "Jujutsu Kaisen Manga HIATUS - Gege Akutami's Health Update",
      views: 67234,
      readTime: "2.9 min",
      comments: 789,
      likes: 1567,
      revenue: 203.67,
      affiliateClicks: 123,
      category: "JUJUTSU KAISEN",
      trending: true
    }
  ];

  const totalViews = articlesData.reduce((sum, article) => sum + article.views, 0);
  const totalRevenue = articlesData.reduce((sum, article) => sum + article.revenue, 0);
  const totalEngagement = articlesData.reduce((sum, article) => sum + article.comments + article.likes, 0);
  const totalAffiliateClicks = articlesData.reduce((sum, article) => sum + article.affiliateClicks, 0);
  const avgReadTime = (articlesData.reduce((sum, article) => sum + parseFloat(article.readTime), 0) / articlesData.length).toFixed(1);
  const engagementRate = ((totalEngagement / totalViews) * 100).toFixed(1);

  const StatCard = ({ icon: Icon, title, value, subtitle, color, trend, pulse = false }) => (
    <div className={`
      relative overflow-hidden rounded-lg border-2 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
      ${darkMode 
        ? `bg-gray-800 border-gray-700 ${color === 'pink' ? 'border-pink-500/30' : 'border-violet-500/30'}` 
        : `bg-white border-gray-200 ${color === 'pink' ? 'border-pink-300' : 'border-violet-300'}`
      }
    `}>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`
              p-3 rounded-full transition-all duration-300
              ${color === 'pink' 
                ? (darkMode ? 'bg-pink-500/20 text-pink-400' : 'bg-pink-100 text-pink-600')
                : (darkMode ? 'bg-violet-500/20 text-violet-400' : 'bg-violet-100 text-violet-600')
              }
              ${pulse ? 'animate-pulse' : ''}
            `}>
              <Icon size={24} />
            </div>
            <div>
              <p className={`text-sm font-bold uppercase tracking-wide ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {title}
              </p>
              <p className={`text-2xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none' }}>
                {value}
              </p>
              {subtitle && (
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {trend && (
            <div className={`
              px-2 py-1 rounded-full text-xs font-bold uppercase
              ${trend > 0 
                ? (darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700')
                : (darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700')
              }
            `}>
              {trend > 0 ? '+' : ''}{trend}%
            </div>
          )}
        </div>
      </div>
      <div className={`
        absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r
        ${color === 'pink' 
          ? 'from-pink-500 to-pink-600' 
          : 'from-violet-500 to-violet-600'
        }
      `} />
    </div>
  );

  const ArticleCard = ({ article }) => (
    <div className={`
      relative overflow-hidden rounded-lg border-2 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
      ${darkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
      }
    `}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`
                px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                ${darkMode ? 'bg-pink-500/20 text-pink-400' : 'bg-pink-100 text-pink-600'}
              `}>
                {article.category}
              </span>
              {article.trending && (
                <div className={`
                  flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-bold uppercase
                  ${darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'}
                `}>
                  <Zap size={12} className="animate-pulse" />
                  <span>TRENDING</span>
                </div>
              )}
            </div>
            <h3 className={`text-lg font-bold leading-tight mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: darkMode ? '1px 1px 2px rgba(0,0,0,0.5)' : 'none' }}>
              {article.title}
            </h3>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <Eye size={16} className={darkMode ? 'text-violet-400' : 'text-violet-600'} />
            <div>
              <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {article.views.toLocaleString()}
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>views</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock size={16} className={darkMode ? 'text-violet-400' : 'text-violet-600'} />
            <div>
              <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {article.readTime}
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>avg read</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <MessageCircle size={14} className={darkMode ? 'text-pink-400' : 'text-pink-600'} />
              <Heart size={14} className={darkMode ? 'text-pink-400' : 'text-pink-600'} />
            </div>
            <div>
              <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {(article.comments + article.likes).toLocaleString()}
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>engagement</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <DollarSign size={16} className={darkMode ? 'text-green-400' : 'text-green-600'} />
            <div>
              <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                ${article.revenue.toFixed(2)}
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>revenue</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-600/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MousePointer size={14} className={darkMode ? 'text-orange-400' : 'text-orange-600'} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {article.affiliateClicks} affiliate clicks
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-bold ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>
                {(((article.comments + article.likes) / article.views) * 100).toFixed(1)}% 
              </span>
              <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                engagement rate
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`
        absolute top-0 right-0 w-20 h-20 transform rotate-12 translate-x-6 -translate-y-6
        ${article.trending ? 'opacity-20' : 'opacity-10'}
      `}>
        <Star className={`w-full h-full ${darkMode ? 'text-pink-500' : 'text-violet-500'} animate-pulse`} />
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Header */}
      <div className={`
        sticky top-0 z-50 backdrop-blur-md border-b-2 transition-all duration-300
        ${darkMode 
          ? 'bg-gray-900/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
        }
      `}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`
                p-3 rounded-full transition-all duration-300
                ${darkMode ? 'bg-pink-500/20' : 'bg-violet-100'}
              `}>
                <BookOpen className={`${darkMode ? 'text-pink-400' : 'text-violet-600'}`} size={24} />
              </div>
              <div>
                <h1 className={`text-2xl font-black uppercase tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none' }}>
                  OTAKU INSIDER
                </h1>
                <p className={`text-sm font-bold uppercase ${darkMode ? 'text-pink-400' : 'text-violet-600'}`}>
                  JOURNALIST DASHBOARD
                </p>
              </div>
            </div>
            
            <button
              onClick={toggleTheme}
              className={`
                p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                ${darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 border-2 border-gray-600' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 shadow-lg'
                }
              `}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <BarChart3 className={`${darkMode ? 'text-pink-400' : 'text-violet-600'}`} size={28} />
            <h2 className={`text-2xl font-black uppercase tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none' }}>
              📊 EARNINGS & STATISTICS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              icon={Eye}
              title="Total Views"
              value={totalViews.toLocaleString()}
              subtitle="Last 30 days"
              color="violet"
              trend={12.5}
              pulse={true}
            />
            
            <StatCard
              icon={Users}
              title="Engagement Rate"
              value={`${engagementRate}%`}
              subtitle={`${totalEngagement.toLocaleString()} total interactions`}
              color="pink"
              trend={8.3}
            />
            
            <StatCard
              icon={Clock}
              title="Avg Read Time"
              value={`${avgReadTime} min`}
              subtitle="User retention metric"
              color="violet"
              trend={-2.1}
            />
            
            <StatCard
              icon={DollarSign}
              title="Ad Revenue"
              value={`$${totalRevenue.toFixed(2)}`}
              subtitle="This month"
              color="pink"
              trend={15.7}
              pulse={true}
            />
            
            <StatCard
              icon={MousePointer}
              title="Affiliate Clicks"
              value={totalAffiliateClicks.toLocaleString()}
              subtitle="Conversion tracking"
              color="violet"
              trend={22.4}
            />
            
            <StatCard
              icon={Award}
              title="Top Performer"
              value="JJK Article"
              subtitle="67.2K views this week"
              color="pink"
              trend={null}
              pulse={true}
            />
          </div>
        </div>

        {/* Articles Performance */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Target className={`${darkMode ? 'text-pink-400' : 'text-violet-600'}`} size={28} />
            <h2 className={`text-2xl font-black uppercase tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none' }}>
              📰 ARTICLE PERFORMANCE
            </h2>
          </div>
          
          <div className="grid gap-6">
            {articlesData.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Performance Summary */}
        <div className={`
          mt-8 p-6 rounded-lg border-2 shadow-lg
          ${darkMode 
            ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-pink-500/30' 
            : 'bg-gradient-to-r from-violet-50 to-pink-50 border-violet-300'
          }
        `}>
          <div className="text-center">
            <h3 className={`text-xl font-black uppercase mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none' }}>
              🏆 PERFORMANCE SUMMARY
            </h3>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Your content is performing <span className={`font-bold ${darkMode ? 'text-pink-400' : 'text-violet-600'}`}>23% above average</span> this month!
            </p>
            <div className="flex justify-center items-center space-x-6 mt-4">
              <div className="text-center">
                <p className={`text-2xl font-black ${darkMode ? 'text-green-400' : 'text-green-600'}`}>↗ 15.7%</p>
                <p className={`text-xs uppercase font-bold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Revenue Growth</p>
              </div>
              <div className="text-center">
                <p className={`text-2xl font-black ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>↗ 12.5%</p>
                <p className={`text-xs uppercase font-bold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>View Growth</p>
              </div>
              <div className="text-center">
                <p className={`text-2xl font-black ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>↗ 8.3%</p>
                <p className={`text-xs uppercase font-bold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Engagement Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Elements */}
      <div className="fixed bottom-6 right-6 space-y-3">
        <div className={`
          w-3 h-3 rounded-full animate-pulse
          ${darkMode ? 'bg-pink-500' : 'bg-violet-500'}
        `} />
        <div className={`
          w-2 h-2 rounded-full animate-bounce
          ${darkMode ? 'bg-violet-500' : 'bg-pink-500'}
        `} style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};

export default Dashboard;