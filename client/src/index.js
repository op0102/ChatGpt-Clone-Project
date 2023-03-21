import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import DataProvider from './component/context/DataProvider';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <DataProvider>

    <React.StrictMode>

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </DataProvider>

);

reportWebVitals();





