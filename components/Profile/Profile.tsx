import React, { useState } from 'react';
import { Star, Medal, Settings, Eye, Award, Bell, Edit, Calendar, Shield, Image as ImageIcon } from 'lucide-react';

const Profile = ({ activeTab, darkMode }) => {
  // State for the component
  const [username, setUsername] = useState("KunaiMaster");
  const [email, setEmail] = useState("kunai.master@example.com");
  const [bio, setBio] = useState("Anime enthusiast since 2005. Lover of shonen and slice-of-life genres. Always hunting for the next great manga series!");
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('info');
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New episode of 'Dragon Sphere Z' available", read: false },
    { id: 2, text: "Your favorite author released a new chapter", read: false },
    { id: 3, text: "Winter anime season starting next week", read: true }
  ]);
  
  // User stats
  const userStats = {
    watchedAnime: 156,
    readManga: 83,
    favoriteGenres: ["Shonen", "Slice of Life", "Fantasy"],
    topAnime: ["One Piece", "Attack on Titan", "Jujutsu Kaisen", "Demon Slayer", "My Hero Academia"],
    achievements: [
      { id: 1, name: "Otaku Level 10", icon: <Medal size={16} /> },
      { id: 2, name: "Manga Master", icon: <Award size={16} /> },
      { id: 3, name: "Early Adopter", icon: <Shield size={16} /> }
    ]
  };
  
  // Handle form submission
  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, you would send this data to a server
    alert("Profile updated successfully!");
  };
  
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(note => ({...note, read: true})));
  };
  
  // Avatar selector options
  const avatarOptions = [
    "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25242262/26355890.jpeg?quality=90&strip=all&crop=7.8125,0,84.375,100",
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/best-anime-of-all-time.jpg",
    "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2025/02/solo-leveling.jpg"
  ];
  
  // Function to handle section changes
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      {activeTab === 'profile' && (
        <div className="space-y-8 relative overflow-hidden">
          {/* Anime-style header with slashed background */}
          <div className={`relative ${darkMode ? 'bg-gray-900' : 'bg-indigo-50'} py-6 px-4 mb-8`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
              background: darkMode ? 
                'linear-gradient(135deg, #1f1f35 0%, #3d1053 100%)' : 
                'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)'
            }}>
            
            {/* Speed lines background effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ 
              background: darkMode ? 
                'repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 1px, transparent 10px)' : 
                'repeating-linear-gradient(45deg, #000, #000 1px, transparent 1px, transparent 10px)' 
            }}></div>
            
            <div className="flex items-center space-x-4">
              {/* Avatar with anime-style border */}
              <div className="relative">
                <div className={`w-24 h-24 rounded-full overflow-hidden border-4 ${darkMode ? 'border-pink-500' : 'border-violet-500'} transform -rotate-3`}
                  style={{ boxShadow: darkMode ? '0 0 15px rgba(236, 72, 153, 0.5)' : '0 0 15px rgba(124, 58, 237, 0.5)' }}>
                  <img src={'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2025/02/solo-leveling.jpg'} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center transform rotate-12"
                  style={{ boxShadow: '0 0 0 2px black' }}>
                  <Star size={16} className="text-black" />
                </div>
              </div>
              
              {/* Username and level */}
              <div>
                <h1 className={`text-3xl font-black uppercase transform -skew-x-3 ${darkMode ? 'text-pink-500' : 'text-violet-600'}`} 
                  style={{ textShadow: darkMode ? '3px 3px 0px #831843' : '3px 3px 0px #7c3aed' }}>
                  {username}
                </h1>
                <div className="flex items-center mt-1 space-x-2">
                  <span className={`inline-flex items-center py-1 px-3 text-sm font-bold ${darkMode ? 'bg-yellow-500 text-gray-900' : 'bg-yellow-500 text-gray-900'}`} 
                    style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)' }}>
                    LEVEL 42
                  </span>
                  <div className="h-2 w-24 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation tabs */}
          <div className="flex space-x-2 overflow-x-auto mb-6 pb-2">
            {['info', 'stats', 'collection', 'notifications'].map((section) => (
              <button 
                key={section}
                onClick={() => handleSectionChange(section)}
                className={`py-2 px-4 font-bold uppercase whitespace-nowrap ${
                  activeSection === section 
                    ? (darkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white')
                    : (darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700')
                } transform -skew-x-6 hover:scale-105 transition-transform`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Main content area - Account Information */}
          {activeSection === 'info' && (
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform -rotate-1`} style={{ 
              clipPath: 'polygon(0 0, 100% 0, 98% 95%, 95% 100%, 0 100%)',
              boxShadow: darkMode ? '4px 4px 0px rgba(236, 72, 153, 0.3)' : '4px 4px 0px rgba(124, 58, 237, 0.3)'
            }}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold uppercase tracking-tight">ACCOUNT INFORMATION</h2>
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className={`py-1 px-3 font-bold uppercase ${
                    isEditing 
                      ? (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700') 
                      : (darkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white')
                  } flex items-center space-x-1 transform -skew-x-6`}
                >
                  <Edit size={16} />
                  <span>{isEditing ? 'CANCEL' : 'EDIT'}</span>
                </button>
              </div>
              
              <form onSubmit={handleUpdate} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>USERNAME</label>
                    <input 
                      type="text" 
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)}
                      className={`w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-indigo-50 text-gray-900'} border-2 ${darkMode ? 'border-pink-500' : 'border-violet-500'}`}
                      style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
                      readOnly={!isEditing}
                    />
                  </div>
                  <div>
                    <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>EMAIL</label>
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-indigo-50 text-gray-900'} border-2 ${darkMode ? 'border-pink-500' : 'border-violet-500'}`}
                      style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
                      readOnly={!isEditing}
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>BIO</label>
                  <textarea 
                    className={`w-full h-24 py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-indigo-50 text-gray-900'} border-2 ${darkMode ? 'border-pink-500' : 'border-violet-500'}`}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)' }}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    readOnly={!isEditing}
                  ></textarea>
                </div>
                
                {isEditing && (
                  <div>
                    <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>SELECT AVATAR</label>
                    <div className="flex space-x-3 overflow-x-auto pb-2">
                      {avatarOptions.map((src, index) => (
                        <div key={index} className={`w-16 h-16 rounded-md overflow-hidden border-2 ${index === 0 ? (darkMode ? 'border-pink-500' : 'border-violet-500') : (darkMode ? 'border-gray-700' : 'border-gray-200')}`}>
                          <img src={src} alt={`Avatar option ${index+1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                      <div className={`w-16 h-16 rounded-md overflow-hidden border-2 border-dashed flex items-center justify-center ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'}`}>
                        <ImageIcon size={24} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                      </div>
                    </div>
                  </div>
                )}
                
                {isEditing && (
                  <div className="pt-4">
                    <button 
                      type="submit"
                      className={`py-2 px-6 font-bold uppercase ${darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-violet-600 hover:bg-violet-700'} text-white transform -skew-x-6 hover:scale-105 transition-transform`}
                      style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                    >
                      UPDATE PROFILE
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}
          
          {/* User Stats */}
          {activeSection === 'stats' && (
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform rotate-1`} style={{ 
              clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
              boxShadow: darkMode ? '4px 4px 0px rgba(236, 72, 153, 0.3)' : '4px 4px 0px rgba(124, 58, 237, 0.3)'
            }}>
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4">ANIME STATS</h2>
            
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'} transform -rotate-1`} style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}>
                  <div className="flex items-center space-x-2">
                    <Eye size={20} className={darkMode ? 'text-pink-500' : 'text-violet-500'} />
                    <span className="font-bold">Watched Anime</span>
                  </div>
                  <div className="text-3xl font-black mt-2">{userStats.watchedAnime}</div>
                </div>
                
                <div className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'} transform rotate-1`} style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}>
                  <div className="flex items-center space-x-2">
                    <Award size={20} className={darkMode ? 'text-pink-500' : 'text-violet-500'} />
                    <span className="font-bold">Read Manga</span>
                  </div>
                  <div className="text-3xl font-black mt-2">{userStats.readManga}</div>
                </div>
                
                <div className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'} transform -rotate-1`} style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}>
                  <div className="flex items-center space-x-2">
                    <Calendar size={20} className={darkMode ? 'text-pink-500' : 'text-violet-500'} />
                    <span className="font-bold">Member Since</span>
                  </div>
                  <div className="text-xl font-bold mt-2">2018</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-pink-500' : 'text-violet-600'}`}>TOP ANIME</h3>
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-indigo-50'} p-4`} style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
                    <ul className="space-y-2">
                      {userStats.topAnime.map((anime, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="font-bold">{index + 1}. </span>
                          <span>{anime}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-pink-500' : 'text-violet-600'}`}>FAVORITE GENRES</h3>
                  <div className="flex flex-wrap gap-2">
                    {userStats.favoriteGenres.map((genre, index) => (
                      <span 
                        key={index} 
                        className={`py-1 px-3 font-bold text-sm ${darkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white'}`}
                        style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)' }}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-pink-500' : 'text-violet-600'}`}>ACHIEVEMENTS</h3>
                <div className="flex flex-wrap gap-2">
                  {userStats.achievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className={`py-2 px-3 flex items-center space-x-2 ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'} transform skew-x-3`}
                      style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-pink-500' : 'bg-violet-500'} text-white`}>
                        {achievement.icon}
                      </div>
                      <span className="font-bold">{achievement.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Collection Section */}
          {activeSection === 'collection' && (
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform -rotate-1`} style={{ 
              clipPath: 'polygon(0 0, 100% 0, 98% 95%, 95% 100%, 0 100%)',
              boxShadow: darkMode ? '4px 4px 0px rgba(236, 72, 153, 0.3)' : '4px 4px 0px rgba(124, 58, 237, 0.3)'
            }}>
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4">MY COLLECTION</h2>
              
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-pink-500' : 'text-violet-600'}`}>CURRENTLY WATCHING</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="relative group">
                      <div className={`aspect-[3/4] overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'} transform group-hover:scale-105 transition-transform`}
                        style={{ clipPath: 'polygon(0 0, 100% 0, 95% 95%, 0 100%)' }}>
                        <img src="https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt={`Anime ${item}`} className="w-full h-full object-cover" />
                        <div className={`absolute bottom-0 left-0 right-0 p-2 ${darkMode ? 'bg-gray-900/80' : 'bg-indigo-600/80'} text-white text-sm font-bold`}>
                          Anime Title - One Piece
                        </div>
                      </div>
                      <div className={`absolute top-0 right-0 w-8 h-8 ${darkMode ? 'bg-pink-500' : 'bg-violet-500'} flex items-center justify-center transform rotate-12 text-white font-bold`}
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%)' }}>
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-pink-500' : 'text-violet-600'}`}>MY MANGA SHELF</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="relative group">
                      <div className={`aspect-[3/4] overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'} transform skew-x-3 group-hover:scale-105 transition-transform`}>
                        <img src="https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt={`Manga ${item}`} className="w-full h-full object-cover" />
                        <div className={`absolute bottom-0 left-0 right-0 p-2 ${darkMode ? 'bg-gray-900/80' : 'bg-indigo-600/80'} text-white text-sm font-bold`}>
                          Manga Title - Demon Slayer
                        </div>
                      </div>
                      <div className={`absolute top-2 right-2 w-6 h-6 rounded-full ${darkMode ? 'bg-pink-500' : 'bg-violet-500'} flex items-center justify-center text-white font-bold text-sm`}>
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center mt-6">
                <button 
                  className={`py-2 px-8 font-bold uppercase ${darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-violet-600 hover:bg-violet-700'} text-white transform -skew-x-6 hover:scale-105 transition-transform`}
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                >
                  VIEW FULL COLLECTION
                </button>
              </div>
            </div>
          )}
          
          {/* Notifications Section */}
          {activeSection === 'notifications' && (
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform rotate-1`} style={{ 
              clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
              boxShadow: darkMode ? '4px 4px 0px rgba(236, 72, 153, 0.3)' : '4px 4px 0px rgba(124, 58, 237, 0.3)'
            }}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold uppercase tracking-tight">NOTIFICATIONS</h2>
                <button 
                  onClick={markAllAsRead}
                  className={`py-1 px-3 text-sm font-bold uppercase ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  MARK ALL AS READ
                </button>
              </div>
              
              <div className="space-y-3">
                {notifications.length > 0 ? (
                  notifications.map((note) => (
                    <div 
                      key={note.id} 
                      className={`p-3 ${note.read 
                        ? (darkMode ? 'bg-gray-700/50' : 'bg-gray-100') 
                        : (darkMode ? 'bg-gray-700 border-l-4 border-pink-500' : 'bg-indigo-50 border-l-4 border-violet-500')
                      } transform -skew-x-3`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          <Bell size={16} className={note.read 
                            ? (darkMode ? 'text-gray-500' : 'text-gray-400') 
                            : (darkMode ? 'text-pink-500' : 'text-violet-500')
                          } />
                          <span className={note.read ? 'opacity-70' : 'font-medium'}>{note.text}</span>
                        </div>
                        {!note.read && (
                          <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-pink-500' : 'bg-violet-500'}`}></div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Bell size={32} className={`mx-auto mb-2 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>No new notifications</p>
                  </div>
                )}
              </div>
              
              <div className="mt-4 text-center">
                <button 
                  className={`py-2 px-6 font-bold uppercase ${darkMode ? 'border-2 border-gray-600 hover:border-gray-500' : 'border-2 border-violet-300 hover:border-violet-400'} transform skew-x-3 hover:scale-105 transition-transform`}
                  style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
                >
                  NOTIFICATION SETTINGS
                </button>
              </div>
            </div>
          )}
          
          {/* Subscription card */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 transform rotate-1`} style={{ 
            clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
            boxShadow: darkMode ? '4px 4px 0px rgba(236, 72, 153, 0.3)' : '4px 4px 0px rgba(124, 58, 237, 0.3)'
          }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold uppercase tracking-tight">SUBSCRIPTION</h2>
              <span className={`inline-flex items-center py-1 px-3 text-sm font-bold ${darkMode ? 'bg-yellow-500 text-gray-900' : 'bg-yellow-500 text-gray-900'}`} style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)' }}>
                PREMIUM
              </span>
            </div>
            
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Your premium subscription renews on <span className="font-bold">May 15, 2025</span>
            </p>
            
            {/* Subscription benefits */}
            <div className={`mb-4 p-3 ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'}`}>
              <h3 className="font-bold mb-2">PREMIUM BENEFITS:</h3>
              <ul className="space-y-1">
                <li className="flex items-center space-x-2">
                  <Star size={12} className={darkMode ? 'text-pink-500' : 'text-violet-500'} />
                  <span>Ad-free experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star size={12} className={darkMode ? 'text-pink-500' : 'text-violet-500'} />
                  <span>Early access to new releases</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star size={12} className={darkMode ? 'text-pink-500' : 'text-violet-500'} />
                  <span>Exclusive weekly wallpapers</span>
                </li>
              </ul>
            </div>
            
            <div className="flex space-x-4">
              <button 
                className={`py-2 px-4 font-bold uppercase ${darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-violet-600 hover:bg-violet-700'} text-white transform skew-x-3 hover:scale-105 transition-transform`}
                style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
              >
                MANAGE SUBSCRIPTION
              </button>
              <button 
                className={`py-2 px-4 font-bold uppercase ${darkMode ? 'border-2 border-gray-600 hover:border-gray-500' : 'border-2 border-violet-300 hover:border-violet-400'} transform skew-x-3 hover:scale-105 transition-transform`}
                style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
              >
                VIEW HISTORY
              </button>
            </div>
          </div>
          
          {/* Decorative anime-style elements */}
          <div className="absolute -bottom-4 -left-4 w-64 h-64 opacity-5 pointer-events-none" style={{ 
            background: 'radial-gradient(circle, currentColor 10%, transparent 10.5%), radial-gradient(circle, currentColor 10%, transparent 10.5%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
          }}></div>
          
          {/* Speed lines effect for anime style */}
          <div className="absolute top-20 right-0 w-32 h-64 opacity-5 pointer-events-none transform -rotate-12" style={{ 
            background: 'repeating-linear-gradient(-45deg, currentColor, currentColor 1px, transparent 1px, transparent 6px)' 
          }}></div>
        </div>
      )}
    </>
  );
};

export default Profile;