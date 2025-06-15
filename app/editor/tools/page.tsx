'use client'
import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Edit3, FileText, BarChart3, Search, Check, 
  AlertCircle, Copy, Save, Eye, Settings, Plus, Star,
  Zap, Target, Clock, Users, TrendingUp, BookOpen
} from 'lucide-react';

const MangaNewsEditor = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [articleContent, setArticleContent] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('review');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [seoScore, setSeoScore] = useState(0);

  useEffect(() => {
    const words = articleContent.trim().split(/\s+/).filter(word => word.length > 0).length;
    const chars = articleContent.length;
    setWordCount(words);
    setCharCount(chars);
    
    // Simple SEO score calculation
    const titleLength = articleTitle.length;
    const contentLength = articleContent.length;
    let score = 0;
    if (titleLength >= 30 && titleLength <= 60) score += 25;
    if (contentLength >= 300) score += 25;
    if (articleTitle.toLowerCase().includes('anime') || articleTitle.toLowerCase().includes('manga')) score += 25;
    if (contentLength >= 800) score += 25;
    setSeoScore(score);
  }, [articleContent, articleTitle]);

  const templates = {
    review: {
      title: 'Anime/Manga Review Template',
      content: `# [Title] Review: [Rating]/10

## Overview
Brief introduction to the series, genre, and what makes it special.

## Story & Plot
Detailed analysis of the storyline, pacing, and narrative structure.

## Characters
Character development, voice acting (for anime), and memorable personalities.

## Art & Animation
Visual style, animation quality, and artistic direction.

## Final Verdict
Overall recommendation and target audience.

**Rating: [X]/10**
**Recommended for:** [Target audience]`
    },
    listicle: {
      title: 'Top List Article Template',
      content: `# Top [Number] [Topic] That Will [Action]

## Introduction
Hook readers with why this list matters and what they'll discover.

## [Number]. [Item Title]
**Why it's amazing:** Brief description
**Key highlight:** Most memorable aspect

## [Number]. [Item Title]
**Why it's amazing:** Brief description
**Key highlight:** Most memorable aspect

## [Number]. [Item Title]
**Why it's amazing:** Brief description
**Key highlight:** Most memorable aspect

## Conclusion
Wrap up with final thoughts and call-to-action.`
    },
    news: {
      title: 'Breaking News Template',
      content: `# BREAKING: [Headline]

## What Happened
Core facts of the story in the first paragraph.

## Key Details
- **When:** [Date/Time]
- **Where:** [Location/Platform]
- **Who:** [People/Companies involved]
- **Impact:** [What this means for fans]

## Background
Context and history relevant to this news.

## What's Next
Expected developments and timeline.

## Fan Reactions
Community response and social media highlights.`
    }
  };

  const seoChecklist = [
    { item: 'Title length (30-60 characters)', passed: articleTitle.length >= 30 && articleTitle.length <= 60 },
    { item: 'Content length (300+ words)', passed: wordCount >= 300 },
    { item: 'Contains target keywords', passed: articleTitle.toLowerCase().includes('anime') || articleTitle.toLowerCase().includes('manga') },
    { item: 'Substantial content (800+ words)', passed: wordCount >= 800 },
  ];

  const themeClasses = darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-blue-50 text-gray-900';

  const cardClasses = darkMode
    ? 'bg-gray-800 border-pink-500/20'
    : 'bg-white border-violet-200';

  const accentColor = darkMode ? 'text-pink-400' : 'text-violet-600';
  const buttonPrimary = darkMode 
    ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700' 
    : 'bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700';

  const TabButton = ({ id, icon: Icon, label, active }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 ${
        active 
          ? `${buttonPrimary} text-white shadow-lg`
          : `${cardClasses} border-2 hover:border-opacity-50`
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  const StatCard = ({ icon: Icon, label, value, subtitle }) => (
    <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="flex items-center gap-4">
        <div className={`${darkMode ? 'bg-pink-500/20 text-pink-400' : 'bg-violet-100 text-violet-600'} p-3 rounded-full`}>
          <Icon size={24} />
        </div>
        <div>
          <div className={`text-2xl font-black ${accentColor}`}>{value}</div>
          <div className="font-bold text-sm uppercase tracking-wide opacity-80">{label}</div>
          {subtitle && <div className="text-xs opacity-60">{subtitle}</div>}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-32 h-32 ${darkMode ? 'bg-pink-500/5' : 'bg-violet-500/5'} rounded-full animate-pulse`}></div>
        <div className={`absolute bottom-32 left-16 w-24 h-24 ${darkMode ? 'bg-pink-400/10' : 'bg-violet-400/10'} rounded-full animate-bounce`}></div>
      </div>

      {/* Header */}
      <header className={`${cardClasses} border-b-4 ${darkMode ? 'border-pink-500' : 'border-violet-500'} shadow-lg relative z-10`}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`${buttonPrimary} p-3 rounded-full shadow-lg`}>
                <Zap className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-3xl font-black uppercase tracking-tight">
                  <span className={accentColor}>OTAKU</span> PRESS
                </h1>
                <p className="text-sm opacity-70 font-semibold">Editorial Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`${cardClasses} border-2 p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-4">
          <TabButton id="dashboard" icon={BarChart3} label="Dashboard" active={activeTab === 'dashboard'} />
          <TabButton id="editor" icon={Edit3} label="Editor" active={activeTab === 'editor'} />
          <TabButton id="templates" icon={FileText} label="Templates" active={activeTab === 'templates'} />
          <TabButton id="tools" icon={Settings} label="Tools" active={activeTab === 'tools'} />
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-12">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black uppercase mb-2 drop-shadow-lg">
                <span className={accentColor}>EDITORIAL</span> OVERVIEW
              </h2>
              <div className={`h-1 w-32 ${darkMode ? 'bg-gradient-to-r from-pink-500 to-pink-600' : 'bg-gradient-to-r from-violet-500 to-violet-600'} rounded-full`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard icon={FileText} label="Articles" value="47" subtitle="This month" />
              <StatCard icon={TrendingUp} label="Views" value="2.3M" subtitle="Total views" />
              <StatCard icon={Users} label="Engagement" value="89%" subtitle="Avg. rate" />
              <StatCard icon={Star} label="Rating" value="4.8" subtitle="User score" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className={`${cardClasses} border-2 rounded-lg p-8 shadow-lg`}>
                <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                  <BookOpen className={accentColor} size={24} />
                  Recent Articles
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Attack on Titan Final Season Review", status: "Published", views: "45K" },
                    { title: "Top 10 Spring 2024 Anime", status: "Draft", views: "0" },
                    { title: "Demon Slayer Movie Analysis", status: "Review", views: "12K" }
                  ].map((article, idx) => (
                    <div key={idx} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} hover:scale-[1.02] transition-transform`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold">{article.title}</h4>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase ${
                            article.status === 'Published' ? 'bg-green-500/20 text-green-400' :
                            article.status === 'Draft' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {article.status}
                          </span>
                        </div>
                        <span className="text-sm opacity-70 font-semibold">{article.views} views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${cardClasses} border-2 rounded-lg p-8 shadow-lg`}>
                <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                  <Target className={accentColor} size={24} />
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Plus, label: "New Article", action: () => setActiveTab('editor') },
                    { icon: FileText, label: "Templates", action: () => setActiveTab('templates') },
                    { icon: Search, label: "SEO Check", action: () => setActiveTab('tools') },
                    { icon: Settings, label: "Tools", action: () => setActiveTab('tools') }
                  ].map((action, idx) => (
                    <button
                      key={idx}
                      onClick={action.action}
                      className={`${buttonPrimary} text-white p-4 rounded-lg font-bold uppercase text-sm hover:scale-105 transition-all duration-300 shadow-lg flex flex-col items-center gap-2`}
                    >
                      <action.icon size={24} />
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'editor' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black uppercase mb-2 drop-shadow-lg">
                <span className={accentColor}>ARTICLE</span> EDITOR
              </h2>
              <div className={`h-1 w-32 ${darkMode ? 'bg-gradient-to-r from-pink-500 to-pink-600' : 'bg-gradient-to-r from-violet-500 to-violet-600'} rounded-full`}></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <StatCard icon={FileText} label="Words" value={wordCount} />
              <StatCard icon={Edit3} label="Characters" value={charCount} />
              <StatCard icon={Target} label="SEO Score" value={`${seoScore}%`} />
              <StatCard icon={Clock} label="Est. Read" value={`${Math.ceil(wordCount / 200)} min`} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg`}>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Article Title"
                      value={articleTitle}
                      onChange={(e) => setArticleTitle(e.target.value)}
                      className={`w-full p-4 rounded-lg font-bold text-xl border-2 ${
                        darkMode ? 'bg-gray-700 border-gray-600 focus:border-pink-500' : 'bg-white border-gray-200 focus:border-violet-500'
                      } focus:outline-none transition-colors`}
                    />
                  </div>
                  <textarea
                    placeholder="Start writing your article..."
                    value={articleContent}
                    onChange={(e) => setArticleContent(e.target.value)}
                    className={`w-full h-96 p-4 rounded-lg border-2 ${
                      darkMode ? 'bg-gray-700 border-gray-600 focus:border-pink-500' : 'bg-white border-gray-200 focus:border-violet-500'
                    } focus:outline-none transition-colors resize-none`}
                  />
                  <div className="flex gap-4 mt-6">
                    <button className={`${buttonPrimary} text-white px-6 py-3 rounded-full font-bold uppercase text-sm hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2`}>
                      <Save size={16} />
                      Save Draft
                    </button>
                    <button className={`${cardClasses} border-2 px-6 py-3 rounded-full font-bold uppercase text-sm hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2`}>
                      <Eye size={16} />
                      Preview
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg`}>
                  <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                    <Target className={accentColor} size={20} />
                    SEO Checklist
                  </h3>
                  <div className="space-y-3">
                    {seoChecklist.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`p-1 rounded-full ${item.passed ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                          {item.passed ? <Check className="text-green-400" size={16} /> : <AlertCircle className="text-red-400" size={16} />}
                        </div>
                        <span className="text-sm">{item.item}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`mt-4 p-3 rounded-lg ${seoScore >= 75 ? 'bg-green-500/20' : seoScore >= 50 ? 'bg-yellow-500/20' : 'bg-red-500/20'}`}>
                    <div className="text-sm font-bold">SEO Score: {seoScore}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black uppercase mb-2 drop-shadow-lg">
                <span className={accentColor}>ARTICLE</span> TEMPLATES
              </h2>
              <div className={`h-1 w-32 ${darkMode ? 'bg-gradient-to-r from-pink-500 to-pink-600' : 'bg-gradient-to-r from-violet-500 to-violet-600'} rounded-full`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(templates).map(([key, template]) => (
                <div key={key} className={`${cardClasses} border-2 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                  <h3 className="text-xl font-black uppercase mb-4">{template.title}</h3>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} text-sm font-mono h-40 overflow-hidden`}>
                    <pre className="whitespace-pre-wrap opacity-70">
                      {template.content.substring(0, 200)}...
                    </pre>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => {
                        setSelectedTemplate(key);
                        setArticleContent(template.content);
                        setActiveTab('editor');
                      }}
                      className={`${buttonPrimary} text-white px-4 py-2 rounded-full font-bold uppercase text-xs hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2`}
                    >
                      <Edit3 size={14} />
                      Use Template
                    </button>
                    <button
                      onClick={() => navigator.clipboard.writeText(template.content)}
                      className={`${cardClasses} border-2 px-4 py-2 rounded-full font-bold uppercase text-xs hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2`}
                    >
                      <Copy size={14} />
                      Copy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black uppercase mb-2 drop-shadow-lg">
                <span className={accentColor}>EDITOR</span> TOOLS
              </h2>
              <div className={`h-1 w-32 ${darkMode ? 'bg-gradient-to-r from-pink-500 to-pink-600' : 'bg-gradient-to-r from-violet-500 to-violet-600'} rounded-full`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`${cardClasses} border-2 rounded-lg p-8 shadow-lg`}>
                <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                  <BarChart3 className={accentColor} size={24} />
                  Word Counter
                </h3>
                <textarea
                  placeholder="Paste your text here to analyze..."
                  className={`w-full h-32 p-4 rounded-lg border-2 ${
                    darkMode ? 'bg-gray-700 border-gray-600 focus:border-pink-500' : 'bg-white border-gray-200 focus:border-violet-500'
                  } focus:outline-none transition-colors resize-none`}
                  onChange={(e) => {
                    const text = e.target.value;
                    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
                    const chars = text.length;
                    e.target.nextElementSibling.innerHTML = `
                      <div class="grid grid-cols-2 gap-4">
                        <div class="text-center">
                          <div class="text-2xl font-black ${accentColor}">${words}</div>
                          <div class="text-sm opacity-70">Words</div>
                        </div>
                        <div class="text-center">
                          <div class="text-2xl font-black ${accentColor}">${chars}</div>
                          <div class="text-sm opacity-70">Characters</div>
                        </div>
                      </div>
                    `;
                  }}
                />
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className={`text-2xl font-black ${accentColor}`}>0</div>
                      <div className="text-sm opacity-70">Words</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-black ${accentColor}`}>0</div>
                      <div className="text-sm opacity-70">Characters</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${cardClasses} border-2 rounded-lg p-8 shadow-lg`}>
                <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                  <Search className={accentColor} size={24} />
                  Plagiarism Check
                </h3>
                <textarea
                  placeholder="Enter text to check for originality..."
                  className={`w-full h-32 p-4 rounded-lg border-2 ${
                    darkMode ? 'bg-gray-700 border-gray-600 focus:border-pink-500' : 'bg-white border-gray-200 focus:border-violet-500'
                  } focus:outline-none transition-colors resize-none`}
                />
                <button className={`${buttonPrimary} text-white px-6 py-3 rounded-full font-bold uppercase text-sm hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 w-full justify-center mt-4`}>
                  <Search size={16} />
                  Check Originality
                </button>
                <div className="mt-4 p-4 bg-green-500/20 text-green-400 rounded-lg text-center">
                  <div className="font-bold">✓ Original Content</div>
                  <div className="text-sm opacity-70">No matches found</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MangaNewsEditor;