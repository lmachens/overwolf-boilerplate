import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import Dev from './Dev';
import { waitForOverwolf } from './utils/overwolf';

waitForOverwolf().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Dev />
    </React.StrictMode>,
    document.querySelector('#root')
  );
});
