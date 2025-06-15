'use client'
import React, { useState } from 'react';
import { 
  MessageCircle, 
  Edit3, 
  Trash2, 
  Heart, 
  ExternalLink, 
  Sun, 
  Moon, 
  Clock,
  Reply,
  ChevronRight
} from 'lucide-react';

const MyCommentsSection = () => {
  const [isDark, setIsDark] = useState(true);
  const [editingComment, setEditingComment] = useState(null);
  const [editText, setEditText] = useState('');

  // Mock data for comments
  const [comments, setComments] = useState([
    {
      id: 1,
      articleTitle: "One Piece Chapter 1098: Kuma's Tragic Past Revealed",
      articleExcerpt: "The latest chapter dives deep into Bartholomew Kuma's heartbreaking backstory...",
      commentText: "This chapter absolutely destroyed me emotionally! Oda's storytelling is just incredible. The way he connects Kuma's past to the present narrative is pure genius.",
      timestamp: "2 hours ago",
      likes: 24,
      replies: 3,
      canEdit: true,
      articleUrl: "/articles/one-piece-1098"
    },
    {
      id: 2,
      articleTitle: "Attack on Titan Final Season Part 4 Release Date Confirmed",
      articleExcerpt: "Studio WIT and MAPPA announce the final conclusion to the epic series...",
      commentText: "Finally! I've been waiting for this conclusion for so long. Really hope they nail the ending after all this buildup.",
      timestamp: "1 day ago",
      likes: 8,
      replies: 1,
      canEdit: false,
      articleUrl: "/articles/aot-final-season"
    },
    {
      id: 3,
      articleTitle: "Demon Slayer Season 4 'Hashira Training Arc' Trailer Drops",
      articleExcerpt: "Ufotable showcases stunning animation in the upcoming training arc...",
      commentText: "The animation quality looks absolutely insane! Ufotable never disappoints. Can't wait to see the Hashira in action! 🔥",
      timestamp: "3 days ago",
      likes: 15,
      replies: 0,
      canEdit: false,
      articleUrl: "/articles/demon-slayer-s4"
    },
    {
      id: 4,
      articleTitle: "Chainsaw Man Movie 'Reze Arc' Gets New Poster",
      articleExcerpt: "MAPPA reveals a stunning new poster featuring Reze in her explosive form...",
      commentText: "Reze looks absolutely perfect! MAPPA's character design is spot on. This is going to be an incredible adaptation.",
      timestamp: "1 week ago",
      likes: 32,
      replies: 5,
      canEdit: false,
      articleUrl: "/articles/chainsaw-man-reze"
    }
  ]);

  const handleEdit = (comment) => {
    setEditingComment(comment.id);
    setEditText(comment.commentText);
  };

  const handleSaveEdit = (commentId) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, commentText: editText }
        : comment
    ));
    setEditingComment(null);
    setEditText('');
  };

  const handleDelete = (commentId) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  const handleLike = (commentId) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  const themeClasses = isDark 
    ? 'bg-gray-900 text-white' 
    : 'bg-blue-50 text-gray-900';

  const cardClasses = isDark
    ? 'bg-gray-800 border-pink-500/20 hover:border-pink-500/40'
    : 'bg-white border-violet-200 hover:border-violet-400';

  const accentColor = isDark ? 'text-pink-400' : 'text-violet-600';
  const buttonGradient = isDark 
    ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'
    : 'bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10"></div>
        <div className="relative px-6 py-8">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl font-black uppercase tracking-wide mb-2" 
                  style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                💬 MY COMMENTS
              </h1>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Track and manage your comment history
              </p>
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-3 rounded-full transition-all duration-300 hover:-translate-y-1 ${buttonGradient} shadow-lg`}
            >
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={`border-2 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl ${cardClasses}`}
            >
              {/* Article Info */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className={`font-bold text-lg mb-2 ${accentColor} uppercase tracking-wide`}>
                    {comment.articleTitle}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                    {comment.articleExcerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <div className={`flex items-center gap-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      <Clock className="w-3 h-3" />
                      {comment.timestamp}
                    </div>
                    <a 
                      href={comment.articleUrl}
                      className={`flex items-center gap-1 hover:${accentColor} transition-colors`}
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Article
                    </a>
                  </div>
                </div>
              </div>

              {/* Comment Content */}
              <div className="mb-4">
                {editingComment === comment.id ? (
                  <div className="space-y-3">
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className={`w-full p-3 rounded-lg border-2 ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:border-pink-500 transition-colors`}
                      rows={3}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleSaveEdit(comment.id)}
                        className={`px-4 py-2 rounded-full text-white font-bold ${buttonGradient} transition-all hover:-translate-y-0.5`}
                      >
                        SAVE
                      </button>
                      <button
                        onClick={() => setEditingComment(null)}
                        className={`px-4 py-2 rounded-full border-2 ${
                          isDark ? 'border-gray-600 text-gray-400' : 'border-gray-300 text-gray-600'
                        } hover:bg-gray-100 dark:hover:bg-gray-700 transition-all`}
                      >
                        CANCEL
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className={`text-base leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    {comment.commentText}
                  </p>
                )}
              </div>

              {/* Comment Stats & Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(comment.id)}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all hover:-translate-y-0.5 ${
                      isDark ? 'bg-gray-700 hover:bg-pink-600' : 'bg-gray-100 hover:bg-violet-100'
                    }`}
                  >
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="font-bold">{comment.likes}</span>
                  </button>
                  
                  {comment.replies > 0 && (
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                      isDark ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <Reply className="w-4 h-4" />
                      <span className="font-bold">{comment.replies}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {comment.canEdit && (
                    <button
                      onClick={() => handleEdit(comment)}
                      className={`p-2 rounded-full transition-all hover:-translate-y-0.5 ${
                        isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-violet-500 hover:bg-violet-600'
                      } text-white`}
                      title="Edit comment"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  )}
                  
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all hover:-translate-y-0.5"
                    title="Delete comment"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {comments.length === 0 && (
          <div className="text-center py-16">
            <MessageCircle className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              NO COMMENTS YET
            </h3>
            <p className={`${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Start engaging with articles to see your comments here!
            </p>
          </div>
        )}

        {/* Floating Action Elements */}
        <div className="fixed bottom-6 right-6">
          <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-pink-500' : 'bg-violet-500'} animate-pulse`}></div>
        </div>
      </div>
    </div>
  );
};

export default MyCommentsSection;