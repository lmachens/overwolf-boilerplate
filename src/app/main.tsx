import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import App from './App';
import { waitForOverwolf } from './utils/overwolf';

waitForOverwolf().then(() => {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.querySelector('#root')
  );
});
