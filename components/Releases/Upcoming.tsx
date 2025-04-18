import React, { useEffect, useState } from 'react'
import { Calendar, Clock, ChevronRight, CalendarDays, Play, Eye, Bell, Info, Star } from 'lucide-react'

const CountdownTimer = ({ accentColor }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 22,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return prev;
        }

        if (seconds > 0) {
          seconds -= 1;
        } else {
          if (minutes > 0 || hours > 0 || days > 0) {
            seconds = 59;
            if (minutes > 0) {
              minutes -= 1;
            } else {
              if (hours > 0) {
                minutes = 59;
                hours -= 1;
              } else if (days > 0) {
                minutes = 59;
                hours = 23;
                days -= 1;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex items-center gap-1">
        <Clock size={14} className={accentColor} />
        <span>Countdown:</span>
      </div>
      <div className="flex gap-2">
        {/* <div className="bg-black text-white bg-opacity-20 px-2 py-1 rounded font-mono">
          {timeLeft.days}d
        </div> */}
        <div className="bg-black text-white bg-opacity-20 px-2 py-1 rounded font-mono">
          {timeLeft.hours}h
        </div>
        <div className="bg-black text-white bg-opacity-20 px-2 py-1 rounded font-mono">
          {timeLeft.minutes}m
        </div>
        <div className="bg-black text-white bg-opacity-20 px-2 py-1 rounded font-mono">
          {timeLeft.seconds}s
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
            <CountdownTimer accentColor={accentColor} />
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
            <a href="https://www.crunchyroll.com/" className={`${accentBg} text-white text-xs font-medium py-1 px-3 rounded-full flex items-center gap-1 hover:opacity-90 transition-opacity`}>
              <Play size={12} />
              <span>Watch Now</span>
            </a>
          ) : (
            <button className={`border ${darkMode ? 'border-gray-700' : 'border-gray-300'} text-xs font-medium py-1 px-3 rounded-full flex items-center gap-1 hover:${accentBg} hover:text-white hover:border-transparent transition-all`}>
              <Bell size={12} />
              <span>Remind Me</span>
            </button>
          )}
          
          <a href={`/series/details/${episode.id}`} className={`text-xs ${accentColor} font-medium flex items-center gap-1 group`}>
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
      id: 5,
      animeTitle: "One Piece",
      title: "The Dawn of the New Era",
      episodeNumber: 1088,
      image: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABfjFlp2knrovoWG6xA8-iLLO-4bb86YMqJWGhtNWKCdwcuTkYfrLxLi-Rd83YMp4KpzpBvv3_32kFtMclVF8rKCh2v9CZ9DVLc4S.jpg?r=4d8",
      releaseDate: "Apr 21",
      isNew: true,
      isReleased: false,
      views: "",
      rating: "",
      link:""
    },
    {
      id: 4,
      animeTitle: "My Hero Academia",
      title: "Heroes Rising",
      episodeNumber: 15,
      image: "https://i.redd.it/faaz36v3pon41.png",
      releaseDate: "Apr 18",
      isNew: false,
      isReleased: false,
      views: "",
      rating: "",
      link:""
    },
    {
      id: 3,
      animeTitle: "Jujutsu Kaisen",
      title: "The Culling Game",
      episodeNumber: 3,
      image: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABdPXLFPbfzuRS2NPsXd5HnKXhKTOhpQ8zbyCrN4IbkdEJ2l6BRGHR7eozAepiuVI-JRetwR3lD5Q26D7yfpdMrwjOBzid9bIKIFK.jpg?r=794",
      releaseDate: "Apr 16",
      isNew: true,
      isReleased: true,
      views: "1.2M",
      rating: "4.9",
      link:"https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen"
    },
    {
      id: 2,
      animeTitle: "Chainsaw Man",
      title: "The New Season Begins",
      episodeNumber: 1,
      image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/09/denji-and-power-are-goofy-together-in-chainsaw-man.jpg",
      releaseDate: "Apr 17",
      isNew: true,
      isReleased: false,
      premium: true,
      views: "",
      rating: "",
      link:""
    },
    {
      id: 13,
      animeTitle: "Bleach: Thousand-Year Blood War",
      title: "The Final Battle",
      episodeNumber: 8,
      image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/bleach-thousand-year-blood-war.jpg",
      releaseDate: "Apr 16",
      isNew: false,
      isReleased: true,
      views: "982K",
      rating: "4.8",
      link:"https://www.crunchyroll.com/series/G63VGG2NY/bleach"
    },
    {
      id: 1,
      animeTitle: "Attack on Titan",
      title: "The Final Season Special",
      episodeNumber: "Special",
      image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/11/attack-on-titan-finale.jpg",
      releaseDate: "Apr 24",
      isNew: false,
      isReleased: false,
      premium: true,
      views: "",
      rating: "",
      link:""
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