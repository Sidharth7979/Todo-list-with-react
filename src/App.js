import React, { useState } from 'react';
import Home from './components/todo-home';
import './App.css'; // Ensure this CSS file has styles for .app and .dark-mode

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app'}>
      <Home isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
    </div>
  );
}
