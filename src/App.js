import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { useAuthContext } from 'context/AuthContext';
import AdminSidebar from 'components/AdminSidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const [isWhite, setIsWhite] = useState(false);
  const updateisWhite = (isWhite) => {
    setIsWhite(isWhite);
  };
  const pageRef = useRef();
  // const { isAdmin } = useAuthContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header isWhite={isWhite} updateisWhite={updateisWhite} />
      <div ref={pageRef} className="page_background">
        <Outlet context={updateisWhite} />
      </div>
    </QueryClientProvider>
  );
}
/*<div style={{ display: 'flex', width: '100%' }}>
       {isAdmin && <AdminSidebar />} 
      <div>
        <Header isWhite={isWhite} updateisWhite={updateisWhite} />
        <div ref={pageRef} className={`page_background ${isAdmin && 'admin'}`}>
          <Outlet context={updateisWhite} />
        </div>
      </div>
  </div>*/

export default App;
