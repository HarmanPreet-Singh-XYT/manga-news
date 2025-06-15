'use client'
import React, { useState, useRef } from 'react';
import { User, Camera, Mail, Globe, Bell, Shield, Download, UserX, Moon, Sun, Monitor, Edit3, Save, X, Check } from 'lucide-react';

const UserDashboard = () => {
  const [isDark, setIsDark] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const fileInputRef = useRef(null);
  
  const [profile, setProfile] = useState({
    username: 'otaku_master',
    fullName: 'Alex Chen',
    email: 'alex.chen@email.com',
    bio: 'Passionate about manga, anime, and Japanese culture. Always hunting for the next great series! 🍜✨',
    theme: 'dark',
    newsletter: true,
    language: 'en'
  });

  const [tempProfile, setTempProfile] = useState(profile);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target.result);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    setTempProfile({...tempProfile, theme: !isDark ? 'dark' : 'light'});
  };

  const themeClasses = isDark 
    ? 'bg-gray-900 text-white'
    : 'bg-blue-50 text-gray-900';

  const cardClasses = isDark
    ? 'bg-gray-800 border-pink-500'
    : 'bg-white border-violet-400';

  const accentColor = isDark ? 'text-pink-400' : 'text-violet-600';
  const buttonPrimary = isDark 
    ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
    : 'bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-violet-600"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 ${isDark ? 'bg-pink-400' : 'bg-violet-400'} rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-black uppercase tracking-wider text-shadow-lg">
                USER DASHBOARD
              </h1>
              <div className="flex items-center mt-2">
                <div className={`w-3 h-3 ${isDark ? 'bg-pink-400' : 'bg-violet-500'} rounded-full animate-pulse mr-2`}></div>
                <p className={`${accentColor} font-bold uppercase text-sm tracking-wide`}>
                  MANAGE YOUR PROFILE
                </p>
              </div>
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-full ${buttonPrimary} text-white shadow-lg hover:-translate-y-1 transition-all duration-200`}
            >
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Gradient Divider */}
          <div className={`h-1 w-full bg-gradient-to-r ${isDark ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600'} rounded-full shadow-lg`}></div>
        </div>

        {/* Profile Card */}
        <div className={`${cardClasses} rounded-lg border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-8`}>
          <div className="p-8">
            {/* Profile Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center space-x-6">
                {/* Avatar */}
                <div className="relative group">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${isDark ? 'from-pink-400 to-purple-600' : 'from-violet-400 to-purple-600'} p-1 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                      {avatarPreview ? (
                        <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-10 h-10 text-gray-400" />
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className={`absolute -bottom-2 -right-2 w-8 h-8 ${buttonPrimary} rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200`}
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </div>

                {/* User Info */}
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-wide mb-1">
                    {profile.username}
                  </h2>
                  <p className={`${accentColor} font-semibold mb-2`}>
                    {profile.fullName}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-gray-700 text-pink-300' : 'bg-violet-100 text-violet-700'} font-semibold uppercase tracking-wide`}>
                      ACTIVE USER
                    </span>
                    <div className={`w-2 h-2 ${isDark ? 'bg-green-400' : 'bg-green-500'} rounded-full animate-pulse`}></div>
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-6 py-3 rounded-full ${isEditing ? 'bg-gray-600 hover:bg-gray-700' : buttonPrimary} text-white font-bold uppercase tracking-wide shadow-lg hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2`}
              >
                {isEditing ? <X className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                <span>{isEditing ? 'CANCEL' : 'EDIT'}</span>
              </button>
            </div>

            {/* Profile Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Username */}
                <div>
                  <label className="block text-sm font-black uppercase tracking-wider mb-2">
                    USERNAME
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempProfile.username}
                      onChange={(e) => setTempProfile({...tempProfile, username: e.target.value})}
                      className={`w-full p-4 rounded-lg border-2 ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 ${isDark ? 'focus:ring-pink-400 focus:border-pink-400' : 'focus:ring-violet-400 focus:border-violet-400'} transition-colors`}
                    />
                  ) : (
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} border-2 border-transparent`}>
                      {profile.username}
                    </div>
                  )}
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-black uppercase tracking-wider mb-2">
                    FULL NAME
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempProfile.fullName}
                      onChange={(e) => setTempProfile({...tempProfile, fullName: e.target.value})}
                      className={`w-full p-4 rounded-lg border-2 ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 ${isDark ? 'focus:ring-pink-400 focus:border-pink-400' : 'focus:ring-violet-400 focus:border-violet-400'} transition-colors`}
                    />
                  ) : (
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} border-2 border-transparent`}>
                      {profile.fullName}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-black uppercase tracking-wider mb-2 flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>EMAIL</span>
                  </label>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} border-2 border-transparent opacity-75`}>
                    {profile.email}
                    <span className="text-xs ml-2 opacity-60">(READONLY)</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Bio */}
                <div>
                  <label className="block text-sm font-black uppercase tracking-wider mb-2">
                    BIO ({tempProfile.bio.length}/200)
                  </label>
                  {isEditing ? (
                    <textarea
                      value={tempProfile.bio}
                      onChange={(e) => setTempProfile({...tempProfile, bio: e.target.value.slice(0, 200)})}
                      className={`w-full p-4 rounded-lg border-2 ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 ${isDark ? 'focus:ring-pink-400 focus:border-pink-400' : 'focus:ring-violet-400 focus:border-violet-400'} transition-colors h-32 resize-none`}
                      maxLength={200}
                    />
                  ) : (
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} border-2 border-transparent h-32 overflow-y-auto`}>
                      {profile.bio}
                    </div>
                  )}
                </div>

                {/* Preferences */}
                <div className="space-y-4">
                  {/* Language */}
                  <div>
                    <label className="block text-sm font-black uppercase tracking-wider mb-2 flex items-center space-x-2">
                      <Globe className="w-4 h-4" />
                      <span>LANGUAGE</span>
                    </label>
                    {isEditing ? (
                      <select
                        value={tempProfile.language}
                        onChange={(e) => setTempProfile({...tempProfile, language: e.target.value})}
                        className={`w-full p-4 rounded-lg border-2 ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 ${isDark ? 'focus:ring-pink-400 focus:border-pink-400' : 'focus:ring-violet-400 focus:border-violet-400'} transition-colors`}
                      >
                        <option value="en">English</option>
                        <option value="ja">日本語</option>
                        <option value="ko">한국어</option>
                        <option value="zh">中文</option>
                      </select>
                    ) : (
                      <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} border-2 border-transparent`}>
                        English
                      </div>
                    )}
                  </div>

                  {/* Newsletter */}
                  <div>
                    <label className="flex items-center justify-between p-4 rounded-lg border-2 border-transparent cursor-pointer hover:border-opacity-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Bell className="w-5 h-5" />
                        <div>
                          <span className="font-bold uppercase tracking-wide">NEWSLETTER</span>
                          <p className="text-sm opacity-75">Get latest manga & anime updates</p>
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={isEditing ? tempProfile.newsletter : profile.newsletter}
                          onChange={(e) => isEditing && setTempProfile({...tempProfile, newsletter: e.target.checked})}
                          disabled={!isEditing}
                          className="sr-only"
                        />
                        <div className={`w-12 h-6 rounded-full transition-colors ${(isEditing ? tempProfile.newsletter : profile.newsletter) ? (isDark ? 'bg-pink-500' : 'bg-violet-500') : 'bg-gray-400'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${(isEditing ? tempProfile.newsletter : profile.newsletter) ? 'translate-x-6' : 'translate-x-0.5'} mt-0.5`}></div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Save/Cancel Buttons */}
            {isEditing && (
              <div className="flex justify-end space-x-4 mt-8 pt-8 border-t-2 border-opacity-20 border-gray-500">
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 rounded-full bg-gray-600 hover:bg-gray-700 text-white font-bold uppercase tracking-wide shadow-lg hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2"
                >
                  <X className="w-4 h-4" />
                  <span>CANCEL</span>
                </button>
                <button
                  onClick={handleSave}
                  className={`px-6 py-3 rounded-full ${buttonPrimary} text-white font-bold uppercase tracking-wide shadow-lg hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2`}
                >
                  <Save className="w-4 h-4" />
                  <span>SAVE CHANGES</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Account Actions */}
        <div className={`${cardClasses} rounded-lg border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
          <div className="p-8">
            <h3 className="text-2xl font-black uppercase tracking-wider mb-6 flex items-center space-x-3">
              <Shield className="w-6 h-6" />
              <span>ACCOUNT ACTIONS</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Change Password */}
              <button className={`p-6 rounded-lg border-2 ${isDark ? 'border-yellow-500 hover:bg-yellow-500' : 'border-orange-400 hover:bg-orange-400'} hover:text-white transition-all duration-200 hover:-translate-y-1 flex flex-col items-center space-y-3 group`}>
                <Shield className="w-8 h-8" />
                <span className="font-bold uppercase tracking-wide text-center">CHANGE PASSWORD</span>
              </button>

              {/* Export Data */}
              <button className={`p-6 rounded-lg border-2 ${isDark ? 'border-blue-400 hover:bg-blue-400' : 'border-blue-500 hover:bg-blue-500'} hover:text-white transition-all duration-200 hover:-translate-y-1 flex flex-col items-center space-y-3 group`}>
                <Download className="w-8 h-8" />
                <span className="font-bold uppercase tracking-wide text-center">EXPORT DATA</span>
              </button>

              {/* Deactivate Account */}
              <button className={`p-6 rounded-lg border-2 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 hover:-translate-y-1 flex flex-col items-center space-y-3 group`}>
                <UserX className="w-8 h-8" />
                <span className="font-bold uppercase tracking-wide text-center">DEACTIVATE ACCOUNT</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} border-2 ${isDark ? 'border-pink-500' : 'border-violet-400'} shadow-lg`}>
            <Check className={`w-4 h-4 ${accentColor}`} />
            <span className="font-bold uppercase tracking-wide text-xs">PROFILE UPDATED SUCCESSFULLY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;