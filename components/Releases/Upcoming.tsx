import React, { useState } from 'react'
import { Calendar, Clock, ChevronRight, CalendarDays, Play, Eye, Bell, Info, Star } from 'lucide-react'

const CountdownTimer = ({ releaseDate, accentColor }) => {
  // Sample countdown display (in a real app, you'd calculate this from the actual date)
  const daysLeft = 3;
  const hoursLeft = 14;
  const minutesLeft = 22;
  
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex items-center gap-1">
        <Clock size={14} className={accentColor} />
        <span>Countdown:</span>
      </div>
      <div className="flex gap-2">
        <div className="bg-black bg-opacity-20 px-2 py-1 rounded font-mono">
          {daysLeft}d
        </div>
        <div className="bg-black bg-opacity-20 px-2 py-1 rounded font-mono">
          {hoursLeft}h
        </div>
        <div className="bg-black bg-opacity-20 px-2 py-1 rounded font-mono">
          {minutesLeft}m
        </div>
      </div>
    </div>
  );
};

const EpisodeCard = ({ episode, accentColor, accentBg, darkMode, secondaryBg }) => {
  return (
    <div className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg group`}>
      <div className="relative">
        <img 
          src={episode.image} 
          alt={episode.title} 
          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        
        {episode.isNew && (
          <div className="absolute top-2 left-2">
            <div className={`${accentBg} text-white px-2 py-0.5 text-xs font-bold rounded-md`}>
              NEW
            </div>
          </div>
        )}
        
        {episode.premium && (
          <div className="absolute top-2 right-2">
            <div className="bg-yellow-500 text-white px-2 py-0.5 text-xs font-bold rounded-md">
              PREMIUM
            </div>
          </div>
        )}
        
        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
          <div className="flex items-center gap-1 text-white text-xs">
            <CalendarDays size={12} />
            <span>{episode.releaseDate}</span>
          </div>
          
          {episode.isReleased ? (
            <div className="flex items-center gap-1 text-white text-xs">
              <Eye size={12} />
              <span>{episode.views}</span>
            </div>
          ) : (
            <CountdownTimer releaseDate={episode.releaseDate} accentColor={accentColor} />
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1">
          <h5 className="font-bold text-sm flex-1 line-clamp-1">{episode.animeTitle}</h5>
          {episode.rating && (
            <div className="flex items-center gap-1">
              <Star size={12} fill="#F59E0B" stroke="none" />
              <span className="text-xs">{episode.rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-xs mb-3 text-gray-500">
          Episode {episode.episodeNumber}: {episode.title}
        </p>
        
        <div className="flex justify-between items-center">
          {episode.isReleased ? (
            <a href="#" className={`${accentBg} text-white text-xs font-medium py-1 px-3 rounded-full flex items-center gap-1 hover:opacity-90 transition-opacity`}>
              <Play size={12} />
              <span>Watch Now</span>
            </a>
          ) : (
            <button className={`border ${darkMode ? 'border-gray-700' : 'border-gray-300'} text-xs font-medium py-1 px-3 rounded-full flex items-center gap-1 hover:${accentBg} hover:text-white hover:border-transparent transition-all`}>
              <Bell size={12} />
              <span>Remind Me</span>
            </button>
          )}
          
          <a href="#" className={`text-xs ${accentColor} font-medium flex items-center gap-1 group`}>
            <Info size={12} />
            <span>Details</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const UpcomingReleases = ({ accentColor, accentBg, secondaryBg, darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('thisWeek');
  
  // Sample data for upcoming episodes
  const upcomingEpisodes = [
    {
      id: 1,
      animeTitle: "One Piece",
      title: "The Dawn of the New Era",
      episodeNumber: 1088,
      image: "/api/placeholder/300/180",
      releaseDate: "Apr 21",
      isNew: true,
      isReleased: false,
      views: "",
      rating: ""
    },
    {
      id: 2,
      animeTitle: "My Hero Academia",
      title: "Heroes Rising",
      episodeNumber: 15,
      image: "/api/placeholder/300/180",
      releaseDate: "Apr 18",
      isNew: false,
      isReleased: false,
      views: "",
      rating: ""
    },
    {
      id: 3,
      animeTitle: "Jujutsu Kaisen",
      title: "The Culling Game",
      episodeNumber: 3,
      image: "/api/placeholder/300/180",
      releaseDate: "Apr 16",
      isNew: true,
      isReleased: true,
      views: "1.2M",
      rating: "4.9"
    },
    {
      id: 4,
      animeTitle: "Chainsaw Man",
      title: "The New Season Begins",
      episodeNumber: 1,
      image: "/api/placeholder/300/180",
      releaseDate: "Apr 17",
      isNew: true,
      isReleased: false,
      premium: true,
      views: "",
      rating: ""
    },
    {
      id: 5,
      animeTitle: "Bleach: Thousand-Year Blood War",
      title: "The Final Battle",
      episodeNumber: 8,
      image: "/api/placeholder/300/180",
      releaseDate: "Apr 16",
      isNew: false,
      isReleased: true,
      views: "982K",
      rating: "4.8"
    },
    {
      id: 6,
      animeTitle: "Attack on Titan",
      title: "The Final Season Special",
      episodeNumber: "Special",
      image: "/api/placeholder/300/180",
      releaseDate: "Apr 24",
      isNew: false,
      isReleased: false,
      premium: true,
      views: "",
      rating: ""
    }
  ];
  
  const filterOptions = [
    { id: 'thisWeek', label: 'This Week' },
    { id: 'nextWeek', label: 'Next Week' },
    { id: 'thisMonth', label: 'This Month' },
    { id: 'justReleased', label: 'Just Released' }
  ];
  
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <h3 className="text-2xl font-extrabold uppercase tracking-tight relative flex items-center mb-4 md:mb-0">
          <Calendar className={accentColor} size={24} strokeWidth={2.5} />
          <span className="ml-2">
            <span className={accentColor}>Upcoming</span> Episodes
          </span>
          <span className={`block h-1 ${accentBg} w-12 mt-1 absolute bottom-0 left-0`}></span>
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {filterOptions.map(option => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                activeFilter === option.id 
                  ? `${accentBg} text-white` 
                  : `${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {upcomingEpisodes.map(episode => (
          <EpisodeCard 
            key={episode.id}
            episode={episode}
            accentColor={accentColor}
            accentBg={accentBg}
            darkMode={darkMode}
            secondaryBg={secondaryBg}
          />
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        {/* <a href="#" className={`border ${darkMode ? 'border-gray-700' : 'border-gray-300'} ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2 transition-colors duration-300`}>
          <span>View Full Release Schedule</span>
          <ChevronRight size={16} />
        </a> */}
      </div>
    </div>
  );
};

export default UpcomingReleases;