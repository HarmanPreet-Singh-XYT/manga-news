'use client'
import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Share2, 
  Bookmark, 
  MessageCircle, 
  Clock, 
  ChevronRight, 
  TrendingUp,
  Search,
  Menu,
  User,
  Bell
} from 'lucide-react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Article/Main';
import { sampleArticleData } from '@/app/data';

export default function AnimeMangaNewsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('latest');
  const articleData = sampleArticleData[0];
  // Toggle menu open/closed
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
  return (
    <div className={`min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-2 flex items-center text-xs text-indigo-800">
        <a href="#" className="hover:text-pink-500">Home</a>
        <ChevronRight size={14} className="mx-1" />
        <a href="#" className="hover:text-pink-500">{articleData.category}</a>
        <ChevronRight size={14} className="mx-1" />
        <span className="text-indigo-500 truncate">Chainsaw Man Season 2</span>
      </div>

      <main className="container mx-auto px-4 py-6">
        <Main articleData={articleData}/>
      </main>

      {/* Footer */}
      <Footer categories={categories} />
    </div>
  );
}