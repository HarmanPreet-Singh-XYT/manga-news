import { Articles } from '@/app/data';
import { Zap, Clock, Share2, Bookmark, Eye, Flame, MessageCircle, ThumbsUp, Heart, Star } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const Featured = ({ darkMode = false }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [viewCount, setViewCount] = useState(3427);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState<{
    top?: number | string;
    left?: number | string;
    right?: number | string;
    transform?: string;
  }>({top:0,left:0});
  
  const featuredStory = Articles[20];
  
  useEffect(() => {
    // Initialize like count from article data
    setLikeCount(featuredStory.likeCount || 842);
    
    // Simulating view count increase
    const interval = setInterval(() => {
      setViewCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, [featuredStory]);
  
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    showTooltipMessage(isBookmarked ? 'Bookmark Removed!' : 'Article Bookmarked!', 'center');
  };
  
  const handleLike = () => {
    const newLikeState = !isLiked;
    setIsLiked(newLikeState);
    setLikeCount(prev => newLikeState ? prev + 1 : prev - 1);
    showTooltipMessage(newLikeState ? 'Added to favorites!' : 'Removed from favorites!', 'right');
  };
  
  const showTooltipMessage = (message, position) => {
    setTooltipMessage(message);
    
    // Set position based on argument
    if (position === 'center') {
      setTooltipPosition({ top: 4, left: '50%', transform: '-translate-x-1/2' });
    } else if (position === 'right') {
      setTooltipPosition({ top: 4, right: 4, transform: 'none' });
    }
    
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };
  
  const formatCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };
  
  const getBadgeClass = (type) => {
    const baseClasses = "px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-bold flex items-center";
    
    switch(type) {
      case 'trending':
        return `${baseClasses} bg-pink-500 text-white`;
      case 'breaking':
        return `${baseClasses} bg-red-500 text-white`;
      case 'new':
        return `${baseClasses} bg-green-500 text-white`;
      case 'exclusive':
        return `${baseClasses} bg-cyan-300 text-violet-900 px-3 py-1 sm:px-6 sm:py-2 font-black text-sm sm:text-lg transform rotate-6 inline-block rounded shadow-lg border-2 ${darkMode ? 'border-violet-950' : 'border-violet-900'} animate-pulse`;
      default:
        return `${baseClasses} bg-violet-500 text-white`;
    }
  };
  
  return (
    <section className="mb-16 relative">
      {showTooltip && (
        <div className={`absolute ${tooltipPosition.top ? `top-${tooltipPosition.top}` : ''} ${tooltipPosition.left ? `left-${tooltipPosition.left}` : ''} ${tooltipPosition.right ? `right-${tooltipPosition.right}` : ''} ${tooltipPosition.transform ? `transform ${tooltipPosition.transform}` : ''} bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce`}>
          {tooltipMessage}
        </div>
      )}
    
      <div className={`relative rounded-lg overflow-hidden shadow-2xl border-4 ${darkMode ? 'border-violet-950' : 'border-violet-900'} group transition-all duration-300 hover:shadow-pink-400/30`}>
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
          
          {/* Animated elements - enhanced with more visual elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Additional animated elements */}
            <div className="absolute top-1/3 right-1/2 w-16 h-16 bg-yellow-300 opacity-10 rounded-full blur-xl animate-ping"></div>
            <div className="hidden sm:block absolute bottom-1/3 left-1/5 w-20 h-20 bg-blue-500 opacity-15 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Anime-style floating particles */}
            <div className="absolute h-2 w-2 bg-white rounded-full top-1/4 left-1/3 opacity-70 animate-float"></div>
            <div className="absolute h-1 w-1 bg-pink-300 rounded-full top-2/3 right-1/4 opacity-70 animate-float-slow"></div>
            <div className="absolute h-1.5 w-1.5 bg-cyan-200 rounded-full bottom-1/4 right-1/3 opacity-70 animate-float-reverse"></div>
          </div>
          
          {/* Top badges - enhanced with more badge types */}
          <div className="absolute top-0 left-0 right-0 flex justify-between p-2 sm:p-4">
            <div className="flex space-x-2">
              <span className={getBadgeClass('trending')}>
                <Flame size={14} className="mr-1 animate-pulse" /> TRENDING
              </span>
              {featuredStory.isNew && (
                <span className={getBadgeClass('new')}>
                  <Star size={14} className="mr-1" /> NEW
                </span>
              )}
            </div>
            <span className={getBadgeClass('exclusive')}>
              EXCLUSIVE!
            </span>
          </div>
          
          {/* Stats bar - enhanced with visual effects */}
          <div className="absolute top-12 sm:top-20 left-2 sm:left-6 bg-black bg-opacity-50 backdrop-blur-sm rounded-full px-2 py-1 sm:px-4 sm:py-1 flex items-center space-x-2 sm:space-x-4 text-xs border border-gray-700">
            <div className="flex items-center group cursor-pointer hover:text-pink-400 transition-colors">
              <Eye size={12} className="text-cyan-300 mr-1 group-hover:text-pink-400" />
              <span className="text-white group-hover:text-pink-400">{formatCount(viewCount)}</span>
            </div>
            <div className="flex items-center group cursor-pointer hover:text-pink-400 transition-colors">
              <MessageCircle size={12} className="text-cyan-300 mr-1 group-hover:text-pink-400" />
              <span className="text-white group-hover:text-pink-400">{formatCount(featuredStory.commentCount)}</span>
            </div>
            <div className="flex items-center group cursor-pointer hover:text-pink-400 transition-colors">
              <ThumbsUp size={12} className="text-cyan-300 mr-1 group-hover:text-pink-400" />
              <span className="text-white group-hover:text-pink-400">{formatCount(likeCount)}</span>
            </div>
          </div>
          
          {/* Desktop content overlay - HIDDEN on mobile, enhanced with better transitions */}
          <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full hidden sm:block">
            <div className="flex items-center">
              <span className={getBadgeClass('breaking')}>BREAKING</span>
              <span className="ml-3 text-cyan-300 font-bold flex items-center">
                <Zap size={16} className="mr-1" /> ANIME FILM
              </span>
              
              {/* Rating badge */}
              <div className="ml-4 flex items-center bg-black bg-opacity-60 rounded-full px-2 py-1">
                <Star size={14} className="text-yellow-400 mr-1" />
                <span className="text-white font-bold text-sm">{"9.8"}</span>
                <span className="text-gray-400 text-xs ml-1">/10</span>
              </div>
            </div>
            
            <a href={`/article/${featuredStory.id}`} className="block group">
              <h2 className="text-3xl md:text-5xl font-black text-white mt-4 transition-all duration-300 group-hover:translate-x-2" style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.7)" }}>
                "{featuredStory.title}"
              </h2>
            </a>
            
            <p className="text-cyan-300 mt-4 text-lg font-bold max-w-4xl leading-snug">
              Eiichiro Oda's legendary series continues its dominance with a film that surpasses expectations and reshapes the anime film industry landscape worldwide.
            </p>
            
            {/* Tags - enhanced with animation and interaction */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['One Piece', 'Film Red', 'Eiichiro Oda', 'Box Office', 'Shonen Jump'].map(tag => (
                <span key={tag} className={`px-2 py-1 rounded-full text-xs font-bold ${darkMode ? 'bg-violet-900 text-white' : 'bg-violet-200 text-violet-900'} hover:bg-pink-500 hover:text-white cursor-pointer transition-colors duration-300 transform hover:-translate-y-1`}>
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
            
            <div className="flex items-center mt-6 text-white">
              <div className="relative group">
                <img 
                  src={featuredStory.authorImage} 
                  alt="Author" 
                  className="h-10 w-10 rounded-full border-2 border-pink-400 group-hover:border-cyan-300 transition-colors duration-300" 
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                
                {/* Author hover card - shown on hover */}
                <div className="absolute bottom-full left-0 mb-2 w-48 bg-black bg-opacity-90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-violet-500 z-10">
                  <div className="text-xs text-cyan-300 font-bold">VERIFIED AUTHOR</div>
                  <div className="text-sm text-white font-bold">{featuredStory.author}</div>
                  <div className="text-xs text-gray-400 mt-1">Anime journalist and critic with over 500+ articles</div>
                </div>
              </div>
              
              <span className="font-bold ml-2">{featuredStory.author}</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <Clock size={16} className="mr-1 text-cyan-300" />
                {featuredStory.postedAgo}
              </span>
              
              <div className="ml-auto flex space-x-3">
                <button 
                  className={`p-2 rounded-full ${darkMode ? 'hover:bg-violet-950' : 'hover:bg-violet-800'} transition-colors relative group`}
                  onClick={handleLike}
                >
                  <Heart size={20} className={isLiked ? "text-pink-500 fill-pink-500" : "text-cyan-300"} />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {isLiked ? 'Remove from favorites' : 'Add to favorites'}
                  </span>
                </button>
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
                <a href={`/article/${featuredStory.id}`}>
                  <button className="flex items-center space-x-1 bg-pink-500 text-white px-4 py-1 rounded-full hover:bg-pink-400 transition-colors group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Eye size={16} className="relative z-10" />
                    <span className="font-bold group-hover:ml-1 transition-all relative z-10">Read More</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile content block - ONLY shown on mobile, enhanced version */}
        <div className={`sm:hidden p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <span className={getBadgeClass('breaking').replace('sm:px-3 sm:py-1', '').replace('sm:text-sm', '')}>BREAKING</span>
              <span className="text-cyan-300 font-bold flex items-center text-xs ml-2">
                <Zap size={12} className="mr-1" /> ANIME FILM
              </span>
            </div>
            
            <div className="flex space-x-2">
                <button 
                  className={`p-1.5 rounded-full ${darkMode ? 'bg-violet-950' : 'bg-violet-100'} transition-colors`}
                  onClick={handleLike}
                >
                  <Heart size={16} className={isLiked ? "text-pink-500 fill-pink-500" : "text-cyan-300"} />
                </button>
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
          
          <a href={`/article/${featuredStory.id}`}>
            <h2 className={`text-xl font-black ${darkMode ? 'text-white' : 'text-gray-800'} mb-2`}>
              "{featuredStory.title}"
            </h2>
          </a>
          
          <p className={`text-sm mb-3 ${darkMode ? 'text-cyan-300' : 'text-violet-700'} font-semibold`}>
            Eiichiro Oda's legendary series continues its dominance with a film that surpasses expectations and reshapes the anime film industry landscape worldwide.
          </p>
          
          {/* Mobile rating */}
          <div className="flex items-center mb-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={12} 
                  className={star <= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} 
                />
              ))}
            </div>
            <span className="text-xs font-bold ml-2 text-yellow-400">9.8</span>
            <span className="text-xs text-gray-500">/10</span>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {['One Piece', 'Film Red', 'Eiichiro Oda', 'Box Office'].slice(0, 3).map(tag => (
              <span key={tag} className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${darkMode ? 'bg-violet-900 text-white' : 'bg-violet-200 text-violet-900'}`}>
                #{tag.replace(/\s+/g, '')}
              </span>
            ))}
            <span className="px-1.5 py-0.5 rounded-full text-xs font-bold bg-gray-700 text-white">+2</span>
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
            
            <a href={`/article/${featuredStory.id}`}>
              <button className="flex items-center space-x-1 bg-pink-500 text-white px-3 py-1 rounded-full text-xs relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Eye size={12} className="relative z-10" />
                <span className="font-bold relative z-10">Read</span>
              </button>
            </a>
          </div>
          
          {/* Mobile Stats */}
          <div className="flex justify-between mt-3 pt-3 border-t border-gray-700">
            <div className="flex items-center text-xs text-gray-400">
              <Eye size={12} className="text-cyan-300 mr-1" />
              <span>{formatCount(viewCount)} views</span>
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <MessageCircle size={12} className="text-cyan-300 mr-1" />
              <span>{formatCount(featuredStory.commentCount)} comments</span>
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <ThumbsUp size={12} className="text-cyan-300 mr-1" />
              <span>{formatCount(likeCount)} likes</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* New: Reading progress bar */}
      <div className="mt-2 bg-gray-700 h-1 w-full rounded-full overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 to-violet-500 h-full w-3/4 rounded-full"></div>
      </div>
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>75% through this article</span>
        <span>3 min left</span>
      </div>
    </section>
  )
}

// Add animation keyframes in global CSS
const animationStyles = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes float-slow {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
}

@keyframes float-reverse {
  0% { transform: translateY(0px); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 5s ease-in-out infinite;
}
`;

export default Featured