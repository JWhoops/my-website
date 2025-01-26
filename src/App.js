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
          <nav className="border">
            <div className="nav-brand">
              {/* Remove the h4 with "Navigation" text */}
            </div>
            <div className="collapsible">
              <input id="collapsible1" type="checkbox" name="collapsible1" />
              <label htmlFor="collapsible1">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </label>
              <div className="collapsible-body">
                <ul className="inline">
                  {tabs.map(tab => (
                    <li key={tab.id}>
                      <a 
                        href="#!"
                        className={activeTab === tab.id ? 'active' : ''}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(tab.id);
                        }}
                      >
                        <span role="img" aria-label={tab.label}>{tab.emoji}</span> {tab.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
