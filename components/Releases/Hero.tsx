import { ChevronRight, Clock, MessageCircle, Share2, Star, Eye } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const Hero = ({darkMode = false, secondaryBg = darkMode ? 'bg-gray-900' : 'bg-blue-50', accentBg = darkMode ? 'bg-pink-600' : 'bg-violet-600', themeClass = darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900', accentColor = darkMode ? 'text-pink-500' : 'text-violet-600'}) => {
  // Animation for text reveal
  const [isVisible, setIsVisible] = useState(false);
  const [sparklePosition, setSparklePosition] = useState({ x: 50, y: 50 });
  
  useEffect(() => {
    setIsVisible(true);
    
    // Random sparkle movement
    const intervalId = setInterval(() => {
      setSparklePosition({
        x: Math.floor(Math.random() * 80) + 10,
        y: Math.floor(Math.random() * 80) + 10
      });
    }, 2000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section className={`${themeClass} py-12 relative overflow-hidden`}>
      {/* Improved manga panel background with halftone pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat-space" style={{
          backgroundImage: `radial-gradient(circle, ${darkMode ? '#fff' : '#000'} 1px, transparent 1px)`,
          backgroundSize: '15px 15px'
        }}></div>
      </div>
      
      {/* Action lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={`absolute bg-${darkMode ? 'white' : 'black'}`}
            style={{
              height: '1px',
              width: `${Math.random() * 30 + 20}%`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 70}%`,
              transform: `rotate(${Math.random() * 60 - 30}deg)`,
              opacity: Math.random() * 0.5 + 0.5
            }}
          ></div>
        ))}
      </div>
      
      {/* Dynamic sparkle effect */}
      <div 
        className="absolute w-8 h-8 pointer-events-none opacity-75 transition-all duration-1000 ease-in-out"
        style={{
          left: `${sparklePosition.x}%`,
          top: `${sparklePosition.y}%`,
          background: 'radial-gradient(circle, white 0%, transparent 70%)',
          filter: 'blur(1px)'
        }}
      ></div>
      
      {/* Anime-style geometric decoration */}
      <div className="absolute top-1/4 right-10 w-32 h-32 opacity-20 animate-pulse">
        <svg viewBox="0 0 100 100" className={darkMode ? 'text-pink-500' : 'text-violet-600'}>
          <polygon points="50,0 100,50 50,100 0,50" stroke="currentColor" strokeWidth="2" fill="none" />
          <polygon points="50,20 80,50 50,80 20,50" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      {/* Enhanced manga style corner decorations */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-8 border-t-8 border-yellow-400 opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-8 border-b-8 border-yellow-400 opacity-70 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-8 border-t-8 border-pink-400 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-8 border-b-8 border-pink-400 opacity-50"></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative">
        {/* Background "SFX" text */}
        <div className="absolute opacity-5 font-black text-9xl transform -rotate-12 -translate-y-8 select-none pointer-events-none">
          ドドドド
        </div>
        
        {/* Card with anime character silhouette background */}
        <div className={`${secondaryBg} relative overflow-hidden border-4 ${darkMode ? 'border-pink-500' : 'border-violet-600'} 
          transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl`}
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 98% 98%, 2% 100%)",
            backgroundImage: darkMode ? 
              "linear-gradient(to right, rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 1))" : 
              "linear-gradient(to right, rgba(239, 246, 255, 0.8), rgba(255, 255, 255, 1))"
          }}>
          
          {/* Character silhouette background */}
          <div className="absolute right-0 bottom-0 h-full w-1/3 opacity-10">
            <div className="h-full w-full bg-no-repeat bg-right-bottom bg-contain" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 350' fill='${darkMode ? '%23ffffff' : '%23000000'}'%3E%3Cpath d='M100,30 C130,30 150,60 150,100 C150,130 130,150 120,160 C140,170 160,200 150,230 C140,260 120,280 100,290 C85,295 75,290 70,285 C65,300 45,320 30,330 L20,300 C30,290 40,280 45,270 L20,260 L25,240 L55,245 C55,235 60,220 70,210 C60,205 40,180 40,150 C40,120 60,90 80,80 L75,30 L100,30 Z'/%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Diagonal striped accent */}
          <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
            <div className={`${accentBg} w-48 h-8 rotate-45 transform translate-x-4 translate-y-6`}></div>
          </div>
          
          {/* Breaking news badge */}
          <div className="absolute top-4 right-4 animate-pulse">
            <div className={`bg-yellow-500 text-black font-extrabold px-4 py-2 transform rotate-3 uppercase text-sm tracking-widest`}
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%, 0% 50%)"
              }}>
              Breaking News!
            </div>
          </div>
          
          {/* Manga style sound effect */}
          <div className="absolute -top-6 left-12 transform rotate-12 opacity-90 pointer-events-none">
            <div className={`text-6xl font-extrabold ${darkMode ? 'text-pink-500' : 'text-violet-600'} blur-sm`} 
              style={{ WebkitTextStroke: `1px ${darkMode ? '#fff' : '#000'}` }}>
              ドン!
            </div>
          </div>
          
          <div className="p-6 md:p-8 relative">
            {/* Main content with animation */}
            <div className={`transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              {/* Movie poster thumbnail */}
              <div className="float-right mt-4 ml-4 mb-4 w-24 md:w-32 lg:w-40 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="relative pb-[150%] bg-gradient-to-b from-blue-600 to-purple-900 overflow-hidden border-2 border-yellow-400">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white font-black text-center">
                      <div className="text-3xl md:text-4xl">ONE PIECE</div>
                      <div className="text-xl md:text-2xl text-red-500 font-bold mt-2">MOVIE RED</div>
                      <div className="absolute bottom-2 left-0 right-0 text-xs text-center text-gray-300">© TOEI ANIMATION</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 transform -skew-x-2 ${accentColor}`}
                style={{
                  textShadow: darkMode ? 
                    "3px 3px 0 rgba(236, 72, 153, 0.3)" : 
                    "3px 3px 0 rgba(124, 58, 237, 0.3)"
                }}>
                "One Piece Movie RED" Breaks Box Office Records!
              </h2>
              
              {/* Star rating indicator */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={star <= 4 ? "text-yellow-400 fill-current" : "text-yellow-400"} 
                    size={18} 
                  />
                ))}
                <span className="text-sm ml-2">4.0/5.0</span>
              </div>
              
              <p className="text-lg mb-6 max-w-3xl leading-relaxed">
                The latest One Piece film shatters expectations, becoming the highest-grossing anime film of 2025 in just its opening weekend. Creator Eiichiro Oda shares his excitement in an exclusive interview.
              </p>
              
              {/* Enhanced manga style highlight box */}
              <div className={`border-l-4 ${darkMode ? 'border-pink-500 bg-gray-800' : 'border-violet-600 bg-white'} p-4 mb-6 relative`}>
                {/* Manga-style speech bubble pointer */}
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-gray-800"></div>
                <p className="italic">
                  "This film represents everything I love about One Piece. I'm overwhelmed by the fans' support!" — Eiichiro Oda
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 items-center">
                <a href="/article/21" className={`${accentBg} text-white font-bold uppercase py-3 px-6 flex items-center gap-2 group relative overflow-hidden`}
                  style={{
                    clipPath: "polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)"
                  }}>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 w-full h-full opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                  <span>Read Full Article</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} flex flex-wrap items-center gap-4`}>
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> 2 hours ago
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={16} /> 42 comments
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={16} /> 3.2k views
                  </span>
                  <button className="flex items-center gap-1 hover:text-yellow-500 transition-colors">
                    <Share2 size={16} className="hover:scale-110 transition-transform" /> Share
                  </button>
                </div>
              </div>
            </div>
            
            {/* Manga-style tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} px-3 py-1 text-sm rounded-full`}>
                #Onepiece
              </span>
              <span className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} px-3 py-1 text-sm rounded-full`}>
                #AnimeMovie
              </span>
              <span className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} px-3 py-1 text-sm rounded-full`}>
                #MovieRED
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action speed lines overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={`line-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            style={{
              height: '1px',
              width: `${Math.random() * 100 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `pulse ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default Hero