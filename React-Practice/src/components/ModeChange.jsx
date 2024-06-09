import React, { useState } from 'react';

export default function ModeChange() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`modechange ${mode}`}>
      <button onClick={toggleMode}>Toggle Mode</button>
    </div>
  );
}
