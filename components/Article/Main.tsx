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

const Main = ({articleData}:{articleData:any}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(articleData.likeCount);
  const [hasLiked, setHasLiked] = useState(false);

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
    <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Article Column */}
        <div className="lg:w-2/3">
        {/* Article Header */}
        <div>
            <div className="mb-3">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full transform -rotate-1 hover:rotate-0 transition-transform">
                {articleData.category.toUpperCase()}
            </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-indigo-900 leading-tight mb-3 font-display">
            {articleData.title}
            </h1>
            <p className="text-lg md:text-xl text-indigo-700 mb-4 italic">
            {articleData.subtitle}
            </p>
            
            {/* Article Meta */}
            <div className="flex overflow-hidden flex-wrap items-center text-sm  mb-6 bg-gradient-to-br from-violet-600 to-indigo-800 text-white border-violet-800 shadow-xl hover:shadow-2xl transition-shadow p-3 rounded-lg relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400 opacity-20 rounded-full blur-2xl"></div>
              <img src="/api/placeholder/40/40" alt="Author" className="rounded-full mr-3 border-2 border-pink-400" />
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
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent to-transparent opacity-60"></div>
            <img 
              src={articleData.mainImage} 
              alt="Anime Cover" 
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 max-w-full">
              {articleData.tags.map((tag, index) => (
                  <span key={index} className="bg-pink-500 bg-opacity-90 text-white text-xs px-2 py-1 rounded transform hover:rotate-0 transition-all duration-300 -rotate-1 hover:scale-110 cursor-pointer">
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
        <article className="prose prose-indigo prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: articleData.content }} />
        </article>

        {/* Tags */}
        <div className="mt-8 mb-12">
            <h4 className="text-sm font-bold text-indigo-800 mb-2 flex items-center">
              <span className="bg-indigo-100 text-indigo-800 p-1 rounded mr-2">#</span>
              RELATED TAGS
            </h4>
            <div className="flex flex-wrap gap-2">
            {articleData.tags.map((tag, index) => (
                <a 
                key={index} 
                href="#" 
                className="px-3 py-1 bg-indigo-100 hover:bg-pink-100 text-indigo-800 hover:text-pink-700 rounded-full text-sm transition-colors hover:shadow-md"
                >
                #{tag}
                </a>
            ))}
            </div>
        </div>

        {/* Comments Section */}
        <div className="border-t-4 border-indigo-200 pt-8">
            <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
              <MessageCircle size={20} className="mr-2" />
              Fan Discussions ({articleData.commentCount})
            </h3>
            
            {/* Comment Input */}
            <div className="flex items-start mb-8">
            <img src="/api/placeholder/40/40" alt="User" className="rounded-full mr-3 border-2 border-indigo-200" />
            <div className="flex-1">
                <div className="bg-white rounded-lg shadow-md p-3 border border-indigo-100">
                <textarea 
                    placeholder="Share your thoughts on this article..." 
                    className="w-full p-2 border border-indigo-200 rounded focus:outline-none focus:border-pink-500 text-indigo-800"
                    rows={3}
                ></textarea>
                </div>
                <div className="flex justify-end mt-2">
                <button className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold transform hover:-translate-y-1 transition-all duration-300 shadow-md">
                    Post Comment
                </button>
                </div>
            </div>
            </div>
            
            {/* Sample Comments */}
            <div className="space-y-6">
              {/* First Comment */}
              <div className="flex items-start">
                <img src="/api/placeholder/40/40" alt="Commenter" className="rounded-full mr-3 border-2 border-pink-300" />
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-sm p-4 border border-indigo-100 hover:border-pink-200 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold text-indigo-900">Makima Fan</div>
                      <div className="text-xs text-indigo-600">2 hours ago</div>
                    </div>
                    <p className="text-indigo-800">I'm cautiously optimistic about the studio change. MAPPA did an amazing job with season 1, but if they're overbooked, I'd rather a fresh team with passion take over than get a rushed production.</p>
                    <div className="flex items-center mt-3 text-xs text-indigo-600">
                      <button className="flex items-center mr-4 hover:text-pink-500">
                        <ThumbsUp size={14} className="mr-1" /> 24
                      </button>
                      <button className="hover:text-pink-500">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second Comment */}
              <div className="flex items-start pl-12">
                <img src="/api/placeholder/40/40" alt="Commenter" className="rounded-full mr-3 border-2 border-indigo-300" />
                <div className="flex-1">
                  <div className="bg-indigo-50 rounded-lg shadow-sm p-4 border border-indigo-100">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold text-indigo-900">Denji's Chainsaw</div>
                      <div className="text-xs text-indigo-600">1 hour ago</div>
                    </div>
                    <p className="text-indigo-800">Totally agree! Quality over scheduling any day. Plus, didn't the original manga artist praise the new studio's test animations?</p>
                    <div className="flex items-center mt-3 text-xs text-indigo-600">
                      <button className="flex items-center mr-4 hover:text-pink-500">
                        <ThumbsUp size={14} className="mr-1" /> 9
                      </button>
                      <button className="hover:text-pink-500">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* View More Comments */}
            <div className="flex justify-center mt-8">
              <button className="text-indigo-700 hover:text-pink-500 font-bold flex items-center bg-indigo-50 px-4 py-2 rounded-full hover:bg-indigo-100 transition-colors">
                  View More Comments <ChevronRight size={16} />
              </button>
            </div>
        </div>
        
        {/* Back to Top Button */}
        <div className="flex justify-end my-8">
          <button className="bg-indigo-100 hover:bg-pink-100 text-indigo-800 hover:text-pink-600 p-2 rounded-full shadow-md transition-colors flex items-center">
            <ArrowUp size={20} />
          </button>
        </div>
        </div>

        {/* Sidebar */}
        <Sidebar />
    </div>
  )
}

export default Main