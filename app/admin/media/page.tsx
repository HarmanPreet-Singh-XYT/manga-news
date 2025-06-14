'use client'
import React, { useState, useRef, useCallback } from 'react';
import { Upload, Search, Filter, Grid, List, Image, Video, FileText, Tag, Calendar, Eye, EyeOff, Folder, Plus, X, Download, Edit3, Trash2, Star } from 'lucide-react';

const MediaLibrary = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [dateFilter, setDateFilter] = useState('all');
  const [usageFilter, setUsageFilter] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  // Sample media data
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      name: 'naruto-banner-hero.webp',
      type: 'image',
      size: '2.3 MB',
      dimensions: '1920x1080',
      uploadDate: '2024-06-10',
      usedInArticle: true,
      folder: 'banners',
      tags: ['naruto', 'hero', 'featured'],
      thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkY2QjM1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+TkFSVVRPPC90ZXh0Pjwvc3ZnPg=='
    },
    {
      id: 2,
      name: 'one-piece-thumbnail.webp',
      type: 'image',
      size: '856 KB',
      dimensions: '640x360',
      uploadDate: '2024-06-12',
      usedInArticle: false,
      folder: 'thumbnails',
      tags: ['one-piece', 'luffy', 'thumbnail'],
      thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjREMxNjI2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+T05FIFBJRUNFPC90ZXh0Pjwvc3ZnPg=='
    },
    {
      id: 3,
      name: 'attack-on-titan-promo.webp',
      type: 'image',
      size: '1.8 MB',
      dimensions: '1280x720',
      uploadDate: '2024-06-14',
      usedInArticle: true,
      folder: 'promotional',
      tags: ['attack-on-titan', 'promotional', 'featured'],
      thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+QVRUQUNLIE9OIFRJVEFOPC90ZXh0Pjwvc3ZnPg=='
    },
    {
      id: 4,
      name: 'demon-slayer-video.mp4',
      type: 'video',
      size: '45.2 MB',
      dimensions: '1920x1080',
      uploadDate: '2024-06-13',
      usedInArticle: true,
      folder: 'videos',
      tags: ['demon-slayer', 'trailer', 'video'],
      thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjN0M0REZGIi8+PHBvbHlnb24gcG9pbnRzPSIxMzAsNzAgMTkwLDEwNSAxMzAsMTQwIiBmaWxsPSJ3aGl0ZSIvPjx0ZXh0IHg9IjUwJSIgeT0iODUlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ERU1PTiBTTEFZRVI8L3RleHQ+PC9zdmc+'
    }
  ]);

  const folders = ['all', 'banners', 'thumbnails', 'promotional', 'videos', 'articles'];
  const allTags = ['naruto', 'one-piece', 'attack-on-titan', 'demon-slayer', 'hero', 'featured', 'thumbnail', 'promotional', 'trailer', 'video'];

  const themeClasses = isDarkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-blue-50 text-gray-900';

  const cardClasses = isDarkMode
    ? 'bg-gray-800 border-pink-500'
    : 'bg-white border-violet-400';

  const accentColor = isDarkMode ? 'pink' : 'violet';

  const handleFileUpload = useCallback((files) => {
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      const newFiles = Array.from(files).map((file, index) => ({
        id: mediaItems.length + index + 1,
        name: file.name,
        type: file.type.startsWith('image/') ? 'image' : file.type.startsWith('video/') ? 'video' : 'document',
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
        dimensions: '1920x1080', // Would be calculated in real implementation
        uploadDate: new Date().toISOString().split('T')[0],
        usedInArticle: false,
        folder: 'uploads',
        tags: [],
        thumbnail: `data:image/svg+xml;base64,${btoa(`<svg width="320" height="180" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#6366F1"/><text x="50%" y="50%" font-family="Arial" font-size="12" fill="white" text-anchor="middle" dy="0.3em">${file.name.substring(0, 10)}</text></svg>`)}`
      }));
      
      setMediaItems(prev => [...prev, ...newFiles]);
      setIsUploading(false);
      setShowUploadModal(false);
    }, 2000);
  }, [mediaItems.length]);

  const filteredMedia = mediaItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFolder = selectedFolder === 'all' || item.folder === selectedFolder;
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => item.tags.includes(tag));
    const matchesUsage = usageFilter === 'all' || 
                        (usageFilter === 'used' && item.usedInArticle) ||
                        (usageFilter === 'unused' && !item.usedInArticle);
    
    return matchesSearch && matchesFolder && matchesTags && matchesUsage;
  });

  const MediaCard = ({ item }) => (
    <div className={`${cardClasses} rounded-lg border-2 shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group cursor-pointer`}>
      <div className="relative">
        <img 
          src={item.thumbnail} 
          alt={item.name}
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2">
          {item.type === 'video' && <Video className="w-6 h-6 text-white drop-shadow-lg" />}
          {item.type === 'image' && <Image className="w-6 h-6 text-white drop-shadow-lg" />}
          {item.type === 'document' && <FileText className="w-6 h-6 text-white drop-shadow-lg" />}
        </div>
        <div className="absolute bottom-2 left-2 flex gap-1">
          {item.usedInArticle && (
            <span className={`px-2 py-1 rounded-full bg-${accentColor}-500 text-white text-xs font-bold`}>
              USED
            </span>
          )}
          <span className={`px-2 py-1 rounded-full bg-black/70 text-white text-xs`}>
            {item.dimensions}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-sm mb-2 truncate uppercase tracking-wide" style={{textShadow: isDarkMode ? '1px 1px 2px rgba(236, 72, 153, 0.3)' : '1px 1px 2px rgba(124, 58, 237, 0.3)'}}>
          {item.name}
        </h3>
        <div className="flex justify-between text-xs opacity-75 mb-3">
          <span>{item.size}</span>
          <span>{item.uploadDate}</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {item.tags.slice(0, 3).map(tag => (
            <span key={tag} className={`px-2 py-1 rounded-full bg-${accentColor}-100 text-${accentColor}-800 text-xs font-medium`}>
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="px-2 py-1 rounded-full bg-gray-200 text-gray-600 text-xs">
              +{item.tags.length - 3}
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-xs px-2 py-1 rounded-full bg-${accentColor}-500/20 text-${accentColor}-400 font-medium uppercase`}>
            {item.folder}
          </span>
          <div className="flex gap-1">
            <button className={`p-1 rounded-full hover:bg-${accentColor}-500/20 transition-colors`}>
              <Download className="w-4 h-4" />
            </button>
            <button className={`p-1 rounded-full hover:bg-${accentColor}-500/20 transition-colors`}>
              <Edit3 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${themeClasses} transition-colors duration-300`}>
      {/* Header */}
      <div className={`${cardClasses} border-b-4 shadow-lg`}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tight mb-2" 
                  style={{textShadow: isDarkMode ? '2px 2px 4px rgba(236, 72, 153, 0.5)' : '2px 2px 4px rgba(124, 58, 237, 0.5)'}}>
                🖼️ MEDIA LIBRARY
              </h1>
              <p className="text-lg opacity-75">Manage your manga & anime media assets</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`px-4 py-2 rounded-full bg-gradient-to-r from-${accentColor}-500 to-${accentColor}-600 text-white font-bold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              <button 
                onClick={() => setShowUploadModal(true)}
                className={`px-6 py-2 rounded-full bg-gradient-to-r from-${accentColor}-500 to-${accentColor}-600 text-white font-bold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2`}
              >
                <Upload className="w-5 h-5" />
                UPLOAD MEDIA
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
              <input
                type="text"
                placeholder="Search media..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 ${cardClasses} focus:border-${accentColor}-500 outline-none transition-colors font-medium`}
              />
            </div>

            <select
              value={selectedFolder}
              onChange={(e) => setSelectedFolder(e.target.value)}
              className={`px-4 py-3 rounded-lg border-2 ${cardClasses} focus:border-${accentColor}-500 outline-none transition-colors font-medium uppercase tracking-wide`}
            >
              {folders.map(folder => (
                <option key={folder} value={folder}>
                  {folder === 'all' ? '📁 ALL FOLDERS' : `📁 ${folder.toUpperCase()}`}
                </option>
              ))}
            </select>

            <select
              value={usageFilter}
              onChange={(e) => setUsageFilter(e.target.value)}
              className={`px-4 py-3 rounded-lg border-2 ${cardClasses} focus:border-${accentColor}-500 outline-none transition-colors font-medium uppercase tracking-wide`}
            >
              <option value="all">👁️ ALL USAGE</option>
              <option value="used">✅ USED IN ARTICLES</option>
              <option value="unused">❌ UNUSED</option>
            </select>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                  viewMode === 'grid' ? `bg-${accentColor}-500 text-white` : `border-2 ${cardClasses} hover:border-${accentColor}-500`
                }`}
              >
                <Grid className="w-5 h-5 mx-auto" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                  viewMode === 'list' ? `bg-${accentColor}-500 text-white` : `border-2 ${cardClasses} hover:border-${accentColor}-500`
                }`}
              >
                <List className="w-5 h-5 mx-auto" />
              </button>
            </div>
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm font-bold uppercase tracking-wide opacity-75">FILTER BY TAGS:</span>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTags(prev => 
                    prev.includes(tag) 
                      ? prev.filter(t => t !== tag)
                      : [...prev, tag]
                  );
                }}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  selectedTags.includes(tag)
                    ? `bg-${accentColor}-500 text-white shadow-lg`
                    : `bg-${accentColor}-100 text-${accentColor}-800 hover:bg-${accentColor}-200`
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-sm font-bold uppercase tracking-wide opacity-75">
            <span>📊 {filteredMedia.length} ITEMS SHOWING</span>
            <span>📈 {mediaItems.filter(item => item.usedInArticle).length} USED IN ARTICLES</span>
            <span>💾 {mediaItems.reduce((acc, item) => acc + parseFloat(item.size), 0).toFixed(1)} MB TOTAL</span>
          </div>
        </div>
      </div>

      {/* Media Grid/List */}
      <div className="container mx-auto px-6 py-8">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedia.map(item => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMedia.map(item => (
              <div key={item.id} className={`${cardClasses} rounded-lg border-2 shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-4`}>
                <div className="flex items-center gap-4">
                  <img src={item.thumbnail} alt={item.name} className="w-20 h-12 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-bold uppercase tracking-wide">{item.name}</h3>
                    <div className="flex gap-4 text-sm opacity-75">
                      <span>{item.size}</span>
                      <span>{item.dimensions}</span>
                      <span>{item.uploadDate}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-1 mb-2">
                      {item.tags.slice(0, 3).map(tag => (
                        <span key={tag} className={`px-2 py-1 rounded-full bg-${accentColor}-100 text-${accentColor}-800 text-xs`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button className={`p-2 rounded-full hover:bg-${accentColor}-500/20 transition-colors`}>
                        <Download className="w-4 h-4" />
                      </button>
                      <button className={`p-2 rounded-full hover:bg-${accentColor}-500/20 transition-colors`}>
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredMedia.length === 0 && (
          <div className="text-center py-16">
            <div className="animate-pulse mb-4">
              <Image className="w-16 h-16 mx-auto opacity-50" />
            </div>
            <h3 className="text-2xl font-bold uppercase mb-2">NO MEDIA FOUND</h3>
            <p className="opacity-75">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`${cardClasses} rounded-lg border-4 shadow-2xl p-8 max-w-md w-full`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black uppercase">UPLOAD MEDIA</h2>
              <button 
                onClick={() => setShowUploadModal(false)}
                className={`p-2 rounded-full hover:bg-${accentColor}-500/20 transition-colors`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div 
              className={`border-4 border-dashed border-${accentColor}-500 rounded-lg p-8 text-center cursor-pointer hover:bg-${accentColor}-500/10 transition-colors`}
              onClick={() => fileInputRef.current?.click()}
            >
              {isUploading ? (
                <div className="animate-pulse">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${accentColor}-500 rounded-full animate-bounce`}></div>
                  <p className="font-bold uppercase">UPLOADING...</p>
                </div>
              ) : (
                <>
                  <Upload className={`w-16 h-16 mx-auto mb-4 text-${accentColor}-500`} />
                  <h3 className="text-xl font-bold uppercase mb-2">DROP FILES HERE</h3>
                  <p className="opacity-75 mb-4">Or click to select files</p>
                  <p className="text-sm opacity-50">Supports JPG, PNG, WebP, MP4, MOV</p>
                </>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
              className="hidden"
            />

            <button 
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className={`w-full mt-6 py-3 px-6 rounded-full bg-gradient-to-r from-${accentColor}-500 to-${accentColor}-600 text-white font-bold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isUploading ? 'UPLOADING...' : 'SELECT FILES'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaLibrary;