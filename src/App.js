import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuperfluidStream from './components/SuperfluidStream';
import Distribute from './components/distribute/Distribute';
import Stream from './components/stream/Stream';
import Swap from './components/swap/Swap';
import Withdraw from './components/withdraw/Withdraw';

function App() {
  return (
    <Router>
      <Routes>
         <Route path='*' element={<SuperfluidStream />} />
         <Route path='/swap/*' element={<Swap />} />
         <Route path='/withdraw/*' element={<Withdraw />} />
         <Route path='/stream/*' element={<Stream />} />
         <Route path='/distribute/*' element={<Distribute />} />
      </Routes>
    </Router>
  );
}

export default App;