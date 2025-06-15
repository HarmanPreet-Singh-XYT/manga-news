'use client'
import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, Eye, Trash2, Edit, CheckCircle, XCircle, Users, Calendar, Activity, FileDown } from 'lucide-react';

const AuditLogsPanel = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUser, setFilterUser] = useState('all');
  const [filterAction, setFilterAction] = useState('all');
  const [filterDate, setFilterDate] = useState('all');
  const [selectedLogs, setSelectedLogs] = useState([]);

  // Mock audit log data
  const auditLogs = [
    {
      id: 1,
      timestamp: '2025-06-15T10:30:25Z',
      user: 'admin_sakura',
      userId: 'usr_001',
      action: 'ARTICLE_APPROVED',
      target: 'One Piece Chapter 1120 Review',
      targetId: 'art_4521',
      details: 'Approved article for publication',
      ip: '192.168.1.100',
      userAgent: 'Chrome/125.0.0.0'
    },
    {
      id: 2,
      timestamp: '2025-06-15T09:45:12Z',
      user: 'editor_naruto',
      userId: 'usr_002',
      action: 'ARTICLE_DELETED',
      target: 'Attack on Titan Season 5 Speculation',
      targetId: 'art_4520',
      details: 'Deleted draft article due to duplicate content',
      ip: '192.168.1.101',
      userAgent: 'Firefox/126.0'
    },
    {
      id: 3,
      timestamp: '2025-06-15T09:20:33Z',
      user: 'mod_ichigo',
      userId: 'usr_003',
      action: 'USER_BANNED',
      target: 'trolluser_123',
      targetId: 'usr_9876',
      details: 'Banned user for spam comments on multiple articles',
      ip: '192.168.1.102',
      userAgent: 'Safari/17.0'
    },
    {
      id: 4,
      timestamp: '2025-06-15T08:55:41Z',
      user: 'admin_sakura',
      userId: 'usr_001',
      action: 'ARTICLE_EDITED',
      target: 'Demon Slayer Movie News Update',
      targetId: 'art_4519',
      details: 'Updated release date and added new trailer information',
      ip: '192.168.1.100',
      userAgent: 'Chrome/125.0.0.0'
    },
    {
      id: 5,
      timestamp: '2025-06-15T08:15:18Z',
      user: 'editor_goku',
      userId: 'usr_004',
      action: 'COMMENT_APPROVED',
      target: 'Comment on Dragon Ball Super Analysis',
      targetId: 'cmt_7890',
      details: 'Approved user comment after moderation review',
      ip: '192.168.1.103',
      userAgent: 'Chrome/125.0.0.0'
    },
    {
      id: 6,
      timestamp: '2025-06-15T07:30:55Z',
      user: 'mod_luffy',
      userId: 'usr_005',
      action: 'CATEGORY_CREATED',
      target: 'Isekai Reviews',
      targetId: 'cat_new_001',
      details: 'Created new category for isekai anime reviews',
      ip: '192.168.1.104',
      userAgent: 'Edge/125.0.0.0'
    }
  ];

  const actionTypes = ['ARTICLE_APPROVED', 'ARTICLE_DELETED', 'ARTICLE_EDITED', 'USER_BANNED', 'COMMENT_APPROVED', 'CATEGORY_CREATED'];
  const users = [...new Set(auditLogs.map(log => log.user))];

  const getActionIcon = (action) => {
    switch (action) {
      case 'ARTICLE_APPROVED':
      case 'COMMENT_APPROVED':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'ARTICLE_DELETED':
      case 'USER_BANNED':
        return <XCircle className="w-4 h-4 text-red-400" />;
      case 'ARTICLE_EDITED':
        return <Edit className="w-4 h-4 text-blue-400" />;
      case 'CATEGORY_CREATED':
        return <Activity className="w-4 h-4 text-purple-400" />;
      default:
        return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getActionColor = (action) => {
    switch (action) {
      case 'ARTICLE_APPROVED':
      case 'COMMENT_APPROVED':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'ARTICLE_DELETED':
      case 'USER_BANNED':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'ARTICLE_EDITED':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'CATEGORY_CREATED':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const filteredLogs = useMemo(() => {
    return auditLogs.filter(log => {
      const matchesSearch = log.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           log.details.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesUser = filterUser === 'all' || log.user === filterUser;
      const matchesAction = filterAction === 'all' || log.action === filterAction;
      
      return matchesSearch && matchesUser && matchesAction;
    });
  }, [searchTerm, filterUser, filterAction, auditLogs]);

  const handleExport = (format) => {
    const data = selectedLogs.length > 0 
      ? auditLogs.filter(log => selectedLogs.includes(log.id))
      : filteredLogs;
    
    if (format === 'csv') {
      const csvContent = [
        ['Timestamp', 'User', 'Action', 'Target', 'Details', 'IP Address'],
        ...data.map(log => [
          new Date(log.timestamp).toLocaleString(),
          log.user,
          log.action,
          log.target,
          log.details,
          log.ip
        ])
      ].map(row => row.join(',')).join('\n');
      
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `audit-logs-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
    } else if (format === 'json') {
      const jsonContent = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonContent], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `audit-logs-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
    }
  };

  const toggleLogSelection = (logId) => {
    setSelectedLogs(prev => 
      prev.includes(logId) 
        ? prev.filter(id => id !== logId)
        : [...prev, logId]
    );
  };

  const selectAllLogs = () => {
    if (selectedLogs.length === filteredLogs.length) {
      setSelectedLogs([]);
    } else {
      setSelectedLogs(filteredLogs.map(log => log.id));
    }
  };

  const themeClasses = darkMode
    ? 'bg-gray-900 text-white'
    : 'bg-blue-50 text-gray-900';

  const cardClasses = darkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-purple-200';

  const inputClasses = darkMode
    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
    : 'bg-white border-purple-200 text-gray-900 placeholder-gray-500';

  return (
    <div className={`min-h-screen p-6 transition-all duration-300 ${themeClasses}`}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tight mb-2" 
                style={{ textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 4px rgba(0,0,0,0.1)' }}>
              🔍 AUDIT LOGS
            </h1>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Track every action across your manga anime news platform
            </p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg ${
              darkMode 
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' 
                : 'bg-gradient-to-r from-purple-500 to-violet-500 text-white'
            }`}
          >
            {darkMode ? '☀️ LIGHT' : '🌙 DARK'}
          </button>
        </div>
        <div className={`h-1 w-32 rounded-full bg-gradient-to-r ${
          darkMode ? 'from-pink-500 to-purple-500' : 'from-purple-500 to-violet-500'
        } animate-pulse`}></div>
      </div>

      {/* Controls */}
      <div className={`p-6 rounded-lg border-2 shadow-lg mb-6 transition-all duration-300 ${cardClasses}`}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 ${
                darkMode ? 'focus:ring-pink-500' : 'focus:ring-purple-500'
              } ${inputClasses}`}
            />
          </div>

          {/* User Filter */}
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterUser}
              onChange={(e) => setFilterUser(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 ${
                darkMode ? 'focus:ring-pink-500' : 'focus:ring-purple-500'
              } ${inputClasses}`}
            >
              <option value="all">All Users</option>
              {users.map(user => (
                <option key={user} value={user}>{user}</option>
              ))}
            </select>
          </div>

          {/* Action Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterAction}
              onChange={(e) => setFilterAction(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 ${
                darkMode ? 'focus:ring-pink-500' : 'focus:ring-purple-500'
              } ${inputClasses}`}
            >
              <option value="all">All Actions</option>
              {actionTypes.map(action => (
                <option key={action} value={action}>{action.replace('_', ' ')}</option>
              ))}
            </select>
          </div>

          {/* Date Filter */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 ${
                darkMode ? 'focus:ring-pink-500' : 'focus:ring-purple-500'
              } ${inputClasses}`}
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>

        {/* Export Controls */}
        <div className="flex flex-wrap gap-3 items-center">
          <button
            onClick={selectAllLogs}
            className={`px-4 py-2 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            {selectedLogs.length === filteredLogs.length ? 'DESELECT ALL' : 'SELECT ALL'}
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={() => handleExport('csv')}
              className={`px-4 py-2 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg bg-gradient-to-r ${
                darkMode 
                  ? 'from-green-500 to-emerald-500' 
                  : 'from-green-600 to-emerald-600'
              } text-white flex items-center gap-2`}
            >
              <FileDown className="w-4 h-4" />
              EXPORT CSV
            </button>
            
            <button
              onClick={() => handleExport('json')}
              className={`px-4 py-2 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg bg-gradient-to-r ${
                darkMode 
                  ? 'from-blue-500 to-cyan-500' 
                  : 'from-blue-600 to-cyan-600'
              } text-white flex items-center gap-2`}
            >
              <Download className="w-4 h-4" />
              EXPORT JSON
            </button>
          </div>

          {selectedLogs.length > 0 && (
            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
              darkMode ? 'bg-pink-500/20 text-pink-400' : 'bg-purple-500/20 text-purple-600'
            }`}>
              {selectedLogs.length} SELECTED
            </span>
          )}
        </div>
      </div>

      {/* Logs Table */}
      <div className={`rounded-lg border-2 shadow-lg overflow-hidden ${cardClasses}`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <tr>
                <th className="p-4 text-left font-black uppercase text-sm tracking-wide">
                  <input
                    type="checkbox"
                    checked={selectedLogs.length === filteredLogs.length}
                    onChange={selectAllLogs}
                    className="rounded"
                  />
                </th>
                <th className="p-4 text-left font-black uppercase text-sm tracking-wide">TIMESTAMP</th>
                <th className="p-4 text-left font-black uppercase text-sm tracking-wide">USER</th>
                <th className="p-4 text-left font-black uppercase text-sm tracking-wide">ACTION</th>
                <th className="p-4 text-left font-black uppercase text-sm tracking-wide">TARGET</th>
                <th className="p-4 text-left font-black uppercase text-sm tracking-wide">DETAILS</th>
                <th className="p-4 text-left font-black uppercase text-sm tracking-wide">IP</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log, index) => (
                <tr 
                  key={log.id}
                  className={`border-t transition-all duration-200 hover:scale-[1.01] ${
                    darkMode 
                      ? 'border-gray-700 hover:bg-gray-700/50' 
                      : 'border-purple-100 hover:bg-purple-50'
                  } ${selectedLogs.includes(log.id) ? (darkMode ? 'bg-pink-500/10' : 'bg-purple-500/10') : ''}`}
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedLogs.includes(log.id)}
                      onChange={() => toggleLogSelection(log.id)}
                      className="rounded"
                    />
                  </td>
                  <td className="p-4">
                    <div className="font-mono text-sm">
                      {new Date(log.timestamp).toLocaleString()}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-bold text-sm ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      <div className={`w-2 h-2 rounded-full animate-pulse ${
                        darkMode ? 'bg-pink-400' : 'bg-purple-400'
                      }`}></div>
                      {log.user}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-bold text-sm border ${getActionColor(log.action)}`}>
                      {getActionIcon(log.action)}
                      {log.action.replace('_', ' ')}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold truncate max-w-xs" title={log.target}>
                      {log.target}
                    </div>
                    <div className="text-xs text-gray-500 font-mono">ID: {log.targetId}</div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm truncate max-w-xs" title={log.details}>
                      {log.details}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-mono text-sm text-gray-500">
                      {log.ip}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredLogs.length === 0 && (
          <div className="p-8 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">NO LOGS FOUND</h3>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Try adjusting your search filters
            </p>
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className={`p-4 rounded-lg border-2 shadow-lg ${cardClasses}`}>
          <div className="text-2xl font-black text-center">
            {filteredLogs.length}
          </div>
          <div className="text-sm font-bold text-center uppercase text-gray-500">
            Total Logs
          </div>
        </div>
        <div className={`p-4 rounded-lg border-2 shadow-lg ${cardClasses}`}>
          <div className="text-2xl font-black text-center">
            {users.length}
          </div>
          <div className="text-sm font-bold text-center uppercase text-gray-500">
            Active Users
          </div>
        </div>
        <div className={`p-4 rounded-lg border-2 shadow-lg ${cardClasses}`}>
          <div className="text-2xl font-black text-center">
            {actionTypes.length}
          </div>
          <div className="text-sm font-bold text-center uppercase text-gray-500">
            Action Types
          </div>
        </div>
        <div className={`p-4 rounded-lg border-2 shadow-lg ${cardClasses}`}>
          <div className="text-2xl font-black text-center">
            {selectedLogs.length}
          </div>
          <div className="text-sm font-bold text-center uppercase text-gray-500">
            Selected
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogsPanel;