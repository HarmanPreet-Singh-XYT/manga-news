'use client'
import { useState, useEffect } from 'react';
import { X, Search,Flame as Fire, ChevronRight, Star, Calendar, Bookmark, Eye } from 'lucide-react';

// Mock data for articles
const MOCK_ARTICLES = [
  {
    id: 1,
    title: "One Piece Live Action Season 2 Confirms New Cast Members",
    category: "News",
    image: "/api/placeholder/600/400",
    excerpt: "Netflix announces exciting additions to the upcoming season of the live-action adaptation.",
    author: "Manga Master",
    date: "April 15, 2025",
    isHot: true,
    views: 4256,
    tags: ["One Piece", "Netflix", "Live Action"]
  },
  {
    id: 2,
    title: "Chainsaw Man Part 3 Announced with New Character Designs",
    category: "Manga",
    image: "/api/placeholder/600/400",
    excerpt: "Tatsuki Fujimoto reveals shocking new designs for the upcoming arc. Fans are divided over the new direction.",
    author: "Anime Fan",
    date: "April 12, 2025",
    isHot: true,
    views: 3642,
    tags: ["Chainsaw Man", "Manga", "Tatsuki Fujimoto"]
  },
  {
    id: 3,
    title: "Studio MAPPA Reveals Behind-the-Scenes Look at Jujutsu Kaisen Movie",
    category: "Anime",
    image: "/api/placeholder/600/400",
    excerpt: "Get an exclusive peek at the animation process for the highly anticipated feature film.",
    author: "Sakura Chan",
    date: "April 10, 2025",
    isHot: false,
    views: 2834,
    tags: ["Jujutsu Kaisen", "MAPPA", "Movie"]
  },
  {
    id: 4,
    title: "My Hero Academia Final Season Begins Airing This Summer",
    category: "Anime",
    image: "/api/placeholder/600/400",
    excerpt: "The epic conclusion to the beloved superhero series starts July 2025.",
    author: "Hero Watcher",
    date: "April 9, 2025",
    isHot: false,
    views: 3128,
    tags: ["My Hero Academia", "Final Season", "Summer 2025"]
  },
  {
    id: 5,
    title: "Demon Slayer Creator Launches New Manga Series",
    category: "Manga",
    image: "/api/placeholder/600/400",
    excerpt: "Koyoharu Gotouge returns with a mysterious new title after a year-long hiatus.",
    author: "Manga Master",
    date: "April 8, 2025",
    isHot: true,
    views: 5721,
    tags: ["Demon Slayer", "Koyoharu Gotouge", "New Series"]
  },
  {
    id: 6,
    title: "Attack on Titan Creator Announces New One-Shot",
    category: "Manga",
    image: "/api/placeholder/600/400",
    excerpt: "Hajime Isayama returns with a special chapter exploring the world after the series finale.",
    author: "Titan Observer",
    date: "April 5, 2025",
    isHot: false,
    views: 2943,
    tags: ["Attack on Titan", "Hajime Isayama", "One-Shot"]
  },
];

// Categories for filtering
const CATEGORIES = [
  "All",
  "News",
  "Manga", 
  "Anime",
  "Industry",
  "Reviews",
  "Interviews"
];

