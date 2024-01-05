import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContent from 'components/AppContent/AppContent'; 
import 'assets/styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  );
}

export default App;