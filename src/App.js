import React, { useState } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Journey from './components/Journey';
import Skills from './components/Skills';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('introduction');

  const renderContent = () => {
    switch (activeTab) {
      case 'introduction':
        return (
          <>
            <Introduction />
            <Skills />
          </>
        );
      case 'experience':
        return <Experience />;
      case 'journey':
        return <Journey />;
      default:
        return <Introduction />;
    }
  };

  const tabs = [
    { id: 'introduction', label: 'Introduction', emoji: '👋' },
    { id: 'experience', label: 'Experience', emoji: '💼' },
    { id: 'journey', label: 'Journey', emoji: '🚀' }
  ];

  return (
    <div className="paper-container">
      <div className="sheet">
        <div className="paper-content">
          <Header />
          <nav className="paper-nav">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span role="img" aria-label={tab.label}>{tab.emoji}</span> {tab.label}
              </button>
            ))}
          </nav>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
