'use client'
import React, { useState } from 'react';
import { 
  Moon, 
  Sun, 
  MessageCircle, 
  Heart, 
  Flag, 
  Pin, 
  Reply, 
  Eye, 
  TrendingUp, 
  Edit3, 
  BarChart3,
  Star,
  ThumbsUp,
  AlertTriangle,
  ChevronDown,
  Filter,
  Search
} from 'lucide-react';

export default function MangaNewsDashboard() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(0);
  const [pinnedComment, setPinnedComment] = useState(null);

  const articles = [
    {
      id: 1,
      title: "ONE PIECE CHAPTER 1095 BREAKS RECORDS",
      views: 45230,
      comments: 127,
      likes: 892,
      status: "published",
      category: "Manga"
    },
    {
      id: 2,
      title: "Attack on Titan Final Season Reactions",
      views: 32100,
      comments: 89,
      likes: 654,
      status: "draft",
      category: "Anime"
    },
    {
      id: 3,
      title: "Demon Slayer Movie Box Office Update",
      views: 28500,
      comments: 156,
      likes: 723,
      status: "published",
      category: "News"
    }
  ];

  const comments = [
    {
      id: 1,
      author: "OtakuMaster99",
      content: "This chapter was absolutely INSANE! Oda really outdid himself with this one. The plot twists just keep coming!",
      likes: 23,
      flagged: false,
      time: "2 hours ago",
      avatar: "🔥"
    },
    {
      id: 2,
      author: "AnimeFan2024",
      content: "I've been following One Piece for 15 years and this might be the best chapter yet. The emotional depth is incredible.",
      likes: 18,
      flagged: false,
      time: "3 hours ago",
      avatar: "⚡"
    },
    {
      id: 3,
      author: "TrollAccount123",
      content: "This is trash, overrated series. Nobody cares about this anymore.",
      likes: 2,
      flagged: true,
      time: "1 hour ago",
      avatar: "💀"
    },
    {
      id: 4,
      author: "MangaReviewer",
      content: "The artwork in this chapter is phenomenal. Oda's attention to detail in the fight scenes is unmatched.",
      likes: 31,
      flagged: false,
      time: "4 hours ago",
      avatar: "🎨"
    },
    {
      id: 5,
      author: "TheoryKing",
      content: "CALLING IT NOW: This connects to the Void Century revelation from chapter 1081. The pieces are finally coming together!",
      likes: 15,
      flagged: false,
      time: "5 hours ago",
      avatar: "🧠"
    }
  ];

  const stats = {
    totalViews: 105830,
    totalComments: 372,
    totalLikes: 2269,
    engagement: 94.2
  };

  const bgClass = darkMode 
    ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800' 
    : 'bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50';
  
  const cardClass = darkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-purple-200';
  
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const mutedClass = darkMode ? 'text-gray-400' : 'text-gray-600';
  const accentClass = darkMode ? 'text-pink-400' : 'text-violet-600';
  const buttonClass = darkMode 
    ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400' 
    : 'bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-400 hover:to-purple-400';

  return (
    <div className={`min-h-screen ${bgClass} transition-all duration-500`}>
      {/* Header */}
      <header className={`${cardClass} border-b-4 ${darkMode ? 'border-pink-500' : 'border-violet-500'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full ${buttonClass} flex items-center justify-center shadow-lg transform rotate-12`}>
                <span className="text-2xl font-black text-white">M</span>
              </div>
              <div>
                <h1 className={`text-2xl font-black ${textClass} uppercase tracking-wider`}>
                  MANGA<span className={accentClass}>NEWS</span>
                </h1>
                <p className={`${mutedClass} text-sm font-semibold uppercase`}>Editor Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className={`px-4 py-2 rounded-full ${cardClass} border-2 ${darkMode ? 'border-pink-500' : 'border-violet-500'} shadow-lg`}>
                <span className={`${accentClass} font-bold text-sm uppercase`}>JOURNALIST MODE</span>
              </div>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-full ${buttonClass} text-white shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-110`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Views", value: stats.totalViews.toLocaleString(), icon: Eye, color: "blue" },
            { label: "Comments", value: stats.totalComments, icon: MessageCircle, color: "green" },
            { label: "Total Likes", value: stats.totalLikes.toLocaleString(), icon: Heart, color: "red" },
            { label: "Engagement", value: `${stats.engagement}%`, icon: TrendingUp, color: "purple" }
          ].map((stat, idx) => (
            <div key={idx} className={`${cardClass} border-2 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-1`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${mutedClass} text-sm font-bold uppercase tracking-wide`}>{stat.label}</p>
                  <p className={`${textClass} text-3xl font-black mt-2`}>{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-gradient-to-r ${
                  stat.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                  stat.color === 'green' ? 'from-green-500 to-emerald-500' :
                  stat.color === 'red' ? 'from-red-500 to-pink-500' :
                  'from-purple-500 to-violet-500'
                } shadow-lg animate-pulse`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles List */}
          <div className={`${cardClass} border-2 rounded-lg shadow-lg overflow-hidden`}>
            <div className={`p-6 border-b-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-purple-200 bg-purple-50'}`}>
              <h2 className={`text-xl font-black ${textClass} uppercase tracking-wider flex items-center`}>
                <Edit3 className="w-6 h-6 mr-3" />
                My Articles
              </h2>
            </div>
            
            <div className="space-y-0">
              {articles.map((article, idx) => (
                <div 
                  key={article.id}
                  onClick={() => setSelectedArticle(idx)}
                  className={`p-4 cursor-pointer transition-all duration-300 hover:bg-opacity-50 border-l-4 ${
                    selectedArticle === idx 
                      ? `${darkMode ? 'bg-pink-900 border-pink-500' : 'bg-violet-100 border-violet-500'}` 
                      : `hover:${darkMode ? 'bg-gray-700' : 'bg-purple-50'} ${darkMode ? 'border-gray-600' : 'border-purple-200'}`
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className={`font-bold ${textClass} text-sm uppercase tracking-wide mb-2`}>
                        {article.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className={`${mutedClass} flex items-center`}>
                          <Eye className="w-3 h-3 mr-1" />
                          {article.views.toLocaleString()}
                        </span>
                        <span className={`${mutedClass} flex items-center`}>
                          <MessageCircle className="w-3 h-3 mr-1" />
                          {article.comments}
                        </span>
                        <span className={`${mutedClass} flex items-center`}>
                          <Heart className="w-3 h-3 mr-1" />
                          {article.likes}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        article.status === 'published' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-500 text-black'
                      }`}>
                        {article.status.toUpperCase()}
                      </span>
                      <span className={`${accentClass} text-xs font-bold`}>{article.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="lg:col-span-2">
            <div className={`${cardClass} border-2 rounded-lg shadow-lg overflow-hidden`}>
              <div className={`p-6 border-b-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-purple-200 bg-purple-50'}`}>
                <div className="flex items-center justify-between">
                  <h2 className={`text-xl font-black ${textClass} uppercase tracking-wider flex items-center`}>
                    <MessageCircle className="w-6 h-6 mr-3" />
                    💬 Comments on My Articles
                  </h2>
                  <div className="flex items-center space-x-3">
                    <button className={`px-4 py-2 rounded-full ${buttonClass} text-white text-sm font-bold shadow-lg transform transition-all duration-300 hover:-translate-y-1`}>
                      <Filter className="w-4 h-4 mr-2 inline" />
                      FILTER
                    </button>
                    <button className={`p-2 rounded-full ${cardClass} border-2 ${darkMode ? 'border-pink-500' : 'border-violet-500'} shadow-lg transform transition-all duration-300 hover:-translate-y-1`}>
                      <Search className={`w-4 h-4 ${accentClass}`} />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center space-x-4 text-sm">
                  <span className={`${mutedClass} font-semibold`}>
                    Article: <span className={`${accentClass} font-bold uppercase`}>{articles[selectedArticle].title}</span>
                  </span>
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {comments.map((comment) => (
                  <div key={comment.id} className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-purple-100'} hover:bg-opacity-50 transition-all duration-300 ${
                    comment.flagged ? (darkMode ? 'bg-red-900 bg-opacity-20' : 'bg-red-50') : ''
                  } ${
                    pinnedComment === comment.id ? (darkMode ? 'bg-pink-900 bg-opacity-30' : 'bg-violet-100') : ''
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">
                        {comment.avatar}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <span className={`font-bold ${textClass} text-sm`}>{comment.author}</span>
                            <span className={`${mutedClass} text-xs`}>{comment.time}</span>
                            {pinnedComment === comment.id && (
                              <div className={`px-2 py-1 rounded-full ${buttonClass} text-white text-xs font-bold animate-pulse`}>
                                PINNED
                              </div>
                            )}
                            {comment.flagged && (
                              <div className="px-2 py-1 rounded-full bg-red-500 text-white text-xs font-bold animate-bounce">
                                FLAGGED
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <p className={`${textClass} text-sm mb-3 leading-relaxed`}>{comment.content}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button className={`flex items-center space-x-1 ${mutedClass} hover:${accentClass} transition-colors text-xs font-semibold`}>
                              <ThumbsUp className="w-3 h-3" />
                              <span>{comment.likes}</span>
                            </button>
                            
                            <button className={`flex items-center space-x-1 ${mutedClass} hover:${accentClass} transition-colors text-xs font-semibold uppercase`}>
                              <Reply className="w-3 h-3" />
                              <span>Reply as Author</span>
                            </button>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => setPinnedComment(pinnedComment === comment.id ? null : comment.id)}
                              className={`p-1 rounded ${pinnedComment === comment.id ? buttonClass : `${mutedClass} hover:${accentClass}`} transition-all duration-300 hover:-translate-y-1`}
                            >
                              <Pin className="w-3 h-3" />
                            </button>
                            
                            <button className={`p-1 rounded ${comment.flagged ? 'text-red-500' : `${mutedClass} hover:text-red-500`} transition-all duration-300 hover:-translate-y-1`}>
                              <Flag className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Footer */}
              <div className={`p-4 border-t-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-purple-200 bg-purple-50'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`${mutedClass} font-semibold`}>
                      See all comments • Reply as author • Pin top comment
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className={`px-4 py-2 rounded-full ${buttonClass} text-white font-bold text-sm shadow-lg transform transition-all duration-300 hover:-translate-y-1`}>
                      SEE ALL COMMENTS
                    </button>
                    <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-pink-500' : 'bg-violet-500'} animate-pulse`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}