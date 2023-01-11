import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
function App() {
  const [isWhite, setIsWhite] = useState(false);
  const updateisWhite = (isWhite) => {
    setIsWhite(isWhite);
  };
  return (
    <div className="App">
      <Header isWhite={isWhite} updateisWhite={updateisWhite} />
      <div className="page_background">
        <Outlet context={updateisWhite} />
      </div>
    </div>
  );
}

export default App;
