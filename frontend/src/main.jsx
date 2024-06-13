import React from 'react';
import ReactDOM from 'react-dom/client';  // Ensure you're importing from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './App';
import './index.css';

// Create the root element
const rootElement = document.getElementById('root');

// Check if root element is found
if (rootElement) {
  // Create a root
  const root = ReactDOM.createRoot(rootElement);

  // Render the application
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
} else {
  console.error("Root element not found");
}
