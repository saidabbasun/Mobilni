import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Mode from './context';
import  './index.css'


ReactDOM.render(
  <React.StrictMode>
    <Mode>
      <App />
    </Mode>
  </React.StrictMode>,
  document.getElementById("root")
);
