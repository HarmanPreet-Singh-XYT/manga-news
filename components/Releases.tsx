
'use client'
import { useEffect, useState } from 'react';
import { Bell, Menu, Search, X, Star, ChevronRight, Bookmark, Heart, MessageCircle, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from './Releases/Hero';
import Releases from './Releases/Releases';
import Trending from './Releases/Trending';
import Newsletter from './Releases/Newsletter';
import Sidebar from './Releases/Sidebar';
import UpcomingReleases from './Releases/Upcoming';
import GenreHighlights from './Releases/Genre';

export default function MangaNewsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedItems, setLikedItems] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  
  // Theme and styling variables
  const themeClass = darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900';
  const accentColor = darkMode ? 'text-pink-500' : 'text-violet-600';
  const accentBg = darkMode ? 'bg-pink-500' : 'bg-violet-600';
  const secondaryBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const cardHoverClass = 'transition-all duration-300 hover:shadow-lg';
  
  // Toggle functions
  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);
  
  // Handle likes and bookmarks
  const toggleLike = (index) => {
    setLikedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  
  const toggleBookmark = (index) => {
    setBookmarkedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  // Latest manga releases data
  const mangaReleases = [
    {
      title: "Jujutsu Kaisen",
      chapter: "Chapter 256",
      image: "/api/placeholder/240/360",
      hot: true,
      description: "Yuji Itadori and the sorcerers face off against the cursed spirits.",
      date: "Apr 15"
    },
    {
      title: "My Hero Academia",
      chapter: "Chapter 402",
      image: "/api/placeholder/240/360",
      description: "The final arc continues as heroes make their last stand.",
      date: "Apr 14"
    },
    {
      title: "Chainsaw Man",
      chapter: "Chapter 153",
      image: "/api/placeholder/240/360",
      description: "Denji's new adventures unfold in this action-packed chapter.",
      date: "Apr 13"
    },
    {
      title: "Kagurabachi",
      chapter: "Chapter 34",
      image: "/api/placeholder/240/360",
      new: true,
      description: "The rising star manga continues its epic sword saga.",
      date: "Apr 15"
    }
  ];

  // Trending anime data
  const trendingAnime = [
    {
      title: "Frieren: Beyond Journey's End",
      genre: "Fantasy",
      rating: 4.9,
      image: "/api/placeholder/240/150",
      episodes: 28,
      studio: "Madhouse"
    },
    {
      title: "Solo Leveling",
      genre: "Action",
      rating: 4.8,
      image: "/api/placeholder/240/150",
      episodes: 12,
      studio: "A-1 Pictures"
    }
  ];

  // Popular news data
  const popularNews = [
    {
      title: "Hunter x Hunter Creator Returns from Hiatus",
      date: "Apr 15",
      comments: 42,
      excerpt: "Togashi announces return with 10 new chapters planned for 2025."
    },
    {
      title: "Crunchyroll Announces Spring 2025 Lineup",
      date: "Apr 14",
      comments: 35,
      excerpt: "20+ new shows including highly anticipated sequels and originals."
    },
    {
      title: "Spy x Family Movie Confirmed for Summer Release",
      date: "Apr 13",
      comments: 28,
      excerpt: "The Forger family heads to the big screen in a new original story."
    },
    {
      title: "Attack on Titan Author Reveals New Project",
      date: "Apr 12",
      comments: 21,
      excerpt: "Hajime Isayama's new dark fantasy series to debut this fall."
    }
  ];

  // Categories
  const categories = [
    "Shonen", "Shojo", "Seinen", "Isekai", 
    "Mecha", "Slice of Life", "Horror", "Movies", "Industry"
  ];

  // Scroll to top functionality
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
    <div className={`min-h-screen ${themeClass} font-sans transition-colors duration-300`}>
      {/* HEADER */}
      <Header 
        darkMode={darkMode} 
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        toggleDarkMode={toggleTheme}  
        toggleNotification={toggleNotification} 
        isNotificationOpen={isNotificationOpen} 
        showBackToTop={showBackToTop} 
        scrollToTop={scrollToTop}
      />
      
      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-blue-50'} p-6 animate-fadeIn`}>
          <div className="flex justify-end mb-6">
            <button 
              onClick={toggleMobileMenu} 
              className="p-2 transition-transform hover:rotate-90 duration-300"
            >
              <X size={24} className={accentColor} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 uppercase font-bold text-xl">
            <a href="#" className="transform -rotate-1 py-2 border-b-2 border-dashed border-gray-700 hover:translate-x-2 transition-transform">News</a>
            <a href="#" className="transform rotate-1 py-2 border-b-2 border-dashed border-gray-700 hover:translate-x-2 transition-transform">Releases</a>
            <a href="#" className="transform -rotate-1 py-2 border-b-2 border-dashed border-gray-700 hover:translate-x-2 transition-transform">Reviews</a>
            <a href="#" className="transform rotate-1 py-2 border-b-2 border-dashed border-gray-700 hover:translate-x-2 transition-transform">Community</a>
            <a href="#" className={`${accentBg} text-white py-2 px-4 text-center transform -rotate-1 clip-path-polygon mt-4 hover:scale-105 transition-transform`}>Subscribe</a>
          </nav>
        </div>
      )}
      
      {/* HERO SECTION */}
      <Hero darkMode={darkMode} secondaryBg={secondaryBg} accentBg={accentBg} themeClass={themeClass} accentColor={accentColor}/>
      
      {/* RELEASE SECTION */}
      <Releases 
      themeClass={themeClass}
        mangaReleases={mangaReleases} 
        accentColor={accentColor} 
        accentBg={accentBg} 
        secondaryBg={secondaryBg} 
        darkMode={darkMode}
        cardHoverClass={cardHoverClass}
        setHoveredCard={setHoveredCard}
        toggleLike={toggleLike}
        toggleBookmark={toggleBookmark}
        likedItems={likedItems}
        bookmarkedItems={bookmarkedItems}
        hoveredCard={hoveredCard} 
      />
      
      {/* TRENDING ANIME SECTION */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3 flex flex-col gap-6">
            <Trending accentColor={accentColor} accentBg={accentBg} secondaryBg={secondaryBg} darkMode={darkMode}  />
            <UpcomingReleases accentColor={accentColor} accentBg={accentBg} secondaryBg={secondaryBg} darkMode={darkMode} />
            <GenreHighlights accentColor={accentColor} accentBg={accentBg} secondaryBg={secondaryBg} darkMode={darkMode} />
          </div>
          {/* SIDEBAR */}
          <Sidebar 
            darkMode={darkMode} 
            popularNews={popularNews} 
          />
        </div>
      </section>
      
      {/* NEWSLETTER WITH ENHANCED DESIGN */}
      <Newsletter darkMode={darkMode} accentBg={accentBg} accentColor={accentColor} themeClass={themeClass} secondaryBg={secondaryBg}/>
      
      {/* FOOTER */}
      <Footer categories={categories} />
      
      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 ${accentBg} text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-30`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
      
      <style jsx>{`
        .clip-path-polygon {
          clip-path: polygon(
            0% 10px, 
            10px 0%, 
            calc(100% - 5px) 0%, 
            100% 5px, 
            100% calc(100% - 10px), 
            calc(100% - 10px) 100%, 
            5px 100%, 
            0% calc(100% - 5px)
          );
        }
        
        .clip-path-explosion {
          clip-path: polygon(
            0% 20%, 
            15% 0%, 
            35% 10%, 
            50% 0%, 
            65% 10%, 
            85% 0%, 
            100% 20%, 
            90% 40%, 
            100% 60%, 
            85% 80%, 
            100% 100%, 
            65% 90%, 
            50% 100%, 
            35% 90%, 
            15% 100%, 
            0% 80%, 
            10% 60%, 
            0% 40%
          );
        }
        
        .shadow-text-md {
          text-shadow: 3px 3px 0px ${darkMode ? 'rgba(236, 72, 153, 0.5)' : 'rgba(124, 58, 237, 0.5)'};
        }
        
        .shadow-custom {
          text-shadow: 2px 2px 0px ${darkMode ? 'rgba(236, 72, 153, 0.7)' : 'rgba(124, 58, 237, 0.7)'};
        }
        
        .bg-speed-lines {
          background-image: repeating-linear-gradient(
            45deg,
            currentColor,
            currentColor 1px,
            transparent 1px,
            transparent 10px
          );
        }
        
        .bg-halftone-pattern {
          background-image: radial-gradient(
            currentColor 1px,
            transparent 1px
          );
          background-size: 10px 10px;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}

// Adding missing components that were referenced but not defined
const Clock = ({ size }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
};