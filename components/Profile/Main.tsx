'use client'
import { useEffect, useState } from 'react';
import { 
  User, 
  BookOpen, 
  History, 
  Settings as SettingsIcon, 
  LogOut, 
  Moon, 
  Sun, 
  ChevronRight,
  Bell
} from 'lucide-react';
import Profile from '@/components/Profile/Profile';
import MyLibrary from '@/components/Profile/MyLibrary';
import ReadingHistory from '@/components/Profile/ReadingHistory';
import Settings from '@/components/Profile/Settings';
import Sidebar from '@/components/Profile/Sidebar';
import { useParams } from 'next/navigation'
export default function SettingsPage({darkMode,setDarkMode}) {
  const [activeTab, setActiveTab] = useState('profile');
  const params = useParams<{ section:string}>();
  useEffect(() => {
    switch (params.section) {
        case 'library':
            setActiveTab('library');
            break;
        case 'history':
            setActiveTab('history');
            break;
        case 'settings':
            setActiveTab('settings');
            break;
        default:
            setActiveTab('profile');
            break;
    }
  }, [params.section]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  // Sidebar navigation items
  const navItems = [
    { id: 'profile', label: 'PROFILE', icon: <User className="w-5 h-5" /> },
    { id: 'library', label: 'MY LIBRARY', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'history', label: 'READING HISTORY', icon: <History className="w-5 h-5" /> },
    { id: 'settings', label: 'SETTINGS', icon: <SettingsIcon className="w-5 h-5" /> },
  ];

  return (
    <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-indigo-50 text-gray-900'}`}>
      {/* Sidebar */}
      <Sidebar darkMode={darkMode} navItems={navItems} activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main content */}
      <div className="flex-1 p-8">
        
        {/* Content for each tab */}
        <div className="mt-6">
          <Profile activeTab={activeTab} darkMode={darkMode} />
          <MyLibrary activeTab={activeTab} darkMode={darkMode} />
          <ReadingHistory activeTab={activeTab} darkMode={darkMode} />
          <Settings activeTab={activeTab} darkMode={darkMode} setDarkMode={toggleDarkMode}/>
        </div>
      </div>
    </div>
  );
}