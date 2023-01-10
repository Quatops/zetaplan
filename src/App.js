import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
function App() {
  const [activeNav, setActiveNav] = useState(false);
  const updateActiveNav = (isActive) => {
    setActiveNav(isActive);
  };
  return (
    <div className="App">
      <Header activeNav={activeNav} updateActiveNav={updateActiveNav} />
      <Outlet context={updateActiveNav} />
    </div>
  );
}

export default App;
