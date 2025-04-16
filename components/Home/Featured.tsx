import { Articles } from '@/app/data';
import { Zap, Clock, Share2, Bookmark, Eye, Flame, MessageCircle, ThumbsUp } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const Featured = ({ darkMode = false }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [viewCount, setViewCount] = useState(3427);
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Simulating view count increase
  useEffect(() => {
    const interval = setInterval(() => {
      setViewCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };
  
  const formatViewCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count;
  };
  const featuredStory = Articles[20];
  return (
    <section className="mb-16 relative">
      {showTooltip && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce">
          {isBookmarked ? 'Article Bookmarked!' : 'Bookmark Removed!'}
        </div>
      )}
    
      <div className={`relative rounded-lg overflow-hidden shadow-2xl border-4 ${darkMode ? 'border-violet-950' : 'border-violet-900'} group`}>
        {/* Image container */}
        <div className="relative bg-gray-900">
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src={featuredStory.mainImage}  
              alt="Featured anime story" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
          
          {/* Animated elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
          </div>
          
          {/* Top badges - visible on both mobile and desktop */}
          <div className="absolute top-0 left-0 right-0 flex justify-between p-2 sm:p-4">
            <span className="bg-pink-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-bold flex items-center">
              <Flame size={14} className="mr-1 animate-pulse" /> TRENDING
            </span>
            <span className={`bg-cyan-300 text-violet-900 px-3 py-1 sm:px-6 sm:py-2 font-black text-sm sm:text-lg transform rotate-6 inline-block rounded shadow-lg border-2 ${darkMode ? 'border-violet-950' : 'border-violet-900'} animate-pulse`}>
              EXCLUSIVE!
            </span>
          </div>
          
          {/* Stats bar - visible on both mobile and desktop */}
          <div className="absolute top-12 sm:top-20 left-2 sm:left-6 bg-black bg-opacity-50 rounded-full px-2 py-1 sm:px-4 sm:py-1 flex items-center space-x-2 sm:space-x-4 text-xs">
            <div className="flex items-center">
              <Eye size={12} className="text-cyan-300 mr-1" />
              <span className="text-white">{featuredStory.viewCount}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle size={12} className="text-cyan-300 mr-1" />
              <span className="text-white">{featuredStory.commentCount}</span>
            </div>
            <div className="flex items-center">
              <ThumbsUp size={12} className="text-cyan-300 mr-1" />
              <span className="text-white">{featuredStory.likeCount}</span>
            </div>
          </div>
          
          {/* Desktop content overlay - HIDDEN on mobile */}
          <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full hidden sm:block">
            <div className="flex items-center">
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">BREAKING</span>
              <span className="ml-3 text-cyan-300 font-bold flex items-center">
                <Zap size={16} className="mr-1" /> ANIME FILM
              </span>
            </div>
            <a href='/article/21'>
              <h2 className={`text-3xl md:text-5xl font-black text-white mt-4 transition-all duration-300 group-hover:translate-x-2`} style={{ textShadow: "3px 3px 0 #000" }}>
                "{featuredStory.title}"
              </h2>
            </a>
            <p className="text-cyan-300 mt-4 text-lg font-bold max-w-4xl">
              Eiichiro Oda's legendary series continues its dominance with a film that surpasses expectations and reshapes the anime film industry landscape worldwide.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['One Piece', 'Film Red', 'Eiichiro Oda', 'Box Office'].map(tag => (
                <span key={tag} className={`px-2 py-1 rounded-full text-xs font-bold ${darkMode ? 'bg-violet-900 text-white' : 'bg-violet-200 text-violet-900'}`}>
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
            
            <div className="flex items-center mt-6 text-white">
              <div className="relative">
                <img src={featuredStory.authorImage} alt="Author" className="h-10 w-10 rounded-full border-2 border-pink-400" />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="font-bold ml-2">By {featuredStory.author}</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <Clock size={16} className="mr-1 text-cyan-300" />
                {featuredStory.postedAgo}
              </span>
              <div className="ml-auto flex space-x-3">
                <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-violet-950' : 'hover:bg-violet-800'} transition-colors relative group`}>
                  <Share2 size={20} className="text-cyan-300" />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Share</span>
                </button>
                <button 
                  className={`p-2 rounded-full ${darkMode ? 'hover:bg-violet-950' : 'hover:bg-violet-800'} transition-colors relative group`}
                  onClick={handleBookmark}
                >
                  <Bookmark size={20} className={isBookmarked ? "text-pink-500 fill-pink-500" : "text-cyan-300"} />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {isBookmarked ? 'Saved' : 'Save'}
                  </span>
                </button>
                <a href={`/article/${featuredStory.id}`} >
                  <button className="flex items-center space-x-1 bg-pink-500 text-white px-4 py-1 rounded-full hover:bg-pink-400 transition-colors group">
                    <Eye size={16} />
                    <span className="font-bold group-hover:ml-1 transition-all">Read More</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile content block - ONLY shown on mobile, positioned below image */}
        <div className={`sm:hidden p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <span className="bg-pink-500 text-white px-2 py-0.5 rounded-full text-xs font-bold mr-2">BREAKING</span>
              <span className="text-cyan-300 font-bold flex items-center text-xs">
                <Zap size={12} className="mr-1" /> ANIME FILM
              </span>
            </div>
            
            <div className="flex space-x-2">
              <button className={`p-1.5 rounded-full ${darkMode ? 'bg-violet-950' : 'bg-violet-100'} transition-colors`}>
                <Share2 size={16} className="text-cyan-300" />
              </button>
              <button 
                className={`p-1.5 rounded-full ${darkMode ? 'bg-violet-950' : 'bg-violet-100'} transition-colors`}
                onClick={handleBookmark}
              >
                <Bookmark size={16} className={isBookmarked ? "text-pink-500 fill-pink-500" : "text-cyan-300"} />
              </button>
            </div>
          </div>
          
          <a href='/article/21'>
            <h2 className={`text-xl font-black ${darkMode ? 'text-white' : 'text-gray-800'} mb-2`}>
              "{featuredStory.title}"
            </h2>
          </a>
          
          <p className={`text-sm mb-3 ${darkMode ? 'text-cyan-300' : 'text-violet-700'} font-semibold`}>
            Eiichiro Oda's legendary series continues its dominance with a film that surpasses expectations and reshapes the anime film industry landscape worldwide.
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {['One Piece', 'Film Red', 'Eiichiro Oda', 'Box Office'].slice(0, 3).map(tag => (
              <span key={tag} className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${darkMode ? 'bg-violet-900 text-white' : 'bg-violet-200 text-violet-900'}`}>
                #{tag.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <div className="relative">
                <img src={featuredStory.authorImage} alt="Author" className="h-7 w-7 rounded-full border-2 border-pink-400" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="ml-2">
                <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>By {featuredStory.author}</span>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock size={10} className="mr-1 text-cyan-300" />
                  {featuredStory.postedAgo}
                </div>
              </div>
            </div>
            
            <a href={`/article/${featuredStory.id}`} >
              <button className="flex items-center space-x-1 bg-pink-500 text-white px-3 py-1 rounded-full text-xs">
                <Eye size={12} />
                <span className="font-bold">Read</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured