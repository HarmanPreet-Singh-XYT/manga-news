'use client'
import React, { useState } from 'react';
import { 
  Moon, 
  Sun, 
  MessageSquare, 
  AlertTriangle, 
  Shield, 
  Trash2, 
  CheckCircle, 
  Ban, 
  Eye, 
  MapPin, 
  Clock, 
  Flag,
  Zap,
  Users,
  Filter,
  Search
} from 'lucide-react';

const CommentModerationPanel = () => {
  const [isDark, setIsDark] = useState(true);
  const [selectedComments, setSelectedComments] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const comments = [
    {
      id: 1,
      user: 'OtakuMaster99',
      email: 'otaku@example.com',
      ip: '192.168.1.45',
      content: 'This anime is trash! The animation quality is so bad it makes me want to puke. Complete waste of time and money.',
      article: 'Attack on Titan Final Season Review',
      timestamp: '2 hours ago',
      status: 'flagged',
      flags: 3,
      reason: 'Toxic language',
      avatar: 'OM'
    },
    {
      id: 2,
      user: 'AnimeFan2024',
      email: 'fan@example.com',
      ip: '10.0.0.132',
      content: 'I disagree with the review. The character development in this series is phenomenal and the soundtrack is amazing. Maybe you should watch it again.',
      article: 'Demon Slayer Season 3 Analysis',
      timestamp: '4 hours ago',
      status: 'reported',
      flags: 1,
      reason: 'Spam reported',
      avatar: 'AF'
    },
    {
      id: 3,
      user: 'TokyoGhoul_Fan',
      email: 'ghoul@example.com',
      ip: '172.16.0.89',
      content: 'SPOILER ALERT: The main character dies in episode 12! I can\'t believe they killed him off like that. What a plot twist!',
      article: 'Jujutsu Kaisen Season 2 Discussion',
      timestamp: '6 hours ago',
      status: 'flagged',
      flags: 5,
      reason: 'Spoilers',
      avatar: 'TG'
    },
    {
      id: 4,
      user: 'NarutoLover',
      email: 'naruto@example.com',
      ip: '203.0.113.7',
      content: 'This article is biased garbage. The author clearly has no idea what they\'re talking about. Delete this trash immediately.',
      article: 'One Piece vs Naruto: Ultimate Comparison',
      timestamp: '8 hours ago',
      status: 'flagged',
      flags: 2,
      reason: 'Harassment',
      avatar: 'NL'
    },
    {
      id: 5,
      user: 'SilentWeeb',
      email: 'silent@example.com',
      ip: '198.51.100.23',
      content: 'Great analysis! I loved how you explained the symbolism in the opening sequence. The attention to detail is what makes this series special.',
      article: 'Studio Ghibli Hidden Meanings',
      timestamp: '12 hours ago',
      status: 'clean',
      flags: 0,
      reason: 'Clean',
      avatar: 'SW'
    }
  ];

  const stats = [
    { label: 'Total Comments', value: '12,847', icon: MessageSquare, trend: '+5.2%', color: 'text-green-400' },
    { label: 'Flagged Comments', value: '394', icon: Flag, trend: '+12.3%', color: 'text-red-400' },
    { label: 'Pending Review', value: '127', icon: Clock, trend: '-2.1%', color: 'text-yellow-400' },
    { label: 'Auto-Moderated', value: '2,156', icon: Shield, trend: '+8.7%', color: 'text-purple-400' }
  ];

  const handleSelectComment = (commentId) => {
    setSelectedComments(prev => 
      prev.includes(commentId) 
        ? prev.filter(id => id !== commentId)
        : [...prev, commentId]
    );
  };

  const handleBulkAction = (action) => {
    console.log(`Bulk ${action} for comments:`, selectedComments);
    setSelectedComments([]);
  };

  const handleCommentAction = (commentId, action) => {
    console.log(`${action} comment ${commentId}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'flagged': return 'text-red-400 bg-red-400/20';
      case 'reported': return 'text-yellow-400 bg-yellow-400/20';
      case 'clean': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const filteredComments = comments.filter(comment => {
    const matchesFilter = filter === 'all' || comment.status === filter;
    const matchesSearch = comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         comment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         comment.article.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const themeClasses = isDark 
    ? 'bg-gray-900 text-white' 
    : 'bg-blue-50 text-gray-900';

  const cardClasses = isDark 
    ? 'bg-gray-800 border-pink-500' 
    : 'bg-white border-violet-500';

  const gradientClasses = isDark 
    ? 'from-pink-500 to-purple-600' 
    : 'from-violet-500 to-purple-600';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Header */}
      <div className={`sticky top-0 z-50 backdrop-blur-lg ${isDark ? 'bg-gray-900/80' : 'bg-blue-50/80'} border-b-2 ${isDark ? 'border-pink-500' : 'border-violet-500'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${gradientClasses}`}>
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black uppercase tracking-wide" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                  ANIME NEWS MODERATION
                </h1>
                <p className="text-sm font-bold uppercase tracking-wide opacity-70">
                  Comment Management System
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-3 rounded-full bg-gradient-to-r ${gradientClasses} hover:scale-110 transition-all duration-300 shadow-lg`}
            >
              {isDark ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${cardClasses} border-2 rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 shadow-lg relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradientClasses} opacity-10 rounded-full -mr-10 -mt-10`}></div>
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${isDark ? 'text-pink-400' : 'text-violet-600'}`} />
                <span className={`text-sm font-bold px-2 py-1 rounded ${stat.color}`}>
                  {stat.trend}
                </span>
              </div>
              <div className="text-3xl font-black mb-2" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-wide opacity-70">
                {stat.label}
              </div>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClasses}`}></div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className={`${cardClasses} border-2 rounded-lg p-6 mb-8 shadow-lg`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                <input
                  type="text"
                  placeholder="SEARCH COMMENTS..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`pl-10 pr-4 py-2 rounded-lg border-2 ${isDark ? 'bg-gray-700 border-pink-500 text-white' : 'bg-gray-100 border-violet-500 text-gray-900'} font-bold uppercase tracking-wide text-sm focus:outline-none focus:ring-2 focus:ring-purple-500`}
                />
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className={`px-4 py-2 rounded-lg border-2 ${isDark ? 'bg-gray-700 border-pink-500 text-white' : 'bg-gray-100 border-violet-500 text-gray-900'} font-bold uppercase tracking-wide text-sm focus:outline-none focus:ring-2 focus:ring-purple-500`}
              >
                <option value="all">ALL COMMENTS</option>
                <option value="flagged">FLAGGED</option>
                <option value="reported">REPORTED</option>
                <option value="clean">CLEAN</option>
              </select>
            </div>
            
            {selectedComments.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold uppercase tracking-wide opacity-70">
                  {selectedComments.length} SELECTED
                </span>
                <button
                  onClick={() => handleBulkAction('approve')}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold uppercase tracking-wide text-sm rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  BULK APPROVE
                </button>
                <button
                  onClick={() => handleBulkAction('delete')}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold uppercase tracking-wide text-sm rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  BULK DELETE
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {filteredComments.map((comment) => (
            <div key={comment.id} className={`${cardClasses} border-2 rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 shadow-lg relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradientClasses} opacity-5 rounded-full -mr-16 -mt-16`}></div>
              
              <div className="flex items-start space-x-4">
                <input
                  type="checkbox"
                  checked={selectedComments.includes(comment.id)}
                  onChange={() => handleSelectComment(comment.id)}
                  className="mt-1 w-5 h-5 accent-purple-500"
                />
                
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradientClasses} flex items-center justify-center text-white font-black text-sm`}>
                  {comment.avatar}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-3">
                        <h3 className="font-black uppercase tracking-wide">{comment.user}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getStatusColor(comment.status)}`}>
                          {comment.status}
                        </span>
                        {comment.flags > 0 && (
                          <span className="flex items-center space-x-1 text-red-400">
                            <Flag className="w-4 h-4" />
                            <span className="text-sm font-bold">{comment.flags}</span>
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 mt-1 text-sm opacity-70">
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{comment.ip}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{comment.timestamp}</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleCommentAction(comment.id, 'approve')}
                        className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <CheckCircle className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleCommentAction(comment.id, 'delete')}
                        className="p-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleCommentAction(comment.id, 'ban')}
                        className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <Ban className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} mb-3`}>
                    <p className="text-sm leading-relaxed">{comment.content}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide opacity-70 mb-1">
                        Article: {comment.article}
                      </p>
                      <p className="text-xs opacity-50">
                        Reason: {comment.reason}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => handleCommentAction(comment.id, 'view')}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg border-2 ${isDark ? 'border-pink-500 text-pink-400' : 'border-violet-500 text-violet-600'} hover:bg-purple-500 hover:text-white transition-all duration-300`}
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase tracking-wide">VIEW CONTEXT</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClasses}`}></div>
            </div>
          ))}
        </div>

        {/* Status Indicators */}
        <div className={`${cardClasses} border-2 rounded-lg p-6 mt-8 shadow-lg`}>
          <h2 className="text-xl font-black uppercase tracking-wide mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
            SYSTEM STATUS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold uppercase tracking-wide">Auto-Moderation: Active</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold uppercase tracking-wide">Queue Processing: Normal</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold uppercase tracking-wide">AI Filter: Operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModerationPanel;