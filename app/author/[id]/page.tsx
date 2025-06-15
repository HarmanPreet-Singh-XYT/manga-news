'use client'
import React, { useState } from 'react';
import { Moon, Sun, Twitter, Globe, Github, Calendar, Users, Eye, Heart, MessageCircle, Share2, ExternalLink } from 'lucide-react';

const AuthorProfile = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [followersCount, setFollowersCount] = useState(2847);
  const [isFollowing, setIsFollowing] = useState(false);

  // Sample articles data
  const articles = [
    {
      id: 1,
      title: "Attack on Titan Final Season: A Complete Analysis of the Ending",
      excerpt: "Breaking down every detail of the controversial finale and what it means for the series legacy...",
      coverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=240&fit=crop",
      publishedDate: "2024-06-10",
      views: 15420,
      likes: 892,
      comments: 156
    },
    {
      id: 2,
      title: "Demon Slayer Movie Breaks Box Office Records Worldwide",
      excerpt: "The latest Demon Slayer film shatters expectations with unprecedented global success...",
      coverImage: "https://images.unsplash.com/photo-1606901227996-37d3c5a0c4b0?w=400&h=240&fit=crop",
      publishedDate: "2024-06-08",
      views: 8934,
      likes: 634,
      comments: 89
    },
    {
      id: 3,
      title: "Studio Ghibli Announces Surprise New Project",
      excerpt: "Miyazaki returns with an unexpected announcement that has fans worldwide buzzing...",
      coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=240&fit=crop",
      publishedDate: "2024-06-05",
      views: 12567,
      likes: 1203,
      comments: 234
    },
    {
      id: 4,
      title: "One Piece Manga Reaches Historic Milestone",
      excerpt: "Eiichiro Oda's masterpiece achieves another record-breaking achievement in publishing history...",
      coverImage: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=240&fit=crop",
      publishedDate: "2024-06-02",
      views: 9876,
      likes: 756,
      comments: 123
    }
  ];

  const totalViews = articles.reduce((sum, article) => sum + article.views, 0);
  const totalLikes = articles.reduce((sum, article) => sum + article.likes, 0);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowersCount(prev => isFollowing ? prev - 1 : prev + 1);
  };

  const themeClasses = darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-blue-50 text-gray-900';

  const cardClasses = darkMode
    ? 'bg-gray-800 border-pink-500'
    : 'bg-white border-violet-500';

  const accentColor = darkMode ? 'text-pink-400' : 'text-violet-600';
  const buttonClasses = darkMode
    ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
    : 'bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Animated background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header with theme toggle */}
      <header className="relative z-10 p-6 border-b-4 border-gradient">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-pink-400' : 'bg-violet-500'} animate-pulse`}></div>
            <h1 className="text-2xl font-black uppercase tracking-wider">
              ANIME<span className={accentColor}>VERSE</span>
            </h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full ${buttonClasses} transform hover:-translate-y-1 transition-all duration-200 shadow-lg`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        {/* Profile Header Section */}
        <div className={`relative overflow-hidden rounded-lg border-4 ${cardClasses} shadow-lg mb-8 transform hover:-translate-y-1 transition-all duration-300`}>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-violet-500/10"></div>
          <div className="relative p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face" 
                    alt="Kenji Nakamura"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${buttonClasses} text-white shadow-lg transform rotate-12`}>
                  EDITOR
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-black uppercase mb-2 text-shadow">
                      KENJI NAKAMURA
                    </h1>
                    <p className={`text-lg ${accentColor} font-semibold mb-2`}>@otaku_journalist</p>
                    <p className="text-lg mb-4 leading-relaxed">
                      Senior anime journalist covering the latest in manga, anime films, and industry news. 
                      Passionate about storytelling and Japanese culture.
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <button
                      onClick={handleFollow}
                      className={`px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-200 transform hover:-translate-y-1 shadow-lg ${
                        isFollowing 
                          ? 'bg-gray-600 hover:bg-gray-700 text-white' 
                          : buttonClasses + ' text-white'
                      }`}
                    >
                      {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
                    </button>
                    <button className={`p-3 rounded-full border-2 ${darkMode ? 'border-pink-400 hover:bg-pink-400' : 'border-violet-500 hover:bg-violet-500'} hover:text-white transition-all duration-200 transform hover:-translate-y-1`}>
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mb-6">
                  <a href="#" className={`p-3 rounded-full ${cardClasses} border-2 ${accentColor} hover:scale-110 transform transition-all duration-200 shadow-lg`}>
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className={`p-3 rounded-full ${cardClasses} border-2 ${accentColor} hover:scale-110 transform transition-all duration-200 shadow-lg`}>
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href="#" className={`p-3 rounded-full ${cardClasses} border-2 ${accentColor} hover:scale-110 transform transition-all duration-200 shadow-lg`}>
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className={`w-4 h-4 ${accentColor}`} />
                    <span>Writing since Jan 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className={`w-4 h-4 ${accentColor}`} />
                    <span className="font-bold">{followersCount.toLocaleString()}</span> followers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: ExternalLink, label: 'Articles', value: articles.length },
            { icon: Eye, label: 'Total Views', value: totalViews.toLocaleString() },
            { icon: Heart, label: 'Total Likes', value: totalLikes.toLocaleString() },
            { icon: MessageCircle, label: 'Comments', value: '602' }
          ].map((stat, index) => (
            <div key={index} className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-wider font-bold mb-1">{stat.label}</p>
                  <p className="text-3xl font-black">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${accentColor}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Articles Section */}
        <div className={`${cardClasses} border-4 rounded-lg shadow-lg overflow-hidden`}>
          <div className="p-6 border-b-2 border-gray-700">
            <h2 className="text-2xl font-black uppercase tracking-wider flex items-center">
              <div className={`w-4 h-4 rounded-full ${darkMode ? 'bg-pink-400' : 'bg-violet-500'} animate-pulse mr-3`}></div>
              PUBLISHED ARTICLES
            </h2>
          </div>
          
          <div className="divide-y-2 divide-gray-700">
            {articles.map((article) => (
              <div key={article.id} className="p-6 hover:bg-gray-700/20 transition-all duration-200 group">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-80 relative overflow-hidden rounded-lg">
                    <img 
                      src={article.coverImage} 
                      alt={article.title}
                      className="w-full h-48 lg:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors duration-200 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-between text-sm">
                      <div className={`${accentColor} font-semibold`}>
                        {new Date(article.publishedDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{article.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{article.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="p-6 text-center border-t-2 border-gray-700">
            <button className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider ${buttonClasses} text-white transform hover:-translate-y-1 transition-all duration-200 shadow-lg`}>
              LOAD MORE ARTICLES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;