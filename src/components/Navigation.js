import React from 'react';

function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'about', label: '👤 About Me', emoji: '👤' },
    { id: 'journey', label: '🚀 Journey', emoji: '🚀' },
    { id: 'experience', label: '💼 Experience', emoji: '💼' },
    { id: 'projects', label: '💡 Projects', emoji: '💡' },
    { id: 'education', label: '📚 Education', emoji: '📚' }
  ];

  return (
    <nav className="paper-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default Navigation; 