'use client'
import React, { useState } from 'react';
import { Moon, Sun, Bookmark, ExternalLink, X, Folder, Clock, Calendar, Filter, Search, Star, Eye } from 'lucide-react';

const BookmarksDashboard = () => {
  const [isDark, setIsDark] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  // Sample bookmark data
  const [bookmarks, setBookmarks] = useState([
    {
      id: 1,
      title: "One Piece Chapter 1098: Revolutionary Army's Secret Mission Revealed",
      excerpt: "Oda drops another bombshell as Dragon's past connections to the World Government are finally unveiled in this action-packed chapter...",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "Manga",
      dateSaved: "2024-06-14",
      readTime: "5 min",
      source: "Weekly Shonen Jump",
      isRead: false
    },
    {
      id: 2,
      title: "Attack on Titan Final Season: Studio WIT's Animation Breakdown",
      excerpt: "An in-depth analysis of the incredible animation techniques used in the final episodes of the legendary series...",
      thumbnail: "https://images.unsplash.com/photo-1606115331504-637ad5e3e8ba?w=400&h=300&fit=crop",
      category: "Anime",
      dateSaved: "2024-06-13",
      readTime: "8 min",
      source: "AnimeNews Network",
      isRead: true
    },
    {
      id: 3,
      title: "Demon Slayer: Hashira Training Arc - New Character Designs Leaked",
      excerpt: "Exclusive first look at the upcoming arc featuring never-before-seen character designs and animation sequences...",
      thumbnail: "https://images.unsplash.com/photo-1578662015141-8cf2e2dfa4d7?w=400&h=300&fit=crop",
      category: "News",
      dateSaved: "2024-06-12",
      readTime: "3 min",
      source: "Crunchyroll News",
      isRead: false
    },
    {
      id: 4,
      title: "My Hero Academia Season 8: Production Update & Release Window",
      excerpt: "Studio Bones confirms production timeline for the highly anticipated eighth season with exclusive behind-the-scenes content...",
      thumbnail: "https://images.unsplash.com/photo-1606115331998-5877d4bac3bd?w=400&h=300&fit=crop",
      category: "Anime",
      dateSaved: "2024-06-11",
      readTime: "6 min",
      source: "Funimation",
      isRead: false
    },
    {
      id: 5,
      title: "Jujutsu Kaisen Manga: Gege Akutami's Shocking Plot Twist Analysis",
      excerpt: "Fans are reeling from the latest chapter's unexpected developments. Here's our breakdown of what it means for the series...",
      thumbnail: "https://images.unsplash.com/photo-1578662017517-d1a83331b3bb?w=400&h=300&fit=crop",
      category: "Manga",
      dateSaved: "2024-06-10",
      readTime: "4 min",
      source: "Manga Plus",
      isRead: true
    },
    {
      id: 6,
      title: "Chainsaw Man Part 2: Fujimoto's New Art Style Evolution",
      excerpt: "The legendary mangaka continues to push artistic boundaries with innovative panel layouts and storytelling techniques...",
      thumbnail: "https://images.unsplash.com/photo-1606115331964-d4f5b9d1c9c1?w=400&h=300&fit=crop",
      category: "Manga",
      dateSaved: "2024-06-09",
      readTime: "7 min",
      source: "Shonen Jump+",
      isRead: false
    }
  ]);

  const categories = ['all', 'Manga', 'Anime', 'News'];

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };

  const toggleReadStatus = (id) => {
    setBookmarks(bookmarks.map(bookmark => 
      bookmark.id === id ? { ...bookmark, isRead: !bookmark.isRead } : bookmark
    ));
  };

  const filteredBookmarks = bookmarks.filter(bookmark => {
    const matchesSearch = bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bookmark.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || bookmark.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const themeClasses = isDark 
    ? 'bg-gray-900 text-white' 
    : 'bg-blue-50 text-gray-900';

  const cardClasses = isDark
    ? 'bg-gray-800 border-gray-700 hover:bg-gray-750'
    : 'bg-white border-gray-200 hover:bg-gray-50';

  const accentColor = isDark ? 'text-pink-400' : 'text-violet-600';
  const accentBg = isDark ? 'bg-pink-400' : 'bg-violet-600';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-opacity-20 border-gray-300">
        <div className={`${isDark ? 'bg-gray-900' : 'bg-blue-50'} bg-opacity-90`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Bookmark className={`w-8 h-8 ${accentColor} animate-pulse`} />
                  <div className={`absolute -top-1 -right-1 w-3 h-3 ${accentBg} rounded-full animate-bounce`}></div>
                </div>
                <div>
                  <h1 className="text-2xl font-black uppercase tracking-wide">
                    SAVED <span className={accentColor}>ARTICLES</span>
                  </h1>
                  <p className="text-sm opacity-70">Your bookmarked manga & anime news</p>
                </div>
              </div>
              
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-3 rounded-full ${cardClasses} border-2 ${isDark ? 'border-pink-400' : 'border-violet-600'} 
                          hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                {isDark ? <Sun className="w-5 h-5 text-pink-400" /> : <Moon className="w-5 h-5 text-violet-600" />}
              </button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                <input
                  type="text"
                  placeholder="Search your saved articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 ${cardClasses} 
                            ${isDark ? 'border-gray-600 focus:border-pink-400' : 'border-gray-300 focus:border-violet-600'}
                            focus:outline-none transition-all duration-300`}
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-bold uppercase text-sm transition-all duration-300
                              hover:-translate-y-1 transform
                              ${selectedCategory === category 
                                ? `${accentBg} text-white shadow-lg` 
                                : `${cardClasses} border-2 ${isDark ? 'border-gray-600' : 'border-gray-300'}`
                              }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className={`${cardClasses} border-2 rounded-lg p-6 text-center hover:-translate-y-1 transition-all duration-300 shadow-lg`}>
            <div className={`text-3xl font-black ${accentColor}`}>{bookmarks.length}</div>
            <div className="text-sm uppercase font-bold opacity-70">TOTAL SAVED</div>
          </div>
          <div className={`${cardClasses} border-2 rounded-lg p-6 text-center hover:-translate-y-1 transition-all duration-300 shadow-lg`}>
            <div className={`text-3xl font-black ${accentColor}`}>{bookmarks.filter(b => !b.isRead).length}</div>
            <div className="text-sm uppercase font-bold opacity-70">UNREAD</div>
          </div>
          <div className={`${cardClasses} border-2 rounded-lg p-6 text-center hover:-translate-y-1 transition-all duration-300 shadow-lg`}>
            <div className={`text-3xl font-black ${accentColor}`}>{bookmarks.filter(b => b.isRead).length}</div>
            <div className="text-sm uppercase font-bold opacity-70">READ</div>
          </div>
        </div>

        {/* Bookmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBookmarks.map(bookmark => (
            <div
              key={bookmark.id}
              className={`${cardClasses} border-2 rounded-lg overflow-hidden hover:-translate-y-2 
                        transition-all duration-300 shadow-lg hover:shadow-2xl relative group`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={bookmark.thumbnail}
                  alt={bookmark.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-black uppercase
                               ${accentBg} text-white shadow-lg transform rotate-1`}>
                  {bookmark.category}
                </div>

                {/* Read Status */}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => toggleReadStatus(bookmark.id)}
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110
                              ${bookmark.isRead 
                                ? 'bg-green-500 text-white' 
                                : 'bg-white/80 text-gray-600 hover:bg-white'}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs opacity-70 mb-2">
                  <Clock className="w-3 h-3" />
                  <span>{bookmark.readTime}</span>
                  <span>•</span>
                  <Calendar className="w-3 h-3" />
                  <span>{bookmark.dateSaved}</span>
                </div>

                <h3 className="font-black text-lg mb-2 line-clamp-2 leading-tight">
                  {bookmark.title}
                </h3>
                
                <p className="text-sm opacity-80 mb-4 line-clamp-3">
                  {bookmark.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs opacity-60">
                  <span className="font-bold uppercase">{bookmark.source}</span>
                  <Star className={`w-4 h-4 ${accentColor}`} />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 border-t border-opacity-20 flex gap-2">
                <button className={`flex-1 py-2 px-4 rounded-full font-bold text-sm transition-all duration-300
                                  ${accentBg} text-white hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2`}>
                  <ExternalLink className="w-4 h-4" />
                  READ NOW
                </button>
                
                <button
                  onClick={() => removeBookmark(bookmark.id)}
                  className={`p-2 rounded-full border-2 transition-all duration-300 hover:scale-110
                            ${isDark ? 'border-red-400 text-red-400 hover:bg-red-400' : 'border-red-500 text-red-500 hover:bg-red-500'}
                            hover:text-white`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBookmarks.length === 0 && (
          <div className="text-center py-16">
            <div className={`w-24 h-24 mx-auto mb-6 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'} 
                          flex items-center justify-center`}>
              <Bookmark className={`w-12 h-12 opacity-50`} />
            </div>
            <h3 className="text-xl font-black uppercase mb-2">NO ARTICLES FOUND</h3>
            <p className="opacity-70">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Floating Action Elements */}
      <div className="fixed bottom-6 right-6">
        <div className={`w-4 h-4 ${accentBg} rounded-full animate-pulse`}></div>
      </div>
      <div className="fixed bottom-12 right-12">
        <div className={`w-2 h-2 ${accentBg} rounded-full animate-bounce delay-100`}></div>
      </div>
    </div>
  );
};

export default BookmarksDashboard;