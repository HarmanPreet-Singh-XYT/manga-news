import { useState, useEffect } from 'react';
import { Bell, Moon, Sun, Book, Globe, Lock, Trash2, Save, X, AlertTriangle, Camera, Palette, Volume2, Star } from 'lucide-react';

const Settings = ({ darkMode, activeTab, setDarkMode }) => {
  // State for various settings
  const [fontSize, setFontSize] = useState('medium');
  const [readingDirection, setReadingDirection] = useState('right-to-left');
  const [notifications, setNotifications] = useState({
    newChapter: true,
    comments: true,
    friendActivity: true,
    announcements: false,
    specialOffers: false
  });
  const [privacy, setPrivacy] = useState({
    publicProfile: true,
    showReadingActivity: true,
    allowFriendRequests: false
  });
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [avatar, setAvatar] = useState('/api/placeholder/100/100');
  const [themeColor, setThemeColor] = useState(darkMode ? 'pink' : 'violet');
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);
  const [autoSaveTimer, setAutoSaveTimer] = useState(null);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [favoriteGenres, setFavoriteGenres] = useState(['Action', 'Adventure']);
  const [audioSettings, setAudioSettings] = useState({
    notificationVolume: 70,
    enableSoundEffects: true
  });

  // Color themes available
  const colorThemes = {
    violet: {
      primary: 'bg-violet-600',
      hover: 'hover:bg-violet-700',
      text: 'text-violet-600',
      shadow: '3px 3px 0px #7c3aed',
      boxShadow: '4px 4px 0px rgba(124, 58, 237, 0.3)'
    },
    pink: {
      primary: 'bg-pink-600',
      hover: 'hover:bg-pink-700',
      text: 'text-pink-500',
      shadow: '3px 3px 0px #831843',
      boxShadow: '4px 4px 0px rgba(236, 72, 153, 0.3)'
    },
    blue: {
      primary: 'bg-blue-600',
      hover: 'hover:bg-blue-700',
      text: 'text-blue-500',
      shadow: '3px 3px 0px #1e40af',
      boxShadow: '4px 4px 0px rgba(37, 99, 235, 0.3)'
    },
    green: {
      primary: 'bg-green-600',
      hover: 'hover:bg-green-700',
      text: 'text-green-500',
      shadow: '3px 3px 0px #166534',
      boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.3)'
    },
    orange: {
      primary: 'bg-orange-600',
      hover: 'hover:bg-orange-700',
      text: 'text-orange-500',
      shadow: '3px 3px 0px #c2410c',
      boxShadow: '4px 4px 0px rgba(249, 115, 22, 0.3)'
    }
  };

  // Auto save functionality
  useEffect(() => {
    if (unsavedChanges) {
      if (autoSaveTimer) clearTimeout(autoSaveTimer);
      
      const timer = setTimeout(() => {
        handleSaveSettings();
      }, 30000); // Auto save after 30 seconds of changes
      
      setAutoSaveTimer(timer);
    }
    
    return () => {
      if (autoSaveTimer) clearTimeout(autoSaveTimer);
    };
  }, [unsavedChanges]);

  // Update color theme when dark mode changes
  useEffect(() => {
    setThemeColor(darkMode ? 'pink' : 'violet');
  }, [darkMode]);

  // Toggle notification settings
  const toggleNotification = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    setUnsavedChanges(true);
  };

  // Toggle privacy settings
  const togglePrivacy = (key) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    setUnsavedChanges(true);
  };

  // Handle password change
  const handlePasswordChange = (field, value) => {
    setPasswords(prev => ({
      ...prev,
      [field]: value
    }));
    setUnsavedChanges(true);
  };

  // Save settings
  const handleSaveSettings = () => {
    // In a real app, you would save to API/backend here
    console.log('Settings saved:', {
      themeColor,
      fontSize,
      readingDirection,
      notifications,
      privacy,
      audioSettings,
      favoriteGenres
    });
    
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 3000);
    setUnsavedChanges(false);
  };

  // Toggle theme color
  const handleThemeColorChange = (color) => {
    setThemeColor(color);
    setUnsavedChanges(true);
  };

  // Delete account
  const handleDeleteAccount = () => {
    console.log('Account deletion requested');
    setShowConfirmDelete(false);
    // In a real app, you would call API to delete account
  };

  // Add/remove genre
  const toggleGenre = (genre) => {
    if (favoriteGenres.includes(genre)) {
      setFavoriteGenres(favoriteGenres.filter(g => g !== genre));
    } else if (favoriteGenres.length < 5) {
      setFavoriteGenres([...favoriteGenres, genre]);
    }
    setUnsavedChanges(true);
  };

  // Handle audio setting changes
  const handleAudioChange = (key, value) => {
    setAudioSettings(prev => ({
      ...prev,
      [key]: key === 'notificationVolume' ? value : !prev[key]
    }));
    setUnsavedChanges(true);
  };

  // Get current theme colors
  const currentTheme = colorThemes[themeColor];

  if (activeTab !== 'settings') return null;

  return (
    <div className="space-y-8 relative">
      {/* Header with animation */}
      <h1 
        className={`text-3xl font-black uppercase transform -skew-x-3 ${currentTheme.text} animate-pulse`} 
        style={{ textShadow: currentTheme.shadow }}
      >
        SETTINGS
      </h1>
      
      {/* Toast notification */}
      {showSavedToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded z-50 flex items-center transform -rotate-2 animate-bounce" style={{ 
          clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
        }}>
          <Save className="w-5 h-5 mr-2" />
          <span className="font-bold">Settings saved!</span>
          <button onClick={() => setShowSavedToast(false)} className="ml-3">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      
      {/* Unsaved changes indicator */}
      {unsavedChanges && (
        <div className={`fixed bottom-4 right-4 ${currentTheme.primary} text-white p-3 rounded z-50 flex items-center transform rotate-2`} style={{ 
          clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
        }}>
          <span className="font-bold mr-2">Unsaved changes</span>
          <span className="text-sm">(Auto-saving in 30s)</span>
        </div>
      )}

    
      
      {/* Favorite genres */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform -rotate-1`} style={{ 
        clipPath: 'polygon(0 0, 100% 0, 98% 95%, 95% 100%, 0 100%)',
        boxShadow: currentTheme.boxShadow
      }}>
        <h2 className="text-xl font-bold mb-4 uppercase tracking-tight flex items-center">
          <Star className={`w-5 h-5 mr-2 ${currentTheme.text}`} />
          FAVORITE GENRES
        </h2>
        
        <p className={`mb-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Select up to 5 genres to customize your recommendations
        </p>
        
        <div className="flex flex-wrap gap-2">
          {['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Isekai', 
            'Mecha', 'Mystery', 'Romance', 'Sci-Fi', 'Slice of Life', 'Sports', 'Supernatural'].map(genre => (
            <button
              key={genre}
              onClick={() => toggleGenre(genre)}
              className={`py-1 px-3 text-sm font-bold ${favoriteGenres.includes(genre) 
                ? `${currentTheme.primary} text-white` 
                : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-indigo-100'
              } transform skew-x-3 transition-all hover:scale-105`}
              style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
            >
              {genre.toUpperCase()}
            </button>
          ))}
        </div>
        
        <div className="mt-3">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {favoriteGenres.length}/5 genres selected
          </p>
        </div>
      </div>

      {/* Appearance settings - Theme color added */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform -rotate-1`} style={{ 
        clipPath: 'polygon(0 0, 100% 0, 98% 95%, 95% 100%, 0 100%)',
        boxShadow: currentTheme.boxShadow
      }}>
        <h2 className="text-xl font-bold mb-4 uppercase tracking-tight flex items-center">
          <Palette className={`w-5 h-5 mr-2 ${currentTheme.text}`} />
          APPEARANCE
        </h2>
        
        <div className="space-y-6">
          {/* Theme Mode */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {darkMode ? (
                <Moon className="w-5 h-5 mr-2 text-pink-500" />
              ) : (
                <Sun className="w-5 h-5 mr-2 text-yellow-500" />
              )}
              <span className="font-medium">Theme Mode</span>
            </div>
            <div className="flex space-x-4">
              <button 
                className={`py-2 px-4 ${!darkMode ? `${currentTheme.primary} text-white` : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-indigo-100'} font-bold`}
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                onClick={() => {
                  setDarkMode(false);
                  setUnsavedChanges(true);
                }}
              >
                LIGHT
              </button>
              <button 
                className={`py-2 px-4 ${darkMode ? `${currentTheme.primary} text-white` : 'bg-indigo-100'} font-bold`}
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                onClick={() => {
                  setDarkMode(true);
                  setUnsavedChanges(true);
                }}
              >
                DARK
              </button>
            </div>
          </div>
          
          {/* Color Theme */}
          <div>
            <span className="font-medium block mb-2">Color Theme</span>
            <div className="flex flex-wrap gap-3">
              {Object.keys(colorThemes).map(color => (
                <button
                  key={color}
                  onClick={() => handleThemeColorChange(color)}
                  className={`w-8 h-8 rounded-full bg-${color}-500 ${themeColor === color ? 'ring-2 ring-offset-2 ring-gray-500' : ''}`}
                  style={{ 
                    backgroundColor: color === 'violet' ? '#8b5cf6' : 
                                    color === 'pink' ? '#ec4899' : 
                                    color === 'blue' ? '#3b82f6' : 
                                    color === 'green' ? '#10b981' : '#f97316',
                    transform: themeColor === color ? 'scale(1.2)' : 'scale(1)'
                  }}
                >
                </button>
              ))}
            </div>
          </div>
          
          {/* Font Size */}
          <div className="flex items-center justify-between">
            <span className="font-medium">Font Size</span>
            <div className="flex space-x-4">
              <button 
                className={`py-2 px-4 ${fontSize === 'small' ? currentTheme.primary + ' text-white' : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-100 hover:bg-indigo-200'} font-bold`}
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                onClick={() => {
                  setFontSize('small');
                  setUnsavedChanges(true);
                }}
              >
                SMALL
              </button>
              <button 
                className={`py-2 px-4 ${fontSize === 'medium' ? currentTheme.primary + ' text-white' : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-100 hover:bg-indigo-200'} font-bold`}
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                onClick={() => {
                  setFontSize('medium');
                  setUnsavedChanges(true);
                }}
              >
                MEDIUM
              </button>
              <button 
                className={`py-2 px-4 ${fontSize === 'large' ? currentTheme.primary + ' text-white' : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-100 hover:bg-indigo-200'} font-bold`}
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                onClick={() => {
                  setFontSize('large');
                  setUnsavedChanges(true);
                }}
              >
                LARGE
              </button>
            </div>
          </div>
          
          {/* Reading Direction */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Book className={`w-5 h-5 mr-2 ${currentTheme.text}`} />
              <span className="font-medium">Reading Direction</span>
            </div>
            <div className="flex space-x-4">
              <button 
                className={`py-2 px-4 ${readingDirection === 'right-to-left' ? currentTheme.primary + ' text-white' : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-100 hover:bg-indigo-200'} font-bold`}
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                onClick={() => {
                  setReadingDirection('right-to-left');
                  setUnsavedChanges(true);
                }}
              >
                RIGHT-TO-LEFT
              </button>
              <button 
                className={`py-2 px-4 ${readingDirection === 'left-to-right' ? currentTheme.primary + ' text-white' : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-100 hover:bg-indigo-200'} font-bold`}
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                onClick={() => {
                  setReadingDirection('left-to-right');
                  setUnsavedChanges(true);
                }}
              >
                LEFT-TO-RIGHT
              </button>
            </div>
          </div>

          {/* Reading Animation */}
          <div className="flex items-center justify-between">
            <span className="font-medium">Page Turn Animation</span>
            <div className={`w-12 h-6 ${currentTheme.primary} rounded-full relative cursor-pointer`} 
                onClick={() => setUnsavedChanges(true)}
                style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}>
              <div className="absolute w-4 h-4 bg-white rounded-full top-1 right-1"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sound settings */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform rotate-1`} style={{ 
        clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
        boxShadow: currentTheme.boxShadow
      }}>
        <h2 className="text-xl font-bold mb-4 uppercase tracking-tight flex items-center">
          <Volume2 className={`w-5 h-5 mr-2 ${currentTheme.text}`} />
          AUDIO
        </h2>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Notification Volume</span>
              <span className="text-sm">{audioSettings.notificationVolume}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={audioSettings.notificationVolume} 
              onChange={(e) => handleAudioChange('notificationVolume', parseInt(e.target.value))}
              className={`w-full h-2 ${currentTheme.primary} rounded appearance-none cursor-pointer`}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium">Sound Effects</span>
            <div 
              className={`w-12 h-6 ${audioSettings.enableSoundEffects ? currentTheme.primary : darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
              // onClick={() => handleAudioChange('enableSoundEffects')}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className={`absolute w-4 h-4 bg-white rounded-full top-1 ${audioSettings.enableSoundEffects ? 'right-1' : 'left-1'}`}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notification settings */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform rotate-1`} style={{ 
        clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
        boxShadow: currentTheme.boxShadow
      }}>
        <div className="flex items-center mb-4">
          <Bell className={`w-5 h-5 mr-2 ${currentTheme.text}`} />
          <h2 className="text-xl font-bold uppercase tracking-tight">NOTIFICATIONS</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">New chapter notifications</span>
            <div 
              className={`w-12 h-6 ${notifications.newChapter ? currentTheme.primary : darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
              onClick={() => toggleNotification('newChapter')}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className={`absolute w-4 h-4 bg-white rounded-full top-1 ${notifications.newChapter ? 'right-1' : 'left-1'}`}></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium">Comments on your reviews</span>
            <div 
              className={`w-12 h-6 ${notifications.comments ? currentTheme.primary : darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
              onClick={() => toggleNotification('comments')}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className={`absolute w-4 h-4 bg-white rounded-full top-1 ${notifications.comments ? 'right-1' : 'left-1'}`}></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium">Friend activity</span>
            <div 
              className={`w-12 h-6 ${notifications.friendActivity ? currentTheme.primary : darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
              onClick={() => toggleNotification('friendActivity')}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className={`absolute w-4 h-4 bg-white rounded-full top-1 ${notifications.friendActivity ? 'right-1' : 'left-1'}`}></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium">Site announcements</span>
            <div 
              className={`w-12 h-6 ${notifications.announcements ? currentTheme.primary : darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
              onClick={() => toggleNotification('announcements')}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className={`absolute w-4 h-4 bg-white rounded-full top-1 ${notifications.announcements ? 'right-1' : 'left-1'}`}></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium">Special offers</span>
            <div 
              className={`w-12 h-6 ${notifications.specialOffers ? currentTheme.primary : darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
              onClick={() => toggleNotification('specialOffers')}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className={`absolute w-4 h-4 bg-white rounded-full top-1 ${notifications.specialOffers ? 'right-1' : 'left-1'}`}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className={`py-2 px-4 ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'} rounded flex items-center`}>
            <Bell className={`w-4 h-4 mr-2 ${currentTheme.text}`} />
            <span className="text-sm">Set your most-awaited manga titles for priority notifications</span>
            <button className={`ml-auto py-1 px-3 text-sm ${currentTheme.primary} text-white font-bold`}>
              MANAGE
            </button>
          </div>
        </div>
      </div>

      {/* Language and Region */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform -rotate-1`} style={{ 
        clipPath: 'polygon(0 0, 100% 0, 98% 95%, 95% 100%, 0 100%)',
        boxShadow: currentTheme.boxShadow
      }}>
        <div className="flex items-center mb-4">
          <Globe className={`w-5 h-5 mr-2 ${currentTheme.text}`} />
          <h2 className="text-xl font-bold uppercase tracking-tight">LANGUAGE & REGION</h2>
        </div>
        
        <div className="space-y-4">
          <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>PREFERRED LANGUAGE</label>
            <select 
              className={`w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-indigo-50 text-gray-900'} border-2 ${darkMode ? 'border-gray-600' : 'border-violet-200'}`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
              defaultValue="en"
              onChange={() => setUnsavedChanges(true)}
            >
              <option value="en">English</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="zh">Chinese (Simplified)</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          
          <div>
            <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>REGION</label>
            <select 
              className={`w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-indigo-50 text-gray-900'} border-2 ${darkMode ? 'border-gray-600' : 'border-violet-200'}`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
              defaultValue="global"
              onChange={() => setUnsavedChanges(true)}
            >
              <option value="global">Global</option>
              <option value="jp">Japan</option>
              <option value="kr">Korea</option>
              <option value="cn">China</option>
              <option value="us">United States</option>
              <option value="eu">Europe</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium">Show Original Manga Titles</span>
            <div 
              className={`w-12 h-6 ${currentTheme.primary} rounded-full relative cursor-pointer`}
              onClick={() => setUnsavedChanges(true)}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className="absolute w-4 h-4 bg-white rounded-full top-1 right-1"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium">Release Date Format</span>
            <div className="flex space-x-4">
              <button 
                className={`py-1 px-3 text-sm font-bold ${currentTheme.primary} text-white`}
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
              >
                MM/DD/YYYY
              </button>
              <button 
                className={`py-1 px-3 text-sm font-bold ${darkMode ? 'bg-gray-700' : 'bg-indigo-100'}`}
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                onClick={() => setUnsavedChanges(true)}
              >
                DD/MM/YYYY
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Privacy settings */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform -rotate-1`} style={{ 
        clipPath: 'polygon(0 0, 100% 0, 98% 95%, 95% 100%, 0 100%)',
        boxShadow: currentTheme.boxShadow
      }}>
        <div className="flex items-center mb-4">
          <Lock className={`w-5 h-5 mr-2 ${currentTheme.text}`} />
          <h2 className="text-xl font-bold mb-4 uppercase tracking-tight">PRIVACY & SECURITY</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Public Profile</span>
            <div 
              className={`w-12 h-6 ${privacy.publicProfile ? currentTheme.primary : darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
              onClick={() => togglePrivacy('publicProfile')}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className={`absolute w-4 h-4 bg-white rounded-full top-1 ${privacy.publicProfile ? 'right-1' : 'left-1'}`}></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium">Show Reading Activity</span>
            <div 
              className={`w-12 h-6 ${privacy.showReadingActivity ? currentTheme.primary : darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
              onClick={() => togglePrivacy('showReadingActivity')}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className={`absolute w-4 h-4 bg-white rounded-full top-1 ${privacy.showReadingActivity ? 'right-1' : 'left-1'}`}></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium">Allow Friend Requests</span>
            <div 
              className={`w-12 h-6 ${privacy.allowFriendRequests ? currentTheme.primary : darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
              onClick={() => togglePrivacy('allowFriendRequests')}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className={`absolute w-4 h-4 bg-white rounded-full top-1 ${privacy.allowFriendRequests ? 'right-1' : 'left-1'}`}></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium">Block NSFW Content</span>
            <div 
              className={`w-12 h-6 ${currentTheme.primary} rounded-full relative cursor-pointer`}
              onClick={() => setUnsavedChanges(true)}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className="absolute w-4 h-4 bg-white rounded-full top-1 right-1"></div>
            </div>
          </div>
          
          <div className="mt-6">
            <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>CHANGE PASSWORD</label>
            <div className="space-y-3">
              <input 
                type="password" 
                placeholder="Current Password" 
                value={passwords.current}
                onChange={(e) => handlePasswordChange('current', e.target.value)}
                className={`w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-indigo-50 text-gray-900'} border-2 ${darkMode ? 'border-gray-600' : 'border-violet-200'}`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
              />
              <input 
                type="password" 
                placeholder="New Password" 
                value={passwords.new}
                onChange={(e) => handlePasswordChange('new', e.target.value)}
                className={`w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-indigo-50 text-gray-900'} border-2 ${darkMode ? 'border-gray-600' : 'border-violet-200'}`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
              />
              <input 
                type="password" 
                placeholder="Confirm New Password" 
                value={passwords.confirm}
                onChange={(e) => handlePasswordChange('confirm', e.target.value)}
                className={`w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-indigo-50 text-gray-900'} border-2 ${darkMode ? 'border-gray-600' : 'border-violet-200'}`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
              />
            </div>
            <div className="mt-3">
              <button 
                className={`py-2 px-6 font-bold uppercase ${currentTheme.primary} hover:${currentTheme.hover} text-white transform skew-x-3 hover:scale-105 transition-transform`}
                style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
                onClick={handleSaveSettings}
                disabled={!passwords.current || !passwords.new || !passwords.confirm || passwords.new !== passwords.confirm}
              >
                UPDATE PASSWORD
              </button>
              {passwords.new && passwords.confirm && passwords.new !== passwords.confirm && (
                <p className="text-red-500 text-sm mt-1">Passwords don't match</p>
              )}
            </div>
          </div>
          
          <div className="mt-6">
            <div className={`py-3 px-4 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-indigo-50 border-indigo-100'} border-l-4 ${currentTheme.text} rounded flex items-center`}>
              <Lock className="w-4 h-4 mr-2" />
              <span className="text-sm">Two-factor authentication provides additional security</span>
              <button className={`ml-auto py-1 px-3 text-sm ${currentTheme.primary} text-white font-bold`}>
                ENABLE
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data Export */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform rotate-1`} style={{ 
        clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
        boxShadow: currentTheme.boxShadow
      }}>
        <h2 className="text-xl font-bold mb-4 uppercase tracking-tight">DATA EXPORT</h2>
        
        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Download your reading history, reviews, and manga collection data
        </p>
        
        <div className="flex flex-wrap gap-3">
          <button 
            className={`py-2 px-4 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-100 hover:bg-indigo-200'} font-bold transform -skew-x-6`}
            style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
          >
            READING HISTORY
          </button>
          <button 
            className={`py-2 px-4 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-100 hover:bg-indigo-200'} font-bold transform -skew-x-6`}
            style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
          >
            REVIEWS
          </button>
          <button 
            className={`py-2 px-4 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-100 hover:bg-indigo-200'} font-bold transform -skew-x-6`}
            style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
          >
            COLLECTION
          </button>
          <button 
            className={`py-2 px-4 ${currentTheme.primary} hover:${currentTheme.hover} text-white font-bold transform -skew-x-6`}
            style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
          >
            EXPORT ALL DATA
          </button>
        </div>
      </div>
      
      {/* Manga Library */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform -rotate-1`} style={{ 
        clipPath: 'polygon(0 0, 100% 0, 98% 95%, 95% 100%, 0 100%)',
        boxShadow: currentTheme.boxShadow
      }}>
        <h2 className="text-xl font-bold mb-4 uppercase tracking-tight">MANGA LIBRARY</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Cache manga locally</span>
            <div 
              className={`w-12 h-6 ${currentTheme.primary} rounded-full relative cursor-pointer`}
              onClick={() => setUnsavedChanges(true)}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className="absolute w-4 h-4 bg-white rounded-full top-1 right-1"></div>
            </div>
          </div>
          
          <div>
            <span className="font-medium block mb-2">Maximum Cache Size</span>
            <div className="flex items-center gap-3">
              <input 
                type="range" 
                min="1" 
                max="10" 
                defaultValue="2" 
                className={`flex-1 h-2 ${currentTheme.primary} rounded appearance-none cursor-pointer`}
                onChange={() => setUnsavedChanges(true)}
              />
              <span className="w-12 text-center font-bold">2GB</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium">Auto-download new chapters</span>
            <div 
              className={`w-12 h-6 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
              onClick={() => setUnsavedChanges(true)}
              style={{ clipPath: 'polygon(0 30%, 5% 0, 95% 0, 100% 30%, 100% 70%, 95% 100%, 5% 100%, 0 70%)' }}
            >
              <div className="absolute w-4 h-4 bg-white rounded-full top-1 left-1"></div>
            </div>
          </div>
          
          <div className="mt-3">
            <button 
              className={`py-2 px-6 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-100 hover:bg-indigo-200'} font-bold transform skew-x-3`}
              style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
            >
              CLEAR CACHE
            </button>
          </div>
        </div>
      </div>
      
      {/* Save button - fixed at bottom */}
      <div className={`sticky bottom-4 pt-8 flex justify-between ${unsavedChanges ? 'visible' : 'invisible'}`}>
        <button 
          className={`py-3 px-8 font-bold uppercase ${currentTheme.primary} hover:${currentTheme.hover} text-white transform -skew-x-6 hover:scale-105 transition-transform animate-pulse`}
          style={{ 
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
            boxShadow: `0 4px 6px rgba(0, 0, 0, 0.2), 0 0 15px ${darkMode ? 'rgba(236, 72, 153, 0.5)' : 'rgba(124, 58, 237, 0.5)'}`
          }}
          onClick={handleSaveSettings}
        >
          <Save className="w-5 h-5 inline-block mr-2" />
          SAVE ALL SETTINGS
        </button>
        
        <button 
          className={`py-3 px-6 font-bold uppercase ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transform skew-x-6`}
          style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
          onClick={() => setUnsavedChanges(false)}
        >
          CANCEL
        </button>
      </div>
      
      {/* Danger zone */}
      <div className={`${darkMode ? 'bg-gray-800 border-2 border-pink-700' : 'bg-white border-2 border-red-400'} p-6 transform rotate-1`} style={{ 
        clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
        boxShadow: '4px 4px 0px rgba(239, 68, 68, 0.3)'
      }}>
        <div className="flex items-center mb-4">
          <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
          <h2 className="text-xl font-bold uppercase tracking-tight text-red-500">DANGER ZONE</h2>
        </div>
        
        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Once you delete your account, there is no going back. Please be certain.
        </p>
        
        <button 
          className="py-2 px-6 bg-red-600 hover:bg-red-700 text-white font-bold uppercase transform -skew-x-6 hover:scale-105 transition-transform"
          style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
          onClick={() => setShowConfirmDelete(true)}
        >
          <Trash2 className="w-4 h-4 inline-block mr-2" />
          DELETE MY ACCOUNT
        </button>
      </div>
      
      {/* Confirmation dialog */}
      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div 
            className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-6 max-w-md w-full transform -rotate-1`} 
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 97% 97%, 3% 100%)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 25px rgba(220, 38, 38, 0.5)'
            }}
          >
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-8 h-8 mr-2 text-red-500" />
              <h2 className="text-2xl font-black uppercase tracking-tight text-red-500">WARNING!</h2>
            </div>
            
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              You're about to delete your account and all associated data. This action <span className="font-bold">CANNOT</span> be undone.
              Are you absolutely sure?
            </p>
            
            <div className="flex justify-between">
              <button 
                className={`py-2 px-6 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} font-bold uppercase transform skew-x-3`}
                style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
                onClick={() => setShowConfirmDelete(false)}
              >
                CANCEL
              </button>
              
              <button 
                className="py-2 px-6 bg-red-600 hover:bg-red-700 text-white font-bold uppercase transform -skew-x-6 hover:scale-105 transition-transform"
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                onClick={handleDeleteAccount}
              >
                DELETE FOREVER
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;