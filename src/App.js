import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { useAuthContext } from 'context/AuthContext';

function App() {
  const [isWhite, setIsWhite] = useState(false);
  const updateisWhite = (isWhite) => {
    setIsWhite(isWhite);
  };
  const pageRef = useRef();

  return (
    <div>
      <Header isWhite={isWhite} updateisWhite={updateisWhite} />
      <div ref={pageRef} className="page_background">
        <Outlet context={updateisWhite} />
      </div>
    </div>
  );
}

export default App;
