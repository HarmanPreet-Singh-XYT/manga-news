'use client'
import React, { useState } from 'react';
import { 
  Users, 
  Shield, 
  Zap, 
  Search, 
  Filter, 
  Ban, 
  UserCheck, 
  AlertTriangle, 
  Crown, 
  Mail, 
  Calendar, 
  Activity,
  Sun,
  Moon,
  Eye,
  Settings,
  TrendingUp,
  UserPlus,
  UserX
} from 'lucide-react';

const MangaUserManagement = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock user data
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'OtakuMaster2024',
      email: 'otaku@manga.com',
      role: 'Reader',
      status: 'active',
      lastActive: '2 hours ago',
      joinDate: '2024-01-15',
      loginCount: 145,
      articlesRead: 892,
      verified: false
    },
    {
      id: 2,
      username: 'MangaReporter',
      email: 'reporter@manga.com',
      role: 'Journalist',
      status: 'active',
      lastActive: '30 minutes ago',
      joinDate: '2023-08-22',
      loginCount: 341,
      articlesWritten: 67,
      verified: true
    },
    {
      id: 3,
      username: 'EditorSenpai',
      email: 'editor@manga.com',
      role: 'Editor',
      status: 'active',
      lastActive: '1 hour ago',
      joinDate: '2023-03-10',
      loginCount: 578,
      articlesEdited: 234,
      verified: true
    },
    {
      id: 4,
      username: 'SuspiciousUser',
      email: 'sus@email.com',
      role: 'Reader',
      status: 'suspended',
      lastActive: '3 days ago',
      joinDate: '2024-05-01',
      loginCount: 23,
      articlesRead: 45,
      verified: false
    },
    {
      id: 5,
      username: 'AnimeNewsGuru',
      email: 'guru@manga.com',
      role: 'Admin',
      status: 'active',
      lastActive: '15 minutes ago',
      joinDate: '2022-12-01',
      loginCount: 892,
      articlesManaged: 1234,
      verified: true
    }
  ]);

  const stats = {
    totalUsers: 15847,
    activeUsers: 12934,
    bannedUsers: 156,
    newToday: 47,
    pendingVerification: 23
  };

  const handleUserAction = (userId, action) => {
    setUsers(prevUsers => 
      prevUsers.map(user => {
        if (user.id === userId) {
          switch (action) {
            case 'ban':
              return { ...user, status: 'banned' };
            case 'suspend':
              return { ...user, status: 'suspended' };
            case 'activate':
              return { ...user, status: 'active' };
            case 'verify':
              return { ...user, verified: true };
            default:
              return user;
          }
        }
        return user;
      })
    );
  };

  const handleRoleChange = (userId, newRole) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'suspended': return 'text-yellow-400';
      case 'banned': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin': return darkMode ? 'text-pink-400' : 'text-violet-600';
      case 'Editor': return 'text-purple-400';
      case 'Journalist': return 'text-blue-400';
      case 'Reader': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role.toLowerCase() === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const themeClasses = darkMode ? 
    'bg-gray-900 text-white' : 
    'bg-blue-50 text-gray-900';

  const cardClasses = darkMode ? 
    'bg-gray-800 border-pink-500' : 
    'bg-white border-violet-500';

  const gradientClasses = darkMode ?
    'from-pink-500 to-purple-600' :
    'from-violet-500 to-purple-600';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Header */}
      <div className="sticky top-0 backdrop-blur-md bg-opacity-90 border-b border-opacity-20 border-gray-500 z-10" style={{
        background: darkMode ? 'rgba(17, 24, 39, 0.9)' : 'rgba(239, 246, 255, 0.9)'
      }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${gradientClasses}`}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black uppercase tracking-wide" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>
                  MANGA NEWS HQ
                </h1>
                <p className="text-sm font-bold uppercase tracking-wide opacity-70">
                  User Management System
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full bg-gradient-to-r ${gradientClasses} hover:scale-110 transition-all duration-300 shadow-lg`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {[
            { label: 'Total Users', value: stats.totalUsers.toLocaleString(), icon: Users, color: 'blue' },
            { label: 'Active Users', value: stats.activeUsers.toLocaleString(), icon: Activity, color: 'green' },
            { label: 'Banned Users', value: stats.bannedUsers, icon: Ban, color: 'red' },
            { label: 'New Today', value: stats.newToday, icon: UserPlus, color: 'purple' },
            { label: 'Pending Verification', value: stats.pendingVerification, icon: AlertTriangle, color: 'yellow' }
          ].map((stat, index) => (
            <div key={index} className={`${cardClasses} border-2 rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 shadow-lg relative overflow-hidden`}>
              {/* Decorative gradient orb */}
              <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${gradientClasses} rounded-full opacity-20`}></div>
              
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
                <div className={`w-3 h-3 bg-${stat.color}-400 rounded-full animate-pulse`}></div>
              </div>
              
              <div className="text-3xl font-black mb-2" style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                {stat.value}
              </div>
              
              <div className="text-sm font-bold uppercase tracking-wide opacity-70">
                {stat.label}
              </div>
              
              {/* Bottom gradient bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClasses}`}></div>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className={`${cardClasses} border-2 rounded-lg p-6 mb-8 shadow-lg`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
                } focus:border-pink-500 transition-colors font-bold uppercase tracking-wide text-sm`}
              />
            </div>

            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className={`px-4 py-3 rounded-lg border-2 ${
                darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
              } focus:border-pink-500 transition-colors font-bold uppercase tracking-wide text-sm`}
            >
              <option value="all">All Roles</option>
              <option value="reader">Reader</option>
              <option value="journalist">Journalist</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={`px-4 py-3 rounded-lg border-2 ${
                darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
              } focus:border-pink-500 transition-colors font-bold uppercase tracking-wide text-sm`}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
              <option value="banned">Banned</option>
            </select>

            <button className={`px-6 py-3 bg-gradient-to-r ${gradientClasses} text-white font-black uppercase tracking-wide rounded-lg hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2`}>
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Users Table */}
        <div className={`${cardClasses} border-2 rounded-lg shadow-lg overflow-hidden`}>
          <div className={`bg-gradient-to-r ${gradientClasses} px-6 py-4`}>
            <h2 className="text-xl font-black uppercase tracking-wide text-white">
              User Database ({filteredUsers.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full">
              {filteredUsers.map((user) => (
                <div key={user.id} className={`border-b border-opacity-20 ${darkMode ? 'border-gray-600' : 'border-gray-200'} p-6 hover:bg-opacity-50 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-all duration-300`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    {/* User Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${gradientClasses} rounded-full flex items-center justify-center text-white font-black text-lg`}>
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-black text-lg">{user.username}</h3>
                            {user.verified && <Shield className="w-5 h-5 text-green-400" />}
                            <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${getRoleColor(user.role)} ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                              {user.role}
                            </span>
                          </div>
                          <p className="text-sm opacity-70">{user.email}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Activity className="w-4 h-4 opacity-50" />
                          <span className={getStatusColor(user.status)}>
                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 opacity-50" />
                          <span className="opacity-70">Joined {user.joinDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4 opacity-50" />
                          <span className="opacity-70">Last: {user.lastActive}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 opacity-50" />
                          <span className="opacity-70">{user.loginCount} logins</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 lg:ml-6">
                      {user.status === 'active' && (
                        <>
                          <button
                            onClick={() => handleUserAction(user.id, 'suspend')}
                            className="px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-xs font-bold uppercase flex items-center space-x-1"
                          >
                            <AlertTriangle className="w-4 h-4" />
                            <span>Suspend</span>
                          </button>
                          <button
                            onClick={() => handleUserAction(user.id, 'ban')}
                            className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-xs font-bold uppercase flex items-center space-x-1"
                          >
                            <Ban className="w-4 h-4" />
                            <span>Ban</span>
                          </button>
                        </>
                      )}
                      
                      {user.status !== 'active' && (
                        <button
                          onClick={() => handleUserAction(user.id, 'activate')}
                          className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-xs font-bold uppercase flex items-center space-x-1"
                        >
                          <UserCheck className="w-4 h-4" />
                          <span>Activate</span>
                        </button>
                      )}

                      {!user.verified && (
                        <button
                          onClick={() => handleUserAction(user.id, 'verify')}
                          className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs font-bold uppercase flex items-center space-x-1"
                        >
                          <Shield className="w-4 h-4" />
                          <span>Verify</span>
                        </button>
                      )}

                      <select
                        value={user.role}
                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                        className={`px-3 py-2 rounded-lg border text-xs font-bold uppercase ${
                          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
                        }`}
                      >
                        <option value="Reader">Reader</option>
                        <option value="Journalist">Journalist</option>
                        <option value="Editor">Editor</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangaUserManagement;