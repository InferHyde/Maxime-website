import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Nav'
import Footbar from './Footbar'
import Homepage from './Homepage'
import Swiper from './Swiper'
import Menu_filter from './Menu_filter';

ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
      {/* <Menu_filter /> */}
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

