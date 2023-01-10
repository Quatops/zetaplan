import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
function App() {
  const [isWhite, setIsWhite] = useState(false);
  const updateisWhite = (isWhite) => {
    setIsWhite(isWhite);
  };
  return (
    <div className="App">
      <Header isWhite={isWhite} updateisWhite={updateisWhite} />
      <Outlet context={updateisWhite} />
    </div>
  );
}

export default App;
