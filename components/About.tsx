'use client'
import { useState, useEffect } from 'react';
import { Star, ChevronRight, MessageCircle, Users, Newspaper, Award, Mail, Moon, Sun, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutUsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const categories = [
    "Shonen", "Shojo", "Seinen", "Isekai", 
    "Mecha", "Slice of Life", "Horror", "Movies", "Industry"
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-indigo-50 text-gray-900'}`}>
      {/* Theme Toggle Button */}
      {/* <button 
        onClick={toggleTheme} 
        className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isDarkMode ? 'bg-yellow-500 text-gray-900' : 'bg-violet-600 text-white'
        }`}
        style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button> */}

      <Header 
        darkMode={isDarkMode} 
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        toggleDarkMode={toggleTheme} 
        toggleNotification={toggleNotification} 
        isNotificationOpen={isNotificationOpen} 
        showBackToTop={showBackToTop} 
        scrollToTop={scrollToTop}
      />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className={`absolute inset-0 transition-colors duration-500 ${isDarkMode ? 'bg-blue-900' : 'bg-indigo-100'}`}>
          {Array(20).fill(0).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className={`absolute h-screen w-px bg-gradient-to-b ${isDarkMode ? 'from-transparent via-blue-400 to-transparent' : 'from-transparent via-indigo-400 to-transparent'}`}
              style={{ 
                left: `${i * 5}%`, 
                animationDuration: `${30 + i * 2}s`,
                animation: 'pulse 8s infinite'
              }}
            ></div>
          ))}
          {Array(20).fill(0).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className={`absolute w-full h-px bg-gradient-to-r ${isDarkMode ? 'from-transparent via-pink-400 to-transparent' : 'from-transparent via-violet-400 to-transparent'}`}
              style={{ 
                top: `${i * 5}%`,
                animationDuration: `${20 + i * 3}s`,
                animation: 'pulse 10s infinite'
              }}
            ></div>
          ))}
          
          {/* Floating Anime Icons */}
          {['✨', '💫', '🌟', '📚', '🎭', '🎬'].map((emoji, i) => (
            <div 
              key={`emoji-${i}`} 
              className="absolute text-2xl opacity-30"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animation: `float ${Math.random() * 10 + 15}s infinite linear`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
      
      {/* Hero Section */}
      <section className={`container mx-auto px-4 py-16 transition-transform duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className={`relative border-4 ${isDarkMode ? 'border-gray-700 bg-gray-800/90' : 'border-violet-200 bg-white/90'} p-8 transform rotate-1 mb-16 shadow-xl transition-all duration-300`}
          style={{ 
            boxShadow: isDarkMode ? '8px 8px 0px #EC4899' : '8px 8px 0px #8B5CF6',
            clipPath: 'polygon(0% 0%, 100% 0%, 98% 98%, 2% 100%)'
          }}
        >
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-yellow-500 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-yellow-500 animate-pulse"></div>
          
          <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`} 
            style={{ 
              textShadow: isDarkMode ? '3px 3px 0px #EC4899, 6px 6px 0px rgba(236, 72, 153, 0.3)' : '3px 3px 0px #8B5CF6, 6px 6px 0px rgba(139, 92, 246, 0.3)'
            }}
          >
            <span className="inline-block transform hover:scale-105 hover:-rotate-2 transition-transform duration-300">About</span>{' '}
            <span className="inline-block transform hover:scale-105 hover:rotate-2 transition-transform duration-300">Our</span>{' '}
            <span className="inline-block transform hover:scale-105 hover:-rotate-1 transition-transform duration-300">Team</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 transform transition-all duration-300 hover:scale-103 hover:-rotate-1">
              <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed transition-colors duration-300`}>
                Welcome to <span className={`font-bold ${isDarkMode ? 'text-pink-500' : 'text-violet-500'} transition-colors duration-300`}>MangaPulse News</span> - your ultimate destination for all things anime and manga! Founded in 2020 by a group of passionate otakus, we've grown into a thriving community dedicated to bringing you the freshest news, hottest takes, and deepest dives into Japanese pop culture.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed transition-colors duration-300`}>
                Our team spans the globe, with writers and editors across different time zones ensuring you never miss a beat in the ever-evolving world of anime and manga. Whether you're a seasoned weeb or just beginning your journey, our content is crafted to inform, entertain, and connect fans worldwide.
              </p>
              
              {/* Added manga/anime terminology glossary */}
              <div className={`mt-6 p-4 ${isDarkMode ? 'bg-gray-700/50' : 'bg-violet-100/80'} transform rotate-1 transition-all duration-300`}
                style={{ clipPath: 'polygon(0 0, 98% 3%, 100% 100%, 2% 97%)' }}
              >
                <div className={`font-bold mb-2 ${isDarkMode ? 'text-pink-400' : 'text-violet-600'}`}>Otaku Dictionary</div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { term: "Shonen", def: "Aimed at teen boys" },
                    { term: "Shojo", def: "Aimed at teen girls" },
                    { term: "Isekai", def: "Fantasy world genre" },
                    { term: "Mangaka", def: "Manga artist" }
                  ].map((item, i) => (
                    <div key={i} className={`text-sm px-2 py-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded transition-all duration-300 transform hover:scale-105 hover:rotate-1`}>
                      <span className="font-bold">{item.term}:</span> {item.def}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={`flex-1 border-4 ${isDarkMode ? 'border-gray-700' : 'border-violet-200'} p-6 transform -rotate-1 transition-all duration-300 hover:rotate-0`} 
              style={{ 
                clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
                backgroundImage: isDarkMode ? 
                  'linear-gradient(to bottom right, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))' : 
                  'linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(224, 231, 255, 0.9))'
              }}
            >
              <div className={`font-bold text-lg mb-2 uppercase ${isDarkMode ? 'text-pink-500' : 'text-violet-500'} tracking-wider transition-colors duration-300`}>Our Mission</div>
              <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed transition-colors duration-300`}>
                To create a vibrant hub where anime and manga enthusiasts can discover breaking news, thoughtful analysis, and celebrate the creativity of Japanese storytelling. We strive to spotlight both mainstream hits and hidden gems, giving voice to the diverse stories that make this medium special.
              </div>
              
              <div className={`mt-6 p-4 ${isDarkMode ? 'bg-gray-700/80' : 'bg-violet-100/80'} transform rotate-1 transition-all duration-300 hover:rotate-2 hover:scale-105`} 
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
              >
                <div className="flex items-center">
                  <Star className={`inline-block mr-2 ${isDarkMode ? 'text-yellow-500' : 'text-yellow-500'} animate-pulse`} size={20} />
                  <Heart className={`inline-block mr-2 ${isDarkMode ? 'text-pink-500' : 'text-violet-500'}`} size={20} />
                  <span className="font-bold">Join us on this amazing journey through Japanese pop culture!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className={`${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} py-16 transform -skew-y-1 my-12 transition-all duration-300`}>
        <div className="container mx-auto px-4 transform skew-y-1">
          <h2 className={`text-3xl md:text-4xl font-black uppercase tracking-tight mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`} 
            style={{ 
              textShadow: isDarkMode ? '3px 3px 0px #EC4899, 6px 6px 0px rgba(236, 72, 153, 0.3)' : '3px 3px 0px #8B5CF6, 6px 6px 0px rgba(139, 92, 246, 0.3)'
            }}
          >
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Yuki Tanaka", 
                role: "Editor-in-Chief", 
                bio: "Manga historian and industry insider with 10+ years of experience. Specializes in seinen and josei genres.", 
                icon: Users, 
                favoriteAnime: "Monster",
                quote: "Manga isn't just entertainment—it's art that reflects society."
              },
              { 
                name: "Kai Rodriguez", 
                role: "News Director", 
                bio: "Former anime production assistant turned journalist. Always first to break the biggest industry stories.", 
                icon: Newspaper,
                favoriteAnime: "Attack on Titan",
                quote: "The best stories are the ones that change how you see the world."
              },
              { 
                name: "Aria Chen", 
                role: "Senior Writer", 
                bio: "Award-winning critic with expertise in animation techniques and visual storytelling analysis.", 
                icon: Award,
                favoriteAnime: "Violet Evergarden",
                quote: "Animation is the perfect blend of art forms."
              },
              { 
                name: "Taro Smith", 
                role: "Community Manager", 
                bio: "Devoted fan and discussion moderator who brings our community together through shared passion.", 
                icon: MessageCircle,
                favoriteAnime: "One Piece",
                quote: "Fandom is about finding your people through shared stories."
              },
              { 
                name: "Mika Johnson", 
                role: "Contributing Editor", 
                bio: "Shonen expert who's read over 500 manga series and watched 1,000+ anime episodes.", 
                icon: Star,
                favoriteAnime: "Fullmetal Alchemist",
                quote: "Every manga panel has something to teach us about visual language."
              },
              { 
                name: "Ren Nakamura", 
                role: "Research Specialist", 
                bio: "Fluent in Japanese, specializes in translation and cultural context for deeper understanding.", 
                icon: ChevronRight,
                favoriteAnime: "Ghost in the Shell",
                quote: "Translation is about bridging worlds, not just changing words."
              },
            ].map((member, index) => (
              <div 
                key={index} 
                className={`border-4 ${isDarkMode ? 'border-gray-700 bg-gray-900/90' : 'border-violet-200 bg-indigo-50/90'} p-6 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:scale-105 transition-all duration-500 relative overflow-hidden`}
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 95%)',
                  boxShadow: isDarkMode ? 
                    '5px 5px 0px rgba(236, 72, 153, 0.3)' : 
                    '5px 5px 0px rgba(139, 92, 246, 0.3)'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start mb-4">
                  <div className={`p-3 mr-4 ${isDarkMode ? 'bg-pink-500' : 'bg-violet-500'} text-white rounded-full transform -rotate-3 transition-colors duration-300`}>
                    <member.icon size={24} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-black uppercase tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>{member.name}</h3>
                    <div className={`text-sm font-bold ${isDarkMode ? 'text-pink-500' : 'text-violet-500'} uppercase transition-colors duration-300`}>{member.role}</div>
                  </div>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>{member.bio}</p>
                
                {/* Additional reveal info on hover */}
                <div 
                  className={`absolute inset-0 ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} p-6 flex flex-col justify-center transition-all duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  style={{ 
                    clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 95%)',
                    transform: hoveredCard === index ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <p className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-pink-500' : 'text-violet-500'} transition-colors duration-300`}>Favorite Anime:</p>
                  <p className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>{member.favoriteAnime}</p>
                  
                  <p className={`italic text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats & Milestones */}
      <section className="container mx-auto px-4 py-12">
        <h2 className={`text-3xl md:text-4xl font-black uppercase tracking-tight mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`} 
          style={{ 
            textShadow: isDarkMode ? '3px 3px 0px #EC4899, 6px 6px 0px rgba(236, 72, 153, 0.3)' : '3px 3px 0px #8B5CF6, 6px 6px 0px rgba(139, 92, 246, 0.3)'
          }}
        >
          Our Journey So Far
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className={`border-4 ${isDarkMode ? 'border-gray-700 bg-gray-800/90' : 'border-violet-200 bg-white/90'} p-6 transform rotate-1 transition-all duration-300 hover:rotate-2`}
            style={{ 
              boxShadow: isDarkMode ? '5px 5px 0px rgba(236, 72, 153, 0.3)' : '5px 5px 0px rgba(139, 92, 246, 0.3)',
              clipPath: 'polygon(0 0, 100% 0, 97% 97%, 3% 100%)'
            }}
          >
            <h3 className={`text-2xl font-black uppercase mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>Site Stats</h3>
            
            <div className="space-y-4">
              {[
                { label: "Monthly Readers", value: "500K+", icon: "👀" },
                { label: "Articles Published", value: "2,500+", icon: "📝" },
                { label: "Industry Exclusives", value: "175", icon: "🏆" },
                { label: "Community Members", value: "125K+", icon: "👥" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center p-3 ${isDarkMode ? 'bg-gray-700/50 hover:bg-gray-700/80' : 'bg-violet-50/50 hover:bg-violet-100/80'} transition-all duration-300 transform hover:translate-x-1`}
                  style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
                >
                  <span className={`text-lg flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    <span className="mr-2 text-xl">{stat.icon}</span>
                    {stat.label}
                  </span>
                  <span className={`text-2xl font-black ${isDarkMode ? 'text-pink-500' : 'text-violet-500'} transition-colors duration-300`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`border-4 ${isDarkMode ? 'border-gray-700 bg-gray-800/90' : 'border-violet-200 bg-white/90'} p-6 transform -rotate-1 transition-all duration-300 hover:-rotate-2`}
            style={{ 
              boxShadow: isDarkMode ? '5px 5px 0px rgba(236, 72, 153, 0.3)' : '5px 5px 0px rgba(139, 92, 246, 0.3)',
              clipPath: 'polygon(0 0, 100% 0, 97% 97%, 3% 100%)'
            }}
          >
            <h3 className={`text-2xl font-black uppercase mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>Key Milestones</h3>
            
            <div className="space-y-4">
              {[
                { year: "2020", achievement: "MangaPulse News launched", anime: "Jujutsu Kaisen Season 1" },
                { year: "2021", achievement: "Reached 10,000 subscribers", anime: "Attack on Titan Final Season" },
                { year: "2022", achievement: "First exclusive interview with MAPPA studio", anime: "Spy × Family" },
                { year: "2023", achievement: "Awarded 'Best Anime News Site'", anime: "Demon Slayer: Swordsmith Village Arc" },
                { year: "2024", achievement: "Launched podcast and video content", anime: "Chainsaw Man Season 2" }
              ].map((milestone, index) => (
                <div 
                  key={index} 
                  className={`${isDarkMode ? 'bg-gray-700/50 hover:bg-gray-700/80' : 'bg-violet-50/50 hover:bg-violet-100/80'} transition-all duration-300 transform hover:translate-x-1 p-3`}
                  style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
                >
                  <div className="flex items-center">
                    <span className={`px-3 py-1 mr-4 font-bold ${isDarkMode ? 'bg-yellow-500' : 'bg-yellow-500'} text-gray-900 transform -rotate-2 transition-transform duration-300 hover:rotate-0`}>
                      {milestone.year}
                    </span>
                    <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>{milestone.achievement}</span>
                  </div>
                  <div className={`mt-2 text-sm ${isDarkMode ? 'text-pink-400' : 'text-violet-500'} pl-16 italic transition-colors duration-300`}>
                    Popular anime that year: {milestone.anime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Us */}
      <section className={`${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} py-16 transform skew-y-1 mt-12 transition-all duration-300`}>
        <div className="container mx-auto px-4 transform -skew-y-1">
          <div className="mx-auto">
            <h2 className={`text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`} 
              style={{ 
                textShadow: isDarkMode ? '3px 3px 0px #EC4899, 6px 6px 0px rgba(236, 72, 153, 0.3)' : '3px 3px 0px #8B5CF6, 6px 6px 0px rgba(139, 92, 246, 0.3)'
              }}
            >
              Connect With Us
            </h2>
            
            <div className={`border-4 ${isDarkMode ? 'border-gray-700 bg-gray-900/90' : 'border-violet-200 bg-indigo-50/90'} p-8 transform rotate-1 mb-8 transition-all duration-300`} 
              style={{ 
                clipPath: 'polygon(0 0, 100% 0, 96% 95%, 2% 100%)',
                boxShadow: isDarkMode ? '8px 8px 0px rgba(236, 72, 153, 0.3)' : '8px 8px 0px rgba(139, 92, 246, 0.3)'
              }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 transform transition-all duration-300 hover:scale-103 hover:-rotate-1">
                  <h3 className={`text-xl font-black uppercase mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>Contact Info</h3>
                  
                  <div className="space-y-4">
                    <div className={`flex items-center p-3 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} transition-all duration-300 transform hover:translate-x-1`}>
                      <Mail className={`mr-3 ${isDarkMode ? 'text-pink-500' : 'text-violet-500'} transition-colors duration-300`} size={20} />
                      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>hello@MangaPulse.news</span>
                    </div>
                    
                    <div className={`p-4 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} transform -rotate-1 transition-all duration-300 hover:rotate-0`}>
                      <p className="font-bold uppercase text-sm tracking-tight mb-3">Social Media</p>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { name: 'Twitter', icon: '𝕏' },
                          { name: 'Instagram', icon: '📸' },
                          { name: 'Discord', icon: '💬' },
                          { name: 'YouTube', icon: '▶️' }
                        ].map((platform, index) => (
                          <a 
                            key={index}
                            href="#" 
                            className={`px-3 py-1 text-sm font-bold ${isDarkMode ? 'bg-pink-500 hover:bg-pink-600' : 'bg-violet-500 hover:bg-violet-600'} text-white transform hover:scale-110 hover:rotate-1 transition-all duration-300 flex items-center`}
                            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                          >
                            <span className="mr-1">{platform.icon}</span> {platform.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* Added anime conventions section */}
                    <div className={`p-4 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} transform rotate-1 transition-all duration-300 hover:-rotate-1`}>
                      <p className="font-bold uppercase text-sm tracking-tight mb-2">Find Us At These Cons!</p>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                        <div className="flex justify-between">
                          <span>Anime Expo</span>
                          <span>July 2-5</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Crunchyroll Expo</span>
                          <span>August 12-14</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Anime NYC</span>
                          <span>November 18-20</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 transform transition-all duration-300 hover:scale-103 hover:rotate-1">
                  <h3 className={`text-xl font-black uppercase mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>Join Our Newsletter</h3>
                  
                  <div className={`p-4 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} transform rotate-1 transition-all duration-300 hover:rotate-2`}>
                    <p className={`mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>Get weekly updates on the latest anime and manga news!</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input 
                        type="email" 
                        placeholder="Your email" 
                        className={`flex-1 px-4 py-2 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-indigo-50 text-gray-900 border-violet-200'} border transition-colors duration-300`}
                      />
                      <button 
                        className={`px-4 py-2 font-bold uppercase ${isDarkMode ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-yellow-500 hover:bg-yellow-600'} text-gray-900 transform hover:rotate-1 hover:scale-105 transition-all duration-300`}
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 10% 100%)' }}
                      >
                        Subscribe
                      </button>
                    </div>
                    
                    {/* Added content preferences */}
                    <div className="mt-4">
                      <p className={`text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>Content Preferences:</p>
                      <div className="flex flex-wrap gap-2">
                        {['Shonen', 'Shojo', 'Seinen', 'Isekai', 'Mecha', 'Slice of Life'].map((genre, i) => (
                          <label key={i} className={`flex items-center text-sm p-1 cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}>
                            <input type="checkbox" className="mr-1" />
                            {genre}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Added manga recommendations */}
                  <div className={`mt-4 p-4 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} transform -rotate-1 transition-all duration-300 hover:rotate-0`}>
                    <p className={`font-bold text-sm uppercase mb-2 ${isDarkMode ? 'text-pink-500' : 'text-violet-500'} transition-colors duration-300`}>This Week's Recommendations</p>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} grid grid-cols-2 gap-2 transition-colors duration-300`}>
                      <div className="flex items-center">
                        <Star size={12} className="mr-1 text-yellow-500" />
                        <span>Jujutsu Kaisen</span>
                      </div>
                      <div className="flex items-center">
                        <Star size={12} className="mr-1 text-yellow-500" />
                        <span>Chainsaw Man</span>
                      </div>
                      <div className="flex items-center">
                        <Star size={12} className="mr-1 text-yellow-500" />
                        <span>Spy × Family</span>
                      </div>
                      <div className="flex items-center">
                        <Star size={12} className="mr-1 text-yellow-500" />
                        <span>Blue Lock</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer categories={categories}/>
      
      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) rotate(-5deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}