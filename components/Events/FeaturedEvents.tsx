import { Star, TrendingUp, Calendar, MapPin } from "lucide-react";

const FeaturedEventsSection = ({ darkMode, featuredEvents }) => {
  return (
    <section className="mb-16">
      {/* Enhanced title with action lines and more authentic manga styling */}
      <div className="relative inline-block mb-8">
        <h2 
          className={`text-2xl md:text-3xl font-black uppercase px-8 py-3 inline-block ${
            darkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white'
          }`}
          style={{
            clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)',
            textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
            fontFamily: "'Bangers', cursive"
          }}
        >
          Featured Events!
        </h2>
        {/* Starburst effect behind star */}
        <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${darkMode ? 'bg-yellow-400' : 'bg-yellow-400'} 
          flex items-center justify-center transform rotate-12 animate-pulse`}
          style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }}
        >
          <Star size={14} className="text-black absolute" />
        </div>
        
        {/* Action lines radiating from title */}
        <div className="absolute -left-4 top-1/2 w-3 h-px bg-yellow-400 transform -rotate-45"></div>
        <div className="absolute -left-6 top-1/2 w-5 h-px bg-yellow-400 transform -rotate-45"></div>
        <div className="absolute -left-8 top-1/2 w-7 h-px bg-yellow-400 transform -rotate-45"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredEvents.map(event => (
          <div 
            key={event.id} 
            className={`relative overflow-hidden transition-all duration-300 transform hover:-rotate-1 hover:scale-102 group`}
          >
            {/* Enhanced manga panel style border with halftone pattern */}
            <div className={`absolute inset-0 ${darkMode ? 'bg-gray-800 border-white' : 'bg-white border-black'} border-4 shadow-xl`}></div>
            
            <div className="relative">
              {/* Improved manga page corner fold with shadow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent via-transparent to-gray-300 transform rotate-0 z-10"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-b-2 border-r-0 border-l-2 border-t-0 border-gray-400 transform origin-top-right rotate-45 z-10"></div>
              
              <div className="relative h-72 overflow-hidden border-b-4 border-black">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Enhanced manga-style overlay patterns */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent mix-blend-multiply"></div>
                
                {/* Improved diagonal speed lines overlay */}
                <div className="absolute inset-0 opacity-20" 
                     style={{
                       background: 'repeating-linear-gradient(70deg, transparent, transparent 3px, white 3px, white 5px)'
                     }}></div>
                
                {/* Horizontal speed lines that appear on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                     style={{
                       background: 'repeating-linear-gradient(180deg, transparent, transparent 8px, white 8px, white 12px)'
                     }}></div>
                
                {/* Enhanced category tag like manga sound effect */}
                <div className="absolute top-4 left-4 transform -rotate-6">
                  <div className={`py-2 px-4 ${
                    darkMode ? 'bg-yellow-400 text-black' : 'bg-yellow-400 text-black'
                  } text-xs font-black uppercase tracking-widest`}
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
                    textShadow: '1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white',
                    fontFamily: "'Bangers', cursive"
                  }}>
                    {event.category}
                  </div>
                </div>
                
                {/* Enhanced trending explosion burst */}
                {event.isTrending && (
                  <div className="absolute top-4 right-12">
                    <div className={`px-4 py-2 ${
                      darkMode ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white'
                    } text-xs font-black flex items-center animate-pulse`}
                    style={{
                      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      transform: 'scale(1.2) rotate(15deg)',
                      textShadow: '1px 1px 0px rgba(0,0,0,0.5)',
                      fontFamily: "'Bangers', cursive"
                    }}>
                      <TrendingUp size={12} className="mr-1" /> HOT!
                    </div>
                  </div>
                )}
                
                {/* Enhanced title in comic style speech bubble */}
                <div className="absolute -bottom-2 left-4 right-16">
                  <div className={`relative ${
                    darkMode ? 'bg-white text-black' : 'bg-white text-black'
                  } p-3 rounded-lg border-2 border-black shadow-md`}
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 98% 75%, 85% 100%, 75% 75%, 0% 75%)'
                  }}>
                    <h3 className="font-black text-lg md:text-xl" style={{ fontFamily: "'Bangers', cursive" }}>
                      {event.title}
                    </h3>
                    {/* Action lines radiating from bubble */}
                    <div className="absolute -left-2 bottom-1 w-2 h-px bg-black"></div>
                    <div className="absolute -left-4 bottom-1 w-3 h-px bg-black"></div>
                  </div>
                </div>
              </div>
              
              <div className="relative p-6">
                {/* Event details with enhanced manga styling */}
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between">
                    <div className="flex items-center text-sm">
                      <div className={`p-1 rounded-full ${darkMode ? 'bg-pink-400' : 'bg-violet-600'}`}>
                        <Calendar size={16} className="text-white" />
                      </div>
                      <span className="font-bold ml-2">{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className={`p-1 rounded-full ${darkMode ? 'bg-pink-400' : 'bg-violet-600'}`}>
                        <MapPin size={16} className="text-white" />
                      </div>
                      <span className="font-bold ml-2">{event.location}</span>
                    </div>
                  </div>
                  
                  {/* Enhanced description in manga thought bubble */}
                  <div className={`mt-3 p-4 relative ${
                    darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'
                  } border-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                  style={{
                    borderRadius: '15px',
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)'
                  }}>
                    <p className="text-sm">{event.description}</p>
                    
                    {/* Multiple bubble pointers for thought bubble effect */}
                    <div className="absolute -top-2 left-6 w-4 h-4 transform rotate-45 
                      border-l-2 border-t-2 border-gray-600 bg-inherit"></div>
                    <div className="absolute -top-4 left-2 w-2 h-2 rounded-full 
                      bg-gray-300 border border-gray-600"></div>
                    <div className="absolute -top-6 left-1 w-1 h-1 rounded-full 
                      bg-gray-300 border border-gray-600"></div>
                  </div>
                  
                  {/* Enhanced action button with manga style */}
                  <div className="mt-4 text-center">
                    <button className={`px-8 py-3 font-black text-white transform transition-all duration-300 
                      hover:scale-105 hover:-rotate-2 ${
                      darkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500'
                    }`}
                    style={{
                      clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
                      boxShadow: darkMode ? '4px 4px 0px #EC4899' : '4px 4px 0px #2563EB',
                      fontFamily: "'Bangers', cursive"
                    }}>
                      LEARN MORE →
                      
                      {/* Action lines behind button (only visible on hover) */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                        <div className="absolute -left-4 top-1/2 w-3 h-px bg-yellow-400"></div>
                        <div className="absolute -left-8 top-1/2 w-5 h-px bg-yellow-400"></div>
                        <div className="absolute -right-4 top-1/2 w-3 h-px bg-yellow-400"></div>
                        <div className="absolute -right-8 top-1/2 w-5 h-px bg-yellow-400"></div>
                      </div>
                    </button>
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