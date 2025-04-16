import { Bell, Check, Sparkles, Star, X, Zap } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Newsletter = ({darkMode = false, accentBg = 'bg-violet-600', accentColor = 'text-violet-600', themeClass = '', secondaryBg = 'bg-white'}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shakeEffect, setShakeEffect] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Theme and styling variable
  const borderColor = darkMode ? 'border-pink-500' : 'border-violet-600';
  
  // Random sparkle effect for anime aesthetic
  const [sparklePositions, setSparklePositions] = useState([]);
  
  useEffect(() => {
    if (isHovered) {
      const newSparkles = Array(5).fill(undefined).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 1 + 0.5}rem`,
        delay: `${Math.random() * 0.5}s`
      }));
      setSparklePositions(newSparkles);
    }
  }, [isHovered]);
  
  const triggerShake = () => {
    setShakeEffect(true);
    setTimeout(() => setShakeEffect(false), 820);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Clear any previous errors
    setError('');
    
    // Simulate loading state
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      triggerShake();
      
      // Reset form after successful subscription
      setEmail('');
      
      // Reset subscription state after delay to allow user to see the success message
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className={`container mx-auto px-4 py-12 ${themeClass}`}>
      <div 
        className={`${secondaryBg} p-6 relative border-2 ${borderColor} transform ${shakeEffect ? 'animate-bounce' : '-rotate-1'} 
        hover:rotate-0 transition-transform duration-300 rounded-lg shadow-lg overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Anime-style background patterns */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl -bottom-48 -left-48"></div>
        </div>
        
        {/* Sparkle effects */}
        {isHovered && sparklePositions.map((pos, idx) => (
          <div 
            key={idx}
            className="absolute animate-pulse"
            style={{
              top: pos.top,
              left: pos.left,
              animationDelay: pos.delay
            }}
          >
            <Sparkles size={16} className={accentColor} />
          </div>
        ))}
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* Anime-style badge */}
          <div className={`inline-block ${accentBg} text-white px-4 py-1 text-sm font-bold mb-4 transform -rotate-2 rounded-md shadow-md`}>
            <span className="flex items-center gap-1">
              <Zap size={14} /> JOIN OUR NAKAMA <Zap size={14} />
            </span>
          </div>
          
          {/* Title with anime styling */}
          <h3 className="text-3xl font-extrabold uppercase transform -skew-x-3 tracking-tight mb-4 relative">
            Stay Updated on <span className={`${accentColor} relative`}>
              Anime News
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-current opacity-30"></span>
            </span>
          </h3>
          
          <p className="mb-6 text-lg">Get the latest manga chapters, anime episodes, and industry news delivered straight to your inbox!</p>
          
          {/* Form with improved styling and functionality */}
          {!isSubscribed ? (
            <>
              <div className="flex flex-col sm:flex-row gap-3 mb-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  className={`flex-1 p-3 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} 
                  border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 
                  ${darkMode ? 'focus:ring-pink-500' : 'focus:ring-violet-500'} transition-all
                  ${error ? 'border-red-500' : ''}`}
                />
                <button 
                  onClick={handleSubscribe}
                  disabled={isLoading}
                  className={`${accentBg} text-white font-bold uppercase py-3 px-6 rounded-md shadow-md
                  transform hover:scale-105 transition-all flex items-center justify-center gap-2
                  ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <>Loading<span className="animate-pulse">...</span></>
                  ) : (
                    <>Subscribe <Sparkles size={16} className="animate-pulse" /></>
                  )}
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            </>
          ) : (
            <div className={`${accentBg} text-white p-4 rounded-lg mb-4 flex items-center justify-center gap-2`}>
              <Check size={20} />
              <span>Thank you for subscribing! Check your inbox soon!</span>
            </div>
          )}
          
          <p className="text-xs opacity-70">We respect your privacy. Unsubscribe at any time.</p>
          
          {/* Features with better icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <div className="flex items-center">
              <Bell size={16} className={`${accentColor} mr-2`} />
              <span className="text-sm">Weekly Updates</span>
            </div>
            <div className="flex items-center">
              <Star size={16} className={`${accentColor} mr-2`} />
              <span className="text-sm">Exclusive Content</span>
            </div>
            <div className="flex items-center">
              <Sparkles size={16} className={`${accentColor} mr-2`} />
              <span className="text-sm">Manga Alerts</span>
            </div>
            <div className="flex items-center">
              <X size={16} className={`${accentColor} mr-2`} />
              <span className="text-sm">No Spam</span>
            </div>
          </div>
          
          {/* Subscription counter - dummy functionality */}
          <div className="mt-4">
            <p className="text-sm">
              <span className="font-bold">{Math.floor(Math.random() * 1000) + 5000}</span> anime fans already subscribed!
            </p>
          </div>
          
          {/* Anime-inspired decorative elements */}
          <div className="mt-6 pt-3 border-t border-opacity-20 border-current">
            <div className="flex justify-center gap-3">
              {["★", "♥", "✦", "★", "♥"].map((char, idx) => (
                <span key={idx} className={`${accentColor} text-xl animate-pulse`} style={{animationDelay: `${idx * 0.2}s`}}>{char}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter