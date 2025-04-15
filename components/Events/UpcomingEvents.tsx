import React, { useState, useEffect } from 'react';
import { Filter, TrendingUp, Calendar, MapPin, Star, Users, ChevronRight } from 'lucide-react';
import Sidebar from './Sidebar';
interface Event {
    id: number;
    title:string;
    date:string;
    location:string;
    category:string;
    image:string;
    description:string;
    isTrending: boolean;
    popularity: number;
    attendees: number;
}
const AnimeEventsList = ({ darkMode = false }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [events, setEvents] = useState<Event[]>([]);
  const [hoveredEvent, setHoveredEvent] = useState<null | number>(null);

  // Sample event data - in a real app this would come from an API
  useEffect(() => {
    setEvents([
      {
        id: 1,
        title: "Anime Expo 2025",
        date: "July 2-5, 2025",
        location: "Los Angeles, CA",
        category: "Convention",
        image: "/api/placeholder/600/400",
        description: "The biggest anime convention in North America returns with exclusive panels, premieres, and special guests!",
        isTrending: true,
        popularity: 98,
        attendees: 12000
      },
      {
        id: 2,
        title: "One Piece Film: Red - Special Screening",
        date: "May 15, 2025",
        location: "New York, NY",
        category: "Screening",
        image: "/api/placeholder/600/400",
        description: "Special theatrical screening with exclusive behind-the-scenes content and collectible items.",
        isTrending: false,
        popularity: 87,
        attendees: 1500
      },
      {
        id: 3,
        title: "Manga Art Exhibition",
        date: "June 3-30, 2025",
        location: "San Francisco, CA",
        category: "Exhibition",
        image: "/api/placeholder/600/400",
        description: "Featuring original artwork from legendary mangaka including Naoki Urasawa and Junji Ito.",
        isTrending: true,
        popularity: 92,
        attendees: 8500
      },
      {
        id: 4,
        title: "Virtual Cosplay Competition",
        date: "April 25, 2025",
        location: "Online",
        category: "Contest",
        image: "/api/placeholder/600/400",
        description: "Show off your best cosplay creations and win amazing prizes from our sponsors!",
        isTrending: false,
        popularity: 85,
        attendees: 3000
      }
    ]);
  }, []);

  // Filter events based on category
  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className={`font-sans ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} p-6 rounded-lg`}>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content - Upcoming Events */}
        <div className="lg:w-2/3">
          <div className="flex justify-between items-center mb-8">
            <div className="relative inline-block">
              <h2 className={`text-2xl md:text-3xl font-black uppercase px-6 py-2 inline-block ${
                darkMode ? 'bg-gray-800 text-white border-2 border-pink-500' : 'bg-white text-violet-600 border-2 border-violet-500'
              }`}
              style={{
                transform: 'skew(-5deg)',
                
              }}>
                UPCOMING EVENTS
                <div className="absolute -top-1 -right-1 w-8 h-8 rotate-12 bg-yellow-400 rounded-full flex items-center justify-center z-10 text-black font-black text-xs animate-pulse">
                  NEW!
                </div>
              </h2>
              {/* Manga style corner accent */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500"></div>
            </div>
            
            <button 
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className={`flex items-center px-4 py-2 font-bold text-sm ${
                darkMode 
                  ? 'bg-gray-800 text-pink-400 border border-pink-500 hover:bg-gray-700' 
                  : 'bg-white text-violet-600 border border-violet-500 hover:bg-violet-50'
              } transition-all duration-300`}
              style={{
                transform: 'skew(-5deg)'
              }}
            >
              <Filter size={14} className="mr-2" />
              Filters {isFiltersOpen ? '▲' : '▼'}
            </button>
          </div>
          
          {/* Category tabs - new addition */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['all', 'Convention', 'Screening', 'Exhibition', 'Contest'].map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3 py-1 text-sm font-bold uppercase transition-all duration-300 ${
                  activeFilter === category
                    ? darkMode 
                      ? 'bg-pink-500 text-white scale-110' 
                      : 'bg-violet-600 text-white scale-110'
                    : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                  transform: activeFilter === category ? 'rotate(-2deg)' : 'rotate(0deg)'
                }}
              >
                {category === 'all' ? 'All Events' : category}
              </button>
            ))}
          </div>
          
          {/* Filters (expandable) */}
          {isFiltersOpen && (
            <div className={`mb-6 p-4 ${darkMode ? 'bg-gray-800 border-2 border-pink-500' : 'bg-white border-2 border-violet-500'}`}
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 99% 95%, 95% 100%, 0% 100%, 1% 5%)'
              }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Month</label>
                  <select className={`w-full px-3 py-2 ${
                    darkMode 
                      ? 'bg-gray-700 text-white border-gray-600' 
                      : 'bg-violet-50 border-gray-300'
                  } border`}>
                    <option>All</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Location</label>
                  <select className={`w-full px-3 py-2 ${
                    darkMode 
                      ? 'bg-gray-700 text-white border-gray-600' 
                      : 'bg-violet-50 border-gray-300'
                  } border`}>
                    <option>All</option>
                    <option>Online</option>
                    <option>Los Angeles</option>
                    <option>New York</option>
                    <option>San Francisco</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Type</label>
                  <select className={`w-full px-3 py-2 ${
                    darkMode 
                      ? 'bg-gray-700 text-white border-gray-600' 
                      : 'bg-violet-50 border-gray-300'
                  } border`}>
                    <option>All Types</option>
                    <option>Convention</option>
                    <option>Screening</option>
                    <option>Exhibition</option>
                    <option>Contest</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className={`w-full px-3 py-2 font-bold text-white transform transition-all duration-300 ${
                    darkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
                  }}>
                    Apply Filters!
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Events Grid with Enhanced Manga Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="relative overflow-hidden"
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
                style={{
                  transform: index % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)',
                  transition: 'all 0.3s ease',
                  transformOrigin: 'center'
                }}
              >
                {/* Manga panel border style */}
                <div className={`${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                } border-4 shadow-lg overflow-hidden transition-all duration-300 ${
                  hoveredEvent === event.id ? 'scale-105' : ''
                }`}>
                  
                  <div className="relative h-48 overflow-hidden border-b-2 border-dashed border-gray-500">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className={`w-full h-full object-cover filter contrast-110 transition-all duration-500 ${
                        hoveredEvent === event.id ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    
                    {/* Dynamic halftone pattern overlay */}
                    <div className="absolute inset-0 opacity-30 mix-blend-multiply"
                         style={{
                           backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
                           backgroundSize: '4px 4px'
                         }}></div>
                    
                    {/* Manga style category tag */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className={`w-24 py-1 text-center transform rotate-3 translate-y-2 translate-x-2 ${
                        darkMode ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white'
                      } border border-black`}>
                        <span className="text-xs font-black uppercase tracking-wider">
                          {event.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Trending badge explosion */}
                    {event.isTrending && (
                      <div className="absolute top-2 right-2">
                        <div className={`px-3 py-2 ${
                          darkMode ? 'bg-yellow-400 text-black' : 'bg-yellow-400 text-black'
                        } text-xs font-black flex items-center animate-pulse`}
                        style={{
                          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                          transform: 'rotate(12deg)'
                        }}>
                          <TrendingUp size={10} className="mr-1" /> HOT!
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    {/* Title with manga font */}
                    <h3 className="font-black text-lg mb-3" 
                        style={{ 
                          
                          letterSpacing: '0.5px'
                        }}>
                      {event.title}
                    </h3>
                    
                    {/* Event details with manga-style icons */}
                    <div className="flex flex-col space-y-2 mb-3">
                      <div className="flex items-center text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 ${
                          darkMode ? 'bg-pink-500 text-white' : 'bg-violet-500 text-white'
                        }`}>
                          <Calendar size={12} />
                        </div>
                        <span className="font-bold">{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 ${
                          darkMode ? 'bg-pink-500 text-white' : 'bg-violet-500 text-white'
                        }`}>
                          <MapPin size={12} />
                        </div>
                        <span className="font-bold">{event.location}</span>
                      </div>
                      
                      {/* Additional event metrics - new! */}
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <div className="flex items-center text-xs">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-1 ${
                            darkMode ? 'bg-pink-500 text-white' : 'bg-violet-500 text-white'
                          }`}>
                            <Star size={10} />
                          </div>
                          <span className="font-bold">Popularity: {event.popularity}%</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-1 ${
                            darkMode ? 'bg-pink-500 text-white' : 'bg-violet-500 text-white'
                          }`}>
                            <Users size={10} />
                          </div>
                          <span className="font-bold">{event.attendees.toLocaleString()} Fans</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description with manga styling */}
                    <div className={`mt-2 p-2 relative text-sm ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    } border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                    style={{
                      borderRadius: '6px',
                      transform: 'rotate(-0.5deg)'
                    }}>
                      {/* Speech bubble tail */}
                      <div className="absolute -bottom-2 left-4 w-4 h-4 
                        border-l border-b 
                        transform rotate-45
                        bg-inherit border-inherit"></div>
                      <p>{event.description}</p>
                    </div>
                    
                    {/* Action buttons with manga style */}
                    <div className="mt-6 flex justify-between items-center">
                      <button className={`px-4 py-2 text-sm font-black text-white transform transition-all duration-300 hover:-rotate-2 ${
                        darkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500'
                      }`}
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
                        boxShadow: darkMode ? '2px 2px 0px #EC4899' : '2px 2px 0px #2563EB'
                      }}>
                        DETAILS <ChevronRight size={14} className="inline ml-1" />
                      </button>
                      
                      <button className={`px-3 py-1 text-sm font-bold transition-all duration-300 hover:scale-110 ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white border border-pink-500' 
                          : 'bg-white hover:bg-gray-100 text-violet-600 border border-violet-500'
                      }`}
                      style={{
                        clipPath: 'polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)',
                      }}>
                        SAVE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination - new addition */}
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              {[1, 2, 3].map(page => (
                <button 
                  key={page}
                  className={`w-8 h-8 flex items-center justify-center font-bold ${
                    page === 1
                      ? darkMode 
                        ? 'bg-pink-500 text-white' 
                        : 'bg-violet-600 text-white'
                      : darkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <Sidebar darkMode={darkMode} />
      </div>
    </div>
  );
};

export default AnimeEventsList;