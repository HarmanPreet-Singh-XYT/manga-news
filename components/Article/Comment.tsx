import { useState } from 'react';
import { MessageCircle, ThumbsUp, ChevronRight, Heart, Reply, Send, Clock, Trash, Edit } from 'lucide-react';

export default function AnimeDiscussionComponent({darkMode}:{darkMode:boolean}) {
  // Sample article data with initial comments
  const [articleData, setArticleData] = useState({
    title: "Chainsaw Man Season 2 Studio Change",
    commentCount: 5
  });
  
  // State for new comment
  const [newComment, setNewComment] = useState('');
  const [showAllComments, setShowAllComments] = useState(false);
  
  // Dark mode theme variables
  const baseBgClass = darkMode ? 'bg-gray-900' : 'bg-indigo-50';
  const containerBgClass = darkMode ? 'bg-gray-800' : 'bg-indigo-50';
  const baseTextClass = darkMode ? 'text-white' : 'text-indigo-900';
  const subtextClass = darkMode ? 'text-gray-300' : 'text-indigo-600';
  const commentBgClass = darkMode ? 'bg-gray-700' : 'bg-white';
  const replyBgClass = darkMode ? 'bg-gray-800' : 'bg-indigo-50';
  const inputBgClass = darkMode ? 'bg-gray-700' : 'bg-white';
  const inputTextClass = darkMode ? 'text-white' : 'text-indigo-800';
  const inputBorderClass = darkMode ? 'border-gray-600' : 'border-indigo-200';
  const inputFocusClass = darkMode ? 'focus:border-pink-500' : 'focus:border-pink-500';
  const borderClass = darkMode ? 'border-purple-800' : 'border-indigo-400';
  const borderHoverClass = darkMode ? 'hover:border-pink-500' : 'hover:border-pink-300';
  const statsBgClass = darkMode ? 'bg-gray-700' : 'bg-indigo-100';
  const statsTxtClass = darkMode ? 'text-gray-300' : 'text-indigo-700';
  const buttonBgClass = darkMode ? 'bg-gray-700' : 'bg-white';
  const buttonTxtClass = darkMode ? 'text-pink-400' : 'text-indigo-700';
  const buttonHoverBgClass = darkMode ? 'hover:bg-gray-600' : 'hover:bg-indigo-100';
  const userTagBgClass = darkMode ? 'bg-pink-900' : 'bg-pink-100';
  const userTagTxtClass = darkMode ? 'text-pink-300' : 'text-pink-600';
  const heartActiveClass = darkMode ? 'text-pink-400' : 'text-pink-500';
  const heartActiveFill = darkMode ? 'fill-pink-400' : 'fill-pink-500';
  const iconColor = darkMode ? 'text-pink-400' : 'text-pink-500';
  
  // State for comments - in a real app, this would come from an API
  const [comments, setComments] = useState([
    {
      id: 1,
      username: "Makima Fan",
      avatar: "https://staticg.sportskeeda.com/editor/2024/08/ec67a-17243378857426-1920.jpg?w=640",
      content: "I'm cautiously optimistic about the studio change. MAPPA did an amazing job with season 1, but if they're overbooked, I'd rather a fresh team with passion take over than get a rushed production.",
      likes: 24,
      timeAgo: "2 hours ago",
      isLiked: false,
      replies: [
        {
          id: 101,
          username: "Denji's Chainsaw",
          avatar: "https://images5.alphacoders.com/128/1283698.jpg",
          content: "Totally agree! Quality over scheduling any day. Plus, didn't the original manga artist praise the new studio's test animations?",
          likes: 9,
          timeAgo: "1 hour ago",
          isLiked: false
        }
      ],
      showReplyInput: false,
      replyText: ''
    },
    {
      id: 2,
      username: "PowerBestGirl",
      avatar: "https://play-lh.googleusercontent.com/_qUtBpMVsGY-CLPx2DreAENHAbr4KHwBGn2w_3jhGSzoRVFRKn0SXUaK0wXSU0SJ7A",
      content: "I just hope they keep the same voice actors! The voice acting in the first season was absolutely perfect.",
      likes: 17,
      timeAgo: "3 hours ago",
      isLiked: false,
      replies: [],
      showReplyInput: false,
      replyText: ''
    },
    {
      id: 3,
      username: "Aki_Hayakawa",
      avatar: "https://i.pinimg.com/736x/59/63/ec/5963ecf402edc0955ec35960563709f1.jpg",
      content: "Can't wait to see how they animate the International Assassins arc! That's going to require some serious animation talent.",
      likes: 32,
      timeAgo: "5 hours ago",
      isLiked: false,
      replies: [
        {
          id: 301,
          username: "Kobeni's Car",
          avatar: "https://cdn.rafled.com/anime-icons/images/2a29901bd565065ee32d868fbad86c9f67c41020b9fa5609747595efc4cecbb5.jpg",
          content: "That arc is going to break the internet! So many iconic moments!",
          likes: 21,
          timeAgo: "4 hours ago",
          isLiked: false
        }
      ],
      showReplyInput: false,
      replyText: ''
    }
  ]);

  // Handle posting a new comment
  const handlePostComment = () => {
    if (newComment.trim() === '') return;
    
    const newCommentObj = {
      id: comments.length + 1000, // Just for demo purposes
      username: "You",
      avatar: "https://staticg.sportskeeda.com/editor/2024/05/5dbc5-17159017650761-1920.jpg?w=640",
      content: newComment,
      likes: 0,
      timeAgo: "Just now",
      isLiked: false,
      replies: [],
      showReplyInput: false,
      replyText: ''
    };
    
    setComments([newCommentObj, ...comments]);
    setArticleData({
      ...articleData,
      commentCount: articleData.commentCount + 1
    });
    setNewComment('');
  };

  // Handle liking a comment
  const handleLikeComment = (commentId, isReply = false, parentId = null) => {
    if (isReply && parentId) {
      setComments(comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply => {
              if (reply.id === commentId) {
                return {
                  ...reply,
                  likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                  isLiked: !reply.isLiked
                };
              }
              return reply;
            })
          };
        }
        return comment;
      }));
    } else {
      setComments(comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked
          };
        }
        return comment;
      }));
    }
  };

  // Toggle reply input
  const toggleReplyInput = (commentId) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          showReplyInput: !comment.showReplyInput
        };
      }
      return comment;
    }));
  };

  // Handle reply text change
  const handleReplyTextChange = (commentId, text) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replyText: text
        };
      }
      return comment;
    }));
  };

  // Submit reply
  const submitReply = (commentId) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId && comment.replyText.trim() !== '') {
        const newReply = {
          id: Math.floor(Math.random() * 10000),
          username: "You",
          avatar: "https://staticg.sportskeeda.com/editor/2024/05/5dbc5-17159017650761-1920.jpg?w=640",
          content: comment.replyText,
          likes: 0,
          timeAgo: "Just now",
          isLiked: false
        };
        
        return {
          ...comment,
          replies: [...comment.replies, newReply],
          showReplyInput: false,
          replyText: ''
        };
      }
      return comment;
    }));
    
    setArticleData({
      ...articleData,
      commentCount: articleData.commentCount + 1
    });
  };

  const visibleComments = showAllComments ? comments : comments.slice(0, 2);

  return (
    <div className={`rounded-lg ${containerBgClass} p-6 shadow-lg border-t-4 ${borderClass}`}>
      <h3 className={`text-xl font-bold ${baseTextClass} mb-4 flex items-center`}>
        <MessageCircle size={20} className={`mr-2 ${iconColor}`} />
        Fan Discussions ({articleData.commentCount})
      </h3>
      
      {/* Comment Input */}
      <div className="flex items-start mb-8">
        <img src="https://staticg.sportskeeda.com/editor/2024/05/5dbc5-17159017650761-1920.jpg?w=640" alt="User" className={`rounded-full object-cover overflow-hidden mr-3 w-10 h-10 border-2 ${darkMode ? 'border-purple-700' : 'border-indigo-300'} shadow-md`} />
        <div className="flex-1">
          <div className={`${commentBgClass} rounded-lg shadow-md p-3 border ${inputBorderClass} ${borderHoverClass} transition-all duration-300`}>
            <textarea 
              placeholder="Share your thoughts on this article..." 
              className={`w-full p-2 border ${inputBorderClass} rounded ${inputFocusClass} focus:outline-none ${inputTextClass} ${inputBgClass}`}
              rows={3}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end mt-2">
            <button 
              className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold transform hover:-translate-y-1 transition-all duration-300 shadow-md flex items-center"
              onClick={handlePostComment}
            >
              <Send size={16} className="mr-2" />
              Post Comment
            </button>
          </div>
        </div>
      </div>
      
      {/* Comments */}
      <div className="space-y-6">
        {visibleComments.map(comment => (
          <div key={comment.id} className="animate-fadeIn">
            {/* Parent Comment */}
            <div className="flex items-start">
              <img 
                src={comment.avatar} 
                alt="Commenter" 
                className={`rounded-full mr-3 h-10 w-10  object-cover overflow-hidden border-2 ${darkMode ? 'border-pink-700' : 'border-pink-300'} shadow-md`} 
              />
              <div className="flex-1">
                <div className={`${commentBgClass} rounded-lg shadow-md p-4 border ${comment.isLiked ? (darkMode ? 'border-pink-700' : 'border-pink-300') : (darkMode ? 'border-gray-600' : 'border-indigo-100')} ${borderHoverClass} transition-colors`}>
                  <div className="flex justify-between items-center mb-2">
                    <div className={`font-bold ${baseTextClass} flex items-center`}>
                      {comment.username}
                      {comment.username === "You" && (
                        <span className={`ml-2 ${userTagBgClass} ${userTagTxtClass} text-xs px-2 py-1 rounded-full`}>You</span>
                      )}
                    </div>
                    <div className={`text-xs ${subtextClass} flex items-center`}>
                      <Clock size={12} className="mr-1" />
                      {comment.timeAgo}
                    </div>
                  </div>
                  <p className={inputTextClass}>{comment.content}</p>
                  <div className={`flex items-center mt-3 text-xs ${subtextClass}`}>
                    <button 
                      className={`flex items-center mr-4 ${comment.isLiked ? heartActiveClass : 'hover:' + heartActiveClass}`}
                      onClick={() => handleLikeComment(comment.id)}
                    >
                      <Heart size={14} className={`mr-1 ${comment.isLiked ? heartActiveFill : ''}`} />
                      {comment.likes}
                    </button>
                    <button 
                      className={`flex items-center hover:${heartActiveClass}`}
                      onClick={() => toggleReplyInput(comment.id)}
                    >
                      <Reply size={14} className="mr-1" />
                      Reply
                    </button>
                  </div>
                </div>
                
                {/* Reply Input Area */}
                {comment.showReplyInput && (
                  <div className="mt-2 ml-4 flex">
                    <input
                      type="text"
                      placeholder="Write a reply..."
                      className={`flex-1 p-2 border ${inputBorderClass} rounded-l-lg ${inputBgClass} ${inputTextClass} focus:outline-none ${inputFocusClass}`}
                      value={comment.replyText}
                      onChange={(e) => handleReplyTextChange(comment.id, e.target.value)}
                    />
                    <button 
                      className={`${darkMode ? 'bg-indigo-800' : 'bg-indigo-600'} text-white px-3 py-2 rounded-r-lg hover:bg-pink-500 transition-colors`}
                      onClick={() => submitReply(comment.id)}
                    >
                      <Send size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="ml-12 mt-3 space-y-3">
                {comment.replies.map(reply => (
                  <div key={reply.id} className="flex items-start">
                    <img 
                      src={reply.avatar} 
                      alt="Replier" 
                      className={`rounded-full mr-3  object-cover overflow-hidden border-2 ${darkMode ? 'border-purple-700' : 'border-indigo-300'} h-8 w-8 shadow-sm`} 
                    />
                    <div className="flex-1">
                      <div className={`${replyBgClass} rounded-lg shadow-sm p-3 border ${reply.isLiked ? (darkMode ? 'border-pink-700' : 'border-pink-300') : (darkMode ? 'border-gray-600' : 'border-indigo-100')}`}>
                        <div className="flex justify-between items-center mb-1">
                          <div className={`font-bold ${baseTextClass} text-sm flex items-center`}>
                            {reply.username}
                            {reply.username === "You" && (
                              <span className={`ml-2 ${userTagBgClass} ${userTagTxtClass} text-xs px-2 py-0.5 rounded-full`}>You</span>
                            )}
                          </div>
                          <div className={`text-xs ${subtextClass} flex items-center`}>
                            <Clock size={10} className="mr-1" />
                            {reply.timeAgo}
                          </div>
                        </div>
                        <p className={`${inputTextClass} text-sm`}>{reply.content}</p>
                        <div className={`flex items-center mt-2 text-xs ${subtextClass}`}>
                          <button 
                            className={`flex items-center mr-3 ${reply.isLiked ? heartActiveClass : 'hover:' + heartActiveClass}`}
                            onClick={() => handleLikeComment(reply.id, true, comment.id)}
                          >
                            <Heart size={12} className={`mr-1 ${reply.isLiked ? heartActiveFill : ''}`} />
                            {reply.likes}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* View More Comments */}
      {comments.length > 2 && (
        <div className="flex justify-center mt-8">
          <button 
            className={`${buttonTxtClass} hover:${heartActiveClass} font-bold flex items-center ${buttonBgClass} px-4 py-2 rounded-full ${buttonHoverBgClass} transition-colors shadow-md`}
            onClick={() => setShowAllComments(!showAllComments)}
          >
            {showAllComments ? 'Show Less' : 'View More Comments'} 
            <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${showAllComments ? 'rotate-90' : ''}`} />
          </button>
        </div>
      )}
      
      {/* Comment Statistics */}
      <div className={`mt-6 ${statsBgClass} rounded-lg p-3 text-center ${statsTxtClass} text-sm`}>
        <p>
          <span className="font-bold">{articleData.commentCount}</span> comments from <span className="font-bold">{comments.length}</span> fans discussing this article
        </p>
      </div>
    </div>
  );
}