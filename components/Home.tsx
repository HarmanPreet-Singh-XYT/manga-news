'use client'
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Main from "./Home/Main";
import Featured from "./Home/Featured";
import AnimeReleaseSchedule from "./Home/AnimeRelease";
import AnimeCategoryTabs from "./Home/AnimeCategoryTabs";
import UpcomingReleases from "./Releases/Upcoming";
import Newsletter from "./Releases/Newsletter";
import FeaturedEventsSection from "./Events/FeaturedEvents";
import { Star, TrendingUp, Calendar, MapPin } from "lucide-react";

export default function MangaPulse() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOT RIGHT NOW");
  const [darkMode, setDarkMode] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const categories = [
    "Shonen", "Shojo", "Seinen", "Isekai", 
    "Mecha", "Slice of Life", "Horror", "Movies", "Industry"
  ];
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
// Theme and styling variables
const themeClass = darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900';
const accentColor = darkMode ? 'text-pink-500' : 'text-violet-600';
const accentBg = darkMode ? 'bg-pink-500' : 'bg-violet-600';
const secondaryBg = darkMode ? 'bg-gray-800' : 'bg-white';
const cardHoverClass = 'transition-all duration-300 hover:shadow-lg';
const featuredEvents = [
  {
    id: 1,
    title: "AnimeExpo 2025",
    image: "https://www.anime-expo.org/wp-content/uploads/2024/01/AX_BG_EXTERIOR_FINAL_v3-WEB-2-1-1024x596.png",
    date: "May 15-18, 2025",
    location: "Los Angeles Convention Center",
    category: "Conventions",
    isTrending: true,
    isFeatured: true,
    description: "The largest anime convention in North America returns with special guests, exclusive panels, and premiere screenings."
  },
  {
    id: 2,
    title: "One Piece: Final Saga Premiere",
    image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/04/one-piece-how-many-arcs-will-the-final-saga-have-featured-1.jpg",
    date: "June 2, 2025",
    location: "Global Streaming Event",
    category: "Releases",
    isTrending: true,
    isFeatured: true,
    description: "The highly anticipated final saga of the legendary anime series begins with a special 2-hour premiere episode."
  }
];
  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Header */}
      
      
      <Header 
        darkMode={darkMode} 
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        toggleDarkMode={toggleDarkMode}  
        toggleNotification={toggleNotification} 
        isNotificationOpen={isNotificationOpen} 
        showBackToTop={showBackToTop} 
        scrollToTop={scrollToTop}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Featured Story - Manga Cover Style with Animation */}
        <Featured darkMode={darkMode} />
        
        
        {/* Category Tabs */}
        {/* <AnimeCategoryTabs darkMode={darkMode}/> */}
        
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Main Content */}
          <Main darkMode={darkMode}/>
          
          {/* Sidebar */}
          <Sidebar darkMode={darkMode}/>
        </div>
        {/* <AnimeReleaseSchedule darkMode={darkMode}/> */}
        {/* <UpcomingReleases darkMode={darkMode} accentColor={accentColor} accentBg={accentBg} secondaryBg={secondaryBg}/> */}
        <section className="mt-12">
          <div className="relative inline-block mb-8">
            <h2 className={`text-2xl md:text-3xl font-black uppercase px-6 py-2 inline-block ${
              darkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white'
            }`}
            style={{
              clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)',
              
            }}>
              Featured Events!
            </h2>
            <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full ${darkMode ? 'bg-yellow-400' : 'bg-yellow-400'} flex items-center justify-center`}>
              <Star size={16} className="text-black" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredEvents.map(event => (
              <div 
                key={event.id} 
                className={`relative overflow-hidden transition-all duration-300 transform hover:-rotate-1`}
              >
                
                <div className={`absolute inset-0 ${darkMode ? 'bg-gray-800 border-white' : 'bg-white border-black'} border-4 shadow-xl`}></div>
                
                <div className="relative">
                  
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent via-transparent to-gray-300 transform rotate-90"></div>
                  
                  <div className="relative h-64 overflow-hidden border-b-4 border-black">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                    
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent mix-blend-multiply"></div>
                    
                    
                    <div className="absolute inset-0 opacity-20" 
                         style={{
                           background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, white 2px, white 3px)'
                         }}></div>
                    
                    
                    <div className="absolute top-4 left-4 transform -rotate-6">
                      <div className={`py-1 px-3 ${
                        darkMode ? 'bg-yellow-400 text-black' : 'bg-yellow-400 text-black'
                      } text-xs font-black uppercase tracking-widest`}
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
                        textShadow: '1px 1px 0px white'
                      }}>
                        {event.category}
                      </div>
                    </div>
                    
                   
                    {event.isTrending && (
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 ${
                          darkMode ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white'
                        } text-xs font-black flex items-center`}
                        style={{
                          clipPath: 'polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)',
                        }}>
                          <TrendingUp size={12} className="mr-1" /> HOT!
                        </div>
                      </div>
                    )}
                    
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`relative ${
                        darkMode ? 'bg-white text-black' : 'bg-white text-black'
                      } p-3 rounded-lg border-2 border-black`}
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 98% 80%, 85% 100%, 75% 80%, 0% 80%)'
                      }}>
                        <h3 className="font-black text-lg md:text-xl" style={{  }}>
                          {event.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative p-6">
                    
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center text-sm">
                        <Calendar size={16} className={`mr-2 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
                        <span className="font-bold">{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin size={16} className={`mr-2 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} />
                        <span className="font-bold">{event.location}</span>
                      </div>
                      
                      
                      <div className={`mt-3 p-3 relative ${
                        darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'
                      } border-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                      style={{
                        borderRadius: '10px'
                      }}>
                        <p>{event.description}</p>
                        
                        <div className="absolute -top-2 left-4 w-4 h-4 transform rotate-45 
                          border-l-2 border-t-2 border-gray-600
                          bg-inherit"></div>
                      </div>
                      
                      
                      <div className="mt-4 text-center">
                        <button className={`px-6 py-2 font-black text-white transform transition-all duration-300 hover:scale-105 hover:-rotate-2 ${
                          darkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500'
                        }`}
                        style={{
                          clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
                          boxShadow: darkMode ? '3px 3px 0px #EC4899' : '3px 3px 0px #2563EB'
                        }}>
                          LEARN MORE →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Newsletter darkMode={darkMode} accentBg={accentBg} accentColor={accentColor} themeClass={themeClass} secondaryBg={secondaryBg}/>
      <Footer categories={categories}/>
    </div>
  );
}