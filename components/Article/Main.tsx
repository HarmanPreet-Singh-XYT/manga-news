import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import { 
  Clock, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  ChevronRight, 
  ThumbsUp,
  Eye,
  ArrowUp,
  BookOpen
} from 'lucide-react'
import AnimeDiscussionComponent from './Comment';

const Main = ({articleData, darkMode}:{articleData:any, darkMode:boolean}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(articleData.likeCount);
  const [hasLiked, setHasLiked] = useState(false);

  // Dark mode class variables
  const baseBgClass = darkMode ? 'bg-gray-900' : 'bg-indigo-50';
  const baseTextClass = darkMode ? 'text-white' : 'text-gray-900';
  const primaryAccent = darkMode ? 'pink-500' : 'violet-600';
  const secondaryAccent = darkMode ? 'purple-900' : 'violet-200';

  // Card and container backgrounds
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const gradientBgClass = darkMode 
    ? 'bg-gradient-to-br from-purple-900 to-gray-900' 
    : 'bg-gradient-to-br from-violet-600 to-indigo-800';
  const tagBgClass = darkMode ? 'bg-gray-700' : 'bg-indigo-100';
  const tagTextClass = darkMode ? 'text-pink-300' : 'text-indigo-800';
  const commentBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const commentAltBgClass = darkMode ? 'bg-gray-700' : 'bg-indigo-50';
  const borderClass = darkMode ? 'border-gray-700' : 'border-indigo-100';
  const headerTextClass = darkMode ? 'text-pink-400' : 'text-indigo-900';

  const handleLike = () => {
    if (hasLiked) {
      setLikeCount(likeCount - 1);
      setHasLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setHasLiked(true);
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className={`flex flex-col lg:flex-row gap-8 ${baseTextClass}`}>
        {/* Main Article Column */}
        <div className="lg:w-2/3">
        {/* Article Header */}
        <div>
            <div className="mb-3">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full transform -rotate-1 hover:rotate-0 transition-transform">
                {articleData.category.toUpperCase()}
            </span>
            </div>
            <h1 className={`text-3xl md:text-5xl font-black ${darkMode ? 'text-pink-400' : 'text-indigo-900'} leading-tight mb-3 font-display`}>
              {articleData.title}
            </h1>
            <p className={`text-lg md:text-xl ${darkMode ? 'text-pink-300' : 'text-indigo-700'} mb-4 italic`}>
              {articleData.subtitle}
            </p>
            
            {/* Article Meta */}
            <div className="flex overflow-hidden flex-wrap items-center text-sm  mb-6 bg-gradient-to-br from-violet-600 to-indigo-800 text-white border-violet-800 shadow-xl hover:shadow-2xl transition-shadow p-3 rounded-lg relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400 opacity-20 rounded-full blur-2xl"></div>
              <img src={articleData.authorImage} alt="Author" className="rounded-full h-7 w-7 mr-3 border-2 border-pink-400" />
              <span className="mr-4 font-medium">{articleData.author}</span>
              <span className="flex items-center mr-4">
                  <Clock size={14} className="mr-1" /> {articleData.publishDate}
              </span>
              <span className="mr-4 flex items-center">
                <BookOpen size={14} className="mr-1" /> {articleData.readTime}
              </span>
              <span className="flex items-center">
                <Eye size={14} className="mr-1" /> {articleData.viewCount || "1.2K"} views
              </span>
            </div>
        </div>

        {/* Main Image */}
        <div className="relative rounded-xl overflow-hidden mb-8 shadow-xl group">
            <div className={`absolute inset-0 bg-gradient-to-t from-${darkMode ? 'gray-900' : 'indigo-900'} via-transparent to-transparent opacity-60`}></div>
            <img 
              src={articleData.mainImage} 
              alt="Anime Cover" 
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 max-w-full">
              {articleData.tags.map((tag, index) => (
                  <span key={index} className={`bg-${primaryAccent} bg-opacity-90 text-white text-xs px-2 py-1 rounded transform hover:rotate-0 transition-all duration-300 -rotate-1 hover:scale-110 cursor-pointer`}>
                    #{tag}
                  </span>
              ))}
            </div>
        </div>

        {/* Social Share */}
        <div className="flex justify-between items-center mb-8 px-4 rounded-lg sticky top-0 bg-gradient-to-br from-violet-600 to-indigo-800 text-white border-violet-800 shadow-xl hover:shadow-2xl transition-shadow bg-opacity-90 py-3 z-10 backdrop-blur-sm border-b ">
            <div className="flex space-x-4">
            <button 
              className={`flex items-center ${hasLiked ? 'text-pink-500' : 'text-white'} hover:text-pink-500 transition-colors`}
              onClick={handleLike}
            >
                <Heart size={20} className="mr-2" fill={hasLiked ? "currentColor" : "none"} />
                <span>{likeCount}</span>
            </button>
            <button className="flex items-center text-white hover:text-pink-500 transition-colors">
                <MessageCircle size={20} className="mr-2" />
                <span>{articleData.commentCount}</span>
            </button>
            </div>
            <div className="flex space-x-4">
            <button className="text-white hover:text-pink-500 transition-transform hover:scale-110">
                <Share2 size={20} />
            </button>
            <button 
              className={`transition-all hover:scale-110 ${isBookmarked ? 'text-pink-500' : 'text-white'}`}
              onClick={handleBookmark}
            >
                <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
            </button>
            </div>
        </div>

        {/* Article Content */}
        <article className={`prose ${darkMode ? 'prose-invert' : 'prose-indigo'} prose-lg max-w-none`}>
            <div dangerouslySetInnerHTML={{ __html: articleData.content }} />
        </article>

        {/* Tags */}
        <div className="mt-8 mb-12">
            <h4 className={`text-sm font-bold ${headerTextClass} mb-2 flex items-center`}>
              <span className={`${tagBgClass} ${tagTextClass} p-1 rounded mr-2`}>#</span>
              RELATED TAGS
            </h4>
            <div className="flex flex-wrap gap-2">
            {articleData.tags.map((tag, index) => (
                <a 
                key={index} 
                href="#" 
                className={`px-3 py-1 ${tagBgClass} hover:bg-${primaryAccent} ${tagTextClass} hover:text-white rounded-full text-sm transition-colors hover:shadow-md`}
                >
                #{tag}
                </a>
            ))}
            </div>
        </div>

        {/* Comments Section */}
        <AnimeDiscussionComponent darkMode={darkMode}/>
        
        {/* Back to Top Button */}
        <div className="flex justify-end my-8">
          <button className={`${tagBgClass} hover:bg-${primaryAccent} ${tagTextClass} hover:text-white p-2 rounded-full shadow-md transition-colors flex items-center`}>
            <ArrowUp size={20} />
          </button>
        </div>
        </div>

        {/* Sidebar */}
        <Sidebar darkMode={darkMode}/>
    </div>
  )
}

export default Main