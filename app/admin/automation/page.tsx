'use client'
import React, { useState } from 'react';
import { 
  Send, 
  Users, 
  Calendar, 
  BarChart3, 
  Plus, 
  Eye, 
  Mail, 
  Filter, 
  Clock, 
  Zap,
  Star,
  BookOpen,
  Target,
  TrendingUp,
  Settings,
  Play,
  Pause,
  Edit3,
  Copy,
  Trash2,
  MousePointer
} from 'lucide-react';

const NewsletterAdminPanel = () => {
  const [activeTab, setActiveTab] = useState('compose');
  const [darkMode, setDarkMode] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState('weekly-digest');
  const [audienceFilter, setAudienceFilter] = useState('all');
  const [scheduleType, setScheduleType] = useState('now');
  
  const templates = [
    { id: 'weekly-digest', name: 'Weekly Digest', icon: BookOpen },
    { id: 'breaking-news', name: 'Breaking News', icon: Zap },
    { id: 'new-releases', name: 'New Releases', icon: Star },
    { id: 'custom', name: 'Custom Template', icon: Edit3 }
  ];

  const audienceOptions = [
    { id: 'all', name: 'All Subscribers', count: '12,847', icon: Users },
    { id: 'manga-fans', name: 'Manga Enthusiasts', count: '8,234', icon: BookOpen },
    { id: 'anime-fans', name: 'Anime Lovers', count: '9,156', icon: Play },
    { id: 'top-readers', name: 'Top Readers', count: '1,523', icon: TrendingUp }
  ];

  const campaigns = [
    {
      id: 1,
      title: 'Weekly Manga Roundup #47',
      status: 'sent',
      sent: '2,847',
      opens: '1,892',
      clicks: '456',
      date: '2024-06-10'
    },
    {
      id: 2,
      title: 'BREAKING: New Attack on Titan Movie',
      status: 'scheduled',
      sent: '0',
      opens: '0',
      clicks: '0',
      date: '2024-06-16'
    },
    {
      id: 3,
      title: 'Summer Anime Season Preview',
      status: 'draft',
      sent: '0',
      opens: '0',
      clicks: '0',
      date: '2024-06-08'
    }
  ];

  const themeClasses = darkMode
    ? 'bg-gray-900 text-white'
    : 'bg-blue-50 text-gray-900';

  const cardClasses = darkMode
    ? 'bg-gray-800 border-pink-500/20'
    : 'bg-white border-violet-200';

  const accentColor = darkMode ? 'pink' : 'violet';

  const TabButton = ({ id, label, icon: Icon, active }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wide text-sm transition-all duration-300 ${
        active
          ? darkMode
            ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/25 -translate-y-1'
            : 'bg-gradient-to-r from-violet-500 to-violet-600 text-white shadow-lg shadow-violet-500/25 -translate-y-1'
          : darkMode
          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
          : 'bg-white text-gray-600 hover:bg-violet-50 hover:text-violet-700'
      }`}
    >
      <Icon size={16} />
      {label}
    </button>
  );

  const StatCard = ({ icon: Icon, label, value, change, trend }) => (
    <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-full ${darkMode ? 'bg-pink-500/20' : 'bg-violet-500/20'}`}>
          <Icon className={`${darkMode ? 'text-pink-400' : 'text-violet-600'}`} size={24} />
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-bold ${
          trend === 'up' 
            ? 'bg-green-500/20 text-green-400' 
            : 'bg-red-500/20 text-red-400'
        }`}>
          {change}
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-3xl font-black">{value}</div>
        <div className="text-sm font-semibold uppercase tracking-wide opacity-70">{label}</div>
      </div>
    </div>
  );

  const ComposeTab = () => (
    <div className="space-y-8">
      {/* Template Selection */}
      <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg`}>
        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
          <Edit3 className={darkMode ? 'text-pink-400' : 'text-violet-600'} />
          <span style={{textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)'}}>
            Choose Template
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  selectedTemplate === template.id
                    ? darkMode
                      ? 'border-pink-500 bg-pink-500/10'
                      : 'border-violet-500 bg-violet-500/10'
                    : darkMode
                    ? 'border-gray-600 bg-gray-700 hover:border-pink-400'
                    : 'border-gray-300 bg-gray-50 hover:border-violet-400'
                }`}
              >
                <Icon className={`mx-auto mb-2 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} size={32} />
                <div className="font-bold text-sm">{template.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Audience Selection */}
      <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg`}>
        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
          <Target className={darkMode ? 'text-pink-400' : 'text-violet-600'} />
          <span style={{textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)'}}>
            Select Audience
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {audienceOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => setAudienceFilter(option.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-4 text-left ${
                  audienceFilter === option.id
                    ? darkMode
                      ? 'border-pink-500 bg-pink-500/10'
                      : 'border-violet-500 bg-violet-500/10'
                    : darkMode
                    ? 'border-gray-600 bg-gray-700 hover:border-pink-400'
                    : 'border-gray-300 bg-gray-50 hover:border-violet-400'
                }`}
              >
                <Icon className={`${darkMode ? 'text-pink-400' : 'text-violet-600'}`} size={24} />
                <div>
                  <div className="font-bold">{option.name}</div>
                  <div className="text-sm opacity-70">{option.count} subscribers</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Newsletter Content */}
      <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg`}>
        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
          <Mail className={darkMode ? 'text-pink-400' : 'text-violet-600'} />
          <span style={{textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)'}}>
            Compose Newsletter
          </span>
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wide mb-2">Subject Line</label>
            <input
              type="text"
              placeholder="🔥 Weekly Manga Madness - {{user_name}}"
              className={`w-full p-4 rounded-lg border-2 font-medium ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 focus:border-pink-500' 
                  : 'bg-white border-gray-300 focus:border-violet-500'
              } focus:outline-none transition-colors`}
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wide mb-2">Preview Text</label>
            <input
              type="text"
              placeholder="Your weekly dose of manga news and updates..."
              className={`w-full p-4 rounded-lg border-2 font-medium ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 focus:border-pink-500' 
                  : 'bg-white border-gray-300 focus:border-violet-500'
              } focus:outline-none transition-colors`}
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wide mb-2">Content</label>
            <div className="flex gap-2 mb-4">
              <button className={`px-4 py-2 rounded-full text-sm font-bold ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
                HTML
              </button>
              <button className={`px-4 py-2 rounded-full text-sm font-bold ${darkMode ? 'bg-pink-500/20 text-pink-400' : 'bg-violet-500/20 text-violet-600'}`}>
                Markdown
              </button>
            </div>
            <textarea
              rows={12}
              placeholder={`# Weekly Manga Roundup 🎌

Hey {{user_name}}! 👋

Here's what's hot in the manga world this week:

## 🔥 Trending Now
- **Attack on Titan Final Chapter**: New details revealed!
- **One Piece Chapter 1089**: {{latest_chapter_title}}

## 📚 New Releases
{{new_releases_list}}

---
*Happy reading!*
The Manga News Team`}
              className={`w-full p-4 rounded-lg border-2 font-mono text-sm ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 focus:border-pink-500' 
                  : 'bg-white border-gray-300 focus:border-violet-500'
              } focus:outline-none transition-colors`}
            />
          </div>
        </div>
      </div>

      {/* Schedule & Send */}
      <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg`}>
        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
          <Clock className={darkMode ? 'text-pink-400' : 'text-violet-600'} />
          <span style={{textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)'}}>
            Schedule & Send
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => setScheduleType('now')}
            className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              scheduleType === 'now'
                ? darkMode
                  ? 'border-pink-500 bg-pink-500/10'
                  : 'border-violet-500 bg-violet-500/10'
                : darkMode
                ? 'border-gray-600 bg-gray-700'
                : 'border-gray-300 bg-gray-50'
            }`}
          >
            <Zap className={`mx-auto mb-2 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} size={24} />
            <div className="font-bold text-sm">Send Now</div>
          </button>
          <button
            onClick={() => setScheduleType('schedule')}
            className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              scheduleType === 'schedule'
                ? darkMode
                  ? 'border-pink-500 bg-pink-500/10'
                  : 'border-violet-500 bg-violet-500/10'
                : darkMode
                ? 'border-gray-600 bg-gray-700'
                : 'border-gray-300 bg-gray-50'
            }`}
          >
            <Calendar className={`mx-auto mb-2 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} size={24} />
            <div className="font-bold text-sm">Schedule</div>
          </button>
          <button
            onClick={() => setScheduleType('recurring')}
            className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              scheduleType === 'recurring'
                ? darkMode
                  ? 'border-pink-500 bg-pink-500/10'
                  : 'border-violet-500 bg-violet-500/10'
                : darkMode
                ? 'border-gray-600 bg-gray-700'
                : 'border-gray-300 bg-gray-50'
            }`}
          >
            <Settings className={`mx-auto mb-2 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} size={24} />
            <div className="font-bold text-sm">Recurring</div>
          </button>
        </div>

        {scheduleType === 'schedule' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2">Date</label>
              <input
                type="date"
                className={`w-full p-3 rounded-lg border-2 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:border-pink-500' 
                    : 'bg-white border-gray-300 focus:border-violet-500'
                } focus:outline-none transition-colors`}
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2">Time</label>
              <input
                type="time"
                className={`w-full p-3 rounded-lg border-2 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:border-pink-500' 
                    : 'bg-white border-gray-300 focus:border-violet-500'
                } focus:outline-none transition-colors`}
              />
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <button className={`flex-1 py-4 px-6 rounded-full font-black uppercase tracking-wide text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
            darkMode 
              ? 'bg-gradient-to-r from-pink-500 to-pink-600 shadow-pink-500/25' 
              : 'bg-gradient-to-r from-violet-500 to-violet-600 shadow-violet-500/25'
          }`}>
            <Send className="inline mr-2" size={20} />
            {scheduleType === 'now' ? 'Send Newsletter' : 'Schedule Newsletter'}
          </button>
          <button className={`px-6 py-4 rounded-full font-bold border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
            darkMode 
              ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
              : 'border-gray-300 text-gray-600 hover:border-gray-400'
          }`}>
            <Eye size={20} />
          </button>
        </div>
      </div>
    </div>
  );
  const StatCardAnalytics = ({ icon: Icon, title, value, trend }) => (
    <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-full ${darkMode ? 'bg-pink-500/20' : 'bg-violet-500/20'}`}>
          <Icon size={24} className={darkMode ? 'text-pink-400' : 'text-violet-500'} />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-green-500">
            <TrendingUp size={16} />
            <span className="text-sm font-bold">+{trend}%</span>
          </div>
        )}
      </div>
      <div>
        <h3 className="font-bold uppercase text-sm opacity-75 mb-1">{title}</h3>
        <p className="text-2xl font-black">{value}</p>
      </div>
    </div>
  );
  const stats = {
    totalSubscribers: 2350,
    avgOpenRate: 42.5,
    avgClickRate: 3.8,
    campaignsSent: 15
  };
  const AnalyticsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCardAnalytics icon={Users} title="Total Subscribers" value={stats.totalSubscribers.toLocaleString()} trend={8.2} />
        <StatCardAnalytics icon={Eye} title="Avg Open Rate" value={`${stats.avgOpenRate}%`} trend={2.1} />
        <StatCardAnalytics icon={MousePointer} title="Avg Click Rate" value={`${stats.avgClickRate}%`} trend={0.5} />
        <StatCardAnalytics icon={Send} title="Campaigns Sent" value={stats.campaignsSent} trend={0.5} />
      </div>

      <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg`}>
        <h3 className="font-black uppercase text-lg mb-6 flex items-center gap-2">
          <BarChart3 size={20} />
          Performance Overview
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold">Subscriber Growth</span>
            <span className="text-green-500 font-bold">+12.3% this month</span>
          </div>
          <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
            <div className={`h-full rounded-full ${darkMode ? 'bg-gradient-to-r from-pink-500 to-pink-400' : 'bg-gradient-to-r from-violet-500 to-violet-400'} animate-pulse`} style={{width: '78%'}}></div>
          </div>
        </div>
        <div className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <span className="font-bold">Engagement Rate</span>
            <span className="text-green-500 font-bold">46.3% average</span>
          </div>
          <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
            <div className={`h-full rounded-full ${darkMode ? 'bg-gradient-to-r from-pink-500 to-pink-400' : 'bg-gradient-to-r from-violet-500 to-violet-400'} animate-pulse`} style={{width: '46.3%'}}></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg`}>
          <h3 className="font-black uppercase text-lg mb-4">Top Performing Content</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold">🔥 One Piece Chapter 1091</span>
              <span className={`px-2 py-1 rounded text-xs font-bold ${darkMode ? 'bg-pink-500/20 text-pink-300' : 'bg-violet-500/20 text-violet-600'}`}>89% opens</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">⚡ Attack on Titan Final</span>
              <span className={`px-2 py-1 rounded text-xs font-bold ${darkMode ? 'bg-pink-500/20 text-pink-300' : 'bg-violet-500/20 text-violet-600'}`}>76% opens</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">🎌 Jujutsu Kaisen Update</span>
              <span className={`px-2 py-1 rounded text-xs font-bold ${darkMode ? 'bg-pink-500/20 text-pink-300' : 'bg-violet-500/20 text-violet-600'}`}>72% opens</span>
            </div>
          </div>
        </div>

        <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg`}>
          <h3 className="font-black uppercase text-lg mb-4">Audience Insights</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold">Most Active Time</span>
              <span className="font-bold opacity-75">7-9 PM JST</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">Top Interest</span>
              <span className="font-bold opacity-75">Shonen Manga</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">Preferred Format</span>
              <span className="font-bold opacity-75">Weekly Digest</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const CampaignsTab = () => (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Mail} label="Total Sent" value="45,289" change="+12%" trend="up" />
        <StatCard icon={Eye} label="Open Rate" value="68.4%" change="+3.2%" trend="up" />
        <StatCard icon={TrendingUp} label="Click Rate" value="24.1%" change="-1.8%" trend="down" />
        <StatCard icon={Users} label="Subscribers" value="12,847" change="+156" trend="up" />
      </div>

      {/* Campaign List */}
      <div className={`${cardClasses} border-2 rounded-lg shadow-lg overflow-hidden`}>
        <div className="p-6 border-b-2 border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-black uppercase flex items-center gap-3">
            <BarChart3 className={darkMode ? 'text-pink-400' : 'text-violet-600'} />
            <span style={{textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)'}}>
              Recent Campaigns
            </span>
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <tr>
                <th className="text-left p-4 font-black uppercase text-sm">Campaign</th>
                <th className="text-left p-4 font-black uppercase text-sm">Status</th>
                <th className="text-left p-4 font-black uppercase text-sm">Sent</th>
                <th className="text-left p-4 font-black uppercase text-sm">Opens</th>
                <th className="text-left p-4 font-black uppercase text-sm">Clicks</th>
                <th className="text-left p-4 font-black uppercase text-sm">Date</th>
                <th className="text-left p-4 font-black uppercase text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:bg-opacity-50 transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  <td className="p-4 font-semibold">{campaign.title}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      campaign.status === 'sent' 
                        ? 'bg-green-500/20 text-green-400'
                        : campaign.status === 'scheduled'
                        ? darkMode ? 'bg-pink-500/20 text-pink-400' : 'bg-violet-500/20 text-violet-600'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="p-4 font-bold">{campaign.sent || '-'}</td>
                  <td className="p-4 font-bold">{campaign.opens || '-'}</td>
                  <td className="p-4 font-bold">{campaign.clicks || '-'}</td>
                  <td className="p-4 text-sm opacity-70">{campaign.date}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                        <Eye size={16} />
                      </button>
                      <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                        <Copy size={16} />
                      </button>
                      <button className={`p-2 rounded-lg transition-colors hover:bg-red-500/20 hover:text-red-400`}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${themeClasses} transition-colors duration-300`}>
      {/* Header */}
      <div className={`${cardClasses} border-b-4 ${darkMode ? 'border-pink-500' : 'border-violet-500'} p-6 shadow-lg`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-pink-500/20' : 'bg-violet-500/20'} animate-pulse`}>
              <Mail className={`${darkMode ? 'text-pink-400' : 'text-violet-600'}`} size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-black uppercase" style={{textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)'}}>
                Newsletter Control
              </h1>
              <p className="text-sm font-semibold opacity-70">Manga Anime News Admin</p>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              darkMode 
                ? 'border-pink-500/50 bg-pink-500/10 hover:bg-pink-500/20' 
                : 'border-violet-500/50 bg-violet-500/10 hover:bg-violet-500/20'
            }`}
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6">
        <div className="flex gap-4 mb-8 overflow-x-auto">
          <TabButton id="compose" label="Compose" icon={Plus} active={activeTab === 'compose'} />
          <TabButton id="campaigns" label="Campaigns" icon={BarChart3} active={activeTab === 'campaigns'} />
          <TabButton id="subscribers" label="Subscribers" icon={Users} active={activeTab === 'subscribers'} />
          <TabButton id="templates" label="Templates" icon={Edit3} active={activeTab === 'templates'} />
        </div>

        {/* Tab Content */}
        {activeTab === 'compose' && <ComposeTab />}
        {activeTab === 'campaigns' && <CampaignsTab />}
        {activeTab === 'subscribers' && (
          <AnalyticsTab/>
        )}
        {activeTab === 'templates' && (
          <div className={`${cardClasses} border-2 rounded-lg p-8 shadow-lg text-center`}>
            <Edit3 className={`mx-auto mb-4 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} size={48} />
            <h2 className="text-2xl font-black uppercase mb-2">Template Manager</h2>
            <p className="opacity-70">Create and manage your newsletter templates.</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default NewsletterAdminPanel;