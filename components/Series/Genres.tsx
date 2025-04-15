import { useState } from 'react';
import { ChevronRight, Star, TrendingUp, Eye } from 'lucide-react';

export default function PopularGenresSection({ isDarkMode }) {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-8 relative">
        <div className={`absolute left-0 w-1 h-12 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-600'}`}></div>
        <h2 className={`text-3xl font-black uppercase transform -skew-x-6 pl-4 ${
          isDarkMode 
            ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' 
            : 'text-gray-800 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'
        }`}>
          POPULAR <span className={isDarkMode ? 'text-pink-500' : 'text-violet-600'}>GENRES</span>
        </h2>
        
        <div className="flex items-center space-x-2">
          <TrendingUp size={20} className={isDarkMode ? 'text-pink-500' : 'text-violet-600'} />
          <span className="text-sm font-medium">Trending Now</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { name: 'Action', count: 2341, icon: '👊' },
          { name: 'Romance', count: 1872, icon: '💕' },
          { name: 'Fantasy', count: 2153, icon: '✨' },
          { name: 'Comedy', count: 1928, icon: '😂' },
          { name: 'Horror', count: 982, icon: '👻' },
          { name: 'Sci-Fi', count: 1245, icon: '🚀' },
          { name: 'Sports', count: 753, icon: '⚽' },
          { name: 'Slice of Life', count: 1632, icon: '🌈' }
        ].map((genre, index) => (
          <GenreCard key={genre.name} genre={genre} index={index} isDarkMode={isDarkMode} />
        ))}
      </div>
    </section>
  );
}

function GenreCard({ genre, index, isDarkMode }) {
  const darkBackgrounds = [
    "bg-gradient-to-br from-red-800 to-orange-900", // Action
    "bg-gradient-to-br from-pink-800 to-purple-900", // Romance
    "bg-gradient-to-br from-blue-800 to-indigo-900", // Fantasy
    "bg-gradient-to-br from-yellow-800 to-green-900", // Comedy
    "bg-gradient-to-br from-gray-800 to-red-900", // Horror
    "bg-gradient-to-br from-cyan-800 to-blue-900", // Sci-Fi
    "bg-gradient-to-br from-green-800 to-teal-900", // Sports
    "bg-gradient-to-br from-purple-800 to-pink-900", // Slice of Life
  ];
  
  const lightBackgrounds = [
    "bg-gradient-to-br from-red-100 to-orange-200 border-red-500", // Action
    "bg-gradient-to-br from-pink-100 to-purple-200 border-pink-500", // Romance
    "bg-gradient-to-br from-blue-100 to-indigo-200 border-blue-500", // Fantasy
    "bg-gradient-to-br from-yellow-100 to-green-200 border-yellow-500", // Comedy
    "bg-gradient-to-br from-gray-100 to-red-200 border-gray-500", // Horror
    "bg-gradient-to-br from-cyan-100 to-blue-200 border-cyan-500", // Sci-Fi
    "bg-gradient-to-br from-green-100 to-teal-200 border-green-500", // Sports
    "bg-gradient-to-br from-purple-100 to-pink-200 border-purple-500", // Slice of Life
  ];
  
  const backgrounds = isDarkMode ? darkBackgrounds : lightBackgrounds;
  
  return (
    <div 
      className={`${backgrounds[index % backgrounds.length]} ${!isDarkMode && 'border-2'} p-6 rounded transform hover:scale-105 hover:-rotate-2 transition-all duration-300 relative overflow-hidden group`}
      style={{ 
        clipPath: "polygon(0 0, 100% 0%, 96% 100%, 4% 100%)",
      }}
    >
      {/* Speed lines background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: `repeating-linear-gradient(${45 * (index % 8)}deg, ${isDarkMode ? 'white' : 'black'} 0px, ${isDarkMode ? 'white' : 'black'} 1px, transparent 1px, transparent 10px)`,
        }}></div>
      </div>
      
      {/* Decorative corner accent */}
      <div className={`absolute -top-2 -right-2 w-12 h-12 ${isDarkMode ? 'text-white' : 'text-gray-800'} opacity-20 font-bold text-4xl transform rotate-12`}>
        +
      </div>
      
      <div className="text-center mb-3 text-2xl">{genre.icon}</div>
      
      <h3 className={`text-xl font-black uppercase text-center ${isDarkMode ? 'text-white' : 'text-gray-800'} tracking-wide`}>
        {genre.name}
      </h3>
      
      <div className="mt-3 flex justify-center items-center">
        <Eye size={14} className={`mr-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
        <span className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{genre.count}</span>
      </div>
      
      <div className="mt-3 text-center">
        <button className={`px-3 py-1 text-sm font-medium rounded-sm ${
          isDarkMode 
            ? 'bg-black bg-opacity-30 text-white hover:bg-opacity-50' 
            : 'bg-white bg-opacity-50 text-gray-800 hover:bg-opacity-70'
        } flex items-center justify-center mx-auto transition-all group-hover:translate-x-1`}>
          Explore <ChevronRight size={14} className="ml-1" />
        </button>
      </div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
    </div>
  );
}