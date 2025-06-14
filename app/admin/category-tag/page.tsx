'use client'
import React, { useState } from 'react';
import { 
  Tags, 
  Hash, 
  Plus, 
  Edit3, 
  Trash2, 
  Search, 
  Filter, 
  TrendingUp, 
  Eye, 
  Image, 
  Save, 
  X, 
  Moon, 
  Sun, 
  Zap,
  BarChart3,
  Users,
  Star,
  Activity,
  Target,
  Merge,
  Settings,
  Upload
} from 'lucide-react';

const CategoryTagManager = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [editingItem, setEditingItem] = useState(null);
  const [editMode, setEditMode] = useState(false);
    const bgClass = darkMode ? 'bg-gray-900' : 'bg-blue-50';
  const cardClass = darkMode ? 'bg-gray-800 border-pink-500' : 'bg-white border-violet-500';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const accentClass = darkMode ? 'text-pink-400' : 'text-violet-600';
  const gradientClass = darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600';
  // Sample data
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Action Manga',
      slug: 'action-manga',
      description: 'High-octane action and adventure manga series',
      icon: '⚔️',
      articleCount: 1247,
      popularity: 98,
      trending: true,
      seoKeywords: 'action, battle, shounen, adventure',
      color: '#ef4444'
    },
    {
      id: 2,
      name: 'Romance',
      slug: 'romance',
      description: 'Heartwarming romance and relationship stories',
      icon: '💖',
      articleCount: 892,
      popularity: 87,
      trending: false,
      seoKeywords: 'romance, love, shoujo, relationships',
      color: '#ec4899'
    },
    {
      id: 3,
      name: 'Isekai',
      slug: 'isekai',
      description: 'Another world fantasy adventures',
      icon: '🌍',
      articleCount: 634,
      popularity: 94,
      trending: true,
      seoKeywords: 'isekai, fantasy, another world, magic',
      color: '#8b5cf6'
    },
    {
      id: 4,
      name: 'Horror',
      slug: 'horror',
      description: 'Spine-chilling horror and supernatural manga',
      icon: '👻',
      articleCount: 298,
      popularity: 71,
      trending: false,
      seoKeywords: 'horror, supernatural, thriller, scary',
      color: '#6b7280'
    }
  ]);

  const [tags, setTags] = useState([
    {
      id: 1,
      name: 'Weekly Shounen Jump',
      slug: 'weekly-shounen-jump',
      description: 'Popular manga magazine series',
      articleCount: 456,
      popularity: 95,
      trending: true,
      seoKeywords: 'shounen jump, weekly, magazine',
      category: 'Magazine'
    },
    {
      id: 2,
      name: 'Studio Bones',
      slug: 'studio-bones',
      description: 'Anime adaptation by Studio Bones',
      articleCount: 234,
      popularity: 78,
      trending: false,
      seoKeywords: 'studio bones, animation, anime',
      category: 'Studio'
    },
    {
      id: 3,
      name: 'Completed Series',
      slug: 'completed-series',
      description: 'Finished manga series',
      articleCount: 789,
      popularity: 82,
      trending: false,
      seoKeywords: 'completed, finished, ended',
      category: 'Status'
    },
    {
      id: 4,
      name: 'Anime Adaptation',
      slug: 'anime-adaptation',
      description: 'Manga with anime adaptations',
      articleCount: 567,
      popularity: 91,
      trending: true,
      seoKeywords: 'anime, adaptation, animated',
      category: 'Media'
    }
  ]);

  const stats = {
    totalCategories: categories.length,
    totalTags: tags.length,
    totalArticles: categories.reduce((sum, cat) => sum + cat.articleCount, 0),
    avgPopularity: Math.round(categories.reduce((sum, cat) => sum + cat.popularity, 0) / categories.length)
  };
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: '',
    color: '#ef4444',
    seoKeywords: '',
    category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally save to backend
    setShowModal(false);
    setFormData({});
  };

  const handleEdit = (item, type) => {
    setEditMode(true);
    setFormData({
      name: item.name,
      description: item.description,
      icon: item.icon || '',
      color: item.color || '#ef4444',
      seoKeywords: item.seoKeywords || '',
      category: item.category || ''
    });
    setShowModal(true);
  };
  const handleAddNew = (type) => {
    setEditMode(false);
    setFormData({
      name: '',
      description: '',
      icon: '',
      color: '#ef4444',
      seoKeywords: '',
      category: type === 'tag' ? categories[0]?.name || '' : ''
    });
    setShowModal(true);
  };

  const handleDelete = (id, type) => {
    if (type === 'category') {
      setCategories(categories.filter(cat => cat.id !== id));
    } else {
      setTags(tags.filter(tag => tag.id !== id));
    }
  };

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTags = tags.filter(tag =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tag.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Modal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className={`${darkMode ? 'bg-gray-800 border-pink-500' : 'bg-white border-violet-500'} border-2 rounded-lg p-6 w-full max-w-2xl mx-4`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-black uppercase tracking-wide" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
            {modalType === 'add' ? 'ADD NEW' : 'EDIT'} {activeTab.slice(0, -1).toUpperCase()}
          </h3>
          <button
            onClick={() => setShowModal(false)}
            className="p-2 rounded-full hover:bg-opacity-20 hover:bg-pink-500 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wide opacity-70 mb-2">Name</label>
            <input
              type="text"
              className={`w-full p-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-pink-500' : 'bg-gray-50 border-gray-300 focus:border-violet-500'} focus:outline-none transition-colors`}
              placeholder="Enter name..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold uppercase tracking-wide opacity-70 mb-2">Description</label>
            <textarea
              className={`w-full p-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-pink-500' : 'bg-gray-50 border-gray-300 focus:border-violet-500'} focus:outline-none transition-colors`}
              rows={3}
              placeholder="Enter description..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold uppercase tracking-wide opacity-70 mb-2">SEO Keywords</label>
            <input
              type="text"
              className={`w-full p-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-pink-500' : 'bg-gray-50 border-gray-300 focus:border-violet-500'} focus:outline-none transition-colors`}
              placeholder="keyword1, keyword2, keyword3"
            />
          </div>
          
          {activeTab === 'categories' && (
            <div>
              <label className="block text-sm font-bold uppercase tracking-wide opacity-70 mb-2">Icon/Emoji</label>
              <input
                type="text"
                className={`w-full p-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-pink-500' : 'bg-gray-50 border-gray-300 focus:border-violet-500'} focus:outline-none transition-colors`}
                placeholder="Enter emoji or upload image"
              />
            </div>
          )}
        </div>
        
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setShowModal(false)}
            className={`flex-1 py-3 px-6 rounded-lg font-bold uppercase tracking-wide border-2 transition-all duration-300 ${darkMode ? 'border-gray-600 hover:border-pink-500' : 'border-gray-300 hover:border-violet-500'}`}
          >
            Cancel
          </button>
          <button
            className={`flex-1 py-3 px-6 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500' : 'from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500'} text-white shadow-lg hover:shadow-xl`}
          >
            <Save className="w-4 h-4 inline mr-2" />
            Save {activeTab.slice(0, -1)}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'}`}>
      {/* Header */}
      <div className={`sticky top-0 backdrop-blur-lg ${darkMode ? 'bg-gray-900 bg-opacity-80' : 'bg-blue-50 bg-opacity-80'} border-b-2 ${darkMode ? 'border-pink-500' : 'border-violet-500'} z-40`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'} shadow-lg`}>
                <Tags className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black uppercase tracking-wide" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                  CATEGORY & TAG MANAGER
                </h1>
                <p className="text-sm font-bold uppercase tracking-wide opacity-70">
                  CONTENT ORGANIZATION SYSTEM
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full transition-all duration-300 ${darkMode ? 'bg-pink-500 hover:bg-pink-400' : 'bg-violet-500 hover:bg-violet-400'} text-white shadow-lg hover:shadow-xl`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className={`p-6 rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 ${darkMode ? 'bg-gray-800 border-pink-500' : 'bg-white border-violet-500'} relative overflow-hidden`}>
            <div className={`absolute top-2 right-2 w-16 h-16 rounded-full bg-gradient-to-br ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'} opacity-20`}></div>
            <div className="flex items-center gap-4">
              <Tags className={`w-8 h-8 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
              <div>
                <p className="text-sm font-bold uppercase tracking-wide opacity-70">Categories</p>
                <p className="text-3xl font-black" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>{stats.totalCategories}</p>
              </div>
            </div>
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'}`}></div>
          </div>

          <div className={`p-6 rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 ${darkMode ? 'bg-gray-800 border-pink-500' : 'bg-white border-violet-500'} relative overflow-hidden`}>
            <div className={`absolute top-2 right-2 w-16 h-16 rounded-full bg-gradient-to-br ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'} opacity-20`}></div>
            <div className="flex items-center gap-4">
              <Hash className={`w-8 h-8 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
              <div>
                <p className="text-sm font-bold uppercase tracking-wide opacity-70">Tags</p>
                <p className="text-3xl font-black" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>{stats.totalTags}</p>
              </div>
            </div>
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'}`}></div>
          </div>

          <div className={`p-6 rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 ${darkMode ? 'bg-gray-800 border-pink-500' : 'bg-white border-violet-500'} relative overflow-hidden`}>
            <div className={`absolute top-2 right-2 w-16 h-16 rounded-full bg-gradient-to-br ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'} opacity-20`}></div>
            <div className="flex items-center gap-4">
              <BarChart3 className={`w-8 h-8 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
              <div>
                <p className="text-sm font-bold uppercase tracking-wide opacity-70">Total Articles</p>
                <p className="text-3xl font-black" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>{stats.totalArticles.toLocaleString()}</p>
              </div>
            </div>
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'}`}></div>
          </div>

          <div className={`p-6 rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 ${darkMode ? 'bg-gray-800 border-pink-500' : 'bg-white border-violet-500'} relative overflow-hidden`}>
            <div className={`absolute top-2 right-2 w-16 h-16 rounded-full bg-gradient-to-br ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'} opacity-20`}></div>
            <div className="flex items-center gap-4">
              <TrendingUp className={`w-8 h-8 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
              <div>
                <p className="text-sm font-bold uppercase tracking-wide opacity-70">Avg Popularity</p>
                <p className="text-3xl font-black" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>{stats.avgPopularity}%</p>
              </div>
            </div>
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'}`}></div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button className={`${cardClass} border-2 rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 shadow-lg text-left relative overflow-hidden group`}>
            <div className={`absolute top-0 right-0 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 -translate-y-10 translate-x-10 group-hover:opacity-30 transition-opacity`}></div>
            <Settings className={`w-8 h-8 ${accentClass} mb-3 group-hover:rotate-90 transition-transform duration-300`} />
            <h3 className={`text-lg font-black uppercase tracking-wide ${textClass} mb-2`}>MERGE TAGS</h3>
            <p className="text-sm opacity-70">Combine duplicate or similar tags</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          </button>

          <button className={`${cardClass} border-2 rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 shadow-lg text-left relative overflow-hidden group`}>
            <div className={`absolute top-0 right-0 w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 opacity-20 -translate-y-10 translate-x-10 group-hover:opacity-30 transition-opacity`}></div>
            <Upload className={`w-8 h-8 ${accentClass} mb-3 group-hover:-translate-y-1 transition-transform duration-300`} />
            <h3 className={`text-lg font-black uppercase tracking-wide ${textClass} mb-2`}>BULK IMPORT</h3>
            <p className="text-sm opacity-70">Import categories from CSV file</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
          </button>

          <button className={`${cardClass} border-2 rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 shadow-lg text-left relative overflow-hidden group`}>
            <div className={`absolute top-0 right-0 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 opacity-20 -translate-y-10 translate-x-10 group-hover:opacity-30 transition-opacity`}></div>
            <BarChart3 className={`w-8 h-8 ${accentClass} mb-3 group-hover:scale-110 transition-transform duration-300`} />
            <h3 className={`text-lg font-black uppercase tracking-wide ${textClass} mb-2`}>ANALYTICS</h3>
            <p className="text-sm opacity-70">View detailed usage statistics</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
          </button>

          <button className={`${cardClass} border-2 rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 shadow-lg text-left relative overflow-hidden group`}>
            <div className={`absolute top-0 right-0 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 -translate-y-10 translate-x-10 group-hover:opacity-30 transition-opacity`}></div>
            <Image className={`w-8 h-8 ${accentClass} mb-3 group-hover:rotate-12 transition-transform duration-300`} />
            <h3 className={`text-lg font-black uppercase tracking-wide ${textClass} mb-2`}>IMAGE GALLERY</h3>
            <p className="text-sm opacity-70">Manage category icons & images</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          
          {/* <button className={`p-4 rounded-lg font-bold uppercase tracking-wide border-2 transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'border-pink-500 hover:bg-pink-500 hover:bg-opacity-10' : 'border-violet-500 hover:bg-violet-500 hover:bg-opacity-10'}`}>
            <Merge className="w-5 h-5 inline mr-2" />
            Merge Tags
          </button>
          
          <button className={`p-4 rounded-lg font-bold uppercase tracking-wide border-2 transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'border-pink-500 hover:bg-pink-500 hover:bg-opacity-10' : 'border-violet-500 hover:bg-violet-500 hover:bg-opacity-10'}`}>
            <Image className="w-5 h-5 inline mr-2" />
            Bulk Upload
          </button> */}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-between mb-4">
            <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 ${
              activeTab === 'categories'
                ? `bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'} text-white shadow-lg`
                : `border-2 ${darkMode ? 'border-pink-500 hover:bg-pink-500 hover:bg-opacity-10' : 'border-violet-500 hover:bg-violet-500 hover:bg-opacity-10'}`
            }`}
          >
            <Tags className="w-4 h-4 inline mr-2" />
            Categories
          </button>
          
          <button
            onClick={() => setActiveTab('tags')}
            className={`px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 ${
              activeTab === 'tags'
                ? `bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'} text-white shadow-lg`
                : `border-2 ${darkMode ? 'border-pink-500 hover:bg-pink-500 hover:bg-opacity-10' : 'border-violet-500 hover:bg-violet-500 hover:bg-opacity-10'}`
            }`}
          >
            <Hash className="w-4 h-4 inline mr-2" />
            Tags
          </button>
          </div>
          <button
            onClick={() => {
              setModalType('add');
              setEditingItem(null);
              setShowModal(true);
            }}
            className={`p-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500' : 'from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500'} text-white shadow-lg hover:shadow-xl hover:-translate-y-1`}
          >
            <Plus className="w-5 h-5 inline mr-2" />
            Add New {activeTab.slice(0, -1)}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
          <input
            type="text"
            placeholder={`SEARCH ${activeTab.toUpperCase()}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-12 pr-4 py-4 rounded-lg border-2 ${darkMode ? 'bg-gray-800 border-pink-500 focus:border-pink-400' : 'bg-white border-violet-500 focus:border-violet-400'} focus:outline-none transition-colors font-bold uppercase tracking-wide`}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'categories' ? filteredCategories : filteredTags).map((item) => (
            <div key={item.id} className={`p-6 rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 ${darkMode ? 'bg-gray-800 border-pink-500' : 'bg-white border-violet-500'} relative overflow-hidden`}>
              <div className={`absolute top-2 right-2 w-16 h-16 rounded-full bg-gradient-to-br ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'} opacity-20`}></div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {activeTab === 'categories' && (
                    <span className="text-2xl">{item.icon}</span>
                  )}
                  <div>
                    <h3 className="font-black uppercase tracking-wide text-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                      {item.name}
                    </h3>
                    {item.trending && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-400 text-black text-xs font-bold uppercase">
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                        Trending
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => handleEdit(item, activeTab.slice(0, -1))}
                    className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, activeTab.slice(0, -1))}
                    className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <p className="text-sm opacity-70 mb-4">{item.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-wide opacity-70">Articles</span>
                  <span className="font-black">{item.articleCount.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-wide opacity-70">Popularity</span>
                  <span className="font-black">{item.popularity}%</span>
                </div>
                
                <div className={`w-full bg-gray-600 rounded-full h-2 overflow-hidden`}>
                  <div 
                    className={`h-full bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'} transition-all duration-500`}
                    style={{ width: `${item.popularity}%` }}
                  ></div>
                </div>
                
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wide opacity-50">SEO Keywords</span>
                  <p className="text-xs opacity-70 mt-1">{item.seoKeywords}</p>
                </div>
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'}`}></div>
            </div>
          ))}
        </div>
        

        {/* Recent Activity Feed */}
        <div className="mt-12">
          <div className={`${cardClass} border-2 rounded-lg p-6 shadow-lg relative overflow-hidden`}>
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${gradientClass} opacity-10 -translate-y-16 translate-x-16`}></div>
            
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-black uppercase tracking-wide ${textClass}`} 
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                RECENT ACTIVITY
              </h3>
              <Activity className={`w-6 h-6 ${accentClass} animate-pulse`} />
            </div>

            <div className="space-y-4">
              <div className={`flex items-center space-x-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border-l-4 border-green-400`}>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <p className={`font-bold ${textClass}`}>New category "MECHA" created</p>
                  <p className="text-xs opacity-70">2 minutes ago</p>
                </div>
                <Plus className="w-4 h-4 text-green-400" />
              </div>

              <div className={`flex items-center space-x-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border-l-4 border-blue-400`}>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <p className={`font-bold ${textClass}`}>Tag "Naruto" updated with new SEO keywords</p>
                  <p className="text-xs opacity-70">15 minutes ago</p>
                </div>
                <Edit3 className="w-4 h-4 text-blue-400" />
              </div>

              <div className={`flex items-center space-x-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border-l-4 border-yellow-400`}>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <p className={`font-bold ${textClass}`}>Merged duplicate tags: "AOT" → "Attack on Titan"</p>
                  <p className="text-xs opacity-70">1 hour ago</p>
                </div>
                <Settings className="w-4 h-4 text-yellow-400" />
              </div>

              <div className={`flex items-center space-x-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border-l-4 border-red-400`}>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <p className={`font-bold ${textClass}`}>Category "YAOI" archived due to low usage</p>
                  <p className="text-xs opacity-70">3 hours ago</p>
                </div>
                <Trash2 className="w-4 h-4 text-red-400" />
              </div>
            </div>

            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`}></div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`${cardClass} border-2 rounded-lg p-6 shadow-lg relative overflow-hidden`}>
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 opacity-20 -translate-y-12 translate-x-12`}></div>
            
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-xl font-black uppercase tracking-wide ${textClass}`}>TOP PERFORMERS</h3>
              <Star className="w-6 h-6 text-yellow-400" />
            </div>

            <div className="space-y-4">
              {[
                { name: 'One Piece', category: 'SHONEN', articles: 234, trend: '+12%' },
                { name: 'ISEKAI', category: 'CATEGORY', articles: 1023, trend: '+8%' },
                { name: 'Dragon Ball', category: 'SHONEN', articles: 156, trend: '+15%' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30">
                  <div>
                    <p className={`font-black ${textClass}`}>{item.name}</p>
                    <p className="text-xs opacity-70">{item.category}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-black ${textClass}`}>{item.articles}</p>
                    <p className="text-xs text-green-400 font-bold">{item.trend}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${cardClass} border-2 rounded-lg p-6 shadow-lg relative overflow-hidden`}>
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-pink-500 opacity-20 -translate-y-12 translate-x-12`}></div>
            
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-xl font-black uppercase tracking-wide ${textClass}`}>NEEDS ATTENTION</h3>
              <Eye className="w-6 h-6 text-red-400" />
            </div>

            <div className="space-y-4">
              {[
                { name: 'Yaoi', category: 'SHOUJO', articles: 12, issue: 'Low Usage' },
                { name: 'Mecha', category: 'SEINEN', articles: 45, issue: 'No SEO' },
                { name: 'Yuri', category: 'SHOUJO', articles: 23, issue: 'Outdated' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30">
                  <div>
                    <p className={`font-black ${textClass}`}>{item.name}</p>
                    <p className="text-xs opacity-70">{item.category}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-black ${textClass}`}>{item.articles}</p>
                    <p className="text-xs text-red-400 font-bold">{item.issue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      
      {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${cardClass} border-2 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto`}>
              <h2 className={`text-2xl font-black uppercase tracking-wide mb-6 ${textClass}`}>
                {editMode ? 'EDIT' : 'ADD'} {activeTab.slice(0, -1).toUpperCase()}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide opacity-70 mb-2">NAME</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-pink-500 text-white' : 'bg-gray-50 border-violet-500 text-gray-900'} font-bold`}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide opacity-70 mb-2">DESCRIPTION</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-pink-500 text-white' : 'bg-gray-50 border-violet-500 text-gray-900'} font-bold h-24 resize-none`}
                    required
                  />
                </div>

                {activeTab === 'categories' && (
                  <>
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wide opacity-70 mb-2">ICON (EMOJI)</label>
                      <input
                        type="text"
                        value={formData.icon}
                        onChange={(e) => setFormData({...formData, icon: e.target.value})}
                        className={`w-full px-4 py-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-pink-500 text-white' : 'bg-gray-50 border-violet-500 text-gray-900'} font-bold`}
                        placeholder="🎌"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wide opacity-70 mb-2">COLOR</label>
                      <input
                        type="color"
                        value={formData.color}
                        onChange={(e) => setFormData({...formData, color: e.target.value})}
                        className="w-full h-12 rounded-lg border-2 border-gray-600"
                      />
                    </div>
                  </>
                )}

                {activeTab === 'tags' && (
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wide opacity-70 mb-2">CATEGORY</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-pink-500 text-white' : 'bg-gray-50 border-violet-500 text-gray-900'} font-bold`}
                      required
                    >
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide opacity-70 mb-2">SEO KEYWORDS</label>
                  <input
                    type="text"
                    value={formData.seoKeywords}
                    onChange={(e) => setFormData({...formData, seoKeywords: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-pink-500 text-white' : 'bg-gray-50 border-violet-500 text-gray-900'} font-bold`}
                    placeholder="comma, separated, keywords"
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="submit"
                    className={`flex-1 py-3 bg-gradient-to-r ${gradientClass} text-white rounded-lg font-black uppercase tracking-wide hover:scale-105 transition-all duration-300`}
                  >
                    {editMode ? 'UPDATE' : 'CREATE'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-black uppercase tracking-wide transition-all duration-300"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
    </div>
  );
};

export default CategoryTagManager;