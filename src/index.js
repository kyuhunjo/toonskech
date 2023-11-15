import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Import the main App component
import './styles/main.css'; // Global styles

// If you're using a service worker, import it as well
// import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you use service workers in your project, you can uncomment the next line
// serviceWorker.unregister(); // Change to .register() to enable service workers
