'use client'
import { useState, useEffect } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, Star, Flame, Clock, Filter, BookOpen, Film, Calendar, Monitor, Search, Plus, X, Heart } from 'lucide-react';

export default function AnimeCalendar({ darkMode }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeView, setActiveView] = useState('month'); // 'month' or 'week'
  const [selectedDate, setSelectedDate] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false); 
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [showTooltip, setShowTooltip] = useState({ visible: false, day: null, position: { x: 0, y: 0 } });

  // All anime events data
  const [animeEvents, setAnimeEvents] = useState([
    { id: 1, date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 3), title: "My Hero Academia S7", type: "episode", isHot: true },
    { id: 2, date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 7), title: "One Piece Film Red", type: "movie" },
    { id: 3, date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10), title: "Chainsaw Man", type: "manga" },
    { id: 4, date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15), title: "Tokyo Anime Expo", type: "event" },
    { id: 5, date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18), title: "Jujutsu Kaisen", type: "episode", isHot: true },
    { id: 6, date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 22), title: "Spy × Family", type: "episode" },
    { id: 7, date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 25), title: "Attack on Titan Final Season", type: "bluray" },
    { id: 8, date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 5), title: "Demon Slayer S4", type: "episode", isHot: true },
    { id: 9, date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 20), title: "One Piece Chapter 1115", type: "manga" }
  ]);

  // Get current month data
  const getMonthData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { year, month, daysInMonth, startingDayOfWeek };
  };

  // Get current week data
  const getCurrentWeekDays = () => {
    const days = [];
    const current = new Date(currentDate);
    
    // Get the first day of the current week (Sunday)
    const first = current.getDate() - current.getDay();
    
    // Get all days in current week
    for (let i = 0; i < 7; i++) {
      const day = new Date(current.getFullYear(), current.getMonth(), first + i);
      days.push(day);
    }
    
    return days;
  };

  // Handle month navigation
  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Handle week navigation
  const previousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };


  // Get theme classes
  const getThemeClasses = () => {
    return darkMode 
      ? 'bg-gray-900 text-white' 
      : 'bg-purple-50 text-gray-900';
  };

  // Format date to display month and year
  const formatMonthYear = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // Format date range for week view
  const formatWeekRange = () => {
    const days = getCurrentWeekDays();
    const firstDay = days[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const lastDay = days[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return `${firstDay} - ${lastDay}`;
  };

  // Check if a date has events
  const getEventsForDate = (day, month = currentDate.getMonth(), year = currentDate.getFullYear()) => {
    const checkDate = new Date(year, month, day);
    let events = animeEvents.filter(event => 
      event.date.getDate() === checkDate.getDate() && 
      event.date.getMonth() === checkDate.getMonth() && 
      event.date.getFullYear() === checkDate.getFullYear()
    );
    
    // Apply type filters if any
    if (filteredTypes.length > 0) {
      events = events.filter(event => filteredTypes.includes(event.type));
    }
    
    // Apply search query if any
    if (searchQuery.trim() !== '') {
      events = events.filter(event => 
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return events;
  };

  // Get unique event types for filter
  const getUniqueEventTypes = () => {
    const types = animeEvents.map(event => event.type);
    return [...new Set(types)];
  };

  // Toggle event type filter
  const toggleTypeFilter = (type) => {
    if (filteredTypes.includes(type)) {
      setFilteredTypes(filteredTypes.filter(t => t !== type));
    } else {
      setFilteredTypes([...filteredTypes, type]);
    }
  };

  // Add new event
  const handleAddEvent = (newEvent) => {
    setAnimeEvents([...animeEvents, { 
      id: animeEvents.length + 1,
      ...newEvent
    }]);
    setShowEventModal(false);
  };

  // Toggle favorite status
  const toggleFavorite = (eventId) => {
    if (favorites.includes(eventId)) {
      setFavorites(favorites.filter(id => id !== eventId));
    } else {
      setFavorites([...favorites, eventId]);
    }
  };

  // Render calendar grid
  const renderCalendarDays = () => {
    const { daysInMonth, startingDayOfWeek, year, month } = getMonthData();
    const days = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Add weekday headers
    weekdays.forEach(day => {
      days.push(
        <div key={`header-${day}`} className="font-black uppercase text-center transform -skew-x-3 py-2">
          {day}
        </div>
      );
    });
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="border border-opacity-10 border-current"></div>);
    }
    
    // Add previous month days to fill the first row
    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevMonthLastDay = new Date(year, month, 0).getDate();
      const day = prevMonthLastDay - startingDayOfWeek + i + 1;
      const prevMonth = month - 1 < 0 ? 11 : month - 1;
      const prevYear = prevMonth === 11 ? year - 1 : year;
      const eventsForDay = getEventsForDate(day, prevMonth, prevYear);
      
      days.push(
        <div 
          key={`prev-month-${day}`} 
          className={`relative border ${darkMode ? 'border-gray-800' : 'border-purple-100'} p-1 min-h-24 opacity-50`}
          onMouseEnter={(e) => {
            if (eventsForDay.length > 0) {
              setShowTooltip({
                visible: true,
                day: { day, month: prevMonth, year: prevYear },
                position: { x: e.clientX, y: e.clientY }
              });
            }
          }}
          onMouseLeave={() => setShowTooltip({ visible: false, day: null, position: { x: 0, y: 0 } })}
        >
          <div className="text-sm text-gray-500">{day}</div>
          {eventsForDay.length > 0 && (
            <div className={`absolute bottom-1 right-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'} text-xs`}>
              <div className="flex items-center">
                <span>{eventsForDay.length}</span>
                <CalendarDays size={10} />
              </div>
            </div>
          )}
        </div>
      );
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const eventsForDay = getEventsForDate(day);
      const hasEvents = eventsForDay.length > 0;
      const hasHotEvent = eventsForDay.some(event => event.isHot);
      const isToday = day === new Date().getDate() && 
                      month === new Date().getMonth() && 
                      year === new Date().getFullYear();
      const isSelected = selectedDate && 
                         day === selectedDate.getDate() && 
                         month === selectedDate.getMonth() && 
                         year === selectedDate.getFullYear();
      
      days.push(
        <div 
          key={`day-${day}`} 
          className={`relative border-2 ${
            isSelected 
              ? (darkMode ? 'border-pink-500' : 'border-purple-500') 
              : (darkMode ? 'border-gray-700' : 'border-purple-200')
          } p-1 min-h-24 transition-transform ${
            hasEvents ? 'transform hover:-rotate-1 hover:scale-105 cursor-pointer' : ''
          } ${
            hasHotEvent 
              ? `${darkMode ? 'bg-pink-900 bg-opacity-20' : 'bg-purple-100'}`
              : ''
          } ${
            isToday 
              ? (darkMode ? 'ring-2 ring-yellow-500' : 'ring-2 ring-purple-500') 
              : ''
          }`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 95%)' }}
          onClick={() => {
            setSelectedDate(new Date(year, month, day));
          }}
          onMouseEnter={(e) => {
            if (eventsForDay.length > 0) {
              setShowTooltip({
                visible: true,
                day: { day, month, year },
                position: { x: e.clientX, y: e.clientY }
              });
            }
          }}
          onMouseLeave={() => setShowTooltip({ visible: false, day: null, position: { x: 0, y: 0 } })}
        >
          <div className={`flex justify-between items-start ${hasHotEvent ? 'font-bold' : ''}`}>
            <span className={`text-lg ${isToday ? 'bg-yellow-500 text-black px-2 rounded-full' : ''}`}>
              {day}
            </span>
            {hasHotEvent && (
              <div className="transform rotate-12 text-yellow-500">
                <Flame size={18} />
              </div>
            )}
          </div>
          
          {eventsForDay.slice(0, 2).map((event, index) => (
            <div 
              key={`event-${day}-${index}`} 
              className={`mt-1 p-1 text-xs font-bold 
                ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded
                ${favorites.includes(event.id) ? (darkMode ? 'border-l-2 border-pink-500' : 'border-l-2 border-purple-500') : ''}
              `}
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
            >
              <div className="flex items-center gap-1">
                <EventTypeIcon type={event.type} />
                <span className="truncate max-w-16">{event.title}</span>
              </div>
            </div>
          ))}
          
          {eventsForDay.length > 2 && (
            <div className={`mt-1 p-1 text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-purple-800'}`}>
              +{eventsForDay.length - 2} more
            </div>
          )}
        </div>
      );
    }
    
    // Add next month days to fill the last row
    const totalCells = days.length;
    const remainingCells = 42 - totalCells; // 6 rows of 7 days
    
    for (let i = 1; i <= remainingCells; i++) {
      const nextMonth = month + 1 > 11 ? 0 : month + 1;
      const nextYear = nextMonth === 0 ? year + 1 : year;
      const eventsForDay = getEventsForDate(i, nextMonth, nextYear);
      
      days.push(
        <div 
          key={`next-month-${i}`} 
          className={`relative border ${darkMode ? 'border-gray-800' : 'border-purple-100'} p-1 min-h-24 opacity-50`}
          onMouseEnter={(e) => {
            if (eventsForDay.length > 0) {
              setShowTooltip({
                visible: true,
                day: { day: i, month: nextMonth, year: nextYear },
                position: { x: e.clientX, y: e.clientY }
              });
            }
          }}
          onMouseLeave={() => setShowTooltip({ visible: false, day: null, position: { x: 0, y: 0 } })}
        >
          <div className="text-sm text-gray-500">{i}</div>
          {eventsForDay.length > 0 && (
            <div className={`absolute bottom-1 right-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'} text-xs`}>
              <div className="flex items-center">
                <span>{eventsForDay.length}</span>
                <CalendarDays size={10} />
              </div>
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };

  // Render week view
  const renderWeekView = () => {
    const weekDays = getCurrentWeekDays();
    const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return (
      <div className="grid grid-cols-1 gap-2">
        {weekDays.map((day, index) => {
          const isToday = day.getDate() === new Date().getDate() && 
                          day.getMonth() === new Date().getMonth() && 
                          day.getFullYear() === new Date().getFullYear();
          
          const eventsForDay = getEventsForDate(day.getDate(), day.getMonth(), day.getFullYear());
          const hasHotEvent = eventsForDay.some(event => event.isHot);
          
          return (
            <div 
              key={`week-day-${index}`} 
              className={`
                ${darkMode ? 'bg-gray-800' : 'bg-white'} 
                p-2 border-l-4 
                ${isToday 
                  ? (darkMode ? 'border-yellow-500' : 'border-purple-500') 
                  : (darkMode ? 'border-gray-700' : 'border-purple-200')
                }
                ${hasHotEvent ? (darkMode ? 'bg-pink-900 bg-opacity-10' : 'bg-purple-100') : ''}
              `}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className={`font-bold ${isToday ? (darkMode ? 'text-yellow-400' : 'text-purple-600') : ''}`}>
                  {weekdayNames[index]} - {day.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </h3>
                {hasHotEvent && <Flame className="text-yellow-500" size={16} />}
              </div>
              
              {eventsForDay.length > 0 ? (
                <div className="space-y-2">
                  {eventsForDay.map((event, idx) => (
                    <div 
                      key={`week-event-${index}-${idx}`} 
                      className={`p-2 ${darkMode ? 'bg-gray-900' : 'bg-purple-50'} rounded flex justify-between items-center
                        ${favorites.includes(event.id) ? (darkMode ? 'border-l-2 border-pink-500' : 'border-l-2 border-purple-500') : ''}
                      `}
                    >
                      <div className="flex items-center gap-2">
                        <EventTypeIcon type={event.type} />
                        <span className="font-medium">{event.title}</span>
                        {event.isHot && <Flame className="text-yellow-500" size={14} />}
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(event.id);
                        }}
                        className="hover:scale-110 transition-transform"
                      >
                        <Heart 
                          size={16} 
                          className={favorites.includes(event.id) 
                            ? (darkMode ? 'text-pink-500 fill-pink-500' : 'text-purple-500 fill-purple-500') 
                            : (darkMode ? 'text-gray-600' : 'text-gray-400')
                          } 
                        />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-2 italic opacity-60">
                  No releases scheduled
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Event type icon component
  const EventTypeIcon = ({ type }) => {
    switch(type) {
      case 'episode':
        return <div className="text-pink-500"><Monitor size={14} /></div>;
      case 'manga':
        return <div className="text-purple-500"><BookOpen size={14} /></div>;
      case 'movie':
        return <div className="text-yellow-500"><Film size={14} /></div>;
      case 'bluray':
        return <div className="text-blue-500"><Star size={14} /></div>;
      case 'event':
        return <div className="text-green-500"><Calendar size={14} /></div>;
      default:
        return <div className="text-gray-500"><CalendarDays size={14} /></div>;
    }
  };

  // Event Modal Component
  const EventModal = ({ onClose, onAdd }) => {
    const [newEvent, setNewEvent] = useState({
      title: '',
      type: 'episode',
      date: selectedDate || new Date(),
      isHot: false
    });
    
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setNewEvent({
        ...newEvent,
        [name]: type === 'checkbox' ? checked : value
      });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd(newEvent);
    };
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div 
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 max-w-md w-full transform -rotate-1`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Add New Release</h3>
            <button onClick={onClose} className="hover:scale-110 transition-transform">
              <X size={24} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleChange}
                className={`w-full p-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-purple-50 border-purple-200'} border rounded`}
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="block mb-1 font-medium">Type</label>
              <select
                name="type"
                value={newEvent.type}
                onChange={handleChange}
                className={`w-full p-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-purple-50 border-purple-200'} border rounded`}
              >
                <option value="episode">Episode</option>
                <option value="manga">Manga</option>
                <option value="movie">Movie</option>
                <option value="bluray">Blu-ray</option>
                <option value="event">Event</option>
              </select>
            </div>
            
            <div className="mb-3">
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={newEvent.date.toISOString().split('T')[0]}
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  setNewEvent({ ...newEvent, date });
                }}
                className={`w-full p-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-purple-50 border-purple-200'} border rounded`}
              />
            </div>
            
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="isHot"
                name="isHot"
                checked={newEvent.isHot}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="isHot" className="flex items-center gap-1">
                <span>Hot Release</span>
                <Flame className="text-yellow-500" size={16} />
              </label>
            </div>
            
            <button 
              type="submit" 
              className={`w-full py-2 font-bold uppercase ${darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-purple-600 hover:bg-purple-700'} text-white transform -rotate-1 hover:rotate-0 transition-transform`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
            >
              Add Release
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  // Event tooltip for calendar cells
  const EventTooltip = () => {
    if (!showTooltip.visible || !showTooltip.day) return null;
    
    const { day, month, year } = showTooltip.day;
    const events = getEventsForDate(day, month, year);
    
    return (
      <div 
        className={`absolute z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-2 shadow-lg rounded max-w-xs`}
        style={{ 
          top: showTooltip.position.y + 10, 
          left: showTooltip.position.x + 10,
          clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
        }}
      >
        <h4 className="font-bold mb-1">{new Date(year, month, day).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</h4>
        <div className="space-y-1">
          {events.map((event, idx) => (
            <div key={`tooltip-${idx}`} className="flex items-center gap-1 text-sm">
              <EventTypeIcon type={event.type} />
              <span>{event.title}</span>
              {event.isHot && <Flame className="text-yellow-500" size={12} />}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Get today's events
  const getTodaysEvents = () => {
    const today = new Date();
    let events = animeEvents.filter(event => 
      event.date.getDate() === today.getDate() && 
      event.date.getMonth() === today.getMonth() && 
      event.date.getFullYear() === today.getFullYear()
    );
    
    // Apply type filters if any
    if (filteredTypes.length > 0) {
      events = events.filter(event => filteredTypes.includes(event.type));
    }
    
    // Apply search query if any
    if (searchQuery.trim() !== '') {
      events = events.filter(event => 
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return events;
  };

  // Get favorite events
  const getFavoriteEvents = () => {
    return animeEvents.filter(event => favorites.includes(event.id));
  };

  const backgroundPattern = darkMode 
    ? "radial-gradient(circle, rgba(236, 72, 153, 0.03) 1px, transparent 1px)" 
    : "radial-gradient(circle, rgba(124, 58, 237, 0.05) 1px, transparent 1px)";

  return (
    <div 
      className={`${getThemeClasses()} p-6 min-h-screen`}
      style={{ 
        backgroundImage: backgroundPattern,
        backgroundSize: "20px 20px" 
      }}
    >
      <div className="max-w-8xl mx-auto">
        {/* Calendar Header */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-black uppercase tracking-tight transform -skew-x-6" 
              style={{ textShadow: darkMode ? '3px 3px 0px #EC4899' : '3px 3px 0px #8B5CF6' }}>
              ANIME/MANGA/EVENT CALENDAR
            </h1>
            
          </div>

          {/* Search and Filter */}
          <div className={`mt-4 p-3 ${darkMode ? 'bg-gray-800' : 'bg-white'} flex flex-col md:flex-row gap-4`}>
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search releases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-10 pr-4 py-2 w-full ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-purple-50 border-purple-200'} border rounded`}
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-bold flex items-center gap-1">
                <Filter size={16} /> FILTERS:
              </span>
              {getUniqueEventTypes().map(type => (
                <button
                  key={`filter-${type}`}
                  onClick={() => toggleTypeFilter(type)}
                  className={`px-3 py-1 text-xs font-bold uppercase rounded flex items-center gap-1
                    ${filteredTypes.includes(type) 
                      ? (darkMode ? 'bg-pink-600 text-white' : 'bg-purple-600 text-white') 
                      : (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-purple-100 text-purple-800')
                    }
                  `}>
                  <EventTypeIcon type={type} />
                  <span>{type}</span>
                </button>
              ))}
              {filteredTypes.length > 0 && (
                <button
                  onClick={() => setFilteredTypes([])}
                  className={`px-2 py-1 text-xs ${darkMode ? 'text-gray-400' : 'text-purple-600'} hover:underline`}
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Month/Week navigation */}
          <div className="flex justify-between items-center mt-6 mb-4">
            <button 
              onClick={activeView === 'month' ? previousMonth : previousWeek}
              className={`p-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} transform -rotate-2 hover:rotate-0 transition-transform border-2 ${darkMode ? 'border-gray-700' : 'border-purple-200'}`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)' }}
            >
              <ChevronLeft size={20} />
            </button>
            
            <h2 className="text-2xl font-bold uppercase tracking-tight">
              {activeView === 'month' ? formatMonthYear(currentDate) : formatWeekRange()}
            </h2>
            
            <button 
              onClick={activeView === 'month' ? nextMonth : nextWeek}
              className={`p-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} transform rotate-2 hover:rotate-0 transition-transform border-2 ${darkMode ? 'border-gray-700' : 'border-purple-200'}`}
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* View toggles and Add button */}
          <div className="flex flex-wrap gap-2 mb-4 justify-between">
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveView('month')}
                className={`px-4 py-1 font-bold uppercase transform -skew-x-12 transition-colors ${activeView === 'month' 
                  ? (darkMode ? 'bg-pink-600 text-white' : 'bg-purple-600 text-white') 
                  : (darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500')}`}
                style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
              >
                Month View
              </button>
              <button 
                onClick={() => setActiveView('week')}
                className={`px-4 py-1 font-bold uppercase transform -skew-x-12 transition-colors ${activeView === 'week' 
                  ? (darkMode ? 'bg-pink-600 text-white' : 'bg-purple-600 text-white') 
                  : (darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500')}`}
                style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
              >
                Week View
              </button>
            </div>
            
            <button 
              onClick={() => setShowEventModal(true)}
              className={`px-4 py-1 font-bold uppercase flex items-center gap-1 ${darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-purple-600 hover:bg-purple-700'} text-white transform rotate-1 hover:rotate-0 transition-transform`}
              style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
            >
              <Plus size={16} />
              Add Release
            </button>
          </div>
        </div>

        {/* Calendar Grid / Week View */}
        {activeView === 'month' ? (
          <div className="grid grid-cols-7 gap-1 mb-8">
            {renderCalendarDays()}
          </div>
        ) : (
          <div className="mb-8">
            {renderWeekView()}
          </div>
        )}

        {/* Today's Releases Section */}
        <div 
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 border-l-4 ${darkMode ? 'border-pink-600' : 'border-purple-600'} transform -rotate-1 mb-6`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 95%)' }}
        >
          <h3 className="text-xl font-black uppercase tracking-tight mb-2 flex items-center gap-2">
            <Flame className={darkMode ? 'text-pink-500' : 'text-purple-600'} />
            <span>TODAY'S RELEASES</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {getTodaysEvents().length > 0 ? getTodaysEvents().map((event, index) => (
              <div 
                key={`today-${index}`} 
                className={`p-3 ${darkMode ? 'bg-gray-900' : 'bg-purple-50'} transform -rotate-1 hover:rotate-0 transition-transform border-2 ${darkMode ? 'border-gray-700' : 'border-purple-200'} flex justify-between items-center`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
              >
                <div className="flex items-center gap-2">
                  <EventTypeIcon type={event.type} />
                  <span className="font-bold">{event.title}</span>
                  {event.isHot && <Flame className="text-yellow-500" size={16} />}
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(event.id);
                  }}
                  className="hover:scale-110 transition-transform"
                >
                  <Heart 
                    size={16} 
                    className={favorites.includes(event.id) 
                      ? (darkMode ? 'text-pink-500 fill-pink-500' : 'text-purple-500 fill-purple-500') 
                      : (darkMode ? 'text-gray-600' : 'text-gray-400')
                    } 
                  />
                </button>
              </div>
            )) : (
              <div className="col-span-full text-center py-4 italic opacity-75">
                No releases scheduled for today
              </div>
            )}
          </div>
        </div>

        {/* Favorites Section */}
        <div 
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 border-l-4 ${darkMode ? 'border-pink-600' : 'border-purple-600'} transform rotate-1 mb-6`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 95%)' }}
        >
          <h3 className="text-xl font-black uppercase tracking-tight mb-2 flex items-center gap-2">
            <Heart className={darkMode ? 'text-pink-500' : 'text-purple-600'} fill={darkMode ? '#EC4899' : '#8B5CF6'} />
            <span>MY FAVORITES</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {getFavoriteEvents().length > 0 ? getFavoriteEvents().map((event, index) => (
              <div 
                key={`favorite-${index}`} 
                className={`p-3 ${darkMode ? 'bg-gray-900' : 'bg-purple-50'} transform -rotate-1 hover:rotate-0 transition-transform border-2 ${darkMode ? 'border-gray-700' : 'border-purple-200'} flex justify-between items-center`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
              >
                <div className="flex items-center gap-2">
                  <EventTypeIcon type={event.type} />
                  <span className="font-bold">{event.title}</span>
                  {event.isHot && <Flame className="text-yellow-500" size={16} />}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs opacity-75">
                    {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(event.id);
                    }}
                    className="hover:scale-110 transition-transform"
                  >
                    <Heart size={16} className={darkMode ? 'text-pink-500 fill-pink-500' : 'text-purple-500 fill-purple-500'} />
                  </button>
                </div>
              </div>
            )) : (
              <div className="col-span-full text-center py-4 italic opacity-75">
                No favorites added yet
              </div>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className={`mt-6 p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} transform rotate-1`}>
          <h4 className="font-bold uppercase mb-2 text-sm tracking-tight">LEGEND:</h4>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1">
              <Monitor className="text-pink-500" size={16} />
              <span className="text-sm">Episode</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="text-purple-500" size={16} />
              <span className="text-sm">Manga</span>
            </div>
            <div className="flex items-center gap-1">
              <Film className="text-yellow-500" size={16} />
              <span className="text-sm">Movie</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="text-blue-500" size={16} />
              <span className="text-sm">Blu-ray</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="text-green-500" size={16} />
              <span className="text-sm">Event</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame className="text-yellow-500" size={16} />
              <span className="text-sm">Hot Release</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className={darkMode ? 'text-pink-500 fill-pink-500' : 'text-purple-500 fill-purple-500'} size={16} />
              <span className="text-sm">Favorite</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Event Modal */}
      {showEventModal && <EventModal onClose={() => setShowEventModal(false)} onAdd={handleAddEvent} />}
      
      {/* Event Tooltip */}
      {showTooltip.visible && <EventTooltip />}
    </div>
  );
}