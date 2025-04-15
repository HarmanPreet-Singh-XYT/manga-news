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
        <div className="aspect-w-16 aspect-h-9 bg-gray-900">
          <img 
            src={featuredStory.mainImage}  
            alt="Featured anime story" 
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
          
          {/* Animated elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
          </div>
          
          {/* Top badges */}
          <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
            <span className="bg-pink-500 text-white px-3 py-1 rounded-lg text-sm font-bold flex items-center">
              <Flame size={16} className="mr-1 animate-pulse" /> TRENDING
            </span>
            <span className={`bg-cyan-300 text-violet-900 px-6 py-2 font-black text-lg transform rotate-6 inline-block rounded shadow-lg border-2 ${darkMode ? 'border-violet-950' : 'border-violet-900'} animate-pulse`}>
              EXCLUSIVE!
            </span>
          </div>
          
          {/* Stats bar */}
          <div className="absolute top-20 left-6 bg-black bg-opacity-50 rounded-full px-4 py-1 flex items-center space-x-4">
            <div className="flex items-center">
              <Eye size={14} className="text-cyan-300 mr-1" />
              <span className="text-white text-sm">{featuredStory.viewCount}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle size={14} className="text-cyan-300 mr-1" />
              <span className="text-white text-sm">{featuredStory.commentCount}</span>
            </div>
            <div className="flex items-center">
              <ThumbsUp size={14} className="text-cyan-300 mr-1" />
              <span className="text-white text-sm">{featuredStory.likeCount}</span>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
            <div className="flex items-center">
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">BREAKING</span>
              <span className="ml-3 text-cyan-300 font-bold flex items-center">
                <Zap size={16} className="mr-1" /> ANIME FILM
              </span>
            </div>
            <h2 className={`text-3xl md:text-5xl font-black text-white mt-4 transition-all duration-300 group-hover:translate-x-2`} style={{ textShadow: "3px 3px 0 #000" }}>
              "{featuredStory.title}"
            </h2>
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
      </div>
    </section>
  )
}

export default Featured