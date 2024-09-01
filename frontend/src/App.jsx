import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormScreen } from './FormScreen';
import { Home } from './Home';

const App=()=> {
  return (<Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-screen" element={<FormScreen />} />
        </Routes>
    </Router>);
};

export default App
