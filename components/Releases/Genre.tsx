import React, { useState } from 'react'
import { Grid, ChevronRight, Search, Star, BookOpen, Film, TrendingUp, Award, Heart } from 'lucide-react'

const GenreCard = ({ genre, accentColor, accentBg, darkMode, secondaryBg }) => {
  return (
    <div className={`relative group overflow-hidden rounded-lg h-64 cursor-pointer`}>
      <img 
        src={genre.image}
        alt={genre.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80"></div>
      
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="flex justify-between items-center">
          <div className={`${accentBg} text-white px-3 py-1 text-sm font-bold rounded-md shadow-md`}>
            {genre.name}
          </div>
          <div className={`bg-black bg-opacity-50 text-white px-2 py-1 text-xs rounded-full flex items-center gap-1`}>
            <BookOpen size={12} />
            <span>{genre.titles} titles</span>
          </div>
        </div>
        
        <div>
          <div className="mb-3">
            <h4 className="text-white font-bold drop-shadow-md mb-1">{genre.featured}</h4>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={12} 
                    fill={i < Math.floor(genre.rating) ? "#F59E0B" : "transparent"} 
                    stroke={i < Math.floor(genre.rating) ? "none" : "#F59E0B"} 
                  />
                ))}
              </div>
              <span className="text-xs text-white">{genre.rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {genre.tags.map((tag, idx) => (
              <span key={idx} className="text-xs text-white bg-black bg-opacity-40 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <a href="#" className={`${accentBg} text-white text-xs font-bold py-1.5 px-3 rounded-md inline-flex items-center gap-1 group-hover:shadow-lg transition-shadow`}>
            <span>Explore {genre.name}</span>
            <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

const TopAnimeInGenre = ({ anime, index, accentColor, accentBg, darkMode, secondaryBg }) => {
  return (
    <div className={`flex gap-3 p-3 ${index % 2 === 0 ? `${darkMode ? 'bg-gray-800/40' : 'bg-gray-100/60'}` : ''} rounded-lg transition-colors hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="relative flex-shrink-0 w-12 h-16 rounded overflow-hidden">
        <img 
          src={anime.image}
          alt={anime.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-5 h-5 flex items-center justify-center bg-black bg-opacity-70 text-white text-xs font-bold">
          {index + 1}
        </div>
      </div>
      
      <div className="flex-1">
        <h5 className="text-sm font-bold line-clamp-1">{anime.title}</h5>
        <div className="flex items-center gap-1 mt-0.5">
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
      </div>
    </div>
  );
};

const GenreHighlights = ({ accentColor, accentBg, secondaryBg, darkMode }) => {
  const [selectedGenre, setSelectedGenre] = useState('action');
  
  // Sample genre data
  const genres = [
    {
      id: 'action',
      name: 'Action',
      image: "/api/placeholder/400/300",
      titles: 245,
      featured: "Demon Slayer",
      rating: 4.9,
      tags: ['Fighting', 'Adventure', 'Supernatural']
    },
    {
      id: 'romance',
      name: 'Romance',
      image: "/api/placeholder/400/300",
      titles: 183,
      featured: "Your Name",
      rating: 4.8,
      tags: ['Drama', 'School', 'Slice of Life']
    },
    {
      id: 'fantasy',
      name: 'Fantasy',
      image: "/api/placeholder/400/300",
      titles: 217,
      featured: "Re:Zero",
      rating: 4.7,
      tags: ['Isekai', 'Adventure', 'Magic']
    },
    {
      id: 'scifi',
      name: 'Sci-Fi',
      image: "/api/placeholder/400/300",
      titles: 156,
      featured: "Steins;Gate",
      rating: 4.9,
      tags: ['Time Travel', 'Psychological', 'Thriller']
    }
  ];
  
  // Top anime for each genre
  const topAnimeByGenre = {
    action: [
      { title: "Attack on Titan", rating: "4.9", year: "2013", episodes: "75", likes: "2.4M", image: "/api/placeholder/60/80" },
      { title: "Jujutsu Kaisen", rating: "4.8", year: "2020", episodes: "24", likes: "1.8M", image: "/api/placeholder/60/80" },
      { title: "One Punch Man", rating: "4.7", year: "2015", episodes: "24", likes: "1.5M", image: "/api/placeholder/60/80" },
      { title: "My Hero Academia", rating: "4.6", year: "2016", episodes: "113", likes: "2.1M", image: "/api/placeholder/60/80" },
      { title: "Demon Slayer", rating: "4.9", year: "2019", episodes: "44", likes: "3.2M", image: "/api/placeholder/60/80" }
    ],
    romance: [
      { title: "Your Name", rating: "4.9", year: "2016", episodes: "Movie", likes: "1.9M", image: "/api/placeholder/60/80" },
      { title: "Horimiya", rating: "4.7", year: "2021", episodes: "13", likes: "980K", image: "/api/placeholder/60/80" },
      { title: "Toradora!", rating: "4.6", year: "2008", episodes: "25", likes: "1.2M", image: "/api/placeholder/60/80" },
      { title: "Fruits Basket", rating: "4.8", year: "2019", episodes: "63", likes: "1.1M", image: "/api/placeholder/60/80" },
      { title: "Clannad: After Story", rating: "4.9", year: "2008", episodes: "24", likes: "1.5M", image: "/api/placeholder/60/80" }
    ],
    fantasy: [
      { title: "Re:Zero", rating: "4.7", year: "2016", episodes: "50", likes: "1.7M", image: "/api/placeholder/60/80" },
      { title: "Mushoku Tensei", rating: "4.8", year: "2021", episodes: "23", likes: "1.3M", image: "/api/placeholder/60/80" },
      { title: "That Time I Got Reincarnated as a Slime", rating: "4.6", year: "2018", episodes: "48", likes: "1.2M", image: "/api/placeholder/60/80" },
      { title: "Overlord", rating: "4.5", year: "2015", episodes: "39", likes: "1.1M", image: "/api/placeholder/60/80" },
      { title: "Sword Art Online", rating: "4.4", year: "2012", episodes: "96", likes: "2.6M", image: "/api/placeholder/60/80" }
    ],
    scifi: [
      { title: "Steins;Gate", rating: "4.9", year: "2011", episodes: "24", likes: "1.8M", image: "/api/placeholder/60/80" },
      { title: "Psycho-Pass", rating: "4.7", year: "2012", episodes: "33", likes: "1.2M", image: "/api/placeholder/60/80" },
      { title: "Ghost in the Shell: SAC", rating: "4.8", year: "2002", episodes: "52", likes: "980K", image: "/api/placeholder/60/80" },
      { title: "Cowboy Bebop", rating: "4.9", year: "1998", episodes: "26", likes: "1.6M", image: "/api/placeholder/60/80" },
      { title: "Vivy: Fluorite Eye's Song", rating: "4.7", year: "2021", episodes: "13", likes: "750K", image: "/api/placeholder/60/80" }
    ]
  };
  
  const selectedGenreData = genres.find(g => g.id === selectedGenre);
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-extrabold uppercase tracking-tight relative flex items-center">
          <Grid className={accentColor} size={24} strokeWidth={2.5} />
          <span className="ml-2">
            <span className={accentColor}>Genre</span> Highlights
          </span>
          <span className={`block h-1 ${accentBg} w-12 mt-1 absolute bottom-0 left-0`}></span>
        </h3>
        
        <div className="relative">
          <div className={`flex items-center border ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg px-3 py-1.5`}>
            <Search size={16} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search genres..." 
              className={`ml-2 text-sm bg-transparent outline-none ${darkMode ? 'placeholder-gray-500' : 'placeholder-gray-400'}`}
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
      <div className={`${secondaryBg} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-4`}>
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
          
          <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
            <a href="#" className={`text-sm flex items-center justify-center gap-1 font-medium ${accentColor} hover:underline`}>
              <span>See all {selectedGenreData?.name} anime</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {genres.map(genre => (
              <div key={genre.id} onClick={() => setSelectedGenre(genre.id)}>
                <GenreCard 
                  genre={genre}
                  accentColor={accentColor}
                  accentBg={accentBg}
                  darkMode={darkMode}
                  secondaryBg={secondaryBg}
                />
              </div>
            ))}
          </div>
        </div>
        
        
      </div>
      
      {/* <div className="mt-8 flex justify-center">
        <a href="#" className={`${accentBg} text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 hover:shadow-lg transition-shadow`}>
          <span>Explore All Genres</span>
          <ChevronRight size={16} />
        </a>
      </div> */}
    </div>
  );
};

export default GenreHighlights;