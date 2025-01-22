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

  return (
    <div className="paper-container">
      <div className="sheet">
        <div className="paper-content">
          <Header />
          <nav className="paper-nav">
            <button 
              className={`nav-tab ${activeTab === 'introduction' ? 'active' : ''}`}
              onClick={() => setActiveTab('introduction')}
            >
              <span role="img" aria-label="introduction">👋</span> Introduction
            </button>
            <button 
              className={`nav-tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <span role="img" aria-label="experience">💼</span> Experience
            </button>
            <button 
              className={`nav-tab ${activeTab === 'journey' ? 'active' : ''}`}
              onClick={() => setActiveTab('journey')}
            >
              <span role="img" aria-label="journey">🚀</span> Journey
            </button>
          </nav>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
