'use client'
import React, { useState, useMemo } from 'react';
import { 
  Moon, Sun, Search, Filter, Eye, Check, X, Star, Edit, 
  Clock, Calendar, User, Tag, FileText, TrendingUp, Users,
  Activity, Zap, Settings, Bell, ChevronDown, MoreHorizontal,
  BookOpen, Newspaper, Heart, MessageCircle, Share2, Play
} from 'lucide-react';

const AnimeNewsAdmin = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [authorFilter, setAuthorFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedArticles, setSelectedArticles] = useState([]);

  // Mock data for articles
  const articles = [
    {
      id: 1,
      title: "Attack on Titan Final Season: Studio WIT Returns for Epic Finale",
      slug: "attack-titan-final-season-wit-studio",
      author: "Sakura Tanaka",
      category: "anime",
      tags: ["Attack on Titan", "Studio WIT", "Final Season"],
      status: "published",
      featured: true,
      publishDate: "2025-06-14",
      views: 15420,
      likes: 892,
      comments: 156,
      lastEdited: "2025-06-14T08:30:00Z",
      thumbnail: "https://via.placeholder.com/200x120/ff6b9d/ffffff?text=AOT"
    },
    {
      id: 2,
      title: "Demon Slayer Movie Breaks Box Office Records Worldwide",
      slug: "demon-slayer-movie-box-office-records",
      author: "Hiroshi Yamamoto",
      category: "manga",
      tags: ["Demon Slayer", "Box Office", "Movie"],
      status: "pending",
      featured: false,
      publishDate: "2025-06-15",
      views: 0,
      likes: 0,
      comments: 0,
      lastEdited: "2025-06-15T10:15:00Z",
      thumbnail: "https://via.placeholder.com/200x120/c44569/ffffff?text=DS"
    },
    {
      id: 3,
      title: "One Piece Chapter 1087: Luffy's New Power Revealed",
      slug: "one-piece-chapter-1087-luffy-power",
      author: "Mei Nakamura",
      category: "manga",
      tags: ["One Piece", "Manga", "Luffy"],
      status: "draft",
      featured: false,
      publishDate: "2025-06-16",
      views: 0,
      likes: 0,
      comments: 0,
      lastEdited: "2025-06-15T14:20:00Z",
      thumbnail: "https://via.placeholder.com/200x120/f8b500/ffffff?text=OP"
    },
    {
      id: 4,
      title: "Studio Ghibli Announces New Film for 2026 Release",
      slug: "studio-ghibli-new-film-2026",
      author: "Akira Sato",
      category: "anime",
      tags: ["Studio Ghibli", "New Release", "2026"],
      status: "published",
      featured: true,
      publishDate: "2025-06-13",
      views: 23780,
      likes: 1456,
      comments: 289,
      lastEdited: "2025-06-13T16:45:00Z",
      thumbnail: "https://via.placeholder.com/200x120/6c5ce7/ffffff?text=GHIBLI"
    },
    {
      id: 5,
      title: "Jujutsu Kaisen Season 3: Everything We Know So Far",
      slug: "jujutsu-kaisen-season-3-news",
      author: "Yuki Tanaka",
      category: "anime",
      tags: ["Jujutsu Kaisen", "Season 3", "MAPPA"],
      status: "rejected",
      featured: false,
      publishDate: "2025-06-12",
      views: 0,
      likes: 0,
      comments: 0,
      lastEdited: "2025-06-12T11:30:00Z",
      thumbnail: "https://via.placeholder.com/200x120/a55eea/ffffff?text=JJK"
    }
  ];

  // Stats data
  const stats = [
    { title: "TOTAL ARTICLES", value: "1,247", change: "+12%", icon: FileText, color: "text-pink-400" },
    { title: "PENDING REVIEW", value: "23", change: "+5", icon: Clock, color: "text-yellow-400" },
    { title: "PUBLISHED TODAY", value: "8", change: "+3", icon: TrendingUp, color: "text-green-400" },
    { title: "TOTAL VIEWS", value: "892K", change: "+18%", icon: Eye, color: "text-purple-400" }
  ];

  // Filter articles based on search and filters
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = statusFilter === 'all' || article.status === statusFilter;
      const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter;
      const matchesAuthor = authorFilter === 'all' || article.author === authorFilter;
      
      return matchesSearch && matchesStatus && matchesCategory && matchesAuthor;
    });
  }, [searchTerm, statusFilter, categoryFilter, authorFilter, articles]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'published': return 'bg-green-400';
      case 'pending': return 'bg-yellow-400 animate-pulse';
      case 'draft': return 'bg-gray-400';
      case 'rejected': return 'bg-red-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const handleBulkAction = (action) => {
    console.log(`Bulk ${action} for articles:`, selectedArticles);
    setSelectedArticles([]);
  };

  const handleArticleAction = (articleId, action) => {
    console.log(`${action} article ${articleId}`);
  };

  const toggleArticleSelection = (articleId) => {
    setSelectedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b-2 ${
        darkMode 
          ? 'bg-gray-900/90 border-pink-500' 
          : 'bg-blue-50/90 border-violet-500'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'
              } flex items-center justify-center`}>
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black uppercase tracking-wide" 
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  ANIME NEWS HQ
                </h1>
                <p className="text-sm font-bold uppercase tracking-wide opacity-70">
                  ADMIN DASHBOARD
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
              }`}>
                <Bell className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg border-2 p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg ${
              darkMode 
                ? 'bg-gray-800 border-pink-500' 
                : 'bg-white border-violet-500'
            }`}>
              {/* Decorative gradient orb */}
              <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full blur-xl opacity-20 ${
                darkMode ? 'bg-pink-500' : 'bg-violet-500'
              }`}></div>
              
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color} transition-transform duration-300 hover:rotate-12`} />
                <span className="text-sm font-bold uppercase tracking-wide opacity-70">
                  {stat.change}
                </span>
              </div>
              
              <div>
                <p className="text-3xl font-black mb-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  {stat.value}
                </p>
                <p className="text-sm font-bold uppercase tracking-wide opacity-70">
                  {stat.title}
                </p>
              </div>
              
              {/* Bottom gradient bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Article Management Section */}
        <div className={`rounded-lg border-2 p-6 shadow-lg ${
          darkMode 
            ? 'bg-gray-800 border-pink-500' 
            : 'bg-white border-violet-500'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black uppercase tracking-wide" 
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              📰 ARTICLE MANAGEMENT
            </h2>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-2 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 bg-gradient-to-r ${
                darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'
              } text-white shadow-lg`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              FILTERS
            </button>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4 mb-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
              <input
                type="text"
                placeholder="Search by title, slug, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 font-bold uppercase tracking-wide placeholder-opacity-50 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>

            {/* Filter Row */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className={`p-3 rounded-lg border-2 font-bold uppercase tracking-wide ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="all">ALL STATUS</option>
                  <option value="published">PUBLISHED</option>
                  <option value="pending">PENDING</option>
                  <option value="draft">DRAFT</option>
                  <option value="rejected">REJECTED</option>
                </select>

                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className={`p-3 rounded-lg border-2 font-bold uppercase tracking-wide ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="all">ALL CATEGORIES</option>
                  <option value="anime">ANIME</option>
                  <option value="manga">MANGA</option>
                  <option value="gaming">GAMING</option>
                  <option value="news">NEWS</option>
                </select>

                <select
                  value={authorFilter}
                  onChange={(e) => setAuthorFilter(e.target.value)}
                  className={`p-3 rounded-lg border-2 font-bold uppercase tracking-wide ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="all">ALL AUTHORS</option>
                  <option value="Sakura Tanaka">SAKURA TANAKA</option>
                  <option value="Hiroshi Yamamoto">HIROSHI YAMAMOTO</option>
                  <option value="Mei Nakamura">MEI NAKAMURA</option>
                  <option value="Akira Sato">AKIRA SATO</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`p-3 rounded-lg border-2 font-bold uppercase tracking-wide ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="date">SORT BY DATE</option>
                  <option value="views">SORT BY VIEWS</option>
                  <option value="likes">SORT BY LIKES</option>
                  <option value="title">SORT BY TITLE</option>
                </select>
              </div>
            )}
          </div>

          {/* Bulk Actions */}
          {selectedArticles.length > 0 && (
            <div className={`rounded-lg border-2 p-4 mb-6 ${
              darkMode ? 'bg-gray-700 border-yellow-500' : 'bg-yellow-50 border-yellow-500'
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-bold uppercase tracking-wide">
                  {selectedArticles.length} ARTICLES SELECTED
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleBulkAction('approve')}
                    className="px-3 py-1 bg-green-500 text-white rounded font-bold uppercase text-sm hover:bg-green-600 transition-colors"
                  >
                    APPROVE
                  </button>
                  <button
                    onClick={() => handleBulkAction('reject')}
                    className="px-3 py-1 bg-red-500 text-white rounded font-bold uppercase text-sm hover:bg-red-600 transition-colors"
                  >
                    REJECT
                  </button>
                  <button
                    onClick={() => handleBulkAction('feature')}
                    className="px-3 py-1 bg-purple-500 text-white rounded font-bold uppercase text-sm hover:bg-purple-600 transition-colors"
                  >
                    FEATURE
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="space-y-4">
            {filteredArticles.map((article) => (
              <div key={article.id} className={`rounded-lg border-2 p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 hover:border-pink-500' 
                  : 'bg-gray-50 border-gray-300 hover:border-violet-500'
              } ${selectedArticles.includes(article.id) ? (darkMode ? 'ring-2 ring-pink-500' : 'ring-2 ring-violet-500') : ''}`}>
                
                <div className="flex items-start space-x-6">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedArticles.includes(article.id)}
                    onChange={() => toggleArticleSelection(article.id)}
                    className="mt-2 w-5 h-5 rounded"
                  />

                  {/* Thumbnail */}
                  <div className="flex-shrink-0">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-20 h-12 object-cover rounded-lg border-2 border-gray-400"
                    />
                  </div>

                  {/* Article Info */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-black uppercase tracking-wide">
                            {article.title}
                          </h3>
                          {article.featured && (
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-sm font-bold uppercase tracking-wide opacity-70">
                            <User className="w-4 h-4 inline mr-1" />
                            {article.author}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                            darkMode ? 'bg-gray-600' : 'bg-gray-200'
                          }`}>
                            {article.category}
                          </span>
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(article.status)}`}></div>
                          <span className="text-xs font-bold uppercase tracking-wide opacity-70">
                            {getStatusText(article.status)}
                          </span>
                        </div>

                        <div className="flex items-center space-x-4 text-sm opacity-70">
                          <span><Eye className="w-4 h-4 inline mr-1" />{article.views.toLocaleString()}</span>
                          <span><Heart className="w-4 h-4 inline mr-1" />{article.likes}</span>
                          <span><MessageCircle className="w-4 h-4 inline mr-1" />{article.comments}</span>
                          <span><Calendar className="w-4 h-4 inline mr-1" />{article.publishDate}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleArticleAction(article.id, 'preview')}
                          className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                            darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                          title="Preview"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {article.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleArticleAction(article.id, 'approve')}
                              className="p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-110"
                              title="Approve"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleArticleAction(article.id, 'reject')}
                              className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-all duration-300 hover:scale-110"
                              title="Reject"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        )}

                        <button
                          onClick={() => handleArticleAction(article.id, 'feature')}
                          className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                            article.featured 
                              ? 'bg-yellow-500 text-white' 
                              : (darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300')
                          }`}
                          title="Toggle Feature"
                        >
                          <Star className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleArticleAction(article.id, 'edit')}
                          className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                            darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleArticleAction(article.id, 'schedule')}
                          className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                            darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                          title="Schedule"
                        >
                          <Clock className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleArticleAction(article.id, 'more')}
                          className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                            darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                          title="More Actions"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span key={index} className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                          darkMode ? 'bg-pink-500/20 text-pink-400' : 'bg-violet-500/20 text-violet-600'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom gradient bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'
                } opacity-0 hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 mx-auto opacity-50 mb-4" />
              <p className="text-xl font-black uppercase tracking-wide opacity-70">
                NO ARTICLES FOUND
              </p>
              <p className="text-sm font-bold uppercase tracking-wide opacity-50 mt-2">
                TRY ADJUSTING YOUR SEARCH OR FILTERS
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeNewsAdmin;