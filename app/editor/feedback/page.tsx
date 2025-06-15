'use client'
import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  Eye, 
  Edit3, 
  Send, 
  Moon, 
  Sun, 
  Filter, 
  Search,
  ChevronDown,
  ChevronUp,
  Clock,
  User,
  Tag,
  Zap,
  Star,
  AlertCircle,
  CheckCircle,
  Hash,
  Plus
} from 'lucide-react';

const EditorFeedbackDashboard = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [newFeedback, setNewFeedback] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const textareaRef = useRef(null);

  // Mock data
  const articles = [
    {
      id: 1,
      title: "Attack on Titan Final Season Part 4 Review: Epic Conclusion or Rushed Ending?",
      author: "Sakura Tanaka",
      status: "pending_review",
      submitted: "2 hours ago",
      wordCount: 1850,
      category: "Review",
      feedbackCount: 5,
      priority: "high",
      threads: [
        {
          id: 1,
          editor: "Hiroshi Yamamoto",
          timestamp: "1 hour ago",
          type: "suggestion",
          content: "The opening paragraph needs more impact. Consider starting with the emotional weight of the finale rather than technical details.",
          status: "open",
          replies: [
            {
              author: "Sakura Tanaka",
              content: "Good point! I'll revise the opening to focus on the emotional impact first.",
              timestamp: "45 mins ago"
            }
          ]
        },
        {
          id: 2,
          editor: "Mei Chen",
          timestamp: "30 mins ago",
          type: "correction",
          content: "Page 3, paragraph 2: 'Attack Titan' should be 'Attack on Titan' - minor typo but important for SEO.",
          status: "resolved"
        },
        {
          id: 3,
          editor: "Hiroshi Yamamoto",
          timestamp: "15 mins ago",
          type: "question",
          content: "Can you add more comparison to the manga ending? Our readers love manga vs anime analysis.",
          status: "open"
        }
      ]
    },
    {
      id: 2,
      title: "Demon Slayer Season 4 Animation Budget: Studio Ufotable's Record Investment",
      author: "Ryu Nakamura",
      status: "approved",
      submitted: "1 day ago",
      wordCount: 2200,
      category: "News",
      feedbackCount: 3,
      priority: "medium",
      threads: [
        {
          id: 4,
          editor: "Akiko Sato",
          timestamp: "18 hours ago",
          type: "approval",
          content: "Excellent research on the budget figures. The breakdown chart is particularly helpful. Approved for publication!",
          status: "resolved"
        }
      ]
    },
    {
      id: 3,
      title: "One Piece Chapter 1100: Revolutionary Army's Master Plan Revealed",
      author: "Ken Watanabe",
      status: "needs_revision",
      submitted: "3 hours ago",
      wordCount: 1650,
      category: "Manga",
      feedbackCount: 7,
      priority: "high",
      threads: [
        {
          id: 5,
          editor: "Yuki Tanaka",
          timestamp: "2 hours ago",
          type: "major_revision",
          content: "The spoiler warnings need to be more prominent. Also, restructure the analysis section to flow better with the plot summary.",
          status: "open"
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      pending_review: darkMode ? 'bg-yellow-900/30 text-yellow-400 border-yellow-500/30' : 'bg-yellow-100 text-yellow-800 border-yellow-300',
      approved: darkMode ? 'bg-green-900/30 text-green-400 border-green-500/30' : 'bg-green-100 text-green-800 border-green-300',
      needs_revision: darkMode ? 'bg-red-900/30 text-red-400 border-red-500/30' : 'bg-red-100 text-red-800 border-red-300'
    };
    return colors[status] || colors.pending_review;
  };

  const getThreadTypeIcon = (type) => {
    const icons = {
      suggestion: <Edit3 className="w-4 h-4" />,
      correction: <AlertCircle className="w-4 h-4" />,
      question: <MessageSquare className="w-4 h-4" />,
      approval: <CheckCircle className="w-4 h-4" />,
      major_revision: <Zap className="w-4 h-4" />
    };
    return icons[type] || <MessageSquare className="w-4 h-4" />;
  };

  const getThreadTypeColor = (type) => {
    const colors = {
      suggestion: darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700',
      correction: darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-700',
      question: darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700',
      approval: darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700',
      major_revision: darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'
    };
    return colors[type] || colors.suggestion;
  };

  const handleAddFeedback = (articleId) => {
    if (newFeedback.trim()) {
      // Here you would typically send the feedback to your backend
      console.log('Adding feedback to article', articleId, ':', newFeedback);
      setNewFeedback('');
    }
  };

  const filteredArticles = articles.filter(article => {
    const matchesStatus = filterStatus === 'all' || article.status === filterStatus;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100'
    }`}>
      {/* Header */}
      <div className={`border-b-4 ${
        darkMode ? 'bg-gray-800/50 border-pink-500' : 'bg-white/80 border-violet-500'
      } backdrop-blur-sm sticky top-0 z-50`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${
                darkMode ? 'bg-pink-500/20' : 'bg-violet-500/20'
              } shadow-lg`}>
                <MessageSquare className={`w-8 h-8 ${
                  darkMode ? 'text-pink-400' : 'text-violet-600'
                }`} />
              </div>
              <div>
                <h1 className={`text-2xl font-black uppercase tracking-wide ${
                  darkMode ? 'text-white drop-shadow-lg' : 'text-gray-900 drop-shadow-md'
                }`}>
                  MANGA NEXUS
                </h1>
                <p className={`text-sm font-semibold ${
                  darkMode ? 'text-pink-400' : 'text-violet-600'
                }`}>
                  Editor Feedback Dashboard
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full transition-all duration-300 hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              } shadow-lg hover:shadow-xl`}
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Filters and Search */}
        <div className={`p-6 rounded-lg mb-8 ${
          darkMode ? 'bg-gray-800/30' : 'bg-white/60'
        } backdrop-blur-sm border-2 ${
          darkMode ? 'border-pink-500/30' : 'border-violet-500/30'
        } shadow-lg`}>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="text"
                  placeholder="Search articles or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-full border-2 transition-all ${
                    darkMode 
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500' 
                      : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-violet-500'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className={`px-4 py-3 rounded-full border-2 font-semibold transition-all ${
                  darkMode 
                    ? 'bg-gray-700/50 border-gray-600 text-white focus:border-pink-500' 
                    : 'bg-white/80 border-gray-300 text-gray-900 focus:border-violet-500'
                } focus:outline-none`}
              >
                <option value="all">All Status</option>
                <option value="pending_review">Pending Review</option>
                <option value="needs_revision">Needs Revision</option>
                <option value="approved">Approved</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'PENDING', count: '12', icon: Clock, color: 'yellow' },
            { label: 'IN REVIEW', count: '8', icon: Eye, color: 'blue' },
            { label: 'NEEDS REVISION', count: '5', icon: AlertCircle, color: 'red' },
            { label: 'APPROVED', count: '23', icon: CheckCircle, color: 'green' }
          ].map((stat, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              darkMode ? 'bg-gray-800/40 border-pink-500/30' : 'bg-white/70 border-violet-500/30'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-bold uppercase tracking-wide ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </p>
                  <p className={`text-3xl font-black ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.count}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${
                  stat.color === 'yellow' ? (darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600') :
                  stat.color === 'blue' ? (darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600') :
                  stat.color === 'red' ? (darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600') :
                  (darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600')
                }`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className={`rounded-lg border-2 shadow-lg transition-all duration-300 hover:shadow-xl ${
              darkMode ? 'bg-gray-800/40 border-pink-500/30' : 'bg-white/70 border-violet-500/30'
            }`}>
              {/* Article Header */}
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${getStatusColor(article.status)}`}>
                        {article.status.replace('_', ' ')}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {article.category}
                      </span>
                      {article.priority === 'high' && (
                        <div className="flex items-center gap-1">
                          <Star className={`w-4 h-4 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                          <span className={`text-xs font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                            HIGH PRIORITY
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {article.title}
                    </h3>
                    <div className={`flex items-center gap-4 text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span className="font-semibold">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.submitted}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Hash className="w-4 h-4" />
                        <span>{article.wordCount} words</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                      darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      <MessageSquare className="w-4 h-4" />
                      <span className="font-semibold">{article.feedbackCount}</span>
                    </div>
                    <button
                      onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                      className={`p-3 rounded-full transition-all duration-300 hover:-translate-y-1 ${
                        darkMode 
                          ? 'bg-pink-500/20 hover:bg-pink-500/30 text-pink-400' 
                          : 'bg-violet-500/20 hover:bg-violet-500/30 text-violet-600'
                      } shadow-lg hover:shadow-xl`}
                    >
                      {expandedArticle === article.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Feedback Section */}
              {expandedArticle === article.id && (
                <div className={`border-t-2 ${
                  darkMode ? 'border-pink-500/30 bg-gray-800/60' : 'border-violet-500/30 bg-gray-50/80'
                } p-6`}>
                  <h4 className={`text-lg font-bold uppercase tracking-wide mb-6 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Editor Feedback Threads
                  </h4>
                  
                  <div className="space-y-4 mb-6">
                    {article.threads.map((thread) => (
                      <div key={thread.id} className={`p-4 rounded-lg border-2 ${
                        darkMode ? 'bg-gray-700/30 border-gray-600/30' : 'bg-white/60 border-gray-200'
                      } shadow-md`}>
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-full ${getThreadTypeColor(thread.type)}`}>
                            {getThreadTypeIcon(thread.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {thread.editor}
                              </span>
                              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {thread.timestamp}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${
                                thread.status === 'resolved' 
                                  ? (darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700')
                                  : (darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-700')
                              }`}>
                                {thread.status}
                              </span>
                            </div>
                            <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {thread.content}
                            </p>
                            
                            {/* Replies */}
                            {thread.replies && thread.replies.length > 0 && (
                              <div className={`pl-4 border-l-2 space-y-2 ${
                                darkMode ? 'border-pink-500/30' : 'border-violet-500/30'
                              }`}>
                                {thread.replies.map((reply, idx) => (
                                  <div key={idx} className={`p-3 rounded ${
                                    darkMode ? 'bg-gray-600/30' : 'bg-gray-100/60'
                                  }`}>
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className={`text-sm font-semibold ${
                                        darkMode ? 'text-pink-400' : 'text-violet-600'
                                      }`}>
                                        {reply.author}
                                      </span>
                                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {reply.timestamp}
                                      </span>
                                    </div>
                                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                      {reply.content}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add New Feedback */}
                  <div className={`p-4 rounded-lg border-2 border-dashed ${
                    darkMode ? 'border-pink-500/50 bg-gray-700/20' : 'border-violet-500/50 bg-violet-50/50'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${
                        darkMode ? 'bg-pink-500/20 text-pink-400' : 'bg-violet-500/20 text-violet-600'
                      }`}>
                        <Plus className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <textarea
                          ref={textareaRef}
                          value={newFeedback}
                          onChange={(e) => setNewFeedback(e.target.value)}
                          placeholder="Add your feedback or reply to this thread..."
                          className={`w-full p-3 rounded-lg border-2 transition-all resize-none ${
                            darkMode 
                              ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500' 
                              : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-violet-500'
                          } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                          rows={3}
                        />
                        <div className="flex justify-end mt-3">
                          <button
                            onClick={() => handleAddFeedback(article.id)}
                            disabled={!newFeedback.trim()}
                            className={`px-6 py-2 rounded-full font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${
                              darkMode 
                                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-400 hover:to-purple-500' 
                                : 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-400 hover:to-purple-500'
                            } shadow-lg hover:shadow-xl`}
                          >
                            <Send className="w-4 h-4 inline mr-2" />
                            Send Feedback
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorFeedbackDashboard;