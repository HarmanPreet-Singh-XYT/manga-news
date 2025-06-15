'use client'
import React, { useState } from 'react';
import { Calendar, Clock, Edit3, Trash2, Eye, Sun, Moon, Plus, Filter, Search } from 'lucide-react';

const ScheduledPostsDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [scheduledPosts, setScheduledPosts] = useState([
    {
      id: 1,
      title: "Attack on Titan Final Season Part 4 Release Date Confirmed",
      category: "Anime",
      scheduledDate: "2025-06-20",
      scheduledTime: "14:00",
      status: "scheduled",
      author: "Sarah Kim",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      priority: "high"
    },
    {
      id: 2,
      title: "One Piece Chapter 1115: Luffy's New Power Revealed",
      category: "Manga",
      scheduledDate: "2025-06-18",
      scheduledTime: "09:30",
      status: "scheduled",
      author: "Mike Chen",
      thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=200&fit=crop",
      priority: "medium"
    },
    {
      id: 3,
      title: "Demon Slayer Season 4 Studio Change Announcement",
      category: "News",
      scheduledDate: "2025-06-22",
      scheduledTime: "16:45",
      status: "draft",
      author: "Emma Rodriguez",
      thumbnail: "https://images.unsplash.com/photo-1606918801925-e2c914c4b503?w=300&h=200&fit=crop",
      priority: "high"
    },
    {
      id: 4,
      title: "Top 10 Upcoming Anime Adaptations in 2025",
      category: "Reviews",
      scheduledDate: "2025-06-25",
      scheduledTime: "12:00",
      status: "scheduled",
      author: "David Park",
      thumbnail: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=300&h=200&fit=crop",
      priority: "low"
    },
    {
      id: 5,
      title: "Jujutsu Kaisen Movie Box Office Breaks Records",
      category: "News",
      scheduledDate: "2025-06-19",
      scheduledTime: "11:15",
      status: "scheduled",
      author: "Lisa Wang",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      priority: "medium"
    }
  ]);

  const [editingPost, setEditingPost] = useState(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleSaveEdit = (updatedPost) => {
    setScheduledPosts(posts => 
      posts.map(post => post.id === updatedPost.id ? updatedPost : post)
    );
    setEditingPost(null);
  };

  const handleCancelPost = (postId) => {
    setScheduledPosts(posts => posts.filter(post => post.id !== postId));
  };

  const filteredPosts = scheduledPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || post.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const themeClasses = isDarkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-blue-50 text-gray-900';

  const cardClasses = isDarkMode
    ? 'bg-gray-800 border-pink-500/20 hover:border-pink-500/40'
    : 'bg-white border-violet-200 hover:border-violet-400';

  const EditModal = ({ post, onSave, onClose }) => {
    const [editData, setEditData] = useState({
      title: post.title,
      scheduledDate: post.scheduledDate,
      scheduledTime: post.scheduledTime,
      category: post.category,
      priority: post.priority
    });

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className={`w-full max-w-2xl rounded-lg shadow-2xl border-2 p-6 ${
          isDarkMode 
            ? 'bg-gray-800 border-pink-500/30' 
            : 'bg-white border-violet-300'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-2xl font-black uppercase tracking-wide ${
              isDarkMode ? 'text-pink-400' : 'text-violet-600'
            }`}>
              EDIT SCHEDULED POST
            </h3>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 animate-pulse"></div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold uppercase mb-2">Title</label>
              <input
                type="text"
                value={editData.title}
                onChange={(e) => setEditData({...editData, title: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg border-2 font-medium ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 focus:border-pink-500 text-white' 
                    : 'bg-gray-50 border-gray-200 focus:border-violet-500'
                }`}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Date</label>
                <input
                  type="date"
                  value={editData.scheduledDate}
                  onChange={(e) => setEditData({...editData, scheduledDate: e.target.value})}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-medium ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 focus:border-pink-500 text-white' 
                      : 'bg-gray-50 border-gray-200 focus:border-violet-500'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Time</label>
                <input
                  type="time"
                  value={editData.scheduledTime}
                  onChange={(e) => setEditData({...editData, scheduledTime: e.target.value})}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-medium ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 focus:border-pink-500 text-white' 
                      : 'bg-gray-50 border-gray-200 focus:border-violet-500'
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Category</label>
                <select
                  value={editData.category}
                  onChange={(e) => setEditData({...editData, category: e.target.value})}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-medium ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 focus:border-pink-500 text-white' 
                      : 'bg-gray-50 border-gray-200 focus:border-violet-500'
                  }`}
                >
                  <option value="Anime">Anime</option>
                  <option value="Manga">Manga</option>
                  <option value="News">News</option>
                  <option value="Reviews">Reviews</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Priority</label>
                <select
                  value={editData.priority}
                  onChange={(e) => setEditData({...editData, priority: e.target.value})}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-medium ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 focus:border-pink-500 text-white' 
                      : 'bg-gray-50 border-gray-200 focus:border-violet-500'
                  }`}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => onSave({...post, ...editData})}
              className={`flex-1 px-6 py-3 rounded-full font-black uppercase text-white shadow-lg hover:-translate-y-1 transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500' 
                  : 'bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-400 hover:to-violet-500'
              }`}
            >
              Save Changes
            </button>
            <button
              onClick={onClose}
              className={`px-6 py-3 rounded-full font-bold border-2 hover:-translate-y-1 transition-all duration-200 ${
                isDarkMode 
                  ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                  : 'border-gray-300 text-gray-600 hover:border-gray-400'
              }`}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Header */}
      <div className={`border-b-4 ${isDarkMode ? 'border-pink-500' : 'border-violet-500'} sticky top-0 z-40 backdrop-blur-md ${
        isDarkMode ? 'bg-gray-900/90' : 'bg-blue-50/90'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${
              isDarkMode ? 'from-pink-500 to-pink-600' : 'from-violet-500 to-violet-600'
            } flex items-center justify-center shadow-lg`}>
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black uppercase tracking-wide">
                MANGA ANIME NEWS
              </h1>
              <p className={`text-sm font-bold ${isDarkMode ? 'text-pink-400' : 'text-violet-600'}`}>
                SCHEDULED POSTS DASHBOARD
              </p>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full border-2 hover:-translate-y-1 transition-all duration-200 shadow-lg ${
              isDarkMode 
                ? 'border-pink-500/30 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20' 
                : 'border-violet-300 bg-violet-100 text-violet-600 hover:bg-violet-200'
            }`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`pl-10 pr-4 py-3 rounded-lg border-2 font-medium min-w-64 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 focus:border-pink-500 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 focus:border-violet-500 placeholder-gray-500'
                }`}
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={`px-4 py-3 rounded-lg border-2 font-medium ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 focus:border-pink-500 text-white' 
                  : 'bg-white border-gray-200 focus:border-violet-500'
              }`}
            >
              <option value="all">All Status</option>
              <option value="scheduled">Scheduled</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          <button className={`px-6 py-3 rounded-full font-black uppercase text-white shadow-lg hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500' 
              : 'bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-400 hover:to-violet-500'
          }`}>
            <Plus className="w-4 h-4" />
            New Post
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Scheduled', value: filteredPosts.filter(p => p.status === 'scheduled').length, color: 'from-green-500 to-emerald-500' },
            { label: 'Drafts', value: filteredPosts.filter(p => p.status === 'draft').length, color: 'from-yellow-500 to-orange-500' },
            { label: 'High Priority', value: filteredPosts.filter(p => p.priority === 'high').length, color: 'from-red-500 to-pink-500' }
          ].map((stat, i) => (
            <div key={i} className={`rounded-lg border-2 p-4 shadow-lg hover:-translate-y-1 transition-all duration-200 ${cardClasses}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase opacity-80">{stat.label}</p>
                  <p className="text-2xl font-black">{stat.value}</p>
                </div>
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${stat.color} animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className={`rounded-lg border-2 overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-200 ${cardClasses}`}
            >
              <div className="relative">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold text-white ${
                    post.status === 'scheduled' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}>
                    {post.status.toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold text-white ${
                    post.priority === 'high' ? 'bg-red-500' : 
                    post.priority === 'medium' ? 'bg-orange-500' : 'bg-blue-500'
                  }`}>
                    {post.priority.toUpperCase()}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                    isDarkMode ? 'from-pink-500 to-pink-600' : 'from-violet-500 to-violet-600'
                  } flex items-center justify-center text-white font-bold text-xs shadow-lg`}>
                    {post.category[0]}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3 text-sm opacity-80">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">
                    {new Date(`${post.scheduledDate}T${post.scheduledTime}`).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>

                <p className="text-sm opacity-70 mb-4">
                  By <span className="font-semibold">{post.author}</span>
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className={`flex-1 px-4 py-2 rounded-full font-bold text-sm border-2 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 ${
                      isDarkMode 
                        ? 'border-pink-500/30 text-pink-400 hover:bg-pink-500/10' 
                        : 'border-violet-300 text-violet-600 hover:bg-violet-50'
                    }`}
                  >
                    <Edit3 className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleCancelPost(post.id)}
                    className="px-4 py-2 rounded-full font-bold text-sm border-2 border-red-500/30 text-red-400 hover:bg-red-500/10 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button className={`px-4 py-2 rounded-full font-bold text-sm border-2 hover:-translate-y-0.5 transition-all duration-200 ${
                    isDarkMode 
                      ? 'border-gray-600 text-gray-400 hover:bg-gray-700' 
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}>
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
              isDarkMode ? 'from-pink-500 to-pink-600' : 'from-violet-500 to-violet-600'
            } flex items-center justify-center mx-auto mb-4 shadow-lg`}>
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-black uppercase mb-2">No Posts Found</h3>
            <p className="opacity-70">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingPost && (
        <EditModal
          post={editingPost}
          onSave={handleSaveEdit}
          onClose={() => setEditingPost(null)}
        />
      )}
    </div>
  );
};

export default ScheduledPostsDashboard;