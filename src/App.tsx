import React from 'react';
import { BrowserRouter as Routes } from 'react-router-dom';
import RouteContainer from './routes/RouterContainer';

function App() {
  return (
    <Routes>
      <RouteContainer />
    </Routes>
  );
}

export default App;
