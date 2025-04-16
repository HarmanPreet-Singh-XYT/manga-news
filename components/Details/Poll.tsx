import React, { useState } from 'react';

const AnimePoll = ({ anime, darkMode, secondaryBg, accentBg, borderColor, cardHoverClass, buttonHoverEffect }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [results, setResults] = useState({
    // Initial mock data for vote counts
    0: 42,
    1: 28,
    2: 37,
    3: 15
  });
  const [showThankYou, setShowThankYou] = useState(false);
  
  const totalVotes = Object.values(results).reduce((sum, count) => sum + count, 0);
  
  const handleVote = () => {
    if (selectedCharacter !== null && !hasVoted) {
      // Update the results
      setResults(prev => ({
        ...prev,
        [selectedCharacter]: prev[selectedCharacter] + 1
      }));
      
      setHasVoted(true);
      setShowThankYou(true);
      
      // Hide thank you message after 3 seconds
      setTimeout(() => {
        setShowThankYou(false);
      }, 3000);
    }
  };
  
  const getPercentage = (index) => {
    return Math.round((results[index] / totalVotes) * 100);
  };
  
  return (
    <div className={`relative ${secondaryBg} p-6 mb-8 shadow-lg ${cardHoverClass}`} style={{ clipPath: "polygon(0 0, 100% 0, 100% 97%, 3% 100%)" }}>
      <div className={`absolute -top-3 -right-3 w-16 h-16 ${accentBg} flex items-center justify-center transform rotate-12 font-black text-white`} 
           style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}>
        NEW!
      </div>
      
      <h3 className={`text-xl font-black uppercase mb-4 border-b ${borderColor} pb-2`} 
          style={{ textShadow: darkMode ? "1px 1px 0px #7C3AED" : "1px 1px 0px #8B5CF6" }}>
        WEEKLY POLL
      </h3>
      
      <div className="mb-4">
        <p className="font-bold mb-2">Which character should get more screen time?</p>
        
        {!hasVoted ? (
          <div className="space-y-2">
            {anime.characters.slice(0, 4).map((character, index) => (
              <div key={index} className="flex items-center gap-2">
                <input 
                  type="radio" 
                  id={`char-${index}`} 
                  name="character" 
                  className="accent-pink-600" 
                  onChange={() => setSelectedCharacter(index)}
                  checked={selectedCharacter === index}
                />
                <label htmlFor={`char-${index}`}>{character.name}</label>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {anime.characters.slice(0, 4).map((character, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{character.name}</span>
                  <span className="font-bold">{getPercentage(index)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div 
                    className={`h-2.5 rounded-full ${darkMode ? 'bg-purple-600' : 'bg-violet-500'}`} 
                    style={{ width: `${getPercentage(index)}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <p className="text-sm text-gray-500 mt-2">Total votes: {totalVotes}</p>
          </div>
        )}
      </div>
      
      {showThankYou && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-center">
          Thank you for voting!
        </div>
      )}
      
      <button 
        className={`w-full ${darkMode ? 'bg-purple-700 hover:bg-purple-800' : 'bg-violet-600 hover:bg-violet-700'} 
        text-white py-2 font-bold ${buttonHoverEffect} shadow-md 
        ${(!selectedCharacter && !hasVoted) ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
        onClick={handleVote}
        disabled={selectedCharacter === null && !hasVoted}
      >
        {hasVoted ? 'RESULTS' : 'VOTE NOW'}
      </button>
    </div>
  );
};

export default AnimePoll;