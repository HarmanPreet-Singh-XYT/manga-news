import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ChevronRight, CalendarDays, Play, Eye, Bell, Info, Star, Check, Filter, Bookmark, AlertTriangle } from 'lucide-react';

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
        {/* <span>Countdown:</span> */}
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

// Enhanced episode card with reminder functionality
const EpisodeCard = ({ episode, accentColor, accentBg, darkMode, secondaryBg, onRemind }) => {
  const [reminded, setReminded] = useState(episode.reminded || false);

  const handleRemindClick = () => {
    setReminded(!reminded);
    onRemind(episode.id, !reminded);
  };

  return (
    <div className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg group`}>
      <div className="relative">
        <img 
          src={episode.image} 
          alt={episode.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        
        <div className="absolute top-2 left-2 flex gap-2">
          {episode.isNew && (
            <div className={`${accentBg} text-white px-2 py-0.5 text-xs font-bold rounded-md`}>
              NEW
            </div>
          )}
          
          {episode.simulcast && (
            <div className="bg-green-500 text-white px-2 py-0.5 text-xs font-bold rounded-md">
              SIMULCAST
            </div>
          )}
        </div>
        
        <div className="absolute top-2 right-2">
          {episode.premium && (
            <div className="bg-yellow-500 text-white px-2 py-0.5 text-xs font-bold rounded-md flex items-center gap-1">
              <Star size={10} fill="white" stroke="none" />
              <span>PREMIUM</span>
            </div>
          )}
        </div>
        
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
              <span className="text-xs font-medium">{episode.rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-xs mb-3 text-gray-500">
          Episode {episode.episodeNumber}: {episode.title}
        </p>
        
        <div className="flex justify-between items-center">
          {episode.isReleased ? (
            <a href={episode.link || "#"} className={`${accentBg} text-white text-xs font-medium py-1 px-3 rounded-full flex items-center gap-1 hover:opacity-90 transition-opacity`}>
              <Play size={12} />
              <span>Watch Now</span>
            </a>
          ) : (
            <button 
              onClick={handleRemindClick}
              className={`${
                reminded 
                  ? `${accentBg} text-white` 
                  : `border ${darkMode ? 'border-gray-700' : 'border-gray-300'} hover:${accentBg} hover:text-white hover:border-transparent`
              } text-xs font-medium py-1 px-3 rounded-full flex items-center gap-1 transition-all`}
            >
              {reminded ? <Check size={12} /> : <Bell size={12} />}
              <span>{reminded ? 'Reminded' : 'Remind Me'}</span>
            </button>
          )}
          
          <a href={`/series/details/${episode.id}`} className={`text-xs ${accentColor} font-medium flex items-center gap-1 hover:underline`}>
            <Info size={12} />
            <span>Details</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// Toast notification component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in`}>
      {type === 'success' ? <Check size={16} /> : <AlertTriangle size={16} />}
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 hover:text-gray-200">×</button>
    </div>
  );
};

