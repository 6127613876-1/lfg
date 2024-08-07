import React from 'react';

import Movie from './routes/Movie'
import { Route, Routes } from "react-router-dom";
import './App.css'; // Include CSS for general styles

const App = () => {
  return (
    <>
      <Routes>
            <Route path="/" element={<Movie />}/>
      </Routes>
    </>
  );
}

export default App;
