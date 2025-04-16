import React, { useState, useEffect } from 'react';
import { Filter, TrendingUp, Calendar, MapPin, Star, Users, ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import Sidebar from './Sidebar';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
  description: string;
  isTrending: boolean;
  popularity: number;
  attendees: number;
}

const AnimeEventsList = ({ darkMode = false }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [events, setEvents] = useState<Event[]>([]);
  const [hoveredEvent, setHoveredEvent] = useState<null | number>(null);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(1);

  // Sample event data - in a real app this would come from an API
  useEffect(() => {
    const sampleEvents = [
      {
        id: 1,
        title: "Anime Expo 2025",
        date: "July 2-5, 2025",
        location: "Los Angeles, CA",
        category: "Convention",
        image: "https://www.anime-expo.org/wp-content/uploads/2024/01/AX_BG_EXTERIOR_FINAL_v3-WEB-2-1-1024x596.png",
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
        image: "https://cdn.oneesports.gg/cdn-data/2022/08/Anime_OnePiecefilmRed_Uta_Wallpaper.jpg",
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
        image: "https://cdn.myanimelist.net/s/common/uploaded_files/1482116319-6ba67e16909c281596db97c3db20dbf2.jpeg",
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
        image: "https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2023/03/29103414/IZEA-2720-Cosplay-Influencers-Update-1920x1080-v2-1.jpg",
        description: "Show off your best cosplay creations and win amazing prizes from our sponsors!",
        isTrending: false,
        popularity: 85,
        attendees: 3000
      },
      {
        id: 5,
        title: "Attack on Titan Series Finale Event",
        date: "May 20, 2025",
        location: "Chicago, IL",
        category: "Screening",
        image: "https://www.hindustantimes.com/ht-img/img/2023/04/10/1600x900/175229-attack-on-titan-webp-large_1681099848276_1681099859239_1681099859239.jpg",
        description: "Join fans for a special screening of the Attack on Titan series finale with exclusive commentary and merchandise.",
        isTrending: true,
        popularity: 95,
        attendees: 5000
      },
      {
        id: 6,
        title: "Miyazaki Film Festival",
        date: "June 10-15, 2025",
        location: "Seattle, WA",
        category: "Festival",
        image: "https://variety.com/wp-content/uploads/2023/08/ghibli-image.jpg?w=1000&h=562&crop=1",
        description: "A celebration of the works of Hayao Miyazaki and Studio Ghibli with screenings, art exhibits, and panel discussions.",
        isTrending: false,
        popularity: 90,
        attendees: 7500
      },
      {
        id: 7,
        title: "Anime Music Live Concert",
        date: "July 15, 2025",
        location: "Austin, TX",
        category: "Concert",
        image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/music-anime.jpg",
        description: "Live performances of popular anime theme songs and soundtracks by a full orchestra and special guest vocalists.",
        isTrending: true,
        popularity: 88,
        attendees: 4200
      },
      {
        id: 8,
        title: "Manga Drawing Workshop",
        date: "August 5, 2025",
        location: "Boston, MA",
        category: "Workshop",
        image: "https://i.ytimg.com/vi/rEsH2MDPx4g/maxresdefault.jpg",
        description: "Learn manga drawing techniques from professional artists in this hands-on workshop for all skill levels.",
        isTrending: false,
        popularity: 82,
        attendees: 200
      },
      {
        id: 9,
        title: "Anime Voice Actor Panel",
        date: "September 12, 2025",
        location: "Denver, CO",
        category: "Panel",
        image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/08/collage-maker-31-aug-2023-12-44-pm-9469.jpg",
        description: "Meet the voices behind your favorite anime characters in this interactive Q&A panel session.",
        isTrending: false,
        popularity: 86,
        attendees: 800
      },
      {
        id: 10,
        title: "Mecha Model Competition",
        date: "October 3, 2025",
        location: "Atlanta, GA",
        category: "Contest",
        image: "https://creepingforscalemodels.com/wp-content/uploads/2024/02/424643911_704664811652551_3855539616177884716_n.jpg?w=10240",
        description: "Showcase your best Gundam and other mecha model builds and compete for prizes from top model manufacturers.",
        isTrending: false,
        popularity: 84,
        attendees: 350
      },
    ];
    
    setEvents(sampleEvents);
  }, []);

  // Filter events based on category
  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category.toLowerCase() === activeFilter.toLowerCase());

  // Calculate total pages whenever filtered events or events per page changes
  useEffect(() => {
    setTotalPages(Math.ceil(filteredEvents.length / eventsPerPage));
    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [filteredEvents, eventsPerPage]);

  // Get current events for pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Generate page numbers array
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Maximum number of page buttons to show
    
    if (totalPages <= maxVisiblePages) {
      // If we have fewer pages than our max, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Otherwise, show a window of pages around the current page
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let endPage = startPage + maxVisiblePages - 1;
      
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
      
      // Always show first page
      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) pageNumbers.push('...');
      }
      
      // Add the window of pages
      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1 && i !== totalPages) { // Skip if already added as first/last
          pageNumbers.push(i);
        }
      }
      
      // Always show last page
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

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
          
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['all', 'Convention', 'Screening', 'Exhibition', 'Contest', 'Festival', 'Concert', 'Workshop', 'Panel'].map(category => (
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

                {/* Events Per Page dropdown */}
                <div>
                  <label className="block text-sm font-bold mb-2">Per Page</label>
                  <select 
                    className={`w-full px-3 py-2 ${
                      darkMode 
                        ? 'bg-gray-700 text-white border-gray-600' 
                        : 'bg-violet-50 border-gray-300'
                    } border`}
                    value={eventsPerPage}
                    onChange={(e) => setEventsPerPage(Number(e.target.value))}
                  >
                    <option value={2}>2</option>
                    <option value={4}>4</option>
                    <option value={6}>6</option>
                    <option value={8}>8</option>
                  </select>
                </div>
                
                <div className="flex items-end col-span-2 md:col-span-4">
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
          
          {/* Page information and status */}
          <div className={`mb-4 px-4 py-2 text-sm font-bold ${
            darkMode ? 'bg-gray-800 text-pink-400' : 'bg-white text-violet-600'
          } border ${
            darkMode ? 'border-pink-500' : 'border-violet-500'
          } inline-flex items-center`}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
          }}>
            <ChevronDown size={16} className="mr-2" /> 
            Showing {indexOfFirstEvent + 1}-{Math.min(indexOfLastEvent, filteredEvents.length)} of {filteredEvents.length} events 
            {activeFilter !== 'all' && ` in ${activeFilter}`}
          </div>
          
          {/* Events Grid with Enhanced Manga Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentEvents.map((event, index) => (
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
                      
                      {/* Additional event metrics */}
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
          
          {/* Enhanced Pagination with dynamic page numbers */}
          {totalPages > 0 && (
            <div className="mt-8">
              <div className="flex flex-col items-center space-y-4">
                {/* Current page indicator in anime style */}
                <div className={`px-4 py-2 ${
                  darkMode ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white'
                } font-bold animate-pulse`}
                style={{
                  clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
                }}>
                  PAGE {currentPage} OF {totalPages}
                </div>
                
                {/* Page navigation */}
                <div className="flex flex-wrap justify-center items-center gap-2">
                  {/* Previous page button */}
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 flex items-center justify-center font-bold transition-all duration-300 ${
                      currentPage === 1
                        ? darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
                        : darkMode ? 'bg-gray-800 text-pink-400 hover:bg-pink-500 hover:text-white' : 'bg-white text-violet-600 hover:bg-violet-600 hover:text-white'
                    }`}
                    style={{
                      clipPath: 'polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%)',
                    }}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  
                  {/* Page numbers */}
                  {getPageNumbers().map((pageNumber, index) => (
                    <button
                      key={index}
                      onClick={() => typeof pageNumber === 'number' ? paginate(pageNumber) : null}
                      className={`${
                        typeof pageNumber !== 'number'
                          ? 'w-8 h-8 flex items-center justify-center'
                          : `w-8 h-8 flex items-center justify-center font-bold transition-all duration-300 ${
                              pageNumber === currentPage
                                ? darkMode ? 'bg-pink-500 text-white scale-110' : 'bg-violet-600 text-white scale-110'
                                : darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`
                      } ${typeof pageNumber !== 'number' ? '' : 'transform hover:rotate-3'}`}
                      style={
                        typeof pageNumber === 'number'
                          ? {
                              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                            }
                          : {}
                      }
                      disabled={typeof pageNumber !== 'number'}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  
                  {/* Next page button */}
                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 flex items-center justify-center font-bold transition-all duration-300 ${
                      currentPage === totalPages
                        ? darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
                        : darkMode ? 'bg-gray-800 text-pink-400 hover:bg-pink-500 hover:text-white' : 'bg-white text-violet-600 hover:bg-violet-600 hover:text-white'
                    }`}
                    style={{
                      clipPath: 'polygon(0% 0%, 60% 0%, 100% 100%, 40% 100%)',
                    }}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
                
                {/* Jump to specific page control */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold">GO TO:</span>
                  <select
                    value={currentPage}
                    onChange={(e) => paginate(Number(e.target.value))}
                    className={`w-16 px-2 py-1 ${
                      darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-300'
                    } border`}
                    style={{
                      clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
                    }}
                  >
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
          
          {/* No results message */}
          {filteredEvents.length === 0 && (
            <div className={`p-8 text-center ${
              darkMode ? 'bg-gray-800 border-2 border-pink-500' : 'bg-white border-2 border-violet-500'
            } rounded-lg`}>
              <div className="text-xl font-bold mb-2">No events found!</div>
              <p>Try changing your filters to see more results.</p>
              <button 
                onClick={() => setActiveFilter('all')}
                className={`mt-4 px-6 py-2 font-bold ${
                  darkMode ? 'bg-pink-500 text-white hover:bg-pink-400' : 'bg-violet-600 text-white hover:bg-violet-500'
                }`}
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                }}
              >
                CLEAR FILTERS
              </button>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <Sidebar darkMode={darkMode} />
      </div>
    </div>
  );
};

export default AnimeEventsList;