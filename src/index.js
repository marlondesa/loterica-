import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';
import './styles/global.css';
import './styles/lottery.css';
import './styles/theme.css';
import './styles/weather.css';
import './styles/lottery-home.css';
import './styles/lottery-results.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);