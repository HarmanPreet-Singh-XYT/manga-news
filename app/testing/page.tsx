'use client'
import { useState } from 'react';
import { 
  BookOpen, 
  User, 
  Settings, 
  Clock, 
  ChevronRight, 
  Bell, 
  Star, 
  Heart, 
  Award, 
  TrendingUp, 
  Bookmark, 
  ArrowRight, 
  Moon, 
  Sun
} from 'lucide-react';

// Main component
export default function AnimeMangaInterface() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Updated theme variables using the provided theme
  const baseBgClass = isDarkMode ? 'bg-gray-900' : 'bg-indigo-50'; 
  const baseTextClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const primaryAccent = isDarkMode ? 'text-pink-500' : 'text-violet-600';
  const secondaryAccent = isDarkMode ? 'purple-900' : 'violet-200';
  
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const panelBorder = isDarkMode ? 'border-pink-500' : 'border-violet-500';
  const buttonBg = isDarkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-violet-600 hover:bg-violet-700';
  const secondaryBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  
  return (
    <div className={`flex min-h-screen ${baseBgClass} ${baseTextClass}`}>
      {/* Sidebar */}
      <div className={`w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} relative overflow-hidden`}>
        {/* Manga panel decoration */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-yellow-500 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-yellow-500 opacity-50"></div>
        
        {/* Logo */}
        <div className="p-6 flex justify-center">
          <h1 className={`text-2xl font-black uppercase tracking-tight transform -rotate-1 ${primaryAccent} text-shadow`}>MANGA<span className="text-yellow-500">Pulse</span></h1>
        </div>
        
        {/* Navigation */}
        <nav className="mt-6 px-3">
          <ul className="space-y-2">
            <NavItem 
              icon={<User />} 
              label="Profile" 
              active={activeTab === 'profile'} 
              onClick={() => setActiveTab('profile')} 
              isDarkMode={isDarkMode}
            />
            <NavItem 
              icon={<BookOpen />} 
              label="My Library" 
              active={activeTab === 'library'} 
              onClick={() => setActiveTab('library')} 
              isDarkMode={isDarkMode}
            />
            <NavItem 
              icon={<Clock />} 
              label="Reading History" 
              active={activeTab === 'history'} 
              onClick={() => setActiveTab('history')} 
              isDarkMode={isDarkMode}
            />
            <NavItem 
              icon={<Settings />} 
              label="Settings" 
              active={activeTab === 'settings'} 
              onClick={() => setActiveTab('settings')} 
              isDarkMode={isDarkMode}
            />
          </ul>
        </nav>
        
        {/* Sidebar footer */}
        <div className="absolute bottom-0 w-full p-4">
          <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-indigo-100'} transform -rotate-1`}>
            <p className="text-sm font-bold">Currently reading:</p>
            <p className={`text-xs ${primaryAccent}`}>One Piece - Chapter 1092</p>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto py-8 px-6">
          {activeTab === 'profile' && <ProfilePage isDarkMode={isDarkMode} primaryAccent={primaryAccent} cardBg={cardBg} panelBorder={panelBorder} buttonBg={buttonBg} />}
          {activeTab === 'library' && <LibraryPage isDarkMode={isDarkMode} primaryAccent={primaryAccent} cardBg={cardBg} panelBorder={panelBorder} buttonBg={buttonBg} />}
          {activeTab === 'history' && <HistoryPage isDarkMode={isDarkMode} primaryAccent={primaryAccent} cardBg={cardBg} panelBorder={panelBorder} buttonBg={buttonBg} />}
          {activeTab === 'settings' && <SettingsPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} primaryAccent={primaryAccent} cardBg={cardBg} panelBorder={panelBorder} buttonBg={buttonBg} secondaryBg={secondaryBg} secondaryAccent={secondaryAccent} />}
        </div>
      </div>
    </div>
  );
}

