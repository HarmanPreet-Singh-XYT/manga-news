'use client'
import { useState, useEffect } from 'react';
import { 
  Calendar, Clock, MapPin, Heart, Users, Star, 
  Flame as Fire, Tag, MessageCircle, Moon, Sun, 
  Image, Ticket, Camera, ChevronRight, Share2,
  Award, Bell, PlayCircle,
  Sparkles,
  ChevronDown,
  Flag,
  HelpCircle,
  Link,
  MessageSquare,
  Smile,
  Music
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
      { name: "Makoto Shinkai", role: "Director", image: "https://cdn.mainichi.jp/vol1/2023/04/14/20230414p2g00m0et037000p/8.jpg?1" },
      { name: "LiSA", role: "Musical Artist", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqE-SFLVKBhfhUtApy67KFancl9VWHF1hUIQ&s" },
      { name: "Yuki Kaji", role: "Voice Actor", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/27th_Tokyo_International_Film_Festival_Y%C5%ABki_Kaji.jpg/1200px-27th_Tokyo_International_Film_Festival_Y%C5%ABki_Kaji.jpg" },
      { name: "MAPPA Studio", role: "Special Showcase", image: "https://blog.sakugabooru.com/wp-content/uploads/2017/09/mappa_intro-1038x576.png" },
      { name: "Chainsaw Man Cast", role: "Panel & Signing", image: "https://upload.wikimedia.org/wikipedia/en/3/3a/Chainsaw_Man_characters.png" }
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
  const getHighlightIcon = (iconName) => {
    switch(iconName) {
      case 'film': return <Camera className="w-6 h-6 text-pink-500" />;
      case 'mic': return <PlayCircle className="w-6 h-6 text-blue-500" />;
      case 'costume': return <Award className="w-6 h-6 text-yellow-500" />;
      case 'brush': return <Smile className="w-6 h-6 text-green-500" />;
      case 'music': return <Music className="w-6 h-6 text-purple-500" />;
      default: return <Star className="w-6 h-6 text-yellow-500" />;
    }
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
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eventDetails.guests.map((guest, index) => (
                  <li key={index} 
                      className={`${cardBgAccent} p-4 flex items-center transform hover:scale-105 transition-all duration-300 shadow-lg`}
                      style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}>
                    <div className={`mr-4 overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-purple-700 to-pink-600' : 'bg-gradient-to-br from-violet-500 to-indigo-600'} w-16 h-16 flex items-center justify-center rounded-full shadow-inner border-2 ${isDarkMode ? 'border-pink-500' : 'border-violet-300'}`}>
                      <img src={guest.image} alt={guest.name} className="object-cover w-12 h-12 rounded-full" />
                    </div>
                    <div>
                      <p className="font-black text-lg tracking-wide">{guest.name}</p>
                      <p className={`text-sm ${isDarkMode ? 'text-pink-400' : 'text-violet-600'}`}>{guest.role}</p>
                    </div>
                    <div className={`ml-auto ${isDarkMode ? 'text-pink-300' : 'text-violet-400'} opacity-50`}>
                      <Star className="w-5 h-5" />
                    </div>
                  </li>
                ))}
              </ul>
                </div>
              )}
              
              {activeTab === 'highlights' && (
                <div className="transform rotate-1">
                  <h2 className={`text-2xl font-bold uppercase mb-4 ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'}`}>Event Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eventDetails.highlights.map((highlight, index) => (
                  <div key={index} 
                       className={`${cardBgAccent} p-5 rounded transform -rotate-1 hover:rotate-0 transition-all duration-300 shadow-lg`}
                       style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}>
                    <div className="flex items-center">
                      <div className={`mr-4 p-2 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-violet-100'}`}>
                        {getHighlightIcon(highlight.icon)}
                      </div>
                      <p className="font-bold tracking-wide text-base">{highlight.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`w-full mt-8 p-3 rounded-md ${isDarkMode ? 'bg-slate-800' : 'bg-violet-50'} border-l-4 ${isDarkMode ? 'border-pink-500' : 'border-violet-400'} flex items-center`}>
                <Star className={`w-6 h-6 mr-3 ${highlightText}`} />
                <p className="text-sm">Plus many more surprises to be announced closer to the event!</p>
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
            <div className="text-center mb-12 mt-10">
        <div className="relative inline-block">
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-16 h-16 transform rotate-12 opacity-70">
            <Star className={`w-full h-full ${isDarkMode ? 'text-pink-500' : 'text-violet-400'}`} />
          </div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 transform -rotate-12 opacity-70">
            <Star className={`w-full h-full ${isDarkMode ? 'text-purple-500' : 'text-indigo-400'}`} />
          </div>
          
          {/* Main button */}
          <button
            className={`${buttonBg} px-16 py-5 text-2xl font-black uppercase tracking-wider transform rotate-1 transition-all duration-300 hover:scale-105 hover:rotate-2 shadow-xl text-white relative z-10`}
            style={{ 
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              boxShadow: isDarkMode ? 
                "0 0 20px rgba(216, 180, 254, 0.5), 0 0 40px rgba(249, 168, 212, 0.2)" : 
                "0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(167, 139, 250, 0.2)"
            }}
          >
            Register Now!
          </button>
        </div>
        
        <p className={`mt-4 text-sm ${isDarkMode ? 'text-slate-400' : 'text-violet-600'}`}>
          Early bird pricing ends May 1st, 2025
        </p>
      </div>
          </div>
          
          {/* Sidebar */}
          {/* <div className="lg:col-span-1">
            
            <div className={`${panelBg} p-6 mb-6 transform rotate-1 rounded-lg`} 
                 style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}>
              <div className="transform -rotate-1">
                <h2 className={`text-xl font-bold uppercase mb-4 ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'}`}>Event Stats</h2>
                
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`${subtleText} font-bold`}>Popularity</span>
                    <span className={`font-bold ${isDarkMode ? 'text-purple-400' : 'text-violet-500'}`}>{eventDetails.popularity}/100</span>
                  </div>
                  <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3`}>
                    <div 
                      className={`bg-gradient-to-r ${isDarkMode ? 'from-purple-600 to-pink-500' : 'from-violet-500 to-fuchsia-500'} h-3 rounded-full`} 
                      style={{ width: `${eventDetails.popularity}%` }}
                    ></div>
                  </div>
                </div>
                
                
                <div className={`flex items-center justify-between p-3 ${subtleBg} mb-6 rounded transform -rotate-1 hover:rotate-0 transition-transform`}>
                  <div className="flex items-center">
                    <Users className={`w-6 h-6 mr-2 ${isDarkMode ? 'text-purple-400' : 'text-violet-500'}`} />
                    <span className="font-bold">Fans</span>
                  </div>
                  <div className="font-bold text-lg">{fansCount.toLocaleString()}</div>
                </div>
                
                
                <button 
                  onClick={handleLike}
                  className={`w-full py-3 flex items-center justify-center font-bold text-lg transition-colors ${
                    isLiked 
                      ? (isDarkMode ? 'bg-pink-600 text-white' : 'bg-violet-600 text-white') 
                      : (isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600')
                  }`}
                  style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
                >
                  <Heart className={`mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{isLiked ? 'Liked!' : 'Like Event'}</span>
                </button>

                
                <button 
                  className={`w-full mt-3 py-3 flex items-center justify-center font-bold text-lg transition-colors ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'}`}
                  style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
                >
                  <Share2 className="mr-2" />
                  <span>Share Event</span>
                </button>
              </div>
            </div>

            
            <div className={`${panelBg} p-6 mb-6 rounded-lg`}>
              <h2 className={`text-xl font-bold uppercase mb-4 ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'}`}>
                <Award className="inline-block mr-2" />
                Featured Artist
              </h2>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-pink-500">
                  <img src="https://cdn.mainichi.jp/vol1/2023/04/14/20230414p2g00m0et037000p/8.jpg?1" alt="Featured Artist" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold">Makoto Shinkai</h3>
                <p className={subtleText}>Film Director & Animator</p>
                <p className="mt-3 text-sm">Join a special screening of Makoto Shinkai's upcoming film, followed by a Q&A session on Day 2!</p>
                <button className={`mt-4 px-6 py-2 rounded ${accentButtonBg} text-white font-bold`}>
                  See Schedule
                </button>
              </div>
            </div>
            
            
            <div className={`${panelBg} p-6 transform -rotate-1 rounded-lg`} 
                 style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}>
              <div className="transform rotate-1">
                <h2 className={`text-xl font-bold uppercase mb-4 ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'}`}>Related Events</h2>
                <div className="space-y-4">
                  {[
                    { name: "Manga Creator Conference 2025", date: "Aug 12-14, 2025", img: "https://res-1.cloudinary.com/dbm1qiew0/image/upload/q_auto/v1/blog-images/A-comprehensive-guide-to-Tokyo-s-anime-and-manga-events-in-2025.jpg" },
                    { name: "J-Pop Summer Festival", date: "July 18-20, 2025", img: "https://i.scdn.co/image/ab67616d0000b27380e51788b1abdfa4aee98858" },
                    { name: "Cosplay Champions Tournament", date: "July 7, 2025", img: "https://dreamhack.com/india/wp-content/uploads/sites/21/2023/09/dominance.jpg" }
                  ].map((event, index) => (
                    <div key={index} className={`flex items-center ${subtleBg} p-3 transform hover:scale-102 transition-transform rounded-lg`}
                         style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}>
                      <img src={event.img} alt={event.name} className="w-16 h-16 object-cover mr-3 rounded" />
                      <div>
                        <h3 className="font-bold">{event.name}</h3>
                        <p className={`${subtleText} text-sm`}>{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
          <EventSidebar isDarkMode={isDarkMode} eventDetails={eventDetails}/>
          </div>
        
        {/* Discussion Section with Enhanced Anime/Manga Styling */}
<div className={`mt-8 ${panelBg} p-6 transform rotate-1 rounded-lg shadow-lg`} 
     style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" }}>
  <div className="transform -rotate-1">
    <div className="flex items-center mb-4">
      <MessageCircle className={`w-6 h-6 mr-2 ${highlightText}`} />
      <h2 className={`text-2xl font-bold uppercase ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'} tracking-wider`}>
        Fan Discussion
      </h2>
      <div className={`ml-2 px-2 py-1 text-xs font-bold ${isDarkMode ? 'bg-pink-900 text-pink-200' : 'bg-violet-200 text-violet-800'} rounded-full`}>
        {Math.floor(Math.random() * 50) + 20} ONLINE
      </div>
    </div>
    
    <div className={`${subtleBg} p-4 mb-4 rounded-lg border-l-4 ${isDarkMode ? 'border-pink-600' : 'border-violet-500'}`}>
      <textarea 
        className={`w-full ${inputBg} ${baseTextClass} p-3 rounded border ${isDarkMode ? 'border-gray-700 focus:border-pink-500' : 'border-gray-300 focus:border-violet-500'} focus:outline-none`}
        rows={3}
        placeholder="Share your anime thoughts or fan theories..."
      ></textarea>
      
      <div className="flex justify-between items-center mt-3">
        <div className="flex space-x-2">
          <button className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
            <Image className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
            <Smile className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
            <Link className="w-5 h-5" />
          </button>
        </div>
        
        <button 
          className={`${accentButtonBg} px-5 py-2 font-bold uppercase text-sm transition-all duration-300 text-white hover:scale-105`}
          style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
        >
          Post →
        </button>
      </div>
    </div>

    {/* Enhanced Comment Section */}
    <div className="space-y-4">
      {[
        { 
          user: "AniMaster42", 
          avatar: "👺", 
          badge: "Otaku Elite", 
          comment: "Super excited for the Chainsaw Man panel! Anyone else planning to go? I heard they might announce season 2!", 
          time: "2 hours ago", 
          likes: 24,
          replies: 3
        },
        { 
          user: "CosplayQueen", 
          avatar: "🦋", 
          badge: "Cosplay Pro", 
          comment: "Working on my Marin Kitagawa costume for the masquerade! Stop by and say hi if you see me!", 
          time: "Yesterday", 
          likes: 47,
          replies: 6
        },
        { 
          user: "MangaCollector", 
          avatar: "📚", 
          badge: "Manga Guru", 
          comment: "Anyone know if the manga market will have the limited edition Jujutsu Kaisen volumes? Been hunting them for months!", 
          time: "2 days ago", 
          likes: 31,
          replies: 4
        }
      ].map((comment, index) => (
        <div key={index} className={`${subtleBg} p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}>
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-violet-200'} flex items-center justify-center font-bold text-lg mr-3`}>
                {comment.avatar}
              </div>
              <div>
                <div className="flex items-center">
                  <h4 className="font-bold">{comment.user}</h4>
                  <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${isDarkMode ? 'bg-pink-900 text-pink-200' : 'bg-violet-200 text-violet-800'}`}>
                    {comment.badge}
                  </span>
                </div>
                <p className={`text-xs ${subtleText}`}>{comment.time}</p>
              </div>
            </div>
            <div className={`text-sm flex items-center ${isDarkMode ? 'text-pink-400' : 'text-violet-500'}`}>
              <Heart className={`w-4 h-4 mr-1 cursor-pointer transition hover:scale-125 ${Math.random() > 0.7 ? (isDarkMode ? 'fill-pink-400' : 'fill-violet-500') : ''}`} />
              <span>{comment.likes}</span>
            </div>
          </div>
          <p className="mt-2">{comment.comment}</p>
          <div className="flex mt-3 space-x-4 text-sm">
            <button className={`flex items-center ${subtleText} hover:${highlightText}`}>
              <MessageSquare className="w-4 h-4 mr-1" />
              <span>Reply</span>
              {comment.replies > 0 && <span className="ml-1">({comment.replies})</span>}
            </button>
            <button className={`flex items-center ${subtleText} hover:${highlightText}`}>
              <Share2 className="w-4 h-4 mr-1" />
              <span>Share</span>
            </button>
            <button className={`flex items-center ${subtleText} hover:${highlightText}`}>
              <Flag className="w-4 h-4 mr-1" />
              <span>Report</span>
            </button>
          </div>
        </div>
      ))}
    </div>

    <button className={`w-full mt-4 py-2 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} text-center rounded-lg font-medium flex justify-center items-center gap-2 transform transition-all duration-300 hover:scale-105`}>
      <span>View All Comments</span>
      <ChevronDown className="w-4 h-4" />
    </button>
  </div>
</div>

{/* Enhanced FAQ Section */}
<div className={`mt-12 ${panelBg} p-6 rounded-lg border-t-4 ${isDarkMode ? 'border-pink-600' : 'border-violet-500'} shadow-lg`}>
  <div className="flex items-center mb-6">
    <HelpCircle className={`w-6 h-6 mr-2 ${highlightText}`} />
    <h2 className={`text-2xl font-bold uppercase ${isDarkMode ? 'text-shadow-pink' : 'text-shadow-purple'} tracking-wider`}>Anime Con FAQ</h2>
  </div>
  
  <div className="space-y-4">
    {[
      { 
        q: "What is the cosplay policy?", 
        a: "All cosplays are welcome! Please note that prop weapons must be peace-bonded at the security check. Oversized props may need special approval.",
        icon: "Wand2"
      },
      { 
        q: "Is there re-entry allowed?", 
        a: "Yes, your badge allows for unlimited re-entry during event hours. Make sure to get your hand stamped when exiting if you plan to return the same day.",
        icon: "RepeatIcon"
      },
      { 
        q: "Are there age restrictions?", 
        a: "The main event is open to all ages. Some special panels and late-night events may be 18+ and will require ID verification. These events will be clearly marked in the program.",
        icon: "CalendarIcon"
      },
      {
        q: "What's included in the VIP Otaku Package?",
        a: "The VIP Otaku Package includes: priority panel seating, exclusive meet & greet opportunities, special merchandise bundle, and access to the VIP lounge with complimentary refreshments.",
        icon: "Star"
      },
      {
        q: "Where can I get food at the convention?",
        a: "The convention center has multiple food vendors including themed cafes with anime-inspired menus! Look for the 'Maid Cafe', 'Titan Burgers', and 'Spirited Away Snacks' locations on the venue map.",
        icon: "Utensils"
      }
    ].map((faq, idx) => (
      <div 
        key={idx} 
        className={`${subtleBg} p-4 rounded-lg cursor-pointer transform transition-all duration-300 hover:shadow-md group`}
      >
        <div className="flex items-start">
          <div className={`p-2 rounded-full ${isDarkMode ? 'bg-pink-900/50' : 'bg-violet-100'} mr-3 group-hover:scale-110 transition-transform`}>
            {/* This is a placeholder for the icon reference */}
            <span className={`w-5 h-5 block ${highlightText}`}>
              {faq.icon.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <h3 className={`font-bold text-lg mb-2 ${highlightText} group-hover:underline`}>{faq.q}</h3>
            <p className="leading-relaxed">{faq.a}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-80">
    <p className="text-center text-sm">
      Can't find what you're looking for? Visit the <span className={`font-bold ${highlightText}`}>Information Booth</span> at the convention center or contact <span className={`font-bold ${highlightText}`}>support@animecon.com</span>
    </p>
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