// Main component with enhanced features
const UpcomingReleases = ({ accentColor = "text-blue-500", accentBg = "bg-blue-500", secondaryBg = "bg-white", darkMode = false }) => {
  const [activeFilter, setActiveFilter] = useState('thisWeek');
  const [viewMode, setViewMode] = useState('grid');
  const [toast, setToast] = useState(null);
  const [reminders, setReminders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data for upcoming episodes
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
      link:"",
      description: "The Straw Hat Pirates face their greatest challenge yet as they confront the World Government.",
      genre: ["Action", "Adventure", "Fantasy"],
      duration: "24 min"
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
      link:"",
      description: "Class 1-A must band together for their most difficult assignment yet.",
      genre: ["Action", "Superhero"],
      duration: "24 min"
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
      link:"https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
      description: "Yuji Itadori and friends navigate the dangerous Culling Game.",
      genre: ["Action", "Supernatural"],
      duration: "24 min"
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
      link:"",
      description: "Denji returns as the infamous Chainsaw Man in a new battle against powerful devils.",
      genre: ["Action", "Horror", "Supernatural"],
      duration: "24 min"
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
      link:"https://www.crunchyroll.com/series/G63VGG2NY/bleach",
      description: "Ichigo and the Soul Society face their most formidable enemies yet.",
      genre: ["Action", "Supernatural"],
      duration: "24 min"
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
      link:"",
      description: "The epic conclusion to the Attack on Titan saga with an extended special episode.",
      genre: ["Action", "Drama", "Dark Fantasy"],
      duration: "45 min"
    }
  ];
  
  const filterOptions = [
    { id: 'all', label: 'All Episodes' },
    { id: 'thisWeek', label: 'This Week' },
    { id: 'nextWeek', label: 'Next Week' },
    { id: 'thisMonth', label: 'This Month' },
    { id: 'justReleased', label: 'Just Released' },
    { id: 'reminders', label: 'My Reminders' }
  ];

  const handleRemind = (episodeId, isReminded) => {
    if (isReminded) {
      setReminders([...reminders, episodeId]);
      setToast({
        message: "Reminder set! We'll notify you when this episode releases.",
        type: "success"
      });
    } else {
      setReminders(reminders.filter(id => id !== episodeId));
      setToast({
        message: "Reminder removed.",
        type: "success"
      });
    }
  };

  const closeToast = () => {
    setToast(null);
  };

  // Filter episodes based on active filter and search term
  const filteredEpisodes = upcomingEpisodes.filter(episode => {
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      episode.animeTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    if (!matchesSearch) return false;
    
    switch (activeFilter) {
      case 'thisWeek':
        return episode.releaseDate.includes('Apr 1') || episode.releaseDate.includes('Apr 2');
      case 'nextWeek':
        return episode.releaseDate.includes('Apr 2');
      case 'thisMonth':
        return episode.releaseDate.includes('Apr');
      case 'justReleased':
        return episode.isReleased;
      case 'reminders':
        return reminders.includes(episode.id);
      default:
        return true;
    }
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <h3 className="text-2xl font-extrabold uppercase tracking-tight relative flex items-center mb-4 md:mb-0">
          <Calendar className={accentColor} size={24} strokeWidth={2.5} />
          <span className="ml-2">
            <span className={accentColor}>Upcoming</span> Episodes
          </span>
          <span className={`block h-1 ${accentBg} w-12 mt-1 absolute -bottom-1 left-0`}></span>
        </h3>
        
        <div className="flex items-center gap-2">
          <div className={`relative border ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-md flex-1 md:w-48`}>
            <input
              type="text"
              placeholder="Search anime..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} py-1 px-3 rounded-md text-sm w-full`}
            />
          </div>
          
          <button 
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className={`p-1 rounded-md ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto pb-2 mb-4">
        <div className="flex gap-2 min-w-max">
          {filterOptions.map(option => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === option.id 
                  ? `${accentBg} text-white` 
                  : `${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`
              }`}
            >
              {option.id === 'reminders' && (
                <span className="flex items-center gap-1">
                  <Bookmark size={14} />
                  {option.label}
                  {reminders.length > 0 && (
                    <span className={`${accentBg} ml-1 text-white text-xs px-1.5 py-0.5 rounded-full`}>
                      {reminders.length}
                    </span>
                  )}
                </span>
              )}
              {option.id !== 'reminders' && option.label}
            </button>
          ))}
        </div>
      </div>
      
      {filteredEpisodes.length > 0 ? (
        <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
          {filteredEpisodes.map(episode => (
            <EpisodeCard 
              key={episode.id}
              episode={{...episode, reminded: reminders.includes(episode.id)}}
              accentColor={accentColor}
              accentBg={accentBg}
              darkMode={darkMode}
              secondaryBg={secondaryBg}
              onRemind={handleRemind}
            />
          ))}
        </div>
      ) : (
        <div className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-8 text-center`}>
          <div className="flex flex-col items-center gap-2">
            <AlertTriangle size={48} className="text-gray-400" />
            <h4 className="text-lg font-bold mt-2">No episodes found</h4>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              {activeFilter === 'reminders' 
                ? "You haven't set any reminders yet. Click 'Remind Me' on upcoming episodes to add them here."
                : "No episodes match your current filters. Try changing your search or filter criteria."}
            </p>
          </div>
        </div>
      )}
      
      {/* <div className="flex justify-center mt-8">
        <a href="#" className={`${accentBg} text-white rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2 transition-opacity duration-300 hover:opacity-90`}>
          <span>View Full Release Schedule</span>
          <ChevronRight size={16} />
        </a>
      </div> */}

      {toast && (
        <Toast 
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
};

export default UpcomingReleases;