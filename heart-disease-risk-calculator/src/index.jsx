import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './Form/Form';
import reportWebVitals from './reportWebVitals';
import "@fontsource/open-sans";
import "@fontsource/open-sans/400.css"; 
import "@fontsource/open-sans/400-italic.css"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);


reportWebVitals();
