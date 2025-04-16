import { Instagram, Twitter, Youtube, Mail, ChevronRight, Heart } from 'lucide-react'
import React, { useState } from 'react'

const Footer = ({ categories = [] }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Here you would typically handle the actual subscription
    }
  };

  return (
    <footer className="bg-gradient-to-br from-violet-950 to-violet-900 text-white pt-16 pb-6 mt-16 border-t-4 border-pink-500 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-cyan-300"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-pink-400"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 rounded-full bg-yellow-300"></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Newsletter Signup */}
        <div className="bg-violet-800/50 p-6 md:p-8 rounded-xl mb-12 backdrop-blur-sm border border-violet-700 shadow-lg transform hover:shadow-cyan-500/20 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black mb-2">
                <span className="text-cyan-300">STAY</span> <span className="text-pink-400">UPDATED</span>
              </h3>
              <p className="text-gray-300 mb-0">Subscribe to our newsletter for weekly manga updates, exclusive content and special offers!</p>
            </div>
            <div className="w-full md:w-auto">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-violet-950 border border-violet-700 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white w-full md:w-64"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-pink-500 hover:bg-pink-600 rounded-r-md px-4 py-2 font-bold transition-colors flex items-center"
                  >
                    Subscribe <ChevronRight size={16} className="ml-1" />
                  </button>
                </form>
              ) : (
                <div className="bg-green-600/20 text-green-300 px-4 py-3 rounded-md border border-green-700 flex items-center">
                  <Mail size={18} className="mr-2" /> Thanks for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h4 className="font-black text-xl mb-4 flex items-center">
              <span className="text-pink-400">MANGA</span>
              <span className="text-cyan-300">PULSE</span>
            </h4>
            <p className="text-gray-300 mb-4">
              Your #1 source for the latest anime and manga news, reviews, and discussions straight from Japan!
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="bg-violet-800 p-2 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300" aria-label="Twitter">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="bg-violet-800 p-2 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="bg-violet-800 p-2 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300" aria-label="YouTube">
                <Youtube size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-black mb-4 text-lg relative inline-block">
              CATEGORIES
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-pink-500"></span>
            </h4>
            <ul className="space-y-2 text-gray-300">
              {categories && categories.length > 0 ? (
                categories.slice(0, 5).map(cat => (
                  <li key={cat} className="transform hover:translate-x-1 transition-transform">
                    <a href="#" className="hover:text-cyan-300 transition-colors flex items-center">
                      <ChevronRight size={14} className="mr-1 text-pink-400" /> {cat}
                    </a>
                  </li>
                ))
              ) : (
                ['Shonen', 'Shojo', 'Seinen', 'Josei', 'Isekai'].map(cat => (
                  <li key={cat} className="transform hover:translate-x-1 transition-transform">
                    <a href="#" className="hover:text-cyan-300 transition-colors flex items-center">
                      <ChevronRight size={14} className="mr-1 text-pink-400" /> {cat}
                    </a>
                  </li>
                ))
              )}
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-4 text-lg relative inline-block">
              OUR TEAM
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-pink-500"></span>
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="transform hover:translate-x-1 transition-transform">
                <a href="/about" className="hover:text-cyan-300 transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1 text-pink-400" /> About Us
                </a>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <a href="/events" className="hover:text-cyan-300 transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1 text-pink-400" /> Events
                </a>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <a href="/releases" className="hover:text-cyan-300 transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1 text-pink-400" /> Releases
                </a>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <a href="/about" className="hover:text-cyan-300 transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1 text-pink-400" /> Contact
                </a>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <a href="/series" className="hover:text-cyan-300 transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1 text-pink-400" /> Series
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-4 text-lg relative inline-block">
              QUICK LINKS
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-pink-500"></span>
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="transform hover:translate-x-1 transition-transform">
                <a href="/" className="hover:text-cyan-300 transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1 text-pink-400" /> Latest Reviews
                </a>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <a href="/releases" className="hover:text-cyan-300 transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1 text-pink-400" /> Release Calendar
                </a>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <a href="/series" className="hover:text-cyan-300 transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1 text-pink-400" /> Top Series
                </a>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <a href="/events" className="hover:text-cyan-300 transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1 text-pink-400" /> Upcoming Events
                </a>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <a href="/articles" className="hover:text-cyan-300 transition-colors flex items-center">
                  <ChevronRight size={14} className="mr-1 text-pink-400" /> Articles
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Popular Manga Tags */}
        <div className="mt-12 pt-6 border-t border-violet-800/50">
          <h4 className="font-bold mb-3 text-sm text-gray-400">POPULAR TAGS:</h4>
          <div className="flex flex-wrap gap-2">
            {['One Piece', 'Jujutsu Kaisen', 'Chainsaw Man', 'Demon Slayer', 'My Hero Academia', 'Attack on Titan'].map(tag => (
              <a 
                key={tag} 
                href="#" 
                className="bg-violet-800/30 text-xs px-3 py-1 rounded-full hover:bg-pink-500/20 hover:text-pink-300 transition-colors border border-violet-700/50"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-violet-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 <span className="text-pink-400">MANGA</span><span className="text-cyan-300">PULSE</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm">Accessibility</a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-6 flex items-center justify-center">
            Made with <Heart size={12} className="mx-1 text-pink-500" fill="currentColor" /> by manga fans, for manga fans. All trademarks and copyrights belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer