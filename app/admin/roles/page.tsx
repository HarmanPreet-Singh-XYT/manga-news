'use client'
import React, { useState } from 'react';
import { 
  Users, Shield, Settings, Activity, UserCheck, UserX, UserPlus, 
  Eye, Edit, Trash2, Lock, Unlock, Zap, Crown, Star, AlertTriangle,
  Moon, Sun, ChevronDown, RotateCcw, Save, Plus, Search
} from 'lucide-react';

const MangaAdminPanel = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('roles');
  const [selectedRole, setSelectedRole] = useState(null);
  const [showCreateRole, setShowCreateRole] = useState(false);

  // Mock data for roles and permissions
  const roles = [
    {
      id: 1,
      name: 'Super Admin',
      type: 'system',
      users: 2,
      permissions: ['all'],
      color: 'pink',
      icon: Crown,
      description: 'Full system access'
    },
    {
      id: 2,
      name: 'Editor-in-Chief',
      type: 'custom',
      users: 3,
      permissions: ['manage_articles', 'manage_featured', 'manage_users', 'view_analytics'],
      color: 'purple',
      icon: Star,
      description: 'Senior editorial control'
    },
    {
      id: 3,
      name: 'Content Editor',
      type: 'custom',
      users: 12,
      permissions: ['create_articles', 'edit_articles', 'publish_articles'],
      color: 'blue',
      icon: Edit,
      description: 'Article creation & editing'
    },
    {
      id: 4,
      name: 'Reviewer',
      type: 'custom',
      users: 8,
      permissions: ['view_articles', 'comment_articles', 'view_drafts'],
      color: 'green',
      icon: Eye,
      description: 'Review and feedback only'
    },
    {
      id: 5,
      name: 'Banned User',
      type: 'system',
      users: 23,
      permissions: [],
      color: 'red',
      icon: UserX,
      description: 'Restricted access'
    }
  ];

  const permissions = [
    { id: 'manage_articles', name: 'Manage Articles', category: 'Content', description: 'Create, edit, delete all articles' },
    { id: 'create_articles', name: 'Create Articles', category: 'Content', description: 'Write new articles and drafts' },
    { id: 'edit_articles', name: 'Edit Articles', category: 'Content', description: 'Modify existing articles' },
    { id: 'publish_articles', name: 'Publish Articles', category: 'Content', description: 'Make articles live on site' },
    { id: 'manage_featured', name: 'Manage Featured', category: 'Content', description: 'Control featured article section' },
    { id: 'view_drafts', name: 'View Drafts', category: 'Content', description: 'Access unpublished content' },
    { id: 'comment_articles', name: 'Comment on Articles', category: 'Content', description: 'Leave editorial comments' },
    { id: 'manage_users', name: 'Manage Users', category: 'Users', description: 'Add, edit, remove users' },
    { id: 'view_analytics', name: 'View Analytics', category: 'Analytics', description: 'Access site statistics' },
    { id: 'manage_settings', name: 'Manage Settings', category: 'System', description: 'Configure system settings' }
  ];

  const auditLogs = [
    { id: 1, user: 'admin@mangasite.com', action: 'Role Modified', target: 'Content Editor', time: '2 minutes ago', type: 'warning' },
    { id: 2, user: 'chief@mangasite.com', action: 'Permission Added', target: 'manage_featured', time: '15 minutes ago', type: 'success' },
    { id: 3, user: 'admin@mangasite.com', action: 'User Banned', target: 'spammer@email.com', time: '1 hour ago', type: 'error' },
    { id: 4, user: 'admin@mangasite.com', action: 'Role Created', target: 'Guest Reviewer', time: '3 hours ago', type: 'success' },
    { id: 5, user: 'chief@mangasite.com', action: 'Permission Removed', target: 'delete_articles', time: '5 hours ago', type: 'warning' }
  ];

  const stats = [
    { label: 'Active Roles', value: '5', change: '+1', trend: 'up', icon: Shield, color: 'pink' },
    { label: 'Total Users', value: '48', change: '+12', trend: 'up', icon: Users, color: 'purple' },
    { label: 'Permission Changes', value: '23', change: '+5', trend: 'up', icon: Settings, color: 'blue' },
    { label: 'Security Events', value: '7', change: '-2', trend: 'down', icon: AlertTriangle, color: 'yellow' }
  ];

  const themeClasses = {
    bg: isDark ? 'bg-gray-900' : 'bg-blue-50',
    cardBg: isDark ? 'bg-gray-800' : 'bg-white',
    cardBorder: isDark ? 'border-pink-500' : 'border-violet-500',
    gradient: isDark ? 'from-pink-500 to-purple-600' : 'from-violet-500 to-purple-600',
    accent: isDark ? 'text-pink-400' : 'text-violet-600',
    text: isDark ? 'text-white' : 'text-gray-900',
    textMuted: isDark ? 'text-gray-300' : 'text-gray-600'
  };

  const RoleCard = ({ role }) => {
    const IconComponent = role.icon;
    return (
      <div 
        className={`${themeClasses.cardBg} border-2 ${themeClasses.cardBorder} rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer relative overflow-hidden`}
        onClick={() => setSelectedRole(role)}
      >
        {/* Decorative gradient orb */}
        <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${themeClasses.gradient} rounded-full opacity-20`}></div>
        
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-full bg-gradient-to-br ${themeClasses.gradient} shadow-lg`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div className={`text-sm font-bold uppercase tracking-wide opacity-70 ${themeClasses.textMuted}`}>
              {role.type}
            </div>
            <div className={`text-3xl font-black ${themeClasses.text}`} style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
              {role.users}
            </div>
          </div>
        </div>
        
        <h3 className={`text-xl font-black uppercase tracking-wide mb-2 ${themeClasses.text}`} style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          {role.name}
        </h3>
        
        <p className={`text-sm ${themeClasses.textMuted} mb-4`}>
          {role.description}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {role.permissions.slice(0, 3).map((perm, idx) => (
            <span key={idx} className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-gradient-to-r ${themeClasses.gradient} text-white`}>
              {perm === 'all' ? 'ALL PERMS' : perm.replace('_', ' ')}
            </span>
          ))}
          {role.permissions.length > 3 && (
            <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${themeClasses.textMuted} border border-current`}>
              +{role.permissions.length - 3}
            </span>
          )}
        </div>
        
        {/* Bottom gradient bar */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${themeClasses.gradient}`}></div>
      </div>
    );
  };

  const PermissionToggle = ({ permission, enabled, onChange }) => (
    <div className={`${themeClasses.cardBg} border ${themeClasses.cardBorder} rounded-lg p-4 flex items-center justify-between hover:-translate-y-1 transition-all duration-300`}>
      <div>
        <h4 className={`font-black uppercase tracking-wide ${themeClasses.text}`}>{permission.name}</h4>
        <p className={`text-sm ${themeClasses.textMuted}`}>{permission.description}</p>
        <span className={`text-xs font-bold uppercase tracking-wide opacity-70 ${themeClasses.accent}`}>{permission.category}</span>
      </div>
      <button
        onClick={() => onChange(permission.id)}
        className={`relative w-12 h-6 rounded-full transition-all duration-300 ${enabled ? `bg-gradient-to-r ${themeClasses.gradient}` : 'bg-gray-600'}`}
      >
        <div className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-all duration-300 ${enabled ? 'left-6' : 'left-0.5'} shadow-lg`}></div>
      </button>
    </div>
  );

  return (
    <div className={`min-h-screen ${themeClasses.bg} transition-all duration-300`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${themeClasses.cardBg} border-b-2 ${themeClasses.cardBorder} backdrop-blur-md bg-opacity-90`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-full bg-gradient-to-br ${themeClasses.gradient} shadow-lg`}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-3xl font-black uppercase tracking-wide ${themeClasses.text}`} style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                  MANGA ADMIN
                </h1>
                <p className={`text-sm font-bold uppercase tracking-wide opacity-70 ${themeClasses.textMuted}`}>
                  Role & Permission System
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-3 rounded-full bg-gradient-to-br ${themeClasses.gradient} shadow-lg hover:scale-110 transition-all duration-300`}
            >
              {isDark ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className={`${themeClasses.cardBg} border-2 ${themeClasses.cardBorder} rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 shadow-lg relative overflow-hidden`}>
                <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${themeClasses.gradient} rounded-full opacity-20`}></div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${themeClasses.gradient} shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    <span className="text-sm font-bold">{stat.change}</span>
                    <div className={`w-2 h-2 rounded-full ${stat.trend === 'up' ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
                  </div>
                </div>
                
                <div className={`text-3xl font-black mb-2 ${themeClasses.text}`} style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                  {stat.value}
                </div>
                
                <div className={`text-sm font-bold uppercase tracking-wide opacity-70 ${themeClasses.textMuted}`}>
                  {stat.label}
                </div>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${themeClasses.gradient}`}></div>
              </div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8">
          {[
            { id: 'roles', label: 'Role Management', icon: Shield },
            { id: 'permissions', label: 'Permissions', icon: Lock },
            { id: 'audit', label: 'Audit Logs', icon: Activity }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-black uppercase tracking-wide transition-all duration-300 ${
                  activeTab === tab.id 
                    ? `bg-gradient-to-r ${themeClasses.gradient} text-white shadow-lg` 
                    : `${themeClasses.cardBg} ${themeClasses.text} hover:-translate-y-1`
                } border-2 ${themeClasses.cardBorder}`}
              >
                <IconComponent className={`w-5 h-5 ${activeTab === tab.id ? 'animate-pulse' : ''}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Sections */}
        {activeTab === 'roles' && (
          <div className="space-y-8">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setShowCreateRole(true)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-black uppercase tracking-wide bg-gradient-to-r ${themeClasses.gradient} text-white shadow-lg hover:scale-105 transition-all duration-300`}
              >
                <Plus className="w-5 h-5" />
                <span>Create Role</span>
              </button>
              
              <button className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-black uppercase tracking-wide ${themeClasses.cardBg} ${themeClasses.text} border-2 ${themeClasses.cardBorder} hover:-translate-y-1 transition-all duration-300`}>
                <Search className="w-5 h-5" />
                <span>Search Roles</span>
              </button>
            </div>

            {/* Roles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role) => (
                <RoleCard key={role.id} role={role} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'permissions' && (
          <div className="space-y-6">
            <div className={`${themeClasses.cardBg} border-2 ${themeClasses.cardBorder} rounded-lg p-6`}>
              <h2 className={`text-2xl font-black uppercase tracking-wide mb-6 ${themeClasses.text}`} style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                Permission Management
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {permissions.map((permission) => (
                  <PermissionToggle 
                    key={permission.id} 
                    permission={permission} 
                    enabled={Math.random() > 0.3} 
                    onChange={() => {}} 
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'audit' && (
          <div className={`${themeClasses.cardBg} border-2 ${themeClasses.cardBorder} rounded-lg p-6`}>
            <h2 className={`text-2xl font-black uppercase tracking-wide mb-6 ${themeClasses.text}`} style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
              Audit Logs
            </h2>
            
            <div className="space-y-4">
              {auditLogs.map((log) => (
                <div key={log.id} className={`${themeClasses.cardBg} border-l-4 ${
                  log.type === 'success' ? 'border-green-400' : 
                  log.type === 'warning' ? 'border-yellow-400' : 'border-red-400'
                } rounded-lg p-4 hover:-translate-y-1 transition-all duration-300 shadow-lg`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        log.type === 'success' ? 'bg-green-400' : 
                        log.type === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                      } animate-pulse`}></div>
                      <div>
                        <div className={`font-black uppercase tracking-wide ${themeClasses.text}`}>
                          {log.action}
                        </div>
                        <div className={`text-sm ${themeClasses.textMuted}`}>
                          {log.user} → {log.target}
                        </div>
                      </div>
                    </div>
                    <div className={`text-sm font-bold uppercase tracking-wide opacity-70 ${themeClasses.textMuted}`}>
                      {log.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Role Detail Modal */}
        {selectedRole && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${themeClasses.cardBg} border-2 ${themeClasses.cardBorder} rounded-lg p-8 max-w-2xl w-full max-h-96 overflow-y-auto`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-black uppercase tracking-wide ${themeClasses.text}`} style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                  {selectedRole.name}
                </h2>
                <button 
                  onClick={() => setSelectedRole(null)}
                  className={`p-2 rounded-full ${themeClasses.cardBg} border ${themeClasses.cardBorder} hover:scale-110 transition-all duration-300`}
                >
                  <Trash2 className={`w-5 h-5 ${themeClasses.text}`} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className={`text-sm font-bold uppercase tracking-wide opacity-70 ${themeClasses.textMuted} block mb-2`}>
                    Role Description
                  </label>
                  <input 
                    className={`w-full p-3 rounded-lg ${themeClasses.cardBg} border ${themeClasses.cardBorder} ${themeClasses.text} font-bold`}
                    value={selectedRole.description}
                    readOnly
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-black uppercase tracking-wide bg-gradient-to-r ${themeClasses.gradient} text-white shadow-lg hover:scale-105 transition-all duration-300`}>
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                  <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-black uppercase tracking-wide ${themeClasses.cardBg} ${themeClasses.text} border ${themeClasses.cardBorder} hover:-translate-y-1 transition-all duration-300`}>
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MangaAdminPanel;