// Navigation Item Component
function NavItem({ icon, label, active, onClick, isDarkMode }) {
  return (
    <li 
      onClick={onClick}
      className={`flex items-center p-3 rounded cursor-pointer transform transition-transform hover:scale-105 ${
        active 
        ? (isDarkMode ? 'bg-gray-700 text-pink-500' : 'bg-violet-100 text-violet-800') 
        : (isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-violet-50')
      } ${active ? '-rotate-1' : ''}`}
    >
      <div className="mr-3">{icon}</div>
      <span className="font-bold">{label}</span>
      {active && <ChevronRight className="ml-auto" size={16} />}
    </li>
  );
}

// Profile Page Component
function ProfilePage({ isDarkMode, primaryAccent, cardBg, panelBorder, buttonBg }) {
  return (
    <div>
      <h1 className={`text-4xl font-black uppercase mb-8 ${primaryAccent} transform -rotate-1 tracking-tight`}>MY PROFILE</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Info Panel */}
        <div className={`${cardBg} border-4 ${panelBorder} rounded-lg p-6 transform rotate-1 col-span-1`}>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-500">
              <img src="/api/placeholder/128/128" alt="User Avatar" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-black mt-4">MANGA_HERO_99</h2>
            <p className={`${primaryAccent} font-bold`}>Premium Member</p>
            
            <div className="w-full mt-6">
              <div className="flex justify-between mb-2">
                <span className="font-bold">Level:</span>
                <span className="font-bold text-yellow-500">42</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Chapters Read:</span>
                <span className="font-bold text-yellow-500">1,287</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Series Following:</span>
                <span className="font-bold text-yellow-500">28</span>
              </div>
            </div>
            
            <button className={`w-full mt-6 ${buttonBg} text-white font-bold py-2 rounded transform hover:scale-105 transition-transform uppercase`}>
              Edit Profile
            </button>
          </div>
        </div>
        
        {/* Activity & Stats */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          {/* Reading Stats */}
          <div className={`${cardBg} border-4 border-yellow-500 rounded-lg p-6 transform -rotate-1`}>
            <h3 className="text-xl font-black uppercase mb-4 flex items-center">
              <Award className="mr-2" /> Reading Achievement
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatItem icon={<BookOpen />} value="87%" label="Completion Rate" isDarkMode={isDarkMode} />
              <StatItem icon={<TrendingUp />} value="3.2k" label="Pages This Week" isDarkMode={isDarkMode} />
              <StatItem icon={<Star />} value="46" label="Series Completed" isDarkMode={isDarkMode} />
              <StatItem icon={<Clock />} value="128h" label="Reading Time" isDarkMode={isDarkMode} />
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className={`${cardBg} border-4 ${panelBorder} rounded-lg p-6`}>
            <h3 className="text-xl font-black uppercase mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <ActivityItem 
                title="Completed reading Chainsaw Man" 
                time="2 hours ago"
                isDarkMode={isDarkMode}
              />
              <ActivityItem 
                title="Added Jujutsu Kaisen to favorites" 
                time="Yesterday"
                isDarkMode={isDarkMode}
              />
              <ActivityItem 
                title="Left a review on One Piece Ch.1092" 
                time="3 days ago"
                isDarkMode={isDarkMode}
              />
            </div>
            <button className={`flex items-center justify-center w-full mt-4 py-2 font-bold text-sm ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-100 hover:bg-indigo-200'}`}>
              View All Activity <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Recommendations */}
      <div className="mt-8">
        <h2 className={`text-2xl font-black uppercase mb-4 ${primaryAccent}`}>RECOMMENDED FOR YOU</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <MangaCard key={i} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Library Page Component
function LibraryPage({ isDarkMode, primaryAccent, cardBg, panelBorder, buttonBg }) {
  const [libraryTab, setLibraryTab] = useState('reading');
  
  return (
    <div>
      <h1 className={`text-4xl font-black uppercase mb-8 ${primaryAccent} transform -rotate-1 tracking-tight`}>MY LIBRARY</h1>
      
      {/* Library Tabs */}
      <div className="flex mb-6 overflow-x-auto">
        <LibraryTab 
          label="Currently Reading" 
          count={12} 
          active={libraryTab === 'reading'} 
          onClick={() => setLibraryTab('reading')} 
          isDarkMode={isDarkMode}
        />
        <LibraryTab 
          label="Completed" 
          count={46} 
          active={libraryTab === 'completed'} 
          onClick={() => setLibraryTab('completed')} 
          isDarkMode={isDarkMode}
        />
        <LibraryTab 
          label="Want to Read" 
          count={23} 
          active={libraryTab === 'want'} 
          onClick={() => setLibraryTab('want')} 
          isDarkMode={isDarkMode}
        />
        <LibraryTab 
          label="Favorites" 
          count={8} 
          active={libraryTab === 'favorites'} 
          onClick={() => setLibraryTab('favorites')} 
          isDarkMode={isDarkMode}
        />
      </div>
      
      {/* Search and Filter */}
      <div className={`flex flex-col md:flex-row gap-4 mb-6 ${cardBg} p-4 rounded-lg`}>
        <div className="flex-1">
          <input 
            type="text" 
            placeholder="Search your library..." 
            className={`w-full p-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
          />
        </div>
        <div className="flex gap-2">
          <select className={`p-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}>
            <option>Sort by</option>
            <option>Recently Updated</option>
            <option>Title (A-Z)</option>
            <option>Rating (High-Low)</option>
          </select>
          <button className={`${buttonBg} text-white font-bold py-2 px-4 rounded`}>
            Filter
          </button>
        </div>
      </div>
      
      {/* Manga Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <LibraryMangaCard 
            key={index}
            title={["One Piece", "Jujutsu Kaisen", "Chainsaw Man", "My Hero Academia", "Demon Slayer", "Spy × Family", "Attack on Titan", "Tokyo Revengers"][index]}
            progress={index % 3 === 0 ? "New Chapter!" : `${Math.floor(Math.random() * 100)}% Complete`}
            isDarkMode={isDarkMode}
            
            
          />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className={`inline-flex rounded-md shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transform -rotate-1`}>
          <button className={`px-4 py-2 font-bold border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>Previous</button>
          <button className={`px-4 py-2 font-bold ${buttonBg} text-white`}>1</button>
          <button className={`px-4 py-2 font-bold border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>2</button>
          <button className={`px-4 py-2 font-bold border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>3</button>
          <button className={`px-4 py-2 font-bold border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>Next</button>
        </div>
      </div>
    </div>
  );
}

// History Page Component
function HistoryPage({ isDarkMode, primaryAccent, cardBg, panelBorder, buttonBg }) {
  return (
    <div>
      <h1 className={`text-4xl font-black uppercase mb-8 ${primaryAccent} transform -rotate-1 tracking-tight`}>READING HISTORY</h1>
      
      {/* Filter Controls */}
      <div className={`flex flex-col md:flex-row justify-between items-center mb-6 ${cardBg} p-4 rounded-lg`}>
        <div className="font-bold">
          <span>Showing: </span>
          <select className={`font-bold rounded p-1 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <option>All Time</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
        <div className="flex mt-4 md:mt-0">
          <button className={`${buttonBg} text-white font-bold py-1 px-4 rounded mr-2`}>
            Clear History
          </button>
          <button className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} font-bold py-1 px-4 rounded`}>
            Export
          </button>
        </div>
      </div>
      
      {/* Reading Stats Card */}
      <div className={`mb-8 ${cardBg} border-4 ${panelBorder} p-6 rounded-lg transform -rotate-1`}>
        <h3 className="text-xl font-black uppercase mb-4">READING STATISTICS</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatItem icon={<Clock />} value="87h" label="This Month" isDarkMode={isDarkMode} />
          <StatItem icon={<BookOpen />} value="42" label="Chapters Read" isDarkMode={isDarkMode} />
          <StatItem icon={<TrendingUp />} value="12" label="Series Followed" isDarkMode={isDarkMode} />
          <StatItem icon={<Award />} value="5" label="Series Completed" isDarkMode={isDarkMode} />
        </div>
      </div>
      
      {/* History Timeline */}
      <div className={`${cardBg} rounded-lg p-6`}>
        <h3 className="text-xl font-black uppercase mb-4">RECENT ACTIVITY</h3>
        
        {/* Today */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className={`h-1 flex-grow ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} mr-4`}></div>
            <h4 className="font-bold text-lg whitespace-nowrap">TODAY</h4>
            <div className={`h-1 flex-grow ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} ml-4`}></div>
          </div>
          
          <div className="space-y-4">
            <HistoryItem 
              title="One Piece" 
              chapter="Chapter 1092" 
              time="12:30 PM" 
              progress="87%" 
              isDarkMode={isDarkMode} 
              
            />
            <HistoryItem 
              title="Jujutsu Kaisen" 
              chapter="Chapter 243" 
              time="10:15 AM" 
              progress="100%" 
              isDarkMode={isDarkMode} 
              
            />
          </div>
        </div>
        
        {/* Yesterday */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className={`h-1 flex-grow ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} mr-4`}></div>
            <h4 className="font-bold text-lg whitespace-nowrap">YESTERDAY</h4>
            <div className={`h-1 flex-grow ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} ml-4`}></div>
          </div>
          
          <div className="space-y-4">
            <HistoryItem 
              title="Chainsaw Man" 
              chapter="Chapter 115" 
              time="8:45 PM" 
              progress="62%" 
              isDarkMode={isDarkMode} 
              
            />
            <HistoryItem 
              title="My Hero Academia" 
              chapter="Chapter 383" 
              time="7:20 PM" 
              progress="100%" 
              isDarkMode={isDarkMode} 
              
            />
            <HistoryItem 
              title="Spy × Family" 
              chapter="Chapter 78" 
              time="3:15 PM" 
              progress="100%" 
              isDarkMode={isDarkMode} 
              
            />
          </div>
        </div>
        
        {/* Older */}
        <div>
          <div className="flex items-center mb-4">
            <div className={`h-1 flex-grow ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} mr-4`}></div>
            <h4 className="font-bold text-lg whitespace-nowrap">EARLIER THIS WEEK</h4>
            <div className={`h-1 flex-grow ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} ml-4`}></div>
          </div>
          
          <div className="space-y-4">
            <HistoryItem 
              title="Demon Slayer" 
              chapter="Chapter 205" 
              time="Tuesday" 
              progress="100%" 
              isDarkMode={isDarkMode} 
              
            />
            <HistoryItem 
              title="Attack on Titan" 
              chapter="Chapter 139" 
              time="Monday" 
              progress="100%" 
              isDarkMode={isDarkMode} 
              
            />
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button className={`font-bold py-2 px-6 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-100 hover:bg-indigo-200'} rounded inline-flex items-center transform -rotate-1`}>
            Load More History <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Settings Page Component
function SettingsPage({ isDarkMode, setIsDarkMode, primaryAccent, cardBg, panelBorder, buttonBg, secondaryBg, secondaryAccent }) {
  return (
    <div>
      <h1 className={`text-4xl font-black uppercase mb-8 ${primaryAccent} transform -rotate-1 tracking-tight`}>SETTINGS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Settings Categories Sidebar */}
        <div className="col-span-1">
          <div className={`${cardBg} rounded-lg border-4 ${panelBorder} p-4 transform rotate-1`}>
            <h3 className="text-xl font-black uppercase mb-4">CATEGORIES</h3>
            <ul className="space-y-2">
              <SettingsMenuItem label="Account" active={true} isDarkMode={isDarkMode} />
              <SettingsMenuItem label="Appearance" active={false} isDarkMode={isDarkMode} />
              <SettingsMenuItem label="Notifications" active={false} isDarkMode={isDarkMode} />
              <SettingsMenuItem label="Reading Preferences" active={false} isDarkMode={isDarkMode} />
              <SettingsMenuItem label="Privacy" active={false} isDarkMode={isDarkMode} />
              <SettingsMenuItem label="Subscription" active={false} isDarkMode={isDarkMode} />
            </ul>
          </div>
        </div>
        
        {/* Settings Content */}
        <div className="col-span-1 md:col-span-2">
          <div className={`${cardBg} rounded-lg p-6`}>
            <h3 className="text-xl font-black uppercase mb-6">ACCOUNT SETTINGS</h3>
            
            {/* Profile Settings */}
            <div className="mb-8">
              <h4 className={`font-bold text-lg mb-4 ${primaryAccent}`}>Profile Information</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Username</label>
                  <input 
                    type="text" 
                    value="MANGA_HERO_99"
                    className={`w-full p-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    value="manga.hero@example.com"
                    className={`w-full p-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-bold mb-2">Bio</label>
                <textarea 
                  rows={3}
                  className={`w-full p-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  defaultValue="Avid manga reader since 2010. Huge fan of shonen and seinen genres!"
                ></textarea>
              </div>
            </div>
            
            {/* Theme Settings */}
            <div className="mb-8">
              <h4 className={`font-bold text-lg mb-4 ${primaryAccent}`}>Theme Settings</h4>
              
              <div className={`p-4 rounded ${secondaryBg} mb-4`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-bold">Dark Mode</h5>
                    <p className="text-sm opacity-80">Switch between light and dark themes</p>
                  </div>
                  <button 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : `bg-${secondaryAccent}`}`}
                  >
                    {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
                  </button>
                </div>
              </div>
              
              <div className={`p-4 rounded ${secondaryBg} mb-4`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-bold">Reading Layout</h5>
                    <p className="text-sm opacity-80">Choose your preferred manga reading layout</p>
                  </div>
                  <select className={`p-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <option>Continuous Vertical</option>
                    <option>Page by Page</option>
                    <option>Double Page Spread</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Notification Settings */}
            <div className="mb-8">
              <h4 className={`font-bold text-lg mb-4 ${primaryAccent}`}>Notification Preferences</h4>
              
              <div className="space-y-4">
                <NotificationSetting 
                  label="New Chapter Alerts" 
                  description="Get notified when followed series have new chapters"
                  enabled={true}
                  isDarkMode={isDarkMode}
                  
                />
                <NotificationSetting 
                  label="Series Updates" 
                  description="Notifications about series status changes"
                  enabled={true}
                  isDarkMode={isDarkMode}
                  
                />
                <NotificationSetting 
                  label="Newsletter" 
                  description="Weekly highlights and recommendations"
                  enabled={false}
                  isDarkMode={isDarkMode}
                  
                />
              </div>
            </div>
            
            {/* Save Button */}
            <div className="flex justify-end">
              <button className={`${buttonBg} text-white font-bold py-2 px-6 rounded transform -rotate-1 hover:scale-105 transition-transform uppercase`}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function StatItem({ icon, value, label, isDarkMode }) {
  return (
    <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-indigo-50'} text-center transform rotate-1`}>
      <div className="flex justify-center mb-1">{icon}</div>
      <div className="font-black text-xl text-yellow-500">{value}</div>
      <div className="text-xs font-bold opacity-80">{label}</div>
    </div>
  );
}

function ActivityItem({ title, time, isDarkMode }) {
  return (
    <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-indigo-50'} transform -rotate-1`}>
      <div className="font-bold">{title}</div>
      <div className="text-xs opacity-80">{time}</div>
    </div>
  );
}

function MangaCard({ isDarkMode }) {
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const baseTextClass = isDarkMode ? 'text-white' : 'text-gray-900';

  return (
    <div className={`${cardBg} ${baseTextClass} rounded-lg overflow-hidden transform hover:scale-105 transition-transform`}>
      <div className="h-48 bg-gray-500 relative">
        <img src="/api/placeholder/200/150" alt="Manga Cover" className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
          NEW
        </div>
      </div>
      <div className="p-3">
        <h4 className="font-bold">Manga Title</h4>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs opacity-80">Ch. 123</span>
          <div className="flex items-center">
            <Star size={14} className="text-yellow-500" />
            <span className="text-xs ml-1">4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LibraryTab({ label, count, active, onClick, isDarkMode }) {
  const primaryAccent = isDarkMode ? 'pink-500' : 'violet-600';
  const baseTextClass = isDarkMode ? 'text-white' : 'text-gray-900';

  return (
    <div 
      onClick={onClick}
      className={`${baseTextClass} px-4 py-2 font-bold cursor-pointer whitespace-nowrap transform ${
        active 
        ? `-rotate-1 border-b-4 border-${primaryAccent}` 
        : ''
      }`}
    >
      {label} <span className={`text-xs ${active ? `text-${primaryAccent}` : 'opacity-70'}`}>({count})</span>
    </div>
  );
}

function LibraryMangaCard({ title, progress, isDarkMode }) {
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const baseTextClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const panelBorder = isDarkMode ? 'border-gray-700' : 'border-gray-200';
  const isNew = progress === "New Chapter!";

  return (
    <div className={`${cardBg} ${baseTextClass} rounded-lg overflow-hidden transform hover:scale-105 transition-transform border-2 ${isNew ? 'border-yellow-500' : panelBorder}`}>
      <div className="h-48 bg-gray-500 relative">
        <img src="/api/placeholder/200/150" alt={`${title} Cover`} className="w-full h-full object-cover" />
        {isNew && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
            NEW!
          </div>
        )}
      </div>
      <div className="p-3">
        <h4 className="font-bold">{title}</h4>
        <div className="flex justify-between items-center mt-2">
          <span className={`text-xs ${isNew ? 'text-yellow-500 font-bold' : 'opacity-80'}`}>{progress}</span>
          <div className="flex space-x-1">
            <button className={`p-1 rounded ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}>
              <Bookmark size={14} />
            </button>
            <button className={`p-1 rounded ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}>
              <Heart size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HistoryItem({ title, chapter, time, progress, isDarkMode }) {
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const baseTextClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className={`${cardBg} ${baseTextClass} rounded-lg p-4 transform hover:scale-105 transition-transform border ${borderColor}`}>
      <div className="flex items-center">
        <div className="w-12 h-16 bg-gray-500 rounded mr-4">
          <img src="/api/placeholder/48/64" alt={`${title} Cover`} className="w-full h-full object-cover rounded" />
        </div>
        <div className="flex-grow">
          <h4 className="font-bold">{title}</h4>
          <p className="text-sm">{chapter}</p>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs opacity-70">{time}</span>
            <span className={`text-xs font-bold ${progress === '100%' ? 'text-green-500' : 'text-yellow-500'}`}>{progress}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsMenuItem({ label, active, isDarkMode }) {
  const primaryAccent = isDarkMode ? 'pink-500' : 'violet-600';
  const baseTextClass = isDarkMode ? 'text-white' : 'text-gray-900';

  return (
    <li className={`${!active && baseTextClass} py-2 px-4 rounded font-bold ${
      active 
      ? (isDarkMode ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white') 
      : (isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200')
    } cursor-pointer transform ${active ? '-rotate-1' : ''}`}>
      {label}
    </li>
  );
}

function NotificationSetting({ label, description, enabled, isDarkMode }) {
  const secondaryBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const baseTextClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const primaryAccent = isDarkMode ? 'pink-500' : 'violet-600';

  return (
    <div className={`p-4 rounded ${secondaryBg} ${baseTextClass}`}>
      <div className="flex items-center justify-between">
        <div>
          <h5 className="font-bold">{label}</h5>
          <p className="text-sm opacity-80">{description}</p>
        </div>
        <div className={`w-12 h-6 rounded-full relative ${enabled ? `bg-${primaryAccent}` : (isDarkMode ? 'bg-gray-600' : 'bg-gray-300')} transition-colors`}>
          <div className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${enabled ? 'right-1' : 'left-1'}`}></div>
        </div>
      </div>
    </div>
  );
}