import React, { useState, useEffect } from 'react'
import { Grid, ChevronRight, Search, Star, BookOpen, Film, TrendingUp, Award, Heart, Filter, Play, Clock, Users, ArrowUpRight, Bookmark, PlayCircle } from 'lucide-react'

// Enhanced Genre Card with better animations and accessibility
const GenreCard = ({ genre, accentColor, accentBg, darkMode, secondaryBg, onSelect, isSelected }) => {
  return (
    <div 
      className={`relative group overflow-hidden rounded-lg h-64 cursor-pointer transform transition-all duration-300 ${isSelected ? 'ring-2 ring-offset-2 ' + accentColor : ''}`}
      onClick={onSelect}
      role="button"
      aria-pressed={isSelected}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
    >
      <img 
        src={genre.image}
        alt={genre.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
      
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="flex justify-between items-center">
          <div className={`${accentBg} text-white px-3 py-1 text-sm font-bold rounded-md shadow-lg`}>
            {genre.name}
          </div>
          <div className="bg-black bg-opacity-60 text-white px-2 py-1 text-xs rounded-full flex items-center gap-1 backdrop-blur-sm">
            <BookOpen size={12} />
            <span>{genre.titles} titles</span>
          </div>
        </div>
        
        <div>
          <div className="mb-3">
            <h4 className="text-white font-bold text-lg drop-shadow-md mb-1 line-clamp-1">{genre.featured}</h4>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className="transition-all"
                    fill={i < Math.floor(genre.rating) ? "#F59E0B" : "transparent"} 
                    stroke={i < Math.floor(genre.rating) ? "none" : "#F59E0B"} 
                  />
                ))}
              </div>
              <span className="text-sm text-white font-medium">{genre.rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {genre.tags.map((tag, idx) => (
              <span key={idx} className="text-xs text-white bg-black bg-opacity-50 px-2 py-0.5 rounded-full backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <button className={`${accentBg} text-white text-xs font-bold py-2 px-4 rounded-md inline-flex items-center gap-1 group-hover:shadow-lg transition-all`}>
            <span>Explore {genre.name}</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* New hover effect for play button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-black bg-opacity-40 rounded-full p-3 backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform">
          <PlayCircle size={40} className={`${accentColor} fill-current opacity-90`} />
        </div>
      </div>
    </div>
  );
};

// Enhanced Top Anime component with hover effects and more details
const TopAnimeInGenre = ({ anime, index, accentColor, accentBg, darkMode, secondaryBg }) => {
  return (
    <div 
      className={`flex gap-3 p-3 ${index % 2 === 0 ? `${darkMode ? 'bg-gray-800/40' : 'bg-gray-100/60'}` : ''} rounded-lg transition-all hover:${darkMode ? 'bg-gray-700/70' : 'bg-gray-200/70'} cursor-pointer group`}
    >
      <div className="relative flex-shrink-0 w-16 h-20 rounded-md overflow-hidden shadow-md">
        <img 
          src={anime.image}
          alt={anime.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-6 h-6 flex items-center justify-center bg-black bg-opacity-70 text-white text-xs font-bold">
          {index + 1}
        </div>
        
        {/* Play overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Play size={16} className="text-white" fill="white" />
        </div>
      </div>
      
      <div className="flex-1">
        <h5 className="text-sm font-bold line-clamp-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{anime.title}</h5>
        <div className="flex items-center gap-1 mt-1">
          <Star size={12} fill="#F59E0B" stroke="none" />
          <span className="text-xs">{anime.rating}</span>
          <span className="text-xs text-gray-500">• {anime.year}</span>
        </div>
        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Film size={10} />
            <span>{anime.episodes} eps</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart size={10} />
            <span>{anime.likes}</span>
          </div>
        </div>
        
        {/* New status badge */}
        {anime.status && (
          <div className={`mt-1 inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded-sm ${
            anime.status === 'New' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' : 
            anime.status === 'Trending' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' : 
            'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
          }`}>
            {anime.status === 'New' && <Clock size={10} />}
            {anime.status === 'Trending' && <TrendingUp size={10} />}
            {anime.status === 'Popular' && <Users size={10} />}
            {anime.status}
          </div>
        )}
      </div>
      
      {/* Save button */}
      <div className="flex-shrink-0 self-start opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Bookmark size={16} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

// Genre Filter Component
const GenreFilter = ({ genres, selectedGenre, onSelectGenre, accentColor, accentBg, darkMode }) => {
  return (
    <div className="overflow-x-auto pb-2 hide-scrollbar">
      <div className="flex gap-2">
        {genres.map(genre => (
          <button
            key={genre.id}
            onClick={() => onSelectGenre(genre.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedGenre === genre.id 
                ? `${accentBg} text-white` 
                : `${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

// Enhanced main component with more features
const GenreHighlights = ({ accentColor = "text-blue-500", accentBg = "bg-blue-500", secondaryBg = "bg-gray-50 dark:bg-gray-800", darkMode = false }) => {
  const [selectedGenre, setSelectedGenre] = useState('action');
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Sample genre data with added properties
  const genres = [
    {
      id: 'action',
      name: 'Action',
      image: "https://ntvb.tmsimg.com/assets/p16749713_b_h10_as.jpg?w=1280&h=720",
      titles: 245,
      featured: "Demon Slayer",
      rating: 4.9,
      tags: ['Fighting', 'Adventure', 'Supernatural'],
      description: "Dynamic battles and intense combat scenes that keep you on the edge of your seat"
    },
    {
      id: 'romance',
      name: 'Romance',
      image: "https://lwlies.com/wp-content/uploads/2016/11/your-name-768x539-c-default.jpg",
      titles: 183,
      featured: "Your Name",
      rating: 4.8,
      tags: ['Drama', 'School', 'Slice of Life'],
      description: "Heartwarming stories of love and relationships that touch your heart"
    },
    {
      id: 'fantasy',
      name: 'Fantasy',
      image: "https://cdn.oneesports.gg/cdn-data/2024/10/Anime_ReZero_Characters_Beatrice_Emilia_Subaru_Liliana.jpg",
      titles: 217,
      featured: "Re:Zero",
      rating: 4.7,
      tags: ['Isekai', 'Adventure', 'Magic'],
      description: "Imaginative worlds filled with magic, mythical creatures and epic adventures"
    },
    {
      id: 'scifi',
      name: 'Sci-Fi',
      image: "https://m.media-amazon.com/images/S/pv-target-images/bd78eabf47823f52eb98d2a89fca34cdb9dacd39cacc9465f2f811e05cc8ac45._BR-6_AC_SX720_FMjpg_.jpg",
      titles: 156,
      featured: "Steins;Gate",
      rating: 4.9,
      tags: ['Time Travel', 'Psychological', 'Thriller'],
      description: "Mind-bending tales exploring technology, space, time and human consciousness"
    }
  ];
  
  // Top anime for each genre with additional properties
  const topAnimeByGenre = {
    action: [
      { title: "Attack on Titan", rating: "4.9", year: "2013", episodes: "75", likes: "2.4M", image: "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_.jpg", status: "Popular" },
      { title: "Jujutsu Kaisen", rating: "4.8", year: "2020", episodes: "24", likes: "1.8M", image: "https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_.jpg", status: "Trending" },
      { title: "One Punch Man", rating: "4.7", year: "2015", episodes: "24", likes: "1.5M", image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974742943/one-punch-man-vol-27-9781974742943_hr.jpg" },
      { title: "My Hero Academia", rating: "4.6", year: "2016", episodes: "113", likes: "2.1M", image: "https://external-preview.redd.it/netflix-my-hero-academia-youre-next-premieres-april-20-v0-JwzZ0n7z9UTm0yjaMDwEcl5p3pr7k-1RJdKSZDH_O0I.jpg?auto=webp&s=6f9b748eb34eccac28fd299e1ac0e8c1e109dc0b" },
      { title: "Demon Slayer", rating: "4.9", year: "2019", episodes: "44", likes: "3.2M", image: "https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/2ZfAUG5CTXdM34S1OhmMW1zF.jpg", status: "New" }
    ],
    romance: [
      { title: "Your Name", rating: "4.9", year: "2016", episodes: "Movie", likes: "1.9M", image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png", status: "Popular" },
      { title: "Horimiya", rating: "4.7", year: "2021", episodes: "13", likes: "980K", image: "https://i.redd.it/4hgydz0ohtpa1.jpg", status: "Trending" },
      { title: "Toradora!", rating: "4.6", year: "2008", episodes: "25", likes: "1.2M", image: "https://m.media-amazon.com/images/M/MV5BNjEyZmRmMGYtNGY1Zi00MTFiLWE0ZTMtNzUzMWJmMTgzNWE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
      { title: "Fruits Basket", rating: "4.8", year: "2019", episodes: "63", likes: "1.1M", image: "https://m.media-amazon.com/images/M/MV5BZjZmNjg3ZjMtZjQ0MS00NDE0LWE0MDctZTBjMDZiMWZhZTk3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
      { title: "Clannad: After Story", rating: "4.9", year: "2008", episodes: "24", likes: "1.5M", image: "https://images-cdn.ubuy.co.in/64591614bde2384d575f07c8-clannad-after-story-complete-series.jpg", status: "New" }
    ],
    fantasy: [
      { title: "Re:Zero", rating: "4.7", year: "2016", episodes: "50", likes: "1.7M", image: "https://m.media-amazon.com/images/M/MV5BNTY1M2NjMTItOGFhNi00NDU3LWExNzQtZGY2YWJlYzExNmU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", status: "Popular" },
      { title: "Mushoku Tensei", rating: "4.8", year: "2021", episodes: "23", likes: "1.3M", image: "https://m.media-amazon.com/images/M/MV5BYWQwNjk3MDItNDAxMS00YTQ2LWEyNDctMGYyZTE5OGQxNGQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", status: "Trending" },
      { title: "That Time I Got Reincarnated as a Slime", rating: "4.6", year: "2018", episodes: "48", likes: "1.2M", image: "https://m.media-amazon.com/images/M/MV5BOTczMjM3MDUtYmZjMC00YzZhLWE4ODQtNjg5YWU4NTJjNzY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
      { title: "Overlord", rating: "4.5", year: "2015", episodes: "39", likes: "1.1M", image: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/overlord_key_visual.webp" },
      { title: "Sword Art Online", rating: "4.4", year: "2012", episodes: "96", likes: "2.6M", image: "https://m.media-amazon.com/images/M/MV5BN2NhYzU2NDEtYzI1NS00MjgzLThjZGUtOTYxNGJkZjZmNDdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", status: "New" }
    ],
    scifi: [
      { title: "Steins;Gate", rating: "4.9", year: "2011", episodes: "24", likes: "1.8M", image: "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_.jpg", status: "Popular" },
      { title: "Psycho-Pass", rating: "4.7", year: "2012", episodes: "33", likes: "1.2M", image: "https://m.media-amazon.com/images/M/MV5BNjQ1OTNkZGYtODVlMC00NWI0LWJiYjItMzM4M2U4NjY0ZTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
      { title: "Ghost in the Shell: SAC", rating: "4.8", year: "2002", episodes: "52", likes: "980K", image: "https://m.media-amazon.com/images/M/MV5BYzllNGRjYTctY2Q2MS00M2Y3LWE5ZTktODc5ZmMwODE5OTVlXkEyXkFqcGc@._V1_.jpg", status: "Trending" },
      { title: "Cowboy Bebop", rating: "4.9", year: "1998", episodes: "26", likes: "1.6M", image: "https://m.media-amazon.com/images/M/MV5BMTU3ZTdiOGQtYmYwYy00OGM5LThmNjMtZGJmNTVlZjk1ZmEyXkEyXkFqcGc@._V1_.jpg" },
      { title: "Vivy: Fluorite Eye's Song", rating: "4.7", year: "2021", episodes: "13", likes: "750K", image: "https://upload.wikimedia.org/wikipedia/en/a/a9/Vivy_Fluorite_Eye%E2%80%99s_Song_key_visual.jpg", status: "New" }
    ]
  };
  
  const selectedGenreData = genres.find(g => g.id === selectedGenre);
  
  // Custom CSS for hiding scrollbars but keeping functionality
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className={`w-full p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Header with animated underline */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h3 className="text-2xl font-extrabold uppercase tracking-tight relative flex items-center group">
          <Grid className={`${accentColor} transform group-hover:rotate-90 transition-transform duration-300`} size={24} strokeWidth={2.5} />
          <span className="ml-2 relative">
            <span className={accentColor}>Genre</span> Highlights
            <span className={`block h-1 ${accentBg} w-12 absolute -bottom-2 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}></span>
          </span>
        </h3>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className={`relative flex-1 sm:flex-initial`}>
            <div className={`flex items-center border ${darkMode ? 'border-gray-700 focus-within:border-gray-500' : 'border-gray-300 focus-within:border-gray-400'} rounded-lg px-3 py-1.5 transition-colors`}>
              <Search size={16} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search anime..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`ml-2 text-sm bg-transparent outline-none w-full ${darkMode ? 'placeholder-gray-500 text-gray-300' : 'placeholder-gray-400 text-gray-700'}`}
              />
            </div>
          </div>
          
          <button className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} p-2 rounded-lg transition-colors`}>
            <Filter size={18} className="text-gray-500" />
          </button>
        </div>
      </div>
      
      {/* Genre Filter Tabs */}
      <div className="mb-6">
        <GenreFilter 
          genres={genres} 
          selectedGenre={selectedGenre} 
          onSelectGenre={setSelectedGenre}
          accentColor={accentColor}
          accentBg={accentBg}
          darkMode={darkMode}
        />
      </div>
      
      {/* Content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side: Genre cards */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {genres.map(genre => (
              <div key={genre.id} onClick={() => setSelectedGenre(genre.id)}>
                <GenreCard 
                  genre={genre}
                  accentColor={accentColor}
                  accentBg={accentBg}
                  darkMode={darkMode}
                  secondaryBg={secondaryBg}
                  onSelect={() => setSelectedGenre(genre.id)}
                  isSelected={selectedGenre === genre.id}
                />
              </div>
            ))}
          </div>
          
          {/* Featured Genre Description */}
          <div className={`mt-6 p-4 ${secondaryBg} rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h4 className="font-bold flex items-center gap-2 mb-2">
              <span className={`inline-block w-2 h-6 ${accentBg} rounded-sm`}></span>
              About {selectedGenreData?.name} Anime
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {selectedGenreData?.description}. This genre has gained significant popularity among anime 
              enthusiasts worldwide, known for its unique storytelling approach and memorable characters.
            </p>
            <div className="mt-3">
              <a href="#" className={`${accentColor} text-sm font-medium inline-flex items-center hover:underline`}>
                Learn more about {selectedGenreData?.name} anime
                <ArrowUpRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Right side: Top Anime list */}
        <div className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-4 h-fit order-1 lg:order-2`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <Award size={18} className={accentColor} />
              <span>Top {selectedGenreData?.name} Anime</span>
            </h4>
            <div className="flex items-center gap-1">
              <TrendingUp size={16} className={accentColor} />
              <span className="text-xs font-medium">Popular Now</span>
            </div>
          </div>
          
          {isLoading ? (
            // Loading skeleton
            <div className="space-y-3">
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="flex gap-3 animate-pulse">
                  <div className="bg-gray-300 dark:bg-gray-700 w-16 h-20 rounded-md"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {topAnimeByGenre[selectedGenre]?.map((anime, idx) => (
                <TopAnimeInGenre 
                  key={idx}
                  anime={anime}
                  index={idx}
                  accentColor={accentColor}
                  accentBg={accentBg}
                  darkMode={darkMode}
                  secondaryBg={secondaryBg}
                />
              ))}
            </div>
          )}
          
          <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
            <a href="#" className={`text-sm flex items-center justify-center gap-1 font-medium ${accentColor} hover:underline`}>
              <span>See all {selectedGenreData?.name} anime</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="mt-8 flex justify-center">
        <a href="#" className={`${accentBg} text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 hover:shadow-lg transition-all transform hover:-translate-y-1`}>
          <span>Explore All Genres</span>
          <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default GenreHighlights;