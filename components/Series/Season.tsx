import { ArrowRight, Bookmark, Calendar, Eye, Play, Share, Star, Flame as Fire } from 'lucide-react'
import React from 'react'

const Season = ({isDarkMode,latestShows}) => {
  return (
    <section className="mt-20 overflow-hidden">
        <div 
            className={`p-8 ${isDarkMode ? 'bg-gradient-to-r from-purple-900 to-pink-900' : 'bg-gradient-to-r from-violet-200 to-indigo-200'} relative`}
            style={{
            clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 95%)"
            }}
        >
            {/* Improved dot pattern background */}
            <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-repeat" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23FFFFFF' /%3E%3C/svg%3E")`,
                backgroundSize: "20px 20px"
            }}></div>
            </div>
            
            {/* Enhanced floating animated elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500 rounded-full filter blur-xl opacity-20 animate-float-slow"></div>
            <div className={`absolute bottom-10 left-10 w-24 h-24 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'} rounded-full filter blur-xl opacity-20 animate-float-medium`}></div>
            <div className={`absolute top-1/2 left-1/4 w-16 h-16 ${isDarkMode ? 'bg-blue-500' : 'bg-indigo-500'} rounded-full filter blur-xl opacity-20 animate-float-fast`}></div>
            
            {/* Improved title with better text effects */}
            <div className="mb-10 relative">
            <h2 className={`text-4xl md:text-5xl font-black uppercase transform -skew-x-3 text-center ${isDarkMode ? 'text-shadow-manga-dark' : 'text-shadow-manga-light'}`}>
                <span className="text-yellow-500 inline-block transform hover:scale-105 transition-transform duration-300">SPRING</span>{' '}
                <span className={`inline-block transform hover:scale-105 transition-transform duration-300 ${isDarkMode ? 'text-white' : 'text-violet-800'}`}>2025</span>{' '}
                <span className={`inline-block transform hover:scale-105 transition-transform duration-300 ${isDarkMode ? 'text-pink-400' : 'text-indigo-600'}`}>HIGHLIGHTS</span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500"></div>
            </div>
            
            {/* Filter tabs */}
            <div className="flex justify-center mb-6 overflow-x-auto hide-scrollbar">
            <div className="flex space-x-2 p-1 rounded-lg bg-black bg-opacity-20">
                {['All', 'Action', 'Romance', 'Fantasy', 'Sci-Fi'].map((category, idx) => (
                <button 
                    key={idx}
                    className={`py-1 px-4 text-sm rounded-md transition-all duration-300 ${
                    idx === 0 
                        ? `bg-yellow-500 text-black font-bold` 
                        : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} hover:bg-black hover:bg-opacity-10`
                    }`}
                >
                    {category}
                </button>
                ))}
            </div>
            </div>
            
            {/* Improved grid layout with more responsive design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {latestShows.map((series, index) => (
                <div 
                key={series.id} 
                className={`transform hover:scale-105 transition duration-300 hover:-rotate-1 animate-fadeIn`}
                style={{ animationDelay: `${index * 100}ms` }}
                >
                <div className="relative group">
                    {/* Better card styling with shadow effect */}
                    <div className={`absolute inset-0 ${isDarkMode ? 'bg-purple-500' : 'bg-violet-500'} transform translate-x-2 translate-y-2 rounded -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300`}></div>
                    
                    {/* Card content */}
                    <div className={`relative overflow-hidden border-2 ${isDarkMode ? 'border-white/40 group-hover:border-yellow-500' : 'border-violet-400 group-hover:border-yellow-500'} transition-colors duration-300`}>
                    <div className="aspect-[3/4] overflow-hidden">
                        <img 
                        src={series.image || "/api/placeholder/300/400"} 
                        alt={series.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Overlay with interactive buttons */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <div className="flex space-x-2 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                            <button className={`${isDarkMode ? 'bg-pink-500' : 'bg-violet-600'} text-white p-2 rounded-full ${isDarkMode ? 'hover:bg-pink-600' : 'hover:bg-violet-700'} transition-colors`} aria-label="Preview">
                            <Eye size={16} />
                            </button>
                            <button className="bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-600 transition-colors" aria-label="Add to Watchlist">
                            <Bookmark size={16} />
                            </button>
                            <button className={`${isDarkMode ? 'bg-blue-500' : 'bg-indigo-600'} text-white p-2 rounded-full ${isDarkMode ? 'hover:bg-blue-600' : 'hover:bg-indigo-700'} transition-colors ml-auto`} aria-label="Share">
                            <Share size={16} />
                            </button>
                        </div>
                        
                        {/* Episode count or status */}
                        <div className="bg-black bg-opacity-50 py-1 px-2 rounded text-xs inline-flex items-center w-auto align-self-start transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <Play size={12} className="mr-1" />
                            {series.episodes ? `${series.episodes} Episodes` : 'Coming Soon'}
                        </div>
                        </div>
                    </div>
                    
                    {/* Improved info section */}
                    <div className={`p-3 ${isDarkMode ? 'bg-black bg-opacity-80' : 'bg-white bg-opacity-90'}`}>
                        <h3 className="font-bold text-sm md:text-base truncate">{series.title}</h3>
                        <div className="flex justify-between items-center text-xs mt-1">
                        <span className={`px-2 py-0.5 rounded ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>{series.genre}</span>
                        <span className="text-yellow-500 flex items-center">
                            <Star size={12} className="fill-current mr-1" />
                            {series.rating}
                        </span>
                        </div>
                        
                        {/* Add air date */}
                        <div className={`text-xs mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <Calendar size={10} className="inline mr-1" />
                        {series.airDate || 'April 2025'}
                        </div>
                    </div>
                    </div>
                    
                    {/* Enhanced badges */}
                    {series.isNew && (
                    <div className="absolute -top-2 -right-2 z-10">
                        <div className="bg-yellow-500 text-black font-bold text-xs py-1 px-3 rounded-full shadow-lg transform rotate-12 flex items-center">
                        <span className="animate-pulse mr-1">●</span>NEW
                        </div>
                    </div>
                    )}
                    
                    {/* Add trending badge for some items */}
                    {series.trending && (
                    <div className="absolute -top-2 -left-2 z-10">
                        <div className="bg-red-500 text-white font-bold text-xs py-1 px-3 rounded-full shadow-lg transform -rotate-12 flex items-center">
                        <Fire size={12} className="mr-1" />TRENDING
                        </div>
                    </div>
                    )}
                </div>
                </div>
            ))}
            </div>
            
            {/* Improved button section */}
            <div className="mt-12 text-center">
            <div className="inline-block relative group">
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'} transform translate-x-1 translate-y-1 rounded group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300`}></div>
                <button className="relative bg-yellow-500 hover:bg-yellow-600 transform group-hover:scale-102 transition text-black font-bold py-3 px-8 uppercase rounded flex items-center">
                <Calendar size={16} className="mr-2" />
                SEASONAL CHART
                <span className="ml-2 relative w-5 h-5">
                    <span className="absolute inset-0 flex items-center justify-center animate-ping opacity-75">
                    <ArrowRight size={16} />
                    </span>
                    <ArrowRight size={16} className="relative" />
                </span>
                </button>
            </div>
            
            
            </div>
        </div>
        
        {/* Add custom animations in style section */}
        <style jsx>{`
            @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
            }
            
            @keyframes float-medium {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            }
            
            @keyframes float-fast {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-7px); }
            }
            
            .animate-float-slow {
            animation: float-slow 7s ease-in-out infinite;
            }
            
            .animate-float-medium {
            animation: float-medium 5s ease-in-out infinite;
            }
            
            .animate-float-fast {
            animation: float-fast 3s ease-in-out infinite;
            }
            
            .animate-fadeIn {
            animation: fadeIn 0.6s ease-in-out forwards;
            opacity: 0;
            }
            
            @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
            }
            
            .text-shadow-manga-light {
            text-shadow: 2px 2px 0 #5b21b6, 4px 4px 0 #7c3aed;
            }
            
            .text-shadow-manga-dark {
            text-shadow: 2px 2px 0 #d946ef, 4px 4px 0 #7e22ce;
            }
            
            .hide-scrollbar::-webkit-scrollbar {
            display: none;
            }
            
            .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
            }
        `}</style>
        </section>
  )
}

export default Season