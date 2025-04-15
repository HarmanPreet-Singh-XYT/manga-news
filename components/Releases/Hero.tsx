import { ChevronRight, Clock, MessageCircle, Share2, Star, Eye } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const Hero = ({darkMode,secondaryBg,accentBg,themeClass,accentColor}) => {
     // Animation for text reveal
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className={`${themeClass} py-12 relative overflow-hidden`}>
      {/* Decorative manga-style speedlines background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat-space" style={{
          backgroundImage: `radial-gradient(circle, ${darkMode ? '#fff' : '#000'} 1px, transparent 1px)`,
          backgroundSize: '15px 15px'
        }}></div>
      </div>
      
      {/* Manga style corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-8 border-t-8 border-yellow-400 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-8 border-b-8 border-yellow-400 opacity-70"></div>
      
      <div className="container mx-auto px-4">
        <div className={`${secondaryBg} relative overflow-hidden border-4 ${darkMode ? 'border-pink-500' : 'border-violet-600'} 
          transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl`}
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 98% 98%, 2% 100%)",
            backgroundImage: darkMode ? 
              "linear-gradient(to right, rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 1))" : 
              "linear-gradient(to right, rgba(239, 246, 255, 0.8), rgba(255, 255, 255, 1))"
          }}>
          
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
          
          <div className="p-6 md:p-8">
            {/* Main content with animation */}
            <div className={`transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
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
                    size={18} 
                    className={star <= 4 ? "text-yellow-400 fill-current" : "text-yellow-400"} 
                  />
                ))}
                <span className="text-sm ml-2">4.0/5.0</span>
              </div>
              
              <p className="text-lg mb-6 max-w-3xl leading-relaxed">
                The latest One Piece film shatters expectations, becoming the highest-grossing anime film of 2025 in just its opening weekend. Creator Eiichiro Oda shares his excitement in an exclusive interview.
              </p>
              
              {/* Manga style highlight box */}
              <div className={`border-l-4 ${darkMode ? 'border-pink-500 bg-gray-800' : 'border-violet-600 bg-white'} p-4 mb-6`}>
                <p className="italic">
                  "This film represents everything I love about One Piece. I'm overwhelmed by the fans' support!" — Eiichiro Oda
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#" className={`${accentBg} text-white font-bold uppercase py-3 px-6 flex items-center gap-2 group`}
                  style={{
                    clipPath: "polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)"
                  }}>
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
    </section>
  )
}

export default Hero