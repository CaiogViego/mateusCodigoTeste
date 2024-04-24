import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import Home from '../src/Pages/Home';
import CaiosPage from '../src/Pages/caiospage';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/c" element={<CaiosPage />} />

      {/* <Route path="users/*" element={<Users />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
