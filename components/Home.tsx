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
      </main>
      
      <Footer categories={categories}/>
    </div>
  );
}