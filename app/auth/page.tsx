'use client'
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Globe, Twitter, Chrome, MessageCircle, Moon, Sun, Sparkles, Zap, Star } from 'lucide-react';

export default function MangaNewsAuth() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    role: 'user',
    agreeTerms: false
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const AnimatedDot = ({ delay = 0 }) => (
    <div 
      className={`w-2 h-2 rounded-full ${darkMode ? 'bg-pink-500' : 'bg-violet-500'} animate-pulse`}
      style={{ animationDelay: `${delay}ms` }}
    />
  );

  const GlowButton = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
    const baseClasses = "relative px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4";
    
    const variants = {
      primary: darkMode 
        ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg hover:shadow-pink-500/25 focus:ring-pink-500/50" 
        : "bg-gradient-to-r from-violet-500 to-violet-600 text-white shadow-lg hover:shadow-violet-500/25 focus:ring-violet-500/50",
      secondary: darkMode
        ? "bg-gray-800 border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white"
        : "bg-white border-2 border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white",
      oauth: darkMode
        ? "bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
    };

    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  const InputField = ({ icon: Icon, type = 'text', name, placeholder, value, onChange, showToggle = false, onToggle }) => (
    <div className="relative group">
      <div className={`absolute inset-0 rounded-lg ${darkMode ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20' : 'bg-gradient-to-r from-violet-500/20 to-purple-500/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
      <div className={`relative flex items-center ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-2 rounded-lg px-4 py-3 focus-within:border-${darkMode ? 'pink' : 'violet'}-500 transition-colors duration-300`}>
        <Icon className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'} mr-3`} />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`flex-1 bg-transparent ${darkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'} focus:outline-none`}
        />
        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className={`ml-3 ${darkMode ? 'text-gray-400 hover:text-pink-400' : 'text-gray-500 hover:text-violet-500'} transition-colors`}
          >
            {type === 'password' ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
    </div>
  );

  const OAuthButton = ({ icon: Icon, provider, className = '' }) => (
    <GlowButton
      variant="oauth"
      className={`flex-1 flex items-center justify-center space-x-2 ${className}`}
    >
      <Icon className="w-5 h-5" />
      <span>{provider}</span>
    </GlowButton>
  );

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-20 w-32 h-32 ${darkMode ? 'bg-pink-500' : 'bg-violet-500'} rounded-full opacity-10 animate-pulse`} />
        <div className={`absolute bottom-20 right-20 w-24 h-24 ${darkMode ? 'bg-purple-500' : 'bg-blue-500'} rounded-full opacity-10 animate-bounce`} style={{ animationDuration: '3s' }} />
        <div className={`absolute top-1/2 left-10 w-16 h-16 ${darkMode ? 'bg-pink-400' : 'bg-violet-400'} rotate-45 opacity-5 animate-spin`} style={{ animationDuration: '20s' }} />
      </div>

      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-md border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} sticky top-0 z-50`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600' : 'bg-gradient-to-r from-violet-500 to-purple-600'} shadow-lg`}>
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-black uppercase ${darkMode ? 'text-white' : 'text-gray-900'} tracking-tight`} style={{ textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)' }}>
                MANGA NEWS
              </h1>
              <div className="flex items-center space-x-1">
                <AnimatedDot />
                <AnimatedDot delay={200} />
                <AnimatedDot delay={400} />
              </div>
            </div>
          </div>
          
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'} hover:scale-110 transition-all duration-300`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-12">
        {/* Page Toggle */}
        <div className={`flex rounded-lg p-1 mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          {['login', 'signup'].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex-1 py-3 px-6 rounded-md font-bold uppercase text-sm tracking-wide transition-all duration-300 ${
                currentPage === page
                  ? darkMode
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                  : darkMode
                    ? 'text-gray-400 hover:text-pink-400'
                    : 'text-gray-600 hover:text-violet-600'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Auth Card */}
        <div className={`${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-md rounded-lg shadow-2xl border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-8 transform hover:-translate-y-1 transition-all duration-300`}>
          {/* Decorative Header */}
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600' : 'bg-gradient-to-r from-violet-500 to-purple-600'} shadow-lg mb-4`}>
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className={`text-2xl font-black uppercase ${darkMode ? 'text-white' : 'text-gray-900'} tracking-tight mb-2`} style={{ textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)' }}>
              {currentPage === 'login' ? 'Welcome Back' : 'Join The Community'}
            </h2>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              {currentPage === 'login' ? 'Sign in to access exclusive manga content' : 'Create your account to get started'}
            </p>
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            <div className="flex space-x-3">
              <OAuthButton icon={Chrome} provider="Google" />
              <OAuthButton icon={Twitter} provider="Twitter" />
            </div>
            <OAuthButton icon={MessageCircle} provider="Continue with Discord" className="w-full" />
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className={`absolute inset-0 flex items-center`}>
              <div className={`w-full border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-4 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'} font-medium uppercase tracking-wide`}>
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {currentPage === 'signup' && (
              <InputField
                icon={User}
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
            )}

            <InputField
              icon={Mail}
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
            />

            <InputField
              icon={Lock}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              showToggle={true}
              onToggle={() => setShowPassword(!showPassword)}
            />

            {currentPage === 'signup' && (
              <>
                <InputField
                  icon={Lock}
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  showToggle={true}
                  onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
                />

                {/* Role Selection */}
                <div className={`p-4 rounded-lg border-2 ${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                  <label className={`block text-sm font-bold uppercase tracking-wide ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
                    Account Type
                  </label>
                  <div className="flex space-x-4">
                    {[
                      { value: 'user', label: 'Reader', icon: Star },
                      { value: 'journalist', label: 'Creator', icon: Globe }
                    ].map(({ value, label, icon: Icon }) => (
                      <label key={value} className="flex-1 cursor-pointer">
                        <input
                          type="radio"
                          name="role"
                          value={value}
                          checked={formData.role === value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`flex items-center justify-center p-3 rounded-lg border-2 transition-all duration-300 ${
                          formData.role === value
                            ? darkMode
                              ? 'border-pink-500 bg-pink-500/20 text-pink-400'
                              : 'border-violet-500 bg-violet-500/20 text-violet-600'
                            : darkMode
                              ? 'border-gray-600 text-gray-400 hover:border-pink-400'
                              : 'border-gray-300 text-gray-600 hover:border-violet-400'
                        }`}>
                          <Icon className="w-4 h-4 mr-2" />
                          <span className="font-medium text-sm">{label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className={`mt-1 w-4 h-4 rounded border-2 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'} focus:ring-2 focus:ring-${darkMode ? 'pink' : 'violet'}-500`}
                  />
                  <label htmlFor="agreeTerms" className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    I agree to the{' '}
                    <a href="#" className={`font-medium ${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-violet-600 hover:text-violet-500'} transition-colors`}>
                      Terms of Use
                    </a>{' '}
                    and{' '}
                    <a href="#" className={`font-medium ${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-violet-600 hover:text-violet-500'} transition-colors`}>
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </>
            )}

            {currentPage === 'login' && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className={`w-4 h-4 rounded border-2 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'}`}
                  />
                  <span className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Remember me
                  </span>
                </label>
                <a href="#" className={`text-sm font-medium ${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-violet-600 hover:text-violet-500'} transition-colors`}>
                  Forgot password?
                </a>
              </div>
            )}

            <GlowButton
              type="submit"
              className="w-full mt-6"
              onClick={handleSubmit}
            >
              {currentPage === 'login' ? 'Sign In' : 'Create Account'}
            </GlowButton>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {currentPage === 'login' ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setCurrentPage(currentPage === 'login' ? 'signup' : 'login')}
              className={`font-medium ${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-violet-600 hover:text-violet-500'} transition-colors`}
            >
              {currentPage === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}