'use client'
import React, { useState, useEffect } from 'react';
import { Star, Heart, Calendar, Clock, Globe, Users, Play, Bookmark, Share2, ChevronRight, Award, X, ThumbsUp, Menu, Bell } from 'lucide-react';
import { useParams } from 'next/navigation';
import { animeData } from '@/app/data';

export default function AnimeMangaDetailsPage({ darkMode = false }) {
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const params = useParams<{ id:string }>()
  const [activeTab, setActiveTab] = useState('overview');
  const [bookmarked, setBookmarked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  
  // Theme and styling variables
  const themeClass = darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900';
  const accentColor = darkMode ? 'text-pink-500' : 'text-violet-600';
  const accentBg = darkMode ? 'bg-pink-500' : 'bg-violet-600';
  const secondaryBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';
  const subtleTextColor = darkMode ? 'text-gray-300' : 'text-gray-600';
  const accentShadow = darkMode ? 'shadow-pink-500/40' : 'shadow-violet-600/40';
  const buttonHoverEffect = 'hover:scale-105 transition-transform duration-300';
  const cardHoverClass = 'transition-all duration-300 hover:shadow-lg';
  
  const anime = animeData[(parseInt(params.id))-1] || {
    title: "Celestial Blade Chronicles",
    originalTitle: "天空の刃物語",
    rating: 4.8,
    year: 2024,
    episodesCount: 24,
    status: "Ongoing",
    airDay: "Sundays",
    genres: ["Action", "Fantasy", "Supernatural", "Drama"],
    studios: ["Stellar Animations"],
    description: "In a world where celestial fragments grant extraordinary powers, a young swordsman named Akira discovers an ancient blade containing the spirit of a fallen star. As darkness threatens to engulf the realm, Akira must master the blade's power while navigating political intrigue and confronting enemies who seek to harness cosmic forces for destruction.",
    longDescription: "In a world where celestial fragments grant extraordinary powers, a young swordsman named Akira discovers an ancient blade containing the spirit of a fallen star. As darkness threatens to engulf the realm, Akira must master the blade's power while navigating political intrigue and confronting enemies who seek to harness cosmic forces for destruction.\n\nThe story begins in the peaceful village of Hoshigakure, where Akira lives with his grandfather, a retired swordsmith. When mysterious invaders attack their village seeking an ancient artifact, Akira's grandfather reveals a family secret: a celestial blade passed down through generations. As his grandfather falls in battle, Akira inherits the sword and discovers he can communicate with the spirit within—Stella, a fallen star with memories of a cosmic war that nearly destroyed the world centuries ago.\n\nNow hunted by the Umbra Coalition, a secretive organization seeking to harness celestial power, Akira must learn to control the blade's abilities while uncovering the truth about his lineage and the impending return of an ancient threat from beyond the stars.",
    image: "/api/placeholder/500/700",
    coverImage: "/api/placeholder/1920/600",
    trailer: "/api/placeholder/800/450",
    episodes: [
      { number: 1, title: "The Falling Star", duration: "24 min", thumbnail: "/api/placeholder/120/70" },
      { number: 2, title: "Awakening", duration: "24 min", thumbnail: "/api/placeholder/120/70" },
      { number: 3, title: "The First Trial", duration: "24 min", thumbnail: "/api/placeholder/120/70" },
    ],
    characters: [
      { name: "Akira Hoshino", role: "Protagonist", image: "/api/placeholder/150/150", description: "A 17-year-old swordsman who inherits the celestial blade. Kind but determined, he struggles with the weight of his newfound responsibility." },
      { name: "Yuki Shimizu", role: "Deuteragonist", image: "/api/placeholder/150/150", description: "A mysterious girl with knowledge of celestial magic who helps Akira understand his powers. She harbors secrets about her own past." },
      { name: "Ryo Kurosaki", role: "Antagonist", image: "/api/placeholder/150/150", description: "The charismatic leader of the Umbra Coalition who believes controlling celestial power is humanity's destiny." },
      { name: "Mei Lin", role: "Supporting", image: "/api/placeholder/150/150", description: "A skilled martial artist and childhood friend of Akira who joins his journey." },
      { name: "Stella", role: "Spiritual Guide", image: "/api/placeholder/150/150", description: "The fallen star spirit within Akira's blade, guiding him while recovering her memories." },
      { name: "Hiroshi Tanaka", role: "Supporting", image: "/api/placeholder/150/150", description: "An eccentric scholar researching celestial phenomena." }
    ],
    reviews: [
      { user: "MangaMaster42", rating: 5, comment: "Absolutely stunning animation and compelling storyline!", avatar: "/api/placeholder/40/40", likes: 248, date: "2 days ago" },
      { user: "AnimeEnjoyer", rating: 4.5, comment: "The character development is incredible. Can't wait for the next episode!", avatar: "/api/placeholder/40/40", likes: 176, date: "1 week ago" },
      { user: "CosmosFan", rating: 4, comment: "Beautiful art style and interesting concept. The pacing drags a bit in episode 3 but overall a fantastic series so far.", avatar: "/api/placeholder/40/40", likes: 89, date: "3 weeks ago" }
    ],
    relatedWorks: [
      { title: "Starfall Academy", type: "Manga", image: "/api/placeholder/220/320", status: "Ongoing" },
      { title: "Cosmic Warrior", type: "Anime", image: "/api/placeholder/220/320", status: "Completed" },
      { title: "Celestial Blade: Origins", type: "Light Novel", image: "/api/placeholder/220/320", status: "New Release" }
    ],
    soundtrack: [
      { title: "Celestial Awakening", artist: "Hiroyuki Sawano", type: "Opening Theme" },
      { title: "Starlight Memories", artist: "Aimer", type: "Ending Theme" },
      { title: "Blade of Destiny", artist: "Sawano Hiroyuki", type: "Insert Song" }
    ],
    gallery:[]
  };

  // Show notification when bookmark is clicked
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    setShowNotification(true);
  };

  // Render different content based on active tab
  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <>
            {/* About Section */}
            <div className="mb-12 relative">
              <div className={`absolute top-0 -left-4 w-2 h-full ${accentBg}`}></div>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center" 
                  style={{ textShadow: darkMode ? "2px 2px 0px #7C3AED" : "2px 2px 0px #8B5CF6" }}>
                SYNOPSIS
                <div className={`ml-4 flex-1 h-px ${darkMode ? 'bg-gradient-to-r from-purple-600 to-transparent' : 'bg-gradient-to-r from-violet-600 to-transparent'}`}></div>
              </h2>
              
              <div className={`relative ${secondaryBg} p-6 mb-8 shadow-lg`} style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 0 97%)" }}>
                <div className={`absolute top-0 right-0 w-24 h-24 opacity-10`} style={{ background: darkMode ? "radial-gradient(circle, #EC4899 0%, transparent 70%)" : "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}></div>
                <p className="text-lg relative z-10 whitespace-pre-line">{anime.longDescription}</p>
              </div>
            </div>
            
            {/* Trailer Section */}
            <div className="mb-12 relative">
              <div className={`absolute top-0 -left-4 w-2 h-full ${darkMode ? 'bg-yellow-500' : 'bg-violet-400'}`}></div>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center" 
                  style={{ textShadow: darkMode ? "2px 2px 0px #F59E0B" : "2px 2px 0px #8B5CF6" }}>
                TRAILER
                <div className={`ml-4 flex-1 h-px ${darkMode ? 'bg-gradient-to-r from-yellow-500 to-transparent' : 'bg-gradient-to-r from-violet-400 to-transparent'}`}></div>
              </h2>
              
              <div className="relative cursor-pointer group" onClick={() => setIsTrailerPlaying(!isTrailerPlaying)}>
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 group-hover:from-black/40 transition-all"></div> */}
                <iframe className='mx-auto rounded-lg' width="720" height="400" src={anime.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </>
        );
      case 'characters':
        return (
          <div className="mb-12 relative">
            <div className={`absolute top-0 -left-4 w-2 h-full ${darkMode ? 'bg-purple-600' : 'bg-violet-600'}`}></div>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center" 
                style={{ textShadow: darkMode ? "2px 2px 0px #8B5CF6" : "2px 2px 0px #8B5CF6" }}>
              CHARACTERS
              <div className={`ml-4 flex-1 h-px ${darkMode ? 'bg-gradient-to-r from-purple-600 to-transparent' : 'bg-gradient-to-r from-violet-600 to-transparent'}`}></div>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {anime.characters.map((character, index) => (
                <div 
                  key={index} 
                  className={`${secondaryBg} transition-transform cursor-pointer shadow-lg ${cardHoverClass} overflow-hidden`}
                  style={{ 
                    transform: `rotate(${index % 3 === 0 ? -1 : index % 3 === 1 ? 0 : 1}deg)`,
                    clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)"
                  }}
                >
                  <div className="relative">
                    <img 
                      src={character.image} 
                      alt={character.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className={`absolute top-0 right-0 m-2 ${darkMode ? 'bg-pink-500' : 'bg-violet-600'} text-white px-2 py-1 text-xs font-bold`}>
                      {character.role.toUpperCase()}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-lg mb-1">{character.name}</h3>
                    <p className={`text-sm ${subtleTextColor} mb-2`}>{character.description}</p>
                    <button className={`w-full text-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} py-1 transition-colors font-bold text-sm`}>
                      SEE MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'episodes':
        return (
          <div className="mb-12 relative">
            <div className={`absolute top-0 -left-4 w-2 h-full ${accentBg}`}></div>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center" 
                style={{ textShadow: darkMode ? "2px 2px 0px #EC4899" : "2px 2px 0px #8B5CF6" }}>
              EPISODES
              <div className={`ml-4 flex-1 h-px ${darkMode ? 'bg-gradient-to-r from-pink-600 to-transparent' : 'bg-gradient-to-r from-violet-600 to-transparent'}`}></div>
            </h2>
            
            <div className={`p-4 mb-6 ${secondaryBg} shadow-md flex justify-between items-center`} style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}>
              <span className="font-bold">New episode every {anime.airDay}</span>
              <span className={`${accentBg} text-white px-3 py-1 text-sm font-bold`}>NEXT: EP {anime.episodes.length + 1}</span>
            </div>
            
            <div className="space-y-4">
              {anime.episodes.map((episode, index) => (
                <div 
                  key={index}
                  className={`${secondaryBg} p-4 shadow-md flex gap-4 cursor-pointer hover:shadow-lg transition-all`}
                  style={{ 
                    clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                    transform: `rotate(${index % 2 === 0 ? -0.3 : 0.3}deg)`
                  }}
                >
                  <img src={anime.coverImage} alt={`Episode ${episode.number}`} className="w-24 h-16 object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className={`inline-block ${accentBg} text-white px-2 py-0.5 text-xs font-bold mb-1`}>EP {episode.number}</span>
                        <h3 className="font-bold">{episode.title}</h3>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className={accentColor} />
                        <span className="text-sm">{episode.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${accentBg} flex items-center justify-center shadow-md`}>
                      <Play size={16} className="ml-0.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button 
                className={`inline-flex items-center gap-2 ${secondaryBg} border-2 ${darkMode ? 'border-pink-600' : 'border-violet-600'} px-6 py-2 font-bold ${buttonHoverEffect} shadow-md`}
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
              >
                VIEW ALL EPISODES
                <ChevronRight size={16} className={accentColor} />
              </button>
            </div>
          </div>
        );
      case 'reviews':
        return (
          <div className="mb-12 relative">
            <div className={`absolute top-0 -left-4 w-2 h-full ${accentBg}`}></div>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center" 
                style={{ textShadow: darkMode ? "2px 2px 0px #EC4899" : "2px 2px 0px #8B5CF6" }}>
              REVIEWS
              <div className={`ml-4 flex-1 h-px ${darkMode ? 'bg-gradient-to-r from-pink-600 to-transparent' : 'bg-gradient-to-r from-violet-600 to-transparent'}`}></div>
            </h2>
            
            <div className={`p-4 mb-6 ${secondaryBg} shadow-md flex justify-between items-center`} style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-black">{anime.rating}</span>
                <div className="flex pb-1">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} size={16} className={i < Math.floor(anime.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-400"} />
                  ))}
                </div>
              </div>
              <button className={`${accentBg} text-white px-4 py-2 text-sm font-bold`}>
                WRITE REVIEW
              </button>
            </div>
            
            {anime.reviews.map((review, index) => (
              <div 
                key={index}
                className={`mb-4 ${secondaryBg} p-4 relative shadow-md ${cardHoverClass}`}
                style={{ 
                  clipPath: "polygon(0 0, 98% 0, 100% 20%, 100% 100%, 2% 100%, 0 80%, 0 0)",
                  transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <img src={anime.characters[0].image} alt={review.user} className="w-10 h-10 overflow-hidden object-cover rounded-full" />
                    <div>
                      <div className="font-bold">{review.user}</div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span>{review.rating}/5</span>
                  </div>
                </div>
                <p className="mb-3">{review.comment}</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center gap-1 text-sm">
                    <ThumbsUp size={14} className={accentColor} />
                    <span>{review.likes}</span>
                  </button>
                  <button className="text-sm">Reply</button>
                </div>
              </div>
            ))}
            
            <div className="mt-6 text-center">
              <button 
                className={`inline-flex items-center gap-2 ${secondaryBg} border-2 ${darkMode ? 'border-pink-600' : 'border-violet-600'} px-6 py-2 font-bold ${buttonHoverEffect} shadow-md`}
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
              >
                READ MORE REVIEWS
                <ChevronRight size={16} className={accentColor} />
              </button>
            </div>
          </div>
        );
      case 'gallery':
        return (
          <div className="mb-12 relative">
            <div className={`absolute top-0 -left-4 w-2 h-full ${darkMode ? 'bg-yellow-500' : 'bg-violet-400'}`}></div>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center" 
                style={{ textShadow: darkMode ? "2px 2px 0px #F59E0B" : "2px 2px 0px #8B5CF6" }}>
              GALLERY
              <div className={`ml-4 flex-1 h-px ${darkMode ? 'bg-gradient-to-r from-yellow-500 to-transparent' : 'bg-gradient-to-r from-violet-400 to-transparent'}`}></div>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {anime.gallery.map((_, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden cursor-pointer group"
                  style={{ 
                    transform: `rotate(${(index % 3) - 1}deg)`,
                    clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)"
                  }}
                >
                  <img 
                    src={_}
                    alt={`Gallery image ${index+1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`${accentBg} p-2 rounded-full`}>
                      <Plus size={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button 
                className={`inline-flex items-center gap-2 ${secondaryBg} border-2 ${darkMode ? 'border-yellow-600' : 'border-violet-600'} px-6 py-2 font-bold ${buttonHoverEffect} shadow-md`}
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
              >
                VIEW FULL GALLERY
                <ChevronRight size={16} className={accentColor} />
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Custom Plus icon for gallery
  const Plus = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  return (
    <div className={`${themeClass} min-h-screen font-sans transition-colors duration-300`}>
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-50 ${secondaryBg} border-b ${borderColor} px-4 py-3 flex justify-between items-center`}>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu size={24} className={accentColor} />
        </button>
        <div className="text-center">
          <h2 className="font-bold text-lg truncate max-w-xs">{anime.title}</h2>
        </div>
        <div>
          <Bell size={20} className={subtleTextColor} />
        </div>
      </div>
      
      {/* Mobile Menu Sidebar */}
      <div className={`fixed inset-0 z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute inset-y-0 left-0 w-64 ${secondaryBg} shadow-xl transform`} style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 0 100%)" }}>
          <div className="p-4 border-b border-gray-700">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl">Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="p-4">
            <nav className="space-y-3">
              {['Overview', 'Characters', 'Episodes', 'Reviews', 'Gallery'].map((item) => (
                <a 
                  key={item} 
                  href="#"
                  className={`block py-2 px-3 font-medium ${activeTab === item.toLowerCase() ? accentColor : ''}`}
                  onClick={() => {
                    setActiveTab(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-8 pt-4 border-t border-gray-700">
              <button className={`w-full ${accentBg} text-white py-2 font-bold rounded-sm mb-3`}>
                LOG IN
              </button>
              <div className="text-sm text-center">
                New to Anime Portal? <a href="#" className={accentColor}>Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-6 right-6 z-50 animate-fadeIn">
          <div className={`${secondaryBg} shadow-lg p-4 flex items-center gap-3 border-l-4 ${bookmarked ? 'border-green-500' : 'border-red-500'}`}>
            <div className={bookmarked ? 'text-green-500' : 'text-red-500'}>
              <Bookmark size={24} className={bookmarked ? 'fill-green-500' : ''} />
            </div>
            <div>
              <p className="font-medium">{bookmarked ? 'Added to your list!' : 'Removed from your list'}</p>
              <p className="text-sm text-gray-500">You can find it in your profile</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section with Manga-style Panel */}
      <div className="relative overflow-hidden pt-16 md:pt-0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 96%, 97% 100%, 0 100%)" }}>
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-r from-purple-900/70 to-pink-900/70' : 'bg-gradient-to-r from-violet-900/60 to-indigo-900/60'} z-10`}></div>
        <img 
          src={anime.coverImage || "/api/placeholder/1920/600"} 
          alt="Banner" 
          className="w-full h-64 md:h-96 object-cover"
        />
        
        <div className="absolute z-20 bottom-0 left-0 w-full h-full flex items-end">
          <div className="container mx-auto px-4 py-6 relative">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Manga Cover Image with Comic Style Border */}
              <div className="relative -mt-24 z-30" style={{ transform: "rotate(-1deg)" }}>
                <div className={`absolute inset-0 ${darkMode ? 'bg-yellow-500' : 'bg-violet-400'}`} style={{ transform: "translate(8px, 8px)" }}></div>
                <div className={`relative ${darkMode ? 'bg-black' : 'bg-white'} border-4 ${darkMode ? 'border-black' : 'border-violet-800'} overflow-hidden shadow-xl`} style={{ clipPath: "polygon(0 0, 100% 0, 96% 100%, 0 96%)" }}>
                  <img 
                    src={anime.image} 
                    alt={anime.title} 
                    className="w-48 md:w-64 object-cover"
                  />
                </div>
                <div className={`absolute -top-4 -right-4 ${darkMode ? 'bg-yellow-500 text-black' : 'bg-violet-600 text-white'} font-black py-1 px-3 transform rotate-6 z-30`} style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}>
                  HOT!
                </div>
              </div>
              
              {/* Title and Basic Info */}
              <div className="flex-1 relative" style={{ transform: "translateY(-20px)" }}>
                <div className={`absolute -left-6 top-6 w-4 h-24 ${accentBg}`}></div>
                <h1 className={`text-4xl md:text-5xl font-black uppercase tracking-tight mb-2`} 
                    style={{ textShadow: darkMode ? "3px 3px 0px #EC4899" : "3px 3px 0px #8B5CF6" }}>
                  {anime.title}
                </h1>
                <h2 className={`text-xl ${subtleTextColor} mb-4`}>{anime.originalTitle}</h2>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {anime.genres.map((genre, index) => (
                    <span 
                      key={index}
                      className={`${darkMode ? 'bg-purple-800' : 'bg-violet-600'} text-white px-3 py-1 text-sm font-bold`}
                      style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
                    >
                      {genre.toUpperCase()}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className={`flex items-center gap-2 ${secondaryBg} p-2 rounded-sm shadow-md`}>
                    <Star className="text-yellow-500 fill-yellow-500" size={18} />
                    <span>{anime.rating}/5</span>
                  </div>
                  <div className={`flex items-center gap-2 ${secondaryBg} p-2 rounded-sm shadow-md`}>
                    <Calendar className={accentColor} size={18} />
                    <span>{anime.year}</span>
                  </div>
                  <div className={`flex items-center gap-2 ${secondaryBg} p-2 rounded-sm shadow-md`}>
                    <Clock className={accentColor} size={18} />
                    <span>{anime.episodes.length} Episodes</span>
                  </div>
                  <div className={`flex items-center gap-2 ${secondaryBg} p-2 rounded-sm shadow-md`}>
                    <Award className="text-yellow-500" size={18} />
                    <span>{anime.status}</span>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <button 
                    className={`${accentBg} text-white px-6 py-2 font-bold flex items-center gap-2 ${buttonHoverEffect} shadow-lg ${accentShadow}`}
                    style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
                  >
                    <Play size={16} />
                    WATCH NOW
                  </button>
                  <button 
                    className={`${secondaryBg} border-2 ${darkMode ? 'border-pink-600' : 'border-violet-600'} px-4 py-2 font-bold flex items-center gap-2 ${buttonHoverEffect}`}
                    style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)" }}
                    onClick={toggleBookmark}
                  >
                    <Bookmark size={16} className={`${accentColor} ${bookmarked ? 'fill-current' : ''}`} />
                    {bookmarked ? 'IN YOUR LIST' : 'ADD TO LIST'}
                  </button>
                  <button 
                    className={`${secondaryBg} border-2 ${darkMode ? 'border-purple-600' : 'border-violet-600'} p-2 font-bold flex items-center gap-2 ${buttonHoverEffect}`}
                    style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
                  >
                    <Share2 size={20} className={accentColor} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-black/80 to-black/80 backdrop-blur-sm shadow-lg hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex gap-1 justify-center">
            {['overview', 'characters', 'episodes', 'reviews', 'gallery'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 font-bold text-sm uppercase transition-colors relative ${activeTab === tab ? 'text-white' : subtleTextColor}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <span className={`absolute bottom-0 left-0 w-full h-1 ${accentBg}`}></span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - Tab Content */}
          <div className="lg:col-span-2">
            {renderTabContent()}
          </div>
          
          {/* Right Sidebar - Details and Related */}
          <div className="lg:col-span-1">
            {/* Details Panel */}
            <div 
              className={`${secondaryBg} mb-8 p-6 relative overflow-hidden shadow-lg ${cardHoverClass}`}
              style={{ 
                clipPath: "polygon(0 0, 100% 0, 100% 97%, 97% 100%, 0 100%)",
                backgroundImage: darkMode 
                  ? "repeating-linear-gradient(45deg, #1F2937, #1F2937 10px, #1F2A39 10px, #1F2A39 20px)"
                  : "repeating-linear-gradient(45deg, #F9FAFB, #F9FAFB 10px, #F3F4F6 10px, #F3F4F6 20px)"
              }}
            >
              <div className="absolute top-0 right-0 w-16 h-16" style={{
                background: darkMode 
                  ? "conic-gradient(from 0deg at 100% 0%, transparent 75%, #EC4899 75%)"
                  : "conic-gradient(from 0deg at 100% 0%, transparent 75%, #8B5CF6 75%)"
              }}></div>
              
              <h3 className={`text-xl font-black uppercase mb-4 border-b ${borderColor} pb-2`} 
                  style={{ textShadow: darkMode ? "1px 1px 0px #EC4899" : "1px 1px 0px #8B5CF6" }}>
                DETAILS
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className={subtleTextColor}>Type:</span>
                  <span className="font-bold">TV Series</span>
                </div>
                <div className="flex justify-between">
                  <span className={subtleTextColor}>Episodes:</span>
                  <span className="font-bold">{anime.episodesCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className={subtleTextColor}>Status:</span>
                  <span className="font-bold">{anime.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className={subtleTextColor}>Aired:</span>
                  <span className="font-bold">Jan 2024 - Present</span>
                </div>
                <div className="flex justify-between">
                  <span className={subtleTextColor}>Season:</span>
                  <span className="font-bold">Winter 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className={subtleTextColor}>Studios:</span>
                  <span className="font-bold">{anime.studios.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className={subtleTextColor}>Source:</span>
                  <span className="font-bold">Manga</span>
                </div>
                <div className="flex justify-between">
                  <span className={subtleTextColor}>Duration:</span>
                  <span className="font-bold">24 min. per ep.</span>
                </div>
                <div className="flex justify-between">
                  <span className={subtleTextColor}>Rating:</span>
                  <span className="font-bold">PG-13</span>
                </div>
              </div>
            </div>
            
            {/* Related Works */}
            <div className="mb-8 relative">
              <div className={`absolute top-0 -left-4 w-2 h-full ${darkMode ? 'bg-yellow-500' : 'bg-violet-400'}`}></div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4" 
                  style={{ textShadow: darkMode ? "1px 1px 0px #F59E0B" : "1px 1px 0px #8B5CF6" }}>
                RELATED WORKS
              </h3>
              
              <div className="space-y-4">
                {anime.relatedWorks.map((work, index) => (
                  <div 
                    key={index}
                    className={`flex gap-3 ${secondaryBg} hover:scale-105 transition-transform cursor-pointer p-2 shadow-md ${cardHoverClass}`}
                    style={{ 
                      transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                      clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" 
                    }}
                  >
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-16 h-24 object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{work.title}</h4>
                      <span className={`text-sm ${subtleTextColor}`}>{work.type}</span>
                      <div className="mt-2">
                        <span className={`text-xs ${darkMode ? 'bg-yellow-500 text-black' : 'bg-violet-600 text-white'} px-2 py-1 font-bold inline-block`} style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}>
                          {work.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Soundtrack */}
            <div className="mb-8 relative">
              <div className={`absolute top-0 -left-4 w-2 h-full ${accentBg}`}></div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4" 
                  style={{ textShadow: darkMode ? "1px 1px 0px #EC4899" : "1px 1px 0px #8B5CF6" }}>
                SOUNDTRACK
              </h3>
              
              <div className="space-y-3">
                {anime.soundtrack.map((track, index) => (
                  <div 
                    key={index}
                    className={`${secondaryBg} p-3 shadow-md relative overflow-hidden ${cardHoverClass}`}
                    style={{ clipPath: index % 2 === 0 ? "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" : "polygon(3% 0, 97% 0, 100% 100%, 0 100%)" }}
                  >
                    <div className={`absolute top-0 right-0 ${darkMode ? 'text-pink-500/10' : 'text-violet-600/10'}`}>
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M9 18V5l12-2v13"></path>
                        <circle cx="6" cy="18" r="3"></circle>
                        <circle cx="18" cy="16" r="3"></circle>
                      </svg>
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-bold">{track.title}</h4>
                      <p className="text-sm">{track.artist}</p>
                      <span className={`text-xs mt-1 inline-block ${accentBg} text-white px-2 py-0.5`}>{track.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Weekly Poll */}
            <div className={`relative ${secondaryBg} p-6 mb-8 shadow-lg ${cardHoverClass}`} style={{ clipPath: "polygon(0 0, 100% 0, 100% 97%, 3% 100%)" }}>
              <div className={`absolute -top-3 -right-3 w-16 h-16 ${accentBg} flex items-center justify-center transform rotate-12 font-black text-white`} style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}>
                NEW!
              </div>
              
              <h3 className={`text-xl font-black uppercase mb-4 border-b ${borderColor} pb-2`} 
                  style={{ textShadow: darkMode ? "1px 1px 0px #7C3AED" : "1px 1px 0px #8B5CF6" }}>
                WEEKLY POLL
              </h3>
              
              <div className="mb-4">
                <p className="font-bold mb-2">Which character should get more screen time?</p>
                <div className="space-y-2">
                  {anime.characters.slice(0, 4).map((character, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input 
                        type="radio" 
                        id={`char-${index}`} 
                        name="character" 
                        className="accent-pink-600" 
                      />
                      <label htmlFor={`char-${index}`}>{character.name}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                className={`w-full ${darkMode ? 'bg-purple-700' : 'bg-violet-600'} text-white py-2 font-bold ${buttonHoverEffect} shadow-md`}
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
              >
                VOTE NOW
              </button>
            </div>
            
            {/* Community Stats */}
            <div className={`${secondaryBg} p-6 shadow-md mb-8`} style={{ clipPath: "polygon(0 0, 97% 0, 100% 3%, 100% 100%, 3% 100%, 0 97%, 0 0)" }}>
              <h3 className={`text-xl font-black uppercase mb-4 border-b ${borderColor} pb-2`} 
                  style={{ textShadow: darkMode ? "1px 1px 0px #EC4899" : "1px 1px 0px #8B5CF6" }}>
                COMMUNITY
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className={`text-2xl font-black ${accentColor}`}>12.4K</div>
                  <div className="text-sm text-gray-500">Members</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-black ${accentColor}`}>8.2K</div>
                  <div className="text-sm text-gray-500">Reviews</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-black ${accentColor}`}>95%</div>
                  <div className="text-sm text-gray-500">Favorited</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-black ${accentColor}`}>#3</div>
                  <div className="text-sm text-gray-500">Top Anime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}