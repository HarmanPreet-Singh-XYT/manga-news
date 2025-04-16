import { Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = ({categories}:{categories:any}) => {
  return (
    <footer className="bg-violet-900 text-white pt-12 pb-4 mt-16 border-t-4 border-pink-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-black text-lg mb-4">
                <span className="text-pink-400">MANGA</span>
                <span className="text-cyan-300">PULSE</span>
              </h4>
              <p className="text-gray-300">
                Your #1 source for the latest anime and manga news, straight from Japan!
              </p>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="bg-violet-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
                  <Twitter size={18} className="text-white" />
                </a>
                <a href="#" className="bg-violet-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
                  <Instagram size={18} className="text-white" />
                </a>
                <a href="#" className="bg-violet-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
                  <Youtube size={18} className="text-white" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-black mb-4">CATEGORIES</h4>
              <ul className="space-y-2 text-gray-300">
                {categories.slice(0, 5).map(cat => (
                  <li key={cat}><a href="#" className="hover:text-cyan-300 transition-colors">{cat}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4">OUR TEAM</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about" className="hover:text-cyan-300 transition-colors">About Us</a></li>
                <li><a href="/events" className="hover:text-cyan-300 transition-colors">Events</a></li>
                <li><a href="/releases" className="hover:text-cyan-300 transition-colors">Releases</a></li>
                <li><a href="/about" className="hover:text-cyan-300 transition-colors">Contact</a></li>
                <li><a href="/series" className="hover:text-cyan-300 transition-colors">Series</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-cyan-300 transition-colors">Latest Reviews</a></li>
                <li><a href="/releases" className="hover:text-cyan-300 transition-colors">Release Calendar</a></li>
                <li><a href="/series" className="hover:text-cyan-300 transition-colors">Top Series</a></li>
                <li><a href="/events" className="hover:text-cyan-300 transition-colors">Upcoming Events</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-violet-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© 2025 <span className="text-pink-400">MANGA</span><span className="text-cyan-300">PULSE</span>. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">Cookie Policy</a>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs">
              Made with ♥ by manga fans, for manga fans. All trademarks and copyrights belong to their respective owners.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer