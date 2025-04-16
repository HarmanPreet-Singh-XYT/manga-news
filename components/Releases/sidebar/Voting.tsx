import { useState, useContext } from 'react';
import { ThumbsUp } from 'lucide-react';

export default function AnimePoll({darkMode}:{darkMode:boolean}) {
  // State for poll options and voting status
  const [pollOptions, setPollOptions] = useState([
    { name: "Demon Slayer: Final Arc", votes: 145, animDelay: 100 },
    { name: "My Hero Academia Season 8", votes: 210, animDelay: 200 },
    { name: "Jujutsu Kaisen: Shibuya Aftermath", votes: 254, animDelay: 300 },
    { name: "Solo Leveling Season 2", votes: 189, animDelay: 400 },
    { name: "One Punch Man Season 3", votes: 168, animDelay: 500 }
  ]);
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isVoting, setIsVoting] = useState(false);

  
  // Theme classes based on your provided theme
  const themeClass = darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900';
  const accentColor = darkMode ? 'text-pink-500' : 'text-violet-600';
  const accentBg = darkMode ? 'bg-pink-500' : 'bg-violet-600';
  const secondaryBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const hoverBg = 'transition-all duration-300 hover:shadow-lg';
  const barBg = darkMode ? 'bg-gray-700' : 'bg-gray-200';
  const accentBorder = darkMode ? 'border-pink-700' : 'border-violet-300';

  // Find the max votes for percentage calculation
  const maxVotes = Math.max(...pollOptions.map(option => option.votes));

  // Handle selecting an option
  const handleSelectOption = (index) => {
    if (!hasVoted && !isVoting) {
      setSelectedOption(index);
    }
  };

  // Handle voting
  const handleVote = () => {
    if (selectedOption !== null && !hasVoted) {
      setIsVoting(true);
      
      // Simulate API call with timeout
      setTimeout(() => {
        setPollOptions(pollOptions.map((option, idx) => {
          if (idx === selectedOption) {
            return { ...option, votes: option.votes + 1 };
          }
          return option;
        }));
        setHasVoted(true);
        setIsVoting(false);
      }, 800);
    }
  };

  // Component for section title
  function SectionTitle({ icon, highlight, title }) {
    return (
      <div className="flex items-center mb-3">
        {icon}
        <span className={`${accentColor} font-bold mx-2`}>{highlight}</span>
        <span className="font-bold">{title}</span>
      </div>
    );
  }

  return ( 
    <div className={`${secondaryBg} border-2 ${accentBorder} clip-path-polygon-reverse p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-md`}>
        <SectionTitle
          icon={<ThumbsUp size={18} className={accentColor} />}
          highlight="Weekly"
          title="Poll"
        />
        
        <div className="mb-4">
          <p className="font-bold mb-3 flex items-center">
            <span className="inline-block w-2 h-2 rounded-full animate-pulse mr-2 bg-red-500"></span>
            Which Spring 2025 anime are you most excited for?
          </p>
          
          <div className="space-y-3 mt-4">
            {pollOptions.map((option, index) => (
              <div
                key={index}
                className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-blue-100'} p-2 rounded transition-colors duration-300 ${selectedOption === index ? `ring-2 ${darkMode ? 'ring-pink-500' : 'ring-violet-500'}` : ''} ${hasVoted ? 'cursor-default' : 'cursor-pointer'}`}
                onClick={() => handleSelectOption(index)}
              >
                <div className="flex justify-between mb-1 text-sm">
                  <span className="font-medium">{option.name}</span>
                  <span className={accentColor}>{option.votes} votes</span>
                </div>
                <div className={`w-full h-2 ${barBg} rounded-full overflow-hidden`}>
                  <div
                    className={`h-full ${accentBg} transition-all duration-700`}
                    style={{
                      width: `${(option.votes / Math.max(...pollOptions.map(o => o.votes))) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {hasVoted ? (
          <div className={`w-full py-2 text-center font-bold ${accentColor}`}>
            Thanks for voting!
          </div>
        ) : (
          <button 
            className={`w-full ${accentBg} text-white font-bold uppercase py-2 transform hover:scale-105 transition-all text-center shadow-lg ${selectedOption === null || isVoting ? 'opacity-70 cursor-not-allowed' : ''}`}
            onClick={handleVote}
            disabled={selectedOption === null || isVoting}
          >
            {isVoting ? "Voting..." : "Vote Now"}
          </button>
        )}
      </div>
  );
}