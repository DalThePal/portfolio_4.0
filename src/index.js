import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Providers from 'components/Providers'
import gsap, { ScrollTrigger, Draggable, InertiaPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin)

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
