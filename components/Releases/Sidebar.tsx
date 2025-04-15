import { MessageCircle,Flame as Fire, Star, TrendingUp, ThumbsUp, ChevronRight, Users } from 'lucide-react'
import React, { useState } from 'react'

const Sidebar = ({ 
  darkMode = false,
  popularNews = [],
  customTheme = null // For customization beyond dark/light mode
}) => {
  // Theme and styling variables
  const baseTheme = customTheme || {
    accentColor: darkMode ? 'text-pink-500' : 'text-violet-600',
    accentBg: darkMode ? 'bg-pink-500' : 'bg-violet-600',
    accentBorder: darkMode ? 'border-pink-500' : 'border-violet-500',
    secondaryBg: darkMode ? 'bg-gray-800' : 'bg-white',
    borderColor: darkMode ? 'border-gray-700' : 'border-gray-200',
    hoverBg: darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100',
    mutedText: darkMode ? 'text-gray-400' : 'text-gray-500',
    barBg: darkMode ? 'bg-gray-700' : 'bg-gray-200',
  };

  const { accentColor, accentBg, accentBorder, secondaryBg, borderColor, hoverBg, mutedText, barBg } = baseTheme;

  // Expanded state for collapsible sections
  const [expandedSection, setExpandedSection] = useState(null);
  
  // Poll data with animation delay
  const pollOptions = [
    { name: "My Hero Academia S8", votes: 42, animDelay: "0" },
    { name: "Spy x Family S3", votes: 38, animDelay: "100" },
    { name: "Jujutsu Kaisen S3", votes: 56, animDelay: "200" },
    { name: "Chainsaw Man S2", votes: 31, animDelay: "300" }
  ];
  
  // Get max votes for percentage calculation
  const maxVotes = Math.max(...pollOptions.map(option => option.votes));

  // Helper function for section toggle
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Common title component for consistency
  const SectionTitle = ({ icon, title, highlight }) => (
    <h4 className="text-lg font-extrabold uppercase mb-4 tracking-tight relative flex items-center gap-2">
      {icon}
      <span className={accentColor}>{highlight}</span> {title}
      <span className={`block h-1 ${accentBg} w-8 mt-1 absolute bottom-0 left-0`}></span>
    </h4>
  );

  return (
    <div className="w-full md:w-1/3 space-y-6">
      {/* Popular News Section */}
      <div className={`${secondaryBg} border-2 ${borderColor} clip-path-polygon p-4 transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-md`}>
        <SectionTitle 
          icon={<TrendingUp size={18} className={accentColor} />} 
          highlight="Popular" 
          title="News" 
        />
        
        <div className="space-y-4">
          {popularNews.map((news, index) => (
            <div 
              key={index} 
              className={`pb-3 ${index < popularNews.length - 1 ? `border-b ${borderColor}` : ''} ${hoverBg} p-2 transition-colors rounded group`}
            >
              <a href="#" className="font-bold group-hover:text-pink-500 transition-colors flex gap-2">
                <span className={`${accentColor} font-extrabold`}>{index + 1}.</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">{news.title}</span>
              </a>
              <p className={`text-xs ${mutedText} mt-1 ml-6`}>{news.excerpt}</p>
              <div className="flex justify-between items-center mt-2 text-xs text-gray-400 ml-6">
                <span className="flex items-center gap-1">
                  <Star size={10} className={accentColor} /> {news.date}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={12} /> {news.comments}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <button className={`w-full mt-4 border ${borderColor} py-2 font-medium text-sm rounded-lg ${hoverBg} flex items-center justify-center gap-1 group`}>
          <span>More News</span>
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      {/* Weekly Poll Section */}
      <div className={`${secondaryBg} border-2 ${accentBorder} clip-path-polygon-reverse p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-md`}>
        <SectionTitle 
          icon={<ThumbsUp size={18} className={accentColor} />} 
          highlight="Weekly" 
          title="Poll" 
        />
        
        <div className="mb-4">
          <p className="font-bold mb-3 flex items-center">
            <span className="inline-block w-2 h-2 rounded-full animate-pulse mr-2 bg-red-500"></span>
            Which Spring 2025 anime are you most excited for?
          </p>
          
          <div className="space-y-3 mt-4">
            {pollOptions.map((option, index) => (
              <div 
                key={index} 
                className={`${hoverBg} p-2 rounded transition-colors duration-300 cursor-pointer`}
              >
                <div className="flex justify-between mb-1 text-sm">
                  <span className="font-medium">{option.name}</span>
                  <span className={accentColor}>{option.votes} votes</span>
                </div>
                <div className={`w-full h-2 ${barBg} rounded-full overflow-hidden`}>
                  <div 
                    className={`h-full ${accentBg} transition-all duration-700 animate-expand`} 
                    style={{ 
                      width: `${(option.votes / maxVotes) * 100}%`,
                      animationDelay: `${option.animDelay}ms` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className={`w-full ${accentBg} text-white font-bold uppercase py-2 clip-path-polygon transform hover:scale-105 transition-all text-center shadow-lg`}>
          Vote Now
        </button>
      </div>
      
      {/* Hot Discussions Section */}
      <div className={`${secondaryBg} border-2 ${borderColor} clip-path-polygon p-4 transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-md`}>
        <SectionTitle 
          icon={<Fire size={18} className="text-red-500" />} 
          highlight="Hot" 
          title="Discussions" 
        />
        
        <div className="space-y-3">
          {[
            { topic: "Is Jujutsu Kaisen the new king of shonen?", replies: 128, hot: true, users: 34 },
            { topic: "Unpopular opinion: Chainsaw Man is overrated", replies: 95, users: 27 },
            { topic: "Will anime streaming get more expensive?", replies: 67, users: 19 }
          ].map((discussion, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-3 p-2 ${hoverBg} rounded-lg transition-colors cursor-pointer group`}
            >
              <div className={`${accentBg} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold transform group-hover:scale-110 transition-transform`}>
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-bold text-sm group-hover:translate-x-1 transition-transform">{discussion.topic}</p>
                  {discussion.hot && (
                    <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded animate-pulse flex items-center gap-1">
                      <Fire size={10} /> HOT
                    </span>
                  )}
                </div>
                <div className="flex gap-3 text-xs text-gray-400 mt-1">
                  <span className="flex items-center gap-1">
                    <MessageCircle size={10} /> {discussion.replies}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={10} /> {discussion.users}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className={`w-full mt-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} py-2 font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-1 group`}>
          <span>View All Discussions</span>
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* New Release Schedule Section */}
      <div className={`${secondaryBg} border-2 ${accentBorder} clip-path-polygon-reverse p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-md`}>
        <SectionTitle 
          icon={<Star size={18} className={accentColor} />} 
          highlight="Seasonal" 
          title="Schedule" 
        />
        
        <div className="space-y-1">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, index) => (
            <div 
              key={day}
              className={`cursor-pointer ${expandedSection === day ? `${accentBg} text-white` : `${hoverBg}`} rounded-lg transition-colors p-2`}
              onClick={() => toggleSection(day)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{day}</span>
                <ChevronRight size={16} className={`transition-transform ${expandedSection === day ? 'rotate-90' : ''}`} />
              </div>
              
              {expandedSection === day && (
                <div className="mt-2 space-y-2 animate-fadeIn">
                  {[
                    { time: "18:00", show: "One Piece", episode: "EP 1321" },
                    { time: "19:30", show: "Boruto Next Gen", episode: "EP 32" },
                    { time: "22:00", show: "Jujutsu Kaisen", episode: "EP 1" }
                  ].map((schedule, idx) => (
                    <div key={idx} className="flex justify-between text-sm border-b border-white border-opacity-30 pb-1">
                      <span>{schedule.time}</span>
                      <span className="font-bold">{schedule.show}</span>
                      <span>{schedule.episode}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Sidebar;