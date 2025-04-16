'use client'
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Main from "./Home/Main";
import Featured from "./Home/Featured";
import Newsletter from "./Releases/Newsletter";
import { Star, TrendingUp,  MapPin } from "lucide-react";
import AnimeCalendar from "./Calender/Main";

export default function Calendar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-purple-50 text-gray-900'}`}>
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
        <AnimeCalendar darkMode={darkMode}/>
      </main>
      <Newsletter darkMode={darkMode} accentBg={accentBg} accentColor={accentColor} themeClass={themeClass} secondaryBg={secondaryBg}/>
      <Footer categories={categories}/>
    </div>
  );
}