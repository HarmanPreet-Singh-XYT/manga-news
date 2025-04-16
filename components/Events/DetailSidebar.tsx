import React, { useState, useEffect } from 'react';
import { Users, Heart, Share2, Award, Calendar, MapPin, Star, ChevronRight, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const EventSidebar = ({ isDarkMode, eventDetails }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [fansCount, setFansCount] = useState(eventDetails?.fansCount || 15782);
  const [isNotified, setIsNotified] = useState(false);
  
  // Base theme classes
  const baseBgClass = isDarkMode ? 'bg-gray-900' : 'bg-indigo-50';
  const baseTextClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const primaryAccent = isDarkMode ? 'pink-500' : 'violet-600';
  const secondaryAccent = isDarkMode ? 'purple-900' : 'violet-200';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const cardBgAccent = isDarkMode ? 'bg-gray-900' : 'bg-violet-50';
  const borderColor = isDarkMode ? 'border-pink-500' : 'border-violet-500';
  const highlightText = isDarkMode ? 'text-pink-500' : 'text-violet-700';
  const buttonBg = isDarkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500';
  const accentButtonBg = isDarkMode ? 'bg-purple-600 hover:bg-purple-500' : 'bg-violet-700 hover:bg-violet-600';
  const subtleText = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const inputBg = isDarkMode ? 'bg-gray-800' : 'bg-violet-50';
  const panelBg = isDarkMode ? 'bg-gray-800' : 'bg-white/90';
  const subtleBg = isDarkMode ? 'bg-gray-900' : 'bg-indigo-100';
  const accentHoverBg = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    setFansCount(isLiked ? fansCount - 1 : fansCount + 1);
  };
  
  const handleNotify = () => {
    setIsNotified(!isNotified);
  };

  return (
    <div className="lg:col-span-1">
      {/* Event Stats Card */}
      <motion.div 
        initial={{ rotate: 1 }}
        whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
        className={`${panelBg} p-6 mb-6 rounded-lg border shadow-lg`}
        style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" }}
      >
        <div>
          <h2 className={`text-xl font-bold uppercase mb-4 flex items-center ${isDarkMode ? 'text-pink-400' : 'text-violet-600'}`}>
            <Star className="mr-2" />
            Event Stats
          </h2>
          
          {/* Popularity */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className={`${subtleText} font-bold`}>Popularity</span>
              <div className="flex items-center">
                <span className={`font-bold ${isDarkMode ? 'text-purple-400' : 'text-violet-500'}`}>
                  {eventDetails.popularity}
                </span>
                <span className={subtleText}>/100</span>
              </div>
            </div>
            <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3 overflow-hidden`}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${eventDetails.popularity}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`bg-gradient-to-r ${isDarkMode ? 'from-purple-600 to-pink-500' : 'from-violet-500 to-fuchsia-500'} h-3 rounded-full`}
              />
            </div>
          </div>
          
          {/* Event Details */}
          <div className={`${subtleBg} p-4 rounded-lg mb-6`}>
            <div className="flex items-center mb-3">
              <Calendar className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-pink-400' : 'text-violet-500'}`} />
              <div>
                <p className="text-sm font-medium">June 15-17, 2025</p>
                <p className={`text-xs ${subtleText}`}>3-Day Event</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-pink-400' : 'text-violet-500'}`} />
              <div>
                <p className="text-sm font-medium">Tokyo Big Sight</p>
                <p className={`text-xs ${subtleText}`}>Ariake, Tokyo</p>
              </div>
            </div>
          </div>
          
          {/* Fans Count */}
          <div className={`flex items-center justify-between p-3 ${subtleBg} mb-6 rounded-lg`}>
            <div className="flex items-center">
              <Users className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-purple-400' : 'text-violet-500'}`} />
              <span className="font-bold">Fans</span>
            </div>
            <motion.div 
              key={fansCount}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="font-bold text-lg"
            >
              {fansCount.toLocaleString()}
            </motion.div>
          </div>
          
          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {/* Like Button */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={handleLike}
              className={`py-3 px-4 flex items-center justify-center font-bold text-lg transition-colors rounded-lg ${
                isLiked 
                  ? (isDarkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white') 
                  : (isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600')
              }`}
            >
              <Heart className={`mr-2 ${isLiked ? 'fill-current' : ''}`} />
              <span>{isLiked ? 'Liked' : 'Like'}</span>
            </motion.button>

            {/* Notify Button */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={handleNotify}
              className={`py-3 px-4 flex items-center justify-center font-bold text-lg transition-colors rounded-lg ${
                isNotified 
                  ? (isDarkMode ? 'bg-purple-600 text-white' : 'bg-violet-600 text-white') 
                  : (isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600')
              }`}
            >
              <Bell className={`mr-2 ${isNotified ? 'fill-current' : ''}`} />
              <span>{isNotified ? 'Notified' : 'Notify'}</span>
            </motion.button>
          </div>

          {/* Share */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 flex items-center justify-center font-bold text-lg transition-colors rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'}`}
          >
            <Share2 className="mr-2" />
            <span>Share Event</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Featured Guest */}
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`${panelBg} p-6 mb-6 rounded-lg border overflow-hidden shadow-lg relative`}
      >
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={isDarkMode ? 'text-pink-500' : 'text-violet-500'}>
            <path fill="currentColor" d="M42.7,-73.4C56,-66.9,67.8,-56,74.3,-42.4C80.9,-28.9,82.3,-12.7,79.9,2.4C77.5,17.5,71.3,31.6,62.4,43.2C53.4,54.8,41.7,63.9,28.5,69.6C15.3,75.2,0.6,77.4,-15.6,76.3C-31.9,75.3,-49.7,71,-60.1,59.9C-70.5,48.8,-73.5,30.9,-74.4,13.9C-75.3,-3.1,-74.2,-19.2,-67.7,-32.2C-61.2,-45.1,-49.4,-54.8,-36.5,-61.5C-23.6,-68.1,-9.7,-71.7,3.7,-77.6C17,-83.5,29.4,-79.9,42.7,-73.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <h2 className={`text-xl font-bold uppercase mb-4 flex items-center ${isDarkMode ? 'text-pink-400' : 'text-violet-600'}`}>
          <Award className="mr-2" />
          Featured Guest
        </h2>
        
        <div className="text-center">
          <div className="w-32 h-32 mx-auto relative mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-spin-slow" style={{ animationDuration: '10s' }}></div>
            <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-800"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white dark:border-gray-700">
              <img src="https://cdn.mainichi.jp/vol1/2023/04/14/20230414p2g00m0et037000p/8.jpg?1" alt="Makoto Shinkai" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Makoto Shinkai</h3>
          <p className={`${subtleText} mb-3`}>Film Director & Animator</p>
          
          <div className="flex justify-center gap-2 mb-4">
            {['Director', 'Writer', 'Artist'].map((tag, idx) => (
              <span key={idx} className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                {tag}
              </span>
            ))}
          </div>
          
          <p className="mt-3 text-sm">Join a special screening of Makoto Shinkai's upcoming film, followed by a Q&A session on Day 2!</p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-5 px-6 py-2 rounded-lg ${accentButtonBg} text-white font-bold flex items-center justify-center mx-auto`}
          >
            <span>See Schedule</span>
            <ChevronRight className="ml-1 w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
      
      {/* Related Events */}
      <div className={`${panelBg} p-6 rounded-lg border shadow-lg`}>
        <h2 className={`text-xl font-bold uppercase mb-4 flex items-center ${isDarkMode ? 'text-pink-400' : 'text-violet-600'}`}>
          <Calendar className="mr-2" />
          Related Events
        </h2>
        
        <div className="space-y-3">
          {[
            { 
              name: "Manga Creator Conference", 
              date: "Aug 12-14, 2025", 
              img: "https://res-1.cloudinary.com/dbm1qiew0/image/upload/q_auto/v1/blog-images/A-comprehensive-guide-to-Tokyo-s-anime-and-manga-events-in-2025.jpg",
              tags: ["Conference", "Creators"]
            },
            { 
              name: "J-Pop Summer Festival", 
              date: "July 18-20, 2025", 
              img: "https://i.scdn.co/image/ab67616d0000b27380e51788b1abdfa4aee98858",
              tags: ["Music", "Live"]
            },
            { 
              name: "Cosplay Champions", 
              date: "July 7, 2025", 
              img: "https://dreamhack.com/india/wp-content/uploads/sites/21/2023/09/dominance.jpg",
              tags: ["Competition", "Cosplay"]
            }
          ].map((event, index) => (
            <motion.div 
              key={index}
              whileHover={{ x: 5 }}
              className={`flex items-center ${subtleBg} p-3 rounded-lg cursor-pointer`}
            >
              <div className="w-16 h-16 overflow-hidden rounded-lg mr-3 flex-shrink-0">
                <img src={event.img} alt={event.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold">{event.name}</h3>
                <p className={`${subtleText} text-sm mb-1`}>{event.date}</p>
                <div className="flex gap-1">
                  {event.tags.map((tag, idx) => (
                    <span key={idx} className={`text-xs px-1.5 py-0.5 rounded ${isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ChevronRight className={`${subtleText} ml-1`} />
            </motion.div>
          ))}
        </div>
        <a href='/events'>
            <motion.button 
            whileHover={{ y: -2 }}
            className={`w-full mt-4 py-2 text-center font-medium ${isDarkMode ? 'text-white hover:text-purple-300' : 'text-white hover:text-violet-800'} ${accentButtonBg} rounded-lg transition-colors`}
            >
            View All Events
            </motion.button>
        </a>
      </div>
    </div>
  );
};

export default EventSidebar;