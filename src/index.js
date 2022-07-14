import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Snackbar from './components/snackbar';
import { ContactsProvider } from './components/ContactsContext';
import ContactEditPage from "./components/ContactEditPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
          </Route>
          <Route path="edit" element={<ContactEditPage />}>
          <Route path=":userId" element={<ContactEditPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContactsProvider>
    <Snackbar />
  </React.StrictMode>
);