export default function ArticlesPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Filter articles based on category and search query
  const filteredArticles = MOCK_ARTICLES.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Theme colors based on mode
  const theme = darkMode ? {
    bg: "bg-gray-900",
    cardBg: "bg-gray-800",
    text: "text-gray-50",
    accent: "text-pink-500",
    accentBg: "bg-pink-500",
    highlight: "text-amber-500",
    highlightBg: "bg-amber-500",
    border: "border-gray-700",
    secondary: "text-gray-400"
  } : {
    bg: "bg-indigo-50",
    cardBg: "bg-white",
    text: "text-gray-900",
    accent: "text-violet-600",
    accentBg: "bg-violet-600",
    highlight: "text-amber-500",
    highlightBg: "bg-amber-500",
    border: "border-indigo-200",
    secondary: "text-gray-600"
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}>
      {/* Top Controls */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-4xl md:text-5xl font-black uppercase tracking-tight transform -rotate-1 ${theme.accent} flex items-center`}>
            <span className="relative">
              MANGA NEWS
              <span className={`absolute -bottom-1 left-0 w-full h-1 ${theme.accentBg}`}></span>
            </span>
            <span className={`ml-2 text-sm ${theme.highlightBg} text-black font-bold py-1 px-3 rounded-sm transform rotate-3 clip-polygon`}>HOT!</span>
          </h1>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${theme.border} transform hover:scale-105 transition-transform`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className={`p-2 rounded-lg ${theme.cardBg} border ${theme.border} transform hover:scale-105 transition-transform`}
            >
              <Search size={20} />
            </button>
          </div>
        </div>
        
        {/* Search Box */}
        {showSearch && (
          <div className={`mb-6 p-4 ${theme.cardBg} border-2 ${theme.border} rounded-lg relative transform -rotate-1`}>
            <div className="flex items-center">
              <Search size={20} className="mr-2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`flex-grow bg-transparent focus:outline-none ${theme.text}`}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="ml-2">
                  <X size={18} />
                </button>
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-pink-500 transform rotate-12"></div>
          </div>
        )}
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 font-bold transform hover:scale-105 transition-transform ${
                selectedCategory === category 
                  ? `${theme.accentBg} text-white -rotate-1` 
                  : `${theme.cardBg} ${theme.text} rotate-1 border ${theme.border}`
              } clip-polygon`}
            >
              {category}
              {selectedCategory === category && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <div className="container mx-auto px-4 mb-12">
          <div className={`relative ${theme.cardBg} border-4 ${theme.border} p-6 rounded-lg overflow-hidden transform -rotate-1`}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 relative">
                <img 
                  src={filteredArticles[0].image} 
                  alt={filteredArticles[0].title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                {filteredArticles[0].isHot && (
                  <div className={`absolute top-3 right-3 ${theme.highlightBg} text-black font-bold py-1 px-4 rounded-sm transform rotate-3 flex items-center space-x-1`}>
                    <Fire size={16} />
                    <span>TRENDING</span>
                  </div>
                )}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-500/20 to-transparent opacity-50"></div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className={`inline-block mb-3 ${theme.accent} font-bold uppercase text-sm`}>
                    {filteredArticles[0].category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                    {filteredArticles[0].title}
                  </h2>
                  <p className={`${theme.secondary} mb-4`}>{filteredArticles[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {filteredArticles[0].tags.map((tag, idx) => (
                      <span key={idx} className={`${theme.cardBg} ${theme.border} border px-2 py-1 text-xs font-medium`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className={`${theme.secondary} text-sm flex items-center mr-4`}>
                      <Calendar size={14} className="mr-1" />
                      {filteredArticles[0].date}
                    </span>
                    <span className={`${theme.secondary} text-sm flex items-center`}>
                      <Eye size={14} className="mr-1" />
                      {filteredArticles[0].views}
                    </span>
                  </div>
                  <button className={`${theme.accentBg} text-white font-bold py-2 px-4 rounded-sm transform hover:scale-105 transition-transform flex items-center clip-polygon`}>
                    READ MORE
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-pink-500 transform rotate-12"></div>
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-pink-500"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-pink-500"></div>
          </div>
        </div>
      )}
      
      {/* Article Grid */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.slice(1).map((article) => (
            <div 
              key={article.id} 
              className={`${theme.cardBg} border-2 ${theme.border} p-0 rounded-lg overflow-hidden transform ${article.id % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:scale-102 transition-transform`}
            >
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                {article.isHot && (
                  <div className={`absolute top-3 right-3 ${theme.highlightBg} text-black font-bold py-1 px-3 rounded-sm transform rotate-3 flex items-center space-x-1 text-xs`}>
                    <Fire size={12} />
                    <span>HOT</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <span className={`inline-block ${theme.accent} font-bold uppercase text-xs`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className={`${theme.secondary} text-sm mb-4 line-clamp-2`}>{article.excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className={`${theme.secondary} text-xs flex items-center mr-3`}>
                      <Calendar size={12} className="mr-1" />
                      {article.date.split(' ')[0]}
                    </span>
                    <span className={`${theme.secondary} text-xs flex items-center`}>
                      <Eye size={12} className="mr-1" />
                      {article.views}
                    </span>
                  </div>
                  <button className={`${theme.accent} text-sm font-bold hover:underline flex items-center`}>
                    READ
                    <ChevronRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-pink-500 transform rotate-12"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* No Results Message */}
      {filteredArticles.length === 0 && (
        <div className="container mx-auto px-4 py-16 text-center">
          <div className={`${theme.cardBg} border-2 ${theme.border} p-8 rounded-lg transform -rotate-1 max-w-lg mx-auto`}>
            <h3 className="text-2xl font-black mb-4">NO ARTICLES FOUND!</h3>
            <p className={`${theme.secondary}`}>Try adjusting your search or filter criteria to find more manga news.</p>
            <button 
              onClick={() => {setSelectedCategory("All"); setSearchQuery("");}}
              className={`mt-4 ${theme.accentBg} text-white font-bold py-2 px-4 rounded-sm transform hover:scale-105 transition-transform`}
            >
              Reset Filters
            </button>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-pink-500 transform rotate-12"></div>
          </div>
        </div>
      )}
      
      {/* Load More Button */}
      {filteredArticles.length > 6 && (
        <div className="container mx-auto px-4 pb-12 text-center">
          <button className={`${theme.accentBg} text-white font-bold py-3 px-8 rounded-sm transform -rotate-1 hover:scale-105 transition-transform clip-polygon`}>
            LOAD MORE ARTICLES
          </button>
        </div>
      )}
      
      {/* Speed line decorative background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${darkMode ? '#ffffff' : '#000000'} 0px, ${darkMode ? '#ffffff' : '#000000'} 1px, transparent 1px, transparent 10px)`
        }}></div>
      </div>
      
      <style jsx>{`
        .clip-polygon {
          clip-path: polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%);
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
}