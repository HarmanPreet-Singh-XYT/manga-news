import { Calendar } from 'lucide-react'
import React from 'react'

const Sidebar = ({darkMode}:{darkMode:boolean}) => {
  return (
    <div className="lg:w-1/3">
          {/* Featured event spotlight */}
          <div className={`mb-6 p-4 ${
            darkMode ? 'bg-gray-800 border-l-4 border-pink-500' : 'bg-white border-l-4 border-violet-500'
          }`}>
            <h3 className={`text-xl font-black mb-3 ${
              darkMode ? 'text-pink-400' : 'text-violet-600'
            }`}
            style={{
              
              letterSpacing: '0.5px'
            }}>
              FEATURED EVENT
            </h3>
            
            <div className="relative overflow-hidden mb-4">
              <img 
                src="/api/placeholder/400/200" 
                alt="Featured Event" 
                className="w-full h-32 object-cover"
              />
              <div className={`absolute bottom-0 left-0 right-0 ${
                darkMode ? 'bg-gradient-to-t from-black to-transparent' : 'bg-gradient-to-t from-black to-transparent'
              } p-2`}>
                <h4 className="text-white font-bold">
                  Shonen Jump Creator Panel
                </h4>
              </div>
            </div>
            
            <p className="text-sm mb-4">
              Don't miss this exclusive panel featuring the creators of some of Shonen Jump's most beloved manga series!
            </p>
            
            <button className={`w-full py-2 text-sm font-bold text-white ${
              darkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500'
            } transition-all duration-300`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
            }}>
              LEARN MORE
            </button>
          </div>
          <div className={`p-6 relative ${darkMode ? 'bg-gray-800' : 'bg-white'} border-4 ${darkMode ? 'border-pink-600' : 'border-violet-600'}`}
                 style={{
                   clipPath: 'polygon(0% 0%, 100% 0%, 98% 98%, 0% 100%)',
                   boxShadow: darkMode ? '8px 8px 0px rgba(236, 72, 153, 0.3)' : '8px 8px 0px rgba(37, 99, 235, 0.3)'
                 }}>
              <h3 className="text-xl font-black uppercase mb-4 flex items-center"
                  style={{  }}>
                <Calendar className={`mr-2 ${darkMode ? 'text-pink-400' : 'text-violet-600'}`} size={20} />
                Upcoming Dates
              </h3>
              
              
              <div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none overflow-hidden opacity-5">
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(ellipse at center, transparent 30%, black 70%)',
                  transform: 'translate(-50%, -50%)'
                }}></div>
              </div>
              
              <div className="space-y-4 relative">
                <div className={`p-3 ${darkMode ? 'bg-gray-700 border-l-4 border-pink-500' : 'bg-violet-50 border-l-4 border-violet-500'}`}
                     style={{ transform: 'skew(-1deg)' }}>
                  <div className="font-bold text-sm text-pink-500">APR 30</div>
                  <div className="font-bold">Chainsaw Man Season 2 Launch</div>
                </div>
                <div className={`p-3 ${darkMode ? 'bg-gray-700 border-l-4 border-pink-500' : 'bg-violet-50 border-l-4 border-violet-500'}`}
                     style={{ transform: 'skew(-1deg)' }}>
                  <div className="font-bold text-sm text-pink-500">MAY 8-9</div>
                  <div className="font-bold">Manga Industry Summit</div>
                </div>
                <div className={`p-3 ${darkMode ? 'bg-gray-700 border-l-4 border-pink-500' : 'bg-violet-50 border-l-4 border-violet-500'}`}
                     style={{ transform: 'skew(-1deg)' }}>
                  <div className="font-bold text-sm text-pink-500">MAY 15-18</div>
                  <div className="font-bold">AnimeExpo 2025</div>
                </div>
                <div className={`p-3 ${darkMode ? 'bg-gray-700 border-l-4 border-pink-500' : 'bg-violet-50 border-l-4 border-violet-500'}`}
                     style={{ transform: 'skew(-1deg)' }}>
                  <div className="font-bold text-sm text-pink-500">MAY 22</div>
                  <div className="font-bold">Virtual Cosplay Competition</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className={`w-full py-2 font-black text-white ${
                  darkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500'
                } transition-colors duration-300`}
                style={{
                  clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)',
                  
                }}>
                  FULL CALENDAR
                </button>
              </div>
            </div> 
          {/* Categories list */}
          <div className={`my-6 border-4 p-4 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } ${darkMode ? 'border-pink-600' : 'border-violet-600'}`}
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%)'
          }}>
            <h3 className={`text-xl font-black mb-3 ${
              darkMode ? 'text-pink-400' : 'text-violet-600'
            }`}
            style={{
              
              letterSpacing: '0.5px'
            }}>
              EVENT CATEGORIES
            </h3>
            
            <ul className="space-y-2">
              {['Conventions', 'Screenings', 'Exhibitions', 'Contests', 'Meet & Greets'].map((category, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 transform rotate-45 mr-2 ${
                      darkMode ? 'bg-pink-500' : 'bg-violet-500'
                    }`}></div>
                    <span className="font-bold">{category}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 ${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {Math.floor(Math.random() * 20) + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter signup */}
          <div className={`p-4 ${
            darkMode ? 'bg-gray-800 border-2 border-dashed border-pink-500' : 'bg-white border-2 border-dashed border-violet-500'
          }`}>
            <h3 className={`text-xl font-black mb-3 ${
              darkMode ? 'text-pink-400' : 'text-violet-600'
            }`}
            style={{
              
              letterSpacing: '0.5px'
            }}>
              GET EVENT ALERTS!
            </h3>
            
            <p className="text-sm mb-4">
              Never miss an anime event again! Sign up for our newsletter and be the first to know about upcoming events!
            </p>
            
            <input 
              type="email" 
              placeholder="Your email address" 
              className={`w-full p-2 mb-3 ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-violet-50 border-gray-300'
              } border`}
            />
            
            <button className={`w-full py-2 text-sm font-bold text-white ${
              darkMode ? 'bg-pink-600 hover:bg-pink-500' : 'bg-violet-600 hover:bg-violet-500'
            } transition-all duration-300`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
            }}>
              SUBSCRIBE NOW!
            </button>
          </div>
          {/* <div className={`mt-8 p-4 relative ${darkMode ? 'border-2 border-yellow-500' : 'border-2 border-yellow-500'}`}
                 style={{
                   background: darkMode ? 'repeating-linear-gradient(45deg, #111827, #111827 10px, #1F2937 10px, #1F2937 20px)' : 
                                       'repeating-linear-gradient(45deg, #EFF6FF, #EFF6FF 10px, #DBEAFE 10px, #DBEAFE 20px)',
                   transform: 'rotate(-1deg)'
                 }}>
              <div className={`p-4 ${darkMode ? 'bg-gray-900 bg-opacity-90' : 'bg-white bg-opacity-90'}`}>
                <h4 className="font-black text-xl uppercase mb-3 text-center text-yellow-500"
                    style={{ 
                           textShadow: '1px 1px 0px black' }}>
                  SPECIAL ANNOUNCEMENT!
                </h4>
                <p className="text-center font-bold mb-3">Join our Discord for exclusive event updates!</p>
                <div className="text-center">
                  <button className={`px-4 py-2 font-black text-white ${
                    darkMode ? 'bg-yellow-500 hover:bg-yellow-400 text-black' : 'bg-yellow-500 hover:bg-yellow-400 text-black'
                  } transition-colors duration-300`}>
                    JOIN NOW!
                  </button>
                </div>
              </div>
              
              
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-500"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-500"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-500"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-500"></div>
            </div> */}
        </div>
  )
}

export default Sidebar