import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Snackbar from './components/snackbar';
import { ContactsProvider } from './components/ContactsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactsProvider>
      <App />
    </ContactsProvider>
    <Snackbar />
  </React.StrictMode>
);
