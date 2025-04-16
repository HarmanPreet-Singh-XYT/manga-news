import React from "react";
import { Star, TrendingUp, Calendar, MapPin, Sparkles, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const FeaturedEventsSection = ({ darkMode, featuredEvents }) => {
  const router = useRouter();
  return (
    <section className="mb-16">
      {/* Manga-style title with enhanced visual effects */}
      <div className="relative inline-block mb-10">
        <div className="absolute inset-0 bg-yellow-300 transform rotate-2 translate-x-1 translate-y-1"></div>
        <h2 
          className={`text-3xl md:text-4xl font-black uppercase px-10 py-4 inline-block relative z-10 ${
            darkMode ? 'bg-pink-600 text-white' : 'bg-violet-700 text-white'
          }`}
          style={{
            clipPath: 'polygon(0% 0%, 97% 0%, 100% 50%, 97% 100%, 0% 100%, 3% 50%)',
            textShadow: '3px 3px 0px rgba(0,0,0,0.4)',
            fontFamily: "'Bangers', cursive"
          }}
        >
          Featured Events!
          
          {/* Authentic manga speed lines inside text area */}
          <div className="absolute inset-0 opacity-20" 
               style={{
                 background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)'
               }}>
          </div>
        </h2>
        
        {/* Enhanced starburst effect */}
        <div className="absolute -top-3 -right-3 w-12 h-12 flex items-center justify-center">
          <div className={`absolute inset-0 ${darkMode ? 'bg-yellow-400' : 'bg-yellow-400'} 
            animate-spin-slow`}
            style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}>
          </div>
          <Star size={16} className="text-black absolute z-10" />
        </div>
        
        {/* Multi-direction action lines */}
        <div className="absolute -left-4 top-1/4 w-4 h-1 bg-yellow-400 transform -rotate-45"></div>
        <div className="absolute -left-8 top-1/2 w-6 h-1 bg-yellow-400 transform rotate-0"></div>
        <div className="absolute -left-5 bottom-1/4 w-4 h-1 bg-yellow-400 transform rotate-45"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {featuredEvents.map(event => (
          <div 
            key={event.id} 
            className="relative overflow-hidden transition-all duration-500 transform group hover:scale-102"
          >
            {/* Custom manga panel border with halftone effect */}
            <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900 border-gray-100' : 'bg-white border-black'} border-4 shadow-2xl`}
                 style={{ boxShadow: darkMode ? '8px 8px 0 rgba(236, 72, 153, 0.5)' : '8px 8px 0 rgba(109, 40, 217, 0.5)' }}>
            </div>
            
            <div className="relative">
              {/* Dramatic manga page corner fold */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent via-transparent to-gray-300 z-10"></div>
              <div className="absolute top-0 right-0 w-14 h-14 border-b-2 border-r-0 border-l-2 border-t-0 border-gray-500 transform origin-top-right rotate-45 z-10"></div>
              
              <div className="relative h-80 overflow-hidden border-b-4 border-black">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dramatic image overlays and effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Dynamic speed lines overlay that changes on hover */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300" 
                     style={{
                       background: 'repeating-linear-gradient(70deg, transparent, transparent 2px, white 2px, white 4px)'
                     }}>
                </div>
                
                {/* Horizontal impact lines that appear on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300" 
                     style={{
                       background: 'repeating-linear-gradient(180deg, transparent, transparent 6px, white 6px, white 9px)'
                     }}>
                </div>
                
                {/* Enhanced explosive category tag */}
                <div className="absolute top-4 left-4 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <div className={`py-2 px-6 ${
                    darkMode ? 'bg-yellow-400 text-black' : 'bg-yellow-400 text-black'
                  } text-sm font-black uppercase tracking-wider shadow-lg`}
                  style={{
                    clipPath: 'polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)',
                    textShadow: '1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white',
                    fontFamily: "'Bangers', cursive"
                  }}>
                    {event.category}
                    
                    {/* Inner highlight effect */}
                    <div className="absolute inset-0 opacity-30" 
                      style={{
                        background: 'linear-gradient(135deg, white 0%, transparent 50%, transparent 100%)'
                      }}>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced trending explosion burst with animation */}
                {event.isTrending && (
                  <div className="absolute top-3 right-10 group-hover:scale-110 transition-transform duration-300">
                    <div className={`p-4 ${
                      darkMode ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white'
                    } font-black flex items-center justify-center`}
                    style={{
                      clipPath: 'polygon(50% 0%, 65% 25%, 100% 25%, 75% 50%, 90% 100%, 50% 75%, 10% 100%, 25% 50%, 0% 25%, 35% 25%)',
                      transform: 'scale(1.2) rotate(15deg)',
                      textShadow: '1px 1px 0px rgba(0,0,0,0.5)',
                      fontFamily: "'Bangers', cursive",
                      width: '64px',
                      height: '64px'
                    }}>
                      <div className="flex flex-col items-center">
                        <TrendingUp size={14} className="mb-1" />
                        <span className="text-xs leading-none">HOT!</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Enhanced title in manga speech bubble */}
                <div className="absolute -bottom-3 left-6 right-20 transform group-hover:translate-y-1 transition-transform duration-300">
                  <div className={`relative ${
                    darkMode ? 'bg-white text-black' : 'bg-white text-black'
                  } p-4 border-3 border-black shadow-xl`}
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 98% 70%, 85% 100%, 70% 70%, 0% 70%)',
                    boxShadow: '4px 4px 0 rgba(0,0,0,0.3)'
                  }}>
                    <h3 className="font-black text-xl md:text-2xl leading-tight" style={{ fontFamily: "'Bangers', cursive" }}>
                      {event.title}
                    </h3>
                    
                    {/* Action lines radiating from bubble */}
                    <div className="absolute -left-3 bottom-2 w-3 h-1 bg-black"></div>
                    <div className="absolute -left-6 bottom-2 w-4 h-1 bg-black"></div>
                  </div>
                </div>
              </div>
              
              <div className="relative p-6 pt-10">
                {/* Event details with enhanced manga styling */}
                <div className="flex flex-col space-y-5">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${darkMode ? 'bg-pink-500' : 'bg-violet-600'} shadow-md`}>
                        <Calendar size={16} className="text-white" />
                      </div>
                      <span className="font-bold ml-2 text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${darkMode ? 'bg-pink-500' : 'bg-violet-600'} shadow-md`}>
                        <MapPin size={16} className="text-white" />
                      </div>
                      <span className="font-bold ml-2 text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  {/* New detail row */}
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${darkMode ? 'bg-pink-500' : 'bg-violet-600'} shadow-md`}>
                        <Clock size={16} className="text-white" />
                      </div>
                      <span className="font-bold ml-2 text-sm">{event.time || "19:00"}</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${darkMode ? 'bg-pink-500' : 'bg-violet-600'} shadow-md`}>
                        <Sparkles size={16} className="text-white" />
                      </div>
                      <span className="font-bold ml-2 text-sm">{event.attendees || "200+"} Attending</span>
                    </div>
                  </div>
                  
                  {/* Enhanced manga thought bubble for description */}
                  <div className={`mt-4 p-5 relative ${
                    darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
                  } border-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                  style={{
                    borderRadius: '18px',
                    boxShadow: 'inset 0 0 12px rgba(0,0,0,0.15)'
                  }}>
                    <p className="text-sm leading-relaxed">{event.description}</p>
                    
                    {/* Improved bubble pointers for authentic manga thought bubble */}
                    <div className="absolute -top-2 left-8 w-4 h-4 transform rotate-45 
                      border-l-2 border-t-2 border-gray-600 bg-inherit"></div>
                    <div className="absolute -top-5 left-3 w-3 h-3 rounded-full 
                      bg-gray-300 border border-gray-600"></div>
                    <div className="absolute -top-8 left-1 w-2 h-2 rounded-full 
                      bg-gray-300 border border-gray-600"></div>
                    
                    {/* Halftone pattern inside bubble */}
                    <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                      <div className="w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
                        backgroundSize: '8px 8px'
                      }}></div>
                    </div>
                  </div>
                  
                  {/* Ultra-manga "POW" style action button */}
                  <div className="mt-6 text-center">
                    <div className="relative inline-block group">
                      {/* Button shadow position shifter on hover */}
                      <div className={`absolute inset-0 ${
                        darkMode ? 'bg-pink-700' : 'bg-violet-700'
                      } transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200`}
                      style={{
                        clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)'
                      }}></div>
                        <button className={`relative z-10 px-8 py-3 font-black text-lg text-white transform transition-all duration-300 
                          ${darkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500'}`}
                        style={{
                          clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)',
                          fontFamily: "'Bangers', cursive"
                        }}>
                          <span onClick={()=> router.push(`/events/details`)} className="relative z-10 tracking-wider">LEARN MORE → </span>
                          
                          {/* Action lines behind button (visible on hover) */}
                          <div className="absolute -left-3 top-1/2 w-3 h-1 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute -right-3 top-1/2 w-3 h-1 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Speed lines that appear on hover */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                            style={{
                              background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)'
                            }}>
                          </div>
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEventsSection;