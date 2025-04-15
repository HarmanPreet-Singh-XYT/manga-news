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
import { Articles } from '@/app/data';
import { useParams } from 'next/navigation';

export default function AnimeMangaNewsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('latest');
  const params = useParams<{ id: string }>();
  const articleData = Articles[parseInt(params.id) - 1];
  const [activeTab, setActiveTab] = useState("HOT RIGHT NOW");
  const [darkMode, setDarkMode] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
 
  const categories = [
    "Shonen", "Shojo", "Seinen", "Isekai",
    "Mecha", "Slice of Life", "Horror", "Movies", "Industry"
  ];
 
  // Theme variables
  const baseBgClass = darkMode ? 'bg-gray-900' : 'bg-indigo-50';
  const baseTextClass = darkMode ? 'text-white' : 'text-gray-900';
  const primaryAccent = darkMode ? 'pink-500' : 'violet-600';
  const secondaryAccent = darkMode ? 'purple-900' : 'violet-200';
  const breadcrumbTextClass = darkMode ? 'text-gray-300' : 'text-indigo-800';
  const breadcrumbHoverClass = 'hover:text-pink-500';
  const breadcrumbActiveClass = darkMode ? 'text-pink-400' : 'text-indigo-500';
  const gradientBgClass = darkMode 
    ? 'bg-gradient-to-br from-gray-900 to-purple-900' 
    : 'bg-gradient-to-br from-indigo-50 to-purple-50';

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
    <div className={`min-h-screen ${gradientBgClass} font-sans transition-colors duration-300 ${baseTextClass}`}>
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
      <div className={`container mx-auto px-4 py-2 flex items-center text-xs ${breadcrumbTextClass}`}>
        <a href="/" className={breadcrumbHoverClass}>Home</a>
        <ChevronRight size={14} className="mx-1" />
        <a href="#" className={breadcrumbHoverClass}>{articleData.category}</a>
        <ChevronRight size={14} className="mx-1" />
        <span className={breadcrumbActiveClass + " truncate"}>Chainsaw Man Season 2</span>
      </div>
      
      <main className="container mx-auto px-4 py-6">
        <Main articleData={articleData} darkMode={darkMode}/>
      </main>
      
      {/* Footer */}
      <Footer categories={categories} />
    </div>
  );
}