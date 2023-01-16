import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const [isWhite, setIsWhite] = useState(false);
  const updateisWhite = (isWhite) => {
    setIsWhite(isWhite);
  };
  const pageRef = useRef();

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header isWhite={isWhite} updateisWhite={updateisWhite} />
      <div ref={pageRef} className="page_background">
        <Outlet context={updateisWhite} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
