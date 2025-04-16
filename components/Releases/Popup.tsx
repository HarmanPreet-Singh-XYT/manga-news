import React, { useState, useEffect } from 'react';
import { 
  X, 
  Star, 
  Heart, 
  Share2, 
  Download, 
  Calendar, 
  Clock, 
  Film, 
  Award, 
  Globe,
  TrendingUp
} from 'lucide-react';

const AnimeDetailPopup = ({ 
  anime, 
  isOpen, 
  onClose, 
  accentColor, 
  accentBg, 
  darkMode, 
  secondaryBg 
}) => {
  const [liked, setLiked] = useState(false);
  
  // Close on escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  if (!isOpen || !anime) return null;
  
  // Convert likes string to number for the animation
  const likesNum = typeof anime.likes === 'string' 
    ? parseInt(anime.likes.replace(/[^0-9]/g, '')) 
    : anime.likes || 0;

  const similarAnime = [
    {
      title: "Chainsaw Man",
      image: "/api/placeholder/100/150",
      rating: "4.7"
    },
    {
      title: "Demon Slayer",
      image: "/api/placeholder/100/150", 
      rating: "4.9"
    },
    {
      title: "One Punch Man",
      image: "/api/placeholder/100/150",
      rating: "4.8"
    }
  ];
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 z-40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto`}>
        <div 
          className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-scale-up`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className={`absolute top-4 right-4 z-10 p-2 rounded-full ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'} hover:${accentBg} hover:text-white transition-colors`}
          >
            <X size={20} />
          </button>
          
          {/* Header with banner image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src={anime.image || "/api/placeholder/800/400"} 
              alt={anime.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 drop-shadow-lg">
                {anime.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < Math.floor(anime.rating) ? "#F59E0B" : "#6B7280"} 
                      stroke="none" 
                    />
                  ))}
                  <span className="ml-2 text-white font-bold">{anime.rating}</span>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full bg-black bg-opacity-50 text-white font-medium`}>
                  {anime.genre}
                </span>
                <span className="text-white text-sm flex items-center">
                  <Film size={14} className="mr-1" /> {anime.episodes} episodes
                </span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left column */}
              <div className="w-full md:w-2/3">
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-2">Synopsis</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {anime.description || 
                      `Experience the thrilling continuation of ${anime.title} as the story reaches new heights. 
                      Follow our heroes through intense battles, emotional revelations, and breathtaking animation 
                      that pushes the boundaries of the medium. This season introduces new characters and 
                      deepens the lore of this beloved series.`}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">Details</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="text-sm text-gray-500 mb-1">Studio</p>
                      <p className="font-medium">{anime.studio || "MAPPA"}</p>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="text-sm text-gray-500 mb-1">Duration</p>
                      <p className="font-medium flex items-center">
                        <Clock size={14} className="mr-1" /> {anime.duration}
                      </p>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="text-sm text-gray-500 mb-1">Release</p>
                      <p className="font-medium flex items-center">
                        <Calendar size={14} className="mr-1" /> {anime.releaseDate || "2023"}
                      </p>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="text-sm text-gray-500 mb-1">Status</p>
                      <p className="font-medium">{anime.status || "Ongoing"}</p>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="text-sm text-gray-500 mb-1">Language</p>
                      <p className="font-medium flex items-center">
                        <Globe size={14} className="mr-1" /> Japanese
                      </p>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <p className="text-sm text-gray-500 mb-1">Popularity</p>
                      <p className="font-medium flex items-center">
                        <TrendingUp size={14} className="mr-1" /> {likesNum > 10000 ? 'Very High' : likesNum > 5000 ? 'High' : 'Medium'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {(anime.tags || ["Action", "Fantasy", "Adventure", "Supernatural", "Drama"]).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} px-3 py-1 text-xs font-medium rounded-full hover:${accentBg} hover:text-white transition-colors duration-300 cursor-pointer`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right column */}
              <div className="w-full md:w-1/3">
                <div className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-4 mb-6`}>
                  <h3 className="font-bold text-lg mb-4">Fan Rating</h3>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={24} fill={star <= Math.floor(anime.rating) ? "#F59E0B" : "#D1D5DB"} stroke="none" className="cursor-pointer hover:scale-110 transition-transform" />
                      ))}
                    </div>
                    <span className="font-bold text-lg">{anime.rating}/5.0</span>
                  </div>
                  <div className="h-1 w-full bg-gray-300 rounded-full mb-1 overflow-hidden">
                    <div className={`h-full ${accentBg}`} style={{ width: `${parseFloat(anime.rating) * 20}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-500 text-right">based on {anime.reviewCount || "1,024"} reviews</p>
                </div>
                
                <div className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-4 mb-6`}>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Actions</h3>
                    <span className="text-sm text-gray-500">{anime.likes || likesNum.toLocaleString()} likes</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg border ${
                        liked ? `${accentBg} text-white border-transparent` : darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'
                      } transition-colors`}
                    >
                      <Heart size={18} fill={liked ? "currentColor" : "none"} />
                      <span>{liked ? 'Liked' : 'Like'}</span>
                    </button>
                    <button className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} transition-colors`}>
                      <Share2 size={18} />
                      <span>Share</span>
                    </button>
                    <button className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} transition-colors col-span-2`}>
                      <Download size={18} />
                      <span>Download Episodes</span>
                    </button>
                  </div>
                </div>
                
                <div className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-4`}>
                  <h3 className="font-bold text-lg mb-3">Similar Anime</h3>
                  <div className="space-y-3">
                    {similarAnime.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-12 h-16 rounded overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className={`font-medium group-hover:${accentColor} transition-colors`}>{item.title}</h4>
                          <div className="flex items-center">
                            <Star size={12} fill="#F59E0B" stroke="none" />
                            <span className="text-xs ml-1">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer actions */}
          <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex justify-between items-center`}>
            <div className="flex items-center gap-2">
              <Award size={20} className={accentColor} />
              <span className="font-medium">#{anime.rank || "5"} in {anime.genre || "Action"}</span>
            </div>
            <a 
              href="#" 
              className={`${accentBg} text-white font-bold py-2 px-6 rounded-lg transform hover:translate-y-1 transition-all`}
            >
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeDetailPopup;