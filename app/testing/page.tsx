'use client'
import { useState, useEffect } from 'react';
import { 
  Calendar, Clock, MapPin, Heart, Users, Star, 
  Flame as Fire, Tag, MessageCircle, Moon, Sun, 
  Image, Ticket, Camera, ChevronRight, Share2,
  Award, Bell, PlayCircle,
  Sparkles
} from 'lucide-react';
import Newsletter from '@/components/Releases/Newsletter';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import EventSidebar from '@/components/Events/DetailSidebar';

// Event Details Component
export default function AnimeExpoEventPage() {
  const [isLiked, setIsLiked] = useState(false);
  const [fansCount, setFansCount] = useState(2845);
  const [isHot, setIsHot] = useState(true);
  const [activeTab, setActiveTab] = useState('details');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotified, setIsNotified] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Base theme classes
  const baseBgClass = isDarkMode ? 'bg-gray-900' : 'bg-indigo-50';
  const baseTextClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const primaryAccent = isDarkMode ? 'pink-500' : 'violet-600';
  const secondaryAccent = isDarkMode ? 'purple-900' : 'violet-200';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const cardBgAccent = isDarkMode ? 'bg-gray-900' : 'bg-violet-50';
  const borderColor = isDarkMode ? 'border-pink-500' : 'border-violet-500';
  const highlightText = isDarkMode ? 'text-pink-500' : 'text-violet-700';
  const buttonBg = isDarkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500';
  const accentButtonBg = isDarkMode ? 'bg-purple-600 hover:bg-purple-500' : 'bg-violet-700 hover:bg-violet-600';
  const subtleText = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const inputBg = isDarkMode ? 'bg-gray-800' : 'bg-violet-50';
  const panelBg = isDarkMode ? 'bg-gray-800' : 'bg-white/90';
  const subtleBg = isDarkMode ? 'bg-gray-900' : 'bg-indigo-100';
  const categories = [
    "Shonen", "Shojo", "Seinen", "Isekai", 
    "Mecha", "Slice of Life", "Horror", "Movies", "Industry"
  ];
  const handleLike = () => {
    setIsLiked(!isLiked);
    setFansCount(isLiked ? fansCount - 1 : fansCount + 1);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNotification = () => {
    setIsNotified(!isNotified);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };


  // For demonstration purposes - pulsing effect for the "HOT" badge
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHot(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const eventDetails = {
    title: "ANIME EXPO 2025",
    category: "Convention",
    subcategories: ["Anime", "Manga", "Cosplay", "Gaming"],
    description: "North America's largest celebration of Japanese pop culture returns for its 2025 edition! Join over 100,000 fans for exclusive panels, premieres, concerts, and meet your favorite voice actors, artists and creators. Featuring an expanded Artist Alley, Anime Music Festival, Cosplay Masquerade, and the largest exhibition hall yet with all major anime studios and publishers!",
    location: "Los Angeles Convention Center, Los Angeles, CA",
    date: "July 3-6, 2025",
    time: "10:00 AM - 8:00 PM",
    popularity: 98,
    fansCount: fansCount,
    isHot: isHot,
    ticketTiers: [
      { name: "General Admission", price: "$90", features: ["Access to Main Hall", "Artist Alley", "Fan Panels"] },
      { name: "Premium Pass", price: "$230", features: ["All General Access", "Priority Panel Seating", "Exclusive Merch"] },
      { name: "VIP Experience", price: "$450", features: ["All Premium Benefits", "Meet & Greet Access", "VIP Lounge", "Exclusive After-Party"] }
    ],
    gallery: [
      "https://www.anime-expo.org/wp-content/uploads/2024/01/AX_BG_EXTERIOR_FINAL_v3-WEB-2-1-1024x596.png",
      "https://www.laconventioncenter.com/assets/img/anime-expo-2025-main-eb72708880.jpg",
      "https://thekitsunetwork.net/wp-content/uploads/2019/08/dsc0608-1.jpg",
      "https://i.ytimg.com/vi/JUa_z_b_oQg/maxresdefault.jpg"
    ],
    guests: [
      { name: "Makoto Shinkai", role: "Director", image: "/api/placeholder/80/80" },
      { name: "LiSA", role: "Musical Artist", image: "/api/placeholder/80/80" },
      { name: "Yuki Kaji", role: "Voice Actor", image: "/api/placeholder/80/80" },
      { name: "MAPPA Studio", role: "Special Showcase", image: "/api/placeholder/80/80" },
      { name: "Chainsaw Man Cast", role: "Panel & Signing", image: "/api/placeholder/80/80" }
    ],
    highlights: [
      { title: "Exclusive Pre-Release Film Screenings", icon: "film" },
      { title: "Industry Panels & Announcements", icon: "mic" },
      { title: "Cosplay Championship", icon: "costume" },
      { title: "Artist Alley with 500+ Artists", icon: "brush" },
      { title: "Night Concert Series", icon: "music" }
    ],
    schedule: [
      { day: "Day 1", date: "July 3", events: [
        { time: "10:00 AM", title: "Opening Ceremony", location: "Main Hall" },
        { time: "2:00 PM", title: "Cosplay Contest Preliminaries", location: "West Hall" },
        { time: "7:00 PM", title: "Anime Music Concert", location: "Arena" }
      ]},
      { day: "Day 2", date: "July 4", events: [
        { time: "11:00 AM", title: "Industry Panels", location: "Panel Room A" },
        { time: "3:00 PM", title: "Voice Actor Meet & Greet", location: "Signing Area" },
        { time: "6:00 PM", title: "Premiere Screenings", location: "Theater Hall" }
      ]},
      { day: "Day 3", date: "July 5", events: [
        { time: "10:30 AM", title: "Manga Artist Showcase", location: "Exhibition Hall" },
        { time: "1:00 PM", title: "Gaming Tournament", location: "Gaming Zone" },
        { time: "7:30 PM", title: "Cosplay Masquerade", location: "Main Stage" }
      ]},
      { day: "Day 4", date: "July 6", events: [
        { time: "10:00 AM", title: "Fan Panels", location: "Community Rooms" },
        { time: "5:00 PM", title: "Closing Ceremony", location: "Main Hall" }
      ]}
    ],
    faqs: [
      { q: "What is the cosplay policy?", 
        a: "All cosplays are welcome! Please note that prop weapons must be peace-bonded at the security check. Oversized props may be subject to additional inspection." },
      { q: "Is there re-entry allowed?", 
        a: "Yes, your badge allows for unlimited re-entry during event hours. Make sure to get your badge scanned at designated entry points." },
      { q: "Are there age restrictions?", 
        a: "The main event is open to all ages. Some special panels and late-night events may be 18+. ID will be required for age-restricted content." },
      { q: "What payment methods are accepted?", 
        a: "We accept all major credit cards, digital payments, and cash at most vendor booths. ATMs are available throughout the venue." }
    ],
    relatedEvents: [
      { name: "Manga Creator Conference 2025", date: "Aug 12-14, 2025", location: "San Francisco", img: "/api/placeholder/100/100" },
      { name: "J-Pop Summer Festival", date: "July 18-20, 2025", location: "Seattle", img: "/api/placeholder/100/100" },
      { name: "Cosplay Champions Tournament", date: "July 7, 2025", location: "Los Angeles", img: "/api/placeholder/100/100" }
    ]
  };
  const themeClass = isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900';
const accentColor = isDarkMode ? 'text-pink-500' : 'text-violet-600';
const accentBg = isDarkMode ? 'bg-pink-500' : 'bg-violet-600';
const secondaryBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
const cardHoverClass = 'transition-all duration-300 hover:shadow-lg';
const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <div className={`${baseBgClass} min-h-screen ${baseTextClass} font-sans transition-colors duration-300`}>
      <Header 
        darkMode={isDarkMode} 
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        toggleDarkMode={toggleDarkMode}  
        toggleNotification={toggleNotification} 
        isNotificationOpen={isNotificationOpen} 
        showBackToTop={showBackToTop} 
        scrollToTop={scrollToTop}
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mt-8 mx-auto">
        
        {/* Header Banner - Improved manga aesthetic with diagonal slashes */}
        <div className="relative mb-8 overflow-hidden rounded-lg" style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)", height: "450px" }}>
          <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-purple-900 to-fuchsia-800' : 'from-violet-500 to-fuchsia-600'} opacity-60 z-10`}></div>
          <img 
            src={eventDetails.gallery[0]} 
            alt="Anime Expo Banner" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Enhanced decorative speed lines */}
          <div className="absolute inset-0 z-0 opacity-20">
            {Array(30).fill(0).map((_, i) => (
              <div 
                key={i} 
                className="absolute bg-white h-1" 
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 300 + 50}px`,
                  transform: `rotate(${Math.random() * 180}deg)`,
                  opacity: Math.random() * 0.5 + 0.5
                }}
              ></div>
            ))}
          </div>
          
          {/* Action sound effect bubbles - manga style */}
          <div className="absolute top-10 right-10 transform rotate-12 text-white font-black text-2xl z-20">
            <div className="bg-yellow-500 py-2 px-6 rounded-full" 
                 style={{ clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)" }}>
              バム!
            </div>
          </div>
          <div className="absolute bottom-20 left-10 transform -rotate-6 text-white font-black text-xl z-20">
            <div className="bg-pink-500 py-2 px-5 rounded-full" 
                 style={{ clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)" }}>
              ドキドキ
            </div>
          </div>
          
          {/* Event Title and Badges */}
          <div className="relative z-20 p-8 md:p-16">
            {/* Enhanced HOT Badge */}
            {eventDetails.isHot && (
              <div 
                className={`absolute top-4 right-4 transform rotate-12 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black py-2 px-6 rounded-lg shadow-lg ${isHot ? 'scale-110' : 'scale-100'} transition-transform duration-300`} 
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)" }}
              >
                <div className="flex items-center">
                  <Fire className="w-5 h-5 mr-1" />
                  <span className="tracking-wider">SUPER HOT!</span>
                </div>
              </div>
            )}
            
            {/* Improved Category Pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {eventDetails.subcategories.map((subcat, index) => (
                <span 
                  key={index} 
                  className={`${isDarkMode ? 'bg-gradient-to-r from-purple-700 to-pink-600' : 'bg-gradient-to-r from-violet-600 to-fuchsia-500'} px-4 py-1 text-xs font-bold uppercase tracking-wider transform -rotate-1 text-white shadow-lg`}
                  style={{ clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)" }}
                >
                  {subcat}
                </span>
              ))}
            </div>
            
            {/* Enhanced Main Title */}
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-2 transform -translate-y-1 text-white">
              <span className="relative inline-block mr-2">
                <span className="relative z-10">{eventDetails.title}</span>
                <span 
                  className={`absolute -inset-1 -skew-y-3 ${isDarkMode ? 'bg-pink-600' : 'bg-violet-600'} opacity-30 z-0`}>
                </span>
              </span>
              <span className="text-2xl md:text-4xl align-top ml-2">2025</span>
            </h1>
            
            <div className="text-lg md:text-xl font-bold mb-4 flex items-center text-white">
              <Tag className="w-5 h-5 mr-2" />
              <span className="uppercase tracking-wider">{eventDetails.category}</span>
            </div>

            {/* Enhanced Quick Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button 
                onClick={handleLike}
                className={`flex items-center gap-2 py-2 px-4 rounded-full shadow-lg transition-all ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} transform hover:scale-105`}
              >
                <Heart className={`${isLiked ? (isDarkMode ? 'fill-pink-500 text-pink-500' : 'fill-violet-600 text-violet-600') : ''}`} />
                <span>{isLiked ? 'Liked' : 'Like'}</span>
              </button>
              
              <button 
                onClick={toggleNotification}
                className={`flex items-center gap-2 py-2 px-4 rounded-full shadow-lg transition-all ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} transform hover:scale-105`}
              >
                <Bell className={isNotified ? (isDarkMode ? 'text-pink-500' : 'text-violet-600') : ''} />
                <span>{isNotified ? 'Notified' : 'Get Notified'}</span>
              </button>
              
              <button 
                className={`flex items-center gap-2 py-2 px-4 rounded-full shadow-lg transition-all ${isDarkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500'} text-white transform hover:scale-105`}
              >
                <Ticket className="w-5 h-5" />
                <span>Buy Tickets</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Preview */}
        <div className={`${panelBg} mb-8 p-6 rounded-lg overflow-hidden shadow-xl`}>
          <h2 className={`text-xl font-bold mb-4 ${highlightText} uppercase tracking-wider flex items-center`}>
            <Camera className="mr-2" />
            <span className="relative">
              EVENT GALLERY
              <span className={`absolute -bottom-1 left-0 w-full h-1 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'}`}></span>
            </span>
          </h2>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-3">
              <img 
                src={eventDetails.gallery[selectedImage]} 
                alt={`Event gallery image ${selectedImage + 1}`} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Manga style decorative corner */}
              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                <div className={`absolute transform rotate-45 -translate-x-10 -translate-y-10 w-20 h-20 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'}`}></div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {eventDetails.gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden cursor-pointer transform transition hover:scale-105 ${selectedImage === idx ? 'ring-2 ring-offset-2 ' + (isDarkMode ? 'ring-pink-500' : 'ring-violet-600') : ''}`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            {/* Enhanced Comic Panel Tabs */}
            <div className={`flex border-b-4 mb-6 ${isDarkMode ? 'border-purple-600' : 'border-violet-500'}`} style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}>
              {['details', 'schedule', 'guests', 'highlights'].map((tab) => (
                <button 
                  key={tab}
                  className={`py-3 px-6 uppercase font-bold tracking-wider transform ${
                    activeTab === tab 
                      ? (isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' : 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white') + ' scale-105 shadow-lg' 
                      : (isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-violet-100 text-gray-600')
                  } transition-all`}
                  style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Content Panels */}
            <div className={`${panelBg} p-6 border-l-4 ${borderColor} transform -rotate-1 mb-8 rounded-lg shadow-xl`}>
              {activeTab === 'details' && (
                <div className="transform rotate-1">
                  {/* Enhanced Description Panel */}
                  <div className="mb-6">
                    <h2 className={`text-2xl font-bold uppercase mb-4 ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'} flex items-center`}>
                      <span className="relative">Event Description
                        <span className={`absolute -bottom-1 left-0 w-full h-1 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'}`}></span>
                      </span>
                    </h2>
                    <div className={`relative ${subtleBg} p-6 rounded`} style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}>
                      {/* Enhanced manga speech bubble styling */}
                      <div className={`absolute w-5 h-5 ${subtleBg} transform rotate-45 -top-2 left-8`}></div>
                      <p className="leading-relaxed">{eventDetails.description}</p>
                      
                      {/* Manga style emphasis */}
                      <div className="absolute -bottom-3 -right-3 w-16 h-16">
                        <div className={`absolute w-full h-full ${isDarkMode ? 'text-pink-500' : 'text-violet-500'} font-bold text-xs flex justify-center items-center transform rotate-12`}>
                          <Sparkles className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Event Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date & Time */}
                    <div className={`${cardBgAccent} p-4 rounded flex items-start transform hover:-rotate-1 transition-transform hover:shadow-xl`} style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}>
                      <Calendar className={`w-12 h-12 mr-4 ${highlightText}`} />
                      <div>
                        <h3 className={`text-lg font-bold ${highlightText} uppercase`}>Date</h3>
                        <p className="text-lg">{eventDetails.date}</p>
                        <div className="flex items-center mt-2">
                          <Clock className={`w-4 h-4 mr-2 ${subtleText}`} />
                          <span className={subtleText}>{eventDetails.time}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div className={`${cardBgAccent} p-4 rounded flex items-start transform hover:rotate-1 transition-transform hover:shadow-xl`} style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}>
                      <MapPin className={`w-12 h-12 mr-4 ${highlightText}`} />
                      <div>
                        <h3 className={`text-lg font-bold ${highlightText} uppercase`}>Location</h3>
                        <p className="text-lg">{eventDetails.location}</p>
                        <button className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-violet-500 hover:text-violet-600'} flex items-center mt-2`}>
                          <span>View Map</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Ticket Information */}
                  <div className="mt-8">
                    <h2 className={`text-2xl font-bold uppercase mb-4 ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'} flex items-center`}>
                      <Ticket className="mr-2" />
                      <span className="relative">Ticket Information
                        <span className={`absolute -bottom-1 left-0 w-full h-1 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'}`}></span>
                      </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {eventDetails.ticketTiers.map((tier, idx) => (
                        <div 
                          key={idx} 
                          className={`${cardBgAccent} p-5 rounded-lg text-center transform hover:scale-105 transition-transform ${idx === 2 ? 'border-2 ' + borderColor : ''}`}
                          style={{ clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)" }}
                        >
                          <h3 className="font-bold text-lg">{tier.name}</h3>
                          <p className={`text-2xl font-black ${highlightText} my-2`}>{tier.price}</p>
                          <ul className="text-sm mb-3 space-y-1">
                            {tier.features.map((feature, fidx) => (
                              <li key={fidx} className="flex items-center justify-center">
                                <span className={`inline-block w-2 h-2 mr-2 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'} rounded-full`}></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <button className={`mt-2 w-full py-2 text-white font-bold rounded ${idx === 2 ? buttonBg : 'bg-gray-600 hover:bg-gray-500'}`}
                                  style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}>
                            {idx === 2 ? 'Get VIP Access' : 'Purchase'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'schedule' && (
                <div className="transform rotate-1">
                  <h2 className={`text-2xl font-bold uppercase mb-4 ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'} flex items-center`}>
                    <span className="relative">Event Schedule
                      <span className={`absolute -bottom-1 left-0 w-full h-1 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'}`}></span>
                    </span>
                  </h2>
                  <div className="space-y-6">
                    {eventDetails.schedule.map((day, idx) => (
                      <div key={idx} className={`${cardBgAccent} p-5 rounded-lg overflow-hidden transform hover:-rotate-1 transition-transform`}
                           style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className={`text-xl font-bold ${highlightText} uppercase`}>{day.day}</h3>
                          <span className={`${isDarkMode ? 'bg-purple-700' : 'bg-violet-200'} py-1 px-3 rounded-full text-sm font-bold ${isDarkMode ? 'text-white' : 'text-violet-800'}`}>
                            {day.date}
                          </span>
                        </div>
                        <ul className="space-y-3">
                          {day.events.map((event, eventIdx) => (
                            <li key={eventIdx} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded flex items-start transform hover:scale-102 transition-transform`}>
                              <div className={`${isDarkMode ? 'bg-purple-700' : 'bg-violet-200'} p-2 rounded text-center mr-3 min-w-16`}>
                                <Clock className={`mx-auto mb-1 w-4 h-4 ${isDarkMode ? 'text-pink-300' : 'text-violet-600'}`} />
                                <span className="text-sm font-bold block">{event.time}</span>
                              </div>
                              <div>
                                <span className="font-bold block">{event.title}</span>
                                <span className={`text-sm ${subtleText}`}>{event.location}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'guests' && (
                <div className="transform rotate-1">
                  <h2 className={`text-2xl font-bold uppercase mb-4 ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'}`}>Special Guests</h2>
                  <ul className="space-y-4">
                    {eventDetails.guests.map((guest, index) => (
                      <li key={index} className={`${cardBgAccent} p-4 flex items-center transform hover:scale-102 transition-transform`} 
                          style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}>
                        <div className={`mr-4 ${isDarkMode ? 'bg-purple-600' : 'bg-violet-500'} w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl text-white`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-bold text-lg">{guest.name}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'highlights' && (
                <div className="transform rotate-1">
                  <h2 className={`text-2xl font-bold uppercase mb-4 ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'}`}>Event Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {eventDetails.highlights.map((highlight, index) => (
                      <div key={index} className={`${cardBgAccent} p-4 rounded transform -rotate-1 hover:rotate-0 transition-transform`}
                           style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}>
                        <div className="flex">
                          <Star className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0" />
                          <p className="font-medium">{highlight.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Trailer Section */}
            <div className={`${panelBg} p-6 mb-8 rounded-lg`}>
              <div className="flex items-center mb-4">
                <PlayCircle className={`w-6 h-6 mr-2 ${highlightText}`} />
                <h2 className={`text-2xl font-bold uppercase ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'}`}>Event Trailer</h2>
              </div>
              <iframe className='mx-auto rounded-lg' width="720" height="400" src="https://www.youtube.com/embed/SEv4YeRbrSk?si=357Y7UZ3ojDWnr0Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            
            {/* Register Button */}
            <div className="text-center mb-8">
              <button 
                className={`${buttonBg} px-12 py-4 text-xl font-black uppercase tracking-wider transform rotate-1 transition-transform hover:scale-105 shadow-xl text-white`}
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
              >
                Register Now!
              </button>
            </div>
          </div>
          
          {/* Sidebar */}
          <EventSidebar isDarkMode={false} eventDetails={eventDetails}/></div>
        
        {/* Discussion Section */}
        <div className={`mt-8 ${panelBg} p-6 transform rotate-1 rounded-lg`} 
             style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" }}>
          <div className="transform -rotate-1">
            <div className="flex items-center mb-4">
              <MessageCircle className={`w-6 h-6 mr-2 ${highlightText}`} />
              <h2 className={`text-2xl font-bold uppercase ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'}`}>Discussion</h2>
            </div>
            <div className={`${subtleBg} p-4 mb-4 rounded-lg`}>
              <textarea 
                className={`w-full ${inputBg} ${baseTextClass} p-3 rounded border ${isDarkMode ? 'border-gray-700 focus:border-purple-500' : 'border-gray-300 focus:border-violet-500'} focus:outline-none`}
                rows={3}
                placeholder="Share your thoughts about this event..."
              ></textarea>
              <div className="flex justify-end mt-2">
                <button 
                  className={`${accentButtonBg} px-4 py-2 font-bold uppercase text-sm transition-colors text-white`}
                  style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
                >
                  Post Comment
                </button>
              </div>
            </div>

            {/* Sample comments */}
            <div className="space-y-4">
              {[
                { user: "AniMaster42", comment: "Super excited for the Chainsaw Man panel! Anyone else planning to go?", time: "2 hours ago", likes: 24 },
                { user: "CosplayQueen", comment: "Working on my costume for the masquerade! Hope to see everyone there!", time: "Yesterday", likes: 47 }
              ].map((comment, index) => (
                <div key={index} className={`${subtleBg} p-4 rounded-lg`}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-violet-200'} flex items-center justify-center font-bold text-lg mr-3`}>
                        {comment.user.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold">{comment.user}</h4>
                        <p className={`text-xs ${subtleText}`}>{comment.time}</p>
                      </div>
                    </div>
                    <div className={`text-sm flex items-center ${isDarkMode ? 'text-pink-400' : 'text-violet-500'}`}>
                      <Heart className="w-4 h-4 mr-1" />
                      <span>{comment.likes}</span>
                    </div>
                  </div>
                  <p className="mt-2">{comment.comment}</p>
                </div>
              ))}
            </div>

            <button className={`w-full mt-4 py-2 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} text-center rounded-lg font-medium`}>
              View All Comments
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`mt-8 ${panelBg} p-6 rounded-lg`}>
          <h2 className={`text-2xl font-bold uppercase mb-6 ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'}`}>FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What is the cosplay policy?", 
                a: "All cosplays are welcome! Please note that prop weapons must be peace-bonded at the security check." },
              { q: "Is there re-entry allowed?", 
                a: "Yes, your badge allows for unlimited re-entry during event hours." },
              { q: "Are there age restrictions?", 
                a: "The main event is open to all ages. Some special panels and late-night events may be 18+." }
            ].map((faq, idx) => (
              <div key={idx} className={`${subtleBg} p-4 rounded-lg`}>
                <h3 className={`font-bold text-lg mb-2 ${highlightText}`}>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <Newsletter darkMode={isDarkMode} accentBg={accentBg} accentColor={accentColor} themeClass={themeClass} secondaryBg={secondaryBg}/>
      </div>
        <Footer categories={categories}/>
      
      {/* Custom CSS for manga-style text shadows */}
      <style jsx>{`
        .text-shadow-manga {
          text-shadow: 3px 3px 0px ${isDarkMode ? '#EC4899' : '#7C3AED'};
        }
        .text-shadow-pink {
          text-shadow: 2px 2px 0px #EC4899;
        }
        .text-shadow-purple {
          text-shadow: 2px 2px 0px #7C3AED;
        }
        .scale-102 {
          transform: scale(1.02);
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(-1deg); }
        }
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}