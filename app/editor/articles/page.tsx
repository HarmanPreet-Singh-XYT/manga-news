'use client'
import React, { useState, useRef } from 'react';
import { 
  Plus, 
  Image, 
  Save, 
  Eye, 
  Send, 
  Moon, 
  Sun, 
  Tag, 
  Calendar,
  Upload,
  X,
  Sparkles,
  Zap,
  Star
} from 'lucide-react';

const MangaNewsDashboard = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('create');
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    tags: [],
    headerImage: null,
    imageCaption: ''
  });
  const [dragOver, setDragOver] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const fileInputRef = useRef(null);

  const categories = [
    'Manga Reviews', 'Anime News', 'Industry Updates', 'Character Spotlights', 
    'Studio News', 'Merchandise', 'Conventions', 'Interviews'
  ];

  const suggestedTags = [
    'Shonen Jump', 'Studio Ghibli', 'Attack on Titan', 'One Piece', 'Naruto',
    'Demon Slayer', 'Jujutsu Kaisen', 'My Hero Academia', 'Tokyo Ghoul',
    'Death Note', 'Crunchyroll', 'Funimation', 'Mappa', 'Toei Animation'
  ];

  const handleTitleChange = (e) => {
    const title = e.target.value;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    setFormData(prev => ({ ...prev, title, slug }));
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFormData(prev => ({ ...prev, headerImage: files[0] }));
    }
  };

  const addTag = (tag) => {
    if (tag && !selectedTags.includes(tag)) {
      setSelectedTags(prev => [...prev, tag]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setSelectedTags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const themeClasses = isDark 
    ? 'bg-gray-900 text-white' 
    : 'bg-blue-50 text-gray-900';

  const cardClasses = isDark
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';

  const accentColor = isDark ? 'text-pink-400' : 'text-violet-600';
  const accentBg = isDark ? 'bg-pink-500' : 'bg-violet-600';
  const accentBorder = isDark ? 'border-pink-500' : 'border-violet-500';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Header */}
      <header className={`${cardClasses} border-b-4 ${accentBorder} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className={`w-12 h-12 ${accentBg} rounded-lg flex items-center justify-center transform rotate-12 shadow-lg`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className={`text-2xl font-black uppercase tracking-wide ${accentColor} drop-shadow-lg`}>
                  OTAKU PRESS
                </h1>
                <p className="text-sm opacity-75 font-medium">Journalist Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-3 rounded-full ${cardClasses} border-2 ${accentBorder} hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-8">
          {[
            { id: 'create', label: '🆕 Submit New Article', icon: Plus },
            { id: 'drafts', label: '📝 Drafts', icon: Save },
            { id: 'published', label: '✨ Published', icon: Star }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold uppercase text-sm transition-all duration-200 border-2 ${
                activeTab === tab.id
                  ? `${accentBg} text-white border-transparent shadow-lg -translate-y-1`
                  : `${cardClasses} ${accentBorder} hover:-translate-y-1 hover:shadow-lg`
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        {activeTab === 'create' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Article Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title & Slug */}
              <div className={`p-6 rounded-lg ${cardClasses} border-2 ${accentBorder} shadow-lg`}>
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className={`w-5 h-5 ${accentColor}`} />
                  <h2 className="text-xl font-black uppercase">Article Details</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={handleTitleChange}
                      placeholder="Enter article title..."
                      className={`w-full p-3 rounded-lg border-2 ${accentBorder} ${cardClasses} focus:outline-none focus:ring-2 focus:ring-pink-500 font-medium`}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Slug</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                      className={`w-full p-3 rounded-lg border-2 ${accentBorder} ${cardClasses} focus:outline-none focus:ring-2 focus:ring-pink-500 font-mono text-sm`}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">Excerpt</label>
                    <textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                      placeholder="Brief description of the article..."
                      rows={3}
                      className={`w-full p-3 rounded-lg border-2 ${accentBorder} ${cardClasses} focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none`}
                    />
                  </div>
                </div>
              </div>

              {/* Content Editor */}
              <div className={`p-6 rounded-lg ${cardClasses} border-2 ${accentBorder} shadow-lg`}>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h2 className="text-xl font-black uppercase">Rich Text Editor</h2>
                </div>
                
                {/* Editor Toolbar */}
                <div className={`flex flex-wrap gap-2 p-3 rounded-t-lg border-b-2 ${accentBorder} ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  {['B', 'I', 'U', 'H1', 'H2', 'Link', 'Image', 'List'].map(tool => (
                    <button
                      key={tool}
                      className={`px-3 py-1 rounded text-xs font-bold uppercase ${cardClasses} border ${accentBorder} hover:${accentBg} hover:text-white transition-colors`}
                    >
                      {tool}
                    </button>
                  ))}
                </div>
                
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Start writing your article... (Supports Markdown)"
                  rows={12}
                  className={`w-full p-4 rounded-b-lg ${cardClasses} focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none border-0 font-mono text-sm`}
                />
              </div>

              {/* Image Upload */}
              <div className={`p-6 rounded-lg ${cardClasses} border-2 ${accentBorder} shadow-lg`}>
                <div className="flex items-center space-x-2 mb-4">
                  <Image className={`w-5 h-5 ${accentColor}`} />
                  <h2 className="text-xl font-black uppercase">Header Image</h2>
                </div>
                
                <div
                  onDrop={handleImageDrop}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
                    dragOver 
                      ? `${accentBorder} bg-opacity-10 ${accentBg}` 
                      : `border-gray-400 hover:${accentBorder}`
                  }`}
                >
                  <Upload className={`w-12 h-12 mx-auto mb-4 ${accentColor}`} />
                  <p className="font-bold uppercase mb-2">Drag & Drop Image</p>
                  <p className="text-sm opacity-75 mb-4">or click to browse</p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className={`px-6 py-2 rounded-full ${accentBg} text-white font-bold uppercase hover:shadow-lg transition-all duration-200`}
                  >
                    Choose File
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setFormData(prev => ({ ...prev, headerImage: e.target.files[0] }))}
                  />
                </div>
                
                {formData.headerImage && (
                  <div className="mt-4">
                    <label className="block text-sm font-bold uppercase mb-2">Image Caption</label>
                    <input
                      type="text"
                      value={formData.imageCaption}
                      onChange={(e) => setFormData(prev => ({ ...prev, imageCaption: e.target.value }))}
                      placeholder="Enter image caption..."
                      className={`w-full p-3 rounded-lg border-2 ${accentBorder} ${cardClasses} focus:outline-none focus:ring-2 focus:ring-pink-500`}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <div className={`p-6 rounded-lg ${cardClasses} border-2 ${accentBorder} shadow-lg`}>
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className={`w-5 h-5 ${accentColor}`} />
                  <h3 className="text-lg font-black uppercase">Category</h3>
                </div>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className={`w-full p-3 rounded-lg border-2 ${accentBorder} ${cardClasses} focus:outline-none focus:ring-2 focus:ring-pink-500 font-medium`}
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Tags */}
              <div className={`p-6 rounded-lg ${cardClasses} border-2 ${accentBorder} shadow-lg`}>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                  <h3 className="text-lg font-black uppercase">Tags</h3>
                </div>
                
                <div className="space-y-3">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag(tagInput))}
                    placeholder="Add tags..."
                    className={`w-full p-3 rounded-lg border-2 ${accentBorder} ${cardClasses} focus:outline-none focus:ring-2 focus:ring-pink-500`}
                  />
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedTags.map(tag => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full ${accentBg} text-white text-xs font-bold uppercase flex items-center space-x-1`}
                      >
                        <span>{tag}</span>
                        <button onClick={() => removeTag(tag)}>
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <p className="text-xs font-bold uppercase mb-2 opacity-75">Suggestions:</p>
                    <div className="flex flex-wrap gap-1">
                      {suggestedTags.filter(tag => !selectedTags.includes(tag)).slice(0, 6).map(tag => (
                        <button
                          key={tag}
                          onClick={() => addTag(tag)}
                          className={`px-2 py-1 rounded text-xs font-medium ${cardClasses} border ${accentBorder} hover:${accentBg} hover:text-white transition-colors`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className={`p-6 rounded-lg ${cardClasses} border-2 ${accentBorder} shadow-lg`}>
                <h3 className="text-lg font-black uppercase mb-4">Actions</h3>
                <div className="space-y-3">
                  <button className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg ${accentBg} text-white font-bold uppercase hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}>
                    <Send className="w-4 h-4" />
                    <span>Submit for Review</span>
                  </button>
                  
                  <button className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg ${cardClasses} border-2 ${accentBorder} font-bold uppercase hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}>
                    <Save className="w-4 h-4" />
                    <span>Save Draft</span>
                  </button>
                  
                  <button className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg ${cardClasses} border-2 ${accentBorder} font-bold uppercase hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}>
                    <Eye className="w-4 h-4" />
                    <span>Preview</span>
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className={`p-6 rounded-lg ${cardClasses} border-2 ${accentBorder} shadow-lg`}>
                <h3 className="text-lg font-black uppercase mb-4">Article Stats</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Word Count:</span>
                    <span className={`font-bold ${accentColor}`}>
                      {formData.content.split(' ').filter(word => word.length > 0).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Characters:</span>
                    <span className={`font-bold ${accentColor}`}>{formData.content.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Reading Time:</span>
                    <span className={`font-bold ${accentColor}`}>
                      {Math.max(1, Math.ceil(formData.content.split(' ').filter(word => word.length > 0).length / 200))} min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MangaNewsDashboard;