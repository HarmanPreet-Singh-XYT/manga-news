'use client'
import React, { useState } from 'react';
import { 
  Users, 
  Edit3, 
  Eye, 
  TrendingUp, 
  Calendar, 
  Star, 
  UserPlus, 
  Settings, 
  Activity,
  BookOpen,
  Film,
  Gamepad2,
  MessageSquare,
  Award,
  Clock,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  MoreVertical,
  Plus,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const MangaNewsJournalistPortal = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedJournalist, setSelectedJournalist] = useState(null);

  // Sample data
  const journalists = [
    {
      id: 1,
      name: 'AKIRA TANAKA',
      email: 'akira@mangahub.com',
      phone: '+81-90-1234-5678',
      location: 'Tokyo, Japan',
      avatar: '🧑‍💼',
      status: 'active',
      categories: ['Manga Reviews', 'Industry News'],
      articlesCount: 156,
      totalViews: 890000,
      rating: 4.9,
      joinDate: '2023-01-15',
      lastActive: '2 hours ago',
      specialties: ['Shonen', 'Seinen', 'Industry Analysis']
    },
    {
      id: 2,
      name: 'YUKI SATO',
      email: 'yuki@mangahub.com',
      phone: '+81-90-8765-4321',
      location: 'Osaka, Japan',
      avatar: '👩‍💼',
      status: 'active',
      categories: ['Anime Reviews', 'Character Analysis'],
      articlesCount: 89,
      totalViews: 450000,
      rating: 4.7,
      joinDate: '2023-03-22',
      lastActive: '1 day ago',
      specialties: ['Shoujo', 'Romance', 'Character Development']
    },
    {
      id: 3,
      name: 'HIROSHI KIMURA',
      email: 'hiroshi@mangahub.com',
      phone: '+81-90-2468-1357',
      location: 'Kyoto, Japan',
      avatar: '🧑‍🎨',
      status: 'pending',
      categories: ['Gaming News'],
      articlesCount: 23,
      totalViews: 120000,
      rating: 4.3,
      joinDate: '2024-05-10',
      lastActive: '3 days ago',
      specialties: ['Visual Novels', 'Mobile Games']
    }
  ];

  const applications = [
    {
      id: 1,
      name: 'MARIA GONZALEZ',
      email: 'maria.g@email.com',
      phone: '+34-666-123-456',
      location: 'Barcelona, Spain',
      appliedFor: 'Manga Translator',
      experience: '5 years',
      portfolio: 'mangaportfolio.com/maria',
      status: 'pending',
      appliedDate: '2024-06-10',
      coverLetter: 'Passionate about bringing Japanese manga to global audiences...'
    },
    {
      id: 2,
      name: 'DAVID CHEN',
      email: 'david.chen@email.com',
      phone: '+1-555-987-6543',
      location: 'San Francisco, USA',
      appliedFor: 'Anime Reviewer',
      experience: '3 years',
      portfolio: 'animecritic.blog/david',
      status: 'pending',
      appliedDate: '2024-06-12',
      coverLetter: 'My deep knowledge of anime culture and storytelling...'
    }
  ];

  const categories = [
    { name: 'Manga Reviews', icon: BookOpen, count: 245, color: 'text-pink-400' },
    { name: 'Anime Reviews', icon: Film, count: 189, color: 'text-purple-400' },
    { name: 'Industry News', icon: TrendingUp, count: 156, color: 'text-blue-400' },
    { name: 'Gaming News', icon: Gamepad2, count: 98, color: 'text-green-400' },
    { name: 'Character Analysis', icon: MessageSquare, count: 134, color: 'text-yellow-400' }
  ];

  const recentActivities = [
    {
      id: 1,
      journalist: 'AKIRA TANAKA',
      action: 'Published new article',
      title: '"One Piece Chapter 1089 Review"',
      time: '2 hours ago',
      type: 'publish'
    },
    {
      id: 2,
      journalist: 'YUKI SATO',
      action: 'Edited article',
      title: '"Attack on Titan Final Season Analysis"',
      time: '5 hours ago',
      type: 'edit'
    },
    {
      id: 3,
      journalist: 'HIROSHI KIMURA',
      action: 'Submitted for review',
      title: '"Genshin Impact 4.0 Preview"',
      time: '1 day ago',
      type: 'submit'
    }
  ];

  const theme = darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-blue-50 text-gray-900';

  const cardTheme = darkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200';

  const accentColor = darkMode ? 'text-pink-400' : 'text-violet-600';
  const accentBg = darkMode ? 'bg-pink-500' : 'bg-violet-600';

  const JournalistCard = ({ journalist }) => (
    <div className={`${cardTheme} rounded-lg border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-bl-full"></div>
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="text-4xl">{journalist.avatar}</div>
          <div>
            <h3 className={`font-black text-lg uppercase tracking-wider ${accentColor}`} style={{textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '1px 1px 2px rgba(0,0,0,0.1)'}}>
              {journalist.name}
            </h3>
            <p className="text-sm opacity-75">{journalist.email}</p>
            <div className="flex items-center space-x-2 mt-1">
              <MapPin size={12} className="opacity-60" />
              <span className="text-xs opacity-60">{journalist.location}</span>
            </div>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
          journalist.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
        }`}>
          {journalist.status}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className={`text-2xl font-black ${accentColor}`}>{journalist.articlesCount}</div>
          <div className="text-xs uppercase font-bold opacity-60">Articles</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl font-black ${accentColor}`}>{(journalist.totalViews / 1000).toFixed(0)}K</div>
          <div className="text-xs uppercase font-bold opacity-60">Views</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl font-black ${accentColor} flex items-center justify-center`}>
            {journalist.rating} <Star size={16} className="ml-1 fill-current" />
          </div>
          <div className="text-xs uppercase font-bold opacity-60">Rating</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-xs uppercase font-bold opacity-60 mb-2">Categories</div>
        <div className="flex flex-wrap gap-2">
          {journalist.categories.map((cat, idx) => (
            <span key={idx} className={`px-2 py-1 rounded-full text-xs font-bold ${accentBg} text-white`}>
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-xs uppercase font-bold opacity-60 mb-2">Specialties</div>
        <div className="text-sm">{journalist.specialties.join(' • ')}</div>
      </div>

      <div className="flex justify-between items-center text-xs opacity-60">
        <span>Joined: {journalist.joinDate}</span>
        <span>Last active: {journalist.lastActive}</span>
      </div>

      <button 
        onClick={() => setSelectedJournalist(journalist)}
        className={`w-full mt-4 ${accentBg} text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition-all uppercase tracking-wider`}
      >
        View Details
      </button>
    </div>
  );

  const ApplicationCard = ({ application }) => (
    <div className={`${cardTheme} rounded-lg border-2 shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className={`font-black text-lg uppercase tracking-wider ${accentColor}`}>
            {application.name}
          </h3>
          <p className="text-sm opacity-75">{application.email}</p>
          <div className="flex items-center space-x-2 mt-1">
            <MapPin size={12} className="opacity-60" />
            <span className="text-xs opacity-60">{application.location}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase font-bold opacity-60">Applied for</div>
          <div className={`font-bold ${accentColor}`}>{application.appliedFor}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-xs uppercase font-bold opacity-60">Experience</div>
          <div className="font-bold">{application.experience}</div>
        </div>
        <div>
          <div className="text-xs uppercase font-bold opacity-60">Applied</div>
          <div className="font-bold">{application.appliedDate}</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-xs uppercase font-bold opacity-60 mb-2">Portfolio</div>
        <a href="#" className={`text-sm ${accentColor} hover:underline`}>{application.portfolio}</a>
      </div>

      <div className="mb-4">
        <div className="text-xs uppercase font-bold opacity-60 mb-2">Cover Letter</div>
        <p className="text-sm opacity-75">{application.coverLetter}</p>
      </div>

      <div className="flex space-x-2">
        <button className="flex-1 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors uppercase tracking-wider">
          <CheckCircle size={16} className="inline mr-2" />
          Accept
        </button>
        <button className="flex-1 bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition-colors uppercase tracking-wider">
          <XCircle size={16} className="inline mr-2" />
          Reject
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${theme} transition-all duration-300`}>
      {/* Header */}
      <header className={`${cardTheme} border-b-4 ${darkMode ? 'border-pink-500' : 'border-violet-500'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">📰</div>
              <div>
                <h1 className={`text-3xl font-black uppercase tracking-wider ${accentColor}`} 
                    style={{textShadow: darkMode ? '3px 3px 6px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)'}}>
                  MANGA HUB
                </h1>
                <p className="text-sm opacity-75 uppercase font-bold">Journalist Management Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-full ${accentBg} text-white hover:opacity-90 transition-all`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <div className="text-2xl">👤</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`${cardTheme} border-b-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} sticky top-0 z-10`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
              { id: 'journalists', label: 'Journalists', icon: Users },
              { id: 'applications', label: 'Applications', icon: UserPlus },
              { id: 'categories', label: 'Categories', icon: Settings },
              { id: 'activity', label: 'Activity', icon: Activity }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 font-bold uppercase tracking-wider transition-all border-b-4 ${
                  activeTab === tab.id 
                    ? `${accentColor} ${darkMode ? 'border-pink-500' : 'border-violet-500'}` 
                    : 'opacity-60 border-transparent hover:opacity-100'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Total Journalists', value: '156', icon: Users, color: 'text-blue-400' },
                { title: 'Active Articles', value: '2.1K', icon: Edit3, color: 'text-green-400' },
                { title: 'Total Views', value: '12.5M', icon: Eye, color: 'text-purple-400' },
                { title: 'Avg Rating', value: '4.8', icon: Star, color: 'text-yellow-400' }
              ].map((stat, idx) => (
                <div key={idx} className={`${cardTheme} rounded-lg border-2 shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 opacity-10">
                    <stat.icon size={80} />
                  </div>
                  <div className="relative">
                    <div className={`text-4xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-sm uppercase font-bold opacity-60">{stat.title}</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className={`${cardTheme} rounded-lg border-2 shadow-lg p-6`}>
              <h2 className={`text-2xl font-black uppercase tracking-wider ${accentColor} mb-6`}>Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-transparent to-pink-500/10 border-l-4 border-pink-500">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'publish' ? 'bg-green-500/20 text-green-400' :
                        activity.type === 'edit' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {activity.type === 'publish' ? <CheckCircle size={16} /> :
                         activity.type === 'edit' ? <Edit3 size={16} /> :
                         <Clock size={16} />}
                      </div>
                      <div>
                        <div className="font-bold">{activity.journalist}</div>
                        <div className="text-sm opacity-75">{activity.action}: {activity.title}</div>
                      </div>
                    </div>
                    <div className="text-xs opacity-60">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'journalists' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className={`text-3xl font-black uppercase tracking-wider ${accentColor}`}>
                Our Journalists
              </h2>
              <button className={`${accentBg} text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-all uppercase tracking-wider`}>
                <Plus size={20} className="inline mr-2" />
                Add Journalist
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {journalists.map(journalist => (
                <JournalistCard key={journalist.id} journalist={journalist} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className={`text-3xl font-black uppercase tracking-wider ${accentColor}`}>
                New Applications
              </h2>
              <div className={`px-4 py-2 rounded-full ${accentBg} text-white font-bold uppercase`}>
                {applications.length} Pending
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {applications.map(application => (
                <ApplicationCard key={application.id} application={application} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="space-y-6">
            <h2 className={`text-3xl font-black uppercase tracking-wider ${accentColor}`}>
              Content Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, idx) => (
                <div key={idx} className={`${cardTheme} rounded-lg border-2 shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 opacity-10">
                    <category.icon size={60} />
                  </div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <category.icon size={24} className={category.color} />
                      <h3 className="font-black uppercase tracking-wider">{category.name}</h3>
                    </div>
                    <div className={`text-3xl font-black ${category.color} mb-2`}>{category.count}</div>
                    <div className="text-sm uppercase font-bold opacity-60">Total Articles</div>
                  </div>
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${category.color.replace('text-', 'from-')} to-purple-500`}></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-6">
            <h2 className={`text-3xl font-black uppercase tracking-wider ${accentColor}`}>
              Activity Logs
            </h2>
            <div className={`${cardTheme} rounded-lg border-2 shadow-lg p-6`}>
              <div className="space-y-4">
                {recentActivities.concat(recentActivities).map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-transparent to-pink-500/10 border-l-4 border-pink-500">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'publish' ? 'bg-green-500/20 text-green-400' :
                        activity.type === 'edit' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {activity.type === 'publish' ? <CheckCircle size={16} /> :
                         activity.type === 'edit' ? <Edit3 size={16} /> :
                         <Clock size={16} />}
                      </div>
                      <div>
                        <div className="font-bold">{activity.journalist}</div>
                        <div className="text-sm opacity-75">{activity.action}: {activity.title}</div>
                      </div>
                    </div>
                    <div className="text-xs opacity-60">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Journalist Detail Modal */}
      {selectedJournalist && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className={`${cardTheme} rounded-lg border-2 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative`}>
            <button 
              onClick={() => setSelectedJournalist(null)}
              className="absolute top-4 right-4 text-2xl hover:opacity-70"
            >
              ×
            </button>
            
            <div className="p-8">
              <div className="flex items-center space-x-6 mb-8">
                <div className="text-6xl">{selectedJournalist.avatar}</div>
                <div>
                  <h2 className={`text-3xl font-black uppercase tracking-wider ${accentColor}`}>
                    {selectedJournalist.name}
                  </h2>
                  <div className="space-y-1 mt-2">
                    <div className="flex items-center space-x-2">
                      <Mail size={16} className="opacity-60" />
                      <span>{selectedJournalist.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={16} className="opacity-60" />
                      <span>{selectedJournalist.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="opacity-60" />
                      <span>{selectedJournalist.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-black uppercase tracking-wider mb-4">Performance</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Articles Published</span>
                      <span className="font-bold">{selectedJournalist.articlesCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Views</span>
                      <span className="font-bold">{selectedJournalist.totalViews.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Rating</span>
                      <span className="font-bold flex items-center">
                        {selectedJournalist.rating} <Star size={16} className="ml-1 fill-current text-yellow-400" />
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-black uppercase tracking-wider mb-4">Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Join Date</span>
                      <span className="font-bold">{selectedJournalist.joinDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Active</span>
                      <span className="font-bold">{selectedJournalist.lastActive}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status</span>
                      <span className={`font-bold uppercase ${
                        selectedJournalist.status === 'active' ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {selectedJournalist.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-black uppercase tracking-wider mb-4">Assigned Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJournalist.categories.map((cat, idx) => (
                    <span key={idx} className={`px-3 py-2 rounded-full font-bold ${accentBg} text-white`}>
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-black uppercase tracking-wider mb-4">Specialties</h3>
                <div className="text-lg">{selectedJournalist.specialties.join(' • ')}</div>
              </div>

              <div className="flex space-x-4">
                <button className={`flex-1 ${accentBg} text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-all uppercase tracking-wider`}>
                  Edit Profile
                </button>
                <button className="flex-1 bg-gray-500 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-600 transition-colors uppercase tracking-wider">
                  View Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MangaNewsJournalistPortal;